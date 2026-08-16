import styles from "./Resume.module.scss";
import { BemBuilder } from "@/app/lib/BemBuilder";

export default function Resume() {
  const bem = new BemBuilder("resume", styles);

  return (
    <main className={bem.block()}>
      <div className={bem.element("content")}>
        {/* Header */}
        <header className={bem.element("header")}>
          <div className={bem.element("headerLeft")}>
            <span className={bem.element("eyebrow")}>Full Stack Engineer</span>
            <h1 className={bem.element("name")}>Justin Peter</h1>
          </div>
          <div className={bem.element("links")}>
            <a href="mailto:hello@justinpeter.dev">hello@justinpeter.dev</a>
            <a
              href="https://www.linkedin.com/in/justinkmpeter/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="/resume.pdf"
              download="Justin Peter - Resume.pdf"
              className={bem.element("download")}
            >
              Download PDF
            </a>
          </div>
        </header>

        {/* About */}
        <section className={bem.element("section")}>
          <span className={bem.element("label")}>About</span>
          <div className={bem.element("body")}>
            <p>
              Five years of full-stack work at small startups, close enough to
              the impact to know exactly who I&apos;m building for. I&apos;m
              comfortable raising technical, design, and accessibility concerns
              directly with co-founders and stakeholders, not just executing
              what&apos;s handed to me. I care as much about code scaling
              cleanly as I do about it working.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section className={bem.element("section")}>
          <span className={bem.element("label")}>Skills</span>
          <div className={bem.element("body")}>
            <div className={bem.element("skills")}>
              <div className={bem.element("skillRow")}>
                <span className={bem.element("skillLabel")}>Frontend</span>
                <span>
                  React, TypeScript, JavaScript, Vue, Tailwind, HTML/CSS,
                  Storybook, Figma, Redux, Web Sockets
                </span>
              </div>
              <div className={bem.element("skillRow")}>
                <span className={bem.element("skillLabel")}>Backend</span>
                <span>Node.js, Express.js, REST APIs, Java</span>
              </div>
              <div className={bem.element("skillRow")}>
                <span className={bem.element("skillLabel")}>Databases</span>
                <span>MongoDB, MySQL, PostgreSQL, SQL</span>
              </div>
              <div className={bem.element("skillRow")}>
                <span className={bem.element("skillLabel")}>Tooling</span>
                <span>
                  Heroku, Postman, Cypress, Jest (unit & integration testing),
                  AWS S3, AWS Chime, GitLab, CI/CD Pipelines
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className={bem.element("section")}>
          <span className={bem.element("label")}>Experience</span>
          <div className={bem.element("body")}>
            <div className={bem.element("role")}>
              <div className={bem.element("roleHeader")}>
                <div>
                  <div className={bem.element("position")}>
                    Full Stack Engineer
                  </div>
                  <div className={bem.element("company")}>
                    The Social Institute · Remote
                  </div>
                </div>
                <div className={bem.element("dates")}>Aug 2023 – Present</div>
              </div>
              <div className={bem.element("stack")}>
                React · TypeScript · Node.js · MongoDB · Express.js · AWS S3
              </div>
              <ul className={bem.element("bullets")}>
                <li>
                  Built an automated insights pipeline (Node.js Cron jobs,
                  MongoDB aggregations) delivering monthly engagement reports to
                  1,000+ partner schools.
                </li>
                <li>
                  Built a reusable TypeScript form validation library from
                  scratch, eliminating duplicate logic across 12+ forms backed
                  by Jest test coverage.
                </li>
                <li>
                  Built host-side navigation for a live, multiplayer classroom
                  quiz game using Web Sockets, synchronizing real-time state
                  across student devices as the teacher advanced through
                  questions.
                </li>
                <li>
                  Led design-to-dev process improvements by introducing atomic
                  design principles and a GitLab-powered Storybook pipeline and
                  sitting in recurring weekly design reviews with the lead
                  designer and Co-Founder to flag technical feasibility and
                  accessibility concerns before handoff.
                </li>
                <li>
                  Extended internal CMS with AWS asset uploads, async duplicate
                  detection, and content workflow tooling; migrated legacy
                  JavaScript to TypeScript.
                </li>
              </ul>
            </div>

            <div className={bem.element("role")}>
              <div className={bem.element("roleHeader")}>
                <div>
                  <div className={bem.element("position")}>
                    Full Stack Engineer
                  </div>
                  <div className={bem.element("company")}>
                    BirchNotes · Hybrid
                  </div>
                </div>
                <div className={bem.element("dates")}>May 2021 – Nov 2022</div>
              </div>
              <div className={bem.element("stack")}>
                Vue · Vite · Node.js · Express.js · MySQL · AWS Chime · AWS S3
              </div>
              <ul className={bem.element("bullets")}>
                <li>
                  Collaborated with a team of 3 developers to rebuild the
                  platform during a company-wide rebrand, migrating from React
                  to Vue and Vite cutting load times from 3s to 0.7s (a 76%
                  improvement) for hundreds of users.
                </li>
                <li>
                  Extended a Syncfusion-based calendar component with recurring
                  appointments, cancellation/no-show fee logic, and status
                  tracking, scaling to 50K+ records as clinician sign-ups grew.
                </li>
                <li>
                  Built an in-house telehealth feature using AWS Chime,
                  replacing a third-party tool like Zoom and owning the client
                  portal UI, meeting scheduling lifecycle, and session state
                  management.
                </li>
                <li>
                  Built HIPAA-compliant consent, intake, assessment, and
                  toxicology forms with encrypted e-signature storage and
                  permission-based access controls, yielding a foundational,
                  legally required piece of the platform&apos;s core
                  infrastructure.
                </li>
              </ul>
            </div>

            <div className={bem.element("role")}>
              <div className={bem.element("roleHeader")}>
                <div>
                  <div className={bem.element("position")}>
                    Full Stack Developer Intern
                  </div>
                  <div className={bem.element("company")}>
                    BirchNotes · Hybrid
                  </div>
                </div>
                <div className={bem.element("dates")}>Jan 2021 – May 2021</div>
              </div>
              <div className={bem.element("stack")}>
                Cypress · JavaScript · Postman · Git
              </div>
              <ul className={bem.element("bullets")}>
                <li>
                  Wrote and maintained Cypress end-to-end test suites covering
                  full user flows, form validation, click handlers, and API
                  calls to ensure quality across a fast-moving agile sprint
                  cycle.
                </li>
                <li>
                  Performed manual testing across payment ledger and form-based
                  workflows, catching calculation errors and UI inconsistencies
                  before production.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className={bem.element("divider")} />

        {/* Education */}
        <section className={bem.element("section")}>
          <span className={bem.element("label")}>Education</span>
          <div className={bem.element("body")}>
            <div className={bem.element("role")}>
              <div className={bem.element("roleHeader")}>
                <div>
                  <div className={bem.element("position")}>
                    Master of Science, Information Technology
                  </div>
                  <div className={bem.element("company")}>Virginia Tech</div>
                </div>
                <div className={bem.element("dates")}>Jan 2026 – Present</div>
              </div>
              <p className={bem.element("note")}>
                Graduate Certificates in Big Data & Software Development (earned
                as part of degree program)
              </p>
            </div>
            <div className={bem.element("role")}>
              <div className={bem.element("roleHeader")}>
                <div>
                  <div className={bem.element("position")}>
                    Bachelor of Science, Computer Engineering
                  </div>
                  <div className={bem.element("company")}>
                    University of South Florida
                  </div>
                </div>
                <div className={bem.element("dates")}>May 2021</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
