export type Stat = {
  label: string;
  value: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type SkillCategory = {
  title: string;
  summary: string;
  skills: string[];
};

export type Project = {
  title: string;
  category: string;
  description: string;
  stack: string[];
  impact: string;
  link: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  location: string;
  highlights: string[];
};

export type BlogPost = {
  title: string;
  description: string;
  readingTime: string;
  tag: string;
};

export const profile = {
  name: 'Shobuj Chandra Das',
  role: 'QA Automation Engineer',
  tagline:
    'I build reliable, scalable quality pipelines that ship faster releases with measurable confidence.',
  location: 'Dhaka, Bangladesh',
  stats: [
    { label: 'Automation Coverage', value: '85%+' },
    { label: 'Regression Time Reduced', value: '60%' },
    { label: 'CI Stability', value: '99.2%' },
  ] satisfies Stat[],
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/shobuj-das' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shobuj-das/' },
    { label: 'Email', href: 'mailto:dasshobuj@gmail.com' },
  ] satisfies SocialLink[],
  resumeUrl: '/resume.pdf',
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Automation Engineering',
    summary: 'Building maintainable end-to-end and API automation suites.',
    skills: ['Playwright', 'Selenium', 'Appium', 'TestNG', 'Cucumber', 'POM'],
  },
  {
    title: 'Quality Strategy',
    summary: 'Shifting quality left through smart coverage and risk-based testing.',
    skills: [
      'Test Planning',
      'Regression Strategy',
      'Defect Analysis',
      'Root Cause Analysis',
      'Test Reporting',
    ],
  },
  {
    title: 'API and Performance',
    summary: 'Validating services for correctness, resilience, and speed.',
    skills: ['Postman', 'Newman', 'REST Assured', 'JMeter', 'SQL', 'MySQL'],
  },
  {
    title: 'Dev Workflow and Tooling',
    summary: 'Integrating testing into CI/CD workflows for faster feedback.',
    skills: ['Git', 'GitHub Actions', 'Jira', 'Java', 'TypeScript', 'Python'],
  },
];

export const projects: Project[] = [
  {
    title: 'Swag Lab Automation Framework',
    category: 'Web Test Automation',
    description:
      'A Cucumber + Java + POM framework designed for reliable UI regression coverage with reusable test modules.',
    stack: ['Java', 'Selenium', 'Cucumber', 'TestNG', 'Maven'],
    impact: 'Reduced manual regression effort by standardizing repeatable checkout and auth flows.',
    link: 'https://github.com/shobuj-das/Swag-Lab-Automation-Cucumber-Java-POM',
  },
  {
    title: 'Mobile Automation Framework',
    category: 'Mobile QA',
    description:
      'An Appium-based framework for Android automation with data-driven execution and clear reporting pipelines.',
    stack: ['Java', 'Appium', 'TestNG', 'POM', 'Allure'],
    impact: 'Enabled faster smoke validation for critical app journeys on each release cycle.',
    link: 'https://github.com/shobuj-das/Mobile-App-Automation-POM-Java-Appium',
  },
  {
    title: 'Restful Booker API Validation',
    category: 'API Testing',
    description:
      'Automated API collections with Postman and Newman to validate auth, booking lifecycle, and error handling.',
    stack: ['Postman', 'Newman', 'JavaScript', 'CI'],
    impact: 'Improved release confidence with automated API checks in pre-deployment stages.',
    link: 'https://github.com/shobuj-das/Restful-booker-API-testing-with-Postman',
  },
];

export const experience: ExperienceItem[] = [
  {
    company: 'Technonext Software Limited',
    role: 'QA Automation Engineer',
    duration: '2022 - Present',
    location: 'Dhaka, Bangladesh',
    highlights: [
      'Automated OTA and ride-sharing workflows using Playwright and TestNG, improving regression reliability.',
      'Validated airport self-service check-in modules covering booking, payment, and ticketing edge cases.',
      'Integrated API and performance test suites into release gates to catch critical issues before production.',
      'Collaborated with engineering teams to reduce escaped defects through actionable test reporting.',
    ],
  },
];

export const blogPosts: BlogPost[] = [
  {
    title: 'Building Stable Playwright Suites for Fast-Moving Products',
    description: 'Practical patterns for selectors, retries, fixtures, and flake prevention in CI.',
    readingTime: '6 min read',
    tag: 'Playwright',
  },
  {
    title: 'A QA Engineer\'s Guide to API Test Pyramid Decisions',
    description: 'How to split checks across unit, service, and end-to-end layers for better signal.',
    readingTime: '5 min read',
    tag: 'API Testing',
  },
  {
    title: 'From Manual Regression to Risk-Based Automation Coverage',
    description: 'A framework for prioritizing high-value scenarios and tracking quality ROI.',
    readingTime: '7 min read',
    tag: 'Quality Strategy',
  },
];
