
import { useState } from "react";
import api from "../api/axios";

import AuthLayout from "../components/AuthLayout";
import GlassCard from "../components/GlassCard";
import InputField from "../components/InputField";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
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

    if (loading) return;

    // Client-side validation
    if (!formData.name.trim()) {
      toast.error("Please enter your full name.");
      return;
    }

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

    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }

    try {
      setLoading(true);

      await api.post("/auth/register", {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        password: formData.password,
      });

      toast.success("Registration successful!");

      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Start your journey by creating your account"
    >
      <GlassCard>
        <form
          onSubmit={handleSubmit}
          className="
            space-y-4
            sm:space-y-5
          "
        >
          <InputField
            label="Full Name"
            name="name"
            type="text"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
          />

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
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
          />

          <button
            type="submit"
            disabled={loading}
            className="
              w-full

              rounded-lg
              sm:rounded-xl

              bg-[#111111]

              py-3
              sm:py-3.5

              text-sm
              sm:text-base

              font-medium

              text-white

              transition-all
              duration-300

              hover:bg-[#B87333]
              hover:shadow-lg

              disabled:opacity-60
              disabled:cursor-not-allowed
            "
          >
            {loading ? "Creating Account..." : "Create Account"}
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
              Already have an account?{" "}
              <Link
                to="/login"
                className="
                  font-semibold
                  text-[#B87333]
                  hover:underline
                "
              >
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </GlassCard>
    </AuthLayout>
  );
};

export default Register;