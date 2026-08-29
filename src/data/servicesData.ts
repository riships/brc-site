export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  slug: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  tags: string[];
  problemStatement: {
    title: string;
    description: string;
    points: string[];
  };
  whatWeOffer: {
    title: string;
    description: string;
  };
  capabilities: {
    title: string;
    description: string;
  }[];
  techStack: {
    category: string;
    items: string[];
  }[];
  approach: {
    step: string;
    title: string;
    description: string;
  }[];
  benefits: {
    title: string;
    description: string;
  }[];
  relevantIndustries: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "software-development",
    number: "01",
    title: "Software Development",
    slug: "software-development",
    tagline: "Custom Engineering for Mission-Critical Business Applications",
    shortDescription: "Custom web, mobile and enterprise applications engineered for performance, reliability and scale.",
    fullDescription:
      "BRC designs, architects, and engineers robust software solutions tailored to complex business requirements. We modernize legacy codebases and build high-throughput distributed systems that scale predictably.",
    icon: "Code2",
    tags: ["Web Applications", "Mobile Applications", "SaaS Platforms", "API Development", "Enterprise Software"],
    problemStatement: {
      title: "Off-the-shelf software rarely fits complex enterprise workflows.",
      description:
        "Growing enterprises frequently struggle with rigid software systems, technical debt, and disjointed architecture that hinder agile execution and product velocity.",
      points: [
        "Monolithic legacy codebases that are difficult and risky to update",
        "Performance bottlenecks during demand spikes and data growth",
        "Fragmented systems with poor API integration and manual handoffs",
        "Security vulnerabilities resulting from outdated technical dependencies",
      ],
    },
    whatWeOffer: {
      title: "Full-Lifecycle Software Engineering Under One Roof",
      description:
        "From technical discovery and system architecture to agile delivery and automated testing, we engineer software ready for production scale.",
    },
    capabilities: [
      {
        title: "Enterprise Web Applications",
        description: "High-performance web apps built with Next.js, React, Node.js, and TypeScript, engineered for responsiveness and reliability.",
      },
      {
        title: "Native & Cross-Platform Mobile",
        description: "Intuitive iOS and Android apps engineered with React Native and Flutter with real-time syncing and offline capabilities.",
      },
      {
        title: "SaaS Platform Architecture",
        description: "Multi-tenant, subscription-ready cloud platforms featuring tenant isolation, automated billing, and metered usage telemetry.",
      },
      {
        title: "API Design & Integration",
        description: "RESTful and GraphQL API ecosystems with OpenAPI documentation, rate limiting, token authentication, and enterprise webhooks.",
      },
      {
        title: "Legacy Modernization",
        description: "Pragmatic strangler-fig refactoring to convert brittle monolithic systems into scalable, maintainable microservices.",
      },
    ],
    techStack: [
      { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"] },
      { category: "Backend", items: ["Node.js", "Python", "Go", "Java Spring Boot", ".NET Core"] },
      { category: "Databases", items: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"] },
      { category: "Infrastructure", items: ["Docker", "Kubernetes", "AWS ECS", "Cloudflare"] },
    ],
    approach: [
      { step: "01", title: "Discovery & Architecture", description: "In-depth codebase review, architectural blueprints, and schema modeling." },
      { step: "02", title: "Agile Development", description: "Two-week test-driven sprint cycles with transparent progress dashboards." },
      { step: "03", title: "QA & Hardening", description: "Automated regression suites, load testing, and OWASP security audits." },
      { step: "04", title: "Zero-Downtime Deploy", description: "Blue/green production deployment with automated rollbacks and telemetry." },
    ],
    benefits: [
      { title: "Predictable Scalability", description: "Architectures engineered to handle 10x traffic increases without structural re-writes." },
      { title: "Reduced Technical Debt", description: "Strict TypeScript types, modular architecture, and comprehensive documentation." },
      { title: "Accelerated Time-to-Market", description: "Modern CI/CD delivery pipelines that enable daily production releases." },
    ],
    relevantIndustries: ["FinTech", "Healthcare", "E-commerce", "Logistics", "SaaS"],
    faqs: [
      {
        question: "How do you handle intellectual property (IP) and code ownership?",
        answer: "All code, documentation, schemas, and assets developed by BRC belong 100% to your organization from day one.",
      },
      {
        question: "Can BRC integrate with our existing engineering team?",
        answer: "Yes. We work either as an autonomous end-to-end delivery team or as senior technical staff augmentation within your existing Jira/Git workflows.",
      },
      {
        question: "What is your approach to automated testing?",
        answer: "We mandate unit test coverage for core business logic, integration tests for API endpoints, and end-to-end smoke tests in CI pipelines.",
      },
    ],
  },
  {
    id: "ai",
    number: "02",
    title: "AI & Machine Learning",
    slug: "ai",
    tagline: "Enterprise AI Solutions That Drive Measurable Automation",
    shortDescription: "Deploy Generative AI, intelligent autonomous agents, RAG systems, and predictive ML models built on your data.",
    fullDescription:
      "BRC enables organizations to turn unstructured data into actionable operational automation. We develop secure, privacy-compliant AI agents, enterprise search systems, and domain-specific ML pipelines.",
    icon: "Cpu",
    tags: ["Generative AI", "AI Agents", "AI Chatbots", "RAG Systems", "Machine Learning", "Business Automation"],
    problemStatement: {
      title: "Enterprises struggle to move AI from experimental demos to production.",
      description:
        "Generic LLM wrappers fail in enterprise settings due to hallucinations, compliance risks, data leakage, and lack of deterministic grounding in private business data.",
      points: [
        "Unreliable answers and hallucinations in standard AI tools",
        "Data privacy concerns when querying proprietary company records",
        "Difficulty connecting AI models to live ERP, CRM, and SQL systems",
        "Uncontrolled API token costs and lack of observability",
      ],
    },
    whatWeOffer: {
      title: "Deterministic, Grounded AI Architectures",
      description:
        "We build production-grade Retrieval-Augmented Generation (RAG) pipelines, autonomous workflow agents, and custom fine-tuned models hosted in your private VPC.",
    },
    capabilities: [
      {
        title: "Enterprise RAG Systems",
        description: "Connect LLMs to PDF archives, documentation, database records, and tickets using hybrid vector + lexical retrieval.",
      },
      {
        title: "Autonomous AI Agents",
        description: "Task-oriented agents capable of multi-step tool execution, data extraction, and CRM/ERP updates with human-in-the-loop guardrails.",
      },
      {
        title: "Domain-Specific Chatbots",
        description: "24/7 intelligent customer support and internal helpdesk assistants with contextual memory and multi-channel routing.",
      },
      {
        title: "Predictive Analytics & ML",
        description: "Supervised and unsupervised models for demand forecasting, anomaly detection, churn prediction, and algorithmic scoring.",
      },
      {
        title: "Private LLM Hosting",
        description: "Deploy open-weights models (e.g. Llama 3, DeepSeek, Mistral) securely in your AWS/Azure VPC with zero third-party data sharing.",
      },
    ],
    techStack: [
      { category: "AI Frameworks", items: ["LangChain", "LlamaIndex", "Hugging Face", "vLLM", "PyTorch"] },
      { category: "Vector Databases", items: ["pgvector", "Pinecone", "Qdrant", "Weaviate", "Milvus"] },
      { category: "Foundational Models", items: ["OpenAI GPT-4o", "Anthropic Claude 3.5", "Llama 3", "DeepSeek", "Mistral"] },
      { category: "Pipelines & Ops", items: ["LangSmith", "MLflow", "Kubeflow", "Triton Server"] },
    ],
    approach: [
      { step: "01", title: "Data Feasibility Audit", description: "Evaluate data quality, taxonomy, vector readiness, and privacy constraints." },
      { step: "02", title: "Retrieval & Prompt Architecture", description: "Design hybrid vector chunking, metadata filters, and evaluation benchmarks." },
      { step: "03", title: "Guardrails & Integration", description: "Implement prompt injection defense, PII masking, and ERP/API tool hooks." },
      { step: "04", title: "Telemetry & Drift Monitoring", description: "Track token economics, latency, hallucination metrics, and response accuracy." },
    ],
    benefits: [
      { title: "100% Private & Compliant", description: "Your company knowledge never trains public models or leaves your VPC perimeter." },
      { title: "Drastic Operational Efficiency", description: "Automate 60-80% of repetitive Tier-1 data lookups and document processing." },
      { title: "Verifiable Accuracy", description: "Direct citations linking every generated response back to verifiable source documents." },
    ],
    relevantIndustries: ["FinTech", "Healthcare", "Legal", "Customer Support", "Manufacturing"],
    faqs: [
      {
        question: "How do you protect our private company data from leaking to AI providers?",
        answer: "We use private VPC endpoints, dedicated enterprise agreements with zero-data-retention clauses, or on-premise open-weights models.",
      },
      {
        question: "What is RAG and why is it better than fine-tuning?",
        answer: "RAG retrieves real-time facts from your database right when answering, preventing hallucinations and ensuring instant data freshness without expensive re-training.",
      },
      {
        question: "Can AI agents take actions in our existing software?",
        answer: "Yes, using function calling and tool interfaces, AI agents can safely query APIs, draft emails, create tickets, and update database records with appropriate approval steps.",
      },
    ],
  },
  {
    id: "cloud",
    number: "03",
    title: "Cloud Solutions",
    slug: "cloud",
    tagline: "Resilient Cloud Infrastructure Built for 99.99% Availability",
    shortDescription: "End-to-end AWS, Azure, and Google Cloud architecture, seamless migration, cost optimization, and multi-region resilience.",
    fullDescription:
      "BRC architects, migrates, and manages enterprise cloud environments. We eliminate single points of failure, implement automated scaling, and optimize infrastructure costs.",
    icon: "Cloud",
    tags: ["AWS", "Azure", "Google Cloud", "Cloud Migration", "Cloud Architecture", "Infrastructure Optimization"],
    problemStatement: {
      title: "Uncontrolled cloud sprawl, high monthly invoices, and fragility.",
      description:
        "Many organizations rushed into cloud adoption without well-architected frameworks, resulting in bloated cloud spend, security misconfigurations, and downtime risks.",
      points: [
        "Unpredictable cloud bills with underutilized compute resources",
        "Complex on-premise infrastructure holding back scaling",
        "Lack of automated disaster recovery and multi-region failover",
        "Inadequate IAM roles and permissive security groups",
      ],
    },
    whatWeOffer: {
      title: "Well-Architected Cloud Foundations",
      description:
        "We engineer cloud platforms using Infrastructure as Code (Terraform), serverless and container architectures, and rigorous cloud cost governance.",
    },
    capabilities: [
      {
        title: "Enterprise Cloud Migration",
        description: "Re-platforming and re-architecting workloads from bare metal and on-premises data centers to AWS, Azure, or GCP.",
      },
      {
        title: "Multi-Cloud & Hybrid Architecture",
        description: "Unified networking, transit gateways, and Kubernetes management across heterogeneous cloud providers.",
      },
      {
        title: "FinOps & Cloud Cost Optimization",
        description: "Auditing resource utilization, rightsizing instances, implementing savings plans, and eliminating idle waste.",
      },
      {
        title: "High Availability & Disaster Recovery",
        description: "Active-active multi-region replication, automated backup snapshots, and verified RTO/RPO recovery drill testing.",
      },
      {
        title: "Serverless & Microservices",
        description: "Event-driven serverless architectures with AWS Lambda, Google Cloud Run, and Azure Functions for zero-idle cost.",
      },
    ],
    techStack: [
      { category: "Providers", items: ["Amazon Web Services (AWS)", "Microsoft Azure", "Google Cloud Platform (GCP)"] },
      { category: "IaC & Tools", items: ["Terraform", "OpenTofu", "AWS CDK", "Pulumi", "Ansible"] },
      { category: "Networking & Edge", items: ["Cloudflare", "AWS Route 53", "Transit Gateway", "Direct Connect"] },
      { category: "Containers", items: ["AWS EKS", "Google GKE", "Azure AKS", "AWS ECS Fargate"] },
    ],
    approach: [
      { step: "01", title: "Cloud Readiness Assessment", description: "Inventory workloads, network topologies, storage dependencies, and compliance mandates." },
      { step: "02", title: "Target Architecture Design", description: "Produce Well-Architected Framework blueprints and Terraform templates." },
      { step: "03", title: "Staged Migration", description: "Phased workload migration with continuous data synchronization and zero user downtime." },
      { step: "04", title: "Post-Migration Optimization", description: "Validate latency metrics, enable auto-scaling, and configure FinOps alerts." },
    ],
    benefits: [
      { title: "Average 30-40% Cost Reduction", description: "Eliminate orphaned disks, right-size compute instances, and leverage spot pricing." },
      { title: "Enterprise High Availability", description: "Multi-availability zone and multi-region resilience guaranteeing 99.99% uptime." },
      { title: "Immutable Infrastructure", description: "100% repeatable infrastructure codified in Git-managed Terraform repositories." },
    ],
    relevantIndustries: ["Enterprise IT", "FinTech", "E-commerce", "Healthcare", "Education"],
    faqs: [
      {
        question: "Which cloud provider does BRC recommend?",
        answer: "We are cloud-agnostic. We evaluate your existing software stack, licensing agreements, compliance rules, and team skills to recommend AWS, Azure, or GCP.",
      },
      {
        question: "How do you ensure zero downtime during a database migration?",
        answer: "We configure real-time CDC (Change Data Capture) replication between your source and target databases before doing an instant cutover.",
      },
      {
        question: "Do you provide 24/7 cloud monitoring after migration?",
        answer: "Yes, our Managed IT and Cloud Support teams provide 24/7/365 infrastructure monitoring, alerting, and incident remediation.",
      },
    ],
  },
  {
    id: "devops",
    number: "04",
    title: "DevOps & Infrastructure",
    slug: "devops",
    tagline: "Automated Pipelines That Accelerate Engineering Velocity",
    shortDescription: "CI/CD automation, Kubernetes orchestration, Infrastructure as Code, and 24/7 observability for modern software teams.",
    fullDescription:
      "BRC bridges the gap between software development and operations. We build automated CI/CD pipelines, container platforms, and comprehensive observability stacks that let your engineers ship code with confidence.",
    icon: "Boxes",
    tags: ["CI/CD", "Docker", "Kubernetes", "Infrastructure Automation", "Monitoring", "Scalability"],
    problemStatement: {
      title: "Slow, error-prone manual deployments and recurring outages.",
      description:
        "Engineering teams waste valuable hours wrestling with broken release scripts, snowflake server environments, and mysterious production bugs without telemetry.",
      points: [
        "Hours of manual release coordination on nights and weekends",
        "Discrepancies between staging and production environments",
        "Lack of centralized logging and proactive alerts before outages occur",
        "Slow rollback mechanisms when broken code hits production",
      ],
    },
    whatWeOffer: {
      title: "GitOps-Driven, Automated Engineering Infrastructure",
      description:
        "We implement automated linting, test runners, container builds, and Kubernetes GitOps deployments so every Git commit is verified and deployable.",
    },
    capabilities: [
      {
        title: "Automated CI/CD Pipelines",
        description: "Fast, cached GitHub Actions, GitLab CI, and Jenkins workflows for automated testing, Docker containerization, and deployment.",
      },
      {
        title: "Kubernetes (K8s) Orchestration",
        description: "Production-ready Kubernetes clusters with Helm charts, ArgoCD GitOps, auto-scaling, and service mesh routing.",
      },
      {
        title: "Infrastructure as Code (IaC)",
        description: "Automate 100% of servers, VPCs, firewall rules, and clusters via Terraform and Ansible with automated drift detection.",
      },
      {
        title: "Full-Stack Observability",
        description: "Unified telemetry dashboards combining Prometheus metrics, Grafana charts, OpenTelemetry traces, and ELK/Loki logs.",
      },
      {
        title: "Site Reliability Engineering (SRE)",
        description: "SLO/SLA definition, automated chaos testing, load testing, and automated canary deployment gates.",
      },
    ],
    techStack: [
      { category: "Orchestration", items: ["Kubernetes", "Docker", "Helm", "ArgoCD", "Nomad"] },
      { category: "CI/CD", items: ["GitHub Actions", "GitLab CI", "Jenkins", "CircleCI", "Bitbucket Pipelines"] },
      { category: "Observability", items: ["Prometheus", "Grafana", "Datadog", "OpenTelemetry", "ELK Stack"] },
      { category: "Automation", items: ["Terraform", "Ansible", "Bash", "Python Scripts"] },
    ],
    approach: [
      { step: "01", title: "Pipeline & Infra Audit", description: "Analyze deployment cycle times, failure rates, and infrastructure drift." },
      { step: "02", title: "Containerization & Standards", description: "Standardize multi-stage Dockerfiles and container scanning in CI." },
      { step: "03", title: "GitOps & Pipeline Build", description: "Set up declarative ArgoCD and GitHub Actions deployment workflows." },
      { step: "04", title: "Telemetry & Handover", description: "Deploy Grafana dashboards, configure PagerDuty alerts, and train your team." },
    ],
    benefits: [
      { title: "10x Faster Deployment Speed", description: "Reduce deploy durations from hours to minutes with automated verification." },
      { title: "Instant Rollback Protection", description: "Roll back faulty releases with a single click or automatic health check triggers." },
      { title: "Parity Across Environments", description: "Identical containerized runtime configurations from developer laptops to production." },
    ],
    relevantIndustries: ["SaaS", "FinTech", "HealthTech", "E-commerce", "Media"],
    faqs: [
      {
        question: "Can you set up CI/CD if our app isn't containerized yet?",
        answer: "Yes. We will containerize your application with optimized multi-stage Docker builds as part of the pipeline setup.",
      },
      {
        question: "Do you support self-hosted Kubernetes as well as managed cloud K8s?",
        answer: "Yes, we support bare-metal/k3s/RKE clusters as well as managed cloud solutions like AWS EKS, Azure AKS, and Google GKE.",
      },
      {
        question: "How do you manage secret keys in CI/CD pipelines?",
        answer: "We integrate enterprise secret managers such as HashiCorp Vault, AWS Secrets Manager, and Doppler with dynamic credential rotation.",
      },
    ],
  },
  {
    id: "cybersecurity",
    number: "05",
    title: "Cybersecurity",
    slug: "cybersecurity",
    tagline: "Proactive Defense & Zero-Trust Security for Modern Enterprises",
    shortDescription: "Vulnerability assessments, application security, cloud hardening, compliance readiness, and continuous security monitoring.",
    fullDescription:
      "BRC safeguards your digital assets against modern cyber threats. We deliver zero-trust architecture, automated penetration testing, static code analysis, and compliance alignment for HIPAA, SOC 2, and GDPR.",
    icon: "ShieldCheck",
    tags: ["Security Assessment", "Application Security", "Cloud Security", "Vulnerability Assessment", "Security Monitoring"],
    problemStatement: {
      title: "Increasing attack surfaces, ransomware, and compliance penalties.",
      description:
        "Modern cloud applications face automated bots, credential stuffing, API vulnerabilities, and supply chain attacks that can compromise sensitive customer data.",
      points: [
        "Unaddressed vulnerabilities in third-party npm and pip packages",
        "Overly permissive cloud IAM privileges and unencrypted storage buckets",
        "Lack of security posture visibility across multi-repo organizations",
        "Risk of failing mandatory SOC 2, HIPAA, or ISO 27001 audits",
      ],
    },
    whatWeOffer: {
      title: "Comprehensive Zero-Trust Enterprise Defense",
      description:
        "We assess, harden, and monitor your software and cloud infrastructure, embedding security directly into the software development lifecycle (DevSecOps).",
    },
    capabilities: [
      {
        title: "Vulnerability & Penetration Testing",
        description: "White-box and black-box penetration testing of web applications, mobile endpoints, APIs, and network perimeters.",
      },
      {
        title: "Cloud Security Posture Management",
        description: "Hardening AWS/Azure/GCP configurations, enforcing MFA, least-privilege IAM, and automated configuration auditing.",
      },
      {
        title: "DevSecOps & SAST/DAST",
        description: "Integrating automated static application security testing (SAST) and container vulnerability scans into CI/CD pipelines.",
      },
      {
        title: "Compliance Readiness (SOC 2, HIPAA)",
        description: "Technical remediation, audit logging, data encryption in transit/at rest, and policy documentation for certifications.",
      },
      {
        title: "WAF & DDoS Mitigation",
        description: "Deploying enterprise Web Application Firewalls (WAF), bot protection, and rate-limiting rules via Cloudflare and AWS WAF.",
      },
    ],
    techStack: [
      { category: "Testing Tools", items: ["Burp Suite", "OWASP ZAP", "SonarQube", "Snyk", "Trivy"] },
      { category: "Cloud & IAM", items: ["AWS IAM Access Analyzer", "Azure Security Center", "HashiCorp Vault"] },
      { category: "Edge & WAF", items: ["Cloudflare WAF", "AWS WAF", "CrowdSec", "Fail2ban"] },
      { category: "SIEM & Logging", items: ["Wazuh", "Datadog Security", "Splunk", "AWS CloudTrail"] },
    ],
    approach: [
      { step: "01", title: "Threat Modeling & Assessment", description: "Identify attack surfaces, critical data flows, and regulatory requirements." },
      { step: "02", title: "Penetration & Code Audit", description: "Perform vulnerability scans, manual penetration testing, and code review." },
      { step: "03", title: "Remediation & Hardening", description: "Patch discovered vulnerabilities, restrict IAM permissions, and deploy WAFs." },
      { step: "04", title: "Continuous Monitoring", description: "Install automated alerts for anomalous logins, policy drift, and security events." },
    ],
    benefits: [
      { title: "Audit-Ready Security Posture", description: "Streamlined path to passing SOC 2 Type II, HIPAA, and ISO 27001 compliance audits." },
      { title: "Protection Against Zero-Day Exploits", description: "Layered defense-in-depth architecture stopping attacks before reaching core databases." },
      { title: "Continuous Automated Scanning", description: "Prevent vulnerable dependencies from ever entering your production git branches." },
    ],
    relevantIndustries: ["FinTech", "Healthcare", "E-commerce", "Enterprise SaaS", "Legal"],
    faqs: [
      {
        question: "Will penetration testing disrupt our live application?",
        answer: "We perform penetration testing either against a dedicated staging mirror or during agreed maintenance windows with strict non-destructive safety controls.",
      },
      {
        question: "Can BRC help us achieve SOC 2 compliance?",
        answer: "Yes. We configure required technical controls (encryption, access management, audit logs, CI/CD gates) and assist with audit evidence gathering.",
      },
      {
        question: "What is DevSecOps?",
        answer: "DevSecOps integrates automated security scanning into the developer pipeline so code is checked for vulnerabilities before it is ever merged.",
      },
    ],
  },
  {
    id: "data-analytics",
    number: "06",
    title: "Data & Analytics",
    slug: "data-analytics",
    tagline: "Turn Raw Data Into Actionable Strategic Intelligence",
    shortDescription: "Modern data warehousing, real-time data engineering, ETL pipelines, interactive executive dashboards, and business intelligence.",
    fullDescription:
      "BRC helps organizations unlock the value in their transactional data. We build scalable data pipelines, data warehouses, and interactive BI dashboards that empower executives to make data-backed decisions.",
    icon: "BarChart3",
    tags: ["Data Engineering", "Data Warehousing", "Business Intelligence", "Dashboards", "Analytics", "Database Solutions"],
    problemStatement: {
      title: "Data silos, conflicting spreadsheets, and slow reporting queries.",
      description:
        "Critical business data is frequently locked inside disconnected SaaS applications, transactional databases, and legacy spreadsheets, making real-time analysis impossible.",
      points: [
        "Inability to get a single source of truth across sales, finance, and product",
        "Analytical queries causing performance degradation on production SQL servers",
        "Manual, error-prone weekly CSV exports and Excel data formatting",
        "Lack of real-time visibility into KPIs and customer behavior",
      ],
    },
    whatWeOffer: {
      title: "Modern Data Stack Architecture",
      description:
        "We extract data from all your business tools, load it into scalable analytical warehouses (Snowflake, BigQuery, ClickHouse), and transform it for real-time reporting.",
    },
    capabilities: [
      {
        title: "ETL / ELT Pipeline Engineering",
        description: "Automated data ingestion from APIs, transactional databases, and event streams using Airflow, dbt, and Kafka.",
      },
      {
        title: "Enterprise Data Warehouses",
        description: "Architecting columnar warehouses on Snowflake, Google BigQuery, AWS Redshift, and ClickHouse for sub-second aggregations.",
      },
      {
        title: "Executive BI Dashboards",
        description: "Interactive real-time dashboards built with PowerBI, Tableau, Apache Superset, or custom React data visualizations.",
      },
      {
        title: "Real-Time Stream Processing",
        description: "Processing live event streams and sensor telemetry using Apache Kafka, RabbitMQ, and AWS Kinesis.",
      },
      {
        title: "Database Optimization & Sharding",
        description: "Query profiling, index tuning, partitioning, and read-replica configurations for high-volume PostgreSQL and MySQL systems.",
      },
    ],
    techStack: [
      { category: "Data Warehouses", items: ["Snowflake", "BigQuery", "ClickHouse", "AWS Redshift", "PostgreSQL"] },
      { category: "Pipelines & ETL", items: ["dbt", "Apache Airflow", "Kafka", "Fivetran", "Airbyte"] },
      { category: "Visualization & BI", items: ["Power BI", "Tableau", "Apache Superset", "Metabase", "Tremor React"] },
      { category: "Data Storage", items: ["AWS S3 Data Lake", "Google Cloud Storage", "Delta Lake"] },
    ],
    approach: [
      { step: "01", title: "Source & KPI Mapping", description: "Catalog data sources, define business metrics, and map schema relationships." },
      { step: "02", title: "Warehouse Modeling", description: "Design dimensional star/snowflake schemas optimized for analytical query speed." },
      { step: "03", title: "Automated ETL & dbt", description: "Build resilient ingestion pipelines with data quality tests and transformation models." },
      { step: "04", title: "Dashboard Delivery", description: "Design intuitive executive dashboards with automated alerts and access controls." },
    ],
    benefits: [
      { title: "Single Source of Truth", description: "Eliminate conflicting metric calculations across departments with standardized data models." },
      { title: "Zero Impact on Production DBs", description: "Offload reporting queries to analytical warehouses so your customer-facing apps stay fast." },
      { title: "Real-Time Decision Making", description: "Access live operational metrics rather than waiting for stale monthly reports." },
    ],
    relevantIndustries: ["E-commerce", "FinTech", "Logistics", "Retail", "Healthcare"],
    faqs: [
      {
        question: "Can BRC help optimize our slow PostgreSQL or MySQL database?",
        answer: "Yes, our database specialists profile query execution plans, design missing composite indexes, and optimize connection pooling.",
      },
      {
        question: "How frequently can data be synced into the warehouse?",
        answer: "We support both micro-batch schedules (e.g. every 5-15 minutes) and real-time event streaming depending on your requirements.",
      },
      {
        question: "Can we embed custom interactive charts directly into our customer portal?",
        answer: "Yes, we build custom white-label React/Next.js dashboard interfaces with role-based access control.",
      },
    ],
  },
  {
    id: "it-consulting",
    number: "07",
    title: "IT Consulting",
    slug: "it-consulting",
    tagline: "Strategic Technology Advisory for Growing & Transforming Enterprises",
    shortDescription: "Strategic roadmap planning, system architecture advisory, digital transformation, and fractional CTO leadership.",
    fullDescription:
      "BRC provides senior technical consulting to help leadership teams make informed technology investments. We evaluate architecture, de-risk large technology initiatives, and design future-proof systems.",
    icon: "Lightbulb",
    tags: ["Technology Strategy", "Architecture Consulting", "Digital Transformation", "System Modernization", "Technical Advisory"],
    problemStatement: {
      title: "Costly technology missteps and lack of strategic alignment.",
      description:
        "Companies often make expensive technology choices based on fleeting hype rather than pragmatic business goals, leading to stalled projects and vendor lock-in.",
      points: [
        "Unclear technology roadmap causing misallocated engineering budgets",
        "Difficulty evaluating competing software vendors and cloud platforms",
        "Lack of senior architectural leadership to oversee complex migrations",
        "Legacy processes hindering team productivity and product release frequency",
      ],
    },
    whatWeOffer: {
      title: "Pragmatic, Outcome-Driven Technical Advisory",
      description:
        "Our senior architects collaborate with your C-suite and engineering leaders to formulate clear, executable technology blueprints aligned with your revenue goals.",
    },
    capabilities: [
      {
        title: "Enterprise Architecture Review",
        description: "Holistic evaluation of your software systems, database schemas, cloud infrastructure, and technical debt risk.",
      },
      {
        title: "Fractional CTO & Technical Advisory",
        description: "Senior strategic guidance for board meetings, investor due diligence, vendor evaluations, and hiring strategies.",
      },
      {
        title: "Digital Transformation Strategy",
        description: "Step-by-step modernization roadmaps to transition paper-based or legacy desktop workflows to modern cloud systems.",
      },
      {
        title: "Vendor & Tooling Due Diligence",
        description: "Objective build-vs-buy analysis, third-party software evaluation, and contract negotiation advisory.",
      },
      {
        title: "Engineering Team Enablement",
        description: "Agile workflow optimization, code review guidelines, CI/CD maturity audits, and technical upskilling workshops.",
      },
    ],
    techStack: [
      { category: "Architectures", items: ["Microservices", "Event-Driven Architecture", "Serverless", "Domain-Driven Design (DDD)"] },
      { category: "Methodologies", items: ["Agile Scrum", "Kanban", "GitOps", "DevSecOps", "Continuous Delivery"] },
      { category: "Frameworks", items: ["TOGAF", "AWS Well-Architected", "CMMI", "ITIL", "Zero Trust"] },
    ],
    approach: [
      { step: "01", title: "Stakeholder Alignment", description: "Interview business leaders and engineers to understand business goals and pain points." },
      { step: "02", title: "Architectural Deep Dive", description: "Inspect system bottlenecks, security gaps, recurring costs, and scaling limits." },
      { step: "03", title: "Strategic Roadmap", description: "Deliver prioritized, actionable milestone recommendations with cost/benefit models." },
      { step: "04", title: "Implementation Oversight", description: "Guide implementation teams through execution to guarantee expected outcomes." },
    ],
    benefits: [
      { title: "Avoid Costly Architectural Mistakes", description: "De-risk major technical investments before committing hundreds of engineering hours." },
      { title: "Accelerate Digital Velocity", description: "Eliminate process bottlenecks and align engineering output directly with revenue goals." },
      { title: "Independent, Vendor-Neutral Advice", description: "Recommendations driven exclusively by what is best for your business." },
    ],
    relevantIndustries: ["Enterprise Services", "Finance", "Healthcare", "Manufacturing", "Real Estate"],
    faqs: [
      {
        question: "How long does a typical IT consulting engagement last?",
        answer: "Discovery and architectural assessments typically take 2-4 weeks, while fractional CTO and strategic advisory are delivered on flexible monthly retainers.",
      },
      {
        question: "Can BRC also implement the recommendations you provide?",
        answer: "Yes, our development, cloud, and DevOps engineering teams can execute the agreed roadmap directly.",
      },
      {
        question: "Do you help with technical due diligence for mergers and acquisitions?",
        answer: "Yes, we evaluate target codebases, infrastructure security, licensing compliance, and technical debt for buyers and investors.",
      },
    ],
  },
  {
    id: "managed-it",
    number: "08",
    title: "Managed IT Services",
    slug: "managed-it",
    tagline: "Proactive 24/7/365 Application & Infrastructure Management",
    shortDescription: "Proactive application support, cloud monitoring, disaster recovery, security patching, and SLA-backed maintenance.",
    fullDescription:
      "BRC provides reliable managed IT services that keep your mission-critical applications running smoothly. We monitor systems around the clock, apply patches proactively, and resolve incidents before they impact users.",
    icon: "Headphones",
    tags: ["Application Support", "Cloud Support", "Infrastructure Support", "Maintenance", "Monitoring", "Managed Services"],
    problemStatement: {
      title: "Unexpected downtime, unpatched servers, and overworked internal teams.",
      description:
        "When internal engineering teams are constantly distracted by routine server maintenance, security patches, and midnight bug alerts, strategic product innovation grinds to a halt.",
      points: [
        "Midnight outages leading to customer churn and loss of revenue",
        "Slow response times when production incidents occur outside work hours",
        "Backlog of unapplied operating system and framework security updates",
        "High cost of staffing a full in-house 24/7 operations team",
      ],
    },
    whatWeOffer: {
      title: "SLA-Backed 24/7 Proactive System Management",
      description:
        "We handle monitoring, patch management, security scanning, backup verification, and Tier-2/Tier-3 application bug fixes under strict Service Level Agreements.",
    },
    capabilities: [
      {
        title: "24/7/365 Incident Management",
        description: "Continuous health checks with guaranteed response times under 15 minutes for critical P1 production outages.",
      },
      {
        title: "Proactive Patch Management",
        description: "Scheduled testing and deployment of operating system, framework, and security patches without production disruption.",
      },
      {
        title: "Backup & Recovery Drills",
        description: "Automated daily/hourly snapshots with quarterly dry-run restore drills to guarantee disaster recovery readiness.",
      },
      {
        title: "Application Bug Fixing & Minor Enhancements",
        description: "Dedicated monthly engineering hours allocated to resolving bugs, refactoring technical debt, and shipping minor features.",
      },
      {
        title: "Database Health & Performance Tuning",
        description: "Routine vacuuming, index maintenance, slow query optimization, and storage growth management.",
      },
    ],
    techStack: [
      { category: "Monitoring & Alerting", items: ["Datadog", "PagerDuty", "Opsgenie", "UptimeRobot", "Grafana Cloud"] },
      { category: "Cloud Management", items: ["AWS CloudWatch", "Azure Monitor", "Google Cloud Operations Suite"] },
      { category: "Ticketing & ITSM", items: ["Jira Service Management", "Zendesk", "Linear", "Slack Ops Channels"] },
    ],
    approach: [
      { step: "01", title: "Infrastructure Onboarding", description: "Install telemetry agents, document system dependencies, and establish runbooks." },
      { step: "02", title: "Baseline & Health Triage", description: "Audit outstanding errors, configure synthetic monitors, and set threshold alerts." },
      { step: "03", title: "24/7 SLA Handover", description: "Activate dedicated on-call rotations with Slack/PagerDuty escalation channels." },
      { step: "04", title: "Monthly Review & Tuning", description: "Provide uptime reports, incident post-mortems, and capacity forecasts." },
    ],
    benefits: [
      { title: "Guaranteed 99.9% Uptime SLAs", description: "Rigorous incident management minimizing MTTR (Mean Time to Resolution)." },
      { title: "Free Up Core Engineering Teams", description: "Let your primary product developers focus on features rather than server maintenance." },
      { title: "Predictable Monthly Investment", description: "Transparent fixed-cost plans without surprise emergency overtime bills." },
    ],
    relevantIndustries: ["Healthcare", "FinTech", "E-commerce", "Logistics", "Professional Services"],
    faqs: [
      {
        question: "What is your response time for high-severity incidents?",
        answer: "We offer guaranteed response times under 15 minutes for critical P1 outages with 24/7/365 engineer escalation.",
      },
      {
        question: "Can we roll over unused monthly development hours?",
        answer: "Yes, up to 50% of unused minor enhancement hours can be rolled over to subsequent billing periods.",
      },
      {
        question: "How do you communicate during an outage?",
        answer: "We communicate in real time via a dedicated Slack/Teams incident channel, SMS alerts, and email status updates.",
      },
    ],
  },
];
