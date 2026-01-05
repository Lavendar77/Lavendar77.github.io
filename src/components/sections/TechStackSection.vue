<script setup lang="ts">
const techStack = {
  Languages: ['TypeScript', 'JavaScript', 'Python', 'PHP', 'Go', 'SQL'],
  Frameworks: ['Vue.js', 'Node.js', 'Laravel', 'Symfony', 'Express'],
  Infrastructure: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
  Databases: ['PostgreSQL', 'MySQL', 'Redis', 'MongoDB', 'ClickHouse'],
  Tooling: ['Git', 'ESLint', 'Prettier', 'Jest', 'Webpack', 'Vite'],
}
</script>

<template>
  <section id="tech-stack" class="py-24">
    <div class="container-custom">
      <h2 class="text-4xl font-bold text-[var(--text)] mb-16">Tech Stack</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div v-for="(items, category) in techStack" :key="category">
          <h3 class="text-lg font-semibold text-[var(--text-muted)] uppercase mb-4">{{ category }}</h3>
          <ul class="space-y-2">
            <li
              v-for="item in items"
              :key="item"
              class="text-[var(--text)] font-mono text-sm"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
