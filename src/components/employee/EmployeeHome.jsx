import "../../styles/EmployeeHome.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaUsers,
  FaCalendarCheck,
  FaMoneyBillWave,
  FaTasks,
  FaBell,
  FaUserCircle,
  FaHome,
  FaSignOutAlt,
  FaSearch,
  FaUserPlus
} from "react-icons/fa";

function EmployeeHome() {
  const navigate = useNavigate();

  const [showProfile, setShowProfile] = useState(false);

  const userName =
    localStorage.getItem("userName") || "Employee";

  const handleLogout = () => {
    navigate("/login");
  };

  const handleProfile = () => {
    navigate("/profile");
  };

  return (
    <div className="dashboard">

      {/* Sidebar */}
      <div className="sidebar">

        <div className="logo">
          <h2>ManageHub</h2>
          <p>Workforce Management</p>
        </div>

        <ul>
          <li className="active">
            <FaHome /> Dashboard
          </li>

          <li>
            <FaUsers /> Employees
          </li>

          <li>
            <FaCalendarCheck /> Attendance
          </li>

          <li>
            <FaTasks /> Leave
          </li>

          <li>
            <FaMoneyBillWave /> Payroll
          </li>

          <li
  className="profile-menu"
  onClick={handleProfile}
  style={{ cursor: "pointer" }}
>
            <FaUserCircle /> Profile
          </li>

          <li
            onClick={handleLogout}
            style={{ cursor: "pointer" }}
          >
            <FaSignOutAlt /> Logout
          </li>
        </ul>

        <div className="sidebar-footer">
          <p>Version 1.0</p>
          <p>© 2026 ManageHub</p>
        </div>

      </div>

      {/* Main Content */}
      <div className="main-content">

        {/* Navbar */}
        <div className="navbar">

          <div className="search-box">
            <FaSearch />
            <input
              type="text"
              placeholder="Search..."
            />
          </div>

          <div className="nav-right">

            <FaBell className="nav-icon" />

            <div style={{ position: "relative" }}>

              <div
                className="profile-box"
                onClick={() =>
                  setShowProfile(!showProfile)
                }
                style={{ cursor: "pointer" }}
              >
                <FaUserCircle className="nav-profile" />
                <span>{userName}</span>
              </div>

              {showProfile && (
                <div className="profile-popup">

                  <p>
                    <strong>Full Name:</strong>{" "}
                    {localStorage.getItem(
                      "userName"
                    ) || "Not Added"}
                  </p>

                  <p>
                    <strong>Email:</strong>{" "}
                    {localStorage.getItem(
                      "userEmail"
                    ) || "Not Added"}
                  </p>

                  <p>
                    <strong>Phone:</strong>{" "}
                    {localStorage.getItem(
                      "userPhone"
                    ) || "Not Added"}
                  </p>

                  <p>
                    <strong>Role:</strong>{" "}
                    {localStorage.getItem(
                      "userRole"
                    ) || "Not Added"}
                  </p>

                  <p>
                    <strong>Skills:</strong>{" "}
                    {localStorage.getItem(
                      "userSkills"
                    ) || "Not Added"}
                  </p>

                  <p>
                    <strong>About:</strong>{" "}
                    {localStorage.getItem(
                      "userAbout"
                    ) || "Not Added"}
                  </p>

                </div>
              )}

            </div>

          </div>

        </div>

        {/* Welcome Banner */}
        <div className="welcome-banner">

          <div>
            <h2>
              Welcome Back, {userName} 👋
            </h2>

            <p>
              Manage your workforce efficiently
              from one central dashboard.
            </p>
          </div>

        </div>

        {/* Stats Cards */}
        <div className="cards">

          <div className="card">
            <FaUsers className="card-icon" />
            <h3>Total Employees</h3>
            <h2>0</h2>
            <p>No employees added yet</p>
          </div>

          <div className="card">
            <FaCalendarCheck className="card-icon" />
            <h3>Present Today</h3>
            <h2>0</h2>
            <p>No attendance records</p>
          </div>

          <div className="card">
            <FaTasks className="card-icon" />
            <h3>Leave Requests</h3>
            <h2>0</h2>
            <p>No pending requests</p>
          </div>

          <div className="card">
            <FaMoneyBillWave className="card-icon" />
            <h3>Payroll Status</h3>
            <h2>0</h2>
            <p>No payroll generated</p>
          </div>

        </div>

        {/* Quick Actions */}
        <div className="quick-actions">

          <h2>Quick Actions</h2>

          <div className="action-buttons">

            <button>
              <FaUserPlus />
              Add Employee
            </button>

            <button>
              <FaCalendarCheck />
              Attendance
            </button>

            <button>
              <FaTasks />
              Approve Leave
            </button>

            <button>
              <FaMoneyBillWave />
              Payroll
            </button>

          </div>

        </div>

        {/* Recent Activity */}
        <div className="activity-section">

          <h2>Recent Activities</h2>

          <table>
            <thead>
              <tr>
                <th>Employee</th>
                <th>Activity</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td
                  colSpan="3"
                  style={{
                    textAlign: "center",
                    padding: "30px"
                  }}
                >
                  No Records Found
                </td>
              </tr>
            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default EmployeeHome;