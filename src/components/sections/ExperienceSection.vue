<script setup lang="ts">
import { calculateYearsOfExperience } from '@/utils/constants'

const resumeViewLink =
  'https://drive.google.com/file/d/17wjEZG9f9sC5u0ivzuQ3H3b0YIDNx29H/view?usp=sharing'
const resumeDownloadLink =
  'https://drive.google.com/uc?export=download&id=17wjEZG9f9sC5u0ivzuQ3H3b0YIDNx29H'

const yearsOfExperience = calculateYearsOfExperience()
</script>

<template>
  <section id="experience" class="py-24">
    <div class="container-custom">
      <h2 class="text-4xl font-bold text-[var(--text)] mb-8">Experience</h2>
      <div class="max-w-3xl mb-12">
        <p class="text-lg text-[var(--text-muted)] leading-relaxed">
          Over {{ yearsOfExperience }}+ years building and scaling production systems, from backend
          infrastructure and cloud migrations to distributed architectures handling millions of
          requests. Now exploring how those same engineering principles apply to AI-native software
          and agent systems.
        </p>
      </div>
      <div class="flex flex-col sm:flex-row gap-4 justify-start">
        <a
          :href="resumeViewLink"
          target="_blank"
          rel="noopener noreferrer"
          class="px-8 py-3 bg-[var(--primary)] text-[var(--secondary)] rounded-lg hover:opacity-90 hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--bg)] font-semibold shadow-lg shadow-[var(--primary)]/20"
        >
          View Resume
        </a>
        <a
          :href="resumeDownloadLink"
          download
          class="px-8 py-3 border-2 border-[var(--primary)]/50 text-[var(--text)] rounded-lg hover:bg-[var(--primary)]/10 hover:border-[var(--primary)] transition-all focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--bg)] font-semibold"
        >
          Download PDF
        </a>
      </div>
    </div>
  </section>
</template>
