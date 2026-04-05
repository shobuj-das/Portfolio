export type AchievementItem = {
  title: string;
  type: 'Publication' | 'Course' | 'Bootcamp' | 'Contest';
  highlights: string[];
  image?: string;
};

export const achievements: AchievementItem[] = [
  {
    title: 'Research Paper on QA Automation Reliability',
    type: 'Publication',
    highlights: [
      'Co-authored a paper on reducing flaky end-to-end test failures.',
      'Focused on resilient selector design and retry governance patterns.',
      'Documented measurable stability improvements in regression runs.',
      'Presented findings as a practical framework for QA teams.',
    ],
    image: 'public/qa-harbor.jpeg',
  },
  {
    title: 'Advanced API Testing and Contract Validation',
    type: 'Course',
    highlights: [
      'Completed advanced modules on API schema governance.',
      'Built hands-on contract testing workflows for CI pipelines.',
      'Applied versioning checks to prevent backward compatibility breaks.',
      'Strengthened test strategy for service-to-service reliability.',
    ],
  },
  {
    title: 'Industry QA Engineering Bootcamp',
    type: 'Bootcamp',
    highlights: [
      'Delivered web, API, and performance testing simulations.',
      'Practiced risk-based prioritization for release cycles.',
      'Improved automation structure for maintainability and speed.',
    ],
  },
  {
    title: 'Intra University Programming Contest',
    type: 'Contest',
    highlights: [
      'Solved algorithmic problems under strict time constraints.',
      'Collaborated on solution validation and edge-case analysis.',
      'Improved debugging speed and test-driven problem solving.',
      'Ranked among active participants in the final round.',
    ],
    image: 'public/qa-harbor.jpeg',
  },
];
