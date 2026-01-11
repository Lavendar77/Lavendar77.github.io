<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
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

const localExpanded = ref(props.isExpanded)
const swiperContainer = ref<HTMLElement | null>(null)
const activePreviewIndex = ref(0)
const isDragging = ref(false)
const startX = ref(0)
const scrollLeft = ref(0)

watch(() => props.isExpanded, (newVal) => {
  localExpanded.value = newVal
  // Reset scroll position when expanded
  if (newVal && swiperContainer.value) {
    swiperContainer.value.scrollLeft = 0
    activePreviewIndex.value = 0
  }
})

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
  e.preventDefault()
  const x = e.pageX - swiperContainer.value.offsetLeft
  const walk = (x - startX.value) * 2
  swiperContainer.value.scrollLeft = scrollLeft.value - walk
}

// Touch handlers
const handleTouchStart = (e: TouchEvent) => {
  if (!swiperContainer.value) return
  isDragging.value = true
  startX.value = e.touches[0].pageX - swiperContainer.value.offsetLeft
  scrollLeft.value = swiperContainer.value.scrollLeft
}

const handleTouchMove = (e: TouchEvent) => {
  if (!isDragging.value || !swiperContainer.value) return
  e.preventDefault()
  const x = e.touches[0].pageX - swiperContainer.value.offsetLeft
  const walk = (x - startX.value) * 2
  swiperContainer.value.scrollLeft = scrollLeft.value - walk
}

const handleTouchEnd = () => {
  isDragging.value = false
}

// Update active index based on scroll position
const updateActiveIndex = () => {
  if (!swiperContainer.value) return
  const container = swiperContainer.value
  const scrollLeft = container.scrollLeft
  const containerWidth = container.clientWidth
  const index = Math.round(scrollLeft / containerWidth)
  activePreviewIndex.value = Math.min(index, props.project.previews.length - 1)
}

// Scroll to specific preview index
const selectPreview = (index: number) => {
  if (!swiperContainer.value) return
  const container = swiperContainer.value
  const containerWidth = container.clientWidth
  container.scrollTo({
    left: index * containerWidth,
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
            <h3 class="text-xl font-bold text-[var(--text)] flex-1">{{ project.title }}</h3>
            <div class="flex items-center gap-3 flex-shrink-0">
              <!-- Company Badge -->
              <div class="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg">
                <img
                  v-if="project.company.logo"
                  :src="project.company.logo"
                  :alt="`${project.company.name} logo`"
                  class="w-4 h-4 object-contain flex-shrink-0"
                />
                <span class="text-xs font-medium text-[var(--text-muted)]">{{ project.company.name }}</span>
              </div>
              <svg
                class="w-5 h-5 text-[var(--text-muted)] flex-shrink-0 transition-transform duration-300"
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
              Visit Live Site →
            </a>
          </div>
        </div>

        <div>
          <div
            v-if="project.previews.length > 0"
            class="relative"
            role="region"
            :aria-label="`Preview gallery for ${project.title}`"
          >
            <div
              ref="swiperContainer"
              class="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide cursor-grab active:cursor-grabbing"
              style="scroll-behavior: smooth; -webkit-overflow-scrolling: touch; scroll-snap-type: x mandatory;"
              @mousedown="handleMouseDown"
              @touchstart="handleTouchStart"
              @touchmove="handleTouchMove"
              @touchend="handleTouchEnd"
            >
              <div
                v-for="(preview, index) in project.previews"
                :key="preview.id"
                class="flex-shrink-0 w-full snap-center"
                style="scroll-snap-align: center;"
              >
                <ProjectPreview :preview="preview" />
              </div>
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
