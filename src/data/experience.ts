export type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  startDate: string;
  location: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: 'Technonext Software Limited',
    role: 'Jr. Test Automation Engineer',
    duration: 'Dec 2025 – Present',
    location: 'Dhaka',
    startDate: '2025-12-01',
    highlights: [
      'Tested ride-sharing platform (booking, fare, payment)',
      'Performed API testing',
      'Automated OTA platform using Playwright + TestNG',
      'Worked on airport self-service check-in system',
    ],
  },
  {
    company: 'Technonext Software Limited',
    role: 'Intern Test Automation Engineer',
    duration: 'Aug 2025 – Nov 2025',
    location: 'Dhaka',
    startDate: '2025-08-03',
    highlights: [
      'Maintained Playwright automation framework',
      'Developed automated test scenarios',
      'Validated payment and booking systems',
    ],
  },
];
