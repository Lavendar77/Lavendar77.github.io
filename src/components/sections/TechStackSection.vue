<script setup lang="ts">
const techStack = {
  Languages: ['PHP', 'TypeScript', 'JavaScript', 'SQL'],
  Frameworks: ['Laravel', 'Vue.js', 'Express'],
  Runtime: ['Node.js'],
  Architecture: [
    'AWS (S3, CloudFront, Lambda, SQS, SNS, ElastiCache, MediaConvert)',
    'DigitalOcean',
    'Google Cloud',
    'Vercel',
    'Serverless Architecture',
    'Event-driven systems',
    'Kafka',
  ],
  Databases: ['MySQL', 'PostgreSQL', 'Redis'],
  Search: ['Laravel Scout', 'Meilisearch', 'Algolia'],
  'Integrations & Services': ['Cloudinary', 'Paystack', 'Stripe', 'Firebase', 'Video.js', 'Wix'],
  Tooling: [
    'Git',
    'Docker',
    'Nginx',
    'GitHub Actions',
    'GitLab CI/CD',
    'Laravel Horizon',
    'ESLint',
    'Prettier',
    'Pest',
    'Vite',
    'Cloudflare',
  ],
}
</script>

<template>
  <section id="tech-stack" class="py-24">
    <div class="container-custom">
      <h2 class="text-4xl font-bold text-[var(--text)] mb-16">Tech Stack</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div v-for="(items, category) in techStack" :key="category">
          <h3 class="text-lg font-semibold text-[var(--text-muted)] uppercase mb-4">
            {{ category }}
          </h3>
          <ul class="space-y-2">
            <li v-for="item in items" :key="item" class="text-[var(--text)] font-mono text-sm">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
