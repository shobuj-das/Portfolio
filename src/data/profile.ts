export type SocialLink = {
  label: string;
  href: string;
};

export const profile = {
  name: 'Shobuj Chandra Das',
  role: 'Jr. Test Automation Engineer',
  tagline:
    'I build reliable, scalable quality pipelines that ship faster releases with measurable confidence.',
  location: 'Dhaka, Bangladesh',
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/shobuj-das' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shobuj-das/' },
    { label: 'Email', href: 'mailto:dasshobuj@gmail.com' },
  ] satisfies SocialLink[],
  phone: '+8801571416153',
  whatsappUrl: 'https://wa.me/8801571416153',
  resumeUrl: '/resume.pdf',
};
