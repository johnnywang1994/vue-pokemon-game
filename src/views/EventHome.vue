<template>
  <div class="view-home">
    <div class="content">
      <h2>Vue Tiny Pokemon Game</h2>
      <GameCanvas />
      <div class="intro">
        Press
        <kbd>w</kbd>,
        <kbd>a</kbd>,
        <kbd>s</kbd>,
        <kbd>d</kbd>
        to move
        <br />
        Moving on <mark>dirt ground(泥地)</mark> will jump out monster spirit
      </div>
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

    > h2 {
      color: #fff;
    }

    > .intro {
      color: #fff;
    }
  }
}
</style>
