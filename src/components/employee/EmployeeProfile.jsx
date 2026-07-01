import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/EmployeeProfile.css";

import {
  FaUserCircle,
  FaEnvelope,
  FaPhone,
  FaBriefcase,
  FaCode,
  FaSave
} from "react-icons/fa";

function EmployeeProfile() {
  const navigate = useNavigate();

  const [name, setName] = useState(
    localStorage.getItem("userName") || ""
  );

  const [email, setEmail] = useState(
    localStorage.getItem("userEmail") || ""
  );

  const [phone, setPhone] = useState(
    localStorage.getItem("userPhone") || ""
  );

  const [role, setRole] = useState(
  localStorage.getItem("userRole") || ""
);

const [skills, setSkills] = useState(
  localStorage.getItem("userSkills") || ""
);

const [about, setAbout] = useState(
  localStorage.getItem("userAbout") || ""
);
  const handleSave = () => {
    if (!name.trim()) {
      alert("Please enter Full Name");
      return;
    }

    if (!email.trim()) {
      alert("Please enter Email");
      return;
    }

    if (!phone.trim()) {
      alert("Please enter Phone Number");
      return;
    }

    if (phone.length !== 10) {
      alert("Phone Number must be 10 digits");
      return;
    }

    if (!role.trim()) {
      alert("Please enter Role");
      return;
    }

    if (!skills.trim()) {
      alert("Please enter Skills");
      return;
    }

    if (!about.trim()) {
      alert("Please enter About Me");
      return;
    }

    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPhone", phone);
    localStorage.setItem("userRole", role);
    localStorage.setItem("userSkills", skills);
    localStorage.setItem("userAbout", about);

    alert("Profile Saved Successfully ✅");

    navigate("/home");
  };

  return (
    <div className="profilePage">
      <div className="profileCard">

        <div className="profileHeader">
          <FaUserCircle className="profileAvatar" />

          <h2>{name || "Employee"}</h2>

          <p>
            {role || "Add Your Role"}
          </p>
        </div>

        <div className="profileBody">

          <div className="profileField">
            <label>Full Name</label>

            <div className="profileInputBox">
              <FaUserCircle className="profileIcon" />

              <input
                type="text"
                placeholder="Enter Full Name"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
              />
            </div>
          </div>

          <div className="profileField">
            <label>Email</label>

            <div className="profileInputBox">
              <FaEnvelope className="profileIcon" />

              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />
            </div>
          </div>

          <div className="profileField">
            <label>Phone Number</label>

            <div className="profileInputBox">
              <FaPhone className="profileIcon" />

              <input
                type="text"
                placeholder="Enter Phone Number"
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value)
                }
              />
            </div>
          </div>

          <div className="profileField">
            <label>Role / Designation</label>

            <div className="profileInputBox">
              <FaBriefcase className="profileIcon" />

              <input
                type="text"
                placeholder="Full Stack Developer"
                value={role}
                onChange={(e) =>
                  setRole(e.target.value)
                }
              />
            </div>
          </div>

          <div className="profileField">
            <label>Skills</label>

            <div className="profileInputBox">
              <FaCode className="profileIcon" />

              <input
                type="text"
                placeholder="React, Node.js, MongoDB..."
                value={skills}
                onChange={(e) =>
                  setSkills(e.target.value)
                }
              />
            </div>
          </div>

          <div className="profileField">
            <label>About Me</label>

            <textarea
              className="profileTextarea"
              placeholder="Write something about yourself..."
              value={about}
              onChange={(e) =>
                setAbout(e.target.value)
              }
            />
          </div>

          <button
            className="profileSaveBtn"
            onClick={handleSave}
          >
            <FaSave />
            Save Profile
          </button>

        </div>

      </div>
    </div>
  );
}

export default EmployeeProfile;