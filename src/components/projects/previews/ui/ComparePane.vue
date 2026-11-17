<script setup lang="ts">
import type { CompareColumn } from '@/data/caseStudyDiagrams'

defineProps<{
  column: CompareColumn
  tone: 'before' | 'after'
}>()
</script>

<template>
  <section
    class="rounded-lg border p-3 min-w-0 h-full"
    :class="tone === 'after' ? 'border-[var(--primary)]/45' : 'border-[var(--border)]'"
  >
    <p
      class="text-[10px] font-mono uppercase tracking-wider"
      :class="tone === 'after' ? 'text-[var(--primary)]' : 'text-[var(--text-muted)]'"
    >
      {{ column.label }}
    </p>
    <p class="text-sm text-[var(--text)] mt-1 mb-2.5">{{ column.title }}</p>

    <div v-if="column.groups" class="space-y-2">
      <div
        v-for="group in column.groups"
        :key="group.label"
        class="rounded-md border border-[var(--primary)]/30 p-2"
      >
        <p class="text-[10px] font-mono text-[var(--primary)] mb-1.5">{{ group.label }}</p>
        <ul class="space-y-1">
          <li
            v-for="item in group.items"
            :key="item"
            class="text-[11px] text-[var(--text)] rounded bg-[var(--secondary)]/50 border border-[var(--primary)]/25 px-2 py-1"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>

    <ul v-if="column.items" class="space-y-1">
      <li
        v-for="item in column.items"
        :key="item"
        class="text-[11px] leading-snug rounded px-2 py-1 border"
        :class="
          tone === 'after'
            ? 'text-[var(--text)] bg-[var(--secondary)]/40 border-[var(--primary)]/25'
            : 'text-[var(--text-muted)] bg-[#1c1c22] border-[var(--border)]'
        "
      >
        {{ item }}
      </li>
    </ul>

    <div v-if="column.aside" class="grid grid-cols-2 gap-1.5 mt-2">
      <p
        v-for="item in column.aside"
        :key="item"
        class="text-[11px] text-center text-[var(--text)] rounded border border-[var(--primary)]/30 px-2 py-2"
      >
        {{ item }}
      </p>
    </div>

    <p
      class="mt-2.5 text-[11px] leading-relaxed"
      :class="tone === 'after' ? 'text-[var(--primary)]' : 'text-red-300/80'"
    >
      {{ column.result }}
    </p>
  </section>
</template>
