export type Project = {
  title: string;
  category: string;
  description: string;
  stack: string[];
  impact: string;
  link: string;
};

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
