<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { projects } from '@/data/projects'
import ProjectCard from '@/components/projects/ProjectCard.vue'

const expandedProjectId = ref<string | null>(null)

onMounted(() => {
  // Expand first project by default
  if (projects.length > 0) {
    expandedProjectId.value = projects[0].id
  }
})

const handleProjectToggle = (projectId: string, isExpanded: boolean) => {
  expandedProjectId.value = isExpanded ? projectId : null
}
</script>

<template>
  <section id="work" class="py-24">
    <div class="container-custom">
      <h2 class="text-4xl font-bold text-[var(--text)] mb-4">Work</h2>
      <p class="text-lg text-[var(--text-muted)] mb-16 max-w-2xl">
        A few projects that reflect how I think and build.
      </p>
      <div>
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
          :is-expanded="expandedProjectId === project.id"
          @toggle="handleProjectToggle"
        />
      </div>
    </div>
  </section>
</template>
