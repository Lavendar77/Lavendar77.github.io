<script setup lang="ts">
import { START_YEAR } from '@/utils/constants'
</script>

<template>
  <footer class="border-t border-[var(--border)]">
    <div class="container-custom py-8">
      <p class="text-[var(--text-muted)] text-sm text-center font-mono">
        &lt;Coding since {{ START_YEAR }} /&gt;
      </p>
    </div>
  </footer>
</template>
