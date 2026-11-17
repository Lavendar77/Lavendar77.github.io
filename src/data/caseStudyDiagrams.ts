export interface FlowStep {
  type: 'step'
  n: string
  title: string
  detail?: string
}

export interface FlowDecision {
  type: 'decision'
  question: string
  yes: string
  no: string
}

export interface CompareColumn {
  label: string
  title: string
  items?: string[]
  groups?: { label: string; items: string[] }[]
  aside?: string[]
  result: string
}

export interface DiagramStat {
  value: string
  label: string
}

interface DiagramFrame {
  kicker: string
  title: string
  badge: string
}

export type CaseStudyDiagram =
  | {
      kind: 'flow'
      frame: DiagramFrame
      steps: Array<FlowStep | FlowDecision>
    }
  | {
      kind: 'compare'
      frame: DiagramFrame
      before: CompareColumn
      after: CompareColumn
    }
  | {
      kind: 'pipeline'
      frame: DiagramFrame
      nodes: { title: string; detail?: string; accent?: boolean }[]
      note?: string
    }
  | {
      kind: 'metrics'
      frame: DiagramFrame
      stats?: DiagramStat[]
      points?: string[]
    }

export const caseStudyDiagrams: Record<string, CaseStudyDiagram> = {
  'batch-flow': {
    kind: 'flow',
    frame: {
      kicker: 'Delivery pipeline',
      title:
        'Subscribers move in batches, with a lock so two workers never send the same campaign.',
      badge: 'Batch flow',
    },
    steps: [
      { type: 'step', n: '1', title: 'Campaign trigger' },
      { type: 'step', n: '2', title: 'Lock the campaign', detail: 'Prevents overlapping sends.' },
      {
        type: 'decision',
        question: 'Lock acquired?',
        yes: 'Continue into preparation.',
        no: 'Stop. Another worker already owns this campaign.',
      },
      { type: 'step', n: '4', title: 'Dispatch a preparation job' },
      {
        type: 'step',
        n: '5',
        title: 'Reserve N subscriber IDs',
        detail: 'Claimed through a Redis pipeline.',
      },
      { type: 'step', n: '6', title: 'Chunk those IDs into N jobs' },
      { type: 'step', n: '7', title: 'Each chunk sends its subscribers' },
      {
        type: 'decision',
        question: 'Subscribers left?',
        yes: 'Wait N seconds, then repeat from dispatch.',
        no: 'Mark the campaign complete.',
      },
    ],
  },
  'arch-before-after': {
    kind: 'compare',
    frame: {
      kicker: 'Webhook path',
      title: 'Heavy SNS work left the request and moved onto queue workers.',
      badge: 'Before / after',
    },
    before: {
      label: 'Before',
      title: 'Work inside the HTTP request',
      items: [
        'Campaign send',
        'SES send',
        'SNS event',
        'Webhook does the heavy processing',
        'DB writes and campaign state',
      ],
      result: 'Servers crashed within minutes at peak.',
    },
    after: {
      label: 'After',
      title: 'Request returns, workers finish the job',
      items: [
        'Campaign send',
        'SES send',
        'SNS event',
        'Webhook validates and enqueues',
        'Queue workers process asynchronously',
        'DB, metrics, and campaign state',
      ],
      result: 'Callbacks stay light. Throughput scales with workers.',
    },
  },
  'outcome-metrics': {
    kind: 'metrics',
    frame: {
      kicker: 'Measured result',
      title: 'Same campaign volume, without taking the web tier down.',
      badge: 'Outcome',
    },
    stats: [
      { value: '46.6%', label: 'Faster campaign completion' },
      { value: '87.4%', label: 'Higher send throughput' },
      { value: '35.8%', label: 'Faster batch execution' },
      { value: '0', label: 'Crashes with SNS feedback enabled' },
    ],
  },
  'infrastructure-diagram': {
    kind: 'compare',
    frame: {
      kicker: 'Hosting',
      title: 'One shared cPanel box became a small, deliberate GCP layout.',
      badge: 'Infrastructure',
    },
    before: {
      label: 'Before',
      title: 'Shared hosting',
      items: [
        'Laravel app · main',
        'Laravel app · CRM',
        'Vue frontend',
        'MySQL on the same machine',
        'Cron jobs',
      ],
      result: 'Outages and failed jobs during peak clinical hours.',
    },
    after: {
      label: 'After',
      title: 'Google Cloud',
      groups: [
        {
          label: 'Compute Engine',
          items: ['Nginx', 'Laravel · main', 'Laravel · CRM', 'Vue frontend'],
        },
      ],
      aside: ['Cloud SQL', 'Cloud Storage'],
      result: 'Cut over in a quiet window, with a rollback path kept ready.',
    },
  },
  'cutover-diagram': {
    kind: 'pipeline',
    frame: {
      kicker: 'Cutover',
      title: 'Traffic moved only after staging and the database were already proven.',
      badge: 'Migration',
    },
    nodes: [
      { title: 'Legacy cPanel', detail: 'Stays live' },
      { title: 'GCP staging', detail: 'Full rehearsal' },
      { title: 'Database move', detail: 'Cloud SQL' },
      { title: 'DNS switch', detail: 'Cloudflare', accent: true },
    ],
    note: 'Rollback stays open: legacy hosting is kept up through the monitoring window.',
  },
  'gerocare-outcome': {
    kind: 'metrics',
    frame: {
      kicker: 'Measured result',
      title: 'The platform stayed up for the teams who depend on it during a visit.',
      badge: 'Outcome',
    },
    stats: [
      { value: '~40%', label: 'Faster application load times' },
      { value: '25%', label: 'Fewer deployment errors' },
      { value: '0', label: 'Data loss during cutover' },
      { value: 'Years', label: 'Of stable production after the move' },
    ],
  },
  'search-flow': {
    kind: 'flow',
    frame: {
      kicker: 'Discovery',
      title: 'Search stays inside MySQL so relevance does not require another cluster.',
      badge: 'Search',
    },
    steps: [
      { type: 'step', n: '1', title: 'Shopper query', detail: 'Handed to Laravel Scout.' },
      {
        type: 'step',
        n: '2',
        title: 'MySQL full-text ranking',
        detail: 'Tuned for relevance, not a separate search bill.',
      },
      { type: 'step', n: '3', title: 'Paginated results', detail: 'Returned to the storefront.' },
    ],
  },
  'currency-checkout': {
    kind: 'flow',
    frame: {
      kicker: 'Checkout',
      title: 'Prices can display in many currencies. The charge currency is never a surprise.',
      badge: 'Currency',
    },
    steps: [
      {
        type: 'step',
        n: '1',
        title: 'Display price',
        detail: 'Rates API, plus an admin adjustment on top of the base rate.',
      },
      {
        type: 'decision',
        question: 'Can the gateway charge this currency?',
        yes: 'Charge it as shown.',
        no: 'Tell the shopper, then charge USD before they pay.',
      },
      {
        type: 'step',
        n: '3',
        title: 'Payment updates the order',
        detail: 'One lifecycle either way.',
      },
    ],
  },
  'outcome-hypetag': {
    kind: 'metrics',
    frame: {
      kicker: 'What shipped',
      title: 'Discovery and checkout stay understandable under real payment limits.',
      badge: 'Outcome',
    },
    points: [
      'Relevant search without a dedicated search cluster.',
      'Currency is explained before the shopper is charged.',
      'Orders and payments follow one webhook-safe lifecycle.',
    ],
  },
  'import-pipeline': {
    kind: 'pipeline',
    frame: {
      kicker: 'Onboarding',
      title: 'Agent spreadsheets are cleaned before they can become listings.',
      badge: 'Import',
    },
    nodes: [
      { title: 'Excel upload', detail: 'Field agents' },
      { title: 'Validate', detail: 'Shape and types', accent: true },
      { title: 'Dedupe', detail: 'Block repeats', accent: true },
      { title: 'Stage import', detail: 'Then commit', accent: true },
    ],
    note: 'Templates can change. Malformed files do not land straight in the directory.',
  },
  'search-arch': {
    kind: 'flow',
    frame: {
      kicker: 'Discovery',
      title: 'Scout stays the interface. Ranking lives on a dedicated search server.',
      badge: 'Search',
    },
    steps: [
      { type: 'step', n: '1', title: 'Laravel Scout', detail: 'Application-facing search API.' },
      {
        type: 'step',
        n: '2',
        title: 'Meilisearch',
        detail: 'Dedicated index, with ranking tuned to the business.',
      },
      {
        type: 'step',
        n: '3',
        title: 'Algolia',
        detail: 'Secondary surface, not the primary index.',
      },
    ],
  },
  'outcome-connect': {
    kind: 'metrics',
    frame: {
      kicker: 'What shipped',
      title: 'Onboarding got safer, and search stayed fast as the directory grew.',
      badge: 'Outcome',
    },
    points: [
      'Messy agent spreadsheets no longer become duplicate listings.',
      'Discovery uses a dedicated index and tuned ranking.',
      'The same backend carries internal events and payments.',
    ],
  },
}
