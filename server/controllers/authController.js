import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// REGISTER API
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User registered successfully",

      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// LOGIN API
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    // Access Token (short-lived)
    const accessToken = jwt.sign(
      {
        id: user._id,
      },

      process.env.ACCESS_TOKEN_SECRET,

      {
        expiresIn: "15m",
      },
    );

    // Refresh Token (long-lived)
    const refreshToken = jwt.sign(
      {
        id: user._id,
      },

      process.env.REFRESH_TOKEN_SECRET,

      {
        expiresIn: "7d",
      },
    );

    // Save refresh token in database
    user.refreshToken = refreshToken;

    await user.save();

    // Store Access Token Cookie
    res.cookie("accessToken", accessToken, {
      httpOnly: true,

      secure: process.env.NODE_ENV === "production",

      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",

      maxAge: 15 * 60 * 1000,
    });

    // Store Refresh Token Cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,

      secure: process.env.NODE_ENV === "production",

      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",

      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      message: "Login successful",

      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// REFRESH ACCESS TOKEN API
export const refreshAccessToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(401).json({
        message: "Refresh token missing",
      });
    }

    const user = await User.findOne({
      refreshToken,
    });

    if (!user) {
      return res.status(403).json({
        message: "Invalid refresh token",
      });
    }

    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (error, decoded) => {
        if (error) {
          return res.status(403).json({
            message: "Refresh token expired",
          });
        }

        const newAccessToken = jwt.sign(
          {
            id: decoded.id,
          },

          process.env.ACCESS_TOKEN_SECRET,

          {
            expiresIn: "15m",
          },
        );

        res.cookie("accessToken", newAccessToken, {
          httpOnly: true,

          secure: process.env.NODE_ENV === "production",

          sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",

          maxAge: 15 * 60 * 1000,
        });

        res.status(200).json({
          message: "Access token refreshed",
        });
      },
    );
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// LOGOUT API
export const logout = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;

    if (refreshToken) {
      await User.findOneAndUpdate(
        {
          refreshToken,
        },

        {
          refreshToken: null,
        },
      );
    }

    res.clearCookie("accessToken");

    res.clearCookie("refreshToken");

    res.clearCookie("token");

    res.status(200).json({
      message: "Logout successful",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
