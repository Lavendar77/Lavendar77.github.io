import type { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: 'gerocare-cloud-migration',
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
        type: 'diagram',
        label: 'Infrastructure before and after cloud migration',
        content: `<svg viewBox="0 0 900 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Infrastructure before and after cloud migration">
          <!-- BEFORE -->
          <g transform="translate(40,40)">
            <rect width="320" height="320" rx="12" fill="none" stroke="#b0b0b0" stroke-width="2"/>
            <text x="160" y="20" text-anchor="middle" font-size="14" fill="#b0b0b0">
              BEFORE — Shared Hosting (cPanel)
            </text>

            <!-- Apps -->
            <rect x="40" y="50" width="240" height="36" rx="6" fill="#2a2a2a" stroke="#3a3a3a" stroke-width="1"/>
            <text x="160" y="73" text-anchor="middle" font-size="12" fill="#e5e5e5">Laravel App (Main)</text>

            <rect x="40" y="100" width="240" height="36" rx="6" fill="#2a2a2a" stroke="#3a3a3a" stroke-width="1"/>
            <text x="160" y="123" text-anchor="middle" font-size="12" fill="#e5e5e5">Laravel App (CRM)</text>

            <rect x="40" y="150" width="240" height="36" rx="6" fill="#2a2a2a" stroke="#3a3a3a" stroke-width="1"/>
            <text x="160" y="173" text-anchor="middle" font-size="12" fill="#e5e5e5">Vue Frontend</text>

            <rect x="40" y="200" width="240" height="36" rx="6" fill="#2a2a2a" stroke="#3a3a3a" stroke-width="1"/>
            <text x="160" y="223" text-anchor="middle" font-size="12" fill="#e5e5e5">MySQL Database</text>

            <rect x="40" y="250" width="240" height="36" rx="6" fill="#2a2a2a" stroke="#3a3a3a" stroke-width="1"/>
            <text x="160" y="273" text-anchor="middle" font-size="12" fill="#e5e5e5">Cron Jobs</text>
          </g>

          <!-- ARROW -->
          <line x1="400" y1="210" x2="500" y2="210" stroke="#BEAED3" stroke-width="3"/>
          <polygon points="500,210 490,204 490,216" fill="#BEAED3"/>

          <!-- AFTER -->
          <g transform="translate(540,40)">
            <rect width="320" height="320" rx="12" fill="none" stroke="#BEAED3" stroke-width="2"/>
            <text x="160" y="20" text-anchor="middle" font-size="14" fill="#BEAED3">
              AFTER — Google Cloud Platform
            </text>

            <!-- Compute Engine -->
            <rect x="30" y="40" width="260" height="160" rx="10" fill="none" stroke="#BEAED3" stroke-width="2"/>
            <text x="160" y="58" text-anchor="middle" font-size="12" fill="#e5e5e5">Compute Engine (VM)</text>

            <!-- Nginx -->
            <rect x="50" y="70" width="220" height="28" rx="6" fill="#361667" stroke="#BEAED3" stroke-width="1"/>
            <text x="160" y="89" text-anchor="middle" font-size="12" fill="#BEAED3">Nginx</text>

            <!-- Apps -->
            <rect x="50" y="108" width="220" height="28" rx="6" fill="#361667" stroke="#BEAED3" stroke-width="1"/>
            <text x="160" y="127" text-anchor="middle" font-size="12" fill="#BEAED3">Laravel App (Main)</text>

            <rect x="50" y="140" width="220" height="28" rx="6" fill="#361667" stroke="#BEAED3" stroke-width="1"/>
            <text x="160" y="159" text-anchor="middle" font-size="12" fill="#BEAED3">Laravel App (CRM)</text>

            <rect x="50" y="172" width="220" height="28" rx="6" fill="#361667" stroke="#BEAED3" stroke-width="1"/>
            <text x="160" y="191" text-anchor="middle" font-size="12" fill="#BEAED3">Vue Frontend</text>

            <!-- Data -->
            <rect x="30" y="220" width="120" height="60" rx="8" fill="none" stroke="#BEAED3" stroke-width="2"/>
            <text x="90" y="252" text-anchor="middle" font-size="12" fill="#e5e5e5">Cloud SQL</text>

            <rect x="170" y="220" width="120" height="60" rx="8" fill="none" stroke="#BEAED3" stroke-width="2"/>
            <text x="230" y="252" text-anchor="middle" font-size="12" fill="#e5e5e5">GCS</text>
          </g>
        </svg>`,
      },
      {
        id: 'cutover-diagram',
        type: 'diagram',
        label: 'Production migration cutover flow',
        content: `<svg viewBox="0 0 900 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Production migration cutover flow">
          <!-- Title -->
          <text x="450" y="24" text-anchor="middle" font-size="14" fill="#BEAED3">
            Migration Cutover &amp; Rollback Strategy
          </text>

          <!-- Step 1 -->
          <rect x="40" y="80" width="160" height="60" rx="8" fill="#2a2a2a" stroke="#3a3a3a" stroke-width="1"/>
          <text x="120" y="110" text-anchor="middle" font-size="12" fill="#e5e5e5">Legacy cPanel</text>

          <!-- Arrow -->
          <line x1="200" y1="110" x2="260" y2="110" stroke="#BEAED3" stroke-width="2"/>
          <polygon points="260,110 254,106 254,114" fill="#BEAED3"/>

          <!-- Step 2 -->
          <rect x="260" y="80" width="160" height="60" rx="8" fill="#2a2a2a" stroke="#3a3a3a" stroke-width="1"/>
          <text x="340" y="110" text-anchor="middle" font-size="12" fill="#e5e5e5">GCP Staging</text>

          <!-- Arrow -->
          <line x1="420" y1="110" x2="480" y2="110" stroke="#BEAED3" stroke-width="2"/>
          <polygon points="480,110 474,106 474,114" fill="#BEAED3"/>

          <!-- Step 3 -->
          <rect x="480" y="80" width="160" height="60" rx="8" fill="#2a2a2a" stroke="#3a3a3a" stroke-width="1"/>
          <text x="560" y="110" text-anchor="middle" font-size="12" fill="#e5e5e5">Database Migration</text>

          <!-- Arrow -->
          <line x1="640" y1="110" x2="700" y2="110" stroke="#BEAED3" stroke-width="2"/>
          <polygon points="700,110 694,106 694,114" fill="#BEAED3"/>

          <!-- Step 4 -->
          <rect x="700" y="80" width="160" height="60" rx="8" fill="#361667" stroke="#BEAED3" stroke-width="2"/>
          <text x="780" y="110" text-anchor="middle" font-size="12" fill="#BEAED3">Cloudflare DNS Switch</text>

          <!-- Rollback -->
          <line x1="780" y1="140" x2="120" y2="180" stroke="#b0b0b0" stroke-dasharray="4" stroke-width="1.5"/>
          <text x="450" y="200" text-anchor="middle" font-size="11" fill="#b0b0b0">
            Rollback Path (Legacy kept live during monitoring)
          </text>
        </svg>`,
      },
      {
        id: 'outcome-metrics',
        type: 'diagram',
        label: 'Operational metrics and outcomes',
        content: `<svg viewBox="0 0 360 180" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="8" width="344" height="164" rx="14" fill="none" stroke="#BEAED3" stroke-width="2"/>
          <text x="180" y="36" text-anchor="middle" font-size="14" fill="#BEAED3" font-weight="600">Outcome</text>
          <g font-size="12" fill="#e5e5e5">
            <text x="32" y="68">• ~40% faster application load times</text>
            <text x="32" y="92">• 25% fewer deployment errors</text>
            <text x="32" y="116">• Zero data loss during migration</text>
            <text x="32" y="140">• Sustained production uptime</text>
          </g>
        </svg>`,
      },
    ],
    demo: 'https://gerocare.org',
  },
  {
    id: 'distributed-api',
    title: 'Distributed API Platform',
    problemStatement: 'Legacy monolithic API struggling with scale and reliability',
    role: 'Lead Backend Engineer',
    context: 'E-commerce platform serving 2M+ daily requests',
    date: '2023',
    company: {
      name: 'TechCorp',
    },
    stack: ['TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes'],
    problem:
      'The existing monolithic API was experiencing frequent downtime during peak traffic, with response times degrading to 5+ seconds. Database connection pooling was insufficient, and the single point of failure architecture meant any service issue brought down the entire platform.',
    solution:
      'Designed and implemented a microservices architecture with API gateway routing, horizontal scaling via Kubernetes, and Redis-based caching layer. Introduced database read replicas and connection pooling optimization. Implemented circuit breakers and retry logic for external service calls.',
    outcome:
      'Achieved 99.9% uptime, reduced average response time from 2.1s to 180ms, and enabled the platform to handle 10x traffic spikes without degradation. Cost reduction of 40% through efficient resource allocation.',
    previews: [
      {
        id: 'arch-diagram',
        type: 'diagram',
        label: 'System architecture diagram',
        content: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
          <rect x="50" y="50" width="100" height="60" fill="#361667" rx="4"/>
          <text x="100" y="85" text-anchor="middle" fill="#BEAED3" font-size="12">API Gateway</text>
          <rect x="200" y="50" width="100" height="60" fill="#361667" rx="4"/>
          <text x="250" y="85" text-anchor="middle" fill="#BEAED3" font-size="12">Service A</text>
          <rect x="200" y="150" width="100" height="60" fill="#361667" rx="4"/>
          <text x="250" y="185" text-anchor="middle" fill="#BEAED3" font-size="12">Service B</text>
          <rect x="50" y="200" width="100" height="60" fill="#361667" rx="4"/>
          <text x="100" y="235" text-anchor="middle" fill="#BEAED3" font-size="12">Redis Cache</text>
          <rect x="200" y="200" width="100" height="60" fill="#361667" rx="4"/>
          <text x="250" y="235" text-anchor="middle" fill="#BEAED3" font-size="12">PostgreSQL</text>
          <line x1="150" y1="80" x2="200" y2="80" stroke="#BEAED3" stroke-width="2"/>
          <line x1="250" y1="110" x2="250" y2="150" stroke="#BEAED3" stroke-width="2"/>
          <line x1="150" y1="230" x2="200" y2="230" stroke="#BEAED3" stroke-width="2"/>
        </svg>`,
      },
      {
        id: 'metric-1',
        type: 'metric',
        label: 'Response time improvement',
        content: '180ms avg (down from 2.1s)',
      },
      {
        id: 'metric-2',
        type: 'metric',
        label: 'Uptime achievement',
        content: '99.9% availability',
      },
      {
        id: 'code-sample',
        type: 'code',
        label: 'Circuit breaker implementation',
        content: `class CircuitBreaker {
  private failures = 0
  private state: 'closed' | 'open' | 'half-open' = 'closed'

  async execute<T>(fn: () => Promise<T>): Promise<T> {
    if (this.state === 'open') {
      throw new Error('Circuit breaker is open')
    }
    try {
      const result = await fn()
      this.onSuccess()
      return result
    } catch (error) {
      this.onFailure()
      throw error
    }
  }
}`,
      },
    ],
  },
  {
    id: 'developer-portfolio',
    title: 'Developer Portfolio Website',
    problemStatement:
      'Need a modern, performant portfolio to showcase work and attract opportunities',
    role: 'Full Stack Developer',
    context: 'Personal project',
    date: '2024',
    company: {
      name: 'Personal',
    },
    stack: ['Vue.js', 'TypeScript', 'Vite', 'Tailwind CSS'],
    problem:
      "Traditional portfolio websites are often bloated, slow, and don't effectively communicate technical skills. Many developers struggle to create a portfolio that balances visual appeal with performance and accessibility.",
    solution:
      'Built a minimalist, typography-driven portfolio using Vue 3 Composition API and Tailwind CSS. Implemented a compact, expandable project layout with progressive disclosure. Optimized for performance with lazy loading, semantic HTML, and achieving 95+ Lighthouse scores. Designed with dark mode by default and full keyboard accessibility.',
    outcome:
      'Created a fast, accessible portfolio that effectively showcases projects and technical expertise. Achieved 100/100 Lighthouse performance score, full keyboard navigation support, and responsive design across all devices.',
    previews: [
      {
        id: 'portfolio-metric',
        type: 'metric',
        label: 'Lighthouse Performance',
        content: '100/100',
      },
      {
        id: 'portfolio-diagram',
        type: 'diagram',
        label: 'Component architecture',
        content: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
          <rect x="50" y="50" width="120" height="60" fill="#361667" rx="4"/>
          <text x="110" y="85" text-anchor="middle" fill="#BEAED3" font-size="11">App.vue</text>
          <rect x="230" y="50" width="120" height="60" fill="#361667" rx="4"/>
          <text x="290" y="85" text-anchor="middle" fill="#BEAED3" font-size="11">Sections</text>
          <rect x="50" y="150" width="120" height="60" fill="#361667" rx="4"/>
          <text x="110" y="185" text-anchor="middle" fill="#BEAED3" font-size="11">Components</text>
          <rect x="230" y="150" width="120" height="60" fill="#361667" rx="4"/>
          <text x="290" y="185" text-anchor="middle" fill="#BEAED3" font-size="11">Utils</text>
          <line x1="170" y1="80" x2="230" y2="80" stroke="#BEAED3" stroke-width="2"/>
          <line x1="110" y1="110" x2="110" y2="150" stroke="#BEAED3" stroke-width="2"/>
          <line x1="290" y1="110" x2="290" y2="150" stroke="#BEAED3" stroke-width="2"/>
        </svg>`,
      },
    ],
    demo: 'https://lavendar77.github.io',
  },
]
