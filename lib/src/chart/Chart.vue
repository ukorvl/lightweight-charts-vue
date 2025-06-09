<script setup lang="ts">
  defineProps<{ text: string }>();
</script>

<template>
  <button class="btn-cta">{{ text }}</button>
</template>
