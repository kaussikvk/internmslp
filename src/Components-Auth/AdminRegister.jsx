import adminRoomIcon from "../assets/Auth/adminroom.png";
import iconAdmin from "../assets/Auth/admin.png";

function ShieldCheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5l8-3z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 12l2.5 2.5L15.5 9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


export const ADMIN_ROLE_CONFIG = {
  label: "Admin",
  tabIconImg: iconAdmin,
  leftTitle: "Regain access to your professional future.",
  leftText:
    "Join thousands of companies and educational institutions managing their internship programs securely with InternMS.",
  leftBullets: [
    { icon: ShieldCheckIcon, title: "Role-based access", text: "Assign granular permissions across your organization." },
    { icon: ShieldCheckIcon, title: "Trusted & Secure", text: "Bank-grade encryption protects every admin session." },
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
