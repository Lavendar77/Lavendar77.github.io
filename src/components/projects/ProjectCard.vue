<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import type { Project } from '@/types/project'
import ProjectPreview from './ProjectPreview.vue'
import PreviewIndicators from './PreviewIndicators.vue'
import PreviewModal from './PreviewModal.vue'

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

const localExpanded = ref(props.isExpanded)
const swiperContainer = ref<HTMLElement | null>(null)
const activePreviewIndex = ref(0)
const isDragging = ref(false)
const hasDragged = ref(false)
const startX = ref(0)
const scrollLeft = ref(0)
const isModalOpen = ref(false)
const activeModalIndex = ref(0)

watch(
  () => props.isExpanded,
  newVal => {
    localExpanded.value = newVal
    // Reset scroll position when expanded
    if (newVal && swiperContainer.value) {
      swiperContainer.value.scrollLeft = 0
      activePreviewIndex.value = 0
    }
  }
)

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

// Swipe/drag handlers
const handleMouseDown = (e: MouseEvent) => {
  if (!swiperContainer.value) return
  isDragging.value = true
  hasDragged.value = false
  startX.value = e.pageX - swiperContainer.value.offsetLeft
  scrollLeft.value = swiperContainer.value.scrollLeft
  swiperContainer.value.style.cursor = 'grabbing'
  swiperContainer.value.style.userSelect = 'none'
}

const handleMouseLeave = () => {
  if (!swiperContainer.value) return
  isDragging.value = false
  swiperContainer.value.style.cursor = 'grab'
  swiperContainer.value.style.userSelect = ''
}

const handleMouseUp = () => {
  if (!swiperContainer.value) return
  isDragging.value = false
  swiperContainer.value.style.cursor = 'grab'
  swiperContainer.value.style.userSelect = ''
}

const handleMouseMove = (e: MouseEvent) => {
  if (!isDragging.value || !swiperContainer.value) return
  const x = e.pageX - swiperContainer.value.offsetLeft
  if (Math.abs(x - startX.value) > 6) {
    hasDragged.value = true
    e.preventDefault()
  }
  const walk = (x - startX.value) * 2
  swiperContainer.value.scrollLeft = scrollLeft.value - walk
}

// Track horizontal swipes so a swipe doesn't also open the preview.
// Native overflow scrolling handles the movement; hijacking touchmove
// was preventing the page from scrolling to the other projects.
const touchStartX = ref(0)

const handleTouchStart = (e: TouchEvent) => {
  hasDragged.value = false
  touchStartX.value = e.touches[0].pageX
}

const handleTouchMove = (e: TouchEvent) => {
  if (Math.abs(e.touches[0].pageX - touchStartX.value) > 6) {
    hasDragged.value = true
  }
}

const openPreviewModal = (index: number, e?: MouseEvent) => {
  if (hasDragged.value) return
  if (e) {
    const target = e.target as HTMLElement
    if (target.closest('button:not(.expand-preview-btn)')) return
  }
  activeModalIndex.value = index
  isModalOpen.value = true
}

// Update active index based on scroll position
const updateActiveIndex = () => {
  if (!swiperContainer.value) return
  const container = swiperContainer.value
  const slides = [...container.children] as HTMLElement[]
  if (slides.length === 0) return
  const scrollLeft = container.scrollLeft
  let index = 0
  let best = Infinity
  slides.forEach((slide, i) => {
    const dist = Math.abs(slide.offsetLeft - scrollLeft)
    if (dist < best) {
      best = dist
      index = i
    }
  })
  activePreviewIndex.value = Math.min(index, props.project.previews.length - 1)
}

// Scroll to specific preview index
const selectPreview = (index: number) => {
  if (!swiperContainer.value) return
  const container = swiperContainer.value
  const slide = container.children[index] as HTMLElement | undefined
  container.scrollTo({
    left: slide ? slide.offsetLeft : index * container.clientWidth,
    behavior: 'smooth',
  })
  activePreviewIndex.value = index
}

// Handle scroll events to update active index
let scrollTimeout: number | null = null
const handleScroll = () => {
  if (scrollTimeout) {
    clearTimeout(scrollTimeout)
  }
  scrollTimeout = window.setTimeout(() => {
    updateActiveIndex()
  }, 100)
}

onMounted(() => {
  if (swiperContainer.value) {
    swiperContainer.value.addEventListener('mousemove', handleMouseMove)
    swiperContainer.value.addEventListener('mouseup', handleMouseUp)
    swiperContainer.value.addEventListener('mouseleave', handleMouseLeave)
    swiperContainer.value.addEventListener('scroll', handleScroll)
    // Use scrollend if available, otherwise rely on debounced scroll
    if ('onscrollend' in swiperContainer.value) {
      swiperContainer.value.addEventListener('scrollend', updateActiveIndex)
    }
  }
})

onUnmounted(() => {
  if (scrollTimeout) {
    clearTimeout(scrollTimeout)
  }
  if (swiperContainer.value) {
    swiperContainer.value.removeEventListener('mousemove', handleMouseMove)
    swiperContainer.value.removeEventListener('mouseup', handleMouseUp)
    swiperContainer.value.removeEventListener('mouseleave', handleMouseLeave)
    swiperContainer.value.removeEventListener('scroll', handleScroll)
    if ('onscrollend' in swiperContainer.value) {
      swiperContainer.value.removeEventListener('scrollend', updateActiveIndex)
    }
  }
})
</script>

<template>
  <article class="mb-8 last:mb-0 min-w-0 max-w-full">
    <!-- Compact View -->
    <button
      @click="toggleExpand"
      @keydown="handleKeydown"
      :aria-expanded="localExpanded"
      :aria-controls="`project-${project.id}-details`"
      class="w-full text-left focus:outline-none"
    >
      <div
        class="flex items-center justify-between gap-4 py-4 px-4 -mx-4 rounded-lg transition-all duration-300 relative overflow-hidden"
        :class="
          localExpanded
            ? 'border-b border-[var(--border)] pb-6'
            : 'hover:bg-[var(--bg-secondary)]/30 project-card-glow'
        "
      >
        <div class="flex-1 min-w-0">
          <div class="flex items-start justify-between gap-4 mb-2">
            <h3 class="text-xl font-bold text-[var(--text)] flex-1">{{ project.title }}</h3>
            <div class="flex items-center gap-3 flex-shrink-0">
              <!-- Company Badge -->
              <div
                class="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg"
              >
                <img
                  v-if="project.company.logo"
                  :src="project.company.logo"
                  :alt="`${project.company.name} logo`"
                  class="w-4 h-4 object-contain flex-shrink-0"
                />
                <span class="text-xs font-medium text-[var(--text-muted)]">{{
                  project.company.name
                }}</span>
              </div>
              <svg
                class="w-5 h-5 text-[var(--text-muted)] flex-shrink-0 transition-transform duration-300 arrow-glow"
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
      class="grid"
      :class="localExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
    >
      <div class="overflow-hidden min-h-0 min-w-0">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 pt-6 pb-8 min-w-0">
          <div class="space-y-6 min-w-0 max-w-full">
            <div v-if="hasProblemSolution" class="space-y-4">
              <div>
                <h4 class="text-sm font-semibold text-[var(--text-muted)] uppercase mb-2">
                  Problem
                </h4>
                <p class="text-[var(--text)] whitespace-pre-line leading-relaxed">
                  {{ project.problem }}
                </p>
              </div>

              <div>
                <h4 class="text-sm font-semibold text-[var(--text-muted)] uppercase mb-2">
                  Solution
                </h4>
                <p class="text-[var(--text)] whitespace-pre-line leading-relaxed">
                  {{ project.solution }}
                </p>
              </div>
            </div>

            <div v-else>
              <h4 class="text-sm font-semibold text-[var(--text-muted)] uppercase mb-2">Summary</h4>
              <p class="text-[var(--text)] whitespace-pre-line leading-relaxed">
                {{ project.outcome }}
              </p>
            </div>

            <div>
              <h4 class="text-sm font-semibold text-[var(--text-muted)] uppercase mb-2">Outcome</h4>
              <p class="text-[var(--text)] whitespace-pre-line leading-relaxed">
                {{ project.outcome }}
              </p>
            </div>

            <div v-if="project.demo || project.repo" class="flex flex-wrap items-center gap-4 pt-2">
              <a
                v-if="project.demo"
                :href="project.demo"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm font-medium text-[var(--primary)] hover:text-[var(--primary)]/80 hover:underline transition-colors inline-flex items-center gap-1.5"
              >
                {{ project.demoLabel || 'Visit Live Site →' }}
              </a>
              <a
                v-if="project.repo"
                :href="project.repo"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm text-[var(--text-muted)] hover:text-[var(--primary)] hover:underline transition-colors inline-flex items-center gap-1.5"
              >
                {{ project.repoLabel || 'View Repository →' }}
              </a>
            </div>
          </div>

          <div class="min-w-0 max-w-full">
            <div
              v-if="project.previews.length > 0"
              class="relative min-w-0 max-w-full"
              role="region"
              :aria-label="`Preview gallery for ${project.title}`"
            >
              <div
                ref="swiperContainer"
                class="flex w-full min-w-0 max-w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide cursor-grab active:cursor-grabbing"
                style="
                  scroll-behavior: smooth;
                  -webkit-overflow-scrolling: touch;
                  scroll-snap-type: x mandatory;
                "
                @mousedown="handleMouseDown"
                @touchstart="handleTouchStart"
                @touchmove="handleTouchMove"
              >
                <div
                  v-for="(preview, index) in project.previews"
                  :key="preview.id"
                  class="w-full min-w-full shrink-0 snap-center relative group/preview"
                  style="scroll-snap-align: center"
                  @click="openPreviewModal(index, $event)"
                >
                  <button
                    type="button"
                    @click.stop="openPreviewModal(index)"
                    class="expand-preview-btn absolute top-3 right-3 z-10 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#16161ad8] hover:bg-[var(--secondary)] border border-[var(--border)] hover:border-[var(--primary)] text-[11px] font-mono text-[var(--text-muted)] hover:text-[var(--primary)] shadow-md transition-all duration-200 cursor-pointer backdrop-blur-xs"
                    title="Click to open big screen overlay"
                  >
                    <svg
                      class="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"
                      />
                    </svg>
                    <span>Expand</span>
                  </button>

                  <div class="cursor-pointer">
                    <ProjectPreview :preview="preview" />
                  </div>
                </div>
              </div>
              <div class="flex items-center justify-between mt-2 px-1">
                <p class="text-[11px] font-mono text-[var(--text-muted)]/70">Click to inspect</p>
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
      </div>
    </div>

    <!-- Big Screen Overlay Modal -->
    <PreviewModal
      :is-open="isModalOpen"
      :project="project"
      :current-index="activeModalIndex"
      @close="isModalOpen = false"
      @select-index="activeModalIndex = $event"
    />
  </article>
</template>
