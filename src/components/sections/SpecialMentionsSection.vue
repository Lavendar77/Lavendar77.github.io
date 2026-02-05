<script setup lang="ts">
import { specialMentions } from '@/data/specialMentions'
</script>

<template>
  <section id="special-mentions" class="py-24">
    <div class="container-custom">
      <h2 class="text-4xl font-bold text-[var(--text)] mb-4">Special mentions</h2>
      <p class="text-lg text-[var(--text-muted)] mb-12 max-w-2xl">
        Other projects from my experience - still part of the story, just not full case studies.
      </p>
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="mention in specialMentions"
          :key="mention.id"
          class="rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)]/50 p-5 transition-colors hover:border-[var(--primary)]/30"
        >
          <div class="flex flex-wrap items-center gap-2 mb-3">
            <h3 class="text-lg font-bold text-[var(--text)]">{{ mention.name }}</h3>
            <span
              v-if="mention.noLongerLive"
              class="rounded px-2 py-0.5 text-xs font-medium text-[var(--text-muted)] border border-[var(--border)]"
            >
              No longer live
            </span>
          </div>
          <p class="text-xs font-medium text-[var(--primary)] mb-2">{{ mention.role }}</p>
          <p class="text-sm text-[var(--text)] mb-3">{{ mention.summary }}</p>
          <ul class="space-y-1.5 mb-4">
            <li
              v-for="(bullet, i) in mention.bullets"
              :key="i"
              class="text-sm text-[var(--text-muted)] flex gap-2"
            >
              <span class="text-[var(--primary)] flex-shrink-0">•</span>
              <span>{{ bullet }}</span>
            </li>
          </ul>
          <div v-if="mention.stack.length > 0" class="flex flex-wrap gap-1.5 mb-3">
            <span
              v-for="tech in mention.stack"
              :key="tech"
              class="px-2 py-0.5 bg-[var(--bg)] border border-[var(--border)] rounded text-xs font-mono text-[var(--text-muted)]"
            >
              {{ tech }}
            </span>
          </div>
          <a
            v-if="mention.demo && !mention.noLongerLive"
            :href="mention.demo"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm text-[var(--primary)] hover:underline transition-colors"
          >
            Visit site →
          </a>
        </article>
      </div>
    </div>
  </section>
</template>
