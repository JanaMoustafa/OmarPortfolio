export const contact = {
  name: "Omar Elhfnawy",
  email: "omar.elhfnawy@outlook.com",
  phoneDisplay: "+20 106 626 8058",
  phoneHref: "tel:+201066268058",
  whatsapp: "https://wa.me/201066268058",
  linkedin: "https://www.linkedin.com/in/omar-elhfnawy-21774b376/",
  location: "Cairo, Egypt",
};

/** Ordered by priority: business first, then marketing and tech, then sales. */
export const practices = [
  {
    id: "business",
    title: "Business building",
    line: "Two agencies launched, one at 300K EGP in its first three weeks.",
  },
  {
    id: "marketing",
    title: "Marketing & AI",
    line: "Strategy, media buying and AI-assisted content that turns into revenue.",
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    line: "Reliable infrastructure and systems that scale.",
  },
  {
    id: "sales",
    title: "Sales & real estate",
    line: "Consultative selling, AI-assisted follow-up and high-value closings.",
  },
] as const;

export const facts = [
  { value: "300K EGP", label: "Uni Course revenue in its first 3 weeks" },
  { value: "2 agencies", label: "Founded: learning and marketing" },
  { value: "5 markets", label: "Property sales across Egypt" },
  { value: "AI", label: "Built into marketing and sales" },
];

export type Agency = {
  id: string;
  name: string;
  kind: string;
  role: string;
  launched: string;
  launchedIso: string;
  summary: string;
  model: string;
  points: { title: string; text: string }[];
};

export const agencies: Agency[] = [
  {
    id: "uni-course",
    name: "Uni Course",
    kind: "Learning agency",
    role: "Founder",
    launched: "1 May 2025",
    launchedIso: "2025-05-01",
    summary:
      "An education venture that gives university students structured, major-specific courses. We record university doctors and teaching assistants explaining academic topics and full courses, and students pay for access to those videos on our own platform.",
    model:
      "We built the whole strategy around a customised learning platform, backed by an operating structure that covers academic delivery, customer care, student follow-up and operations.",
    points: [
      { title: "Customised platform", text: "A dedicated learning platform built around paid student access to recorded courses." },
      { title: "Academic content", text: "Recorded lectures from university doctors and TAs, organised by major and course." },
      { title: "Student support", text: "Customer care and follow-up that keep students on track through the semester." },
      { title: "Operations", text: "Coordinating instructors, content delivery and the team behind it." },
    ],
  },
  {
    id: "lokaly",
    name: "Lokaly",
    kind: "Marketing agency",
    role: "Founder & CEO",
    launched: "1 March 2026",
    launchedIso: "2026-03-01",
    summary:
      "A growth-focused marketing agency helping businesses strengthen their market presence, reach the right audiences, and turn marketing into measurable business outcomes.",
    model:
      "We combine strategic planning, performance marketing, creative production and account management into one integrated service, shaped around each client's goals, with AI built into research, content and campaign workflows.",
    points: [
      { title: "Marketing strategy", text: "Market research, audience analysis, positioning, campaign planning and growth strategy." },
      { title: "Media buying", text: "Paid advertising, audience targeting, budget allocation and performance analysis." },
      { title: "Video production", text: "Video for digital platforms, ad campaigns and brand storytelling." },
      { title: "Creative & content", text: "Creative concepts and content that strengthen brand identity and engagement." },
      { title: "Account management", text: "Client relationships, deliverables and progress aligned with business goals." },
    ],
  },
];

export type CaseStudy = {
  id: "business" | "marketing" | "cloud" | "sales";
  practice: string;
  title: string;
  org: string;
  period: string;
  summary: string;
  role: string[];
  stack: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "business",
    practice: "Business building",
    title: "From raw idea to running business",
    org: "Uni Course · Lokaly · Enactus",
    period: "2025 – Present",
    summary:
      "I build businesses from the idea up: validating the market, defining the model and roadmap, building partnerships, and running operations until the numbers work.",
    role: [
      "Founded Uni Course and grew it to 300K EGP in revenue within its first three weeks.",
      "Founded Lokaly and defined its vision, service model and long-term roadmap.",
      "Identify market opportunities and validate ideas before committing to build.",
      "Build partnerships with businesses, instructors and strategic stakeholders.",
      "Led business development at Enactus, shaping growth strategies and sponsorships.",
    ],
    stack: ["Business models", "Strategy", "Market research", "Partnerships", "Operations"],
  },
  {
    id: "marketing",
    practice: "Marketing & AI",
    title: "Marketing that pays for itself",
    org: "Lokaly · August Real Estate",
    period: "2025 – Present",
    summary:
      "Growth-focused marketing tied to business outcomes, not vanity metrics. I use AI across research, content and creative so campaigns move faster and decisions are better informed.",
    role: [
      "Plan strategy, positioning and campaigns from audience and market research.",
      "Run media buying and performance marketing, from targeting to budget allocation.",
      "Lead video, creative and content production for brands and campaigns.",
      "Use AI for research, content creation, creative ideation and marketing workflows.",
      "Generate my own qualified real-estate leads through digital channels.",
    ],
    stack: ["Marketing strategy", "Media buying", "Performance marketing", "Video production", "AI workflows"],
  },
  {
    id: "cloud",
    practice: "Cloud & DevOps",
    title: "Cloud infrastructure, end to end",
    org: "IT Gate",
    period: "Aug 2025 – Dec 2025",
    summary:
      "A hands-on internship where I helped design, deploy and run scalable, secure cloud environments. It's also why I can build the technology behind my own businesses.",
    role: [
      "Supported the design and architecture of scalable, secure cloud infrastructure.",
      "Deployed and managed compute, storage and networking services.",
      "Implemented infrastructure automation and CI/CD concepts for DevOps workflows.",
      "Monitored systems for performance, reliability and availability.",
      "Troubleshot infrastructure, networking and system-level issues.",
    ],
    stack: ["AWS", "Azure", "Docker", "Kubernetes", "Linux", "CI/CD", "Terraform"],
  },
  {
    id: "sales",
    practice: "Sales & real estate",
    title: "Sales and business development",
    org: "August Real Estate",
    period: "Jan 2026 – Present",
    summary:
      "A commercially driven approach to sales and client relationships: consultative selling, careful qualification and consistent follow-up that moves opportunities through the pipeline.",
    role: [
      "Run consultative sales and client relationship management in CRM-based workflows.",
      "Qualify leads and manage the pipeline from first call to conversion.",
      "Handle negotiation and objections, repositioning clients toward better-fit opportunities.",
      "Use AI to support lead qualification, customer communication and follow-up.",
      "Coordinate with the sales team to close high-value transactions.",
    ],
    stack: ["Consultative selling", "CRM workflows", "Pipeline management", "Negotiation", "AI-assisted follow-up"],
  },
];

export const ai = {
  vision:
    "I believe the next generation of competitive businesses will be built around intelligent systems, streamlined operations and the effective use of technology.",
  areas: [
    { id: "marketing", title: "Marketing", text: "Research, content creation, creative ideation and marketing workflows." },
    { id: "sales", title: "Sales", text: "Lead qualification, customer communication and follow-up." },
    { id: "tech", title: "Technical work", text: "Research, scripting, troubleshooting and documentation." },
    { id: "ops", title: "Operations", text: "Finding repetitive business processes worth automating." },
  ],
};

export const journey = [
  {
    when: "May 2025",
    until: "Present",
    title: "Founder",
    org: "Uni Course",
    track: "Business",
    text: "Launched a learning agency with its own platform. 300K EGP in revenue within the first three weeks.",
  },
  {
    when: "Aug 2025",
    until: "Dec 2025",
    title: "Cloud Engineer Intern",
    org: "IT Gate",
    track: "Tech",
    text: "Cloud infrastructure, automation, CI/CD, monitoring and troubleshooting across AWS and Azure.",
  },
  {
    when: "Sep 2025",
    until: "Jan 2026",
    title: "Head of Business Development",
    org: "Enactus",
    track: "Business",
    text: "Researched partnership and sponsorship opportunities, shaped growth strategies and turned ideas into scalable, impactful projects.",
  },
  {
    when: "Jan 2026",
    until: "Present",
    title: "Property Consultant",
    org: "August Real Estate",
    track: "Sales",
    text: "Primary and resale sales across New Cairo, the New Administrative Capital, North Coast, Sheikh Zayed and Ain Sokhna.",
  },
  {
    when: "Mar 2026",
    until: "Present",
    title: "Founder & CEO",
    org: "Lokaly",
    track: "Marketing",
    text: "Launched a growth-focused marketing agency: strategy, media buying, video and creative production.",
  },
];

export const destinations = [
  { name: "New Cairo", note: "Established residential hub" },
  { name: "New Administrative Capital", note: "Government and business district" },
  { name: "North Coast", note: "Second homes and holiday investment" },
  { name: "Sheikh Zayed", note: "West Cairo family communities" },
  { name: "Ain Sokhna", note: "Red Sea resorts" },
];

export const salesCycle = [
  { step: "Prospect", text: "Cold calling, fresh lead generation and broker networks." },
  { step: "Qualify", text: "AI-assisted qualification to separate serious buyers early." },
  { step: "Consult", text: "Investment consultations built on the client's real goals." },
  { step: "Negotiate", text: "Handling objections and steering toward the better-fit unit." },
  { step: "Close & follow up", text: "Closing high-value deals and keeping the relationship going." },
];

export const skillGroups = [
  { name: "Business", items: ["Business development", "Business models", "Strategy", "Market research", "Partnerships", "Operations"] },
  { name: "Marketing", items: ["Marketing strategy", "Media buying", "Performance marketing", "Video production", "Creative & content", "Account management"] },
  { name: "AI & automation", items: ["AI-assisted research", "AI content creation", "AI sales follow-up", "Process automation", "Leveraging AI tools"] },
  { name: "Sales", items: ["Consultative selling", "CRM workflows", "Pipeline management", "Negotiation", "Objection handling", "Sales team coordination"] },
  { name: "Cloud & delivery", items: ["AWS", "Azure", "Docker", "Kubernetes", "Jenkins", "GitHub Actions"] },
  { name: "Infrastructure", items: ["Terraform", "CloudFormation", "Linux", "Windows Server", "Virtualization", "Networking"] },
  { name: "Code & data", items: ["Bash", "PowerShell", "Python", ".NET full-stack", "Databases", "Security"] },
  { name: "Leadership", items: ["Strategic thinking", "Decision making", "Communication", "Emotional intelligence", "Teamwork", "Adaptability"] },
];

export const marquee = [
  "Business development", "Uni Course", "Lokaly", "Media buying", "AI workflows", "Performance marketing",
  "Video production", "Consultative sales", "AWS", "Kubernetes", "Terraform", "Negotiation",
];
