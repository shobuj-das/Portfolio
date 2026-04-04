export type EducationItem = {
  degree: string;
  institution: string;
  result: string;
  passingYear: string;
};

export const educations: EducationItem[] = [
  {
    degree: 'SSC',
    institution: 'Sankuchail High School',
    result: 'GPA: 4.39/5',
    passingYear: '2018',
  },
  {
    degree: 'HSC',
    institution: 'Shoshidol Al Haj Mohammad Abu Taher College',
    result: 'GPA: 4.58/5',
    passingYear: '2020',
  },
  {
    degree: 'BSc in CSE',
    institution: 'Bangladesh University of Business and Technology (BUBT)',
    result: 'GPA: 3.56/4',
    passingYear: '2025',
  },
];
