import styles from "./Resume.module.scss";

export default function Resume() {
  return (
    <main className={styles.resume}>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <h1>Justin Peter</h1>
            <p>Software Engineer</p>
          </div>
          <div className={styles.headerRight}>
            <a href="mailto:hello@justinpeter.dev">hello@justinpeter.dev</a>
            <a
              href="https://www.linkedin.com/in/justinkmpeter/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/justinkpeter"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="/resume.pdf"
              download="Justin Peter - Resume.pdf"
              className={styles.downloadBtn}
            >
              Download PDF
            </a>
          </div>
        </header>

        <div className={styles.divider} />

        {/* About */}
        <section className={styles.section}>
          <div className={styles.sectionLabel}>About</div>
          <div className={styles.sectionContent}>
            <p>
              Full stack engineer with 4+ years building products at
              mission-driven edtech and healthtech startups. Brings structure to
              growing codebases and owns features end to end, from design
              systems and type-safe libraries to automated pipelines.
            </p>
          </div>
        </section>

        <div className={styles.divider} />

        {/* Skills */}
        <section className={styles.section}>
          <div className={styles.sectionLabel}>Skills</div>
          <div className={styles.sectionContent}>
            <div className={styles.skillsGrid}>
              <div className={styles.skillRow}>
                <span className={styles.skillCategory}>Languages</span>
                <span>TypeScript, JavaScript, SQL, MQL, Java, HTML, CSS</span>
              </div>
              <div className={styles.skillRow}>
                <span className={styles.skillCategory}>Frontend</span>
                <span>React, RTK Query, Vue, Storybook, Figma</span>
              </div>
              <div className={styles.skillRow}>
                <span className={styles.skillCategory}>Backend</span>
                <span>Node.js, Express.js, REST APIs</span>
              </div>
              <div className={styles.skillRow}>
                <span className={styles.skillCategory}>Databases</span>
                <span>MongoDB, MySQL, PostgreSQL</span>
              </div>
            </div>
          </div>
        </section>

        <div className={styles.divider} />

        {/* Experience */}
        <section className={styles.section}>
          <div className={styles.sectionLabel}>Experience</div>
          <div className={styles.sectionContent}>
            <div className={styles.role}>
              <div className={styles.roleHeader}>
                <div>
                  <div className={styles.roleTitle}>Full Stack Engineer</div>
                  <div className={styles.roleMeta}>
                    The Social Institute · Remote
                  </div>
                </div>
                <div className={styles.roleDates}>Aug 2023 – Present</div>
              </div>
              <div className={styles.roleStack}>
                MongoDB · Express · React · Node.js · TypeScript
              </div>
              <ul className={styles.bullets}>
                <li>
                  Introduced atomic design principles, building a library of 20+
                  reusable components and a GitLab-powered Storybook pipeline
                  that reduced handoff friction and accelerated feature delivery
                  across the product.
                </li>
                <li>
                  Built and owned a monthly automated insights pipeline using
                  Node.js Cron jobs, MongoDB aggregations, and a custom email
                  template delivering data-driven engagement reports to 100+
                  partner schools with zero regressions.
                </li>
                <li>
                  Built a reusable TypeScript form validation library from
                  scratch, eliminating duplicated validation logic across 12+
                  forms with a consistent, type-safe system backed by Jest unit
                  test coverage.
                </li>
                <li>
                  Established a Jest testing baseline across React components,
                  shared utility functions, and API response shape validation
                  for role-based access, improving refactor confidence and
                  reducing manual regression surface area.
                </li>
                <li>
                  Rearchitected legacy dashboards with role-based widgets,
                  shortcuts, and CTAs in collaboration with the Co-Founder &
                  CDO, driving a 23% increase in CTA click rates and measurable
                  improvements in feature adoption.
                </li>
              </ul>
            </div>

            <div className={styles.role}>
              <div className={styles.roleHeader}>
                <div>
                  <div className={styles.roleTitle}>Full Stack Engineer</div>
                  <div className={styles.roleMeta}>
                    BirchNotes (formerly Therapax) · Hybrid
                  </div>
                </div>
                <div className={styles.roleDates}>Jun 2021 – Jul 2022</div>
              </div>
              <div className={styles.roleStack}>
                MySQL · Express · Vue · Node.js
              </div>
              <ul className={styles.bullets}>
                <li>
                  Helped scope and ship a dashboard rebuild from scratch in
                  under 6 months, improving the core product experience for 100+
                  users alongside a full company rebrand.
                </li>
                <li>
                  Maintained and extended a Syncfusion calendar component,
                  implementing recurring appointments, cancellation and no-show
                  fee logic, and appointment status tracking across the
                  platform's core clinical workflow.
                </li>
                <li>
                  Integrated Google Calendar API with two-way sync, enabling
                  real-time appointment management and reducing scheduling
                  conflicts across clinician workflows.
                </li>
              </ul>
            </div>

            <div className={styles.role}>
              <div className={styles.roleHeader}>
                <div>
                  <div className={styles.roleTitle}>
                    Quality Assurance Engineer
                  </div>
                  <div className={styles.roleMeta}>
                    BirchNotes (formerly Therapax) · On-site
                  </div>
                </div>
                <div className={styles.roleDates}>Dec 2020 – May 2021</div>
              </div>
              <div className={styles.roleStack}>
                Cypress · Git · Postman · Monday.com
              </div>
              <ul className={styles.bullets}>
                <li>
                  Wrote and maintained Cypress E2E test suites covering full
                  user flows, form validation, click handlers, and API calls
                  with DRY patterns that reduced regressions across core
                  onboarding and scheduling workflows.
                </li>
                <li>
                  Performed manual testing across payment ledger workflows and
                  form-based user flows, catching calculation errors and UI
                  inconsistencies before production.
                </li>
                <li>
                  Worked directly alongside developers in daily standups and
                  2-week sprint cycles using Git, Postman, and Monday.com to
                  keep test coverage aligned with active development.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className={styles.divider} />

        {/* Education */}
        <section className={styles.section}>
          <div className={styles.sectionLabel}>Education</div>
          <div className={styles.sectionContent}>
            <div className={styles.role}>
              <div className={styles.roleHeader}>
                <div>
                  <div className={styles.roleTitle}>
                    Master of Science, Information Technology
                  </div>
                  <div className={styles.roleMeta}>Virginia Tech</div>
                </div>
                <div className={styles.roleDates}>Jan 2026 – Present</div>
              </div>
              <p className={styles.roleNote}>
                Graduate Certificates in Big Data & Software Development
              </p>
            </div>
            <div className={styles.role}>
              <div className={styles.roleHeader}>
                <div>
                  <div className={styles.roleTitle}>
                    Bachelor of Science, Computer Engineering
                  </div>
                  <div className={styles.roleMeta}>
                    University of South Florida
                  </div>
                </div>
                <div className={styles.roleDates}>May 2022</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
