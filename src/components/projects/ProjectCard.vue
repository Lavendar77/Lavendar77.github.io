<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import type { Project } from '@/types/project'
import ProjectPreview from './ProjectPreview.vue'
import PreviewIndicators from './PreviewIndicators.vue'

interface Props {
  project: Project
  isExpanded?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isExpanded: false,
})

const emit = defineEmits<{
  toggle: [projectId: string, isExpanded: boolean]
}>()

const activePreviewIndex = ref(0)
const localExpanded = ref(props.isExpanded)

watch(() => props.isExpanded, (newVal) => {
  localExpanded.value = newVal
})

const selectPreview = (index: number) => {
  activePreviewIndex.value = index
}

const toggleExpand = () => {
  const newState = !localExpanded.value
  localExpanded.value = newState
  emit('toggle', props.project.id, newState)
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    toggleExpand()
  }
}

const hasProblemSolution = computed(() => {
  return props.project.problem && props.project.solution
})
</script>

<template>
  <article class="mb-8 last:mb-0">
    <!-- Compact View -->
    <button
      @click="toggleExpand"
      @keydown="handleKeydown"
      :aria-expanded="localExpanded"
      :aria-controls="`project-${project.id}-details`"
      class="w-full text-left focus:outline-none"
    >
      <div
        class="flex items-center justify-between gap-4 py-4 transition-all duration-300"
        :class="localExpanded ? 'border-b border-[var(--border)] pb-6' : ''"
      >
        <div class="flex-1 min-w-0">
          <div class="flex items-start justify-between gap-4 mb-2">
            <h3 class="text-xl font-bold text-[var(--text)]">{{ project.title }}</h3>
            <svg
              class="w-5 h-5 text-[var(--text-muted)] flex-shrink-0 transition-transform duration-300 mt-1"
              :class="localExpanded ? 'rotate-180' : ''"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <p class="text-sm text-[var(--primary)] mb-2">{{ project.problemStatement }}</p>
          <div class="flex flex-wrap gap-1.5 mb-2">
            <span
              v-for="tech in project.stack"
              :key="tech"
              class="px-2 py-0.5 bg-[var(--bg-secondary)] border border-[var(--border)] rounded text-xs font-mono text-[var(--text)]"
            >
              {{ tech }}
            </span>
          </div>
          <span class="text-[var(--text-muted)] text-xs">
            {{ project.role }} • {{ project.context }}
          </span>
        </div>
      </div>
    </button>

    <!-- Expanded View -->
    <div
      :id="`project-${project.id}-details`"
      class="overflow-hidden transition-all ease-out"
      :class="localExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'"
      style="transition-duration: 300ms;"
    >
      <div class="grid md:grid-cols-2 gap-12 pt-6 pb-8">
        <div class="space-y-6">
          <div v-if="hasProblemSolution" class="space-y-4">
            <div>
              <h4 class="text-sm font-semibold text-[var(--text-muted)] uppercase mb-2">Problem</h4>
              <p class="text-[var(--text)]">{{ project.problem }}</p>
            </div>

            <div>
              <h4 class="text-sm font-semibold text-[var(--text-muted)] uppercase mb-2">Solution</h4>
              <p class="text-[var(--text)]">{{ project.solution }}</p>
            </div>
          </div>

          <div v-else>
            <h4 class="text-sm font-semibold text-[var(--text-muted)] uppercase mb-2">Summary</h4>
            <p class="text-[var(--text)]">{{ project.outcome }}</p>
          </div>

          <div>
            <h4 class="text-sm font-semibold text-[var(--text-muted)] uppercase mb-2">Outcome</h4>
            <p class="text-[var(--text)]">{{ project.outcome }}</p>
          </div>

          <div v-if="project.repo || project.demo" class="flex gap-4 pt-2">
            <a
              v-if="project.repo"
              :href="project.repo"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm text-[var(--primary)] hover:text-[var(--primary)]/80 hover:underline transition-colors"
            >
              View Repository →
            </a>
            <a
              v-if="project.demo"
              :href="project.demo"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm text-[var(--primary)] hover:text-[var(--primary)]/80 hover:underline transition-colors"
            >
              View Live Demo →
            </a>
          </div>
        </div>

        <div>
          <div
            v-if="project.previews.length > 0"
            class="relative"
            role="tabpanel"
            :aria-label="`Preview for ${project.title}`"
          >
            <div class="transition-opacity duration-300">
              <ProjectPreview :preview="project.previews[activePreviewIndex]" />
            </div>
            <PreviewIndicators
              v-if="project.previews.length > 1"
              :count="project.previews.length"
              :active-index="activePreviewIndex"
              @select="selectPreview"
            />
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
