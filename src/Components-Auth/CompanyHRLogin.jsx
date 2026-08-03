import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import "../Components-LandingPage/LandingPage.css";
import "./Login.css";
import "./CompanyHRLogin.css";
import "./LoginOverrides.css";


import bgImage from "../assets/Auth/Background Image.png";
import iconLock from "../assets/Auth/Locks.png";

function EyeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M1.5 12S5 5 12 5s10.5 7 10.5 7-3.5 7-10.5 7S1.5 12 1.5 12z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function EyeOffIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M3 3l18 18M10.6 10.6a3 3 0 004.24 4.24M9.9 5.1A10.6 10.6 0 0112 5c7 0 10.5 7 10.5 7a13.3 13.3 0 01-3.1 3.9M6.2 6.9A13.6 13.6 0 001.5 12s3.5 7 10.5 7a10.7 10.7 0 004.2-.85"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GoogleGIcon(props) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fill="#4285F4" d="M23 12.27c0-.8-.07-1.57-.2-2.32H12v4.4h6.16a5.27 5.27 0 01-2.28 3.46v2.87h3.7c2.16-2 3.42-4.94 3.42-8.41z" />
      <path fill="#34A853" d="M12 23c3.08 0 5.66-1.02 7.55-2.77l-3.7-2.87c-1.02.69-2.33 1.1-3.85 1.1-2.96 0-5.47-2-6.36-4.68H1.8v2.94A11 11 0 0012 23z" />
      <path fill="#FBBC05" d="M5.64 13.78A6.6 6.6 0 015.28 12c0-.62.11-1.22.36-1.78V7.28H1.8A11 11 0 000 12c0 1.77.43 3.44 1.8 4.72l3.84-2.94z" />
      <path fill="#EA4335" d="M12 5.5c1.68 0 3.18.58 4.37 1.7l3.28-3.28C17.65 2.02 15.08 1 12 1a11 11 0 00-10.2 6.28l3.84 2.94C6.53 7.5 9.04 5.5 12 5.5z" />
    </svg>
  );
}

function UserIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5Zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function CompanyHRLogin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!form.username || !form.password) {
      return "Please fill in both fields.";
    }
    if (form.password.length < 8) {
      return "Password must be at least 8 characters.";
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    console.log("Logging in (HR/Company) with:", form);
    navigate("/two-step-verification");
  };

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        setError("");
        const res = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        });
        const profile = await res.json();
        console.log("Google sign-in successful:", profile);
        localStorage.setItem("googleUser", JSON.stringify(profile));
        navigate("/two-step-verification");
      } catch (err) {
        console.error("Failed to fetch Google profile:", err);
        setError("Google sign-in failed. Please try again.");
      }
    },
    onError: (err) => {
      console.error("Google sign-in error:", err);
      setError("Google sign-in failed. Please try again.");
    },
  });

  return (
    <div className="ims-login-page ims-hrlogin-page">
      <div
        className="ims-login-left ims-hrlogin-left"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="ims-login-left__inner">
          <div className="ims-logo ims-logo--light">HR and Company Portal</div>

          <h1>
            Empowering
            <br />
            Growth
            <br />
            through
            <br />
            Innovation.
          </h1>
          <p>
            Connect with leaders, manage talent, and drive your organization
            forward with our unified platform.
          </p>
        </div>

        <div className="ims-hrlogin-stats-block">
          <hr className="ims-hrlogin-divider" />
          <div className="ims-login-stats">
            <div>
              <strong>500+</strong>
              <span>Partner Companies</span>
            </div>
            <div>
              <strong>10k+</strong>
              <span>Success Stories</span>
            </div>
          </div>
        </div>

        <p className="ims-hrlogin-copyright">
          &copy; 2024 HR and Company Portal. All rights reserved.
        </p>
      </div>
      
      <div className="ims-login-right">
        <div className="ims-login-form-wrap">
          <h2>Welcome Back</h2>
          <p className="ims-login-subtitle">Manage your career journey.</p>

          <form onSubmit={handleSubmit} className="ims-login-form" noValidate>
            <label>
              Username
              <div className="ims-input-icon-wrap">
                <UserIcon />
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  value={form.username}
                  onChange={handleChange}
                />
              </div>
            </label>

            <label>
              <div className="ims-login-row" style={{ marginBottom: 8 }}>
                <span>Password</span>
                <Link to="/forgot-password" className="ims-text-link">
                  Forgot Password?
                </Link>
              </div>
              <div className="ims-input-icon-wrap">
                <img src={iconLock} alt="" className="ims-auth-icon-img" />
                <input
                  type={showPassword ? "text" : "password"}

                  name="password"
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={handleChange}
                  style={{ paddingRight: 42 }}
                />
                <button
                  type="button"
                  className="ims-eye-toggle"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOffIcon width={18} height={18} /> : <EyeIcon width={18} height={18} />}
                </button>
              </div>
            </label>

            <label className="ims-login-checkbox">
              <input type="checkbox" />
              Keep me signed in
            </label>

            {error && <p className="ims-login-error">{error}</p>}

            <button type="submit" className="ims-btn ims-btn--dark ims-login-submit">
              Sign In &rarr;
            </button>
          </form>

          <div className="ims-divider">OR CONTINUE WITH</div>

          <button type="button" className="ims-social-btn" onClick={handleGoogleLogin}>
            <GoogleGIcon width={18} height={18} />
            Sign in with Google
          </button>

          <p className="ims-login-footer-text">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="ims-text-link">
              Create Account
            </Link>
          </p>

          <div className="ims-auth-footer-links">
            <Link to="/help">Help</Link>
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
