<script setup lang="ts">
const principles = [
  {
    title: 'System Design First',
    content:
      'Architecture decisions should prioritize scalability, maintainability, and reliability. Every component is designed with its role in the larger system in mind.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>`,
  },
  {
    title: 'Performance by Default',
    content:
      'Performance is not an afterthought. From database queries to API response times, every layer is optimized for speed and efficiency.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>`,
  },
  {
    title: 'Pragmatic Engineering',
    content:
      'Balance between perfect solutions and shipping value. Choose the right tool for the job, not the trendiest one. Technical debt is managed, not ignored.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>`,
  },
  {
    title: 'Reliability & Observability',
    content:
      'Systems must be observable, testable, and resilient. Monitoring, logging, and error handling are built in from day one, not bolted on later.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>`,
  },
]
</script>

<template>
  <section id="principles" class="py-24">
    <div class="container-custom">
      <h2 class="text-4xl font-bold text-[var(--text)] mb-16">How I Work</h2>
      <div class="grid md:grid-cols-2 gap-8">
        <article
          v-for="principle in principles"
          :key="principle.title"
          class="bg-[var(--bg)] border border-[var(--border)] rounded-lg p-6 hover:border-[var(--primary)]/50 hover:shadow-lg transition-all duration-300 group"
        >
          <div
            class="w-12 h-12 mb-4 text-[var(--primary)] group-hover:scale-110 transition-transform duration-300"
            v-html="principle.icon"
          />
          <h3 class="text-xl font-semibold text-[var(--text)] mb-3 group-hover:text-[var(--primary)] transition-colors">
            {{ principle.title }}
          </h3>
          <p class="text-[var(--text-muted)]">{{ principle.content }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
