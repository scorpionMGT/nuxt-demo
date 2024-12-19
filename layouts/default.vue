<template>
  <div>
    <!-- Your HTML structure goes here -->
    <h1>Hello Vue 3 with SCSS!</h1>
  </div>
</template>

<script setup lang="ts">
// Your script logic goes here
import { ref } from 'vue';

const message = ref('Hello from Vue 3!');

console.log(message.value);
</script>

<style scoped lang="scss">
// Your SCSS styles go here
h1 {
  color: blue;
}
</style>