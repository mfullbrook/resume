export type Header = {
  name: string
  title: string
  shortTitle: string
  avatarPath: string
  summary: string
  emailBase64: string
  githubHandle: string
  linkedinHandle: string
  location: string
}

export type Profile = { heading: string; content: string }[]

export type Experience = {
  title: string
  company?: string
  overview?: string
  location?: string
  dates?: string
  skills?: string[]
  achievements?: (string | { item: string; subitems: string[] })[]
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

export const header: Header = {
  name: 'Mark Fullbrook',
  title: 'Generative AI Engineering Leader',
  shortTitle: 'Gen AI Eng. Leader',
  avatarPath: '/images/profile-selfie-london2.jpeg',
  summary: 'A Generative AI Engineering Leader with 20 years of diverse software experience, I lead by example, balancing a people-first mindset with hands-on delivery. My portfolio includes challenging projects in highly regulated environments, reflecting my commitment to code craft, technical curiosity, and the creation of scalable, innovative AI solutions that engage both users and stakeholders.',
  emailBase64: 'bWFya0BmdWxsYnJvb2subWU=',
  githubHandle: 'mfullbrook',
  linkedinHandle: 'markcfullbrook',
  location: 'London, UK',
}

export const profile: Profile = [
  {
    heading: 'AI Advocate',
    content: 'A passionate advocate for leveraging AI as a core element of business strategy. Proven track record of delivering cutting-edge AI solutions - led projects at Citibank that have transformed workflows. Now leading a portfolio of AI enabled solutions across diverse business lines.'
  },
  { 
    heading: 'Architectural Excellence',
    content: 'As a seasoned software architect, I’ve designed and delivered complex systems—from bespoke ERP solutions, e-commerce, mobile apps, and now generative AI products. I excel at evaluating technologies to make informed choices that align with product and business goals.'
  },
  {
    heading: 'Hands-On Full Stack Technologist',
    content: 'A hands-on engineering leader with deep technical expertise across the stack, from fine-tuning Helm charts to crafting pixel-perfect user interfaces with CSS. Adept in multiple programming languages, bringing a polyglot mindset to solving complex technical challenges.',
  },
  {
    heading: 'Empathetic People Leader',
    content: 'Over a decade of leadership experience, building high-performing teams with clear vision, strong communication, and a culture of trust. Focused on creating environments where engineers excel and teams deliver outstanding results, including managing a 20+ person Generative AI team at Citibank.',
  },
  {
    heading: 'Innovation Catalyst',
    content: 'Proven ability to drive innovation and challenge the status quo, with over three years leading transformative projects in a Tier 1 bank. Spearheaded initiatives that delivered business impact by harnessing modern technologies and creating a culture of experimentation.'
  }
]

export const experiences: Experience[] = [
  {
    title: 'Generative AI Engineering Manager',
    company: 'Citi Innovation Labs',
    location: 'London',
    dates: 'Jan 2024 - Present',
    skills: ['Python', 'Postgres', 'LlamaIndex', 'Next.js', 'React', 'TypeScript', 'MongoDB', 'Kubernetes', 'Helm'],
    achievements: [
      'Leading multi-discipline teams globally for the Innovation Labs, delivering cutting-edge Generative AI solutions. Scaled the team from myself to a team of over twenty within a year.',
      'Delivered to production one of Citi\'s first Generative AI products, enabling the drafting of structured documents, leveraging RAG from structured and unstructured data.',
      'Designed and architected a multi-tenanted producted that is designed for scale, re-use and flexibility.',
      'Accountable for a variety of uses cases for different business verticals; leveraging Generative AI to solve content creation, entity classification, data extraction, and quality assessment problems.',
    ],
  },
  {
    title: 'SVP Engineering Lead',
    company: 'Citi Innovation Labs',
    location: 'London',
    dates: 'Apr 2021 - Dec 2023',
    skills: ['Kotlin', 'Camunda', 'gRPC', 'Oracle', 'RabbitMQ', 'Kubernetes', 'Nest.js', 'Typescript', 'React', 'Ant Design'],
    achievements: [
      {
        item: 'Led a global development team of 12 developers to build, from inception to production, an AI enabled data remediation workflow platform. The software enabled the remediation of thousands of agreements and was vital in a closing a consent order deliverable.', 
        subitems: [
          'Architected and implement a platform that can execute any BPMN defined workflow, using a combination of Camunda, gRPC, and RabbitMQ.',
          'Enterprise level microservices built with Kotlin, Ktor and Spring Boot deployed to OpenShift (Kubernetes).'
        ]
      },
      'Promoted from VP to SVP in January 2023',
    ],
  },
  {
    title: 'Director - Technology and Finance',
    company: 'Universal Packing Specialists',
    location: 'London',
    dates: 'Apr 2016 - Mar 2021',
    skills: ['React Native', 'Laravel', 'Vue.js', 'TypeScript', 'PHP', 'AWS Lambda', 'S3', 'CloudFront', 'Docker', 'CircleCI'],
    overview:
      'Led technology transformation and managed finance, legal, and HR at a family-owned export packing and crate manufacturing company with 65 employees. Modernized operations by developing and implementing enterprise systems and tools to optimize workflows and improve decision-making.',
    achievements: [
      'Designed and implemented an enterprise system to streamline processes, provide real-time operational insights, and reduce reliance on manual systems.',
      'Built shop-floor data capture terminals with real-time updates for operations, improving efficiency.',
      'Developed a modular, domain-driven backend application using advanced patterns like event sourcing to provide detailed history of operational events. Bespoke application UI built with Vue.js and Quasar.',
      'Created an offline-first, cross-platform React Native app to capture freight photos, with S3 storage, and on-demand image processing using AWS Lambda, and customer sharing via CloudFront.',
    ],
  },
  {
    title: 'Head of R&D',
    company: 'BloombergNEF',
    location: 'London',
    dates: 'Oct 2014 - Mar 2016',
    skills: ['Swift', 'PHP', 'Angular', 'Scrum', 'Lean Methodology'],
    achievements: [
      'Early adopter of agile product development, becoming London R&D’s standard bearing team for agile.',
      'Managed the development of native Android and iOS apps by partnering with an external team for rapid delivery while building internal mobile development capabilities.',
      'Fostered collaboration between my team and other Bloomberg industry verticals R&D teams, leading to pilots and product advancements through shared innovation and technology.',
      'Secured a net increase of five headcount through effective business planning and board presentations, recruiting high-caliber, diverse engineers at both senior and trainee levels.',
    ],
  },
  {
    title: 'Senior Software Engineer',
    company: 'BloombergNEF',
    location: 'London',
    dates: 'Aug 2012 - Oct 2014',
    skills: ['PHP', 'Symfony', 'MySQL', 'JavaScript', 'Angular', 'Cordova', 'Jenkins'],
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
    location: 'South Yorkshire',
    dates: '2008 - 2010',
    skills: ['PHP', 'Symfony', 'jQuery', 'JavaScript', 'HTML', 'CSS'],
    achievements: [
      'Developed a nationwide marketplace website for matching facing brick stockists to customers. Key features: e-commerce, HGV delivery pricing and SEO. Back office application: basic CRM and order fulfilment.',
    ],
  },
  {
    title: 'Career Notes',
    location: 'UK',
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
    headline: 'I want to work for a company...',
    content:
      'that has challenging problems to solve with Generative AI; has an appetite to keep up with the pace of innovation and embraces new technologies. AI is advancing so rapidly, there are so many new tools which are changing the way we work, if we are permitted to safely use them.  Promotes a healthy work-life balance and has a strong culture that I can connect with and be proud to work for.',
  },
  {
    headline: "I'm interested in roles...",
    content:
      'that are leadership roles with a strong focus on Generative AI. I\'ve always enjoyed my work in technology, and feel privileged to be working with the hottest technology.  I want to keep doing the same, leading teams at this exciting time for our industry.',
  },
  {
    headline: 'Outside of work I...',
    content:
      'prioritise spending time with my family - supporting my kids at their sports, enjoying a home cooked meal and a good movie; I\'m a huge F1 fan; for fitness I\'m in the forest on my mountain bike.  My wife and I have a shared love of travel - we always have at least one big adventure planned!',
  },
  {
    headline: "I'm currently building...",
    content:
      'an agentic executive assistant using LangGraph, accessible via a ReactNative app.   I\'m always learning and building something when I can grab some spare time on the commute or in the evenings.',
  },
]
