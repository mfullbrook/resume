export type Profile = {
  name: string
  title: string
  avatarPath: string
  introduction: string
  emailBase64: string
  githubHandle: string
  linkedinHandle: string
  location: string
}

export type Overview = string[]

export type Experience = {
  title: string
  company?: string
  overview?: string
  location?: string
  dates?: string
  skills?: string[]
  achievements?: string[]
}

export type Education = {
  qualification: string
  institution: string
  dates: string
}

export type AboutMe = {
  headline: string
  content: string
}

export const profile: Profile = {
  name: 'Mark Fullbrook',
  title: 'Generative AI Engineering Manager',
  avatarPath: '/images/profile-selfie-london2.jpeg',
  introduction: 'blah',
  emailBase64: 'bWFya0BmdWxsYnJvb2subWU=',
  githubHandle: 'mfullbrook',
  linkedinHandle: 'markcfullbrook',
  location: 'London, UK',
}

export const overview: Overview = [
  'Led development of a microservices architecture serving 1M+ daily active users',
  'Managed and mentored a team of 5 software engineers, improving team velocity by 40%',
  'Implemented CI/CD pipelines reducing deployment time by 60%',
  'Contributed to open-source projects with 1000+ GitHub stars',
]

export const experiences = [
  {
    title: 'Generative AI Engineering Manager',
    company: 'Citi Innovation Labs',
    location: 'London',
    dates: '2024 - Present',
    skills: ['Todo', 'Todo', 'Todo', 'Todo', 'Todo'],
    achievements: [
      'Leading multi-discipline teams to design and develop Generative AI solutions to a variety of solutions for different lines of business.',
      'Delivered to production a multi-tenanted Generative AI product that enables the drafting of structured documents, leveraging RAG from structured and unstructured data.',
      'TODO',
    ],
  },
  {
    title: 'SVP Engineering Lead',
    company: 'Citi Innovation Labs',
    location: 'London',
    dates: '2021 - 2023',
    skills: ['Todo', 'Todo', 'Todo', 'Todo', 'Todo'],
    achievements: ['Promoted from VP to SVP in January 2023', 'TODO', 'TODO'],
  },
  {
    title: 'Director - Technology and Finance',
    company: 'Universal Packing Specialists',
    location: 'London',
    dates: 'Apr 2016 - Mar 2021',
    skills: ['Todo', 'Todo', 'Todo', 'Todo', 'Todo'],
    overview:
      'Joined the family business, a mature 65 employee export packing and crate manufacturing company, to lead the introduction of modern technology throughout the business. Universal Packing is the foremost producer of packing crates in London, operating 24/5 with 12-hour turnaround from order to delivery of bespoke crates. Responsibilities included finance, legal and HR with primary focus on technology and system development.',
    achievements: [
      'Architected and developed a new enterprise system to optimise processes throughout the business and negate the reliance on manual systems. New system exposes essential decision-making data and give accountability throughout the entire lifecycle of order to fulfilment and payment collection.',
      'Developed shop-floor data-capture terminals using web technologies for an ergonomic interface. State changes are presented real-time for operations team.',
      'Developed a monolithic server-side application, using a modular architecture and domain driven design to model business entities and concepts. Advanced patterns such as event sourcing were deployed throughout. Continuous integration through custom docker images and a bespoke packager to integrate the backend with frontend projects.',
      'Developed an offline-first, cross platform, React Native mobile app for taking photos of freight. Photos are stored in S3 and shared with customers using Lambda and Cloudfront.',
    ],
  },
  {
    title: 'Head of R&D',
    company: 'BloombergNEF',
    location: 'London',
    dates: 'Oct 2014 - Mar 2016',
    skills: ['Todo', 'Todo', 'Todo', 'Todo', 'Todo'],
    achievements: [
      'Fostered the early adoption of agile product development, becoming London R&D’s standard bearing team for agile.',
      'Spearheaded the creation of native Android and iOS apps. Selected and partnered with an external development company to rapidly build a first iteration whilst up-skilling existing team members to create a native mobile development capability within our team.',
      'Re-structured two teams into three for closer product and skills alignment, resulting in high developer satisfaction and increased product delivery.',
      'Championed greater collaboration between my team and other industry vertical R&D teams to foster innovation, technology and skill sharing. Resulting in numerous pilots and real product advances.',
      'Performed annual business planning, presented to Bloomberg LP board and awarded a net five increase in headcount; successfully recruited high-calibre, diverse, engineers both senior and trainee.',
    ],
  },
  {
    title: 'Senior Software Engineer',
    company: 'BloombergNEF',
    location: 'London',
    dates: 'Aug 2012 - Oct 2014',
    skills: ['Todo', 'Todo', 'Todo', 'Todo', 'Todo'],
    achievements: [
      'Developed MVP hybrid (Cordova) mobile application and supporting APIs for consuming digital rights managed content offline.',
      'Replaced legacy code with APIs to deliver content suitable for web and Bloomberg terminal.',
      'Mentored junior developers to achieve their full potential and deliver enterprise quality code.',
      'Contributed developer experience improvements to all web properties of BloombergNEF.',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'Brickhunter Ltd',
    achievements: [
      'Developed a nationwide marketplace website for matching facing brick stockists to customers. Key features: e-commerce, HGV delivery pricing and SEO. Back office application: basic CRM and order fulfilment.',
    ],
  },
  {
    title: 'Career Notes',
    location: 'Various, UK',
    achievements: [
      'Team Leader (2008)',
      'Senior Web Developer (2006 - 2007)',
      'Web App Developer (2004 - 2005)',
      'Network Technician (2003)',
    ],
  },
]

export const educations = [
  {
    qualification: 'BSc Computer Science (Hons)',
    institution: 'University of Nottingham',
    dates: '2003',
  },
]

export const aboutMe: AboutMe[] = [
  {
    headline: 'I want to work for a company that...',
    content:
      'Values innovation, promotes work-life balance, and encourages continuous learning. I thrive in environments that embrace new technologies and foster collaboration.',
  },
  {
    headline: "I'm interested in roles...",
    content:
      'Strong technical skills in full-stack development, including frontend and backend technologies. Proficient in JavaScript, TypeScript, React, Node.js, and related tools and frameworks. Experienced in building scalable and maintainable applications using modern web technologies.',
  },
  {
    headline: 'Outside of work I...',
    content:
      'Passionate about crafting user-centric, responsive, and high-performance web applications. Committed to staying current with industry trends and best practices. A team player with a proven track record of delivering innovative solutions.',
  },
  {
    headline: "I'm currently building...",
    content:
      'I enjoy playing video games, exploring new restaurants, and engaging in outdoor activities. I also love to learn new languages and try new cuisines.',
  },
]
