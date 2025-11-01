import React, { useState } from "react";
import styles from "./css/SignupLogin.module.css";

export default function SignupLogin() {
  const [mode, setMode] = useState("signup"); // "signup" | "login"
  const [signup, setSignup] = useState({
    user_email: "",
    user_password: "",
    confirm_password: "",
    user_firstname: "",
    user_lastname: "",
    user_university: "",
    user_currentsem: "",
  });
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignup((s) => ({ ...s, [name]: value }));
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLogin((s) => ({ ...s, [name]: value }));
  };

  const submitSignup = (e) => {
    e.preventDefault();
    setError("");
    if (signup.user_password !== signup.confirm_password) {
      setError("Passwords do not match.");
      return;
    }
    // TODO: call your API
    // payload: { user_email, user_password, user_firstname, user_lastname, user_university, user_currentsem }
    const { confirm_password, ...payload } = signup;
    console.log("SIGNUP payload =>", payload);
  };

  const submitLogin = (e) => {
    e.preventDefault();
    setError("");
    // TODO: call your API
    console.log("LOGIN payload =>", login);
  };

  const flipTo = (target) => {
    setError("");
    setMode(target);
  };

  return (
    <div className={styles.wrap}>
      <main className={styles.container}>
        {/* Left hero copy */}
        <section className={styles.left}>
          <h1 className={styles.title}>
            Study Smarter. Remember More. Stress Less.
          </h1>
          <p className={styles.subtitle}>
            Turn your messy notes into clear summaries, flashcards, and quizzes.
            <br />
            <span>All personalized just for you.</span>
          </p>
        </section>

        {/* Right: 3D flip card */}
        <section className={styles.scene}>
          <div
            className={`${styles.card3d} ${
              mode === "login" ? styles.flipped : ""
            }`}
          >
            {/* FRONT — SIGN UP */}
            <div className={`${styles.face} ${styles.front}`}>
              <h2 className={styles.cardTitle}>Sign Up</h2>
              <form className={styles.form} onSubmit={submitSignup}>
                <div className={styles.row2}>
                  <div>
                    <label className={styles.label} htmlFor="user_firstname">
                      First name
                    </label>
                    <input
                      className={styles.input}
                      id="user_firstname"
                      name="user_firstname"
                      type="text"
                      placeholder="Manasi"
                      value={signup.user_firstname}
                      onChange={handleSignupChange}
                      required
                    />
                  </div>
                  <div>
                    <label className={styles.label} htmlFor="user_lastname">
                      Last name
                    </label>
                    <input
                      className={styles.input}
                      id="user_lastname"
                      name="user_lastname"
                      type="text"
                      placeholder="Patil"
                      value={signup.user_lastname}
                      onChange={handleSignupChange}
                      required
                    />
                  </div>
                </div>

                <label className={styles.label} htmlFor="user_email">
                  Email
                </label>
                <input
                  className={styles.input}
                  id="user_email"
                  name="user_email"
                  type="email"
                  placeholder="you@school.edu"
                  value={signup.user_email}
                  onChange={handleSignupChange}
                  required
                />

                <div className={styles.row2}>
                  <div>
                    <label className={styles.label} htmlFor="user_university">
                      University
                    </label>
                    <input
                      className={styles.input}
                      id="user_university"
                      name="user_university"
                      type="text"
                      placeholder="RIT"
                      value={signup.user_university}
                      onChange={handleSignupChange}
                      required
                    />
                  </div>
                  <div>
                    <label className={styles.label} htmlFor="user_currentsem">
                      Current semester
                    </label>
                    <input
                      className={styles.input}
                      id="user_currentsem"
                      name="user_currentsem"
                      type="text"
                      placeholder="Spring 2025"
                      value={signup.user_currentsem}
                      onChange={handleSignupChange}
                      required
                    />
                  </div>
                </div>

                <label className={styles.label} htmlFor="user_password">
                  Password
                </label>
                <input
                  className={styles.input}
                  id="user_password"
                  name="user_password"
                  type="password"
                  placeholder="••••••••"
                  value={signup.user_password}
                  onChange={handleSignupChange}
                  required
                  minLength={6}
                />

                <label className={styles.label} htmlFor="confirm_password">
                  Confirm password
                </label>
                <input
                  className={styles.input}
                  id="confirm_password"
                  name="confirm_password"
                  type="password"
                  placeholder="••••••••"
                  value={signup.confirm_password}
                  onChange={handleSignupChange}
                  required
                  minLength={6}
                />

                {error && <div className={styles.error}>{error}</div>}

                {/* Divider */}
                <div className={styles.dividerWrap} aria-hidden="true">
                  <span className={styles.divider} />
                  <span className={styles.orText}>Or</span>
                  <span className={styles.divider} />
                </div>

                {/* Social buttons */}
                <div className={styles.socialRow}>
                  <button type="button" className={styles.socialBtn}>
                    <span className={styles.icon}>
                      {/* Google SVG */}
                      <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
                        <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.8 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.8 6.2 29.7 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c10 0 19-7.3 19-20 0-1.1-.1-2.3-.4-3.5z"/>
                        <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16.2 18.9 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.8 6.2 29.7 4 24 4 16.1 4 9.2 8.6 6.3 14.7z"/>
                        <path fill="#4CAF50" d="M24 44c5.2 0 10-2 13.6-5.3l-6.3-5.2C29.3 36 26.8 37 24 37c-5.2 0-9.6-3.3-11.3-7.9l-6.6 5.1C9 39.4 15.9 44 24 44z"/>
                        <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.2-4 5.9-7.3 6.6l6.3 5.2C37.3 37 43 31.7 43.6 20.5z"/>
                      </svg>
                    </span>
                    <span>Sign up with Google</span>
                  </button>

                  <button type="button" className={styles.socialBtn}>
                    <span className={styles.icon}>
                      {/* Apple SVG */}
                      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill="currentColor" d="M16.365 1.43c0 1.14-.46 2.23-1.2 3.03-.78.83-2.06 1.48-3.14 1.39-.1-1.09.48-2.26 1.22-3.02.83-.85 2.23-1.47 3.12-1.4zM21 17.08c-.52 1.19-1.15 2.37-2.07 3.55-.8 1.03-1.86 2.3-3.26 2.32-1.23.02-1.62-.76-3.03-.76-1.41 0-1.84.74-3.06.78-1.42.04-2.5-1.16-3.3-2.18C4.07 19.7 3 17.7 3 15.18c0-2.46 1-4.51 2.58-5.72.88-.68 1.99-1.14 3.14-1.16 1.23-.02 2.39.8 3.03.8.64 0 2-.99 3.38-.85.58.02 2.23.24 3.28 1.83-2.88 1.57-2.42 5.67-.39 6.99z"/>
                      </svg>
                    </span>
                    <span>Sign up with Apple</span>
                  </button>
                </div>

                <button type="submit" className={styles.submitBtn}>Sign up</button>

                <button
                  type="button"
                  className={styles.flipBtn}
                  onClick={() => flipTo("login")}
                >
                  Already have an account? <strong>Log in</strong>
                </button>
              </form>
            </div>

            {/* BACK — LOG IN */}
            <div className={`${styles.face} ${styles.back}`}>
              <h2 className={styles.cardTitle}>Log In</h2>
              <form className={styles.form} onSubmit={submitLogin}>
                <label className={styles.label} htmlFor="login_email">
                  Email
                </label>
                <input
                  className={styles.input}
                  id="login_email"
                  name="email"
                  type="email"
                  placeholder="you@school.edu"
                  value={login.email}
                  onChange={handleLoginChange}
                  required
                />

                <label className={styles.label} htmlFor="login_password">
                  Password
                </label>
                <input
                  className={styles.input}
                  id="login_password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  value={login.password}
                  onChange={handleLoginChange}
                  required
                />

                {error && <div className={styles.error}>{error}</div>}

                <button type="submit" className={styles.submitBtn}>Log in</button>

                <button
                  type="button"
                  className={styles.flipBtn}
                  onClick={() => flipTo("signup")}
                >
                  New here? <strong>Create an account</strong>
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        Welcome to AI-powered Study Buddy!
      </footer>
    </div>
  );
}
