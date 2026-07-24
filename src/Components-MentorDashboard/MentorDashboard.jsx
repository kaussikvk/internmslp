import React from "react";
import { Link } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import "./MentorDashboard.css";


import {
  STAT_CARDS,
  PERFORMANCE_OVERVIEW,
  INTERN_STATUS,
  UPCOMING_DEADLINES,
  RECENT_ACTIVITIES,
  TOP_PERFORMING_INTERNS,
  MY_SCHEDULE,
} from "./mentorDashboardData";

import iconHome from "../assets/DashBoard/icon-Home.png";
import iconPersonOutline from "../assets/DashBoard/Icon-personoutline.png";
import iconTick from "../assets/DashBoard/Icon-Tick.png";
import iconClock from "../assets/DashBoard/Icon-Clock.png";
import iconStats from "../assets/DashBoard/Icon-Stats.png";
import iconMessage from "../assets/DashBoard/Icon-message.png";
import iconResource from "../assets/DashBoard/Icon-Resourse.png";
import iconSpeaker from "../assets/DashBoard/Icon-speaker.png";
import iconReports from "../assets/DashBoard/Icon-reports.png";
import iconCalendar from "../assets/DashBoard/Icon-Calender.png";
import iconSettings from "../assets/DashBoard/Icon-settings.png";

import iconSearch from "../assets/DashBoard/Icon-search.png";
import iconBell from "../assets/DashBoard/Icon-Bell.png";
import iconProfile from "../assets/DashBoard/ProfileIcon-dashboard.png";

import iconPersonOutline2 from "../assets/DashBoard/Icon-Personoutline2.png";
import iconGreenTick from "../assets/DashBoard/Icon-greentick.png";
import iconBrownPad from "../assets/DashBoard/Icon-brownpad.png";
import iconGreenStats from "../assets/DashBoard/Icon-greenstats.png";
import iconStar from "../assets/DashBoard/Icon-star.png";

import iconMessage2 from "../assets/DashBoard/Icon-Message2.png";
import iconF7Person from "../assets/DashBoard/f7_person-2.png";
import iconNotepad from "../assets/DashBoard/Icon-notepad.png";

import person1 from "../assets/DashBoard/Person1-dashboard.png";
import person2 from "../assets/DashBoard/Person2-Dashboard.png";
import person3 from "../assets/DashBoard/Person3-dashboard.png";
import person4 from "../assets/DashBoard/4140048 1.png";

const NAV_ITEMS = [
  { key: "dashboard", label: "Dashboard", icon: iconHome, path: "/mentor-dashboard" },
  { key: "my-interns", label: "My Interns", icon: iconPersonOutline2, path: "#" },
  { key: "tasks-reviews", label: "Tasks & Reviews", icon: iconNotepad, path: "#" },
  { key: "attendance", label: "Attendance", icon: iconClock, path: "#" },
  { key: "performance", label: "Performance", icon: iconStats, path: "#" },
  { key: "messages", label: "Messages", icon: iconMessage2, path: "#" },
  { key: "resources", label: "Resources", icon: iconResource, path: "#" },
  { key: "announcements", label: "Announcements", icon: iconSpeaker, path: "#" },
  { key: "reports", label: "Reports", icon: iconNotepad, path: "#" },

  { key: "calendar", label: "Calender", icon: iconCalendar, path: "#" },
  { key: "settings", label: "Settings", icon: iconSettings, path: "#" },
];


const STAT_ICON_MAP = {
  totalInterns: iconPersonOutline2,
  activeInterns: iconGreenTick,
  tasksAssigned: iconBrownPad,
  pendingReviews: iconGreenStats,
  avgPerformance: iconStar,
};

const ACTIVITY_ICON_MAP = {
  check: { icon: iconGreenTick, className: "mdb-activity-icon--green" },
  message: { icon: iconMessage2, className: "mdb-activity-icon--teal" },
  people: { icon: iconF7Person, className: "mdb-activity-icon--yellow" },
  resource: { icon: iconNotepad, className: "mdb-activity-icon--pink" },
};

const AVATAR_IMAGES = [person1, person2, person3, person4];


const SCHEDULE_VARIANT_CLASS = {
  purple: "mdb-schedule-item--purple",
  orange: "mdb-schedule-item--orange",
  teal: "mdb-schedule-item--teal",
};

const URGENCY_CLASS = {
  high: "mdb-deadline-pill--high",
  medium: "mdb-deadline-pill--medium",
  low: "mdb-deadline-pill--low",
};

export default function MentorDashboard() {
  return (
    <div className="mdb-shell">
      {/* SIDEBAR */}
      <aside className="mdb-sidebar">
        <div className="mdb-sidebar__brand">
          <div className="mdb-sidebar__logo">InternMS</div>
          <div className="mdb-sidebar__tagline">Internship Management System</div>
        </div>

        <nav className="mdb-sidebar__nav">
          {NAV_ITEMS.map((item, idx) => {
            const isActive = idx === 0;
            return (
              <Link
                key={item.key}
                to={item.path}
                className={`mdb-sidebar__link ${isActive ? "mdb-sidebar__link--active" : ""}`}
              >
                <img className="mdb-sidebar__icon" src={item.icon} alt="" width={20} height={20} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

      </aside>

      {/* MAIN */}
      <div className="mdb-main">
        {/* HEADER */}
        <header className="mdb-header">
          <button type="button" className="mdb-header__menu-btn" aria-label="Toggle menu">
            <svg viewBox="0 0 24 24" fill="none" width={22} height={22}>
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>

          <div className="mdb-header__welcome">
            <strong>Welcome back, Mentor</strong>
            <span>Welcome back, John Mentor!</span>
          </div>

          <div className="mdb-header__search">
            <img src={iconSearch} alt="" width={18} height={18} />
            <input type="text" placeholder="Search anything......" />
          </div>

          <button type="button" className="mdb-header__icon-btn" aria-label="Notifications">
            <img src={iconBell} alt="" width={20} height={20} />
            <span className="mdb-header__notif-dot" />
          </button>

          <div className="mdb-header__profile">
            <div className="mdb-header__avatar">
              <img src={iconProfile} alt="" width={38} height={38} />
            </div>
            <div className="mdb-header__profile-text">
              <strong>Mentor</strong>
              <span>Mentor Dashboard</span>
            </div>
            <svg viewBox="0 0 24 24" fill="none" width={16} height={16}>
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </header>


        {/* CONTENT */}
        <main className="mdb-content">
          {/* STAT CARDS */}
          <section className="mdb-stats-row">
            {STAT_CARDS.map((card) => (
              <div className="mdb-stat-card" key={card.key}>
                <div className={`mdb-stat-card__icon mdb-stat-card__icon--${card.variant}`}>
                  <img src={STAT_ICON_MAP[card.key]} alt="" width={22} height={22} />
                </div>

                <div className="mdb-stat-card__value">{card.value}</div>
                <div className="mdb-stat-card__label">{card.label}</div>
                <div className="mdb-stat-card__sub">{card.sub}</div>
              </div>
            ))}
          </section>

          {/* MIDDLE ROW: chart / donut / deadlines */}
          <section className="mdb-mid-row">
            <div className="mdb-panel mdb-panel--chart">
              <div className="mdb-panel__header">
                <h3>Intern Performance Overview</h3>
                <button type="button" className="mdb-dropdown-btn">
                  This Month{" "}
                  <svg viewBox="0 0 24 24" fill="none" width={14} height={14}>
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

              </div>

              <div className="mdb-chart-wrap">
                <ResponsiveContainer width="100%" height={260}>
                  <LineChart data={PERFORMANCE_OVERVIEW} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eef1f6" />
                    <XAxis dataKey="week" tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: "#8a94a6" }} />
                    <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: "#8a94a6" }} />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="avgScore"
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
              </div>

              <div className="mdb-chart-legend">
                <span>
                  <i className="mdb-legend-dot mdb-legend-dot--purple" /> Average Score
                </span>
                <span>
                  <i className="mdb-legend-dot mdb-legend-dot--green" /> Task Completion(%)
                </span>
              </div>
            </div>

            <div className="mdb-panel mdb-panel--donut">
              <div className="mdb-panel__header">
                <h3>Intern By Status</h3>
              </div>

              <div className="mdb-donut-wrap">
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={INTERN_STATUS}
                      dataKey="value"
                      nameKey="name"
                      innerRadius={58}
                      outerRadius={82}
                      paddingAngle={2}
                      startAngle={90}
                      endAngle={-270}
                    >
                      {INTERN_STATUS.map((entry) => (
                        <Cell key={entry.name} fill={entry.color} stroke="none" />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="mdb-donut-center">
                  <strong>12</strong>
                  <span>Total</span>
                </div>
              </div>

              <ul className="mdb-donut-legend">
                {INTERN_STATUS.map((s) => (
                  <li key={s.name}>
                    <i className="mdb-legend-dot" style={{ background: s.color }} />
                    <span>{s.name}</span>
                    <strong>
                      {s.value}({s.percent}%)
                    </strong>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mdb-panel mdb-panel--deadlines">
              <div className="mdb-panel__header">
                <h3>Upcoming Deadlines</h3>
              </div>

              <ul className="mdb-deadline-list">
                {UPCOMING_DEADLINES.map((d) => (
                  <li key={d.id} className="mdb-deadline-item">
                    <div className="mdb-deadline-date">
                      <span>{d.month}</span>
                      <strong>{d.day}</strong>
                    </div>
                    <div className="mdb-deadline-info">
                      <strong>{d.title}</strong>
                      <span>{d.person}</span>
                    </div>
                    <span className={`mdb-deadline-pill ${URGENCY_CLASS[d.urgency]}`}>{d.due}</span>
                  </li>
                ))}
              </ul>

              <Link to="#" className="mdb-panel__footer-link">
                View All Deadlines{" "}
                <svg viewBox="0 0 24 24" fill="none" width={14} height={14}>
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>

            </div>
          </section>

          {/* BOTTOM ROW: activities / top performers / schedule */}
          <section className="mdb-bottom-row">
            <div className="mdb-panel mdb-panel--activities">
              <div className="mdb-panel__header">
                <h3>Recent Activities</h3>
              </div>

              <ul className="mdb-activity-list">
                {RECENT_ACTIVITIES.map((a) => {
                  const meta = ACTIVITY_ICON_MAP[a.type] || ACTIVITY_ICON_MAP.check;
                  return (
                    <li key={a.id} className="mdb-activity-item">
                      <div className={`mdb-activity-icon ${meta.className}`}>
                        <img src={meta.icon} alt="" width={18} height={18} />
                      </div>
                      <div className="mdb-activity-text">
                        <p>{a.text}</p>
                        <span>{a.time}</span>
                      </div>
                    </li>
                  );
                })}
              </ul>


              <Link to="#" className="mdb-panel__footer-link">
                View all activities{" "}
                <svg viewBox="0 0 24 24" fill="none" width={14} height={14}>
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>

            </div>

            <div className="mdb-panel mdb-panel--top-interns">
              <div className="mdb-panel__header">
                <h3>Top Performing Interns</h3>
                <Link to="#" className="mdb-viewall-link">
                  View all
                </Link>
              </div>

              <ul className="mdb-top-interns-list">
                {TOP_PERFORMING_INTERNS.map((intern) => (
                  <li key={intern.id} className="mdb-top-intern-item">
                    <img
                      className="mdb-top-intern-avatar"
                      src={AVATAR_IMAGES[intern.avatarIndex % AVATAR_IMAGES.length]}
                      alt={intern.name}
                    />
                    <div className="mdb-top-intern-bar-wrap">
                      <div className="mdb-top-intern-bar-track">
                        <div
                          className="mdb-top-intern-bar-fill"
                          style={{ width: `${intern.score}%` }}
                        />
                      </div>
                    </div>
                    <strong className="mdb-top-intern-score">{intern.score}%</strong>
                  </li>
                ))}
              </ul>

            </div>

            <div className="mdb-panel mdb-panel--schedule">
              <div className="mdb-panel__header">
                <h3>My Schedule</h3>
                <Link to="#" className="mdb-viewall-link">
                  View Calendar
                </Link>
              </div>

              <ul className="mdb-schedule-list">
                {MY_SCHEDULE.map((s) => (
                  <li key={s.id} className={`mdb-schedule-item ${SCHEDULE_VARIANT_CLASS[s.variant]}`}>
                    <div className="mdb-schedule-time">{s.time}</div>
                    <div className="mdb-schedule-info">
                      <strong>{s.title}</strong>
                      <span>
                        <i className="mdb-schedule-dot" />
                        {s.sub}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              <Link to="#" className="mdb-panel__footer-link">
                View full Schedule{" "}
                <svg viewBox="0 0 24 24" fill="none" width={14} height={14}>
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>

            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
