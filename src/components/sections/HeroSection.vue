<script setup lang="ts">
const scrollToWork = () => {
  const element = document.querySelector('#work')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const scrollToContact = () => {
  const element = document.querySelector('#contact')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<template>
  <section id="hero" class="min-h-screen flex items-center justify-center relative overflow-hidden">    <!-- Grid Pattern Overlay -->
    <!-- Animated Geometric Shapes -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Large rotating circle -->
      <div class="absolute top-20 left-10 w-64 h-64 border border-[var(--primary)]/20 rounded-full animate-rotate"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 border border-[var(--secondary)]/20 rounded-full animate-rotate" style="animation-duration: 25s; animation-direction: reverse;"></div>

      <!-- Floating geometric shapes -->
      <div class="absolute top-1/4 right-1/4 w-32 h-32 border-2 border-[var(--primary)]/30 rotate-45 animate-drift"></div>
      <div class="absolute bottom-1/3 left-1/4 w-24 h-24 border-2 border-[var(--secondary)]/30 rotate-12 animate-float-reverse" style="animation-delay: 2s;"></div>
      <div class="absolute top-1/2 right-1/3 w-16 h-16 bg-[var(--primary)]/10 rounded-full animate-float" style="animation-delay: 1s;"></div>

      <!-- Floating particles -->
      <div class="absolute top-1/3 left-1/3 w-2 h-2 bg-[var(--primary)]/40 rounded-full animate-float" style="animation-delay: 0.5s;"></div>
      <div class="absolute top-2/3 right-1/4 w-3 h-3 bg-[var(--secondary)]/40 rounded-full animate-float-reverse" style="animation-delay: 1.5s;"></div>
      <div class="absolute bottom-1/4 left-1/2 w-2 h-2 bg-[var(--primary)]/40 rounded-full animate-float" style="animation-delay: 2.5s;"></div>
      <div class="absolute top-1/5 right-1/5 w-2.5 h-2.5 bg-[var(--secondary)]/40 rounded-full animate-float-reverse" style="animation-delay: 3s;"></div>
    </div>

    <!-- Radial gradient overlays -->
    <div class="absolute inset-0" style="background-image: radial-gradient(circle at 20% 30%, rgba(190, 174, 211, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(54, 22, 103, 0.12) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(190, 174, 211, 0.08) 0%, transparent 70%);"></div>

    <!-- SVG decorative elements -->
    <svg
      class="absolute inset-0 w-full h-full opacity-20"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 800"
    >
      <defs>
        <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:rgb(190, 174, 211);stop-opacity:0.3" />
          <stop offset="50%" style="stop-color:rgb(54, 22, 103);stop-opacity:0.2" />
          <stop offset="100%" style="stop-color:rgb(190, 174, 211);stop-opacity:0.3" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#grid-gradient)" stroke-width="1.5">
        <path d="M0,200 Q300,100 600,200 T1200,200" class="animate-pulse-slow" />
        <path d="M0,400 Q300,300 600,400 T1200,400" class="animate-pulse-slow" style="animation-delay: 1s;" />
        <path d="M0,600 Q300,500 600,600 T1200,600" class="animate-pulse-slow" style="animation-delay: 2s;" />
      </g>
      <circle cx="200" cy="150" r="4" fill="rgb(190, 174, 211)" opacity="0.5" class="animate-float" />
      <circle cx="800" cy="300" r="5" fill="rgb(54, 22, 103)" opacity="0.5" class="animate-float-reverse" style="animation-delay: 1s;" />
      <circle cx="1000" cy="600" r="4" fill="rgb(190, 174, 211)" opacity="0.5" class="animate-float" style="animation-delay: 2s;" />
      <circle cx="400" cy="500" r="3" fill="rgb(54, 22, 103)" opacity="0.5" class="animate-float-reverse" style="animation-delay: 1.5s;" />
    </svg>

    <!-- Content -->
    <div class="container-custom text-center relative z-10 animate-fade-in-up">
      <div class="inline-block mb-4">
        <div class="w-2 h-2 bg-[var(--primary)] rounded-full inline-block mr-2 animate-pulse-slow"></div>
        <span class="text-sm text-[var(--text-muted)] font-mono tracking-wider">AVAILABLE FOR WORK</span>
        <div class="w-2 h-2 bg-[var(--primary)] rounded-full inline-block ml-2 animate-pulse-slow" style="animation-delay: 1s;"></div>
      </div>

      <h1 class="text-5xl md:text-7xl font-bold mb-6 text-[var(--text)] relative">
        <span class="relative z-10">Adeyinka</span>
        <span class="absolute inset-0 blur-sm opacity-30 text-[var(--primary)]" style="transform: translate(2px, 2px);">Adeyinka</span>
      </h1>

      <div class="mb-8">
        <p class="text-2xl md:text-3xl text-[var(--text-muted)] mb-2">Software Engineer</p>
        <div class="flex items-center justify-center gap-2 mt-4">
          <div class="h-px w-12 bg-[var(--primary)]/50"></div>
          <div class="w-2 h-2 bg-[var(--primary)] rounded-full"></div>
          <div class="h-px w-12 bg-[var(--primary)]/50"></div>
        </div>
      </div>

      <p class="text-lg text-[var(--text-muted)] max-w-2xl mx-auto mb-12 leading-relaxed">
        Building reliable, scalable systems that power production applications.
        <br class="hidden md:block" />
        Focused on performance, maintainability, and pragmatic engineering decisions.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button
          @click="scrollToWork"
          class="px-8 py-3 bg-[var(--primary)] text-[var(--secondary)] rounded-lg hover:opacity-90 hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--bg)] font-semibold shadow-lg shadow-[var(--primary)]/20 relative overflow-hidden group"
        >
          <span class="relative z-10">View my work</span>
          <span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
        </button>
        <button
          @click="scrollToContact"
          class="px-8 py-3 border-2 border-[var(--primary)]/50 text-[var(--text)] rounded-lg hover:bg-[var(--primary)]/10 hover:border-[var(--primary)] transition-all focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--bg)] font-semibold"
        >
          Get in touch
        </button>
      </div>
    </div>
  </section>
</template>
