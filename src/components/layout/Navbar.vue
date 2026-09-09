<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted, nextTick } from 'vue'

const resumeViewLink =
  'https://drive.google.com/file/d/17wjEZG9f9sC5u0ivzuQ3H3b0YIDNx29H/view?usp=sharing'

const navItems = [
  { id: 'work', name: 'Work', href: '#work' },
  { id: 'tech-stack', name: 'Tech Stack', href: '#tech-stack' },
  { id: 'special-mentions', name: 'Special Mentions', href: '#special-mentions' },
  { id: 'principles', name: 'Principles', href: '#principles' },
  { id: 'contact', name: 'Contact', href: '#contact' },
]

const activeSection = ref<string>('work')
const navContainerRef = ref<HTMLElement | null>(null)

const scrollActiveNavIntoView = async (sectionId: string) => {
  await nextTick()
  if (!navContainerRef.value) return
  const container = navContainerRef.value
  const activeEl = container.querySelector(`[data-nav-id="${sectionId}"]`) as HTMLElement | null

  if (activeEl) {
    const containerRect = container.getBoundingClientRect()
    const elRect = activeEl.getBoundingClientRect()

    // Element's visual offset from the container's left edge + existing scrollLeft
    const elRelativeLeft = elRect.left - containerRect.left + container.scrollLeft

    // Center the element inside the visible container width
    const targetScrollLeft = elRelativeLeft - container.clientWidth / 2 + activeEl.offsetWidth / 2

    container.scrollTo({
      left: Math.max(0, targetScrollLeft),
      behavior: 'smooth',
    })
  }
}

watch(
  activeSection,
  newSection => {
    scrollActiveNavIntoView(newSection)
  },
  { immediate: true }
)

const scrollToTop = (e: Event) => {
  e.preventDefault()
  activeSection.value = 'work'
  scrollActiveNavIntoView('work')
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const scrollToSection = (e: Event, href: string) => {
  e.preventDefault()
  const target = document.querySelector(href) as HTMLElement | null
  if (target) {
    const sectionId = href.slice(1)
    activeSection.value = sectionId
    scrollActiveNavIntoView(sectionId)

    const navbarHeight = 56
    const targetTop = target.getBoundingClientRect().top + window.scrollY - navbarHeight
    window.scrollTo({
      top: targetTop,
      behavior: 'smooth',
    })
  }
}

let scrollRaf: number | null = null

const updateActiveSection = () => {
  if (scrollRaf) cancelAnimationFrame(scrollRaf)

  scrollRaf = requestAnimationFrame(() => {
    const navbarHeight = 56
    const triggerOffset = 160 // Distance from top of viewport

    // 1. Bottom of page check
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
      if (activeSection.value !== 'contact') {
        activeSection.value = 'contact'
      }
      return
    }

    // 2. Check each section using getBoundingClientRect
    let currentId = 'work'
    for (const item of navItems) {
      const el = document.querySelector(item.href) as HTMLElement | null
      if (el) {
        const rect = el.getBoundingClientRect()
        if (rect.top <= triggerOffset && rect.bottom > navbarHeight) {
          currentId = item.id
        }
      }
    }

    if (activeSection.value !== currentId) {
      activeSection.value = currentId
    }
  })
}

onMounted(() => {
  window.addEventListener('scroll', updateActiveSection, { passive: true })
  window.addEventListener('resize', () => scrollActiveNavIntoView(activeSection.value), {
    passive: true,
  })

  // Initial check on load
  updateActiveSection()
  scrollActiveNavIntoView(activeSection.value)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection)
  if (scrollRaf) cancelAnimationFrame(scrollRaf)
})
</script>

<template>
  <nav
    class="sticky top-0 z-40 w-full border-b border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur-md transition-colors"
  >
    <div class="container-custom flex items-center justify-between h-14 gap-2 sm:gap-4">
      <!-- Left Brand / Home Link -->
      <div class="flex items-center gap-2 flex-shrink-0">
        <a
          href="#hero"
          @click="scrollToTop"
          class="group flex items-center gap-2 py-1 px-2 -ml-2 rounded-lg hover:bg-[var(--bg-secondary)]/60 transition-all"
          title="Scroll to top"
        >
          <div
            class="w-2 h-2 rounded-full bg-[var(--primary)] group-hover:scale-125 transition-transform"
          ></div>
          <span
            class="text-sm font-bold tracking-tight text-[var(--text)] group-hover:text-[var(--primary)] font-mono transition-colors"
          >
            Adeyinka
          </span>
        </a>
      </div>

      <!-- Nav Links Container with horizontal scroll focus -->
      <div
        ref="navContainerRef"
        class="flex items-center gap-1 sm:gap-2 overflow-x-auto scrollbar-hide py-2 scroll-smooth flex-1 max-w-full justify-start sm:justify-center"
        style="-webkit-overflow-scrolling: touch"
      >
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          :data-nav-id="item.id"
          @click="scrollToSection($event, item.href)"
          class="px-2.5 sm:px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-all whitespace-nowrap flex-shrink-0"
          :class="[
            activeSection === item.id
              ? 'text-[var(--primary)] bg-[var(--primary)]/10 font-semibold'
              : 'text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--bg-secondary)]/50',
          ]"
        >
          {{ item.name }}
        </a>
      </div>

      <!-- Right CTA: Resume Link -->
      <div class="flex items-center pl-1 sm:pl-2 flex-shrink-0">
        <a
          :href="resumeViewLink"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-md text-xs font-mono font-medium text-[var(--primary)] border border-[var(--primary)]/30 bg-[var(--primary)]/5 hover:bg-[var(--primary)]/15 transition-all"
        >
          <span>Resume</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-3.5 h-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </div>
  </nav>
</template>
