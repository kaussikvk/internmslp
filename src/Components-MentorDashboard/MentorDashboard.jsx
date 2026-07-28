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

import iconHome from "../assets/DashBoard/Home.png";
import iconClock from "../assets/DashBoard/Clock.png";
import iconStats from "../assets/DashBoard/Stats.png";
import iconResource from "../assets/DashBoard/Resourse.png";
import iconSpeaker from "../assets/DashBoard/speaker.png";
import iconCalendar from "../assets/DashBoard/Calender.png";
import iconSettings from "../assets/DashBoard/settings.png";

import iconSearch from "../assets/DashBoard/search.png";
import iconBell from "../assets/DashBoard/Bell.png";
import iconProfile from "../assets/DashBoard/ProfileIcon-dashboard.png";

import iconPersonOutline2 from "../assets/DashBoard/Personoutline2.png";
import iconGreenTick from "../assets/DashBoard/greentick.png";
import iconBrownPad from "../assets/DashBoard/brownpad.png";
import iconGreenStats from "../assets/DashBoard/greenstats.png";
import iconStar from "../assets/DashBoard/star.png";

import iconMessage2 from "../assets/DashBoard/Message2.png";
import iconF7Person from "../assets/DashBoard/person-icon.png";
import iconNotepad from "../assets/DashBoard/notepad.png";

import iconHamburger from "../assets/DashBoard/hamburger.png";
import iconDownArrow from "../assets/DashBoard/down-arrow.png";
import iconRightArrow from "../assets/DashBoard/right-arrow.png";

import person1 from "../assets/DashBoard/Person1-dashboard.png";
import person2 from "../assets/DashBoard/Person2-Dashboard.png";
import person3 from "../assets/DashBoard/Person3-dashboard.png";
import person4 from "../assets/DashBoard/person4.png";


const NAV_ITEMS = [
  { label: "Dashboard", icon: iconHome, path: "/mentor-dashboard", alt: "Home" },
  { label: "My Interns", icon: iconPersonOutline2, path: "#", alt: "intern-user" },
  { label: "Tasks & Reviews", icon: iconNotepad, path: "#", alt: "task" },
  { label: "Attendance", icon: iconClock, path: "#", alt: "clock" },
  { label: "Performance", icon: iconStats, path: "#", alt: "performicon" },
  { label: "Messages", icon: iconMessage2, path: "#", alt: "message" },
  { label: "Resources", icon: iconResource, path: "#", alt: "resourceicon" },
  { label: "Announcements", icon: iconSpeaker, path: "#", alt: "speaker" },
  { label: "Reports", icon: iconNotepad, path: "#", alt: "report" },
  { label: "Calender", icon: iconCalendar, path: "#", alt: "calendar" },
  { label: "Settings", icon: iconSettings, path: "#", alt: "settings" },
];

const STAT_CARDS = [
  { key: "totalInterns", containerClass: "InternIconContainer", icon: iconPersonOutline2, iconClass: "InternCount", value: 12, title: "Total Interns", subtitle: "under your guidance" },
  { key: "activeInterns", containerClass: "ActiveInternIconContainer", icon: iconGreenTick, iconClass: "PresentIcon", value: 8, title: "Active Interns", subtitle: "Currently Active" },
  { key: "tasksAssigned", containerClass: "TaskIconContainer", icon: iconBrownPad, iconClass: "Clipboard", value: 16, title: "Task Assigned", subtitle: "This Month" },
  { key: "pendingReviews", containerClass: "ReviewIconContainer", icon: iconGreenStats, iconClass: "Reviews", value: 6, title: "Pending Reviews", subtitle: "Needs your Feedback" },
  { key: "avgPerformance", containerClass: "StarIconContainer", icon: iconStar, iconClass: "Star", value: "4.7", title: "Average Performance", subtitle: "Out of 5" },
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
  { id: 1, icon: iconGreenTick, bgColor: "ActivityIconContainerGreen", title: 'Aryan verma submitted the task "Landing Page Design"', time: "2 Hours ago" },
  { id: 2, icon: iconMessage2, bgColor: "ActivityIconContainerBlue", title: 'You reviewed Neha singh\u2019s task " User Research Report"', time: "5 Hours ago" },
  { id: 3, icon: iconF7Person, bgColor: "ActivityIconContainerYellow", title: "Rahul Mehta marked attendance for today", time: "1 Day ago" },
  { id: 4, icon: iconNotepad, bgColor: "ActivityIconContainerPink", title: 'New resources "Design System Guidelines" shared', time: "2 Days ago" },
];

const TOP_INTERN_DATA = [
  { id: 1, image: person1, name: "Priya Sharma", progress: 90 },
  { id: 2, image: person2, name: "Rahul Mehta", progress: 88 },
  { id: 3, image: person3, name: "Aryan Verma", progress: 85 },
  { id: 4, image: person4, name: "Vikram Singh", progress: 82 },
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
    <div className="MentorStatCard">
      <div className={containerClass}>
        <img src={icon} className={iconClass} alt="" width={22} height={22} />
      </div>
      <div className="MentorStatContent">
        <h2>{value}</h2>
        <p>{title}</p>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}

function DeadlineRow({ month, date, title, name, due, color }) {
  return (
    <div className="DeadlineItem">
      <div className="DeadlineDateBox">
        <span>{month}</span>
        <h4>{date}</h4>
      </div>

      <div className="DeadlineContent">
        <div className="DeadlineHeader">
          <h4>{title}</h4>
          <span className={`DeadlineStatus ${color}`}>{due}</span>
        </div>
        <p>{name}</p>
      </div>
    </div>
  );
}

function ActivityRow({ icon, bgColor, title, time }) {
  return (
    <div className="ActivityItem">
      <div className={`ActivityIconContainer ${bgColor}`}>
        <img src={icon} alt="" width={18} height={18} />
      </div>
      <div className="ActivityContent">
        <h4>{title}</h4>
        <p>{time}</p>
      </div>
    </div>
  );
}

function TopInternRow({ image, name, progress }) {
  return (
    <div className="TopInternItem">
      <img src={image} className="TopInternImage" alt={name} />

      <div className="ProgressSection">
        <div className="ProgressBar">
          <div className="ProgressFill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <h4>{progress}%</h4>
    </div>
  );
}

function ScheduleRow({ time, title, subTitle, color }) {
  return (
    <div className="ScheduleItem">
      <div className={`ScheduleTime ${color}`}>{time}</div>

      <div className="ScheduleContent">
        <h4>{title}</h4>
        <p>
          <span className="ScheduleDot"></span>
          {subTitle}
        </p>
      </div>
    </div>
  );
}



export default function MentorDashboard() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  return (
    <div className="MentorDashboardContainer">
      <div className="MentorSidebar">
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
            <img src={iconHamburger} className="Hamburger" alt="HamburgerIcon" width={22} height={22} />

            <div className="MentorWelcomeSection">
              <h4>Welcome back, Mentor</h4>
              <p>Welcome back, John Mentor!</p>
            </div>
          </div>

          <div className="MentorNavbarCenter">
            <div className="MentorSearchBox">
              <img src={iconSearch} className="SearchIcon" alt="search" width={18} height={18} />
              <input type="text" placeholder="Search anything......" />
            </div>
          </div>

          <div className="MentorNavbarRight">
            <div className="NotificationSection">
              <img src={iconBell} className="NotificationIcon" alt="NotificationIcon" width={20} height={20} />
              <span className="NotificationBadge"></span>
            </div>

            <div className="MentorProfileCircle">
              <img src={iconProfile} className="MentorProfileImage" alt="mentor-icon" width={38} height={38} />
            </div>

            <div className="MentorDetails">
              <h4>Mentor</h4>
              <p>Mentor Dashboard</p>
            </div>

            <img src={iconDownArrow} className="ProfileArrow" alt="arrow" width={11} height={11} />
          </div>
        </div>

        <div className="MentorDashboardContent">
          <div className="MentorStatsContainer">
            {STAT_CARDS.map((card) => (
              <StatCard key={card.key} {...card} />
            ))}
          </div>

          <div className="MentorAnalyticsSection">
            <div className="PerformanceCard">
              <div className="PerformanceCardHeader">
                <h3>Intern Performance Overview</h3>
                <span className="SelectedMonth">
                  This Month
                  <img src={iconDownArrow} className="MonthArrowIcon" alt="arrow" width={10} height={10} />
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

              <div className="ChartPoint">
                <span>
                  <span className="PointDot Blue"></span>
                  Average Score
                </span>
                <span>
                  <span className="PointDot Green"></span>
                  Task Completion (%)
                </span>
              </div>
            </div>

            <div className="InternStatusCard">
              <h3>Intern By Status</h3>
              <div className="InternStatusContent">
                <div className="DonutChartContainer">
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={INTERN_STATUS_DATA}
                        dataKey="value"
                        nameKey="name"
                        innerRadius={58}
                        outerRadius={82}
                        paddingAngle={2}
                        startAngle={90}
                        endAngle={-270}
                      >
                        {INTERN_STATUS_DATA.map((item) => (
                          <Cell key={item.name} fill={item.color} stroke="none" />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>

                  <div className="DonutChartCenter">
                    <h2>12</h2>
                    <p>Total</p>
                  </div>
                </div>

                <div className="StatusPoint">
                  {INTERN_STATUS_DATA.map((s) => (
                    <div key={s.name}>
                      <span className={`StatusDot ${s.dotClass}`}></span>
                      <p>
                        {s.name} {s.value}({s.percent}%)
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="DeadlineCard">
              <h3>Upcoming Deadlines</h3>

              {DEADLINE_DATA.map((item) => (
                <DeadlineRow key={item.id} {...item} />
              ))}

              <Link to="#" className="ViewAllDeadlines">
                View All Deadlines <img src={iconRightArrow} className="MentorArrow" alt="arrow" width={14} height={14} />
              </Link>
            </div>
          </div>

          <div className="MentorBottomSection">
            <div className="RecentActivityCard">
              <h3>Recent Activities</h3>

              {RECENT_ACTIVITY_DATA.map((item) => (
                <ActivityRow key={item.id} {...item} />
              ))}

              <Link to="#" className="ActivityFooter">
                <span>View all activities</span>
                <img src={iconRightArrow} className="MentorArrow" alt="arrow" width={14} height={14} />
              </Link>
            </div>

            <div className="TopInternCard">
              <div className="TopInternHeader">
                <h3>Top Performing Interns</h3>
                <Link to="#">View all</Link>
              </div>

              {TOP_INTERN_DATA.map((item) => (
                <TopInternRow key={item.id} {...item} />
              ))}
            </div>

            <div className="ScheduleCard">
              <div className="ScheduleHeader">
                <h3>My Schedule</h3>
                <Link to="#">View Calendar</Link>
              </div>

              {SCHEDULE_DATA.map((item) => (
                <ScheduleRow key={item.id} {...item} />
              ))}

              <Link to="#" className="ScheduleFooter">
                <span>View full Schedule</span>
                <img src={iconRightArrow} className="MentorArrow" alt="arrow" width={14} height={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
