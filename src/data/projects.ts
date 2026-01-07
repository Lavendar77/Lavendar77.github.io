import type { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: 'gerocare-cloud-migration',
    title: 'Stabilizing a Healthcare Platform Through Cloud Migration',
    problemStatement: 'Recurring downtime from shared hosting threatening critical healthcare workflows',
    role: 'Lead Software Engineer',
    context: 'Healthcare platform supporting time-critical doctor visits, prescriptions, and billing',
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
        id: 'migration-diagram',
        type: 'diagram',
        label: 'Cloud migration architecture',
        content: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="50" width="120" height="60" fill="#361667" rx="4"/>
          <text x="80" y="85" text-anchor="middle" fill="#BEAED3" font-size="11">cPanel Hosting</text>
          <text x="80" y="100" text-anchor="middle" fill="#BEAED3" font-size="9">(Legacy)</text>
          <line x1="140" y1="80" x2="200" y2="80" stroke="#BEAED3" stroke-width="2" marker-end="url(#arrowhead)"/>
          <rect x="200" y="50" width="120" height="60" fill="#361667" rx="4"/>
          <text x="260" y="85" text-anchor="middle" fill="#BEAED3" font-size="11">GCP VM</text>
          <text x="260" y="100" text-anchor="middle" fill="#BEAED3" font-size="9">(Nginx)</text>
          <rect x="200" y="150" width="120" height="60" fill="#361667" rx="4"/>
          <text x="260" y="185" text-anchor="middle" fill="#BEAED3" font-size="11">Cloud SQL</text>
          <line x1="260" y1="110" x2="260" y2="150" stroke="#BEAED3" stroke-width="2"/>
          <rect x="200" y="230" width="120" height="60" fill="#361667" rx="4"/>
          <text x="260" y="265" text-anchor="middle" fill="#BEAED3" font-size="11">GCS</text>
          <line x1="260" y1="210" x2="260" y2="230" stroke="#BEAED3" stroke-width="2"/>
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="#BEAED3"/>
            </marker>
          </defs>
        </svg>`,
      },
      {
        id: 'uptime-metric',
        type: 'metric',
        label: 'Downtime elimination',
        content: 'Zero recurring outages',
      },
      {
        id: 'stability-metric',
        type: 'metric',
        label: 'Platform stability',
        content: 'Years of stable operation',
      },
      {
        id: 'data-metric',
        type: 'metric',
        label: 'Data integrity',
        content: 'Zero data loss',
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
    problemStatement: 'Need a modern, performant portfolio to showcase work and attract opportunities',
    role: 'Full Stack Developer',
    context: 'Personal project',
    date: '2024',
    company: {
      name: 'Personal',
    },
    stack: ['Vue.js', 'TypeScript', 'Vite', 'Tailwind CSS'],
    problem:
      'Traditional portfolio websites are often bloated, slow, and don\'t effectively communicate technical skills. Many developers struggle to create a portfolio that balances visual appeal with performance and accessibility.',
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
