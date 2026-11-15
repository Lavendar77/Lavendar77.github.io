<script setup lang="ts">
import { computed, watch, onMounted, onUnmounted } from 'vue'
import type { Project } from '@/types/project'
import ProjectPreview from './ProjectPreview.vue'

interface Props {
  isOpen: boolean
  project: Project
  currentIndex: number
}

const props = withDefaults(defineProps<Props>(), {
  isOpen: false,
  currentIndex: 0,
})

const emit = defineEmits<{
  close: []
  selectIndex: [index: number]
}>()

const currentPreview = computed(() => {
  return props.project.previews[props.currentIndex] || props.project.previews[0]
})

const handlePrev = () => {
  if (props.project.previews.length <= 1) return
  const newIndex =
    (props.currentIndex - 1 + props.project.previews.length) % props.project.previews.length
  emit('selectIndex', newIndex)
}

const handleNext = () => {
  if (props.project.previews.length <= 1) return
  const newIndex = (props.currentIndex + 1) % props.project.previews.length
  emit('selectIndex', newIndex)
}

const handleKeydown = (e: KeyboardEvent) => {
  if (!props.isOpen) return
  if (e.key === 'Escape') {
    emit('close')
  } else if (e.key === 'ArrowLeft') {
    handlePrev()
  } else if (e.key === 'ArrowRight') {
    handleNext()
  }
}

watch(
  () => props.isOpen,
  open => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }
)

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="`modal-title-${project.id}`"
        @click.self="emit('close')"
      >
        <!-- Modal Window Container -->
        <div
          class="relative w-full max-w-6xl max-h-[94vh] flex flex-col bg-[#161619] border border-[var(--border)] rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up"
        >
          <!-- Modal Header -->
          <div
            class="flex items-center justify-between gap-4 px-5 py-3.5 border-b border-[var(--border)] bg-[#1a1a1f]"
          >
            <!-- Project Title & Indicator -->
            <div class="flex items-center gap-3 min-w-0">
              <div
                v-if="project.company.logo"
                class="w-6 h-6 rounded flex items-center justify-center bg-[var(--bg-secondary)] border border-[var(--border)] flex-shrink-0"
              >
                <img
                  :src="project.company.logo"
                  :alt="`${project.company.name} logo`"
                  class="w-4 h-4 object-contain"
                />
              </div>
              <div class="min-w-0">
                <div class="flex items-center gap-2">
                  <h3
                    :id="`modal-title-${project.id}`"
                    class="text-sm sm:text-base font-bold text-[var(--text)] truncate"
                  >
                    {{ project.title }}
                  </h3>
                  <span
                    class="hidden sm:inline-flex px-2 py-0.5 text-[10px] font-mono rounded bg-[var(--secondary)] text-[var(--primary)] border border-[var(--primary)]/30 flex-shrink-0"
                  >
                    {{ currentIndex + 1 }} / {{ project.previews.length }}
                  </span>
                </div>
                <p class="text-xs text-[var(--primary)] truncate font-medium">
                  {{ currentPreview.label }}
                </p>
              </div>
            </div>

            <!-- Previews Quick Switcher Pills (when > 1 preview) -->
            <div
              v-if="project.previews.length > 1"
              class="hidden md:flex items-center gap-1.5 overflow-x-auto max-w-md py-1"
            >
              <button
                v-for="(preview, idx) in project.previews"
                :key="preview.id"
                @click="emit('selectIndex', idx)"
                type="button"
                class="px-2.5 py-1 rounded-md text-xs font-mono transition-all duration-200 truncate max-w-[150px] border cursor-pointer"
                :class="
                  currentIndex === idx
                    ? 'bg-[var(--primary)] text-[#1a1a1a] border-[var(--primary)] font-semibold shadow-sm'
                    : 'bg-[#222228] text-[var(--text-muted)] border-[var(--border)] hover:border-[var(--primary)]/50 hover:text-[var(--text)]'
                "
                :title="preview.label"
              >
                {{ idx + 1 }}. {{ preview.label }}
              </button>
            </div>

            <!-- Modal Action Buttons (Close) -->
            <div class="flex items-center gap-2 flex-shrink-0">
              <button
                @click="emit('close')"
                type="button"
                class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[#202026] text-xs font-mono text-[var(--text)] hover:text-white hover:border-[var(--primary)] hover:bg-[#282830] transition-colors cursor-pointer"
                title="Close overlay (Esc)"
              >
                <span class="hidden sm:inline text-[10px] text-[var(--text-muted)] font-mono"
                  >[Esc]</span
                >
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          <!-- Modal Scrollable Content Area -->
          <div class="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
            <!-- Main Preview Viewer Stage with Floating Navigation Arrows -->
            <div class="relative group">
              <!-- Left Arrow Button -->
              <button
                v-if="project.previews.length > 1"
                @click="handlePrev"
                type="button"
                aria-label="Previous preview"
                class="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[#1e1e24]/90 border border-[var(--border)] text-[var(--text)] flex items-center justify-center hover:bg-[var(--secondary)] hover:text-[var(--primary)] hover:border-[var(--primary)]/70 transition-all shadow-lg cursor-pointer opacity-80 group-hover:opacity-100"
                title="Previous preview (← key)"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <!-- Render the Active Preview with Fullscreen Mode -->
              <div class="w-full">
                <ProjectPreview :preview="currentPreview" :fullscreen="true" />
              </div>

              <!-- Right Arrow Button -->
              <button
                v-if="project.previews.length > 1"
                @click="handleNext"
                type="button"
                aria-label="Next preview"
                class="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[#1e1e24]/90 border border-[var(--border)] text-[var(--text)] flex items-center justify-center hover:bg-[var(--secondary)] hover:text-[var(--primary)] hover:border-[var(--primary)]/70 transition-all shadow-lg cursor-pointer opacity-80 group-hover:opacity-100"
                title="Next preview (→ key)"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            <!-- In-Depth Technical Details & Architecture Notes -->
            <div
              v-if="currentPreview.description || currentPreview.highlights"
              class="p-4 sm:p-5 rounded-xl border border-[var(--border)] bg-[#191920]/90 space-y-3"
            >
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 rounded-full bg-[var(--primary)]" />
                <h4
                  class="text-xs font-mono font-bold uppercase tracking-wider text-[var(--primary)]"
                >
                  In-Depth Technical Details &amp; Architecture Insights
                </h4>
              </div>

              <p
                v-if="currentPreview.description"
                class="text-sm text-[var(--text)] leading-relaxed font-sans"
              >
                {{ currentPreview.description }}
              </p>

              <div
                v-if="currentPreview.highlights && currentPreview.highlights.length > 0"
                class="pt-1"
              >
                <ul class="grid sm:grid-cols-2 gap-2 text-xs text-[var(--text-muted)] font-sans">
                  <li
                    v-for="(highlight, i) in currentPreview.highlights"
                    :key="i"
                    class="flex items-start gap-2 p-2 rounded-lg bg-[#141418] border border-[var(--border)]"
                  >
                    <span class="text-[var(--primary)] font-bold mt-0.5">•</span>
                    <span class="leading-relaxed">{{ highlight }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Modal Footer with Navigation & Shortcut Info -->
          <div
            class="flex items-center justify-between gap-4 px-5 py-3 border-t border-[var(--border)] bg-[#1a1a1f] text-xs font-mono text-[var(--text-muted)]"
          >
            <!-- Left: Current preview title -->
            <div class="hidden sm:flex items-center gap-2">
              <span class="text-[var(--text)] font-semibold">{{ currentPreview.label }}</span>
            </div>

            <!-- Center: Dot Indicators -->
            <div class="flex items-center gap-2 mx-auto sm:mx-0">
              <button
                v-for="(_, idx) in project.previews"
                :key="idx"
                @click="emit('selectIndex', idx)"
                type="button"
                class="h-2 rounded-full transition-all duration-300 cursor-pointer"
                :class="
                  currentIndex === idx
                    ? 'w-6 bg-[var(--primary)]'
                    : 'w-2 bg-[var(--border)] hover:bg-[var(--text-muted)]'
                "
                :aria-label="`Go to preview ${idx + 1}`"
              />
            </div>

            <!-- Right: Keyboard Shortcuts Hint -->
            <div class="flex items-center gap-3">
              <span class="hidden md:inline text-[11px]">
                Navigate:
                <kbd class="px-1.5 py-0.5 rounded bg-[#24242c] border border-[var(--border)]"
                  >←</kbd
                >
                <kbd class="px-1.5 py-0.5 rounded bg-[#24242c] border border-[var(--border)]"
                  >→</kbd
                >
              </span>
              <button
                v-if="project.demo"
                :href="project.demo"
                target="_blank"
                rel="noopener noreferrer"
                class="text-xs text-[var(--primary)] hover:underline inline-flex items-center gap-1"
                @click="emit('close')"
              >
                <a :href="project.demo" target="_blank" rel="noopener noreferrer">
                  {{ project.demoLabel || 'Visit Live Site →' }}
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
