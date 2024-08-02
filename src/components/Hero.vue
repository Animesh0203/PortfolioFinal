<template>
<section class="section min-h-screen background flex items-center justify-center font-mono relative overflow-hidden">
    <Meteors :number="30" class="absolute inset-0 z-0" />
    <header class="absolute inset-x-0 top-0 z-50">
      <nav
        class="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div class="sm:text-sm md:text-xl justify-items-center flex lg:flex-1">
          <a href="/" class="sm:text-sm justify-items-center -m-1.5 p-1.5">
            <span class="sr-only">Animesh Srivastava</span>
            <h1 class="text-slate-500 text-4xl">
              <span class="mb-100 text-xl">Animesh Srivastava</span>
            </h1>
          </a>
        </div>
      </nav>
    </header>
    <main class="flex-1 mx-auto flex max-w-8xl flex-col md:p-32 md:max-w-8xl">
      <section class="mx-auto flex sm:items-center sm:justify-items-center space-y-10">
        <div>
          <div
            class="flex-col sm:items-center sm:justify-items-center space-y-1"
          >
            <h1
              class="text-center sm:items-center sm:justify-items-center my-2 text-2xl font-medium md:text-6xl md:text-left xl:text-8xl"
            >
              Hi, I am Animesh Srivastava
            </h1>
            <h3
              class="sm:mx-9 sm:text-sm md:mx-0 ml-7 text-neutral-500 justify-items-center md:text-xl"
            >
              A Programmer, A Researcher But Always A Learner.
            </h3>
          </div>
          <div
            class="sm:inline-block mt-4 ml-1 flex-col items-center space-y-4 text-center"
          >
            <a
              href="https://drive.google.com/file/d/1bs-KE-SETr2XUVRFLcFde0gjWFNK8dhk/view"
              target="_blank"
              rel="noopener noreferrer"
              class="relative inline-flex items-center justify-center px-8 py-2 text-xl font-semibold text-white bg-lime-400 border border-transparent overflow-hidden rounded group transition-all duration-300"
            >
              <span
                class="absolute inset-0 bg-white transition-transform duration-300 ease-out transform translate-x-full group-hover:translate-x-0"
              ></span>
              <span class="relative z-1 group-hover:text-black"
                >See My Resume ?&nbsp;&nbsp;→</span
              >
            </a>
          </div>
          <div
            class="sm:inline-block mt-4 ml-1 flex-col items-center space-y-4 text-center"
          >
            <a
              href="https://drive.google.com/file/d/1bs-KE-SETr2XUVRFLcFde0gjWFNK8dhk/view"
              target="_blank"
              rel="noopener noreferrer"
              class="relative inline-flex items-center justify-center px-8 py-2 text-xl font-semibold text-white bg-black border border-transparent overflow-hidden rounded group transition-all duration-300"
            >
              <span
                class="absolute inset-0 bg-white transition-transform duration-300 ease-out-custom transform translate-x-full group-hover:translate-x-0"
              ></span>
              <span class="relative z-1 group-hover:text-black"
                >Feeling Lucky ?&nbsp;&nbsp;→</span
              >
              <span
                class="absolute bottom-full mb-2 hidden px-3 py-1 text-sm font-medium text-white bg-black rounded shadow-lg tooltip-content group-hover:block transition-opacity duration-300 ease-in-out"
              >
                You will get a resume that would be just as good as mine or
                maybe it is mine.
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
    <!--<main class="flex-1 mx-auto flex max-w-6xl flex-col items-center px-10 py-20 md:p-32">
      <section class="mx-auto flex flex-col items-center space-y-8">
        <img src="/public/ollama.png" class="w-16" alt="ollama logo">
        <div>
          <div class="flex flex-col space-y-4 text-center">
            <h2 class="mx-auto my-2 max-w-md text-2xl font-medium tracking-tight md:text-3xl">
              Get up and running with large language models.
            </h2>
            <h3 class="mx-auto max-w-sm text-neutral-500 md:text-lg">
              Run <a class="underline" href="/library/llama3">Llama 3</a>, <a class="underline" href="/library/phi3">Phi 3</a>, <a class="underline" href="/library/mistral">Mistral</a>, <a class="underline" href="/library/gemma2">Gemma 2</a>, and other models. Customize and create your own.
            </h3>
          </div>
          <div class="hidden sm:flex mx-auto mt-12 max-w-xs flex-col items-center space-y-4 text-center">
            <a href="/download" class="flex cursor-pointer items-center rounded-lg bg-neutral-800 px-8 py-2 text-xl text-white hover:bg-black focus:outline-none">
              Download&nbsp;&nbsp;↓
            </a>
            <p class="text-xs text-neutral-500 max-w-[14em]">
              Available for macOS, Linux, and Windows (preview)
            </p>
          </div>
          <div class="flex sm:hidden mx-auto mt-12 max-w-xs flex-col items-center space-y-4 text-center">
            <a href="/library" class="flex cursor-pointer items-center rounded-lg bg-neutral-800 px-8 py-2 text-xl text-white hover:bg-black focus:outline-none">
              Explore models&nbsp;&nbsp;→
            </a>
            <p class="text-xs text-neutral-500 max-w-[14em]">
              Available for macOS, Linux, and Windows (preview)
            </p>
          </div>
        </div>
      </section>
    </main> -->
  </section>
</template>
  
  <script setup>
import { onMounted, ref } from "vue";
import Meteors from "./Meteors.vue";

const sections = ref([]);

const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
};

onMounted(() => {
  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.9,
  });
  sections.value = document.querySelectorAll(".section");
  sections.value.forEach((section) => observer.observe(section));
});
</script>
  
  <style scoped>
.background {
  background-color: #f5f5f7;
}

.underline {
  position: relative;
  text-decoration: none;
}

.underline::before {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0%;
  height: 2px;
  background-color: black; /* Adjust color as needed */
  transition: width 0.3s ease-in-out;
}

.underline:hover::before {
  width: 100%;
}

.tooltip-content {
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.group-hover .tooltip-content {
  opacity: 1;
  transform: translateY(0);
}

.background {
  background-color: #f5f5f7; /* Adjust background color as needed */
}
</style>
   