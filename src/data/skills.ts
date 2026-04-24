export type SkillCategory = {
  title: string;
  summary: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Automation Engineering',
    summary: 'Building maintainable end-to-end and API automation suites.',
    skills: [
      'Playwright',
      'Selenium',
      'Appium',
      'TestNG',
      'Cucumber',
      'POM',
    ],
  },
  {
    title: 'Quality Strategy',
    summary:
      'Shifting quality left through smart coverage and risk-based testing.',
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
    summary:
      'Validating services for correctness, resilience, and speed.',
    skills: [
      'Postman',
      'Newman',
      'Pytest',
      'JMeter',
      'Locust',
      'SQL',
      'MySQL',
    ],
  },
  {
    title: 'Programming Language',
    summary:
      '',
    skills: [
      'Java',
      'Python',
      'C',
      'C++'
    ],
  },
  {
    title: 'Tools & Concepts',
    summary:
      'Integrating testing into CI/CD workflows for faster feedback.',
    skills: [
      'Git',
      'GitHub',
      'Jira',
      'VS Code',
      'PyCharm',
      'OOP',
      'SDLC',
      'STLC',
    ],
  },
  {
    title: 'Operating System',
    summary:
      '',
    skills: [
      'Linux', 
      'Windows',
    ],
  },
];