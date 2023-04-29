<script setup>
import { defineProps } from "vue";

const props = defineProps({
  isOpen: Boolean,
});
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    :style="{
      transform: props.isOpen ? 'rotate(-180deg)' : undefined,
      transition: 'transform 0.2s',
      'transform-origin': 'center',
    }"
  >
    <path
      fill="none"
      stroke="#888888"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m17 10l-5 5l-5-5"
    ></path>
  </svg>
</template>
