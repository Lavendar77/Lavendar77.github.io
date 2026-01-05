<script setup lang="ts">
interface Props {
  count: number
  activeIndex: number
}

const props = defineProps<Props>()

const emit = defineEmits<{
  select: [index: number]
}>()

const selectPreview = (index: number) => {
  emit('select', index)
}
</script>

<template>
  <div class="flex gap-2 justify-center mt-6" role="tablist" aria-label="Preview indicators">
    <button
      v-for="(_, index) in Array(props.count)"
      :key="index"
      @click="selectPreview(index)"
      :aria-label="`View preview ${index + 1}`"
      :aria-selected="index === props.activeIndex"
      role="tab"
      class="w-2 h-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--bg)]"
      :class="
        index === props.activeIndex
          ? 'bg-[var(--primary)] w-6'
          : 'bg-[var(--text-muted)] hover:bg-[var(--text)]'
      "
    />
  </div>
</template>
