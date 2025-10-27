import React, { useEffect, useState } from "react";
import { loginStyles } from "../assets/dummyStyles";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaEye, FaEyeSlash, FaLock, FaUser } from "react-icons/fa";
import logo from "../assets/logocar.png";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [isActive, setIsActive] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setIsActive(true);
  }, []);

  const handleChange = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    try {
      const base = "http://localhost:5000";
      const url = `${base}/api/auth/login`;
      const res = await axios.post(url, credentials, {
        headers: { "Content-Type": "application/json" },
      });
      if (res.status >= 200 && res.status < 300) {
        const { token, user, message } = res.data || {};
        if (token) localStorage.setItem("token", token);
        if (user) localStorage.setItem("user", JSON.stringify(user));

        toast.success(message || "Login Successful! Welcome back", {
          position: "top-right",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
          onClose: () => {
            const redirectPath = "/";
            navigate(redirectPath, { replace: true });
          },
          autoClose: 1000,
        });
      } else {
        toast.error("Unexpected error from the server", {
          theme: "colored",
        });
      }
    } catch (err) {
      console.error("Login error (frontend):", err);
      if (err.response) {
        const serverMessage =
          err.response.data?.message ||
          err.response.data?.error ||
          `Server error: ${err.response.status}`;
        toast.error(serverMessage, { theme: "colored" });
      } else if (err.request) {
        toast.error("No response from server — is backend running?", {
          theme: "colored",
        });
      } else {
        toast.error(err.message || "Login failed", { theme: "colored" });
      }
    } finally {
      setloading(false);
    }
  };

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  return (
    <div className={loginStyles.pageContainer}>
      <div className={loginStyles.animatedBackground.base}>
        <div
          className={`${loginStyles.animatedBackground.orb1} ${
            isActive ? "translate-x-20 translate-y-10" : ""
          }`}
        />
        <div
          className={`${loginStyles.animatedBackground.orb2} ${
            isActive ? "-translate-x-20 -translate-y-10" : ""
          }`}
        />
        <div
          className={`${loginStyles.animatedBackground.orb3} ${
            isActive ? "-translate-x-10 translate-y-20" : ""
          }`}
        />
      </div>
      <a href="/" className={loginStyles.backButton}>
        <FaArrowLeft className="text-sm sm:text-base" />
        <span className="font-medium text-xs sm:text-sm">Back to Home</span>
      </a>

      <div
        className={`${loginStyles.loginCard.container} ${
          isActive ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}
      >
        <div className={loginStyles.loginCard.card}>
          <div className={loginStyles.loginCard.decor1} />
          <div className={loginStyles.loginCard.decor2} />
          <div className={loginStyles.loginCard.headerContainer}>
            <div className={loginStyles.loginCard.logoContainer}>
              <div className={loginStyles.loginCard.logoText}>
                <img
                  src={logo}
                  alt="logo"
                  className="h-[1em] w-auto block"
                  style={{ display: "block", objectFit: "contain" }}
                />
                <span className="font-bold tracking-wider">KARZONE</span>
              </div>
            </div>
            <h1 className={loginStyles.loginCard.title}>PremiumDrive</h1>
            <p className={loginStyles.loginCard.subtitle}>
              LUXUARY MOBILITY EXPERIENCE
            </p>
          </div>
          <form onSubmit={handleSubmit} className={loginStyles.form.container}>
            <div className={loginStyles.form.inputContainer}>
              <div className={loginStyles.form.inputWrapper}>
                <div className={loginStyles.form.inputIcon}>
                  <FaUser />
                </div>
                <input
                  type="email"
                  name="email"
                  value={credentials.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className={loginStyles.form.input}
                />
              </div>
            </div>
            <div className={loginStyles.form.inputContainer}>
              <div className={loginStyles.form.inputWrapper}>
                <div className={loginStyles.form.inputIcon}>
                  <FaLock />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                  className={loginStyles.form.input}
                />
                <div
                  onClick={togglePasswordVisibility}
                  className={loginStyles.form.passwordToggle}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className={loginStyles.form.submitButton}
            >
              <span className={loginStyles.form.buttonText}>
                {loading ? "SIGNING IN..." : "ACCESS PREMIUM GARAGE"}
              </span>
              <div className={loginStyles.form.buttonHover} />
            </button>
          </form>
          <div className={loginStyles.signupSection}>
            <p className={loginStyles.signupText}>Don't have an account?</p>
            <a href="/signup" className={loginStyles.signupButton}>
              CREATE ACCOUNT
            </a>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        toastStyle={{
          backgroundColor: "#fb923c",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(249, 115, 22, 0.25)",
        }}
      />
    </div>
  );
};

export default Login;
