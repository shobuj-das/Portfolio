export type SocialLink = {
  label: string;
  href: string;
};

export const profile = {
  name: 'Shobuj Chandra Das',
  role: 'Jr. Test Automation Engineer',
  tagline:
    'Engineering high-quality software through scalable test automation, API validation, and CI/CD integration while leveraging AI-driven testing to enhance coverage, detect defects intelligently, and accelerate reliable releases.',
  location: 'Dhaka, Bangladesh',
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/shobuj-das' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shobuj-das/' },
  ] satisfies SocialLink[],
  email: 'dasshobuj@gmail.com',
  phone: '+8801571416153',
  whatsappUrl: 'https://wa.me/8801571416153',
  resumeUrl: '/resume.pdf',
};
