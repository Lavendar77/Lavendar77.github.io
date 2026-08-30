<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const resumeViewLink =
  'https://drive.google.com/file/d/17wjEZG9f9sC5u0ivzuQ3H3b0YIDNx29H/view?usp=sharing'

const navItems = [
  { name: 'Work', href: '#work' },
  { name: 'Tech Stack', href: '#tech-stack' },
  { name: 'Special Mentions', href: '#special-mentions' },
  { name: 'Principles', href: '#principles' },
  { name: 'Contact', href: '#contact' },
]

const activeSection = ref<string>('work')

const scrollToTop = (e: Event) => {
  e.preventDefault()
  const hero = document.querySelector('#hero')
  if (hero) {
    hero.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const scrollToSection = (e: Event, href: string) => {
  e.preventDefault()
  const target = document.querySelector(href)
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

let observer: IntersectionObserver | null = null

onMounted(() => {
  if (typeof IntersectionObserver === 'undefined') return

  observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    },
    { rootMargin: '-20% 0px -70% 0px' }
  )

  navItems.forEach(item => {
    const el = document.querySelector(item.href)
    if (el) observer?.observe(el)
  })
})

onUnmounted(() => {
  observer?.disconnect()
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

      <!-- Nav Links -->
      <div class="flex items-center gap-1 sm:gap-2 overflow-x-auto scrollbar-hide py-2">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          @click="scrollToSection($event, item.href)"
          class="px-2.5 sm:px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-all whitespace-nowrap"
          :class="[
            activeSection === item.href.slice(1)
              ? 'text-[var(--primary)] bg-[var(--primary)]/10 font-semibold'
              : 'text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--bg-secondary)]/50',
          ]"
        >
          {{ item.name }}
        </a>
      </div>

      <!-- Right CTA: Resume Link -->
      <div class="flex items-center pl-2 flex-shrink-0">
        <a
          :href="resumeViewLink"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-medium text-[var(--primary)] border border-[var(--primary)]/30 bg-[var(--primary)]/5 hover:bg-[var(--primary)]/15 transition-all"
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
