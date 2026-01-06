import type { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: 'distributed-api',
    title: 'Distributed API Platform',
    problemStatement: 'Legacy monolithic API struggling with scale and reliability',
    role: 'Lead Backend Engineer',
    context: 'E-commerce platform serving 2M+ daily requests',
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
    id: 'data-pipeline',
    title: 'Real-time Data Processing Pipeline',
    problemStatement: 'Batch processing causing 24-hour delays in analytics',
    role: 'Senior Backend Engineer',
    context: 'Analytics platform processing 50M+ events daily',
    stack: ['Python', 'Apache Kafka', 'Apache Spark', 'ClickHouse', 'AWS S3'],
    problem:
      'The analytics platform relied on nightly batch jobs that processed events with a 24-hour delay. Business teams needed real-time insights for decision-making, and the batch system couldn\'t scale to handle traffic spikes during marketing campaigns.',
    solution:
      'Built a stream processing pipeline using Kafka for event ingestion, Spark Streaming for real-time transformations, and ClickHouse for time-series analytics storage. Implemented exactly-once processing semantics and automated scaling based on queue depth. Added monitoring and alerting for pipeline health.',
    outcome:
      'Reduced data latency from 24 hours to under 5 seconds. Enabled real-time dashboards and alerts. System now handles 3x peak load with auto-scaling. Reduced infrastructure costs by 25% compared to batch processing approach.',
    previews: [
      {
        id: 'pipeline-diagram',
        type: 'diagram',
        label: 'Data pipeline flow',
        content: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="80" width="80" height="40" fill="#361667" rx="4"/>
          <text x="60" y="105" text-anchor="middle" fill="#BEAED3" font-size="11">Event Source</text>
          <rect x="140" y="80" width="80" height="40" fill="#361667" rx="4"/>
          <text x="180" y="105" text-anchor="middle" fill="#BEAED3" font-size="11">Kafka</text>
          <rect x="260" y="80" width="80" height="40" fill="#361667" rx="4"/>
          <text x="300" y="105" text-anchor="middle" fill="#BEAED3" font-size="11">Spark</text>
          <rect x="260" y="20" width="80" height="40" fill="#361667" rx="4"/>
          <text x="300" y="45" text-anchor="middle" fill="#BEAED3" font-size="11">ClickHouse</text>
          <line x1="100" y1="100" x2="140" y2="100" stroke="#BEAED3" stroke-width="2" marker-end="url(#arrowhead)"/>
          <line x1="220" y1="100" x2="260" y2="100" stroke="#BEAED3" stroke-width="2" marker-end="url(#arrowhead)"/>
          <line x1="300" y1="80" x2="300" y2="60" stroke="#BEAED3" stroke-width="2" marker-end="url(#arrowhead)"/>
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="#BEAED3"/>
            </marker>
          </defs>
        </svg>`,
      },
      {
        id: 'latency-metric',
        type: 'metric',
        label: 'Processing latency',
        content: '< 5 seconds (down from 24 hours)',
      },
      {
        id: 'throughput-metric',
        type: 'metric',
        label: 'Event throughput',
        content: '50M+ events/day',
      },
    ],
  },
  {
    id: 'developer-portfolio',
    title: 'Developer Portfolio Website',
    problemStatement: 'Need a modern, performant portfolio to showcase work and attract opportunities',
    role: 'Full Stack Developer',
    context: 'Personal project',
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
