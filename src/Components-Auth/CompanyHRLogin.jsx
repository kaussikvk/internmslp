import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import "../Components-LandingPage/LandingPage.css";
import "./Login.css";
import "./AuthExtras.css";
import "./CompanyHRLogin.css";
import "./LoginOverrides.css";
import { EyeIcon, EyeOffIcon, GoogleGIcon, UserIcon } from "./AuthIcons";


import bgImage from "../assets/Auth/Background Image.png";
import iconLock from "../assets/Auth/Icon-Locks.png";

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
      {/* LEFT - brand panel */}
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

      {/* RIGHT - form panel */}
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
