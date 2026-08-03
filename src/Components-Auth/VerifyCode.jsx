import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../Components-LandingPage/LandingPage.css";
import "./Login.css";

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

function LockIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="4.5" y="10.5" width="15" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 10.5V7.5a4 4 0 018 0v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="15.5" r="1.6" fill="currentColor" />
    </svg>
  );
}



const VARIANTS = {
  reset: {
    leftTitle: "Verify Identity",
    leftText: "We've sent a 6-digit code to your chosen method. Please enter it to continue.",
    initialSeconds: 599, // 09:59
    submitLabel: "Verify and Continue",
    footer: "encrypted",
    nextPath: "/reset-password",
  },
  "2fa": {
    leftTitle: "Security first.",
    leftText:
      "We take your account security seriously. Verify your identity to protect your internship applications and sensitive professional data.",
    trustLine: "Joined by 10k+ professionals",
    initialSeconds: 58,
    submitLabel: "Verify Identity",
    footer: "support",
    nextPath: "/mentor-dashboard",
  },

};

export default function VerifyCode() {
  const navigate = useNavigate();
  const location = useLocation();

  const flow = location.state?.flow || "reset";
  const method = location.state?.method || "email";
  const contact = location.state?.contact || "";

  const config = VARIANTS[flow] || VARIANTS.reset;

  const [digits, setDigits] = useState(Array(6).fill(""));
  const [secondsLeft, setSecondsLeft] = useState(config.initialSeconds);
  const [error, setError] = useState("");
  const inputRefs = useRef([]);

  useEffect(() => {
    if (secondsLeft <= 0) return;
    const timer = setInterval(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearInterval(timer);
  }, [secondsLeft]);

  const formatTime = (totalSeconds) => {
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  const handleDigitChange = (index, value) => {
    if (!/^[0-9]?$/.test(value)) return;

    const next = [...digits];
    next[index] = value;
    setDigits(next);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResend = () => {
    if (secondsLeft > 0) return;
    setSecondsLeft(config.initialSeconds);
    // TODO: trigger your real "resend code" API call
    console.log("Resending code for", flow, "via", method);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const code = digits.join("");

    if (code.length < 6) {
      setError("Please enter the full 6-digit code.");
      return;
    }

    setError("");
    
    console.log("Verifying code", code, "for flow:", flow);

    navigate(config.nextPath);
  };

  const subtitle =
    flow === "reset"
      ? "We've sent a 6-digit code to your registered email and phone number."
      : `We've sent a 6-digit code to your ${method === "sms" ? "mobile number" : "email"}${
          contact ? ` (${contact})` : ""
        }.`;

  return (
    <div className="ims-login-page">
      {/* LEFT */}
      <div className={`ims-login-left ${flow === "2fa" ? "ims-verify-left" : ""}`}>
        {flow === "2fa" ? (
          <div className="ims-auth-shield-box">
            <div className="ims-auth-shield-lg">
              <div className="ims-auth-shield-inner">
                <ShieldCheckIcon />
              </div>
            </div>

            <h1>{config.leftTitle}</h1>
            <p>{config.leftText}</p>

            {config.trustLine && (
              <p className="ims-verify-trustline">{config.trustLine}</p>
            )}
          </div>
        ) : (
          <div className="ims-login-left__inner ims-reset-left-inner">
            <div className="ims-auth-shield-lg">
              <div className="ims-auth-shield-inner">
                <ShieldCheckIcon />
              </div>
            </div>

            <h1>{config.leftTitle}</h1>
            <p>{config.leftText}</p>

            {config.trustLine && (
              <p style={{ marginTop: 30, fontWeight: 600 }}>{config.trustLine}</p>
            )}
          </div>
        )}
      </div>

      {/* RIGHT */}
      <div className="ims-login-right">
        <div className="ims-login-form-wrap">
          <h2>Enter Verification Code</h2>
          <p className="ims-login-subtitle">
            {subtitle} The code will expire in{" "}
            <span className="ims-timer-text">{formatTime(secondsLeft)}</span> seconds.
          </p>

          <form onSubmit={handleSubmit} noValidate>
            <div className="ims-otp-row">
              {digits.map((d, i) => (
                <input
                  key={i}
                  ref={(el) => (inputRefs.current[i] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  className="ims-otp-input"
                  value={d}
                  onChange={(e) => handleDigitChange(i, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(i, e)}
                />
              ))}
            </div>

            {error && <p className="ims-login-error">{error}</p>}

            <button type="submit" className="ims-btn ims-btn--dark ims-login-submit">
              {config.submitLabel} &rarr;
            </button>
          </form>

          <p className="ims-resend-text ims-resend-text--center">
            Didn&apos;t receive the code?{" "}
            <button type="button" onClick={handleResend} disabled={secondsLeft > 0}>
              Resend {secondsLeft > 0 ? `in ${formatTime(secondsLeft)}` : ""}
            </button>
          </p>

          {config.footer === "encrypted" && (
            <div className="ims-security-footer-row ims-security-footer-row--center">
              <span>
                <LockIcon width={14} height={14} /> End-to-end encrypted
              </span>
              <span>
                <ShieldCheckIcon width={14} height={14} /> Secure handshake
              </span>
            </div>
          )}

          {config.footer === "support" && (
            <>
              <div className="ims-verify-divider" />
              <div className="ims-verify-footer">
                <Link to="/two-step-verification" className="ims-verify-footer-link">
                  <ShieldCheckIcon width={16} height={16} />
                  Back to verification options
                </Link>
                <p className="ims-verify-support-text">
                  Need help?{" "}
                  <Link to="/contact-support" className="ims-verify-support-link">
                    Contact Support
                  </Link>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
