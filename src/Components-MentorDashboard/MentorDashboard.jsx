import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import "./MentorDashboard.css";

import homeDashboard from "../assets/DashBoard/Home.png";
import clockDashboard from "../assets/DashBoard/Clock.png";
import statsDashboard from "../assets/DashBoard/Stats.png";
import resourceDashboard from "../assets/DashBoard/Resourse.png";
import speakerDashboard from "../assets/DashBoard/speaker.png";
import calendarDashboard from "../assets/DashBoard/Calender.png";
import settingsDashboard from "../assets/DashBoard/settings.png";

import searchDashboard from "../assets/DashBoard/search.png";
import bellDashboard from "../assets/DashBoard/Bell.png";
import mentorProfileDashboard from "../assets/DashBoard/ProfileIcon-dashboard.png";

import personOutlineFilled from "../assets/DashBoard/person-outline-filled.png";

import greenTickDashboard from "../assets/DashBoard/greentick.png";
import brownPadDashboard from "../assets/DashBoard/brownpad.png";
import greenStatsDashboard from "../assets/DashBoard/greenstats.png";
import starDashboard from "../assets/DashBoard/star.png";

import messageDashboard from "../assets/DashBoard/Message2.png";
import personSimple from "../assets/DashBoard/person-simple.png";
import notepadDashboard from "../assets/DashBoard/notepad.png";

import hamburgerDashboard from "../assets/DashBoard/hamburger.png";
import downArrowDashboard from "../assets/DashBoard/down-arrow.png";
import rightArrowDashboard from "../assets/DashBoard/right-arrow.png";

import priyaSharmaPhoto from "../assets/DashBoard/intern-priya-sharma.png";
import rahulMehtaPhoto from "../assets/DashBoard/intern-rahul-mehta.png";
import aryanVermaPhoto from "../assets/DashBoard/intern-aryan-verma.png";
import vikramSinghPhoto from "../assets/DashBoard/intern-vikram-singh.png";

export const MentorDashboard = () => {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const NAV_ITEMS = [
    {
      label: "Dashboard",
      icon: homeDashboard,
      path: "/mentor-dashboard",
      alt: "Home",
    },
    {
      label: "My Interns",
      icon: personOutlineFilled,
      path: "#",
      alt: "intern-user",
    },
    {
      label: "Tasks & Reviews",
      icon: notepadDashboard,
      path: "#",
      alt: "task",
    },
    { label: "Attendance", icon: clockDashboard, path: "#", alt: "clock" },
    {
      label: "Performance",
      icon: statsDashboard,
      path: "#",
      alt: "performicon",
    },
    { label: "Messages", icon: messageDashboard, path: "#", alt: "message" },
    {
      label: "Resources",
      icon: resourceDashboard,
      path: "#",
      alt: "resourceicon",
    },
    {
      label: "Announcements",
      icon: speakerDashboard,
      path: "#",
      alt: "speaker",
    },
    { label: "Reports", icon: notepadDashboard, path: "#", alt: "report" },
    { label: "Calendar", icon: calendarDashboard, path: "#", alt: "calendar" },
    { label: "Settings", icon: settingsDashboard, path: "#", alt: "settings" },
  ];

  const STAT_CARDS = [
    {
      key: "totalInterns",
      containerClass: "MentorDashboardInternIconContainer",
      icon: personOutlineFilled,
      iconClass: "MentorDashboardInternCount",
      value: 12,
      title: "Total Interns",
      subtitle: "under your guidance",
    },
    {
      key: "activeInterns",
      containerClass: "MentorDashboardActiveInternIconContainer",
      icon: greenTickDashboard,
      iconClass: "MentorDashboardPresentIcon",
      value: 8,
      title: "Active Interns",
      subtitle: "Currently Active",
    },
    {
      key: "tasksAssigned",
      containerClass: "MentorDashboardTaskIconContainer",
      icon: brownPadDashboard,
      iconClass: "MentorDashboardTask",
      value: 16,
      title: "Task Assigned",
      subtitle: "This Month",
    },
    {
      key: "pendingReviews",
      containerClass: "MentorDashboardReviewIconContainer",
      icon: greenStatsDashboard,
      iconClass: "MentorDashboardReviews",
      value: 6,
      title: "Pending Reviews",
      subtitle: "Needs your Feedback",
    },
    {
      key: "avgPerformance",
      containerClass: "MentorDashboardStarIconContainer",
      icon: starDashboard,
      iconClass: "MentorDashboardStar",
      value: "4.7",
      title: "Average Performance",
      subtitle: "Out of 5",
    },
  ];

  const PERFORMANCE_DATA = [
    { week: "Week 1", averageScore: 20, taskCompletion: 5 },
    { week: "Week 2", averageScore: 25, taskCompletion: 10 },
    { week: "Week 3", averageScore: 30, taskCompletion: 12 },
    { week: "Week 4", averageScore: 42, taskCompletion: 15 },
    { week: "Week 4", averageScore: 50, taskCompletion: 20 },
  ];

  const INTERN_STATUS_DATA = [
    {
      name: "Active",
      value: 8,
      percent: 66.7,
      color: "#22c55e",
      dotClass: "Green",
    },
    {
      name: "On leave",
      value: 2,
      percent: 16.7,
      color: "#eab308",
      dotClass: "Yellow",
    },
    {
      name: "Completed",
      value: 2,
      percent: 16.7,
      color: "#ef4444",
      dotClass: "Red",
    },
  ];

  const DEADLINE_DATA = [
    {
      id: 1,
      month: "MAY",
      date: "22",
      title: "Project Report",
      name: "Aryan verma",
      due: "Due in 2 days",
      color: "Red",
    },
    {
      id: 2,
      month: "MAY",
      date: "24",
      title: "UI/UX Case study",
      name: "Neha Singh",
      due: "Due in 4 days",
      color: "Yellow",
    },
    {
      id: 3,
      month: "MAY",
      date: "27",
      title: "Final Presentation",
      name: "Rahul Mehta",
      due: "Due in 7 days",
      color: "IceBlue",
    },
  ];

  const RECENT_ACTIVITY_DATA = [
    {
      id: 1,
      icon: greenTickDashboard,
      bgColor: "MentorDashboardActivityIconContainerGreen",
      title: 'Aryan verma submitted the task "Landing Page Design"',
      time: "2 Hours ago",
    },
    {
      id: 2,
      icon: messageDashboard,
      bgColor: "MentorDashboardActivityIconContainerBlue",
      title: 'You reviewed Neha singh\'s task " User Research Report"',
      time: "5 Hours ago",
    },
    {
      id: 3,
      icon: personSimple,
      bgColor: "MentorDashboardActivityIconContainerYellow",
      title: "Rahul Mehta marked attendance for today",
      time: "1 Day ago",
    },
    {
      id: 4,
      icon: notepadDashboard,
      bgColor: "MentorDashboardActivityIconContainerPink",
      title: 'New resources "Design System Guidelines" shared',
      time: "2 Days ago",
    },
  ];

  const TOP_INTERN_DATA = [
    {
      id: 1,
      image: priyaSharmaPhoto,
      name: "Priya Sharma",
      progress: 90,
    },
    {
      id: 2,
      image: rahulMehtaPhoto,
      name: "Rahul Mehta",
      progress: 88,
    },
    {
      id: 3,
      image: aryanVermaPhoto,
      name: "Aryan Verma",
      progress: 85,
    },
    {
      id: 4,
      image: vikramSinghPhoto,
      name: "Vikram Singh",
      progress: 82,
    },
  ];

  const SCHEDULE_DATA = [
    {
      id: 1,
      time: "10:00 AM",
      title: "1:1 Meeting with Neha Singh",
      subTitle: "Mentorship Disscussion",
      color: "SchedulePurple",
    },
    {
      id: 2,
      time: "2:00 PM",
      title: "Project Review - Team Alpha",
      subTitle: "Review & Feedback",
      color: "ScheduleOrange",
    },
    {
      id: 3,
      time: "4:00 PM",
      title: "Weekly Mentor Sync",
      subTitle: "Team Meeting",
      color: "ScheduleTeal",
    },
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

  function StatCard({
    containerClass,
    icon,
    iconClass,
    value,
    title,
    subtitle,
  }) {
    return (
      <div className="MentorDashboardStatCard">
        <div className={containerClass}>
          <img src={icon} className={iconClass} alt="" width={22} height={22} />
        </div>
        <div className="MentorDashboardStatContent">
          <h2>{value}</h2>
          <p>{title}</p>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  }

  function DeadlineRow({ month, date, title, name, due, color }) {
    return (
      <div className="MentorDashboardDeadlineItem">
        <div className="MentorDashboardDeadlineDateBox">
          <span>{month}</span>
          <h4>{date}</h4>
        </div>

        <div className="MentorDashboardDeadlineContent">
          <div className="MentorDashboardDeadlineHeader">
            <h4>{title}</h4>
            <span className={`MentorDashboardDeadlineStatus ${color}`}>
              {due}
            </span>
          </div>
          <p>{name}</p>
        </div>
      </div>
    );
  }

  function ActivityRow({ icon, bgColor, title, time }) {
    return (
      <div className="MentorDashboardActivityItem">
        <div className={`MentorDashboardActivityIconContainer ${bgColor}`}>
          <img src={icon} alt="" width={18} height={18} />
        </div>
        <div className="MentorDashboardActivityContent">
          <h4>{title}</h4>
          <p>{time}</p>
        </div>
      </div>
    );
  }

  function TopInternRow({ image, name, progress }) {
    return (
      <div className="MentorDashboardTopInternItem">
        <img src={image} className="MentorDashboardTopInternImage" alt={name} />

        <div className="MentorDashboardProgressSection">
          <div className="MentorDashboardProgressBar">
            <div
              className="MentorDashboardProgressFill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <h4>{progress}%</h4>
      </div>
    );
  }

  function ScheduleRow({ time, title, subTitle, color }) {
    return (
      <div className="MentorDashboardScheduleItem">
        <div className={`MentorDashboardScheduleTime ${color}`}>{time}</div>

        <div className="MentorDashboardScheduleContent">
          <h4>{title}</h4>
          <p>
            <span className="MentorDashboardScheduleDot"></span>
            {subTitle}
          </p>
        </div>
      </div>
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
          {NAV_ITEMS.map((item) => (
            <div key={item.label} onClick={() => setActiveMenu(item.label)}>
              <NavItem {...item} isActive={activeMenu === item.label} />
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

        <div className="MentorDashboardContent">
          <div className="MentorDashboardStats">
            {STAT_CARDS.map((card) => (
              <StatCard key={card.key} {...card} />
            ))}
          </div>

          <div className="MentorDashboardAnalyticsSection">
            <div className="MentorDashboardPerformanceCard">
              <div className="MentorDashboardPerformanceCardHeader">
                <h3>Intern Performance Overview</h3>
                <span className="MentorDashboardSelectedMonth">
                  This Month
                  <img
                    src={downArrowDashboard}
                    className="MentorDashboardMonthArrowIcon"
                    alt="arrow"
                    width={10}
                    height={10}
                  />
                </span>
              </div>

              <ResponsiveContainer width="100%" height={220}>
                <LineChart
                  data={PERFORMANCE_DATA}
                  margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#eef1f6"
                  />
                  <XAxis
                    dataKey="week"
                    axisLine={{ stroke: "#E3E3E3", strokeWidth: 1 }}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: "#8a94a6" }}
                  />
                  <YAxis
                    axisLine={{ stroke: "#E3E3E3", strokeWidth: 1 }}
                    tickLine={false}
                    domain={[0, 60]}
                    ticks={[0, 20, 40, 60]}
                    tick={{ fontSize: 12, fill: "#8a94a6" }}
                  />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="averageScore"
                    stroke="#4338ca"
                    strokeWidth={2.5}
                    dot={{ r: 5, fill: "#4338ca", strokeWidth: 0 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="taskCompletion"
                    stroke="#22c55e"
                    strokeWidth={2.5}
                    dot={{ r: 5, fill: "#22c55e", strokeWidth: 0 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>

              <div className="MentorDashboardChartPoint">
                <span>
                  <span className="MentorDashboardPointDot Blue"></span>
                  Average Score
                </span>
                <span>
                  <span className="MentorDashboardPointDot Green"></span>
                  Task Completion (%)
                </span>
              </div>
            </div>

            <div className="MentorDashboardInternStatusCard">
              <h3>Intern By Status</h3>
              <div className="MentorDashboardInternStatusContent">
                <div
                  className="MentorDashboardDonutChartContainer"
                  style={{ width: 220, height: 220 }}
                >
                  <ResponsiveContainer
                    width="100%"
                    height="100%"
                    minWidth={220}
                    minHeight={220}
                  >
                    <PieChart>
                      <Pie
                        data={INTERN_STATUS_DATA}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        innerRadius={58}
                        outerRadius={82}
                        paddingAngle={2}
                        startAngle={90}
                        endAngle={-270}
                        isAnimationActive={false}
                      >
                        {INTERN_STATUS_DATA.map((item) => (
                          <Cell
                            key={item.name}
                            fill={item.color}
                            stroke="none"
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>

                  <div className="MentorDashboardDonutChartCenter">
                    <h2>12</h2>
                    <p>Total</p>
                  </div>
                </div>

                <div className="MentorDashboardStatusPoint">
                  {INTERN_STATUS_DATA.map((s) => (
                    <div key={s.name}>
                      <span
                        className={`MentorDashboardStatusDot ${s.dotClass}`}
                      ></span>
                      <p>
                        {s.name} {s.value}({s.percent}%)
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="MentorDashboardDeadlineCard">
              <h3>Upcoming Deadlines</h3>

              {DEADLINE_DATA.map((item) => (
                <DeadlineRow key={item.id} {...item} />
              ))}

              <Link to="#" className="MentorDashboardViewAllDeadlines">
                View All Deadlines{" "}
                <img
                  src={rightArrowDashboard}
                  className="MentorDashboardArrow"
                  alt="arrow"
                  width={14}
                  height={14}
                />
              </Link>
            </div>
          </div>

          <div className="MentorDashboardBottomSection">
            <div className="MentorDashboardRecentActivityCard">
              <h3>Recent Activities</h3>

              {RECENT_ACTIVITY_DATA.map((item) => (
                <ActivityRow key={item.id} {...item} />
              ))}

              <Link to="#" className="MentorDashboardActivityFooter">
                <span>View all activities</span>
                <img
                  src={rightArrowDashboard}
                  className="MentorDashboardArrow"
                  alt="arrow"
                  width={14}
                  height={14}
                />
              </Link>
            </div>

            <div className="MentorDashboardTopInternCard">
              <div className="MentorDashboardTopInternHeader">
                <h3>Top Performing Interns</h3>
                <Link to="#">View all</Link>
              </div>

              {TOP_INTERN_DATA.map((item) => (
                <TopInternRow key={item.id} {...item} />
              ))}
            </div>

            <div className="MentorDashboardScheduleCard">
              <div className="MentorDashboardScheduleHeader">
                <h3>My Schedule</h3>
                <Link to="#">View Calendar</Link>
              </div>

              {SCHEDULE_DATA.map((item) => (
                <ScheduleRow key={item.id} {...item} />
              ))}

              <Link to="#" className="MentorDashboardScheduleFooter">
                <span>View full Schedule</span>
                <img
                  src={rightArrowDashboard}
                  className="MentorDashboardArrow"
                  alt="arrow"
                  width={14}
                  height={14}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
