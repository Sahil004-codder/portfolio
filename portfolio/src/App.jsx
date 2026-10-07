import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <div className="container nav-container">

          <a href="#home" className="logo">
            S<span>.</span>
          </a>

          {/* Desktop Navigation */}

          <div className="nav-links">

            <a href="#home">Home</a>

            <a href="#about">About</a>

            <a href="#skills">Skills</a>

            <a href="#projects">Projects</a>

            <a href="#contact">Contact</a>

          </div>


          <a href="#contact" className="nav-button">
            Let's Talk
          </a>


          {/* Mobile Menu Button */}

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

        </div>


        {/* Mobile Navigation */}

        {menuOpen && (

          <div className="mobile-menu">

            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>

            <a
              href="#skills"
              onClick={() => setMenuOpen(false)}
            >
              Skills
            </a>

            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>

          </div>

        )}

      </nav>


      {/* ================= HERO ================= */}

      <section id="home" className="hero">

        <div className="container hero-container">

          <div className="hero-content">

            <p className="hero-small">
              👋 Hello, I'm
            </p>

            <h1>
              Sahil <span>Nimborkar</span>
            </h1>

            <h2>
              IT Student & Aspiring Developer
            </h2>

            <p className="hero-description">
              I build modern websites, applications and digital
              experiences while continuously learning new technologies.
            </p>


            <div className="hero-buttons">

              <a
                href="#projects"
                className="primary-button"
              >
                View My Work →
              </a>

              <a
                href="#contact"
                className="secondary-button"
              >
                Contact Me
              </a>

            </div>


            {/* Social Links */}

            <div className="social-links">

              <a
                href="https://github.com/Sahil004"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/sahil-nimborkar-123a94327/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

            </div>

          </div>


          {/* Profile Circle */}

          <div className="hero-image">

            <div className="profile-circle">

              <div className="profile-placeholder">
                SN
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section id="about" className="about">

        <div className="container">

          <div className="section-heading">

            <p>ABOUT ME</p>

            <h2>
              Turning ideas into digital experiences.
            </h2>

          </div>


          <div className="about-grid">

            <div className="about-text">

              <p>
                I'm an Information Technology student who enjoys
                building websites, applications and exploring
                new technologies.
              </p>

              <p>
                I am currently developing my skills in web development,
                Java, React and modern UI design. I enjoy taking an idea
                and turning it into a functional and visually appealing
                project.
              </p>

              <p>
                My goal is to become a skilled software developer and
                continuously improve by working on real-world projects.
              </p>

            </div>


            <div className="about-cards">

              <div className="info-card">

                <span>🎓</span>

                <div>

                  <h3>Education</h3>

                  <p>
                    Information Technology
                  </p>

                </div>

              </div>


              <div className="info-card">

                <span>💻</span>

                <div>

                  <h3>Focus</h3>

                  <p>
                    Web Development & Software
                  </p>

                </div>

              </div>


              <div className="info-card">

                <span>🚀</span>

                <div>

                  <h3>Goal</h3>

                  <p>
                    Become a Professional Developer
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}

      <section id="skills" className="skills">

        <div className="container">

          <div className="section-heading">

            <p>MY SKILLS</p>

            <h2>
              Technologies I work with.
            </h2>

          </div>


          <div className="skills-grid">


            {/* HTML */}

            <div className="skill-card">

              <div className="skill-top">

                <h3>HTML</h3>

                <span>90%</span>

              </div>

              <div className="progress">

                <div
                  className="progress-bar"
                  style={{ width: "90%" }}
                ></div>

              </div>

            </div>


            {/* CSS */}

            <div className="skill-card">

              <div className="skill-top">

                <h3>CSS</h3>

                <span>85%</span>

              </div>

              <div className="progress">

                <div
                  className="progress-bar"
                  style={{ width: "85%" }}
                ></div>

              </div>

            </div>


            {/* JavaScript */}

            <div className="skill-card">

              <div className="skill-top">

                <h3>JavaScript</h3>

                <span>75%</span>

              </div>

              <div className="progress">

                <div
                  className="progress-bar"
                  style={{ width: "75%" }}
                ></div>

              </div>

            </div>


            {/* React */}

            <div className="skill-card">

              <div className="skill-top">

                <h3>React</h3>

                <span>70%</span>

              </div>

              <div className="progress">

                <div
                  className="progress-bar"
                  style={{ width: "70%" }}
                ></div>

              </div>

            </div>


            {/* Java */}

            <div className="skill-card">

              <div className="skill-top">

                <h3>Java</h3>

                <span>80%</span>

              </div>

              <div className="progress">

                <div
                  className="progress-bar"
                  style={{ width: "80%" }}
                ></div>

              </div>

            </div>


            {/* Git & GitHub */}

            <div className="skill-card">

              <div className="skill-top">

                <h3>Git & GitHub</h3>

                <span>75%</span>

              </div>

              <div className="progress">

                <div
                  className="progress-bar"
                  style={{ width: "75%" }}
                ></div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= PROJECTS ================= */}

      <section id="projects" className="projects">

        <div className="container">

          <div className="section-heading">

            <p>MY WORK</p>

            <h2>
              Projects I've built.
            </h2>

          </div>


          <div className="projects-grid">


            {/* Project 1 */}

            <div className="project-card">

              <div className="project-number">
                01
              </div>

              <h3>
                FestEase
              </h3>

              <p>
                A smart festival event management platform designed
                to help users organize, manage and participate in
                festival events efficiently.
              </p>

              <div className="project-tags">

                <span>React</span>

                <span>JavaScript</span>

                <span>CSS</span>

              </div>

              <a
                href="#"
                className="project-link"
              >
                View Project →
              </a>

            </div>


            {/* Project 2 */}

            <div className="project-card">

              <div className="project-number">
                02
              </div>

              <h3>
                Task Manager
              </h3>

              <p>
                A task management application that allows users to
                create, manage, complete and delete their daily tasks.
              </p>

              <div className="project-tags">

                <span>Java</span>

                <span>Android</span>

                <span>SQLite</span>

              </div>

              <a
                href="#"
                className="project-link"
              >
                View Project →
              </a>

            </div>


            {/* Project 3 */}

            <div className="project-card">

              <div className="project-number">
                03
              </div>

              <h3>
                StudySync
              </h3>

              <p>
                A student productivity application designed to help
                organize subjects, study sessions and daily tasks.
              </p>

              <div className="project-tags">

                <span>UI/UX</span>

                <span>React</span>

                <span>JavaScript</span>

              </div>

              <a
                href="#"
                className="project-link"
              >
                View Project →
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section id="contact" className="contact">

        <div className="container">

          <div className="section-heading">

            <p>GET IN TOUCH</p>

            <h2>
              Let's build something together.
            </h2>

          </div>


          <div className="contact-grid">


            {/* Contact Information */}

            <div className="contact-info">

              <p className="contact-description">
                Have a project idea, internship opportunity or just
                want to connect? Feel free to reach out.
              </p>


              <div className="contact-item">

                <span>📧</span>

                <div>

                  <h3>Email</h3>

                  <p>
                    sahilnimborkar2006email@gmail.com
                  </p>

                </div>

              </div>


              <div className="contact-item">

                <span>📍</span>

                <div>

                  <h3>Location</h3>

                  <p>
                    India
                  </p>

                </div>

              </div>


              <div className="contact-item">

                <span>💼</span>

                <div>

                  <h3>Availability</h3>

                  <p>
                    Open to opportunities
                  </p>

                </div>

              </div>

            </div>


            {/* Contact Form */}

            <div className="contact-form">

              <form>

                <div className="form-group">

                  <label>
                    Name
                  </label>

                  <input
                    type="text"
                    placeholder="Sahil"
                  />

                </div>


                <div className="form-group">

                  <label>
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="sahilnimborkar2006@email.com"
                  />

                </div>


                <div className="form-group">

                  <label>
                    Message
                  </label>

                  <textarea
                    rows="5"
                    placeholder="Tell me about your project..."
                  ></textarea>

                </div>


                <button
                  type="submit"
                  className="primary-button"
                >
                  Send Message →
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="container footer-container">

          <p>
            © 2026 Sahil Nimborkar. All rights reserved.
          </p>


          <div className="footer-links">

            <a href="#home">
              Home
            </a>

            <a href="#about">
              About
            </a>

            <a href="#projects">
              Projects
            </a>

            <a href="#contact">
              Contact
            </a>

          </div>

        </div>

      </footer>

    </div>
  );
}

export default App;