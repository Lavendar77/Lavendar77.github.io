<script setup lang="ts">
withDefaults(
  defineProps<{
    kicker: string
    title: string
    badge: string
    /** Custom diagrams bring their own canvas. Case-study layouts use the shared panel. */
    panel?: boolean
  }>(),
  { panel: true }
)
</script>

<template>
  <div class="w-full min-w-0 max-w-full flex flex-col gap-2.5 font-sans select-none">
    <div class="pb-2 border-b border-[var(--border)] min-w-0 pr-24">
      <div class="min-w-0">
        <div class="flex items-center gap-2 flex-wrap">
          <span class="text-xs font-mono font-bold text-[var(--primary)] uppercase tracking-wider">
            {{ kicker }}
          </span>
          <span
            class="hidden sm:inline-flex shrink-0 px-2 py-0.5 text-[10px] font-mono rounded bg-[var(--secondary)] text-[var(--primary)] border border-[var(--primary)]/30"
          >
            {{ badge }}
          </span>
        </div>
        <span class="text-[11px] text-[var(--text-muted)] leading-relaxed">{{ title }}</span>
      </div>
    </div>
    <slot name="toolbar" />
    <div
      v-if="panel"
      class="rounded-lg border border-[var(--border)] bg-[#141416] p-3 sm:p-4 min-w-0"
    >
      <slot />
    </div>
    <slot v-else />
  </div>
</template>
