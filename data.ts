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
  title: 'Technology & AI Engineering Leader',
  shortTitle: 'Technology & AI Leader',
  avatarPath: '/images/profile-selfie-london2.jpeg',
  summary:
    "Hands-on technology leader with more than 20 years' experience building software products, modernising platforms and leading high-performing engineering teams. At Citi, I scaled a global Generative AI engineering function from one to more than 20 people and led regulated AI products from concept into production. Previously, as a director of a 65-person manufacturing and export business, I led technology transformation alongside responsibilities spanning finance, operations, people and governance. I combine strategic and commercial judgement with the technical depth to remain close to architecture and delivery.",
  emailBase64: 'bWFya0BmdWxsYnJvb2subWU=',
  githubHandle: 'mfullbrook',
  linkedinHandle: 'markcfullbrook',
  location: 'London, UK',
}

export const profile: Profile = [
  {
    heading: 'Built and scaled an AI engineering capability',
    content:
      'Grew a global Generative AI engineering team from one to more than 20 people within a year, spanning engineering, product and delivery disciplines.',
  },
  {
    heading: 'Delivered regulated AI into production',
    content:
      "Led one of Citi's earliest production Generative AI platforms, combining structured and unstructured information to support controlled, auditable business workflows.",
  },
  {
    heading: 'Created reusable platforms',
    content:
      'Designed multi-tenant systems and shared capabilities that could support multiple business areas without duplicating architecture and delivery effort.',
  },
  {
    heading: 'Led business-wide transformation',
    content:
      'As a director of a 65-person manufacturing and export company, combined technology leadership with responsibility across finance, HR, legal and day-to-day operations.',
  },
  {
    heading: 'Remain technically hands-on',
    content:
      'Continue to work directly with architecture, code and delivery teams while setting direction, developing people and communicating technology decisions to senior stakeholders.',
  },
]

export const experiences: Experience[] = [
  {
    title: 'Principal Generative AI Software Engineer',
    company: 'Citi Markets Technology',
    location: 'London',
    dates: 'Sep 2025 - Present',
    skills: [
      'Generative AI',
      'Agentic systems',
      'Python',
      'React',
      'TypeScript',
      'APIs',
      'Data platforms',
      'Kubernetes',
    ],
    overview:
      "Leading the architecture and engineering delivery of an enterprise Generative AI platform that brings governed data, tools and AI-assisted workflows into the daily work of Citi's Markets teams.",
    achievements: [
      'Lead the technical direction and delivery of a multidisciplinary team building an agentic AI platform across multiple Markets businesses.',
      'Designed a modular architecture combining a shared conversational platform with specialist agents, tools and services, allowing new business capabilities to be added incrementally.',
      'Led the development of user experiences across Microsoft Teams and the web, supported by shared conversation, orchestration and integration services.',
      'Shaped the data architecture required to ingest, standardise and retrieve large volumes of Markets information reliably and efficiently.',
      'Embedded entitlements, auditability, human oversight and production controls into the platform, working within model-risk, cybersecurity and regulatory governance requirements.',
      'Work closely with Markets stakeholders, product leaders and senior technology management to translate business ambitions into a practical roadmap and engineering priorities.',
      'Remain hands-on across architecture, implementation and problem-solving while providing leadership across engineering disciplines and organisational boundaries.',
    ],
  },
  {
    title: 'Generative AI Engineering Manager',
    company: 'Citi Innovation Labs',
    location: 'London',
    dates: 'Jan 2024 - Aug 2025',
    skills: ['Generative AI', 'Retrieval (RAG)', 'Python', 'TypeScript', 'React', 'Kubernetes'],
    achievements: [
      'Built and led a global, multidisciplinary Generative AI team, scaling from one engineer to more than 20 within a year.',
      "Delivered one of Citi's earliest production Generative AI products, supporting the controlled drafting of structured documents using retrieval across structured and unstructured information.",
      'Designed a reusable, multi-tenant platform capable of supporting multiple business areas, use cases and delivery teams.',
      'Established shared configuration, evaluation, audit and moderation capabilities to improve quality, governance and operational confidence.',
      'Challenged a proposed platform rewrite through practical performance testing, demonstrating that the existing architecture could scale while reducing projected infrastructure costs by approximately 30%.',
      'Partnered with business, product and governance stakeholders to move AI initiatives beyond prototypes and into supported production services.',
    ],
  },
  {
    title: 'SVP Engineering Lead',
    company: 'Citi Innovation Labs',
    location: 'London',
    dates: 'Apr 2021 - Dec 2023',
    skills: ['Kotlin', 'Camunda', 'gRPC', 'RabbitMQ', 'Kubernetes', 'TypeScript', 'React'],
    achievements: [
      'Led a global team of 12 engineers to design and deliver an AI-enabled data remediation platform from inception through production.',
      'Supported the remediation of thousands of legal agreements as part of a major regulatory programme.',
      'Created a reusable workflow platform combining business process orchestration, event-driven services and controlled human decision points.',
      'Worked with operations, legal, product and senior technology stakeholders to turn complex regulatory requirements into practical software workflows.',
      'Established modern engineering practices across automated testing, containerised deployment, production support and incremental delivery.',
      'Promoted from VP to SVP in January 2023.',
    ],
  },
  {
    title: 'Director - Technology and Finance',
    company: 'Universal Packing Specialists',
    location: 'London',
    dates: 'Apr 2016 - Mar 2021',
    skills: ['Technology strategy', 'Operational change', 'TypeScript', 'PHP', 'AWS'],
    overview:
      "Board director of a 65-person export packing and manufacturing business, with responsibilities spanning technology strategy, finance, legal, HR and operational improvement. Combined leadership accountability with hands-on transformation of the company's systems and working practices.",
    achievements: [
      'Developed and executed a company-wide technology modernisation strategy, replacing fragmented manual processes with an integrated operational platform.',
      'Worked directly with finance, sales, factory, warehouse and logistics teams to redesign workflows and improve operational visibility.',
      'Introduced real-time shop-floor data capture, giving managers more accurate information about work in progress and operational performance.',
      'Built mobile and customer-facing capabilities that improved traceability, evidence capture and communication throughout the fulfilment process.',
      'Managed organisational change around new systems, ensuring technology was adopted by operational teams rather than merely delivered to them.',
      'Balanced investment, operational priorities and technical ambition within the commercial constraints of a privately owned business.',
    ],
  },
  {
    title: 'Head of R&D',
    company: 'BloombergNEF',
    location: 'London',
    dates: 'Oct 2014 - Mar 2016',
    skills: ['Product leadership', 'Agile delivery', 'Mobile', 'Hiring'],
    achievements: [
      "Established a product-led, iterative delivery model that became a reference point for agile delivery across Bloomberg's London R&D organisation.",
      'Managed the development of native Android and iOS apps by partnering with an external team for rapid delivery while building internal mobile development capability.',
      'Fostered collaboration between my team and other Bloomberg industry verticals, leading to pilots and product advancements through shared innovation and technology.',
      'Secured a net increase of five headcount through effective business planning and senior presentations, recruiting high-calibre, diverse engineers at both senior and trainee levels.',
    ],
  },
  {
    title: 'Senior Software Engineer',
    company: 'BloombergNEF',
    location: 'London',
    dates: 'Aug 2012 - Oct 2014',
    achievements: [
      'Delivered the MVP mobile application and supporting APIs for offline access to digital rights managed research content.',
      'Replaced legacy code with APIs serving both web and the Bloomberg terminal, and mentored junior engineers as the team grew.',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'Brickhunter Ltd',
    location: 'South Yorkshire',
    dates: '2008 - 2010',
    achievements: [
      'Built a nationwide marketplace matching brick stockists to customers, covering e-commerce, HGV delivery pricing, SEO and a back-office order fulfilment application.',
    ],
  },
  {
    title: 'Earlier career',
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
    headline: 'How I lead',
    content:
      'I set clear direction, establish strong ownership and push decisions towards the people closest to the work. I favour short feedback loops, incremental delivery and learning from production over large, high-risk programmes. I remain technically engaged enough to challenge architecture and unblock teams, without making myself the bottleneck.',
  },
  {
    headline: 'Outside work',
    content:
      "Family comes first - supporting my kids at their sports, a home cooked meal and a good film. I'm a huge F1 fan, and I keep fit on my mountain bike in the forest. My wife and I share a love of travel, and we always have at least one big adventure planned.",
  },
  {
    headline: 'Outside my primary role',
    content:
      'I continue to build and operate independent software projects. This keeps me close to modern development practices and gives me first-hand experience of product decisions, infrastructure, operating costs and turning an idea into a usable service.',
  },
]

export const technicalDepth: string[] = [
  'Generative AI and LLM systems',
  'Retrieval and agentic workflows',
  'Python',
  'TypeScript',
  'Kotlin',
  'API and event-driven architecture',
  'Kubernetes and cloud platforms',
  'Data platforms',
  'Continuous delivery',
  'Production observability',
]
