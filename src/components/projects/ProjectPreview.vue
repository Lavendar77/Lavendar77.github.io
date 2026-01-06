<script setup lang="ts">
import { computed } from 'vue'
import type { ProjectPreview } from '@/types/project'

interface Props {
  preview: ProjectPreview
  compact?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  compact: false,
})

const isSvg = computed(() => props.preview.type === 'diagram' && props.preview.content.startsWith('<svg'))
const isCode = computed(() => props.preview.type === 'code')
const isMetric = computed(() => props.preview.type === 'metric')
</script>

<template>
  <div
    class="bg-[var(--bg-secondary)] rounded-lg border border-[var(--border)] flex items-center justify-center hover:border-[var(--primary)]/30 transition-colors duration-300"
    :class="compact ? 'p-4 min-h-[100px]' : 'p-6 min-h-[300px]'"
  >
    <div v-if="isSvg" v-html="preview.content" class="w-full" />
    <div v-else-if="isCode" class="w-full">
      <pre
        class="font-mono text-[var(--text)] overflow-x-auto"
        :class="compact ? 'text-xs' : 'text-sm'"
      >
        <code>{{ preview.content }}</code>
      </pre>
    </div>
    <div v-else-if="isMetric" class="text-center">
      <p
        class="font-bold text-[var(--primary)]"
        :class="compact ? 'text-xl' : 'text-3xl mb-2'"
      >
        {{ preview.content }}
      </p>
    </div>
    <div v-else class="text-[var(--text-muted)]">{{ preview.content }}</div>
  </div>
</template>
