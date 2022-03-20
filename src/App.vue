<template>
  <router-view />
</template>

<script setup lang="ts">
import { useGame } from '@/stores/Game';

const Game = useGame();

Game.getProfile();
</script>

<style>
html {
  background: #000;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
