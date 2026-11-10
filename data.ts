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
  link?: { href: string; label: string }
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

export type TechnicalGroup = {
  title: string
  skills: string[]
}

export type OpenSourceProject = {
  name: string
  repo?: string
  href?: string
  description: string
}

export const header: Header = {
  name: 'Mark Fullbrook',
  title: 'Principal Software Engineer',
  shortTitle: 'Principal Software Engineer',
  avatarPath: '/images/profile-selfie-london2.jpeg',
  summary:
    'Principal software engineer with over 20 years’ experience building and running software. At Citi, I lead the architecture and delivery of an AI platform for Markets, working directly with business teams and taking systems through production and governance reviews. Independently, I built and operate RobinHQ, an AI phone-answering service for small businesses, including its agents, evaluations, telephony and billing. My work combines software design and implementation with understanding how customers work, supporting production systems and developing engineers.',
  emailBase64: 'bWFya0BmdWxsYnJvb2subWU=',
  githubHandle: 'mfullbrook',
  linkedinHandle: 'markcfullbrook',
  location: 'London, UK',
}

export const profile: Profile = [
  {
    heading: 'Shipped three Gen AI solutions to production at Citi',
    content:
      'A document platform in daily use by 2,000 underwriters producing more than 600 documents a month, an extraction pipeline that cut client onboarding time by a third, and a conversational platform now rolling out to 1,500 users.',
  },
  {
    heading: 'Built and operate RobinHQ',
    content:
      'An AI phone-answering service for UK small businesses. I built the agents, customer portal, telephony, behavioural evaluations and billing, and manage its operating costs.',
  },
  {
    heading: 'Production troubleshooting and performance',
    content:
      'Used performance testing to assess a proposed platform rewrite, showing the existing architecture could scale with approximately 30% lower projected infrastructure costs. Diagnosed a production worker stall across application code, the worker library and LlamaIndex.',
  },
  {
    heading: 'Personal projects and open-source tools',
    content:
      'Build productivity tools alongside my main role, including claude-rc, porthole, gaffer and pennywise.',
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
      'Agent orchestration',
      'Evals',
      'Python',
      'TypeScript',
      'React',
      'Data platforms',
      'Kubernetes',
      'Observability',
    ],
    overview:
      "Leading the architecture and engineering delivery of an enterprise Generative AI platform that brings governed data, tools and AI-assisted workflows into the daily work of Citi's Markets teams.",
    achievements: [
      'Write and review platform code, design services and investigate production issues.',
      'Lead the technical direction and delivery of a multidisciplinary team building an agentic AI platform across multiple Markets businesses, now rolling out to 1,500 users.',
      'Designed a modular architecture combining a shared conversational platform with specialist agents, tools and services, allowing new business capabilities to be added incrementally.',
      'Work directly with Markets desks and business teams to understand their workflows and the problems they need to solve, then agree the scope and technical approach.',
      'Led the development of user experiences across Microsoft Teams and the web, supported by shared conversation, orchestration and integration services.',
      'Shaped the data architecture for ingesting, standardising and retrieving Markets information.',
      'Embedded entitlements, auditability, human oversight and production controls into the platform, working within model-risk, cybersecurity and regulatory governance requirements.',
    ],
  },
  {
    title: 'Founder & Principal Engineer',
    company: 'RobinHQ',
    link: { href: 'https://robinhq.co', label: 'robinhq.co' },
    location: 'London',
    dates: 'Sep 2025 - Present',
    skills: ['Python', 'Laravel', 'React', 'AWS', 'Voice AI', 'Behavioural evaluations', 'LiveKit'],
    overview:
      'An AI phone-answering service for UK small businesses. I designed, built and operate the service, from the voice agents and their evaluations to the customer portal, telephony and billing.',
    achievements: [
      'Ran customer discovery with UK small businesses and made the product, pricing and operating-cost decisions.',
      'Built voice agents with knowledge base search, message taking, urgency and spam detection, and calendar integration. Agent prompts are generated from version-controlled configuration managed through the customer portal.',
      'Built a behavioural evaluation suite using production prompts and tool schemas. Scenarios combine tool-call assertions with LLM-as-judge checks for escalation, boundaries, AI disclosure and prompt injection, and run against Gemini or OpenAI on every prompt change.',
      'Integrated inbound and outbound telephony, call transfers, recording and transcripts. Replaced a custom Twilio and WebSocket voice bridge with LiveKit Agents to simplify the architecture and reduce the number of services to operate.',
      'Built the customer portal and billing in Laravel, React, Postgres and Redis, including multi-tenancy, plans, metered usage, invoicing and payment integrations.',
      'Published an open-source PHP SDK for LiveKit, generated from protobuf definitions through a custom Twirp plugin.',
    ],
  },
  {
    title: 'Technical Consultant',
    company: 'QuietStar',
    dates: 'Jun 2026 - Present',
    skills: ['Technical discovery', 'Systems integration', 'SharePoint', 'RAG & GraphRAG'],
    achievements: [
      'Worked with the consultancy to understand its project management, CRM and delivery workflows. The discovery work identified gaps in the data needed for AI automation, so the engagement began with the operational systems that would supply it.',
      'Designed and built their delivery pipeline and project management board, tightly integrated with their SharePoint site for document management. Live and in daily use.',
      'Now building the next phase, a RAG and GraphRAG knowledge base over historical projects and proposals, to generate quotes and proposal documentation faster.',
    ],
  },
  {
    title: 'Generative AI Engineering Manager',
    company: 'Citi Innovation Labs',
    location: 'London',
    dates: 'Jan 2024 - Aug 2025',
    skills: [
      'Generative AI',
      'Retrieval (RAG)',
      'Evals',
      'Python',
      'LlamaIndex',
      'TypeScript',
      'React',
      'Kubernetes',
    ],
    achievements: [
      'Tested the existing platform against its scaling requirements to assess a proposed rewrite. Demonstrated that it could meet those requirements with approximately 30% lower projected infrastructure costs.',
      'Diagnosed a production stall affecting OCR, embedding and document generation by reproducing production conditions and tracing async handling issues across application code, the worker library and LlamaIndex. Reworked execution to use synchronous code with concurrency across threads.',
      "Delivered one of Citi's earliest production Generative AI products, supporting the controlled drafting of structured documents using retrieval across structured and unstructured information. It is in daily use by 2,000 underwriters producing more than 600 documents a month.",
      'Delivered a Generative AI data-extraction pipeline that reduced client onboarding time by 33%.',
      'Designed a reusable, multi-tenant platform capable of supporting multiple business areas, use cases and delivery teams.',
      'Established shared evaluation, configuration, audit and moderation capabilities for teams using the platform.',
      'Built the team that delivered it, growing a global multidisciplinary Generative AI group from one engineer to more than 20 within a year.',
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
      'Ran discovery with operations, legal, product and senior technology stakeholders, turning complex regulatory requirements into practical software workflows.',
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
      'Board director of a 65-person export packing and manufacturing business, responsible for technology strategy alongside finance, legal, HR and operational improvement.',
    achievements: [
      'Replaced fragmented manual processes with an integrated operational platform across the business.',
      'Worked directly with finance, sales, factory, warehouse and logistics teams to redesign workflows and improve operational visibility.',
      'Introduced real-time shop-floor data capture, giving managers more accurate information about work in progress and operational performance.',
      'Built mobile and customer-facing capabilities that improved traceability, evidence capture and communication throughout the fulfilment process.',
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

export const openSource: OpenSourceProject[] = [
  {
    name: 'livekit-sdk',
    repo: 'mfullbrook/livekit-sdk',
    href: 'https://github.com/mfullbrook/livekit-sdk',
    description:
      'An open-source PHP SDK for LiveKit, generated from the protobuf definitions through a custom Twirp plugin. Covers rooms, egress, ingress, agent dispatch, SIP, webhooks and access tokens. Written because no first-party PHP SDK existed.',
  },
  {
    name: 'claude-rc',
    repo: 'mfullbrook/claude-rc',
    href: 'https://github.com/mfullbrook/claude-rc',
    description:
      "A daemon, CLI and web panel for launching and managing Claude Code remote-control sessions on always-on machines, driven from a phone over a tailnet. Rides Claude Code's own relay rather than re-inventing the channel. MIT licensed.",
  },
]

export const aboutMe: AboutMe[] = [
  {
    headline: 'How I work',
    content:
      'I start by understanding how people do their work, where they lose time and what makes a task difficult. That has meant working with Markets desks, consultancy teams, factory staff and small-business owners. I use working software and small releases to get feedback, then improve the system as people use it.',
  },
  {
    headline: "What I'm after",
    content:
      'A senior technical role where I can work directly with customers, design and build production systems, and help other engineers develop their craft and use AI effectively.',
  },
  {
    headline: 'Outside work',
    content:
      "Family comes first - supporting my kids at their sports, a home cooked meal and a good film. I'm a huge F1 fan, I keep fit on my Brompton into London and my mountain bike in the local forests, and my wife and I always have at least one big adventure planned.",
  },
]

export const technicalDepth: TechnicalGroup[] = [
  {
    title: 'Production AI systems',
    skills: [
      'Agentic architectures',
      'Tool and function calling',
      'Retrieval-augmented generation',
      'Behavioural evals',
      'LLM-as-judge',
      'Prompt and context engineering',
      'AI governance and model risk',
      'Entitlements and auditability',
      'Observability (OTel)',
    ],
  },
  {
    title: 'Customer and delivery engineering',
    skills: [
      'Technical discovery',
      'Architecture workshops',
      'Rapid prototyping',
      'SDK and API integration',
      'Production troubleshooting',
      'Developer experience',
    ],
  },
  {
    title: 'Platforms, languages and tooling',
    skills: [
      'Python',
      'TypeScript',
      'PHP and Laravel',
      'Kotlin',
      'React and Next.js',
      'FastAPI',
      'Platform architecture',
      'Multi-tenant systems',
      'API design',
      'Kubernetes and Docker',
      'AWS & GCP',
      'MCP servers',
    ],
  },
  {
    title: 'Realtime voice and telephony',
    skills: [
      'LiveKit Agents',
      'LiveKit SIP',
      'Agent dispatch',
      'PSTN telephony',
      'Warm and cold transfer',
      'Gemini Live',
      'OpenAI Realtime',
      'Turn detection and barge-in',
      'Call recording and egress',
    ],
  },
]
