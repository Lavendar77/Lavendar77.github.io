<script setup lang="ts">
const resumeViewLink =
  'https://drive.google.com/file/d/17wjEZG9f9sC5u0ivzuQ3H3b0YIDNx29H/view?usp=sharing'

const scrollToWork = () => {
  const element = document.querySelector('#work')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<template>
  <section
    id="hero"
    class="min-h-screen flex items-center justify-center relative overflow-hidden bg-[var(--bg)]"
  >
    <!-- Subtle grid pattern (code-like structure) -->
    <div
      class="absolute inset-0 opacity-[0.03]"
      style="
        background-image:
          linear-gradient(rgba(190, 174, 211, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(190, 174, 211, 0.1) 1px, transparent 1px);
        background-size: 40px 40px;
      "
    ></div>

    <!-- Code-like lines flowing -->
    <div class="absolute inset-0 overflow-hidden opacity-10">
      <div
        class="absolute top-1/4 left-0 w-full h-px bg-[var(--primary)]/30 animate-code-flow"
        style="animation-delay: 0s"
      ></div>
      <div
        class="absolute top-1/2 left-0 w-full h-px bg-[var(--primary)]/20 animate-code-flow"
        style="animation-delay: 2s; animation-duration: 10s"
      ></div>
      <div
        class="absolute top-3/4 left-0 w-full h-px bg-[var(--primary)]/25 animate-code-flow"
        style="animation-delay: 4s; animation-duration: 12s"
      ></div>
    </div>

    <!-- Network/data flow connections -->
    <svg
      class="absolute inset-0 w-full h-full opacity-15"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 800"
    >
      <defs>
        <linearGradient id="connection-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color: rgb(190, 174, 211); stop-opacity: 0.4" />
          <stop offset="100%" style="stop-color: rgb(54, 22, 103); stop-opacity: 0.3" />
        </linearGradient>
      </defs>
      <!-- Data flow paths -->
      <path
        d="M100,200 L300,150 L500,200 L700,180 L900,200"
        fill="none"
        stroke="url(#connection-gradient)"
        stroke-width="1.5"
        stroke-dasharray="5,5"
        class="animate-network-connect"
        style="animation-delay: 0s"
      />
      <path
        d="M150,400 L350,380 L550,400 L750,390 L950,400"
        fill="none"
        stroke="url(#connection-gradient)"
        stroke-width="1.5"
        stroke-dasharray="5,5"
        class="animate-network-connect"
        style="animation-delay: 1s"
      />
      <path
        d="M200,600 L400,580 L600,600 L800,590 L1000,600"
        fill="none"
        stroke="url(#connection-gradient)"
        stroke-width="1.5"
        stroke-dasharray="5,5"
        class="animate-network-connect"
        style="animation-delay: 2s"
      />
      <!-- Connection nodes -->
      <circle
        cx="300"
        cy="150"
        r="3"
        fill="rgb(190, 174, 211)"
        opacity="0.4"
        class="animate-data-pulse"
      />
      <circle
        cx="550"
        cy="400"
        r="3"
        fill="rgb(190, 174, 211)"
        opacity="0.4"
        class="animate-data-pulse"
        style="animation-delay: 1s"
      />
      <circle
        cx="800"
        cy="590"
        r="3"
        fill="rgb(190, 174, 211)"
        opacity="0.4"
        class="animate-data-pulse"
        style="animation-delay: 2s"
      />
    </svg>

    <!-- Subtle radial gradients for depth -->
    <div
      class="absolute inset-0 pointer-events-none"
      style="
        background-image:
          radial-gradient(circle at 20% 30%, rgba(190, 174, 211, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(54, 22, 103, 0.06) 0%, transparent 50%);
      "
    ></div>

    <!-- Content -->
    <div class="container-custom text-center relative z-10 animate-fade-in-up">
      <div class="inline-block mb-4">
        <div
          class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[var(--border)] bg-[var(--bg-secondary)]/50"
        >
          <div
            class="w-2 h-2 bg-[var(--primary)] rounded-full animate-pulse-slow flex-shrink-0"
          ></div>
          <span class="text-xs sm:text-sm text-[var(--text-muted)] font-mono tracking-wider"
            >AVAILABLE FOR WORK · REMOTE / RELOCATION</span
          >
          <div
            class="w-2 h-2 bg-[var(--primary)] rounded-full animate-pulse-slow flex-shrink-0"
            style="animation-delay: 1s"
          ></div>
        </div>
      </div>

      <h1 class="text-5xl md:text-7xl font-bold mb-6 text-[var(--text)] relative font-mono">
        <span class="relative z-10 inline-block">
          <span class="inline-block">Adeyinka</span>
          <span
            class="inline-block w-0.5 h-[0.9em] bg-[var(--primary)] ml-1 align-middle animate-cursor-blink"
          ></span>
        </span>
        <span
          class="absolute inset-0 blur-sm opacity-30 text-[var(--primary)] font-mono"
          style="transform: translate(2px, 2px)"
        >
          Adeyinka
        </span>
      </h1>

      <div class="mb-8">
        <p class="text-2xl md:text-3xl text-[var(--text-muted)] mb-2 font-medium">
          Senior Software Engineer
        </p>
        <p class="text-sm font-mono text-[var(--primary)]/60 tracking-wider">
          Backend · Cloud · AI Systems
        </p>
        <div class="flex items-center justify-center gap-2 mt-4">
          <div class="h-px w-12 bg-[var(--primary)]/50"></div>
          <div class="w-2 h-2 bg-[var(--primary)] rounded-full"></div>
          <div class="h-px w-12 bg-[var(--primary)]/50"></div>
        </div>
      </div>

      <p class="text-lg text-[var(--text-muted)] max-w-3xl mx-auto mb-10 leading-relaxed">
        Building reliable, scalable systems that power production applications. Focused on
        performance, maintainability, and pragmatic engineering decisions. Increasingly exploring
        how those principles make AI-native agents dependable in production.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button
          @click="scrollToWork"
          class="px-8 py-3 bg-[var(--primary)] text-[var(--secondary)] rounded-lg hover:opacity-90 hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--bg)] font-semibold shadow-lg shadow-[var(--primary)]/20 relative overflow-hidden group cursor-pointer"
        >
          <span class="relative z-10">View my work</span>
          <span
            class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
          ></span>
        </button>
        <a
          :href="resumeViewLink"
          target="_blank"
          rel="noopener noreferrer"
          class="px-8 py-3 border-2 border-[var(--primary)]/50 text-[var(--text)] rounded-lg hover:bg-[var(--primary)]/10 hover:border-[var(--primary)] transition-all focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--bg)] font-semibold inline-flex items-center justify-center gap-2"
        >
          <span>Open Resume</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4"
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
  </section>
</template>
