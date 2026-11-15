<script setup lang="ts">
import { computed } from 'vue'
import type { ProjectPreview } from '@/types/project'
import McpArchitectureDiagram from './previews/poptin-mcp-integration/McpArchitectureDiagram.vue'
import McpApplicationIntegrationDiagram from './previews/poptin-mcp-integration/McpApplicationIntegrationDiagram.vue'
import McpClientInteroperabilityDiagram from './previews/poptin-mcp-integration/McpClientInteroperabilityDiagram.vue'

interface Props {
  preview: ProjectPreview
  compact?: boolean
  fullscreen?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  compact: false,
  fullscreen: false,
})

const isSvg = computed(
  () => props.preview.type === 'diagram' && !!props.preview.content?.startsWith('<svg')
)
const isCode = computed(() => props.preview.type === 'code')
const isMetric = computed(() => props.preview.type === 'metric')
const isComponent = computed(() => props.preview.type === 'component')
</script>

<template>
  <div
    class="rounded-lg border flex items-center justify-center transition-colors duration-300 overflow-hidden"
    :class="[
      fullscreen
        ? 'p-4 sm:p-6 min-h-[400px] w-full bg-[var(--bg)]/95 border-[var(--border)] shadow-inner'
        : compact
          ? 'p-4 min-h-[100px] bg-[var(--bg-secondary)] border-[var(--border)] hover:border-[var(--primary)]/30'
          : 'p-4 sm:p-6 min-h-[300px] bg-[var(--bg-secondary)] border-[var(--border)] hover:border-[var(--primary)]/30',
    ]"
  >
    <div v-if="isComponent" class="w-full">
      <McpArchitectureDiagram v-if="preview.id === 'mcp-agentic-flow'" />
      <McpApplicationIntegrationDiagram
        v-else-if="preview.id === 'mcp-beyond-api' || preview.id === 'mcp-campaign-sequence'"
      />
      <McpClientInteroperabilityDiagram
        v-else-if="
          preview.id === 'mcp-client-interoperability' || preview.id === 'mcp-upload-transport'
        "
      />
    </div>
    <div
      v-else-if="isSvg"
      v-html="preview.content"
      class="w-full flex items-center justify-center"
      :class="fullscreen ? 'max-w-4xl mx-auto' : ''"
    />
    <div v-else-if="isCode" class="w-full">
      <pre
        class="font-mono text-[var(--text)] overflow-x-auto p-4 rounded-lg bg-[#141416]"
        :class="fullscreen ? 'text-sm sm:text-base' : compact ? 'text-xs' : 'text-sm'"
      >
        <code>{{ preview.content }}</code>
      </pre>
    </div>
    <div v-else-if="isMetric" class="text-center p-6">
      <p
        class="font-bold text-[var(--primary)]"
        :class="fullscreen ? 'text-4xl sm:text-6xl mb-4' : compact ? 'text-xl' : 'text-3xl mb-2'"
      >
        {{ preview.content }}
      </p>
    </div>
    <div v-else class="text-[var(--text-muted)] text-center p-6">{{ preview.content }}</div>
  </div>
</template>
