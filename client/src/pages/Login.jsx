import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios";
import { useAuth } from "../context/AuthContext";

import AuthLayout from "../components/AuthLayout";
import GlassCard from "../components/GlassCard";
import InputField from "../components/InputField";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();

  const { setUser } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!formData.email.trim()) {
        toast.error("Please enter your email address.");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(formData.email.trim())) {
        toast.error("Please enter a valid email address.");
        return;
      }

      if (!formData.password.trim()) {
        toast.error("Please enter your password.");
        return;
      }

      const response = await api.post("/auth/login", {
        email: formData.email.trim().toLowerCase(),
        password: formData.password,
      });

      setUser(response.data.user);

      toast.success("Login successful!");

      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to continue your journey"
    >
      <GlassCard>
        <form onSubmit={handleSubmit}>
          <InputField
            label="Email Address"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />

          <InputField
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="
              w-full

              mt-2
              sm:mt-3

              py-3
              sm:py-3.5

              rounded-lg
              sm:rounded-xl

              bg-[#111111]

              text-sm
              sm:text-base

              text-white

              font-medium

              transition-all
              duration-300

              hover:bg-[#B87333]

              hover:shadow-lg
            "
          >
            Login
          </button>

          <div
            className="
              mt-5
              sm:mt-6

              text-center
            "
          >
            <p
              className="
                text-xs
                sm:text-sm

                text-gray-600
              "
            >
              Don't have an account?{" "}
              <Link
                to="/register"
                className="
                  font-semibold
                  text-[#B87333]
                  hover:underline
                "
              >
                Create one
              </Link>
            </p>
          </div>
        </form>
      </GlassCard>
    </AuthLayout>
  );
};

export default Login;
