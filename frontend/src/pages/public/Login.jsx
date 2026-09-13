// // // import { useMemo, useState } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import { useDispatch, useSelector } from "react-redux";
// // import { toast } from "react-toastify";

// // import "./Login.css";
// // import { login } from "../../features/auth/authSlice";
// // import Logo from "../../components/common/Logo";
// // /* ── Auth providers ── */
// // const authProviders = [
// //   { id: "google", label: "Continue with Google", icon: "google" },
// //   { id: "github", label: "Continue with GitHub", icon: "github" },
// // ];

// // /* ── Icons ── */
// // function GoogleIcon() {
// //   return (
// //     <svg viewBox="0 0 24 24" aria-hidden="true" className="login-button-icon">
// //       <path fill="#4285f4" d="M21.6 12.23c0-.76-.07-1.48-.2-2.18H12v4.13h5.38a4.6 4.6 0 0 1-2 3.02v2.51h3.24c1.9-1.74 2.98-4.3 2.98-7.48Z" />
// //       <path fill="#34a853" d="M12 22c2.7 0 4.96-.9 6.62-2.29l-3.24-2.51c-.9.6-2.05.96-3.38.96-2.6 0-4.8-1.75-5.59-4.12H3.06v2.59A10 10 0 0 0 12 22Z" />
// //       <path fill="#fbbc05" d="M6.41 14.04A6 6 0 0 1 6.1 12c0-.7.11-1.38.31-2.04V7.37H3.06A10 10 0 0 0 2 12c0 1.61.38 3.14 1.06 4.63l3.35-2.59Z" />
// //       <path fill="#ea4335" d="M12 5.84c1.47 0 2.79.51 3.83 1.5l2.87-2.87A9.64 9.64 0 0 0 12 2a10 10 0 0 0-8.94 5.37l3.35 2.59C7.2 7.59 9.4 5.84 12 5.84Z" />
// //     </svg>
// //   );
// // }

// // function GitHubIcon() {
// //   return (
// //     <svg viewBox="0 0 24 24" aria-hidden="true" className="login-button-icon">
// //       <path
// //         fill="currentColor"
// //         d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.52 1.03 1.52 1.03.89 1.52 2.34 1.08 2.91.83.09-.64.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.48 9.48 0 0 1 12 7.02c.85 0 1.7.11 2.5.34 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.56c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
// //       />
// //     </svg>
// //   );
// // }

// // function MailIcon() {
// //   return (
// //     <svg viewBox="0 0 24 24" aria-hidden="true" className="login-input-icon">
// //       <path
// //         d="M4.75 6.75h14.5v10.5H4.75V6.75Zm.5.4L12 12.6l6.75-5.45M5.42 17l4.85-4.1m3.46 0L18.58 17"
// //         fill="none"
// //         stroke="currentColor"
// //         strokeLinecap="round"
// //         strokeLinejoin="round"
// //         strokeWidth="1.7"
// //       />
// //     </svg>
// //   );
// // }

// // function LockIcon() {
// //   return (
// //     <svg viewBox="0 0 24 24" aria-hidden="true" className="login-input-icon">
// //       <rect x="5" y="11" width="14" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
// //       <path d="M8 11V7a4 4 0 0 1 8 0v4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
// //     </svg>
// //   );
// // }

// // function EyeOffIcon() {
// //   return (
// //     <svg viewBox="0 0 24 24" aria-hidden="true" className="login-eye-icon">
// //       <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24M1 1l22 22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
// //     </svg>
// //   );
// // }

// // function EyeIcon() {
// //   return (
// //     <svg viewBox="0 0 24 24" aria-hidden="true" className="login-eye-icon">
// //       <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
// //       <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1.7" />
// //     </svg>
// //   );
// // }

// // function ArrowIcon() {
// //   return (
// //     <svg viewBox="0 0 24 24" aria-hidden="true" className="login-arrow-icon">
// //       <path
// //         d="M5 12h13m-5-5 5 5-5 5"
// //         fill="none"
// //         stroke="currentColor"
// //         strokeLinecap="round"
// //         strokeLinejoin="round"
// //         strokeWidth="2"
// //       />
// //     </svg>
// //   );
// // }

// // function ShieldIcon() {
// //   return (
// //     <svg viewBox="0 0 24 24" aria-hidden="true" className="login-badge-icon">
// //       <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
// //       <path d="M9 12l2 2 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
// //     </svg>
// //   );
// // }

// // /* ── Mascot ── */
// // function Mascot() {
// //   return (
// //     <div className="login-mascot-wrap" aria-label="Animated hackathon builder mascot">
// //       <svg className="login-mascot" viewBox="0 0 360 320" role="img">
// //         <title>Animated hackathon builder mascot</title>
// //         <defs>
// //           <linearGradient id="loginBotBody" x1="92" y1="72" x2="268" y2="250">
// //             <stop stopColor="#ffffff" />
// //             <stop offset="1" stopColor="#d8fff3" />
// //           </linearGradient>
// //           <linearGradient id="loginBotScreen" x1="105" y1="90" x2="255" y2="205">
// //             <stop stopColor="#3159f5" />
// //             <stop offset="1" stopColor="#0fa898" />
// //           </linearGradient>
// //           <linearGradient id="loginBadgeGlow" x1="115" y1="216" x2="245" y2="294">
// //             <stop stopColor="#ffd166" />
// //             <stop offset="1" stopColor="#ff7a7a" />
// //           </linearGradient>
// //           <filter id="loginBotShadow" x="-20%" y="-20%" width="140%" height="150%">
// //             <feDropShadow dx="0" dy="22" stdDeviation="18" floodColor="#21314f" floodOpacity="0.16" />
// //           </filter>
// //         </defs>

// //         <g className="login-mascot-orbit">
// //           <path d="M70 172c46-72 177-86 226-10" fill="none" stroke="#9be7dc" strokeWidth="8" strokeLinecap="round" />
// //           <path d="M266 70l10 19 21 3-15 15 4 21-20-10-19 10 4-21-16-15 22-3 9-19Z" fill="#ffd166" />
// //           <circle cx="74" cy="174" r="9" fill="#ff7a7a" />
// //         </g>

// //         <g className="login-mascot-body" filter="url(#loginBotShadow)">
// //           <path d="M120 112c0-39 27-67 60-67s60 28 60 67v14H120v-14Z" fill="#ffffff" />
// //           <rect x="92" y="96" width="176" height="142" rx="42" fill="url(#loginBotBody)" stroke="#182542" strokeWidth="7" />
// //           <rect x="119" y="123" width="122" height="66" rx="24" fill="url(#loginBotScreen)" />
// //           <path d="M145 156h.1M215 156h.1" stroke="#ffffff" strokeWidth="13" strokeLinecap="round" />
// //           <path d="M164 174c11 9 24 9 35 0" fill="none" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" />
// //           <path d="M180 45V22" stroke="#182542" strokeWidth="7" strokeLinecap="round" />
// //           <circle cx="180" cy="18" r="10" fill="#ff7a7a" stroke="#182542" strokeWidth="5" />
// //           <path d="M96 158c-29 3-48 21-48 47 0 24 17 40 42 45" fill="none" stroke="#182542" strokeWidth="11" strokeLinecap="round" />
// //           <path d="M264 158c29 3 48 21 48 47 0 24-17 40-42 45" fill="none" stroke="#182542" strokeWidth="11" strokeLinecap="round" />
// //           <rect x="120" y="224" width="120" height="58" rx="22" fill="url(#loginBadgeGlow)" stroke="#182542" strokeWidth="7" />
// //           <path d="M151 253h58M151 269h34" stroke="#182542" strokeWidth="6" strokeLinecap="round" />
// //           <path d="M226 244l8 9 14-19" fill="none" stroke="#182542" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
// //         </g>

// //         <g className="login-spark">
// //           <path d="M67 79v22M56 90h22" stroke="#3159f5" strokeWidth="6" strokeLinecap="round" />
// //         </g>
// //         <g className="login-spark login-spark-two">
// //           <path d="M300 211v22M289 222h22" stroke="#ff7a7a" strokeWidth="6" strokeLinecap="round" />
// //         </g>
// //       </svg>
// //     </div>
// //   );
// // }

// // /* ── Main Login Component ── */
// // function Login() {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [rememberMe, setRememberMe] = useState(false);
// //   const [touched, setTouched] = useState(false);
// //   const [selectedProvider, setSelectedProvider] = useState("");
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();

// //   const { loading } = useSelector((state) => state.auth);
// //   const emailError = useMemo(() => {
// //     if (!touched || email.length === 0) return "";
// //     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "" : "Enter a valid email address.";
// //   }, [email, touched]);

  
// // const handleSubmit = async (e) => {
// //   e.preventDefault();

// //   if (!email || !password) {
// //     toast.error("Please enter email and password.");
// //     return;
// //   }

// //   try {
// //     const result = await dispatch(
// //       login({
// //         email,
// //         password,
// //       })
// //     ).unwrap();

// //     toast.success(result.message || "Login successful");

// //     const role = result.data.role;

// //     switch (role) {
// //       case "participant":
// //         navigate("/participant/dashboard");
// //         break;

// //       case "judge":
// //         navigate("/judge/dashboard");
// //         break;

// //       case "admin":
// //         navigate("/admin/dashboard");
// //         break;

// //       default:
// //         navigate("/");
// //     }
// //   } catch (error) {
// //     toast.error(error || "Login failed.");
// //   }
// // };
// //   const handleProviderLogin = (provider) => {
// //     setSelectedProvider(provider);
// //     console.info("OAuth provider selected", { provider });
// //   };

// //   return (
// //     <main className="login-page">
// //       {/* ── Top-right sign up link (full page level) ── */}
// //       <div className="login-signup-bar">
// //         <span>New to HackPortal?</span>
// //         <Link to="/signup" className="login-signup-link">Sign up</Link>
// //       </div>

// //       {/* ── Brand Panel ── */}
// //       <section className="login-brand-panel" aria-labelledby="login-brand-title">
// //         <nav className="login-topbar" aria-label="Login page navigation">
// //           <Link to="/" className="login-brand-mark" aria-label="Codways home">
// //             <Logo size={36} />
// //             <span>CODWAYS</span>
// //           </Link>
// //         </nav>

// //         <div className="login-hero-copy">
// //           <p className="login-eyebrow">Launch your sprint</p>
// //           <h1 id="login-brand-title" className="login-h1">
// //             Hackathons feel easier here.
// //           </h1>
// //           <p className="login-supporting-copy">
// //             Join events, manage teams, track submissions, and keep every round moving from one clean workspace.
// //           </p>
// //         </div>

// //         <div className="login-showcase" aria-hidden="true">
// //           <Mascot />
// //         </div>
// //       </section>

// //       {/* ── Auth Panel ── */}
// //       <section className="login-auth-panel" aria-labelledby="login-title">
// //         <div className="login-auth-card">
// //           <div className="login-auth-badge">
// //             <ShieldIcon />
// //             Secure Login
// //           </div>

// //           <div className="login-auth-heading">
// //             <h2 id="login-title">Welcome back</h2>
// //             <p>Use your email or connect with a developer account.</p>
// //           </div>

// //           <div className="login-provider-grid">
// //             {authProviders.map((provider) => (
// //               <button
// //                 key={provider.id}
// //                 className={`login-provider-button${selectedProvider === provider.id ? " is-selected" : ""}`}
// //                 type="button"
// //                 onClick={() => handleProviderLogin(provider.id)}
// //                 aria-pressed={selectedProvider === provider.id}
// //               >
// //                 {provider.icon === "google" ? <GoogleIcon /> : <GitHubIcon />}
// //                 <span>{provider.label}</span>
// //               </button>
// //             ))}
// //           </div>

// //           <div className="login-divider">
// //             <span>or continue with email</span>
// //           </div>

// //           <form className="login-email-form" onSubmit={handleSubmit} noValidate>
// //             {/* Email field */}
// //             <div className="login-field-group">
// //               <label htmlFor="login-email">Email address</label>
// //               <div className={`login-input-shell${emailError ? " input-error" : ""}`}>
// //                 <MailIcon />
// //                 <input
// //                   id="login-email"
// //                   name="email"
// //                   type="email"
// //                   autoComplete="email"
// //                   placeholder="name@college.edu"
// //                   value={email}
// //                   onBlur={() => setTouched(true)}
// //                   onChange={(e) => setEmail(e.target.value)}
// //                   aria-describedby={emailError ? "login-email-error" : undefined}
// //                   aria-invalid={Boolean(emailError)}
// //                 />
// //               </div>
// //               {emailError && (
// //                 <p className="login-field-error" id="login-email-error">
// //                   {emailError}
// //                 </p>
// //               )}
// //             </div>

// //             {/* Password field */}
// //             <div className="login-field-group">
// //               <label htmlFor="login-password">Password</label>
// //               <div className="login-input-shell">
// //                 <LockIcon />
// //                 <input
// //                   id="login-password"
// //                   name="password"
// //                   type={showPassword ? "text" : "password"}
// //                   autoComplete="current-password"
// //                   placeholder="Enter your password"
// //                   value={password}
// //                   onChange={(e) => setPassword(e.target.value)}
// //                 />
// //                 <button
// //                   type="button"
// //                   className="login-eye-toggle"
// //                   onClick={() => setShowPassword((v) => !v)}
// //                   aria-label={showPassword ? "Hide password" : "Show password"}
// //                 >
// //                   {showPassword ? <EyeIcon /> : <EyeOffIcon />}
// //                 </button>
// //               </div>
// //             </div>

// //             {/* Remember me + Forgot password */}
// //             <div className="login-row-options">
// //               <label className="login-remember-label">
// //                 <input
// //                   type="checkbox"
// //                   className="login-checkbox"
// //                   checked={rememberMe}
// //                   onChange={(e) => setRememberMe(e.target.checked)}
// //                 />
// //                 <span>Remember me</span>
// //               </label>
// //               <Link to="/forgot-password" className="login-forgot-link">Forgot password?</Link>
// //             </div>

// //             <button
// //   className="login-submit-button"
// //   type="submit"
// //   disabled={loading}
// // >
// //               <span>
// //   {loading ? "Logging in..." : "Login"}
// // </span>
// //               <ArrowIcon />
// //             </button>
// //           </form>

// //           {/* Terms — single clean line */}
// //           <p className="login-terms-copy">
// //             <svg viewBox="0 0 24 24" aria-hidden="true" className="login-lock-small">
// //               <rect x="5" y="11" width="14" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
// //               <path d="M8 11V7a4 4 0 0 1 8 0v4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
// //             </svg>
// //             By continuing, you agree to the <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>.
// //           </p>
// //         </div>
// //       </section>
// //     </main>
// //   );
// // }

// // export default Login;
// import { useMemo, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { toast } from "react-toastify";

// import "./Login.css";
// import { login } from "../../features/auth/authSlice";
// import Logo from "../../components/common/Logo";

// /* ── Icons ── */
// function MailIcon() {
//   return (
//     <svg viewBox="0 0 24 24" aria-hidden="true" className="login-input-icon">
//       <path
//         d="M4.75 6.75h14.5v10.5H4.75V6.75Zm.5.4L12 12.6l6.75-5.45M5.42 17l4.85-4.1m3.46 0L18.58 17"
//         fill="none"
//         stroke="currentColor"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth="1.7"
//       />
//     </svg>
//   );
// }

// function LockIcon() {
//   return (
//     <svg viewBox="0 0 24 24" aria-hidden="true" className="login-input-icon">
//       <rect x="5" y="11" width="14" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
//       <path d="M8 11V7a4 4 0 0 1 8 0v4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   );
// }

// function EyeOffIcon() {
//   return (
//     <svg viewBox="0 0 24 24" aria-hidden="true" className="login-eye-icon">
//       <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24M1 1l22 22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   );
// }

// function EyeIcon() {
//   return (
//     <svg viewBox="0 0 24 24" aria-hidden="true" className="login-eye-icon">
//       <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
//       <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1.7" />
//     </svg>
//   );
// }

// function ArrowIcon() {
//   return (
//     <svg viewBox="0 0 24 24" aria-hidden="true" className="login-arrow-icon">
//       <path
//         d="M5 12h13m-5-5 5 5-5 5"
//         fill="none"
//         stroke="currentColor"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth="2"
//       />
//     </svg>
//   );
// }

// function ShieldIcon() {
//   return (
//     <svg viewBox="0 0 24 24" aria-hidden="true" className="login-badge-icon">
//       <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
//       <path d="M9 12l2 2 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   );
// }

// /* ── Mascot ── */
// function Mascot() {
//   return (
//     <div className="login-mascot-wrap" aria-label="Animated hackathon builder mascot">
//       <svg className="login-mascot" viewBox="0 0 360 320" role="img">
//         <title>Animated hackathon builder mascot</title>
//         <defs>
//           <linearGradient id="loginBotBody" x1="92" y1="72" x2="268" y2="250">
//             <stop stopColor="#ffffff" />
//             <stop offset="1" stopColor="#d8fff3" />
//           </linearGradient>
//           <linearGradient id="loginBotScreen" x1="105" y1="90" x2="255" y2="205">
//             <stop stopColor="#3159f5" />
//             <stop offset="1" stopColor="#0fa898" />
//           </linearGradient>
//           <linearGradient id="loginBadgeGlow" x1="115" y1="216" x2="245" y2="294">
//             <stop stopColor="#ffd166" />
//             <stop offset="1" stopColor="#ff7a7a" />
//           </linearGradient>
//           <filter id="loginBotShadow" x="-20%" y="-20%" width="140%" height="150%">
//             <feDropShadow dx="0" dy="22" stdDeviation="18" floodColor="#21314f" floodOpacity="0.16" />
//           </filter>
//         </defs>

//         <g className="login-mascot-orbit">
//           <path d="M70 172c46-72 177-86 226-10" fill="none" stroke="#9be7dc" strokeWidth="8" strokeLinecap="round" />
//           <path d="M266 70l10 19 21 3-15 15 4 21-20-10-19 10 4-21-16-15 22-3 9-19Z" fill="#ffd166" />
//           <circle cx="74" cy="174" r="9" fill="#ff7a7a" />
//         </g>

//         <g className="login-mascot-body" filter="url(#loginBotShadow)">
//           <path d="M120 112c0-39 27-67 60-67s60 28 60 67v14H120v-14Z" fill="#ffffff" />
//           <rect x="92" y="96" width="176" height="142" rx="42" fill="url(#loginBotBody)" stroke="#182542" strokeWidth="7" />
//           <rect x="119" y="123" width="122" height="66" rx="24" fill="url(#loginBotScreen)" />
//           <path d="M145 156h.1M215 156h.1" stroke="#ffffff" strokeWidth="13" strokeLinecap="round" />
//           <path d="M164 174c11 9 24 9 35 0" fill="none" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" />
//           <path d="M180 45V22" stroke="#182542" strokeWidth="7" strokeLinecap="round" />
//           <circle cx="180" cy="18" r="10" fill="#ff7a7a" stroke="#182542" strokeWidth="5" />
//           <path d="M96 158c-29 3-48 21-48 47 0 24 17 40 42 45" fill="none" stroke="#182542" strokeWidth="11" strokeLinecap="round" />
//           <path d="M264 158c29 3 48 21 48 47 0 24-17 40-42 45" fill="none" stroke="#182542" strokeWidth="11" strokeLinecap="round" />
//           <rect x="120" y="224" width="120" height="58" rx="22" fill="url(#loginBadgeGlow)" stroke="#182542" strokeWidth="7" />
//           <path d="M151 253h58M151 269h34" stroke="#182542" strokeWidth="6" strokeLinecap="round" />
//           <path d="M226 244l8 9 14-19" fill="none" stroke="#182542" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
//         </g>

//         <g className="login-spark">
//           <path d="M67 79v22M56 90h22" stroke="#3159f5" strokeWidth="6" strokeLinecap="round" />
//         </g>
//         <g className="login-spark login-spark-two">
//           <path d="M300 211v22M289 222h22" stroke="#ff7a7a" strokeWidth="6" strokeLinecap="round" />
//         </g>
//       </svg>
//     </div>
//   );
// }

// /* ── Main Login Component ── */
// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);
//   const [touched, setTouched] = useState(false);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const { loading } = useSelector((state) => state.auth);
//   const emailError = useMemo(() => {
//     if (!touched || email.length === 0) return "";
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "" : "Enter a valid email address.";
//   }, [email, touched]);

  
// const handleSubmit = async (e) => {
//   e.preventDefault();

//   if (!email || !password) {
//     toast.error("Please enter email and password.");
//     return;
//   }

//   try {
//     const result = await dispatch(
//       login({
//         email,
//         password,
//       })
//     ).unwrap();

//     toast.success(result.message || "Login successful");

//     const role = result.data.role;

//     switch (role) {
//       case "participant":
//         navigate("/participant/dashboard");
//         break;

//       case "judge":
//         navigate("/judge/dashboard");
//         break;

//       case "admin":
//         navigate("/admin/dashboard");
//         break;

//       default:
//         navigate("/");
//     }
//   } catch (error) {
//     toast.error(error || "Login failed.");
//   }
// };
//   return (
//     <main className="login-page">
//       {/* ── Top-right sign up link (full page level) ── */}
//       <div className="login-signup-bar">
//         <span>New to HackPortal?</span>
//         <Link to="/signup" className="login-signup-link">Sign up</Link>
//       </div>

//       {/* ── Brand Panel ── */}
//       <section className="login-brand-panel" aria-labelledby="login-brand-title">
//         <nav className="login-topbar" aria-label="Login page navigation">
//           <Link to="/" className="login-brand-mark" aria-label="Codways home">
//             <Logo size={36} />
//             <span>CODWAYS</span>
//           </Link>
//         </nav>

//         <div className="login-hero-copy">
//           <p className="login-eyebrow">Launch your sprint</p>
//           <h1 id="login-brand-title" className="login-h1">
//             Hackathons feel easier here.
//           </h1>
//           <p className="login-supporting-copy">
//             Join events, manage teams, track submissions, and keep every round moving from one clean workspace.
//           </p>
//         </div>

//         <div className="login-showcase" aria-hidden="true">
//           <Mascot />
//         </div>
//       </section>

//       {/* ── Auth Panel ── */}
//       <section className="login-auth-panel" aria-labelledby="login-title">
//         <div className="login-auth-card">
//           <div className="login-auth-badge">
//             <ShieldIcon />
//             Secure Login
//           </div>

//           <div className="login-auth-heading">
//             <h2 id="login-title">Welcome back</h2>
//             <p>Use your email or connect with a developer account.</p>
//           </div>

//           <form className="login-email-form" onSubmit={handleSubmit} noValidate>
//             {/* Email field */}
//             <div className="login-field-group">
//               <label htmlFor="login-email">Email address</label>
//               <div className={`login-input-shell${emailError ? " input-error" : ""}`}>
//                 <MailIcon />
//                 <input
//                   id="login-email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   placeholder="name@college.edu"
//                   value={email}
//                   onBlur={() => setTouched(true)}
//                   onChange={(e) => setEmail(e.target.value)}
//                   aria-describedby={emailError ? "login-email-error" : undefined}
//                   aria-invalid={Boolean(emailError)}
//                 />
//               </div>
//               {emailError && (
//                 <p className="login-field-error" id="login-email-error">
//                   {emailError}
//                 </p>
//               )}
//             </div>

//             {/* Password field */}
//             <div className="login-field-group">
//               <label htmlFor="login-password">Password</label>
//               <div className="login-input-shell">
//                 <LockIcon />
//                 <input
//                   id="login-password"
//                   name="password"
//                   type={showPassword ? "text" : "password"}
//                   autoComplete="current-password"
//                   placeholder="Enter your password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <button
//                   type="button"
//                   className="login-eye-toggle"
//                   onClick={() => setShowPassword((v) => !v)}
//                   aria-label={showPassword ? "Hide password" : "Show password"}
//                 >
//                   {showPassword ? <EyeIcon /> : <EyeOffIcon />}
//                 </button>
//               </div>
//             </div>

//             {/* Remember me + Forgot password */}
//             <div className="login-row-options">
//               <label className="login-remember-label">
//                 <input
//                   type="checkbox"
//                   className="login-checkbox"
//                   checked={rememberMe}
//                   onChange={(e) => setRememberMe(e.target.checked)}
//                 />
//                 <span>Remember me</span>
//               </label>
//               <Link to="/forgot-password" className="login-forgot-link">Forgot password?</Link>
//             </div>

//             <button
//   className="login-submit-button"
//   type="submit"
//   disabled={loading}
// >
//               <span>
//   {loading ? "Logging in..." : "Login"}
// </span>
//               <ArrowIcon />
//             </button>
//           </form>

//           {/* Terms — single clean line */}
//           <p className="login-terms-copy">
//             <svg viewBox="0 0 24 24" aria-hidden="true" className="login-lock-small">
//               <rect x="5" y="11" width="14" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
//               <path d="M8 11V7a4 4 0 0 1 8 0v4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
//             </svg>
//             By continuing, you agree to the <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>.
//           </p>
//         </div>
//       </section>
//     </main>
//   );
// }

// export default Login;
import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import "./Login.css";
import "../../styles/pageTransition.css";
import { login } from "../../features/auth/authSlice";
import Logo from "../../components/common/Logo";

/* ── Icons ── */
function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="login-input-icon">
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
    <svg viewBox="0 0 24 24" aria-hidden="true" className="login-input-icon">
      <rect x="5" y="11" width="14" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="login-eye-icon">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24M1 1l22 22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="login-eye-icon">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="login-arrow-icon">
      <path
        d="M5 12h13m-5-5 5 5-5 5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="login-badge-icon">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── Mascot ── */
function Mascot() {
  return (
    <div className="login-mascot-wrap" aria-label="Animated hackathon builder mascot">
      <svg className="login-mascot" viewBox="0 0 360 320" role="img">
        <title>Animated hackathon builder mascot</title>
        <defs>
          <linearGradient id="loginBotBody" x1="92" y1="72" x2="268" y2="250">
            <stop stopColor="#ffffff" />
            <stop offset="1" stopColor="#d8fff3" />
          </linearGradient>
          <linearGradient id="loginBotScreen" x1="105" y1="90" x2="255" y2="205">
            <stop stopColor="#3159f5" />
            <stop offset="1" stopColor="#0fa898" />
          </linearGradient>
          <linearGradient id="loginBadgeGlow" x1="115" y1="216" x2="245" y2="294">
            <stop stopColor="#ffd166" />
            <stop offset="1" stopColor="#ff7a7a" />
          </linearGradient>
          <filter id="loginBotShadow" x="-20%" y="-20%" width="140%" height="150%">
            <feDropShadow dx="0" dy="22" stdDeviation="18" floodColor="#21314f" floodOpacity="0.16" />
          </filter>
        </defs>

        <g className="login-mascot-orbit">
          <path d="M70 172c46-72 177-86 226-10" fill="none" stroke="#9be7dc" strokeWidth="8" strokeLinecap="round" />
          <path d="M266 70l10 19 21 3-15 15 4 21-20-10-19 10 4-21-16-15 22-3 9-19Z" fill="#ffd166" />
          <circle cx="74" cy="174" r="9" fill="#ff7a7a" />
        </g>

        <g className="login-mascot-body" filter="url(#loginBotShadow)">
          <path d="M120 112c0-39 27-67 60-67s60 28 60 67v14H120v-14Z" fill="#ffffff" />
          <rect x="92" y="96" width="176" height="142" rx="42" fill="url(#loginBotBody)" stroke="#182542" strokeWidth="7" />
          <rect x="119" y="123" width="122" height="66" rx="24" fill="url(#loginBotScreen)" />
          <path d="M145 156h.1M215 156h.1" stroke="#ffffff" strokeWidth="13" strokeLinecap="round" />
          <path d="M164 174c11 9 24 9 35 0" fill="none" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" />
          <path d="M180 45V22" stroke="#182542" strokeWidth="7" strokeLinecap="round" />
          <circle cx="180" cy="18" r="10" fill="#ff7a7a" stroke="#182542" strokeWidth="5" />
          <path d="M96 158c-29 3-48 21-48 47 0 24 17 40 42 45" fill="none" stroke="#182542" strokeWidth="11" strokeLinecap="round" />
          <path d="M264 158c29 3 48 21 48 47 0 24-17 40-42 45" fill="none" stroke="#182542" strokeWidth="11" strokeLinecap="round" />
          <rect x="120" y="224" width="120" height="58" rx="22" fill="url(#loginBadgeGlow)" stroke="#182542" strokeWidth="7" />
          <path d="M151 253h58M151 269h34" stroke="#182542" strokeWidth="6" strokeLinecap="round" />
          <path d="M226 244l8 9 14-19" fill="none" stroke="#182542" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        <g className="login-spark">
          <path d="M67 79v22M56 90h22" stroke="#3159f5" strokeWidth="6" strokeLinecap="round" />
        </g>
        <g className="login-spark login-spark-two">
          <path d="M300 211v22M289 222h22" stroke="#ff7a7a" strokeWidth="6" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

/* ── Main Login Component ── */
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [touched, setTouched] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading } = useSelector((state) => state.auth);
  const emailError = useMemo(() => {
    if (!touched || email.length === 0) return "";
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "" : "Enter a valid email address.";
  }, [email, touched]);

  
const handleSubmit = async (e) => {
  e.preventDefault();

  if (!email || !password) {
    toast.error("Please enter email and password.");
    return;
  }

  try {
    const result = await dispatch(
      login({
        email,
        password,
      })
    ).unwrap();

    toast.success(result.message || "Login successful");

    const role = result.data.role;

    switch (role) {
      case "participant":
        navigate("/participant/dashboard");
        break;

      case "judge":
        navigate("/judge/dashboard");
        break;

      case "admin":
        navigate("/admin/dashboard");
        break;

      default:
        navigate("/");
    }
  } catch (error) {
    toast.error(error || "Login failed.");
  }
};
  return (
    <main className="login-page page-fade-in">
      {/* ── Top-right sign up link (full page level) ── */}
      <div className="login-signup-bar">
        <span>New to HackPortal?</span>
        <Link to="/signup" className="login-signup-link">Sign up</Link>
      </div>

      {/* ── Brand Panel ── */}
      <section className="login-brand-panel" aria-labelledby="login-brand-title">
        <nav className="login-topbar" aria-label="Login page navigation">
          <Link to="/" className="login-brand-mark" aria-label="Codways home">
            <Logo size={36} />
            <span>CODWAYS</span>
          </Link>
        </nav>

        <div className="login-hero-copy">
          <p className="login-eyebrow">Launch your sprint</p>
          <h1 id="login-brand-title" className="login-h1">
            Hackathons feel easier here.
          </h1>
          <p className="login-supporting-copy">
            Join events, manage teams, track submissions, and keep every round moving from one clean workspace.
          </p>
        </div>

        <div className="login-showcase" aria-hidden="true">
          <Mascot />
        </div>
      </section>

      {/* ── Auth Panel ── */}
      <section className="login-auth-panel" aria-labelledby="login-title">
        <div className="login-auth-card">
          <div className="login-auth-badge">
            <ShieldIcon />
            Secure Login
          </div>

          <div className="login-auth-heading">
            <h2 id="login-title">Welcome back</h2>
            <p>Use your email or connect with a developer account.</p>
          </div>

          <form className="login-email-form" onSubmit={handleSubmit} noValidate>
            {/* Email field */}
            <div className="login-field-group">
              <label htmlFor="login-email">Email address</label>
              <div className={`login-input-shell${emailError ? " input-error" : ""}`}>
                <MailIcon />
                <input
                  id="login-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="name@college.edu"
                  value={email}
                  onBlur={() => setTouched(true)}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-describedby={emailError ? "login-email-error" : undefined}
                  aria-invalid={Boolean(emailError)}
                />
              </div>
              {emailError && (
                <p className="login-field-error" id="login-email-error">
                  {emailError}
                </p>
              )}
            </div>

            {/* Password field */}
            <div className="login-field-group">
              <label htmlFor="login-password">Password</label>
              <div className="login-input-shell">
                <LockIcon />
                <input
                  id="login-password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="login-eye-toggle"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeIcon /> : <EyeOffIcon />}
                </button>
              </div>
            </div>

            {/* Remember me + Forgot password */}
            <div className="login-row-options">
              <label className="login-remember-label">
                <input
                  type="checkbox"
                  className="login-checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span>Remember me</span>
              </label>
              <Link to="/forgot-password" className="login-forgot-link">Forgot password?</Link>
            </div>

            <button
  className="login-submit-button"
  type="submit"
  disabled={loading}
>
              <span>
  {loading ? "Logging in..." : "Login"}
</span>
              <ArrowIcon />
            </button>
          </form>

          {/* Terms — single clean line */}
          <p className="login-terms-copy">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="login-lock-small">
              <rect x="5" y="11" width="14" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
              <path d="M8 11V7a4 4 0 0 1 8 0v4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            By continuing, you agree to the <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Login;