// Static mock data for the Mentor Dashboard (to be wired to a real API later)

export const STAT_CARDS = [
  {
    key: "totalInterns",
    value: 12,
    label: "Total Interns",
    sub: "under your guidance",
    variant: "purple",
  },
  {
    key: "activeInterns",
    value: 8,
    label: "Active Interns",
    sub: "Currently Active",
    variant: "green",
  },
  {
    key: "tasksAssigned",
    value: 16,
    label: "Task Assigned",
    sub: "This Month",
    variant: "orange",
  },
  {
    key: "pendingReviews",
    value: 6,
    label: "Pending Reviews",
    sub: "Needs your Feedback",
    variant: "blue",
  },
  {
    key: "avgPerformance",
    value: "4.7",
    label: "Average Performance",
    sub: "Out of 5",
    variant: "pink",
  },
];

export const PERFORMANCE_OVERVIEW = [
  { week: "Week 1", avgScore: 20, taskCompletion: 5 },
  { week: "Week 2", avgScore: 25, taskCompletion: 10 },
  { week: "Week 3", avgScore: 30, taskCompletion: 12 },
  { week: "Week 4 ", avgScore: 42, taskCompletion: 15 },
  { week: "Week 4", avgScore: 50, taskCompletion: 20 },
];

export const INTERN_STATUS = [
  { name: "Active", value: 8, percent: 66.7, color: "#22c55e" },
  { name: "On leave", value: 2, percent: 16.7, color: "#eab308" },
  { name: "Completed", value: 2, percent: 16.7, color: "#ef4444" },
];

export const UPCOMING_DEADLINES = [
  {
    id: 1,
    month: "MAY",
    day: "22",
    title: "Project Report",
    person: "Aryan verma",
    due: "Due in 2 days",
    urgency: "high",
  },
  {
    id: 2,
    month: "MAY",
    day: "24",
    title: "UI/UX Case study",
    person: "Neha Singh",
    due: "Due in 4 days",
    urgency: "medium",
  },
  {
    id: 3,
    month: "MAY",
    day: "27",
    title: "Final Presentation",
    person: "Rahul Mehta",
    due: "Due in 7 days",
    urgency: "low",
  },
];

export const RECENT_ACTIVITIES = [
  {
    id: 1,
    type: "check",
    text: 'Aryan verma submitted the task "Landing Page Design"',
    time: "2 Hours ago",
  },
  {
    id: 2,
    type: "message",
    text: 'You reviewed Neha singh\u2019s task " User Research Report"',
    time: "5 Hours ago",
  },
  {
    id: 3,
    type: "people",
    text: "Rahul Mehta marked attendance for today",
    time: "1 Day ago",
  },
  {
    id: 4,
    type: "resource",
    text: 'New resources "Design System Guidelines" shared',
    time: "2 Days ago",
  },
];

export const TOP_PERFORMING_INTERNS = [
  { id: 1, name: "Priya Sharma", score: 90, avatarIndex: 0 },
  { id: 2, name: "Rahul Mehta", score: 88, avatarIndex: 1 },
  { id: 3, name: "Aryan Verma", score: 85, avatarIndex: 2 },
  { id: 4, name: "Vikram Singh", score: 82, avatarIndex: 3 },
];

export const MY_SCHEDULE = [
  {
    id: 1,
    time: "10:00 AM",
    title: "1:1 Meeting with Neha Singh",
    sub: "Mentorship Disscussion",
    variant: "purple",
  },
  {
    id: 2,
    time: "2:00 PM",
    title: "Project Review - Team Alpha",
    sub: "Review & Feedback",
    variant: "orange",
  },
  {
    id: 3,
    time: "4:00 PM",
    title: "Weekly Mentor Sync",
    sub: "Team Meeting",
    variant: "teal",
  },
];
