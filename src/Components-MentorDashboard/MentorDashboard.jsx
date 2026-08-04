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


const NAV_ITEMS = [
  { label: "Dashboard", icon: homeDashboard, path: "/mentor-dashboard", alt: "Home" },
  { label: "My Interns", icon: personOutlineFilled, path: "#", alt: "intern-user" },
  { label: "Tasks & Reviews", icon: notepadDashboard, path: "#", alt: "task" },
  { label: "Attendance", icon: clockDashboard, path: "#", alt: "clock" },
  { label: "Performance", icon: statsDashboard, path: "#", alt: "performicon" },
  { label: "Messages", icon: messageDashboard, path: "#", alt: "message" },
  { label: "Resources", icon: resourceDashboard, path: "#", alt: "resourceicon" },
  { label: "Announcements", icon: speakerDashboard, path: "#", alt: "speaker" },
  { label: "Reports", icon: notepadDashboard, path: "#", alt: "report" },
  { label: "Calender", icon: calendarDashboard, path: "#", alt: "calendar" },
  { label: "Settings", icon: settingsDashboard, path: "#", alt: "settings" },
];

const STAT_CARDS = [
  { key: "totalInterns", containerClass: "Mentor-DB-InternIconContainer", icon: personOutlineFilled, iconClass: "Mentor-DB-InternCount", value: 12, title: "Total Interns", subtitle: "under your guidance" },
  { key: "activeInterns", containerClass: "Mentor-DB-ActiveInternIconContainer", icon: greenTickDashboard, iconClass: "Mentor-DB-PresentIcon", value: 8, title: "Active Interns", subtitle: "Currently Active" },
  { key: "tasksAssigned", containerClass: "Mentor-DB-TaskIconContainer", icon: brownPadDashboard, iconClass: "Mentor-DB-Clipboard", value: 16, title: "Task Assigned", subtitle: "This Month" },
  { key: "pendingReviews", containerClass: "Mentor-DB-ReviewIconContainer", icon: greenStatsDashboard, iconClass: "Mentor-DB-Reviews", value: 6, title: "Pending Reviews", subtitle: "Needs your Feedback" },
  { key: "avgPerformance", containerClass: "Mentor-DB-StarIconContainer", icon: starDashboard, iconClass: "Mentor-DB-Star", value: "4.7", title: "Average Performance", subtitle: "Out of 5" },
];


const PERFORMANCE_DATA = [
  { week: "Week 1", averageScore: 20, taskCompletion: 5 },
  { week: "Week 2", averageScore: 25, taskCompletion: 10 },
  { week: "Week 3", averageScore: 30, taskCompletion: 12 },
  { week: "Week 4 ", averageScore: 42, taskCompletion: 15 },
  { week: "Week 4", averageScore: 50, taskCompletion: 20 },
];

const INTERN_STATUS_DATA = [
  { name: "Active", value: 8, percent: 66.7, color: "#22c55e", dotClass: "Green" },
  { name: "On leave", value: 2, percent: 16.7, color: "#eab308", dotClass: "Yellow" },
  { name: "Completed", value: 2, percent: 16.7, color: "#ef4444", dotClass: "Red" },
];

const DEADLINE_DATA = [
  { id: 1, month: "MAY", date: "22", title: "Project Report", name: "Aryan verma", due: "Due in 2 days", color: "Red" },
  { id: 2, month: "MAY", date: "24", title: "UI/UX Case study", name: "Neha Singh", due: "Due in 4 days", color: "Yellow" },
  { id: 3, month: "MAY", date: "27", title: "Final Presentation", name: "Rahul Mehta", due: "Due in 7 days", color: "IceBlue" },
];

const RECENT_ACTIVITY_DATA = [
  { id: 1, icon: greenTickDashboard, bgColor: "Mentor-DB-ActivityIconContainerGreen", title: 'Aryan verma submitted the task "Landing Page Design"', time: "2 Hours ago" },
  { id: 2, icon: messageDashboard, bgColor: "Mentor-DB-ActivityIconContainerBlue", title: 'You reviewed Neha singh\u2019s task " User Research Report"', time: "5 Hours ago" },
  { id: 3, icon: personSimple, bgColor: "Mentor-DB-ActivityIconContainerYellow", title: "Rahul Mehta marked attendance for today", time: "1 Day ago" },
  { id: 4, icon: notepadDashboard, bgColor: "Mentor-DB-ActivityIconContainerPink", title: 'New resources "Design System Guidelines" shared', time: "2 Days ago" },
];


const TOP_INTERN_DATA = [
  { id: 1, image: priyaSharmaPhoto, name: "Priya Sharma", progress: 90 },
  { id: 2, image: rahulMehtaPhoto, name: "Rahul Mehta", progress: 88 },
  { id: 3, image: aryanVermaPhoto, name: "Aryan Verma", progress: 85 },
  { id: 4, image: vikramSinghPhoto, name: "Vikram Singh", progress: 82 },
];

const SCHEDULE_DATA = [
  { id: 1, time: "10:00 AM", title: "1:1 Meeting with Neha Singh", subTitle: "Mentorship Disscussion", color: "SchedulePurple" },
  { id: 2, time: "2:00 PM", title: "Project Review - Team Alpha", subTitle: "Review & Feedback", color: "ScheduleOrange" },
  { id: 3, time: "4:00 PM", title: "Weekly Mentor Sync", subTitle: "Team Meeting", color: "ScheduleTeal" },
];

function NavItem({ label, icon, alt, path, isActive }) {
  return (
    <Link to={path} className={isActive ? "MentorNavItem active" : "MentorNavItem"}>
      <img className="MentorNavIcon" src={icon} alt={alt} width={20} height={20} />
      <h4>{label}</h4>
    </Link>
  );
}

function StatCard({ containerClass, icon, iconClass, value, title, subtitle }) {
  return (
    <div className="Mentor-DB-StatCard">
      <div className={containerClass}>
        <img src={icon} className={iconClass} alt="" width={22} height={22} />
      </div>
      <div className="Mentor-DB-StatContent">
        <h2>{value}</h2>
        <p>{title}</p>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}

function DeadlineRow({ month, date, title, name, due, color }) {
  return (
    <div className="Mentor-DB-DeadlineItem">
      <div className="Mentor-DB-DeadlineDateBox">
        <span>{month}</span>
        <h4>{date}</h4>
      </div>

      <div className="Mentor-DB-DeadlineContent">
        <div className="Mentor-DB-DeadlineHeader">
          <h4>{title}</h4>
          <span className={`Mentor-DB-DeadlineStatus ${color}`}>{due}</span>
        </div>
        <p>{name}</p>
      </div>
    </div>
  );
}

function ActivityRow({ icon, bgColor, title, time }) {
  return (
    <div className="Mentor-DB-ActivityItem">
      <div className={`Mentor-DB-ActivityIconContainer ${bgColor}`}>
        <img src={icon} alt="" width={18} height={18} />
      </div>
      <div className="Mentor-DB-ActivityContent">
        <h4>{title}</h4>
        <p>{time}</p>
      </div>
    </div>
  );
}

function TopInternRow({ image, name, progress }) {
  return (
    <div className="Mentor-DB-TopInternItem">
      <img src={image} className="Mentor-DB-TopInternImage" alt={name} />

      <div className="Mentor-DB-ProgressSection">
        <div className="Mentor-DB-ProgressBar">
          <div className="Mentor-DB-ProgressFill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <h4>{progress}%</h4>
    </div>
  );
}

function ScheduleRow({ time, title, subTitle, color }) {
  return (
    <div className="Mentor-DB-ScheduleItem">
      <div className={`Mentor-DB-ScheduleTime ${color}`}>{time}</div>

      <div className="Mentor-DB-ScheduleContent">
        <h4>{title}</h4>
        <p>
          <span className="Mentor-DB-ScheduleDot"></span>
          {subTitle}
        </p>
      </div>
    </div>
  );
}



export const MentorDashboard = function () {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="MentorDashboardContainer">
      <div className={isSidebarOpen ? "MentorSidebar" : "MentorSidebar Mentor-DB-SidebarClosed"}>
        <div className="MentorLogoSection">
          <h2>InternMS</h2>
          <p>Internship Management System</p>
        </div>

        <div className="MentorSidebarNav">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} onClick={() => setActiveMenu(item.label)}>
              <NavItem {...item} isActive={activeMenu === item.label} />
            </div>
          ))}
        </div>
      </div>

      <div className="MentorMainContainer">
        <div className="MentorNavbar">
          <div className="MentorNavbarLeft">
            <img
              src={hamburgerDashboard}
              className="Mentor-DB-Hamburger"
              alt="HamburgerIcon"
              width={22}
              height={22}
              onClick={() => setIsSidebarOpen((prev) => !prev)}
              role="button"
              tabIndex={0}
            />


            <div className="MentorWelcomeSection">
              <h4>Welcome back, Mentor</h4>
              <p>Welcome back, John Mentor!</p>
            </div>
          </div>

          <div className="MentorNavbarCenter">
            <div className="MentorSearchBox">
              <img src={searchDashboard} className="Mentor-DB-SearchIcon" alt="search" width={18} height={18} />
              <input type="text" placeholder="Search anything......" />
            </div>
          </div>

          <div className="MentorNavbarRight">
            <div className="Mentor-DB-NotificationSection">
              <img src={bellDashboard} className="Mentor-DB-NotificationIcon" alt="NotificationIcon" width={20} height={20} />
              <span className="Mentor-DB-NotificationBadge"></span>
            </div>

            <div className="MentorProfileCircle">
              <img src={mentorProfileDashboard} className="Mentor-DB-MentorProfileImage" alt="mentor-icon" width={38} height={38} />
            </div>

            <div className="MentorDetails">
              <h4>Mentor</h4>
              <p>Mentor Dashboard</p>
            </div>

            <img src={downArrowDashboard} className="Mentor-DB-ProfileArrow" alt="arrow" width={11} height={11} />
          </div>
        </div>

        <div className="MentorDashboardContent">
          <div className="MentorStatsContainer">
            {STAT_CARDS.map((card) => (
              <StatCard key={card.key} {...card} />
            ))}
          </div>

          <div className="Mentor-DB-MentorAnalyticsSection">
            <div className="Mentor-DB-PerformanceCard">
              <div className="Mentor-DB-PerformanceCardHeader">
                <h3>Intern Performance Overview</h3>
                <span className="Mentor-DB-SelectedMonth">
                  This Month
                  <img src={downArrowDashboard} className="Mentor-DB-MonthArrowIcon" alt="arrow" width={10} height={10} />
                </span>
              </div>

              <ResponsiveContainer width="100%" height={260}>
                <LineChart data={PERFORMANCE_DATA} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eef1f6" />
                  <XAxis dataKey="week" tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: "#8a94a6" }} />
                  <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: "#8a94a6" }} />
                  <Tooltip />
                  <Line type="monotone" dataKey="averageScore" stroke="#4338ca" strokeWidth={2.5} dot={{ r: 5, fill: "#4338ca", strokeWidth: 0 }} activeDot={{ r: 6 }} />
                  <Line type="monotone" dataKey="taskCompletion" stroke="#22c55e" strokeWidth={2.5} dot={{ r: 5, fill: "#22c55e", strokeWidth: 0 }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>

              <div className="Mentor-DB-ChartPoint">
                <span>
                  <span className="Mentor-DB-PointDot Blue"></span>
                  Average Score
                </span>
                <span>
                  <span className="Mentor-DB-PointDot Green"></span>
                  Task Completion (%)
                </span>
              </div>
            </div>

            <div className="Mentor-DB-InternStatusCard">
              <h3>Intern By Status</h3>
              <div className="Mentor-DB-InternStatusContent">
                <div className="Mentor-DB-DonutChartContainer" style={{ width: 220, height: 220 }}>
                  <ResponsiveContainer width="100%" height="100%" minWidth={220} minHeight={220}>
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
                          <Cell key={item.name} fill={item.color} stroke="none" />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>


                  <div className="Mentor-DB-DonutChartCenter">
                    <h2>12</h2>
                    <p>Total</p>
                  </div>
                </div>

                <div className="Mentor-DB-StatusPoint">
                  {INTERN_STATUS_DATA.map((s) => (
                    <div key={s.name}>
                      <span className={`Mentor-DB-StatusDot ${s.dotClass}`}></span>
                      <p>
                        {s.name} {s.value}({s.percent}%)
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="Mentor-DB-DeadlineCard">
              <h3>Upcoming Deadlines</h3>

              {DEADLINE_DATA.map((item) => (
                <DeadlineRow key={item.id} {...item} />
              ))}

              <Link to="#" className="Mentor-DB-ViewAllDeadlines">
                View All Deadlines <img src={rightArrowDashboard} className="Mentor-DB-MentorArrow" alt="arrow" width={14} height={14} />
              </Link>
            </div>
          </div>

          <div className="Mentor-DB-MentorBottomSection">
            <div className="Mentor-DB-RecentActivityCard">
              <h3>Recent Activities</h3>

              {RECENT_ACTIVITY_DATA.map((item) => (
                <ActivityRow key={item.id} {...item} />
              ))}

              <Link to="#" className="Mentor-DB-ActivityFooter">
                <span>View all activities</span>
                <img src={rightArrowDashboard} className="Mentor-DB-MentorArrow" alt="arrow" width={14} height={14} />
              </Link>
            </div>

            <div className="Mentor-DB-TopInternCard">
              <div className="Mentor-DB-TopInternHeader">
                <h3>Top Performing Interns</h3>
                <Link to="#">View all</Link>
              </div>

              {TOP_INTERN_DATA.map((item) => (
                <TopInternRow key={item.id} {...item} />
              ))}
            </div>

            <div className="Mentor-DB-ScheduleCard">
              <div className="Mentor-DB-ScheduleHeader">
                <h3>My Schedule</h3>
                <Link to="#">View Calendar</Link>
              </div>

              {SCHEDULE_DATA.map((item) => (
                <ScheduleRow key={item.id} {...item} />
              ))}

              <Link to="#" className="Mentor-DB-ScheduleFooter">
                <span>View full Schedule</span>
                <img src={rightArrowDashboard} className="Mentor-DB-MentorArrow" alt="arrow" width={14} height={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
