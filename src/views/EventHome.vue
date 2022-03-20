<template>
  <div class="view-home">
    <div class="content">
      <GameCanvas />
    </div>
  </div>
</template>

<script setup lang="ts">
import GameCanvas from '@/components/GameCanvas.vue'
</script>

<style lang="scss">
.view-home {
  height: 100%;
  box-sizing: border-box;

  > .content {
    position: relative;
    width: 100%;
    height: 100%;
  }
}
</style>
