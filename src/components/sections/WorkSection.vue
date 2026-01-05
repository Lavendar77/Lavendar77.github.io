<script setup lang="ts">
import { projects } from '@/data/projects'
import ProjectCard from '@/components/projects/ProjectCard.vue'
</script>

<template>
  <section id="work" class="py-24">
    <div class="container-custom">
      <h2 class="text-4xl font-bold text-[var(--text)] mb-16">Work</h2>
      <div>
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
      </div>
    </div>
  </section>
</template>
