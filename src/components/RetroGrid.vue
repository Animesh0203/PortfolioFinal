<!-- RetroGrid.vue -->
<template>
    <div class="pointer-events-none absolute h-full w-full overflow-hidden opacity-50 perspective-200px">
      <!-- Grid -->
      <div class="absolute inset-0 transform rotate-x-35">
        <div
          class="animate-grid background-repeat-repeat background-size-60px_60px height-300vh inset-0%_0px margin-left--50% transform-origin-100%_0_0 width-600vw"
          :class="{
            'background-image-linear-gradient-to-right-rgba(0,0,0,0.3)_1px-transparent_0': !darkMode,
            'background-image-linear-gradient-to-right-rgba(255,255,255,0.2)_1px-transparent_0': darkMode,
            'background-image-linear-gradient-to-bottom-rgba(0,0,0,0.3)_1px-transparent_0': !darkMode,
            'background-image-linear-gradient-to-bottom-rgba(255,255,255,0.2)_1px-transparent_0': darkMode
          }"
        ></div>
      </div>
  
      <!-- Background Gradient -->
      <div class="absolute inset-0 bg-gradient-to-t from-white to-transparent" :class="darkMode ? 'dark:from-black' : ''"></div>
    </div>
  </template>
  
  <script setup>
  import { useDark } from "@vueuse/core";
  
  const { darkMode } = useDark();
  </script>
  
  <style scoped>
  /* Add any scoped styles here if necessary */
  </style>
  