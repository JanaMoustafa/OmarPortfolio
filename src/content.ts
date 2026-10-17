export const contact = {
  name: "Omar Elhfnawy",
  email: "omar.elhfnawy@gmail.com",
  phoneDisplay: "+20 106 626 8058",
  phoneHref: "tel:+201066268058",
  whatsapp: "https://wa.me/201066268058",
  linkedin: "https://www.linkedin.com/in/omar-elhfnawy-21774b376/",
  location: "Cairo, Egypt",
  cv: "/Omar_Elhfnawy_CV.pdf",
};

export const practices = [
  {
    id: "cloud",
    title: "Cloud & DevOps",
    line: "Reliable infrastructure and systems that scale.",
  },
  {
    id: "business",
    title: "Business building",
    line: "From idea to a company with a roadmap.",
  },
  {
    id: "marketing",
    title: "Marketing",
    line: "Brands, content and leads that turn into revenue.",
  },
  {
    id: "sales",
    title: "Sales & real estate",
    line: "Investment advice and high-value closings.",
  },
] as const;

export const facts = [
  { value: "IT Gate", label: "Cloud engineering internship" },
  { value: "Lokaly", label: "Founder & CEO" },
  { value: "5 markets", label: "Property sales across Egypt" },
  { value: "3.4 GPA", label: "Business Informatics, Helwan" },
];

export type CaseStudy = {
  id: string;
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
    id: "cloud",
    practice: "Cloud & DevOps",
    title: "Cloud infrastructure, end to end",
    org: "IT Gate",
    period: "Aug 2025 – Dec 2025",
    summary:
      "A hands-on internship where I helped design, deploy and run scalable, secure cloud environments, from compute and storage to the network underneath them.",
    role: [
      "Supported the design and architecture of scalable, secure cloud infrastructure.",
      "Deployed and managed compute, storage and networking services.",
      "Implemented infrastructure automation and CI/CD concepts for DevOps workflows.",
      "Monitored systems for performance, reliability and availability.",
      "Troubleshot infrastructure, networking and system-level issues.",
    ],
    stack: ["AWS", "Azure", "Docker", "Kubernetes", "Linux", "CI/CD", "CCNA", "MCSA"],
  },
  {
    id: "business",
    practice: "Business building",
    title: "Lokaly Egypt",
    org: "Founder & CEO",
    period: "Dec 2025 – Present",
    summary:
      "A platform connecting local businesses with digital opportunities. I founded it and own the vision, the product strategy and the long-term roadmap.",
    role: [
      "Defined the company vision, product strategy and business roadmap.",
      "Identified market opportunities and validated ideas before building.",
      "Built partnerships with local businesses and strategic stakeholders.",
      "Oversee operations, growth strategy and brand positioning.",
    ],
    stack: ["Strategy", "Partnerships", "Operations", "Brand positioning"],
  },
  {
    id: "marketing",
    practice: "Marketing",
    title: "Digital marketing that feeds sales",
    org: "Lokaly · August Real Estate",
    period: "2025 – Present",
    summary:
      "A background in digital marketing and tech means I don't wait for leads: I generate my own qualified pipeline and help local brands build theirs.",
    role: [
      "Generate my own qualified real-estate leads through digital channels.",
      "Help local businesses grow through strategic marketing and content.",
      "Shape brand positioning for Lokaly and its partners.",
    ],
    stack: ["Lead generation", "Content strategy", "Branding", "AI tools"],
  },
  {
    id: "sales",
    practice: "Sales & real estate",
    title: "Residential and investment property",
    org: "August Real Estate",
    period: "Jan 2026 – Present",
    summary:
      "I advise buyers and investors across Egypt's major destinations in both primary and resale markets, and I consistently exceed my sales targets.",
    role: [
      "Drive residential and investment sales across five key destinations.",
      "Run the full sales cycle, from cold calling to closing.",
      "Lead investment consultations and reposition clients toward better-fit opportunities.",
      "Close high-value transactions through direct sales and broker networks.",
    ],
    stack: ["Consultative selling", "Negotiation", "Client needs analysis", "Broker networks"],
  },
];

export const journey = [
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
    text: "Researched partnership and sponsorship opportunities, shaped growth strategies and turned ideas into scalable, impactful projects with cross-functional teams.",
  },
  {
    when: "Dec 2025",
    until: "Present",
    title: "Founder & CEO",
    org: "Lokaly Egypt",
    track: "Business",
    text: "Building a platform that connects local businesses with digital opportunities.",
  },
  {
    when: "Jan 2026",
    until: "Present",
    title: "Property Consultant",
    org: "August Real Estate",
    track: "Property",
    text: "Primary and resale sales across New Cairo, the New Administrative Capital, North Coast, Sheikh Zayed and Ain Sokhna.",
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
  { step: "Consult", text: "Investment consultations built on the client's real goals." },
  { step: "Qualify", text: "Separating serious buyers from browsers early." },
  { step: "Reposition", text: "Handling objections and steering toward the better-fit unit." },
  { step: "Close", text: "Negotiating and closing high-value transactions." },
];

export const skillGroups = [
  { name: "Cloud platforms", items: ["AWS", "Azure", "Cloud monitoring"] },
  { name: "Containers & delivery", items: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "CI/CD"] },
  { name: "Infrastructure as code", items: ["Terraform", "CloudFormation", "IaC"] },
  { name: "Systems & networking", items: ["Linux", "Windows Server", "Virtualization", "Networking", "CCNA", "MCSA"] },
  { name: "Code & data", items: ["Bash", "PowerShell", "Python", ".NET full-stack", "Databases", "Security"] },
  { name: "People & commerce", items: ["Sales closing", "Client needs analysis", "Persuasion", "Negotiation", "Conflict resolution", "Networking"] },
  { name: "Leadership", items: ["Strategic thinking", "Decision making", "Communication", "Emotional intelligence", "Teamwork", "Adaptability"] },
];

export const marquee = [
  "AWS", "Azure", "Kubernetes", "Docker", "Terraform", "Linux", "GitHub Actions", "Jenkins",
  "Python", "PowerShell", "Lead generation", "Negotiation", "Brand strategy", "Investment consulting",
];
