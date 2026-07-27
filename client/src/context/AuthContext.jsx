import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const checkAuth = async () => {
    try {
      // First try with existing access token
      const response = await api.get("/user/profile");

      setUser(response.data.user);
    } catch (error) {
      // If access token expired, try refreshing it
      if (error.response?.status === 401) {
        try {
          await api.post("/auth/refresh");

          // Retry getting user after new access token
          const response = await api.get("/user/profile");

          setUser(response.data.user);
        } catch (refreshError) {
          setUser(null);
        }
      } else {
        console.error(
          error.response?.data?.message || "Authentication check failed",
        );

        setUser(null);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const publicRoutes = ["/login", "/register"];

    if (publicRoutes.includes(window.location.pathname)) {
      setLoading(false);

      return;
    }

    checkAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
