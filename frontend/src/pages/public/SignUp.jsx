import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import "./SignUp.css";
import "../../styles/pageTransition.css";
import { signup } from "../../features/auth/authSlice";
import Logo from "../../components/common/Logo";

/* ── Icons ── */
function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="signup-input-icon">
      <circle cx="12" cy="8" r="4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="signup-input-icon">
      <path
        d="M4.75 6.75h14.5v10.5H4.75V6.75Zm.5.4L12 12.6l6.75-5.45M5.42 17l4.85-4.1m3.46 0L18.58 17"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="signup-input-icon">
      <rect x="5" y="11" width="14" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 11V7a4 4 0 0 1 8 0v4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="signup-eye-icon">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24M1 1l22 22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="signup-eye-icon">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="signup-arrow-icon">
      <path d="M5 12h13m-5-5 5 5-5 5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="signup-badge-icon">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BackArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="signup-back-icon">
      <path d="M19 12H5m5-5-5 5 5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── Mascot ── */
function Mascot() {
  return (
    <div className="signup-mascot-wrap" aria-label="Hackathon builder mascot">
      <svg className="signup-mascot" viewBox="0 0 360 320" role="img">
        <title>Hackathon builder mascot</title>
        <defs>
          <linearGradient id="signupBotBody" x1="92" y1="72" x2="268" y2="250">
            <stop stopColor="#ffffff" />
            <stop offset="1" stopColor="#d8fff3" />
          </linearGradient>
          <linearGradient id="signupBotScreen" x1="105" y1="90" x2="255" y2="205">
            <stop stopColor="#3159f5" />
            <stop offset="1" stopColor="#0fa898" />
          </linearGradient>
          <linearGradient id="signupBadgeGlow" x1="115" y1="216" x2="245" y2="294">
            <stop stopColor="#ffd166" />
            <stop offset="1" stopColor="#ff7a7a" />
          </linearGradient>
          <filter id="signupBotShadow" x="-20%" y="-20%" width="140%" height="150%">
            <feDropShadow dx="0" dy="22" stdDeviation="18" floodColor="#21314f" floodOpacity="0.16" />
          </filter>
        </defs>

        <g className="signup-mascot-orbit">
          <path d="M70 172c46-72 177-86 226-10" fill="none" stroke="#9be7dc" strokeWidth="8" strokeLinecap="round" />
          <path d="M266 70l10 19 21 3-15 15 4 21-20-10-19 10 4-21-16-15 22-3 9-19Z" fill="#ffd166" />
          <circle cx="74" cy="174" r="9" fill="#ff7a7a" />
        </g>

        <g className="signup-mascot-body" filter="url(#signupBotShadow)">
          <path d="M120 112c0-39 27-67 60-67s60 28 60 67v14H120v-14Z" fill="#ffffff" />
          <rect x="92" y="96" width="176" height="142" rx="42" fill="url(#signupBotBody)" stroke="#182542" strokeWidth="7" />
          <rect x="119" y="123" width="122" height="66" rx="24" fill="url(#signupBotScreen)" />
          <path d="M145 156h.1M215 156h.1" stroke="#ffffff" strokeWidth="13" strokeLinecap="round" />
          <path d="M164 174c11 9 24 9 35 0" fill="none" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" />
          <path d="M180 45V22" stroke="#182542" strokeWidth="7" strokeLinecap="round" />
          <circle cx="180" cy="18" r="10" fill="#ff7a7a" stroke="#182542" strokeWidth="5" />
          <path d="M96 158c-29 3-48 21-48 47 0 24 17 40 42 45" fill="none" stroke="#182542" strokeWidth="11" strokeLinecap="round" />
          <path d="M264 158c29 3 48 21 48 47 0 24-17 40-42 45" fill="none" stroke="#182542" strokeWidth="11" strokeLinecap="round" />
          <rect x="120" y="224" width="120" height="58" rx="22" fill="url(#signupBadgeGlow)" stroke="#182542" strokeWidth="7" />
          <path d="M151 253h58M151 269h34" stroke="#182542" strokeWidth="6"strokeLinecap="round" />
          <path d="M226 244l8 9 14-19" fill="none" stroke="#182542" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        <g className="signup-spark">
          <path d="M67 79v22M56 90h22" stroke="#3159f5" strokeWidth="6" strokeLinecap="round" />
        </g>
        <g className="signup-spark signup-spark-two">
          <path d="M300 211v22M289 222h22" stroke="#ff7a7a" strokeWidth="6"strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

/* ── Main Signup Component ── */
function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const role = "participant";
  const [touched, setTouched] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading } = useSelector((state) => state.auth);
  const emailError = useMemo(() => {
    if (!touched.email || email.length === 0) return "";
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "" : "Enter a valid email address.";
  }, [email, touched.email]);

  const passwordError = useMemo(() => {
    if (!touched.password || password.length === 0) return "";
    return password.length >= 8 ? "" : "Password must be at least 8 characters.";
  }, [password, touched.password]);

  const confirmError = useMemo(() => {
    if (!touched.confirm || confirmPassword.length === 0) return "";
    return confirmPassword === password ? "" : "Passwords do not match.";
  }, [confirmPassword, password, touched.confirm]);

  const handleBlur = (field) => setTouched((t) => ({ ...t, [field]: true }));

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!fullName || !email || !password || !confirmPassword) {
    toast.error("Please fill all fields.");
    return;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match.");
    return;
  }

  try {
    const result = await dispatch(
      signup({
        fullName,
        email,
        password,
        confirmPassword,
        role,
      })
    ).unwrap();

    toast.success(result.message || "Account created successfully!");

    navigate("/login");
  } catch (error) {
    toast.error(error || "Signup failed.");
  }
};

  return (
    <main className="signup-page page-fade-in">
      <Link to="/" className="signup-back-link" aria-label="Back to Home">
        <BackArrowIcon />
        <span>Back to Home</span>
      </Link>

      <section className="signup-brand-panel" aria-labelledby="signup-brand-title">
        <nav className="signup-topbar" aria-label="Signup page navigation">
          <Link to="/" className="signup-brand-mark" aria-label="Codways home">
            <Logo size={36} />
            <span>CODWAYS</span>
          </Link>
        </nav>

        <div className="signup-hero-copy">
          <p className="signup-eyebrow">Build the future</p>
          <h1 id="signup-brand-title" className="signup-h1">
            Start your hacking journey.
          </h1>
          <p className="signup-supporting-copy">
            Create an account to join events, form teams, and submit your builds. Your workspace awaits.
          </p>
        </div>

        <div className="signup-showcase" aria-hidden="true">
          <Mascot />
        </div>
      </section>

      <section className="signup-auth-panel" aria-labelledby="signup-title">
        <div className="signup-auth-card">

          <div className="signup-auth-badge">
            <ShieldIcon />
            Secure Signup
          </div>

          <div className="signup-auth-heading">
            <h2 id="signup-title">Create an Account</h2>
            <p>Fill in your details to join as a participant.</p>
          </div>

          <form className="signup-form" onSubmit={handleSubmit} noValidate>

            <div className="signup-field-row">
              <div className="signup-field-group">
                <label htmlFor="signup-name">Full Name</label>
                <div className="signup-input-shell">
                  <UserIcon />
                  <input
                    id="signup-name"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    placeholder="John Doe"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    onBlur={() => handleBlur("name")}
                  />
                </div>
              </div>

              <div className="signup-field-group">
                <label htmlFor="signup-email">Email address</label>
                <div className={`signup-input-shell${emailError ? " input-error" : ""}`}>
                  <MailIcon />
                  <input
                    id="signup-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="name@college.edu"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={() => handleBlur("email")}
                    aria-describedby={emailError ? "signup-email-error" : undefined}
                    aria-invalid={Boolean(emailError)}
                  />
                </div>
                {emailError && <p className="signup-field-error" id="signup-email-error">{emailError}</p>}
              </div>
            </div>

            <div className="signup-field-row">
              <div className="signup-field-group">
                <label htmlFor="signup-password">Password</label>
                <div className={`signup-input-shell${passwordError ? " input-error" : ""}`}>
                  <LockIcon />
                  <input
                    id="signup-password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={() => handleBlur("password")}
                    aria-describedby={passwordError ? "signup-password-error" : undefined}
                    aria-invalid={Boolean(passwordError)}
                  />
                  <button
                    type="button"
                    className="signup-eye-toggle"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeIcon /> : <EyeOffIcon />}
                  </button>
                </div>
                {passwordError && <p className="signup-field-error" id="signup-password-error">{passwordError}</p>}
              </div>

              <div className="signup-field-group">
                <label htmlFor="signup-confirm">Confirm Password</label>
                <div className={`signup-input-shell${confirmError ? " input-error" : ""}`}>
                  <LockIcon />
                  <input
                    id="signup-confirm"
                    name="confirmPassword"
                    type={showConfirm ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="Repeat your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    onBlur={() => handleBlur("confirm")}
                    aria-describedby={confirmError ? "signup-confirm-error": undefined}
                    aria-invalid={Boolean(confirmError)}
                  />
                  <button
                    type="button"
                    className="signup-eye-toggle"
                    onClick={() => setShowConfirm((v) => !v)}
                    aria-label={showConfirm ? "Hide password" : "Show password"}
                  >
                    {showConfirm ? <EyeIcon /> : <EyeOffIcon />}
                  </button>
                </div>
                {confirmError && <p className="signup-field-error" id="signup-confirm-error">{confirmError}</p>}
              </div>
            </div>

            <button
  className="signup-submit-button"
  type="submit"
  disabled={loading}
>
              <span>
  {loading ? "Creating Account..." : "Create Account"}
</span>
              <ArrowIcon />
            </button>
          </form>

          <p className="signup-login-copy">
            Already have an account? <Link to="/login" className="signup-login-link">
  Login
</Link>
          </p>

        </div>
      </section>
    </main>
  );
}

export default Signup;