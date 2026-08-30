<script setup lang="ts">
interface TechDomain {
  title: string
  subtitle: string
  skills: string[]
}

const domains: TechDomain[] = [
  {
    title: 'Backend & Distributed Systems',
    subtitle: 'High-throughput APIs, microservices, and asynchronous event pipelines.',
    skills: [
      'PHP',
      'Laravel',
      'Node.js',
      'TypeScript',
      'JavaScript',
      'Express',
      'REST APIs',
      'Event-Driven Systems',
      'Kafka',
      'Laravel Horizon',
    ],
  },
  {
    title: 'AI Systems & Agents',
    subtitle: 'Agent orchestration, protocol integrations, and reliable LLM workflows.',
    skills: [
      'AI Agents',
      'Model Context Protocol (MCP)',
      'LLMs (OpenAI, Anthropic, Gemini)',
      'Agent Orchestration',
      'Context Engineering',
      'Deterministic Boundaries',
      'Tool Calling & Workflows',
    ],
  },
  {
    title: 'Cloud & Infrastructure',
    subtitle: 'Serverless deployments, media pipelines, containerization, and CI/CD.',
    skills: [
      'AWS',
      'Docker',
      'Serverless Architecture',
      'Google Cloud',
      'DigitalOcean',
      'GitHub Actions',
      'GitLab CI/CD',
      'Nginx',
      'Cloudflare',
      'Vercel',
    ],
  },
  {
    title: 'Data, Storage & Ecosystem',
    subtitle: 'Relational data modeling, in-memory caching, search, and platform services.',
    skills: [
      'PostgreSQL',
      'MySQL',
      'Redis',
      'Meilisearch',
      'Laravel Scout',
      'Algolia',
      'Payment Gateways',
      'Cloudinary',
      'Pest / PHPUnit',
      'Git',
    ],
  },
]
</script>

<template>
  <section id="tech-stack" class="py-24">
    <div class="container-custom">
      <h2 class="text-4xl font-bold text-[var(--text)] mb-4">Tech Stack</h2>
      <p class="text-lg text-[var(--text-muted)] mb-14 max-w-2xl">
        Core technologies and architectural tooling across backend infrastructure, cloud systems,
        and AI-native software.
      </p>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div
          v-for="domain in domains"
          :key="domain.title"
          class="rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)]/30 hover:border-[var(--primary)]/40 hover:bg-[var(--bg-secondary)]/60 hover:shadow-lg hover:shadow-[var(--primary)]/5 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 group"
        >
          <!-- Card Header -->
          <div class="mb-6">
            <h3
              class="text-xl font-bold text-[var(--text)] group-hover:text-[var(--primary)] transition-colors mb-2"
            >
              {{ domain.title }}
            </h3>

            <p class="text-sm text-[var(--text-muted)] leading-relaxed">
              {{ domain.subtitle }}
            </p>
          </div>

          <!-- Skills Pills Grid -->
          <div class="flex flex-wrap gap-2 pt-4 border-t border-[var(--border)]/40">
            <span
              v-for="skill in domain.skills"
              :key="skill"
              class="px-3 py-1.5 rounded-md text-xs sm:text-sm font-mono bg-[var(--bg)] text-[var(--text)] border border-[var(--border)] hover:border-[var(--primary)]/40 hover:text-[var(--primary)] transition-all duration-200"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
