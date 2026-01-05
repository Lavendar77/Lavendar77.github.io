<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const navItems = [
  { label: 'Work', anchor: '#work' },
  { label: 'Principles', anchor: '#principles' },
  { label: 'Tech Stack', anchor: '#tech-stack' },
  { label: 'Experience', anchor: '#experience' },
  { label: 'Contact', anchor: '#contact' },
]

const activeSection = ref<string>('')
const isMobileMenuOpen = ref(false)

const scrollTo = (anchor: string) => {
  const element = document.querySelector(anchor)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    isMobileMenuOpen.value = false
  }
}

const updateActiveSection = () => {
  const sections = ['#hero', '#work', '#principles', '#tech-stack', '#experience', '#contact']
  const scrollPosition = window.scrollY + 100

  if (scrollPosition < 200) {
    activeSection.value = '#hero'
    return
  }

  for (let i = sections.length - 1; i >= 0; i--) {
    const section = document.querySelector(sections[i])
    if (section) {
      const rect = section.getBoundingClientRect()
      if (rect.top <= 150 && rect.bottom >= 150) {
        activeSection.value = sections[i]
        return
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', updateActiveSection)
  updateActiveSection()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection)
})
</script>

<template>
  <header class="sticky top-0 z-50 bg-[var(--bg)]/80 backdrop-blur-sm border-b border-[var(--border)]">
    <nav class="container-custom py-4" aria-label="Main navigation">
      <div class="flex items-center justify-between">
        <a
          href="#"
          @click.prevent="scrollTo('#hero')"
          class="text-xl font-semibold text-[var(--text)] hover:text-[var(--primary)] transition-colors"
          aria-label="Go to top"
        >
          Adeyinka
        </a>
        <!-- Desktop Menu -->
        <ul class="hidden md:flex gap-6 items-center">
          <li v-for="item in navItems" :key="item.anchor">
            <button
              @click="scrollTo(item.anchor)"
              class="relative transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--bg)]"
              :class="
                activeSection === item.anchor
                  ? 'text-[var(--text)]'
                  : 'text-[var(--text-muted)] hover:text-[var(--text)]'
              "
            >
              <span class="relative">
                {{ item.label }}
                <span
                  v-if="activeSection === item.anchor"
                  class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 translate-y-full text-[var(--primary)] font-bold"
                  style="font-size: 0.5rem; line-height: 0;"
                >
                  •
                </span>
              </span>
            </button>
          </li>
        </ul>
        <!-- Mobile Menu Button -->
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="md:hidden text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] rounded p-2"
          aria-label="Toggle menu"
          :aria-expanded="isMobileMenuOpen"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              v-if="!isMobileMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <!-- Mobile Menu -->
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden mt-4 pb-4 pt-4 border-t border-[var(--border)]/30"
      >
        <ul class="flex flex-col gap-4">
          <li v-for="item in navItems" :key="item.anchor">
            <button
              @click="scrollTo(item.anchor)"
              class="w-full text-left relative transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              :class="
                activeSection === item.anchor
                  ? 'text-[var(--text)]'
                  : 'text-[var(--text-muted)] hover:text-[var(--text)]'
              "
            >
              <span class="relative">
                {{ item.label }}
                <span
                  v-if="activeSection === item.anchor"
                  class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 translate-y-full text-[var(--primary)] font-bold"
                  style="font-size: 0.5rem; line-height: 0;"
                >
                  •
                </span>
              </span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
