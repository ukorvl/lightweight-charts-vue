<script setup lang="ts">
  import { provide, ref } from "vue";

  defineProps<{ text: string }>();

  const message = ref("Hello from context!");
  provide("message", message);
</script>

<template>
  <button class="btn-cta">{{ text }}</button>
</template>
