<script setup lang="ts"></script>

<template>
  <section id="contact" class="py-24">
    <div class="container-custom text-center">
      <h2 class="text-4xl font-bold text-[var(--text)] mb-8">Get in Touch</h2>
      <p class="text-lg text-[var(--text-muted)] mb-12 max-w-2xl mx-auto">
        I'm always open to discussing new opportunities, interesting projects, or technical
        challenges. Feel free to reach out.
      </p>
      <div class="flex gap-6 justify-center items-center">
        <a
          href="mailto:contact@example.com"
          class="text-[var(--text)] hover:text-[var(--primary)] hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--bg)] rounded px-4 py-2"
        >
          Email
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          class="text-[var(--text)] hover:text-[var(--primary)] hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--bg)] rounded px-4 py-2"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          class="text-[var(--text)] hover:text-[var(--primary)] hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--bg)] rounded px-4 py-2"
        >
          LinkedIn
        </a>
      </div>
    </div>
  </section>
</template>
