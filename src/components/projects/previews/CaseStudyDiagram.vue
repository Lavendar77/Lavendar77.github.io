<script setup lang="ts">
import { computed } from 'vue'
import DiagramFrame from './ui/DiagramFrame.vue'
import ComparePane from './ui/ComparePane.vue'
import { caseStudyDiagrams, type FlowDecision, type FlowStep } from '@/data/caseStudyDiagrams'

const props = defineProps<{
  diagramId: string
}>()

const diagram = computed(() => caseStudyDiagrams[props.diagramId])

const isStep = (item: FlowStep | FlowDecision): item is FlowStep => item.type === 'step'
</script>

<template>
  <DiagramFrame
    v-if="diagram"
    :kicker="diagram.frame.kicker"
    :title="diagram.frame.title"
    :badge="diagram.frame.badge"
  >
    <ol v-if="diagram.kind === 'flow'" class="flex flex-col">
      <li
        v-for="(item, index) in diagram.steps"
        :key="index"
        class="grid grid-cols-[1.5rem_1fr] gap-3"
      >
        <div class="flex flex-col items-center">
          <span
            class="w-6 h-6 rounded-md flex items-center justify-center text-[11px] font-mono font-bold shrink-0"
            :class="
              isStep(item)
                ? 'bg-[var(--secondary)] text-[var(--primary)] border border-[var(--primary)]/40'
                : 'bg-[var(--primary)]/15 text-[var(--primary)] border border-[var(--primary)]/50'
            "
          >
            {{ isStep(item) ? item.n : 'if' }}
          </span>
          <span
            v-if="index < diagram.steps.length - 1"
            class="w-px flex-1 min-h-3 my-1 bg-[var(--primary)]/35"
          />
        </div>

        <div class="min-w-0" :class="index < diagram.steps.length - 1 ? 'pb-3' : ''">
          <template v-if="isStep(item)">
            <p class="text-sm text-[var(--text)] leading-snug">{{ item.title }}</p>
            <p
              v-if="item.detail"
              class="text-[11px] text-[var(--text-muted)] mt-0.5 leading-relaxed"
            >
              {{ item.detail }}
            </p>
          </template>
          <div
            v-else
            class="rounded-lg border border-[var(--primary)]/35 bg-[var(--primary)]/5 px-3 py-2"
          >
            <p class="text-xs font-mono text-[var(--primary)]">{{ item.question }}</p>
            <div class="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              <p class="text-[11px] text-[var(--text)] leading-relaxed">
                <span class="font-mono text-emerald-300">Yes</span>
                {{ item.yes }}
              </p>
              <p class="text-[11px] text-[var(--text-muted)] leading-relaxed">
                <span class="font-mono">No</span>
                {{ item.no }}
              </p>
            </div>
          </div>
        </div>
      </li>
    </ol>

    <div
      v-else-if="diagram.kind === 'compare'"
      class="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-2 sm:gap-3 items-stretch"
    >
      <ComparePane :column="diagram.before" tone="before" />
      <div class="flex items-center justify-center text-[var(--primary)]" aria-hidden="true">
        <span class="font-mono text-sm rotate-90 sm:rotate-0">→</span>
      </div>
      <ComparePane :column="diagram.after" tone="after" />
    </div>

    <div v-else-if="diagram.kind === 'pipeline'">
      <ol class="flex flex-col sm:flex-row gap-2">
        <li
          v-for="(node, index) in diagram.nodes"
          :key="node.title"
          class="flex-1 rounded-lg border px-3 py-2.5 min-w-0"
          :class="
            node.accent
              ? 'border-[var(--primary)]/45 bg-[var(--secondary)]/40'
              : 'border-[var(--border)] bg-[#1c1c22]'
          "
        >
          <span
            class="text-[10px] font-mono"
            :class="node.accent ? 'text-[var(--primary)]' : 'text-[var(--text-muted)]'"
          >
            0{{ index + 1 }}
          </span>
          <p class="text-sm text-[var(--text)] leading-snug mt-0.5">{{ node.title }}</p>
          <p v-if="node.detail" class="text-[11px] text-[var(--text-muted)] mt-0.5">
            {{ node.detail }}
          </p>
        </li>
      </ol>
      <p
        v-if="diagram.note"
        class="mt-3 text-[11px] leading-relaxed text-[var(--text-muted)] border border-dashed border-[var(--border)] rounded-md px-2.5 py-2"
      >
        {{ diagram.note }}
      </p>
    </div>

    <div v-else-if="diagram.kind === 'metrics'">
      <div v-if="diagram.stats" class="grid grid-cols-2 gap-2">
        <div
          v-for="stat in diagram.stats"
          :key="stat.label"
          class="rounded-lg border border-[var(--border)] bg-[#1c1c22] px-3 py-3 min-w-0"
        >
          <p class="text-xl sm:text-2xl font-mono font-bold text-[var(--primary)] leading-none">
            {{ stat.value }}
          </p>
          <p class="text-[11px] text-[var(--text-muted)] mt-1.5 leading-snug">{{ stat.label }}</p>
        </div>
      </div>
      <ul v-else class="space-y-2">
        <li
          v-for="point in diagram.points"
          :key="point"
          class="flex gap-2.5 rounded-lg border border-[var(--border)] bg-[#1c1c22] px-3 py-2.5"
        >
          <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--primary)] shrink-0" />
          <span class="text-sm text-[var(--text)] leading-relaxed">{{ point }}</span>
        </li>
      </ul>
    </div>
  </DiagramFrame>
</template>
