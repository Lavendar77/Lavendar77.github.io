<script setup lang="ts">
import { useHead } from '@vueuse/head'
import Footer from '@/components/layout/Footer.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import WorkSection from '@/components/sections/WorkSection.vue'
import PrinciplesSection from '@/components/sections/PrinciplesSection.vue'
import TechStackSection from '@/components/sections/TechStackSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import { calculateYearsOfExperience } from '@/utils/constants'

const yearsOfExperience = calculateYearsOfExperience()
const experienceText = `Software Engineer with ${yearsOfExperience}+ years of experience building reliable, scalable systems. Specialized in backend engineering, system design, and infrastructure.`

// SEO Metadata
useHead({
  title: 'Adeyinka - Software Engineer | Portfolio',
  meta: [
    {
      name: 'description',
      content: experienceText,
    },
    {
      name: 'keywords',
      content:
        'software engineer, backend developer, system design, TypeScript, Node.js, microservices, infrastructure, portfolio',
    },
    {
      name: 'author',
      content: 'Adeyinka',
    },
    // Open Graph
    {
      property: 'og:title',
      content: 'Adeyinka - Software Engineer | Portfolio',
    },
    {
      property: 'og:description',
      content: experienceText,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: 'https://lavendar77.github.io',
    },
    {
      property: 'og:image',
      content: 'https://lavendar77.github.io/android-chrome-512x512.png',
    },
    // Twitter Cards
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: 'Adeyinka - Software Engineer | Portfolio',
    },
    {
      name: 'twitter:description',
      content: experienceText,
    },
    {
      name: 'twitter:image',
      content: 'https://lavendar77.github.io/android-chrome-512x512.png',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
    // Preconnect for fonts
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: '',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap',
    },
  ],
})
</script>

<template>
  <div id="app" class="min-h-screen">
    <main>
      <HeroSection />
      <WorkSection />
      <PrinciplesSection />
      <TechStackSection />
      <ExperienceSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
</template>
