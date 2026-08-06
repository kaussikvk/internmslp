import adminRoomIcon from "../assets/Auth/adminroom.png";
import iconAdmin from "../assets/Auth/admin.png";
import adminShield1 from "../assets/Auth/Admin-shield1.png";
import adminShield2 from "../assets/Auth/Admin-sheild2.png";

export const ADMIN_ROLE_CONFIG = {
  label: "Admin",
  tabIconImg: iconAdmin,
  leftTitle: "Regain access to your professional future.",
  leftText:
    "Join thousands of companies and educational institutions managing their internship programs securely with InternMS.",
  leftBullets: [
    { iconImg: adminShield1, title: "Role-based access", text: "Assign granular permissions across your organization." },
    { iconImg: adminShield2, title: "Trusted & Secure", text: "Bank-grade encryption protects every admin session." },
  ],

  leftImage: adminRoomIcon,
  leftImageGlass: true,
  formTitle: "Admin Registration",
  formSubtitle: "Set up a secure administrator account for your organization.",
  fields: [
    { name: "fullName", label: "Full Name", type: "text", placeholder: "Enter your full name" },
    { name: "email", label: "Email Address", type: "email", placeholder: "Enter your email address" },
    { name: "phone", label: "Phone Number", type: "tel", placeholder: "Enter your phone number", hasPrefix: "+91" },
    { name: "organization", label: "Organization / Institution Name", type: "text", placeholder: "Enter your organization or institution name" },
    { name: "jobTitle", label: "Job Title / Designation", type: "text", placeholder: "e.g. IT Administrator" },
    {
      name: "country",
      label: "Country",
      type: "select",
      options: ["India", "United States", "United Kingdom", "Canada", "Australia", "Other"],
    },
  ],
};

export default ADMIN_ROLE_CONFIG;
