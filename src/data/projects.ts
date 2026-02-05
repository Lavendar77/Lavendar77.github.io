import type { Project } from '@/types/project'

const projectsList: Project[] = [
  {
    id: 'poptin-campaign-pipeline',
    order: 1,
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
      '46.6% faster campaign completion (523s → 279s) and 87.4% higher throughput (1.93 → 3.61 subscribers/sec), with 35.8% faster batch execution and lower per-subscriber processing cost. The refactored pipeline eliminates server crashes and introduces batch-level observability, enabling horizontal scaling through additional workers and larger batch sizes as resources increase.',
    previews: [
      {
        id: 'batch-flow',
        type: 'diagram',
        label: 'Campaign batch processing flow',
        content: `<svg viewBox="0 0 520 580" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Campaign batch processing flowchart">
          <title>Campaign batch processing flowchart</title>
          <text x="260" y="20" text-anchor="middle" font-size="14" fill="#BEAED3">Campaign Batch Processing Flow</text>
          <!-- 1. Campaign trigger (process) -->
          <rect x="160" y="40" width="200" height="34" rx="8" fill="#361667" stroke="#BEAED3" stroke-width="1"/>
          <text x="260" y="62" text-anchor="middle" font-size="11" fill="#BEAED3">1. Campaign trigger</text>
          <line x1="260" y1="74" x2="260" y2="92" stroke="#BEAED3" stroke-width="2"/>
          <polygon points="260,92 256,86 264,86" fill="#BEAED3"/>
          <!-- 2. Lock campaign (process) -->
          <rect x="140" y="98" width="240" height="34" rx="8" fill="#361667" stroke="#BEAED3" stroke-width="1"/>
          <text x="260" y="120" text-anchor="middle" font-size="11" fill="#BEAED3">2. Lock campaign to prevent overlapping</text>
          <line x1="260" y1="132" x2="260" y2="148" stroke="#BEAED3" stroke-width="2"/>
          <polygon points="260,148 256,142 264,142" fill="#BEAED3"/>
          <!-- 3. Decision: Lock acquired? -->
          <polygon points="260,158 310,188 260,218 210,188" fill="#2a2a2a" stroke="#BEAED3" stroke-width="1"/>
          <text x="260" y="182" text-anchor="middle" font-size="10" fill="#BEAED3">Lock</text>
          <text x="260" y="194" text-anchor="middle" font-size="10" fill="#BEAED3">acquired?</text>
          <!-- No → End (terminator) -->
          <line x1="210" y1="188" x2="155" y2="188" stroke="#BEAED3" stroke-width="2"/>
          <polygon points="155,188 161,184 161,192" fill="#BEAED3"/>
          <text x="182" y="182" text-anchor="middle" font-size="9" fill="#b0b0b0">No</text>
          <ellipse cx="95" cy="188" rx="55" ry="22" fill="#2a2a2a" stroke="#b0b0b0" stroke-width="1"/>
          <text x="95" y="193" text-anchor="middle" font-size="11" fill="#e5e5e5">End</text>
          <!-- Yes → 4. Dispatch preparation job -->
          <line x1="260" y1="218" x2="260" y2="238" stroke="#BEAED3" stroke-width="2"/>
          <polygon points="260,238 256,232 264,232" fill="#BEAED3"/>
          <text x="248" y="232" text-anchor="middle" font-size="9" fill="#b0b0b0">Yes</text>
          <rect x="150" y="240" width="220" height="32" rx="8" fill="#361667" stroke="#BEAED3" stroke-width="1"/>
          <text x="260" y="261" text-anchor="middle" font-size="11" fill="#BEAED3">4. Dispatch a preparation job</text>
          <line x1="260" y1="272" x2="260" y2="288" stroke="#BEAED3" stroke-width="2"/>
          <polygon points="260,288 256,282 264,282" fill="#BEAED3"/>
          <!-- 5. Reserve N subscriber IDs -->
          <rect x="130" y="292" width="260" height="32" rx="8" fill="#361667" stroke="#BEAED3" stroke-width="1"/>
          <text x="260" y="313" text-anchor="middle" font-size="10" fill="#BEAED3">5. Reserve N subscriber IDs (Redis pipeline)</text>
          <line x1="260" y1="324" x2="260" y2="340" stroke="#BEAED3" stroke-width="2"/>
          <polygon points="260,340 256,334 264,334" fill="#BEAED3"/>
          <!-- 6. Chunk the IDs -->
          <rect x="150" y="344" width="220" height="32" rx="8" fill="#361667" stroke="#BEAED3" stroke-width="1"/>
          <text x="260" y="365" text-anchor="middle" font-size="11" fill="#BEAED3">6. Chunk IDs into N jobs</text>
          <line x1="260" y1="376" x2="260" y2="392" stroke="#BEAED3" stroke-width="2"/>
          <polygon points="260,392 256,386 264,386" fill="#BEAED3"/>
          <!-- 7. Each chunk processes -->
          <rect x="150" y="396" width="220" height="32" rx="8" fill="#361667" stroke="#BEAED3" stroke-width="1"/>
          <text x="260" y="417" text-anchor="middle" font-size="11" fill="#BEAED3">7. Each chunk processes subscribers</text>
          <line x1="260" y1="428" x2="260" y2="444" stroke="#BEAED3" stroke-width="2"/>
          <polygon points="260,444 256,438 264,438" fill="#BEAED3"/>
          <!-- 8. Decision: Subscribers left? -->
          <polygon points="260,454 308,482 260,510 212,482" fill="#2a2a2a" stroke="#BEAED3" stroke-width="1"/>
          <text x="260" y="478" text-anchor="middle" font-size="10" fill="#BEAED3">Subscribers</text>
          <text x="260" y="490" text-anchor="middle" font-size="10" fill="#BEAED3">left?</text>
          <!-- No → 10. Mark campaign as complete (process) -->
          <line x1="260" y1="510" x2="260" y2="532" stroke="#BEAED3" stroke-width="2"/>
          <polygon points="260,532 256,526 264,526" fill="#BEAED3"/>
          <text x="248" y="526" text-anchor="middle" font-size="9" fill="#b0b0b0">No</text>
          <rect x="140" y="536" width="240" height="32" rx="8" fill="#361667" stroke="#BEAED3" stroke-width="1"/>
          <text x="260" y="557" text-anchor="middle" font-size="11" fill="#BEAED3">10. Mark campaign as complete</text>
          <!-- Yes → 9. Wait N seconds → repeat from step 4 -->
          <line x1="308" y1="482" x2="338" y2="482" stroke="#BEAED3" stroke-width="2"/>
          <polygon points="338,482 332,478 332,486" fill="#BEAED3"/>
          <text x="323" y="476" text-anchor="middle" font-size="9" fill="#b0b0b0">Yes</text>
          <rect x="338" y="468" width="130" height="28" rx="8" fill="#2a2a2a" stroke="#b0b0b0" stroke-width="1"/>
          <text x="403" y="486" text-anchor="middle" font-size="10" fill="#e5e5e5">9. Wait N seconds</text>
          <path d="M 403 468 L 403 256 L 370 256 L 370 255" fill="none" stroke="#BEAED3" stroke-width="2"/>
          <polygon points="370,255 376,252 376,261" fill="#BEAED3"/>
          <text x="425" y="358" text-anchor="middle" font-size="9" fill="#b0b0b0">repeat</text>
        </svg>`,
      },
      {
        id: 'arch-before-after',
        type: 'diagram',
        label: 'Architecture before and after',
        content: `<svg viewBox="0 0 560 272" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Architecture before and after">
          <!-- BEFORE (left) -->
          <rect x="8" y="12" width="260" height="248" rx="10" fill="none" stroke="#b0b0b0" stroke-width="2"/>
          <text x="138" y="32" text-anchor="middle" font-size="12" fill="#b0b0b0">BEFORE</text>
          <rect x="38" y="44" width="200" height="26" rx="6" fill="#2a2a2a" stroke="#b0b0b0" stroke-width="1"/>
          <text x="138" y="61" text-anchor="middle" font-size="10" fill="#e5e5e5">Campaign Send</text>
          <line x1="138" y1="70" x2="138" y2="78" stroke="#b0b0b0" stroke-width="2"/>
          <polygon points="138,78 134,72 142,72" fill="#b0b0b0"/>
          <rect x="38" y="80" width="200" height="26" rx="6" fill="#2a2a2a" stroke="#b0b0b0" stroke-width="1"/>
          <text x="138" y="97" text-anchor="middle" font-size="10" fill="#e5e5e5">SES Send</text>
          <line x1="138" y1="106" x2="138" y2="114" stroke="#b0b0b0" stroke-width="2"/>
          <polygon points="138,114 134,108 142,108" fill="#b0b0b0"/>
          <rect x="38" y="116" width="200" height="26" rx="6" fill="#2a2a2a" stroke="#b0b0b0" stroke-width="1"/>
          <text x="138" y="133" text-anchor="middle" font-size="10" fill="#e5e5e5">SNS Event</text>
          <line x1="138" y1="142" x2="138" y2="150" stroke="#b0b0b0" stroke-width="2"/>
          <polygon points="138,150 134,144 142,144" fill="#b0b0b0"/>
          <rect x="18" y="152" width="240" height="26" rx="6" fill="#4a2a2a" stroke="#b0b0b0" stroke-width="1"/>
          <text x="138" y="169" text-anchor="middle" font-size="10" fill="#e5e5e5">Webhook (heavy processing)</text>
          <line x1="138" y1="178" x2="138" y2="186" stroke="#b0b0b0" stroke-width="2"/>
          <polygon points="138,186 134,180 142,180" fill="#b0b0b0"/>
          <rect x="18" y="188" width="240" height="26" rx="6" fill="#2a2a2a" stroke="#b0b0b0" stroke-width="1"/>
          <text x="138" y="205" text-anchor="middle" font-size="10" fill="#e5e5e5">DB writes + campaign state updates</text>
          <line x1="138" y1="214" x2="138" y2="222" stroke="#b0b0b0" stroke-width="2"/>
          <polygon points="138,222 134,216 142,216" fill="#b0b0b0"/>
          <rect x="48" y="224" width="180" height="26" rx="6" fill="#3a2a2a" stroke="#c06060" stroke-width="1"/>
          <text x="138" y="241" text-anchor="middle" font-size="10" fill="#e08080">❌ Server overload</text>
          <!-- Arrow right (horizontal transition) -->
          <line x1="268" y1="136" x2="292" y2="136" stroke="#BEAED3" stroke-width="3"/>
          <polygon points="292,136 286,132 286,140" fill="#BEAED3"/>
          <!-- AFTER (right) -->
          <rect x="300" y="12" width="252" height="248" rx="10" fill="none" stroke="#BEAED3" stroke-width="2"/>
          <text x="426" y="32" text-anchor="middle" font-size="12" fill="#BEAED3">AFTER</text>
          <rect x="326" y="44" width="200" height="26" rx="6" fill="#361667" stroke="#BEAED3" stroke-width="1"/>
          <text x="426" y="61" text-anchor="middle" font-size="10" fill="#BEAED3">Campaign Send</text>
          <line x1="426" y1="70" x2="426" y2="78" stroke="#BEAED3" stroke-width="2"/>
          <polygon points="426,78 422,72 430,72" fill="#BEAED3"/>
          <rect x="326" y="80" width="200" height="26" rx="6" fill="#361667" stroke="#BEAED3" stroke-width="1"/>
          <text x="426" y="97" text-anchor="middle" font-size="10" fill="#BEAED3">SES Send</text>
          <line x1="426" y1="106" x2="426" y2="114" stroke="#BEAED3" stroke-width="2"/>
          <polygon points="426,114 422,108 430,108" fill="#BEAED3"/>
          <rect x="326" y="116" width="200" height="26" rx="6" fill="#361667" stroke="#BEAED3" stroke-width="1"/>
          <text x="426" y="133" text-anchor="middle" font-size="10" fill="#BEAED3">SNS Event</text>
          <line x1="426" y1="142" x2="426" y2="150" stroke="#BEAED3" stroke-width="2"/>
          <polygon points="426,150 422,144 430,144" fill="#BEAED3"/>
          <rect x="316" y="152" width="220" height="26" rx="6" fill="#361667" stroke="#BEAED3" stroke-width="1"/>
          <text x="426" y="169" text-anchor="middle" font-size="10" fill="#BEAED3">Webhook (validate + enqueue)</text>
          <line x1="426" y1="178" x2="426" y2="186" stroke="#BEAED3" stroke-width="2"/>
          <polygon points="426,186 422,180 430,180" fill="#BEAED3"/>
          <rect x="316" y="188" width="220" height="26" rx="6" fill="#361667" stroke="#BEAED3" stroke-width="1"/>
          <text x="426" y="205" text-anchor="middle" font-size="10" fill="#BEAED3">Queue Workers (async processing)</text>
          <line x1="426" y1="214" x2="426" y2="222" stroke="#BEAED3" stroke-width="2"/>
          <polygon points="426,222 422,216 430,216" fill="#BEAED3"/>
          <rect x="346" y="224" width="160" height="26" rx="6" fill="#361667" stroke="#BEAED3" stroke-width="1"/>
          <text x="426" y="241" text-anchor="middle" font-size="10" fill="#BEAED3">DB / metrics / campaign state</text>
        </svg>`,
      },
      {
        id: 'outcome-metrics',
        type: 'diagram',
        label: 'Outcome metrics',
        content: `<svg viewBox="0 0 420 260" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="8" width="404" height="244" rx="14" fill="none" stroke="#BEAED3" stroke-width="2"/>
          <text x="210" y="36" text-anchor="middle" font-size="14" fill="#BEAED3" font-weight="600">Outcome</text>
          <foreignObject x="24" y="48" width="372" height="216">
            <div xmlns="http://www.w3.org/1999/xhtml" style="font-size: 12px; color: #e5e5e5; line-height: 1.5; text-align: justify; margin: 0; font-family: inherit;">
              <p style="margin: 0 0 0.75em 0;">• 46.6% faster campaign completion via parallel SES batch sending.</p>
              <p style="margin: 0 0 0.75em 0;">• 87.4% higher throughput while keeping SNS callbacks lightweight.</p>
              <p style="margin: 0 0 0.75em 0;">• Zero crashes during high-volume campaigns with SNS feedback enabled.</p>
              <p style="margin: 0;">• Architecture supports linear throughput scaling via additional workers and batch tuning.</p>
            </div>
          </foreignObject>
        </svg>`,
      },
    ],
    demo: 'https://poptin.com',
  },
  {
    id: 'gerocare-cloud-migration',
    order: 2,
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
]

/** Sorted by order (lower = first). Change each project's order to reorder the list. */
export const projects: Project[] = [...projectsList].sort((a, b) => a.order - b.order)
