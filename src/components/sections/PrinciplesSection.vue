<script setup lang="ts">
const principles = [
  {
    title: 'System Design First',
    content:
      'Architecture decisions prioritize scalability, maintainability, and reliability. Every component exists for a reason within the larger system.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>`,
  },
  {
    title: 'Performance by Default',
    content:
      'Performance is built in from the start. From database queries to API responses, every layer is designed for speed and efficiency.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>`,
  },
  {
    title: 'Pragmatic Engineering',
    content:
      'Ship value without sacrificing quality. Choose the right tool for the problem, not the trend. Technical debt is acknowledged and managed.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>`,
  },
  {
    title: 'Reliability & Observability',
    content:
      'Systems are observable, testable, and resilient by design. Monitoring, logging, and error handling are part of the foundation.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>`,
  },
]
</script>

<template>
  <section id="principles" class="py-24 relative">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-[var(--text)] mb-4">How I Work</h2>
        <p class="text-lg text-[var(--text-muted)] mb-6 max-w-2xl mx-auto">
          These principles guide how I design, build, and scale production systems.
        </p>
        <div class="flex items-center justify-center gap-2 mt-6">
          <div class="h-px w-12 bg-[var(--primary)]/50"></div>
          <div class="w-2 h-2 bg-[var(--primary)] rounded-full"></div>
          <div class="h-px w-12 bg-[var(--primary)]/50"></div>
        </div>
      </div>
      <div class="grid md:grid-cols-2 gap-8">
        <article
          v-for="(principle, index) in principles"
          :key="principle.title"
          class="relative border border-[var(--border)] rounded-lg p-8 hover:border-[var(--primary)]/50 hover:shadow-xl hover:shadow-[var(--primary)]/10 transition-all duration-300 group overflow-hidden"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <!-- Background gradient on hover -->
          <!-- <div class="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> -->

          <!-- Number badge -->
          <div
            class="absolute top-4 right-4 w-8 h-8 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)] font-mono text-sm font-bold group-hover:scale-110 transition-transform duration-300"
          >
            {{ index + 1 }}
          </div>

          <div class="relative z-10">
            <div
              class="w-16 h-16 mb-6 text-[var(--primary)] group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 inline-flex items-center justify-center rounded-lg bg-[var(--primary)]/10 p-3"
              v-html="principle.icon"
            />
            <h3
              class="text-2xl font-bold text-[var(--text)] mb-4 group-hover:text-[var(--primary)] transition-colors"
            >
              {{ principle.title }}
            </h3>
            <p class="text-[var(--text-muted)] leading-relaxed text-base">
              {{ principle.content }}
            </p>
          </div>

          <!-- Decorative corner element -->
          <div
            class="absolute bottom-0 right-0 w-20 h-20 border-l-2 border-t-2 border-[var(--primary)]/10 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>
        </article>
      </div>
    </div>
  </section>
</template>
