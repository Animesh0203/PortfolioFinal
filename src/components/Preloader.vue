<template>
    <div class="loader-wrap" ref="loaderWrap">
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path ref="svgPath" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
      </svg>
      <div class="loader-wrap-heading">
        <span><h1 class="sm:font-xl font-mono md:text-4xl">&diams; Hello &diams;</h1></span>
      </div>
    </div>
  </template>
  
  <script>
  import { gsap } from 'gsap';
  
  export default {
    name: 'Preloader',
    mounted() {
      const svg = this.$refs.svgPath;
      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = 'visible';
        },
      });
  
      const curve = 'M0 502S175 272 500 272s500 230 500 230V0H0Z';
      const flat = 'M0 2S175 1 500 1s500 1 500 1V0H0Z';
  
      tl.from('.loader-wrap-heading h1', {
        delay: 0.9,
        y: 200,
        skewY: 20,
      }).to('.loader-wrap-heading h1', {
        delay: 0.9,
        y: -200,
        skewY: 20,
      });
      tl.to(svg, {
        duration: 0.4,
        attr: { d: curve },
        ease: 'power2.easeIn',
      }).to(svg, {
        duration: 0.4,
        attr: { d: flat },
        ease: 'power2.easeOut',
      });
      tl.to(this.$refs.loaderWrap, {
        y: -500,
      });
      tl.to(this.$refs.loaderWrap, {
        zIndex: -1,
        display: 'none',
      });
      tl.from(
        '.container',
        {
          y: 1000,
          opacity: 0,
        },
        '-=1.5'
      );
  
      tl.from(
        'nav',
        {
          duration: 1,
          opacity: 0,
        },
        '-=1.2'
      );
    },
  };
  </script>
  
  <style scoped>
  span {
    overflow: hidden;
    display: block;
  }
  .loader-wrap {
    position: absolute;
    z-index: 10;
    height: 100vh;
    width: 100%;
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    background: transparent;
  }
  .loader-wrap svg {
    position: absolute;
    top: 0;
    width: 100vw;
    height: 130vh;
  }
  .loader-wrap .loader-wrap-heading h1 {
    z-index: 20;
    color: #e0e0e0;
  }
  </style>
  