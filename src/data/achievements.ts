export type AchievementItem = {
  title: string;
  type: 'Publication' | 'Course' | 'Bootcamp' | 'Contest';
  description: string;
  image?: string;
};

export const achievements: AchievementItem[] = [
  {
    title: 'Research Paper on QA Automation Reliability',
    type: 'Publication',
    description:
      'Co-authored a research paper focused on reducing flaky end-to-end test behavior through smarter selector and retry strategies.',
  },
  {
    title: 'Advanced API Testing and Contract Validation',
    type: 'Course',
    description:
      'Completed a professional online course covering API schema governance, contract testing, and automation best practices.',
  },
  {
    title: 'Industry QA Engineering Bootcamp',
    type: 'Bootcamp',
    description:
      'Participated in an intensive bootcamp with real project simulations on web, API, and performance testing workflows.',
  },
  {
    title: 'Intra University Programming Contest',
    type: 'Contest',
    description:
      'Participated in an intensive bootcamp with real project simulations on web, API, and performance testing workflows.',
  },
];
