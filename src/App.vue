<template>
  <Preloader v-if="isLoading" />
  <div ref="scrollContainer">
    <Hero></Hero>
    <AboutMe></AboutMe>
    <HorizontalScroll>

    </HorizontalScroll>
    <Projects></Projects>
    <ContactMe></ContactMe>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Preloader from './components/Preloader.vue';
import Hero from './components/Hero.vue';
import AboutMe from './components/AboutMe.vue';
import HorizontalScroll from './components/HorizontalScroll.vue'
import Projects from './components/Projects.vue';
import ContactMe from './components/ContactMe.vue';
import Scrollbar from 'smooth-scrollbar';

const isLoading = ref(true);
const scrollContainer = ref(null);

onMounted(() => {
  const scrollbar = Scrollbar.init(scrollContainer.value, {
    damping: 0.1, // Adjust damping for a more or less smooth effect
  });

  const hidePreloader = () => {
    isLoading.value = false;
    document.body.style.overflow = 'visible';
    scrollbar.update();
  };

  setTimeout(hidePreloader, 4100); // Simulating the preloader animation completion
});
</script>

<style scoped>

</style>
