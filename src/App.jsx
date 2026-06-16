import "./index.css";

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">Nasywah.</div>

        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#publication">Publication</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#organizations">Leadership</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-left">
            <p className="intro">Hello, I'm</p>

            <h1>Nasywah Nabilah Putri</h1>

            <h2>
              IT Governance,
              <br />
              Risk & Compliance
            </h2>

            <p className="description">
              Information Systems Graduate from Telkom University
              (GPA 3.84 - Cumlaude) with professional experience at
              Telkom Indonesia. Passionate about IT Governance,
              Enterprise Architecture, Business Process Management,
              Risk Management, Business Analysis, and Network Service Operations.
            </p>

            <div className="buttons">
              <a href="#projects" className="btn-primary">
                View Projects
              </a>

              <a
                href="https://www.linkedin.com/in/nasywahnabilahputri/"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="hero-right">
            <div className="profile-circle">NP</div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">
            <span>01.</span> About Me
          </h2>

          <div className="experience-card">
            <p>
              I am a fresh graduate in Information Systems from
              Telkom University with a strong interest in IT Governance,
              Risk & Compliance (GRC), Enterprise Architecture,
              Business Development, Business Analysis, and Network Service Operations.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section">
        <div className="container">
          <h2 className="section-title">
            <span>02.</span> Professional Experience
          </h2>

          <div className="experience-card">
            <h3>Fulfillment Service Operation</h3>
            <h4>Telkom KTI | Dec 2025 - Present</h4>

            <ul>
              <li>Managed B2B & B2C service orders.</li>
              <li>Handled service fallout and provisioning issues.</li>
              <li>Prepared operational reporting and monitoring dashboards.</li>
              <li>Performed network configuration using TAKAS, UNM2000 and ACS Ibooster.</li>
            </ul>
          </div>

          <div className="experience-card">
            <h3>Performance & Helpdesk Operation Intern</h3>
            <h4>Telkom KTI | Jun 2024 - Aug 2024</h4>

            <ul>
              <li>Monitored regional infrastructure performance.</li>
              <li>Managed service tickets and customer issues.</li>
              <li>Prepared OGP and provisioning reports.</li>
              <li>Supported ROC social media content creation.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PUBLICATION */}
      <section id="publication" className="section">
        <div className="container">
          <h2 className="section-title">
            <span>03.</span> Publication
          </h2>

          <div className="project-card">
            <h3>
              Ambidextrous AI Governance Design Based on COBIT 2019 Traditional and DevOps
              for TelCo's Digital Transformation
            </h3>

            <p>
              Published in TIERS Journal (SINTA 2),
              Vol. 6 No. 21, 2025.
            </p>

            <a
              href="https://journal.undiknas.ac.id/index.php/tiers/article/view/6610"
              target="_blank"
              rel="noreferrer"
            >
              View Publication
            </a>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="section">
        <div className="container">
          <h2 className="section-title">
            <span>04.</span> Certifications
          </h2>

          <div className="skills-grid">
            <div className="skill-card">SAP Fundamental</div>
            <div className="skill-card">Processes in Procurement</div>
            <div className="skill-card">Business Process in Financial Accounting</div>
            <div className="skill-card">CoRover Certified AI Professional</div>
            <div className="skill-card">Fundamental Cybersecurity Framework</div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">
            <span>05.</span> Projects
          </h2>

          <div className="projects-grid">
            <div className="project-card">
              <h3>FinSmart App</h3>
              <p>Financial platform for UMKM funding and planning.</p>
            </div>

            <div className="project-card">
              <h3>Stock Master App</h3>
              <p>Inventory management platform for PT Soka Cipta Niaga.</p>
            </div>

            <div className="project-card">
              <h3>SoulCare App</h3>
              <p>Mental health platform integrating technology and culture.</p>
            </div>

            <div className="project-card">
              <h3>Tourology App</h3>
              <p>Travel recommendation and tourism information application.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ORGANIZATIONS */}
      <section id="organizations" className="section">
        <div className="container">
          <h2 className="section-title">
            <span>06.</span> Leadership & Organizations
          </h2>

          <div className="experience-card">
            <ul>
              <li>Coordinator - Research & Project Division (SAG Lab)</li>
              <li>Director - Research Project (ISACA Student Group)</li>
              <li>Staff - Student Affairs Department (HMSI)</li>
              <li>Vice Chair - Cyan Event Project</li>
              <li>Staff - External Relations Department (HIPMI PT Telkom)</li>
              <li>Manager - Cyan Music Community</li>
              <li>Head of Internal Division - KMB Arpal ri Bandung</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">
            <span>07.</span> Contact
          </h2>

          <div className="contact-card">
            <p>📧 naswahputri88c@gmail.com</p>
            <p>📱 +62 852 6649 4251</p>
            <p>📍 Makassar, Indonesia</p>

            <p>
              🎨 Dribbble:
              {" "}
              <a
                href="https://dribbble.com/nasywahhhhh"
                target="_blank"
                rel="noreferrer"
              >
                dribbble.com/nasywahhhhh
              </a>
            </p>

            <p>
              💼 LinkedIn:
              {" "}
              <a
                href="https://www.linkedin.com/in/nasywahnabilahputri/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/nasywahnabilahputri
              </a>
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        © 2026 Nasywah Nabilah Putri | Portfolio Website
      </footer>
    </>
  );
}

export default App;