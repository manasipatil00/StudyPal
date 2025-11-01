import React, { useState } from "react";
import styles from "./css/SignupLogin.module.css";

export default function SignupLogin() {
  const [flipped, setFlipped] = useState(false);

  // Prefilled signup form values
  const [signup, setSignup] = useState({
    user_firstname: "Manasi",
    user_lastname: "Patil",
    user_email: "you@school.edu",
    user_university: "RIT",
    user_currentsem: "Spring 2025",
    user_password: "********",
    confirm_password: "********",
  });

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleFlip = () => setFlipped((prev) => !prev);

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
    console.log("SIGNUP PAYLOAD:", signup);
  };

  const submitLogin = (e) => {
    e.preventDefault();
    console.log("LOGIN PAYLOAD:", login);
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Background video */}
      <video autoPlay loop muted className={styles.bgVideo}>
        <source src="/bg.mp4" type="video/mp4" />
      </video>
      <div className={styles.overlay}></div>

      {/* Two-column layout */}
      <main className={styles.main}>
        {/* Left section */}
        <section className={styles.left}>
          <h1 className={styles.title}>
            Study <span className={styles.highlight}>Smarter</span>.<br />
            Remember <span className={styles.highlight}>More</span>.<br />
            Stress <span className={styles.highlight}>Less</span>.
          </h1>
          <p className={styles.subtitle}>
            Turn your messy notes into clear summaries, flashcards, and quizzes — 
            all personalized just for you.
          </p>
        </section>

        {/* Right section */}
        <section className={styles.right}>
          <div className={`${styles.card} ${flipped ? styles.flipped : ""}`}>
            {/* FRONT — SIGN UP */}
            <div className={`${styles.face} ${styles.front}`}>
              <h2>Sign Up</h2>
              <form onSubmit={submitSignup}>
                <div className={styles.row2}>
                  <div>
                    <label htmlFor="user_firstname">First name</label>
                    <input
                      id="user_firstname"
                      name="user_firstname"
                      type="text"
                      value={signup.user_firstname}
                      onChange={handleSignupChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="user_lastname">Last name</label>
                    <input
                      id="user_lastname"
                      name="user_lastname"
                      type="text"
                      value={signup.user_lastname}
                      onChange={handleSignupChange}
                      required
                    />
                  </div>
                </div>

                <label htmlFor="user_email">Email</label>
                <input
                  id="user_email"
                  name="user_email"
                  type="email"
                  value={signup.user_email}
                  onChange={handleSignupChange}
                  required
                />

                <div className={styles.row2}>
                  <div>
                    <label htmlFor="user_university">University</label>
                    <input
                      id="user_university"
                      name="user_university"
                      type="text"
                      value={signup.user_university}
                      onChange={handleSignupChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="user_currentsem">Current semester</label>
                    <input
                      id="user_currentsem"
                      name="user_currentsem"
                      type="text"
                      value={signup.user_currentsem}
                      onChange={handleSignupChange}
                      required
                    />
                  </div>
                </div>

                <label htmlFor="user_password">Password</label>
                <input
                  id="user_password"
                  name="user_password"
                  type="password"
                  value={signup.user_password}
                  onChange={handleSignupChange}
                  required
                />

                <label htmlFor="confirm_password">Confirm password</label>
                <input
                  id="confirm_password"
                  name="confirm_password"
                  type="password"
                  value={signup.confirm_password}
                  onChange={handleSignupChange}
                  required
                />

                <button type="submit" className={styles.submitBtn}>
                  Sign Up
                </button>

                <p className={styles.toggleText}>
                  Already have an account?{" "}
                  <span onClick={handleFlip}>Log in</span>
                </p>
              </form>
            </div>

            {/* BACK — LOGIN */}
            <div className={`${styles.face} ${styles.back}`}>
              <h2>Welcome Back</h2>
              <form onSubmit={submitLogin}>
                <label htmlFor="login_email">Email</label>
                <input
                  id="login_email"
                  name="email"
                  type="email"
                  value={login.email}
                  onChange={handleLoginChange}
                  required
                />

                <label htmlFor="login_password">Password</label>
                <input
                  id="login_password"
                  name="password"
                  type="password"
                  value={login.password}
                  onChange={handleLoginChange}
                  required
                />

                <button type="submit" className={styles.submitBtn}>
                  Log In
                </button>

                <p className={styles.toggleText}>
                  New here?{" "}
                  <span onClick={handleFlip}>Create an account</span>
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
