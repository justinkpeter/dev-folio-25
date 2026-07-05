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
            <span className={bem.element("eyebrow")}>Software Engineer</span>
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
              href="https://github.com/justinkpeter"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
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

        <div className={bem.element("divider")} />

        {/* About */}
        <section className={bem.element("section")}>
          <span className={bem.element("label")}>About</span>
          <div className={bem.element("body")}>
            <p>
              Full stack engineer with 5+ years building React UIs and
              Node/Express APIs at product-stage startups. Strong in component
              systems, form architecture, and test coverage. Currently pursuing
              an M.S. in IT at Virginia Tech (online, part-time).
            </p>
          </div>
        </section>

        <div className={bem.element("divider")} />

        {/* Skills */}
        <section className={bem.element("section")}>
          <span className={bem.element("label")}>Skills</span>
          <div className={bem.element("body")}>
            <div className={bem.element("skills")}>
              <div className={bem.element("skillRow")}>
                <span className={bem.element("skillLabel")}>Languages</span>
                <span>TypeScript, JavaScript, SQL, Java</span>
              </div>
              <div className={bem.element("skillRow")}>
                <span className={bem.element("skillLabel")}>Frontend</span>
                <span>React, RTK Query, Vue, Storybook, Figma</span>
              </div>
              <div className={bem.element("skillRow")}>
                <span className={bem.element("skillLabel")}>Backend</span>
                <span>Node.js, Express.js, REST APIs</span>
              </div>
              <div className={bem.element("skillRow")}>
                <span className={bem.element("skillLabel")}>Databases</span>
                <span>MongoDB, MySQL, PostgreSQL</span>
              </div>
            </div>
          </div>
        </section>

        <div className={bem.element("divider")} />

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
                MongoDB · Express · React · Node.js · TypeScript
              </div>
              <ul className={bem.element("bullets")}>
                <li>
                  Extended and maintained an internal CMS, implementing AWS
                  asset uploading with async duplicate file detection, migrating
                  legacy JavaScript to TypeScript, and building content workflow
                  tooling used to manage enterprise web assets.
                </li>
                <li>
                  Built and maintained a monthly automated insights pipeline
                  using Node.js Cron jobs, MongoDB aggregations delivering
                  data-driven engagement reports to 1000+ partner schools with
                  case-specific test suites.
                </li>
                <li>
                  Established development standards and documentation by
                  introducing atomic design principles and a GitLab-powered
                  Storybook pipeline, creating a shared design-dev component
                  language that reduced handoff friction.
                </li>
                <li>
                  Built a reusable TypeScript form validation library from
                  scratch, eliminating duplicated logic across 12+ forms with a
                  consistent, type-safe, system backed by Jest unit test
                  coverage.
                </li>
                <li>
                  Rearchitected legacy dashboards with role-based widgets,
                  shortcuts, and CTAs in collaboration with the Co-Founder &
                  CDO, driving an increase in CTA click rates and measurable
                  improvements in feature adoption.
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
                <div className={bem.element("dates")}>Jun 2021 – Jul 2022</div>
              </div>
              <div className={bem.element("stack")}>
                MySQL · Express · Vue · Node.js
              </div>
              <ul className={bem.element("bullets")}>
                <li>
                  Helped scope and ship a dashboard rebuild from scratch in
                  under 6 months, improving the core product experience for 100+
                  users alongside a full company rebrand.
                </li>
                <li>
                  Maintained and extended a Syncfusion based calendar component,
                  implementing recurring appointments, cancellation and no-show
                  fee logic, and appointment status tracking supporting
                  thousands of scheduling interactions across the
                  platform&apos;s core clinical workflow.
                </li>
                <li>
                  Integrated Google Calendar API with two-way sync, enabling
                  real-time appointment management across the platform and
                  Google Calendar reducing scheduling conflicts and keeping
                  clinician workflows in sync.
                </li>
              </ul>
            </div>

            <div className={bem.element("role")}>
              <div className={bem.element("roleHeader")}>
                <div>
                  <div className={bem.element("position")}>
                    Quality Assurance Engineer
                  </div>
                  <div className={bem.element("company")}>
                    BirchNotes · On-site
                  </div>
                </div>
                <div className={bem.element("dates")}>Dec 2020 – May 2021</div>
              </div>
              <div className={bem.element("stack")}>
                Cypress · Git · Postman · Monday.com
              </div>
              <ul className={bem.element("bullets")}>
                <li>
                  Wrote and maintained Cypress end-to-end test suites covering
                  full user flows, form validation, click handlers, and API
                  calls standardizing form and utility function testing with DRY
                  patterns that measurably reduced regressions across core
                  onboarding and scheduling workflows.
                </li>
                <li>
                  Performed manual testing across payment ledger workflows and
                  form-based user flows, catching calculation errors and UI
                  inconsistencies before reaching production.
                </li>
                <li>
                  Collaborated directly with developers in 2-week sprint cycles,
                  using Postman to validate API contracts and aligning test
                  coverage with active development to catch issues before code
                  merged.
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
                Graduate Certificates in Big Data & Software Development
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
                <div className={bem.element("dates")}>May 2022</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
