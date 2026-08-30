<script setup lang="ts">
import { useHead } from '@vueuse/head'
import Footer from '@/components/layout/Footer.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import WorkSection from '@/components/sections/WorkSection.vue'
import TechStackSection from '@/components/sections/TechStackSection.vue'
import SpecialMentionsSection from '@/components/sections/SpecialMentionsSection.vue'
import PrinciplesSection from '@/components/sections/PrinciplesSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import { calculateYearsOfExperience } from '@/utils/constants'

const yearsOfExperience = calculateYearsOfExperience()
const experienceText = `Senior software engineer with ${yearsOfExperience}+ years building reliable backend systems and distributed architectures. Exploring AI agents, MCP, and the software layer that makes AI dependable.`
const siteUrl = 'https://lavendar77.github.io'
const ogImage = `${siteUrl}/android-chrome-512x512.png`

// JSON-LD structured data for search engines
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      name: 'Adeyinka - Senior Software Engineer',
      url: siteUrl,
      description: experienceText,
    },
    {
      '@type': 'Person',
      name: 'Adeyinka',
      url: siteUrl,
      jobTitle: 'Senior Software Engineer',
      description: experienceText,
    },
  ],
}

// SEO Metadata
useHead({
  title: 'Adeyinka - Senior Backend & AI Systems Engineer',
  meta: [
    {
      name: 'description',
      content: experienceText,
    },
    {
      name: 'keywords',
      content:
        'software engineer, backend developer, system design, microservices, infrastructure, AI agents, MCP, agent orchestration, AI systems, LLM integration, portfolio',
    },
    {
      name: 'author',
      content: 'Adeyinka',
    },
    {
      name: 'theme-color',
      content: '#0f0f12',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    // Open Graph
    {
      property: 'og:title',
      content: 'Adeyinka - Backend & AI Systems Engineer',
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
      content: `${siteUrl}/`,
    },
    {
      property: 'og:site_name',
      content: 'Adeyinka - Software Engineer',
    },
    {
      property: 'og:image',
      content: ogImage,
    },
    {
      property: 'og:image:width',
      content: '512',
    },
    {
      property: 'og:image:height',
      content: '512',
    },
    {
      property: 'og:image:alt',
      content: 'Adeyinka - Software Engineer',
    },
    {
      property: 'og:locale',
      content: 'en_US',
    },
    // Twitter Cards
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: 'Adeyinka - Backend & AI Systems Engineer',
    },
    {
      name: 'twitter:description',
      content: experienceText,
    },
    {
      name: 'twitter:image',
      content: ogImage,
    },
    {
      name: 'twitter:image:alt',
      content: 'Adeyinka - Software Engineer',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: `${siteUrl}/`,
    },
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
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(jsonLd),
    },
  ],
})
</script>

<template>
  <div id="app" class="min-h-screen">
    <main>
      <HeroSection />
      <WorkSection />
      <TechStackSection />
      <SpecialMentionsSection />
      <PrinciplesSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
</template>
