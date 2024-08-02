<template>
    <div class="meteors-container">
      <span
        v-for="(style, idx) in meteorStyles"
        :key="idx"
        :class="['meteor', 'pointer-events-none', 'absolute', 'left-1/2', 'top-1/2', 'size-0.5', 'rotate-[215deg]', 'animate-meteor', 'rounded-full', 'bg-lime-400', 'shadow-[0_0_0_1px_#ffffff10]']"
        :style="style"
      >
        <!-- Meteor Tail -->
        <div class="meteor-tail"></div>
      </span>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Meteors',
    props: {
      number: {
        type: Number,
        default: 20,
      },
    },
    data() {
      return {
        meteorStyles: [],
      };
    },
    mounted() {
      this.generateMeteorStyles();
    },
    methods: {
      generateMeteorStyles() {
        const styles = Array.from({ length: this.number }, () => ({
          top: '-5px',
          left: Math.floor(Math.random() * window.innerWidth) + 'px',
          animationDelay: Math.random() * 1.2 + 0.2 + 's',
          animationDuration: Math.floor(Math.random() * 8 + 2) + 's',
        }));
        this.meteorStyles = styles;
      },
    },
  };
  </script>
  
  <style scoped>
  .meteor {
    z-index: 1;
  }
  
  .meteor-tail {
    pointer-events: none;
    position: absolute;
    top: 50%;
    z-index: -10;
    height: 1px;
    width: 50px;
    transform: translateY(-50%);
    background-image: linear-gradient(to right, #4b6350, transparent);
  }
  </style>
  