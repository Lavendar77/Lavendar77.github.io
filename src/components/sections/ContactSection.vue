<script setup lang="ts">
import { ref } from 'vue'

const email = 'folurinyinka@gmail.com'
const copied = ref(false)

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(email)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch {
    // Fallback if clipboard fails
    const textarea = document.createElement('textarea')
    textarea.value = email
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  }
}
</script>

<template>
  <section id="contact" class="py-24">
    <div class="container-custom text-center">
      <h2 class="text-4xl font-bold text-[var(--text)] mb-8">Get in Touch</h2>
      <p class="text-lg text-[var(--text-muted)] mb-10 max-w-2xl mx-auto">
        I'm always open to discussing new opportunities, interesting projects, or technical
        challenges. Feel free to reach out.
      </p>

      <!-- Email box with Copy button -->
      <div
        class="max-w-md mx-auto mb-10 p-2 sm:p-2.5 rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)]/60 flex items-center justify-between gap-3 shadow-lg shadow-black/20"
      >
        <a
          :href="`mailto:${email}`"
          class="text-sm sm:text-base font-mono text-[var(--text)] hover:text-[var(--primary)] pl-3 truncate transition-colors"
          title="Send email"
        >
          {{ email }}
        </a>
        <button
          @click="copyEmail"
          class="px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all flex items-center gap-1.5 cursor-pointer flex-shrink-0"
          :class="
            copied
              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
              : 'bg-[var(--primary)]/10 text-[var(--primary)] hover:bg-[var(--primary)]/20 border border-[var(--primary)]/30'
          "
        >
          <svg
            v-if="copied"
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
              d="M5 13l4 4L19 7"
            />
          </svg>
          <svg
            v-else
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
              d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
            />
          </svg>
          <span>{{ copied ? 'Copied!' : 'Copy' }}</span>
        </button>
      </div>

      <div class="flex gap-6 justify-center items-center flex-wrap">
        <a
          href="https://github.com/lavendar77"
          target="_blank"
          rel="noopener noreferrer"
          class="text-[var(--text)] hover:text-[var(--primary)] hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--bg)] rounded px-4 py-2"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/adeyinka-adefolurin"
          target="_blank"
          rel="noopener noreferrer"
          class="text-[var(--text)] hover:text-[var(--primary)] hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--bg)] rounded px-4 py-2"
        >
          LinkedIn
        </a>
        <a
          href="https://twitter.com/_fykay"
          target="_blank"
          rel="noopener noreferrer"
          class="text-[var(--text)] hover:text-[var(--primary)] hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--bg)] rounded px-4 py-2"
        >
          𝕏
        </a>
      </div>
    </div>
  </section>
</template>
