import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/EmployeeSignup.css";

import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash
} from "react-icons/fa";

import { FcGoogle } from "react-icons/fc";

function EmployeeSignup() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignup = () => {
    if (!fullName.trim()) {
      alert("Please Enter Full Name");
      return;
    }

    if (!phone.trim()) {
      alert("Please Enter Phone Number");
      return;
    }

    if (phone.length !== 10) {
      alert("Phone Number Must Be 10 Digits");
      return;
    }

    if (!email.trim()) {
      alert("Please Enter Email Address");
      return;
    }

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      alert("Please Enter Valid Email");
      return;
    }

    if (!password.trim()) {
      alert("Please Enter Password");
      return;
    }

    if (password.length < 6) {
      alert("Password Must Be At Least 6 Characters");
      return;
    }

    if (!confirmPassword.trim()) {
      alert("Please Confirm Password");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords Do Not Match");
      return;
    }

    localStorage.setItem("userName", fullName);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPhone", phone);
    localStorage.setItem("userPassword", password);


    alert("Signup Successful ✅");

    navigate("/login");
  };

  return (
    <div className="signup-page">

      {/* LEFT SECTION */}
      <div className="left-section">

        <div className="logo">
          <h1>ManageHub</h1>
          <p>Employee Management System</p>
        </div>

        <div className="content">
          <h2>
            Simplify Workforce.
            <br />
            Amplify Performance.
          </h2>

          <p>
            Manage employees, attendance,
            leave, payroll and much more —
            all in one place.
          </p>
        </div>

      </div>

      {/* RIGHT SECTION */}
      <div className="right-section">

        <div className="signup-card">

          <h2>
            Create <span>Account</span>
          </h2>

          {/* Full Name */}
          <div className="input-group">
            <FaUser className="input-icon" />

            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) =>
                setFullName(e.target.value)
              }
            />
          </div>

          {/* Phone */}
          <div className="input-group">
            <FaPhone className="input-icon" />

            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value)
              }
            />
          </div>

          {/* Email */}
          <div className="input-group">
            <FaEnvelope className="input-icon" />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />
          </div>

          {/* Password */}
          <div className="input-group">
            <FaLock className="input-icon" />

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
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

          {/* Confirm Password */}
          <div className="input-group">
            <FaLock className="input-icon" />

            <input
              type={
                showConfirmPassword
                  ? "text"
                  : "password"
              }
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(
                  e.target.value
                )
              }
            />

            <button
              type="button"
              className="eye-btn"
              onClick={() =>
                setShowConfirmPassword(
                  !showConfirmPassword
                )
              }
            >
              {showConfirmPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </button>
          </div>

          {/* Signup Button */}
          <button
            className="signup-btn"
            onClick={handleSignup}
          >
            Sign Up
          </button>

          {/* Divider */}
          <div className="divider">
            <span>OR</span>
          </div>

          {/* Google Button */}
          <button className="google-btn">
            <FcGoogle size={24} />
            Continue with Google
          </button>

          {/* Login Link */}
          <p className="login-link">
            Already have an account?{" "}
            <span
              onClick={() =>
                navigate("/login")
              }
              style={{
                cursor: "pointer",
              }}
            >
              Login
            </span>
          </p>

        </div>
      </div>
    </div>
  );
}

export default EmployeeSignup;