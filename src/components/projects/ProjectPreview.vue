<script setup lang="ts">
import { computed } from 'vue'
import type { ProjectPreview } from '@/types/project'

interface Props {
  preview: ProjectPreview
}

const props = defineProps<Props>()

const isSvg = computed(() => props.preview.type === 'diagram' && props.preview.content.startsWith('<svg'))
const isCode = computed(() => props.preview.type === 'code')
const isMetric = computed(() => props.preview.type === 'metric')
</script>

<template>
  <div class="bg-[var(--bg-secondary)] rounded-lg p-6 border border-[var(--border)] min-h-[300px] flex items-center justify-center hover:border-[var(--primary)]/30 transition-colors duration-300">
    <div v-if="isSvg" v-html="preview.content" class="w-full" />
    <div v-else-if="isCode" class="w-full">
      <pre class="text-sm font-mono text-[var(--text)] overflow-x-auto"><code>{{ preview.content }}</code></pre>
    </div>
    <div v-else-if="isMetric" class="text-center">
      <p class="text-3xl font-bold text-[var(--primary)] mb-2">{{ preview.content }}</p>
    </div>
    <div v-else class="text-[var(--text-muted)]">{{ preview.content }}</div>
  </div>
</template>
