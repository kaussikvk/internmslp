import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./MentorDashboard.css";

import homeDashboard from "../assets/DashBoard/Home.png";
import resourceDashboard from "../assets/DashBoard/Resourse.png";
import settingsDashboard from "../assets/DashBoard/settings.png";

import searchDashboard from "../assets/DashBoard/search.png";
import bellDashboard from "../assets/DashBoard/Bell.png";
import mentorProfileDashboard from "../assets/DashBoard/ProfileIcon-dashboard.png";

import myProfileIcon from "../assets/DashBoard/MyProfileIcon.png";
import internIconDashboard from "../assets/DashBoard/InternIcon-Dashboard.png";
import taskApprovalIcon from "../assets/DashBoard/Task&Approval.png";
import scheduleIcon from "../assets/DashBoard/ScheduleIcon.png";
import statastics3Icon from "../assets/DashBoard/Statastics-3.png";
import communicationIcon from "../assets/DashBoard/CommunicationIcon.png";
import projectsMentorDashboardIcon from "../assets/DashBoard/Projects-Mentordashboard.png";

import hamburgerDashboard from "../assets/DashBoard/hamburger.png";
import downArrowDashboard from "../assets/DashBoard/down-arrow.png";

export const MentorDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  const NAV_ITEMS = [
    {
      label: "Dashboard",
      icon: homeDashboard,
      path: "/mentor-dashboard",
      alt: "Home",
    },
    {
      label: "My Profile",
      icon: myProfileIcon,
      path: "#",
      alt: "my-profile",
    },
    {
      label: "Interns",
      icon: internIconDashboard,
      path: "#",
      alt: "interns",
    },
    {
      label: "Task & Approvals",
      icon: taskApprovalIcon,
      path: "#",
      alt: "task-approvals",
    },
    {
      label: "Schedule",
      icon: scheduleIcon,
      path: "#",
      alt: "schedule",
    },
    {
      label: "Reports & Analytics",
      icon: statastics3Icon,
      path: "#",
      alt: "reports-analytics",
    },
    {
      label: "Projects",
      icon: projectsMentorDashboardIcon,
      path: "#",
      alt: "projects",
    },
    {
      label: "Communication",
      icon: communicationIcon,
      path: "#",
      alt: "communication",
    },
    {
      label: "Resources",
      icon: resourceDashboard,
      path: "#",
      alt: "resourceicon",
    },
    { label: "Settings", icon: settingsDashboard, path: "#", alt: "settings" },
  ];

  function NavItem({ label, icon, alt, path, isActive }) {
    return (
      <Link
        to={path}
        className={
          isActive ? "MentorDashboardNavItem active" : "MentorDashboardNavItem"
        }
      >
        <img
          className="MentorDashboardNavIcon"
          src={icon}
          alt={alt}
          width={20}
          height={20}
        />
        <h4>{label}</h4>
      </Link>
    );
  }

  return (
    <div className="MentorDashboardContainer">
      <div
        className={
          isSidebarOpen
            ? "MentorDashboardSidebar"
            : "MentorDashboardSidebar MentorDashboardSidebarClosed"
        }
      >
        <div className="MentorDashboardLogoSection">
          <h2>{isSidebarOpen && "InternMS"}</h2>
          <p>{isSidebarOpen && "Internship Management System"}</p>
        </div>

        <div className="MentorDashboardSidebarNav">
          {NAV_ITEMS.map((item, index) => (
            <div
              key={item.label}
              className={index === 0 ? "MentorDashboardNavItemFirst" : ""}
            >
              <NavItem
                {...item}
                isActive={location.pathname === item.path}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="MentorDashboardMain">
        <div className="MentorDashboardNavbar">
          <div className="MentorDashboardNavbarLeft">
            <img
              src={hamburgerDashboard}
              className="MentorDashboardHamburger"
              alt="HamburgerIcon"
              width={22}
              height={22}
              onClick={() => setIsSidebarOpen((prev) => !prev)}
              role="button"
              tabIndex={0}
            />

            <div className="MentorDashboardWelcomeSection">
              <h4>Welcome back, Mentor</h4>
              <p>Welcome back, John Mentor!</p>
            </div>
          </div>

          <div className="MentorDashboardNavbarCenter">
            <div className="MentorDashboardSearchBox">
              <img
                src={searchDashboard}
                className="MentorDashboardSearchIcon"
                alt="search"
                width={18}
                height={18}
              />
              <input type="text" placeholder="Search anything......" />
            </div>
          </div>

          <div className="MentorDashboardNavbarRight">
            <div className="MentorDashboardNotificationSection">
              <img
                src={bellDashboard}
                className="MentorDashboardNotificationIcon"
                alt="NotificationIcon"
                width={20}
                height={20}
              />
              <span className="MentorDashboardNotificationBadge"></span>
            </div>

            <div className="MentorDashboardProfileCircle">
              <img
                src={mentorProfileDashboard}
                className="MentorDashboardProfileImage"
                alt="mentor-icon"
                width={38}
                height={38}
              />
            </div>

            <div className="MentorDashboardProfileDetails">
              <h4>Mentor</h4>
              <p>Mentor Dashboard</p>
            </div>

            <img
              src={downArrowDashboard}
              className="MentorDashboardProfileArrow"
              alt="arrow"
              width={11}
              height={11}
            />
          </div>
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default MentorDashboard;
