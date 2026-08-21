import { useState } from "react";
import { Link } from "react-router-dom";
import "./MentorProfile.css";
import ProfileImage from "../assets/Dashboard/profileImage.png";
import CameraIcon from "../assets/Dashboard/cameraIcon.png";
import EditIcon from "../assets/Dashboard/EditPen.png";
import PersonalInfo from "../assets/Dashboard/personalinfoIcon.png";
import BioIcon from "../assets/Dashboard/bioIcon.png";
import MailProfile from "../assets/Dashboard/mailprofile.png";
import PhoneIcon from "../assets/Dashboard/phone.png";
import ExpertiseTagIcon from "../assets/Dashboard/expertizetagicon.png";

export const MentorProfile = () => {
  const [profileImage, setProfileImage] = useState(ProfileImage);

  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const PERSONAL_INFO = [
    { label: "Full Name", value: "Dr. Rajesh Kumar" },
    { label: "Employee ID", value: "MEN-8402" },
    { label: "Department", value: "Engineering" },
    { label: "Experience", value: "12+ Years" },
  ];

  const EXPERTISE_LIST = [
    "Cloud Computing",
    "System Architecture",
    "Machine Learning",
    "Go",
    "Kubernetes",
  ];

  return (
    <>
      <div className="MentorProfilePage">
        <div className="MentorProfileHeader">
          <h1>Mentor Profile</h1>
          <p>Manage your professional details and intern assignments.</p>
        </div>

        <div className="MentorProfileMainCard">
          <div className="MentorProfileImageContainer">
            <div className="MentorProfileImageCircle">
              <img
                src={profileImage}
                alt="Profile"
                style={{ objectFit: profileImage === ProfileImage ? "contain" : "cover" }}
              />
            </div>
            <label className="MentorProfileCameraButton">
              <img src={CameraIcon} alt="Change Profile" />
              <input
                type="file"
                accept="image/*"
                onChange={handleProfileImageChange}
              />
            </label>
          </div>
          <div className="MentorProfileDetails">
            <div className="MentorProfileName">
              <h2>Dr. Rajesh Kumar</h2>
              <p className="ProfileActive">Active</p>
            </div>
            <p className="MentorProfileRole">Senior Mentor</p>
            <p className="MentorProfileDescription">
              Dedicated to guiding the next generation of engineers through
              practical, hands-on enterprise projects.
            </p>
          </div>
          <button className="MentorProfileEditButton">
            <img src={EditIcon} alt="Editicon" />
            Edit Profile
          </button>
        </div>

        <div className="MentorProfileGrid">
          <div className="MentorProfileInfoCard">
            <h3>
              <img src={PersonalInfo} alt="Personal Information" />
              Personal Information
            </h3>

            <div className="MentorProfileInfoList">
              {PERSONAL_INFO.map((item) => (
                <div key={item.label} className="MentorProfileInfoRow">
                  <span>{item.label}</span>
                  <span>{item.value}</span>
                </div>
              ))}
            </div>

            <div className="MentorProfileContactList">
              <div className="MentorProfileContactRow">
                <img src={MailProfile} alt="Email" />
                rajesh.kumar@internsync.com
              </div>
              <div className="MentorProfileContactRow">
                <img src={PhoneIcon} alt="Phone" />
                +1 (555) 019-2834
              </div>
            </div>
          </div>

          <div className="MentorProfileBioCard">
            <h3>
              <img src={BioIcon} alt="Professional Bio" />
              Professional Bio
            </h3>

            <p className="MentorProfileBioText">
              Former Principal Architect specializing in scalable distributed
              systems. Passionate about knowledge transfer and developing
              robust engineering cultures within enterprise environments.
              Leads the core infrastructure mentoring track.
            </p>

            <div className="MentorProfileExpertise">
              <h4>
                <img src={ExpertiseTagIcon} alt="Areas of Expertise" />
                AREAS OF EXPERTISE
              </h4>

              <div className="MentorProfileExpertiseList">
                {EXPERTISE_LIST.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="MentorProfileFooter">
        <p>&copy; 2024 Corporate Systems Inc. All rights reserved.</p>
        <div className="MentorProfileFooterLinks">
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Terms of Service</Link>
          <Link to="#">Help Center</Link>
        </div>
      </footer>
    </>
  );
};