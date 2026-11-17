import type { Project } from '@/types/project'

const projectsList: Project[] = [
  {
    id: 'poptin-mcp-integration',
    order: 1,
    title: "Extending Poptin's Capabilities into the Agentic AI Ecosystem",
    problemStatement:
      "Architecting and leading the development of an MCP integration that connects AI assistants to Poptin's marketing infrastructure, enabling autonomous campaign creation and execution.",
    role: 'Technical Lead · MCP Integration',
    context:
      'Architecting an AI-native interface connecting AI agents directly to application capabilities and internal services.',
    date: '2026',
    company: {
      name: 'Poptin',
      logo: '/img/logos/poptin.svg',
    },
    stack: [
      'PHP',
      'Laravel',
      'Model Context Protocol (MCP)',
      'AI Agents',
      'LLM Integration',
      'REST APIs',
      'AWS S3',
    ],
    problem:
      "Traditional API integrations provided access to analytics and predefined actionable workflows, but did not expose the full breadth of application's capabilities to AI agents. There was an opportunity to introduce a more capable, context-aware interface through which AI systems could interact with the platform and execute meaningful business operations.",
    solution:
      'Independently designed the architecture and led implementation of the MCP server, connecting AI clients directly to the application. Established a structured interface of resources and tools that exposes existing application capabilities alongside additional internal services, enabling AI agents to understand context, interact with business functionality and orchestrate multi-step workflows.',
    outcome:
      "Successfully launched Poptin's first MCP integration, introducing a new way for AI assistants to interact with the platform beyond conventional API-driven workflows. Enabled agent-driven access to marketing capabilities, including creative campaign development and execution, and published the integration to the official MCP Registry while submitting it to additional registries.",
    previews: [
      {
        id: 'mcp-agentic-flow',
        type: 'component',
        label: 'Agentic Lifecycle: Campaign Orchestration',
        description:
          'Demonstrating what AI agents can accomplish: an end-to-end multi-step workflow where an AI assistant discovers verified domain context, initializes campaign parameters, designs creative content autonomously, and dispatches delivery.',
        highlights: [
          'Multi-step orchestration: Combines resource discovery, tool calls, and managed file uploads into one coherent agentic lifecycle.',
          'Autonomous creative synthesis: The LLM designs email copy and responsive layout internally with zero MCP calls during generation.',
          'Context discovery: Reads verified sending domains via poptin://domains before campaign initialization.',
          'Deterministic execution: Schema-validated tools handle upload instructions, design commitment, and delivery scheduling.',
        ],
      },
      {
        id: 'mcp-beyond-api',
        type: 'component',
        label: 'Beyond API Exposure: Direct Application Integration',
        description:
          'Architectural expansion: Exposing existing application capabilities and internal services directly to AI agents rather than simply wrapping public REST APIs.',
        highlights: [
          'Not a REST wrapper: MCP interacts directly with internal application services, accessing domain logic not exposed via public APIs.',
          'Parallel interaction layers: Public REST APIs remain dedicated to analytics/CRUD while MCP provides an AI-native interface.',
          'Context-aware resources: Exposes structured resources alongside actionable tools for multi-step agent reasoning.',
          'Single application core: Unifies existing business logic, validation, and delivery pipelines across interfaces.',
        ],
      },
      {
        id: 'mcp-client-interoperability',
        type: 'component',
        label: 'Engineering for AI Client Interoperability',
        description:
          'Practical engineering challenges: Solving real-world AI client constraints, sandboxing boundaries, and upload transport interoperability across diverse agent hosts.',
        highlights: [
          'Client sandbox realities: Adapted upload architecture from direct AWS S3 to an MCP-hosted proxy to eliminate client allowlist blocks.',
          'Universal compatibility: Guarantees out-of-the-box execution across Claude Desktop, Cursor, and custom agent runtimes.',
          'Strict schema enforcement: Structured JSON-RPC schemas prevent agent hallucinations and format drift.',
          'Building for realities: Bridges client security boundaries rather than assuming unconstrained network access.',
        ],
      },
    ],
    demo: 'https://www.poptin.com/mcp',
    demoLabel: 'Visit Poptin MCP Product Page →',
    repo: 'https://github.com/Poptin-LTD/Poptin-MCP',
    repoLabel: 'View GitHub Repository →',
  },
  {
    id: 'poptin-campaign-pipeline',
    order: 2,
    title: 'Campaign Processing & Delivery Pipeline Overhaul',
    problemStatement:
      'High-volume email campaign platform experiencing server crashes and slow delivery under load',
    role: 'Senior Backend Engineer',
    context:
      'High-volume email campaign platform experiencing server crashes and slow delivery under load.',
    date: '2026',
    company: {
      name: 'Poptin',
      logo: '/img/logos/poptin.svg',
    },
    stack: ['Laravel', 'AWS SNS', 'AWS SES', 'CloudWatch', 'Redis', 'Horizon'],
    problem:
      'Webhook overload: SNS delivery callbacks performed heavy processing inside HTTP requests, causing long-running connections and rapid resource exhaustion. Sequential campaign sending meant subscribers were processed one-by-one, severely limiting throughput. Lack of memory and batch-level metrics made failures difficult to diagnose. Servers crashed within minutes during peak campaign activity.',
    solution:
      'Webhook decoupling: SNS endpoints now validate and enqueue jobs, returning immediately; all heavy processing runs asynchronously in queues. Campaign delivery refactored from single-subscriber execution to batched, multi-worker parallelism, with controlled batch delays to prevent overload. Introduced memory tracking and batch-level performance metrics for real-time monitoring.',
    outcome:
      '46.6% faster campaign completion and 87.4% higher throughput, with 35.8% faster batch execution and lower per-subscriber processing cost. The refactored pipeline eliminates server crashes and introduces batch-level observability, enabling horizontal scaling through additional workers and larger batch sizes as resources increase.',
    previews: [
      {
        id: 'batch-flow',
        type: 'component',
        label: 'Campaign batch processing flow',
      },
      {
        id: 'arch-before-after',
        type: 'component',
        label: 'Architecture before and after',
      },
      {
        id: 'outcome-metrics',
        type: 'component',
        label: 'Outcome metrics',
      },
    ],
    demo: 'https://poptin.com',
  },
  {
    id: 'gerocare-cloud-migration',
    order: 3,
    title: 'Stabilizing a Healthcare Platform Through Cloud Migration',
    problemStatement:
      'Recurring downtime from shared hosting threatening critical healthcare workflows',
    role: 'Lead Software Engineer',
    context:
      'Healthcare platform supporting time-critical doctor visits, prescriptions, and billing',
    date: '2022',
    company: {
      name: 'Gerocare',
      logo: '/img/logos/gerocare.svg',
    },
    stack: ['Laravel', 'Vue.js', 'Google Cloud', 'Nginx', 'GitHub Actions', 'Cloudflare'],
    problem:
      'The platform ran on shared cPanel hosting, causing frequent outages and failed background jobs. Applications became unreachable during peak usage, directly impacting medical reporting, prescriptions, and billing flows that needed to complete within strict time windows.',
    solution:
      'I led a full migration to Google Cloud Platform, designing a cost-efficient single-VM setup to host all services with Nginx virtual hosts. Databases were consolidated into Cloud SQL, files moved to GCS, and CI/CD pipelines introduced with GitHub Actions. The migration was executed via a planned, low-traffic cutover with rollback safeguards.',
    outcome:
      'Eliminated recurring production downtime. Achieved long-term platform stability with zero data loss. Improved operational reliability across medical, billing, and support teams. Infrastructure remained stable years after implementation.',
    previews: [
      {
        id: 'infrastructure-diagram',
        type: 'component',
        label: 'Infrastructure before and after cloud migration',
      },
      {
        id: 'cutover-diagram',
        type: 'component',
        label: 'Production migration cutover flow',
      },
      {
        id: 'gerocare-outcome',
        type: 'component',
        label: 'Operational metrics and outcomes',
      },
    ],
    demo: 'https://gerocare.org',
  },
  {
    id: 'hypetag-ecommerce-backend',
    order: 4,
    title: 'Luxury Ecommerce Backend: Multi-Currency Pricing + Reliable Checkout',
    problemStatement:
      'High-end fashion ecommerce needed a clean buying experience backed by reliable cart, order, and payment flows across currencies.',
    role: 'Lead Backend Engineer',
    context: 'Luxury fashion ecommerce platform built for a clean storefront UX',
    date: '2023',
    company: {
      name: 'Hypetag',
      logo: '/img/logos/hypetag.svg',
    },
    stack: [
      'Laravel',
      'MySQL',
      'Laravel Scout',
      'Full-text Indexing',
      'DigitalOcean',
      'Cloudinary',
      'Paystack',
    ],
    problem:
      'The platform needed product discovery and checkout to feel effortless, while handling two hard backend realities: (1) building relevant search under cost constraints, and (2) supporting multi-currency display pricing even when the payment gateway can only charge a limited set of currencies - without eroding user trust at checkout.',
    solution:
      'Implemented search with Laravel Scout backed by MySQL full-text indexes, tuning ranking for relevance while keeping infrastructure lean. Built a multi-currency pricing layer using a rates API, with an admin-controlled adjustment (add/subtract) applied on top of base rates for business control. At checkout, enforced clear payment behavior: when a user’s currency couldn’t be charged via the gateway, the system transparently defaulted payment to USD before the user proceeded; supported currencies charged normally. Integrated Cloudinary for media handling and deployed infrastructure on DigitalOcean.',
    outcome:
      'Shipped a production-ready ecommerce backend where discovery and checkout stay stable under real-world constraints: cost-aware search, transparent currency handling, and a consistent order/payment lifecycle that supports growth without compromising user clarity.',
    previews: [
      {
        id: 'search-flow',
        type: 'component',
        label: 'Search + discovery flow (cost-aware)',
      },
      {
        id: 'currency-checkout',
        type: 'component',
        label: 'Multi-currency pricing + checkout transparency',
      },
      {
        id: 'outcome-hypetag',
        type: 'component',
        label: 'Outcome',
      },
    ],
    demo: 'https://hypetag.com',
  },
  {
    id: 'connect-nigeria-platform-backend',
    order: 5,
    title: 'Scalable Directory Platform Backend: Secure Imports + High-Relevance Search',
    problemStatement:
      'A product revamp needed a scalable backend, safe high-volume onboarding, and fast discovery across a growing directory.',
    role: 'Backend Engineer',
    context: 'Platform connecting businesses with customers; included internal operations tooling',
    date: '2022',
    company: {
      name: 'Connect Nigeria',
      logo: '/img/logos/connectnigeria.svg',
    },
    stack: [
      'Laravel',
      'MySQL',
      'Meilisearch',
      'Laravel Scout',
      'Algolia',
      'AWS ElastiCache',
      'AWS S3',
      'GitLab CI/CD',
    ],
    problem:
      'Two backend pain points shaped the rebuild. First was onboarding: field agents uploaded Excel files containing business and product data with inconsistent formatting - requiring heavy cleaning, verification, and deduplication, plus secure file handling. Second was discovery at scale: as listings grew, search needed to stay fast and produce results aligned with business goals (not just naive text matching).',
    solution:
      'Built a robust spreadsheet import pipeline with strict validation, normalization, deduplication safeguards, and secure upload handling to reduce risky/malformed inputs while staying adaptable to changing templates. Championed and implemented a dedicated Meilisearch server for indexing and retrieval via Laravel Scout, adding Meilisearch-specific ranking improvements to better reflect business priorities. Integrated Algolia as a secondary search surface. Supported the platform with Redis (ElastiCache), S3 for media/storage, and automated delivery via GitLab CI/CD.',
    outcome:
      'Unlocked faster, safer onboarding from real-world agent data while keeping duplicate and low-quality entries under control. Delivered fast discovery through dedicated search infrastructure and tuned ranking, helping the revamped product feel snappy as adoption increased and internal teams expanded operational usage (including events and payments workflows).',
    previews: [
      {
        id: 'import-pipeline',
        type: 'component',
        label: 'Secure import pipeline (agents → platform)',
      },
      {
        id: 'search-arch',
        type: 'component',
        label: 'Search architecture + ranking',
      },
      {
        id: 'outcome-connect',
        type: 'component',
        label: 'Outcome',
      },
    ],
    demo: 'https://connectnigeria.com',
  },
]

/** Sorted by order (lower = first). Change each project's order to reorder the list. */
export const projects: Project[] = [...projectsList].sort((a, b) => a.order - b.order)
