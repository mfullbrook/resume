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
  title: 'Principal AI Engineer',
  shortTitle: 'Principal AI Engineer',
  avatarPath: '/images/profile-selfie-london2.jpeg',
  summary:
    'Principal engineer, twenty-plus years building software, still writing it. At Citi I lead the architecture and delivery of an agentic AI platform for Markets, taking governed data, tools and AI-assisted workflows through model risk, cyber and regulatory review into daily production use. Independently I designed, built and operate RobinHQ, a multi-tenant realtime voice AI platform on LiveKit Agents and SIP telephony - agents, evals, telephony, billing and per-call economics, all of it mine. I work best where the problem is still ambiguous: sitting with the people who have it, cutting a working version fast, hardening it into something reliable, then turning what I learned into tooling other engineers can use.',
  emailBase64: 'bWFya0BmdWxsYnJvb2subWU=',
  githubHandle: 'mfullbrook',
  linkedinHandle: 'markcfullbrook',
  location: 'London, UK',
}

export const profile: Profile = [
  {
    heading: 'Ship production AI, not prototypes',
    content:
      'A document platform in daily use by 2,000 underwriters producing more than 600 documents a month, an extraction pipeline that cut client onboarding time by a third, and a conversational platform now rolling out to 1,500 users.',
  },
  {
    heading: 'Realtime voice AI, end to end',
    content:
      'Designed, built and operate a multi-tenant voice platform on LiveKit Agents and SIP telephony, covering agent dispatch, warm and cold transfer, recording, behavioural evals and per-call cost.',
  },
  {
    heading: "Say when it isn't an AI problem",
    content:
      'Engaged to deliver AI automation for a consultancy, discovery showed the blocker was upstream data. I said so, rescoped, and built the pipeline and project management system they actually needed. It is live and in daily use.',
  },
  {
    heading: 'Evidence over assumption',
    content:
      'Challenged a proposed platform rewrite with practical performance testing, showing the existing architecture would scale and cutting projected infrastructure costs by approximately 30%. Reproduced and root-caused a worker stall that ran through our own code, the worker library and LlamaIndex.',
  },
  {
    heading: 'Build for other engineers',
    content:
      'Published the PHP SDK for LiveKit that did not exist and a control plane for Claude Code, alongside reusable multi-tenant platforms serving several business lines.',
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
      'Hands-on across architecture, implementation and production troubleshooting - I write and review the code in the platform I am accountable for.',
      'Lead the technical direction and delivery of a multidisciplinary team building an agentic AI platform across multiple Markets businesses, now rolling out to 1,500 users.',
      'Designed a modular architecture combining a shared conversational platform with specialist agents, tools and services, allowing new business capabilities to be added incrementally.',
      'Work directly with Markets desks and business teams to find where AI genuinely helps, turn vague asks into scoped technical proposals, and say no where a problem is not ready for it.',
      'Led the development of user experiences across Microsoft Teams and the web, supported by shared conversation, orchestration and integration services.',
      'Shaped the data architecture required to ingest, standardise and retrieve large volumes of Markets information reliably and efficiently.',
      'Embedded entitlements, auditability, human oversight and production controls into the platform, working within model-risk, cybersecurity and regulatory governance requirements.',
    ],
  },
  {
    title: 'Founder & Principal Engineer',
    company: 'RobinHQ',
    link: { href: 'https://robinhq.co', label: 'robinhq.co' },
    location: 'London',
    dates: 'Sep 2025 - Present',
    skills: [
      'LiveKit Agents',
      'LiveKit SIP',
      'Realtime voice',
      'Evals',
      'Python',
      'Laravel',
      'React',
      'AWS',
    ],
    overview:
      'A multi-tenant AI phone-answering service for UK small businesses, designed, built, deployed and operated single-handed. In its first year I built a custom realtime voice bridge, ran it in production, concluded it was the wrong long-term architecture and replaced it with LiveKit Agents, then added a behavioural eval suite and a metered SaaS platform around it.',
    achievements: [
      'Realtime voice agents on LiveKit Agents (Python 3.12), with the realtime model selected per call from tenant configuration - Google Gemini Live by default, OpenAI Realtime supported - plus turn detection, background noise cancellation and agent dispatch.',
      'Inbound and outbound PSTN through LiveKit SIP, with warm and cold call transfer via the SIP transfer API, call lifecycle management, recording, transcripts and conversation history.',
      'Built a scenario-driven behavioural eval suite on the LiveKit Agents testing framework: YAML scenarios run against the real backend-rendered system prompt with production tool schemas and scriptable stubs, combining exact tool-call assertions with LLM-as-judge intent checks. Coverage spans escalation, boundaries, AI disclosure and prompt injection, and runs against either Gemini or OpenAI on every prompt change.',
      'Retired the original realtime bridge - Twilio Media Streams, a ReactPHP/Ratchet WebSocket service and a separate audio-conversion worker - in favour of LiveKit Agents, removing most of the moving parts and the operational surface that came with them.',
      'Published mfullbrook/livekit-sdk, an open-source PHP SDK for LiveKit generated from the protobuf definitions through a custom Twirp plugin, because no first-party PHP SDK existed.',
      'Built the SaaS around it in Laravel and PHP 8.4 with Filament, Inertia and React 19, Redis and Docker on AWS, covering multi-tenancy, plans, metered usage, invoicing and payment providers.',
      'Ran customer discovery with UK small businesses and made the pricing, positioning and unit-economics decisions.',
    ],
  },
  {
    title: 'Technical Consultant',
    company: 'QuietStar',
    dates: 'Jun 2026 - Present',
    skills: ['Technical discovery', 'Systems integration', 'SharePoint', 'RAG & GraphRAG'],
    achievements: [
      'Engaged to deliver AI automation. Discovery showed the blocker was upstream: without clean project management, CRM and pipeline data there was nothing for AI to work from. I said so, and rescoped the engagement around the real problem.',
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
      'Challenged a proposed platform rewrite through practical performance testing, demonstrating that the existing architecture could scale while reducing projected infrastructure costs by approximately 30%.',
      'Root-caused a production stall in the background workers running document OCR, embedding and RAG content generation. Built a close replication of production conditions and traced the fault to async handling in our own code, in the worker library and in LlamaIndex, then moved to synchronous code with concurrency across threads.',
      "Delivered one of Citi's earliest production Generative AI products, supporting the controlled drafting of structured documents using retrieval across structured and unstructured information. It is in daily use by 2,000 underwriters producing more than 600 documents a month.",
      'Delivered a Generative AI data-extraction pipeline that reduced client onboarding time by 33%.',
      'Designed a reusable, multi-tenant platform capable of supporting multiple business areas, use cases and delivery teams.',
      'Established shared evaluation, configuration, audit and moderation capabilities to improve quality, governance and operational confidence.',
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
      'Developed and executed a company-wide technology modernisation strategy, replacing fragmented manual processes with an integrated operational platform.',
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
      'I work best close to the problem and close to the people who have it. I would rather cut a working version quickly, put it in front of someone and find out what is wrong with it than write a longer specification. I set a high bar for engineering and delivery, and I would rather be shown I am wrong early than be agreed with politely. I favour small releases, short feedback loops and evidence from users and production over long programmes built on untested assumptions.',
  },
  {
    headline: "What I'm after",
    content:
      'Work where I stay close to the people using what I build, keep writing production code, and take on problems that are not fully specified yet. I am most useful in the gap between an ambiguous business problem and a system that actually runs.',
  },
  {
    headline: 'Outside work',
    content:
      "Family comes first - supporting my kids at their sports, a home cooked meal and a good film. I'm a huge F1 fan, I keep fit on my Brompton into London and my mountain bike in the local forests, and my wife and I always have at least one big adventure planned.",
  },
]

export const technicalDepth: TechnicalGroup[] = [
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
]
