export type Stat = {
  label: string;
  value: string;
};

export type SocialLink = {
  label: string;
  href: string;
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



