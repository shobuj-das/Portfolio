export type EducationItem = {
  degree: string;
  institution: string;
  result: string;
  passingYear: string;
};

export const educations: EducationItem[] = [
  {
    degree: 'B.Sc. in Computer Science and Engineering',
    institution: 'Bangladesh University of Business and Technology (BUBT)',
    result: 'CGPA: 3.56/4',
    passingYear: '2023',
  },
   {
    degree: 'Higher Secondary Certificate',
    institution: 'Shashidal Al-haj Mohammad Abu Taher College',
    result: 'GPA: 4.58/5',
    passingYear: '2018',
  },
  {
    degree: 'Secondary School Certificate',
    institution: 'Sankuchail High School',
    result: 'GPA: 4.39/5',
    passingYear: '2016',
  },
  
];
