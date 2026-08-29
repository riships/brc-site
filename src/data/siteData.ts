export interface SolutionNeed {
  id: string;
  question: string;
  solution: string;
  description: string;
  link: string;
  icon: string;
  tag: string;
}

export const solutionsData: SolutionNeed[] = [
  {
    id: "build-product",
    question: "I want to build a product",
    solution: "Product Development",
    description: "Turn your product vision into an enterprise-ready web, mobile, or SaaS application with battle-tested engineering.",
    link: "/services/software-development",
    icon: "Rocket",
    tag: "Software Engineering",
  },
  {
    id: "automate-business",
    question: "I want to automate my business",
    solution: "AI & Automation",
    description: "Deploy private RAG architectures, autonomous AI agents, and intelligent workflows that cut operational overhead.",
    link: "/services/ai",
    icon: "Cpu",
    tag: "Generative AI",
  },
  {
    id: "move-cloud",
    question: "I want to move to the cloud",
    solution: "Cloud Solutions",
    description: "Migrate legacy infrastructure to AWS, Azure, or GCP with zero downtime, automated scaling, and reduced cloud spend.",
    link: "/services/cloud",
    icon: "Cloud",
    tag: "Cloud Architecture",
  },
  {
    id: "application-scaling",
    question: "My application isn't scaling",
    solution: "Architecture & DevOps",
    description: "Eliminate database bottlenecks, refactor monoliths into microservices, and deploy Kubernetes auto-scaling pipelines.",
    link: "/services/devops",
    icon: "Boxes",
    tag: "DevOps & Scale",
  },
  {
    id: "modernize-legacy",
    question: "I need to modernize legacy software",
    solution: "Digital Transformation",
    description: "Safely refactor outdated legacy systems to modern TypeScript, Next.js, and cloud APIs without disrupting daily business.",
    link: "/services/it-consulting",
    icon: "RefreshCw",
    tag: "IT Consulting",
  },
  {
    id: "ongoing-support",
    question: "I need ongoing technical support",
    solution: "Managed IT Services",
    description: "24/7/365 proactive uptime monitoring, regular security patches, backup verification, and guaranteed SLA response.",
    link: "/services/managed-it",
    icon: "Headphones",
    tag: "Support & SRE",
  },
];

export interface IndustryItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  keyUseCases: string[];
}

export const industriesData: IndustryItem[] = [
  {
    id: "fintech",
    name: "FinTech",
    tagline: "High-throughput, PCI-DSS compliant financial technology platforms.",
    description: "Secure payment gateways, automated fraud detection, core banking API integrations, and low-latency algorithmic trading systems.",
    icon: "Landmark",
    keyUseCases: ["Payment Gateways", "Fraud Detection AI", "Lending Platforms", "Regulatory Auditing"],
  },
  {
    id: "healthcare",
    name: "Healthcare",
    tagline: "HIPAA-compliant digital health, EHR interoperability, and telemedicine.",
    description: "Robust patient portals, real-time medical IoT data streaming, secure HL7/FHIR integrations, and HIPAA-hardened cloud architecture.",
    icon: "Activity",
    keyUseCases: ["Telehealth Systems", "EHR / FHIR APIs", "Clinical Analytics", "Patient Portals"],
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    tagline: "High-conversion headless shopping experiences and scalable backends.",
    description: "Sub-second Next.js storefronts, unified inventory management across channels, AI search recommendations, and high-volume checkout engines.",
    icon: "ShoppingCart",
    keyUseCases: ["Headless Commerce", "Inventory Sync", "AI Recommendations", "Flash Sale Scale"],
  },
  {
    id: "logistics",
    name: "Logistics",
    tagline: "Real-time fleet tracking, dynamic route optimization, and warehousing.",
    description: "Telemetry ingestion pipelines, predictive ETA algorithms, automated dispatching platforms, and cross-carrier EDI integrations.",
    icon: "Truck",
    keyUseCases: ["Fleet Tracking", "Route Optimization AI", "Warehouse Management", "EDI Integrations"],
  },
  {
    id: "education",
    name: "Education",
    tagline: "Scalable learning management systems and interactive assessment portals.",
    description: "Multi-tenant university LMS, proctoring software with computer vision, gamified student portals, and SIS database integration.",
    icon: "GraduationCap",
    keyUseCases: ["Interactive LMS", "AI Tutoring Assistants", "Student Information Systems", "Virtual Classrooms"],
  },
  {
    id: "real-estate",
    name: "Real Estate",
    tagline: "Property management platforms, MLS data pipelines, and valuation models.",
    description: "Real-time MLS/RESO data ingestion, tenant billing portals, 3D property virtual tours, and predictive valuation algorithms.",
    icon: "Building2",
    keyUseCases: ["MLS Ingestion Pipelines", "Tenant Portals", "Predictive Valuation", "Lease Automation"],
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    tagline: "Industrial IoT monitoring, predictive maintenance, and supply chain ERP.",
    description: "Sensor data aggregation, machine anomaly detection, automated supply chain replenishment, and factory-floor dashboard displays.",
    icon: "Factory",
    keyUseCases: ["Predictive Maintenance", "Industrial IoT", "Supply Chain ERP", "Quality Control AI"],
  },
  {
    id: "retail",
    name: "Retail",
    tagline: "Omnichannel point-of-sale, customer loyalty, and demand forecasting.",
    description: "Synchronized online-offline retail POS systems, targeted customer loyalty programs, and automated stock replenishment pipelines.",
    icon: "Store",
    keyUseCases: ["Omnichannel POS", "Loyalty Programs", "Demand Forecasting", "Store Inventory Sync"],
  },
  {
    id: "hospitality",
    name: "Travel & Hospitality",
    tagline: "Direct booking engines, dynamic pricing algorithms, and guest portals.",
    description: "Centralized reservation systems (CRS), multi-channel GDS sync, dynamic rate optimization, and contactless mobile check-in apps.",
    icon: "Plane",
    keyUseCases: ["Booking Engines", "Dynamic Pricing AI", "Guest Mobile Apps", "GDS / OTA Sync"],
  },
  {
    id: "professional-services",
    name: "Professional Services",
    tagline: "Custom enterprise CRM, document automation, and billing systems.",
    description: "Secure client portals, automated contract generation, billable time tracking, and workflow automation for legal and consulting firms.",
    icon: "Briefcase",
    keyUseCases: ["Client Portals", "Document Automation", "Billing & Timesheets", "Workflow Automation"],
  },
];

export interface CaseStudyItem {
  id: string;
  industry: string;
  projectTitle: string;
  slug: string;
  problem: string;
  solution: string;
  technologies: string[];
  outcome: string;
  isPlaceholder?: boolean;
}

export const caseStudiesData: CaseStudyItem[] = [
  {
    id: "ecommerce-transformation",
    industry: "E-commerce",
    projectTitle: "E-commerce Platform Transformation",
    slug: "ecommerce-transformation",
    problem: "A high-growth retail enterprise was struggling with a legacy monolithic platform experiencing server crashes and 4-second page load times during seasonal flash sales.",
    solution: "Architected a headless Next.js frontend paired with microservices backend on AWS ECS, Redis caching layer, and automated CI/CD pipelines.",
    technologies: ["Next.js", "Node.js", "AWS ECS", "Docker", "PostgreSQL", "Redis"],
    outcome: "Reduced page load latency by 68%, eliminated flash sale downtime, and streamlined developer release cycles from weekly to daily.",
    isPlaceholder: true,
  },
  {
    id: "fintech-cloud-modernization",
    industry: "FinTech",
    projectTitle: "FinTech Multi-Region Cloud & Compliance Modernization",
    slug: "fintech-cloud-modernization",
    problem: "A growing payment processing provider needed SOC 2 Type II compliance and high-availability multi-region redundancy to onboard institutional bank clients.",
    solution: "Re-architected cloud infrastructure using Terraform on AWS, establishing zero-trust IAM roles, automated encryption at rest, and multi-region failover.",
    technologies: ["AWS", "Terraform", "PostgreSQL", "HashiCorp Vault", "Docker", "Kubernetes"],
    outcome: "Achieved SOC 2 Type II certification with zero non-conformities and established active-active failover with sub-minute RTO.",
    isPlaceholder: true,
  },
  {
    id: "logistics-route-optimization",
    industry: "Logistics",
    projectTitle: "AI-Driven Dispatch & Telematics Pipeline",
    slug: "logistics-route-optimization",
    problem: "A regional logistics carrier was losing margins due to inefficient manual route dispatching and lack of real-time visibility into driver delays.",
    solution: "Developed real-time IoT event streaming pipeline with Kafka and a custom route-optimization AI algorithm integrated into a Next.js dispatcher console.",
    technologies: ["Python", "FastAPI", "Apache Kafka", "Next.js", "PostgreSQL", "Docker"],
    outcome: "Reduced daily route mileage by 18%, automated 85% of dispatch workflows, and provided customers with real-time GPS tracking.",
    isPlaceholder: true,
  },
  {
    id: "healthcare-hipaa-platform",
    industry: "Healthcare",
    projectTitle: "HIPAA-Compliant Telehealth & Records System",
    slug: "healthcare-hipaa-platform",
    problem: "A specialty medical network needed a custom telehealth consultation portal with secure electronic medical record (EHR) sync and strict HIPAA encryption.",
    solution: "Built a WebRTC-powered video consultation application with end-to-end encrypted chat, HL7/FHIR API connectors, and automated audit logging on AWS.",
    technologies: ["React", "TypeScript", "Node.js", "WebRTC", "AWS HealthLake", "PostgreSQL"],
    outcome: "Successfully launched across 45 clinics, serving thousands of monthly patient consultations with zero security breaches.",
    isPlaceholder: true,
  },
  {
    id: "saas-multitenant-refactor",
    industry: "Enterprise SaaS",
    projectTitle: "SaaS Multi-Tenant Database & API Modernization",
    slug: "saas-multitenant-refactor",
    problem: "A B2B SaaS company suffered cross-tenant performance interference and slow query times as customer database volume expanded 5x.",
    solution: "Implemented tenant-isolated schemas in PostgreSQL, Redis distributed caching, and refactored API endpoints with strict rate limiting.",
    technologies: ["Node.js", "PostgreSQL", "Redis", "TypeScript", "Docker", "AWS"],
    outcome: "Improved 99th percentile API response times by 4x and eliminated noisy-neighbor database locking across all enterprise tenants.",
    isPlaceholder: true,
  },
  {
    id: "realestate-analytics-engine",
    industry: "Real Estate",
    projectTitle: "Predictive Property Valuation & Analytics Engine",
    slug: "realestate-analytics-engine",
    problem: "A real estate investment firm spent hundreds of hours manually compiling disparate MLS listings and county tax records for property acquisitions.",
    solution: "Created automated dbt pipelines on Snowflake and a machine learning valuation model with an interactive executive dashboard.",
    technologies: ["Python", "dbt", "Snowflake", "Next.js", "Tailwind CSS", "AWS Lambda"],
    outcome: "Automated acquisition screening for over 50,000 monthly property listings, accelerating underwriting decisions from days to minutes.",
    isPlaceholder: true,
  },
];



export const companyPrinciples = [
  {
    title: "Expertise",
    description: "Senior architects and engineers with proven track records building mission-critical distributed systems.",
    icon: "Award",
  },
  {
    title: "Innovation",
    description: "Pragmatic adoption of state-of-the-art AI, cloud-native patterns, and modern software architectures.",
    icon: "Sparkles",
  },
  {
    title: "Reliability",
    description: "Enterprise-grade SLAs, zero-downtime deployments, and rigorous automated testing baked into every project.",
    icon: "ShieldCheck",
  },
  {
    title: "Partnership",
    description: "Transparent, collaborative communication. We act as an extension of your technical leadership team.",
    icon: "Users",
  },
];

export const blogPosts = [
  {
    id: "enterprise-rag-best-practices",
    slug: "enterprise-rag-best-practices",
    title: "Architecting Enterprise RAG: Eliminating Hallucinations in Production",
    date: "February 2026",
    category: "AI & Machine Learning",
    readTime: "6 min read",
    summary: "A practical guide to chunking strategies, hybrid vector + BM25 search, metadata filtering, and evaluation metrics for enterprise AI search.",
  },
  {
    id: "kubernetes-finops-cloud-costs",
    slug: "kubernetes-finops-cloud-costs",
    title: "How We Cut Cloud Infrastructure Costs by 35% with Kubernetes Rightsizing",
    date: "January 2026",
    category: "Cloud & DevOps",
    readTime: "8 min read",
    summary: "Strategies for optimizing CPU/memory requests, leveraging spot instances safely, and removing idle development clusters.",
  },
  {
    id: "zero-trust-application-security",
    slug: "zero-trust-application-security",
    title: "Zero-Trust Architecture for Modern Microservices in 2026",
    date: "December 2025",
    category: "Cybersecurity",
    readTime: "7 min read",
    summary: "Implementing service-to-service mTLS, least-privilege IAM roles, and automated dependency scanning in CI/CD pipelines.",
  },
];

export const careerOpenings = [
  {
    id: "senior-fullstack-engineer",
    title: "Senior Full Stack Engineer (Next.js / Node.js)",
    department: "Engineering",
    location: "Remote / Hybrid",
    type: "Full-Time",
    experience: "5+ years",
    description: "Lead the development of high-performance enterprise web applications and scalable APIs.",
  },
  {
    id: "ai-engineer-rag",
    title: "AI / LLM Systems Engineer",
    department: "AI & Innovation",
    location: "Remote / Hybrid",
    type: "Full-Time",
    experience: "3+ years",
    description: "Design and implement production RAG pipelines, autonomous agent toolsets, and vector database architectures.",
  },
  {
    id: "cloud-devops-architect",
    title: "Lead Cloud & DevOps Architect (AWS / K8s)",
    department: "Infrastructure",
    location: "Remote / Hybrid",
    type: "Full-Time",
    experience: "6+ years",
    description: "Architect multi-region cloud infrastructures, Terraform automation, and GitOps Kubernetes pipelines.",
  },
  {
    id: "senior-security-engineer",
    title: "Senior Cybersecurity & DevSecOps Engineer",
    department: "Security",
    location: "Remote / Hybrid",
    type: "Full-Time",
    experience: "4+ years",
    description: "Conduct penetration testing, establish SOC 2 controls, and integrate SAST/DAST into engineering pipelines.",
  },
];
