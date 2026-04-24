export type Project = {
  title: string;
  category: string;
  description: string;
  stack: string[];
  highlights: string[];
  link: string;
};

export const projects: Project[] = [
  {
    title: 'Swag Lab Automation',
    category: 'Web Application Automation',
    description:
      'A Cucumber + Java + POM framework designed for reliable UI regression coverage with reusable test modules.',
    stack: ['Java', 'Selenium', 'Cucumber', 'TestNG', 'Maven', 'Allure'],
    highlights: [
      'Reduced manual regression effort by standardizing repeatable checkout and auth flows.',
      'Improved suite maintainability with reusable page objects and step definitions.',
    ],
    link: 'https://github.com/shobuj-das/Swag-Lab-Automation-Cucumber-Java-POM',
  },
  {
    title: 'Mobile Application Automation',
    category: 'Mobile QA',
    description:
      'An Appium-based framework for Android automation with data-driven execution and clear reporting pipelines.',
    stack: ['Java', 'Appium', 'TestNG', 'POM', 'Allure'],
    highlights: [
      // 'Enabled faster smoke validation for critical app journeys',
      // 'Strengthened release readiness through consistent test reporting and failure visibility.',
    ],
    link: 'https://github.com/shobuj-das/Mobile-App-Automation-POM-Java-Appium',
  },
  {
    title: 'Restful Booker API Validation',
    category: 'API Testing',
    description:
      'Automated API collections with Postman and Newman to validate auth, booking lifecycle, and error handling.',
    stack: ['Postman', 'Newman', 'JavaScript', 'CI'],
    highlights: [
      'Improved release confidence with automated API checks in pre-deployment stages.',
      'Caught contract and workflow defects earlier in CI validation flows.',
    ],
    link: 'https://github.com/shobuj-das/Restful-booker-API-testing-with-Postman',
  },
];
