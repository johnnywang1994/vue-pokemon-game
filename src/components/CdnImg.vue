<template>
  <img :src="imageUrl" :alt="imageUrl" draggable="false" />
</template>

<script lang="ts">
/* eslint-disable */
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    src: {
      type: String,
      default: '',
    },
    test: {
      type: Boolean,
      default: false,
    },
    hold: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: '100x100',
    },
    color: {
      type: String,
      default: '',
    },
  },
  name: 'CdnImg',
  data() {
    return {
      CDN: process.env.CDN,
    };
  },
  computed: {
    imageUrl(): string {
      const isProd = process.env.NODE_ENV === 'production';
      return this.hold
        ? `https://via.placeholder.com/${this.size}/${this.color}`
        : this.test && isProd
        ? `${this.src}`
        : `${this.CDN}/${this.src}`;
    },
  },
});
</script>

<style lang="scss"></style>
