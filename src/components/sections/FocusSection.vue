<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const layers = [
  {
    label: 'FOUNDATION',
    name: 'Backend Systems',
    items: ['PHP', 'Laravel', 'Node.js', 'TypeScript', 'MySQL', 'PostgreSQL', 'Redis'],
    active: false,
  },
  {
    label: 'INFRASTRUCTURE',
    name: 'Cloud & Distributed Systems',
    items: ['AWS', 'Google Cloud', 'Docker', 'Kafka', 'Serverless', 'CI/CD'],
    active: false,
  },
  {
    label: 'ARCHITECTURE',
    name: 'System Design',
    items: ['Microservices', 'APIs', 'Event-driven systems', 'Queues', 'Observability'],
    active: false,
  },
  {
    label: 'ACTIVE',
    name: 'AI Systems & Agents',
    items: [
      'LLMs',
      'AI Agents',
      'MCP',
      'Context Engineering',
      'Agent Orchestration',
      'AI Reliability',
    ],
    active: true,
  },
]

const sectionRef = ref<HTMLElement | null>(null)
const revealed = ref(false)

let observer: IntersectionObserver | null = null

onMounted(() => {
  if (typeof IntersectionObserver === 'undefined') {
    revealed.value = true
    return
  }
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        revealed.value = true
        observer?.disconnect()
      }
    },
    { threshold: 0.1 }
  )
  if (sectionRef.value) observer.observe(sectionRef.value)
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<template>
  <section id="current-focus" ref="sectionRef" class="py-24 relative">
    <div class="container-custom">
      <h2 class="text-4xl font-bold text-[var(--text)] mb-4">Current focus</h2>
      <p class="text-lg text-[var(--text-muted)] mb-16 max-w-2xl">
        The layers below reflect how my engineering work has evolved. Each built on the one before.
        The active layer is where I'm currently focused.
      </p>

      <!-- Layered stack -->
      <div class="max-w-xl mx-auto">
        <template v-for="(layer, index) in layers" :key="layer.label">
          <!-- Layer card -->
          <div
            class="rounded-lg border p-6 transition-all duration-500"
            :class="[
              layer.active
                ? 'border-[var(--primary)] bg-[var(--primary)]/5'
                : 'border-[var(--border)] bg-transparent',
              revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
              revealed && layer.active ? 'animate-active-layer' : '',
            ]"
            :style="{
              transitionDelay: revealed ? `${index * 140}ms` : '0ms',
              animationDelay: '900ms',
            }"
          >
            <!-- Label -->
            <p
              class="text-xs font-mono tracking-widest mb-2"
              :class="layer.active ? 'text-[var(--primary)]' : 'text-[var(--text-muted)]/50'"
            >
              [ {{ layer.label }} ]
            </p>

            <!-- Name -->
            <h3
              class="text-lg font-bold mb-3"
              :class="layer.active ? 'text-[var(--text)]' : 'text-[var(--text-muted)]'"
            >
              {{ layer.name }}
            </h3>

            <!-- Items -->
            <p
              class="text-sm font-mono"
              :class="layer.active ? 'text-[var(--primary)]/80' : 'text-[var(--text-muted)]/60'"
            >
              {{ layer.items.join(' · ') }}
            </p>
          </div>

          <!-- Connector between layers -->
          <div
            v-if="index < layers.length - 1"
            class="flex flex-col items-center py-1 transition-opacity duration-500"
            :style="{ transitionDelay: revealed ? `${index * 140 + 100}ms` : '0ms' }"
            :class="revealed ? 'opacity-100' : 'opacity-0'"
            aria-hidden="true"
          >
            <div
              class="w-px h-6 bg-gradient-to-b"
              :class="
                index === layers.length - 2
                  ? 'from-[var(--border)] to-[var(--primary)]/50'
                  : 'from-[var(--border)] to-[var(--border)]'
              "
            ></div>
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              :class="
                index === layers.length - 2 ? 'text-[var(--primary)]/50' : 'text-[var(--border)]'
              "
            >
              <path
                d="M1 1L5 5L9 1"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </template>
      </div>

      <!-- Positioning paragraph -->
      <div
        class="max-w-2xl mx-auto mt-16 transition-all duration-500"
        :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        :style="{ transitionDelay: revealed ? '700ms' : '0ms' }"
      >
        <div class="border-l-2 border-[var(--primary)]/30 pl-6">
          <p class="text-[var(--text-muted)] leading-relaxed">
            AI systems don't run on abstraction alone. They need reliable APIs, constrained
            execution, context management, verification layers, and software that can fail
            gracefully. My interest is not only in what models can do, but in the engineering that
            makes them dependable in real software systems.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
