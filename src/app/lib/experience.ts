const experience = [
  {
    company: "The Social Institute",
    position: "Full Stack Engineer",
    dates: "2023 - Present",
    location: "Remote",
    stack: ["MongoDB", "Express", "React", "Node.js", "TypeScript", "Jest"],
    description:
      "Built and owned core platform infrastructure for a SaaS platform helping 100+ partner schools teach students responsible online behavior, serving thousands of students — from a reusable component library and automated insights pipeline to a type-safe form validation system and role-based dashboard rearchitecture.",
    bullets: [
      "Introduced atomic design principles, building 20+ reusable components and a GitLab-powered Storybook pipeline that reduced design-dev handoff friction and accelerated feature delivery.",
      "Built a monthly automated insights pipeline using Node.js Cron jobs, MongoDB aggregations, and a custom email template delivering engagement reports to 100+ partner schools with zero regressions.",
      "Built a reusable TypeScript form validation library eliminating duplicated logic across 12+ forms, backed by Jest unit test coverage.",
      "Rearchitected legacy dashboards with role-based widgets and CTAs in collaboration with the Co-Founder & CDO, driving a 23% increase in CTA click rates and measurable improvements in feature adoption.",
    ],
  },
  {
    company: "Birch Notes",
    position: "Full Stack Engineer",
    dates: "Jun 2021 - Jul 2022",
    location: "Hybrid",
    stack: ["MySQL", "Express", "Vue.js", "Node.js"],
    description:
      "Joined as a QA Engineer and grew into a full stack role, helping scope and ship a full dashboard rebuild and company rebrand in under 6 months for a mental health SaaS platform serving 100+ clinicians.",
    bullets: [
      "Maintained and extended a Syncfusion calendar component with recurring appointments, cancellation and no-show fee logic, and appointment status tracking across the platform's core clinical workflow.",
      "Integrated Google Calendar API with two-way sync, keeping clinician workflows in sync and reducing scheduling conflicts across the platform.",
      "Helped scope and ship a dashboard rebuild from scratch in under 6 months alongside a full company rebrand.",
    ],
  },
  {
    company: "Birch Notes",
    position: "Quality Assurance Engineer",
    dates: "Dec 2020 - May 2021",
    location: "On-site",
    stack: ["Cypress", "Git", "Postman", "Monday.com"],
    description:
      "Established end-to-end test coverage across core user flows and collaborated daily with developers in sprint cycles to keep testing aligned with active development.",
    bullets: [
      "Wrote and maintained Cypress E2E test suites covering full user flows, form validation, click handlers, and API calls with DRY patterns that reduced regressions across onboarding and scheduling workflows.",
      "Performed manual testing across payment ledger workflows and form-based user flows, catching calculation errors and UI inconsistencies before production.",
      "Worked directly with developers in daily standups and 2-week sprint cycles using Git, Postman, and Monday.com.",
    ],
  },
];

export default experience;
