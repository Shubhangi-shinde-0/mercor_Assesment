import { Candidate } from '../types';

export const mockCandidates: Candidate[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    email: 'sarah.chen@email.com',
    role: 'Senior Frontend Engineer',
    experience: 'Senior',
    location: 'San Francisco',
    skills: ['React', 'TypeScript', 'Next.js', 'TailwindCSS', 'GraphQL'],
    score: 92,
    avatar: '',
    summary: 'Passionate frontend engineer with 6 years of experience building scalable web applications. Led frontend architecture at two successful startups.',
    previousCompanies: ['Stripe', 'Figma', 'Dropbox'],
    education: 'BS Computer Science, Stanford University',
    portfolio: 'https://sarahchen.dev',
    github: 'https://github.com/sarahchen',
    linkedin: 'https://linkedin.com/in/sarahchen',
    diversity: {
      gender: 'Female',
      ethnicity: 'Asian'
    },
    rating: 5
  },
  {
    id: '2',
    name: 'Marcus Johnson',
    email: 'marcus.johnson@email.com',
    role: 'Backend Engineer',
    experience: 'Mid',
    location: 'Remote',
    skills: ['Node.js', 'Python', 'AWS', 'PostgreSQL', 'Docker'],
    score: 88,
    avatar: '',
    summary: 'Full-stack developer with strong backend focus. Experience scaling systems to millions of users. Military veteran transitioning to tech.',
    previousCompanies: ['Uber', 'Airbnb'],
    education: 'BS Computer Engineering, Georgia Tech',
    github: 'https://github.com/marcusj',
    linkedin: 'https://linkedin.com/in/marcusjohnson',
    diversity: {
      gender: 'Male',
      ethnicity: 'Black',
      veteranStatus: true
    },
    rating: 4
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    email: 'elena.rodriguez@email.com',
    role: 'Product Designer',
    experience: 'Senior',
    location: 'New York',
    skills: ['Figma', 'Design Systems', 'Prototyping', 'User Research', 'Accessibility'],
    score: 95,
    avatar: '',
    summary: 'Award-winning product designer with expertise in creating inclusive, accessible user experiences. Led design at multiple B2B SaaS companies.',
    previousCompanies: ['Adobe', 'Spotify', 'Slack'],
    education: 'MFA Interaction Design, Parsons',
    portfolio: 'https://elenarod.design',
    linkedin: 'https://linkedin.com/in/elenarodriguez',
    diversity: {
      gender: 'Female',
      ethnicity: 'Hispanic'
    },
    rating: 5
  },
  {
    id: '4',
    name: 'David Kim',
    email: 'david.kim@email.com',
    role: 'DevOps Engineer',
    experience: 'Senior',
    location: 'Seattle',
    skills: ['Kubernetes', 'AWS', 'Terraform', 'Monitoring', 'Security'],
    score: 89,
    avatar: '',
    summary: 'DevOps specialist with deep expertise in cloud infrastructure and security. Built CI/CD pipelines serving 50M+ users.',
    previousCompanies: ['Microsoft', 'Amazon', 'Netflix'],
    education: 'MS Computer Science, University of Washington',
    github: 'https://github.com/davidkim',
    linkedin: 'https://linkedin.com/in/davidkim',
    diversity: {
      gender: 'Male',
      ethnicity: 'Asian'
    },
    rating: 4
  },
  {
    id: '5',
    name: 'Priya Patel',
    email: 'priya.patel@email.com',
    role: 'Data Scientist',
    experience: 'Mid',
    location: 'Austin',
    skills: ['Python', 'Machine Learning', 'SQL', 'TensorFlow', 'Statistics'],
    score: 91,
    avatar: '',
    summary: 'Data scientist with strong ML engineering background. Built recommendation systems and fraud detection models at scale.',
    previousCompanies: ['PayPal', 'Zillow', 'Tesla'],
    education: 'PhD Statistics, UT Austin',
    github: 'https://github.com/priyapatel',
    linkedin: 'https://linkedin.com/in/priyapatel',
    diversity: {
      gender: 'Female',
      ethnicity: 'South Asian'
    },
    rating: 5
  },
  {
    id: '6',
    name: 'Alex Thompson',
    email: 'alex.thompson@email.com',
    role: 'Full Stack Engineer',
    experience: 'Mid',
    location: 'Remote',
    skills: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Go'],
    score: 86,
    avatar: '',
    summary: 'Versatile full-stack engineer with startup experience. Strong problem-solving skills and passion for clean, maintainable code.',
    previousCompanies: ['GitHub', 'Shopify'],
    education: 'BS Software Engineering, UC Berkeley',
    github: 'https://github.com/alexthompson',
    linkedin: 'https://linkedin.com/in/alexthompson',
    diversity: {
      gender: 'Non-binary',
      ethnicity: 'White',
      neurodiversity: true
    },
    rating: 4
  },
  {
    id: '7',
    name: 'Jessica Williams',
    email: 'jessica.williams@email.com',
    role: 'Product Manager',
    experience: 'Senior',
    location: 'San Francisco',
    skills: ['Product Strategy', 'Analytics', 'A/B Testing', 'Roadmapping', 'Stakeholder Management'],
    score: 93,
    avatar: '',
    summary: 'Strategic product manager with track record of launching successful products. Expert in user research and data-driven decision making.',
    previousCompanies: ['Google', 'Palantir', 'Notion'],
    education: 'MBA, Wharton School',
    linkedin: 'https://linkedin.com/in/jessicawilliams',
    diversity: {
      gender: 'Female',
      ethnicity: 'Black'
    },
    rating: 5
  },
  {
    id: '8',
    name: 'Ahmed Hassan',
    email: 'ahmed.hassan@email.com',
    role: 'Mobile Engineer',
    experience: 'Mid',
    location: 'London',
    skills: ['React Native', 'Swift', 'Kotlin', 'Firebase', 'App Store Optimization'],
    score: 87,
    avatar: '',
    summary: 'Mobile engineer with expertise in cross-platform development. Built apps with millions of downloads and excellent user ratings.',
    previousCompanies: ['Meta', 'Snapchat', 'Discord'],
    education: 'BS Computer Science, Imperial College London',
    github: 'https://github.com/ahmedhassan',
    linkedin: 'https://linkedin.com/in/ahmedhassan',
    diversity: {
      gender: 'Male',
      ethnicity: 'Middle Eastern'
    },
    rating: 4
  },
  {
    id: '9',
    name: 'Rachel Green',
    email: 'rachel.green@email.com',
    role: 'Marketing Manager',
    experience: 'Mid',
    location: 'Austin',
    skills: ['Growth Marketing', 'SEO', 'Content Strategy', 'Analytics', 'Brand Development'],
    score: 84,
    avatar: '',
    summary: 'Growth-focused marketer with experience scaling startups from Series A to IPO. Expert in performance marketing and brand building.',
    previousCompanies: ['HubSpot', 'Mailchimp', 'Buffer'],
    education: 'BA Marketing, University of Texas',
    linkedin: 'https://linkedin.com/in/rachelgreen',
    diversity: {
      gender: 'Female',
      ethnicity: 'White'
    },
    rating: 4
  },
  {
    id: '10',
    name: 'Carlos Mendez',
    email: 'carlos.mendez@email.com',
    role: 'Security Engineer',
    experience: 'Senior',
    location: 'Remote',
    skills: ['Cybersecurity', 'Penetration Testing', 'Compliance', 'Risk Assessment', 'Incident Response'],
    score: 90,
    avatar: '',
    summary: 'Cybersecurity expert with experience protecting high-value systems. Specializes in building secure, compliant infrastructure for fintech.',
    previousCompanies: ['Coinbase', 'Square', 'Robinhood'],
    education: 'MS Cybersecurity, Carnegie Mellon',
    github: 'https://github.com/carlosmendez',
    linkedin: 'https://linkedin.com/in/carlosmendez',
    diversity: {
      gender: 'Male',
      ethnicity: 'Hispanic'
    },
    rating: 5
  },
  {
    id: '11',
    name: 'Lisa Chang',
    email: 'lisa.chang@email.com',
    role: 'UX Researcher',
    experience: 'Mid',
    location: 'Boston',
    skills: ['User Research', 'Usability Testing', 'Data Analysis', 'Survey Design', 'Behavioral Psychology'],
    score: 88,
    avatar: '',
    summary: 'UX researcher with psychology background. Expert in qualitative and quantitative research methods, driving product decisions with user insights.',
    previousCompanies: ['Zoom', 'Atlassian', 'Workday'],
    education: 'PhD Psychology, Harvard University',
    linkedin: 'https://linkedin.com/in/lisachang',
    diversity: {
      gender: 'Female',
      ethnicity: 'Asian',
      neurodiversity: true
    },
    rating: 4
  },
  {
    id: '12',
    name: 'James O\'Connor',
    email: 'james.oconnor@email.com',
    role: 'Sales Engineer',
    experience: 'Senior',
    location: 'New York',
    skills: ['Technical Sales', 'Solution Architecture', 'Customer Success', 'SaaS', 'Enterprise Sales'],
    score: 85,
    avatar: '',
    summary: 'Technical sales professional with engineering background. Consistently exceeds quotas and builds strong customer relationships.',
    previousCompanies: ['Salesforce', 'MongoDB', 'Databricks'],
    education: 'BS Mechanical Engineering, MIT',
    linkedin: 'https://linkedin.com/in/jamesoconnor',
    diversity: {
      gender: 'Male',
      ethnicity: 'White'
    },
    rating: 4
  }
];