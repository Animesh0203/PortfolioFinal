import { createApp } from 'vue';
import App from './App.vue';
import './Tailwind.css'; // Update this to your Tailwind CSS file if different
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

createApp(App).mount('#app');
