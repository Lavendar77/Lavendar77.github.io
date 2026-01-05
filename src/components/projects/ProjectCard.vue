<script setup lang="ts">
import { ref } from 'vue'
import type { Project } from '@/types/project'
import ProjectPreview from './ProjectPreview.vue'
import PreviewIndicators from './PreviewIndicators.vue'

interface Props {
  project: Project
}

const props = defineProps<Props>()

const activePreviewIndex = ref(0)

const selectPreview = (index: number) => {
  activePreviewIndex.value = index
}
</script>

<template>
  <article class="mb-24 last:mb-0">
    <div class="grid md:grid-cols-2 gap-12 items-start">
      <div class="space-y-6">
        <div>
          <h3 class="text-3xl font-bold text-[var(--text)] mb-2">{{ project.title }}</h3>
          <p class="text-lg text-[var(--primary)] mb-4">{{ project.problemStatement }}</p>
          <div class="flex gap-4 text-sm text-[var(--text)] mb-6 font-medium">
            <span>{{ project.role }}</span>
            <span class="text-[var(--text-muted)]">•</span>
            <span>{{ project.context }}</span>
          </div>
        </div>

        <div class="space-y-4">
          <div>
            <h4 class="text-sm font-semibold text-[var(--text-muted)] uppercase mb-2">Problem</h4>
            <p class="text-[var(--text)]">{{ project.problem }}</p>
          </div>

          <div>
            <h4 class="text-sm font-semibold text-[var(--text-muted)] uppercase mb-2">Solution</h4>
            <p class="text-[var(--text)]">{{ project.solution }}</p>
          </div>

          <div>
            <h4 class="text-sm font-semibold text-[var(--text-muted)] uppercase mb-2">Outcome</h4>
            <p class="text-[var(--text)]">{{ project.outcome }}</p>
          </div>
        </div>

        <div>
          <h4 class="text-sm font-semibold text-[var(--text-muted)] uppercase mb-3">Stack</h4>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tech in project.stack"
              :key="tech"
              class="px-3 py-1 bg-[var(--bg-secondary)] border border-[var(--border)] rounded text-sm font-mono text-[var(--text)] hover:border-[var(--primary)]/50 hover:bg-[var(--primary)]/10 transition-all duration-200"
            >
              {{ tech }}
            </span>
          </div>
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
  </article>
</template>
