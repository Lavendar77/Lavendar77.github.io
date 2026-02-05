import type { SpecialMention } from '@/types/project'

const specialMentionsList: SpecialMention[] = [
  {
    id: 'afrostream',
    order: 1,
    name: 'Afrostream',
    role: 'Team Lead',
    summary: 'Subscription Video-on-Demand for Afrocentric content, built for global launch.',
    bullets: [
      'Led a team of 7 developers across web and mobile.',
      'Owned backend and video pipeline (ingest, encode, CDN, player).',
      'Delivered platform to launch; operated until company wind-down.',
    ],
    stack: ['Laravel', 'Vue.js', 'AWS CloudFront', 'S3', 'SQS', 'MediaConvert', 'SNS', 'Video.js'],
    noLongerLive: true,
  },
  {
    id: 'ksbtech',
    order: 2,
    name: 'KSBTech',
    role: 'Contract Backend Engineer',
    summary:
      'Backend rebuild for a crypto/digital-asset trading product: migration off Firebase and a new Laravel application.',
    bullets: [
      'Migrated Firebase data to MySQL with no data loss.',
      'Redesigned database schema for scale and clarity.',
      'Delivered REST APIs and full Laravel backend.',
    ],
    stack: ['Laravel', 'MySQL', 'Firebase'],
    demo: 'https://ksbtech.com.ng',
  },
  {
    id: 'combinenet-logistics',
    order: 3,
    name: 'Combinenet Logistics',
    role: 'Volunteer',
    summary:
      'Volunteer redesign of the company marketing site: multi-page layout, forms, and transitions.',
    bullets: [
      'Owned end-to-end design and build.',
      'Shipped multiple pages, forms, and polished transitions.',
      'Delivered on a volunteer timeline with client sign-off.',
    ],
    stack: [],
    demo: 'https://combinenetlogistics.com',
  },
]

/** Sorted by order (lower = first). */
export const specialMentions: SpecialMention[] = [...specialMentionsList].sort(
  (a, b) => a.order - b.order
)
