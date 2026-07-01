import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../../styles/EmployeeLogin.css";

import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash
} from "react-icons/fa";

import { FcGoogle } from "react-icons/fc";

function EmployeeLogin() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!emailOrPhone.trim()) {
      alert("Please enter Email or Phone Number");
      return;
    }

    if (!password.trim()) {
      alert("Please enter Password");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    alert("Login Successful ✅");

    navigate("/home");
  };

  return (
    <div className="login-page">

      <div className="left-section">

        <div className="logo">
          <h1>ManageHub</h1>
          <p>Employee Management System</p>
        </div>

        <div className="content">
          <h2>
            Welcome Back.
            <br />
            Login To Continue.
          </h2>

          <p>
            Manage employees, attendance,
            leave, payroll and much more —
            all in one place.
          </p>
        </div>

      </div>

      <div className="right-section">

        <div className="login-card">

          <h2>
            Login <span>Account</span>
          </h2>

          {/* Email or Phone */}
          <div className="input-group">
            <FaEnvelope className="input-icon" />

            <input
              type="text"
              placeholder="Email or Phone Number"
              value={emailOrPhone}
              onChange={(e) =>
                setEmailOrPhone(e.target.value)
              }
            />
          </div>

          {/* Password */}
          <div className="input-group">
            <FaLock className="input-icon" />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

            <button
              type="button"
              className="eye-btn"
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >
              {showPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </button>
          </div>

          {/* Login Button */}
          <button
            className="login-btn"
            onClick={handleLogin}
          >
            Login
          </button>

          {/* Divider */}
          <div className="divider">
            <span>OR</span>
          </div>

          {/* Google Login */}
          <button className="google-btn">
            <FcGoogle size={26} />
            Continue with Google
          </button>

          {/* Create Account */}
          <p className="signup-link">
            Don't have an account?
            <span
              onClick={() => navigate("/")}
              style={{ cursor: "pointer" }}
            >
              Create Account
            </span>
          </p>

        </div>

      </div>

    </div>
  );
}

export default EmployeeLogin;