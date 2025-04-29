<script setup lang="ts"></script>

<template>
  <div class="layout">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.layout {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}
</style>

