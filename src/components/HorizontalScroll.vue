<template>
    <div class="h-[90vh] overflow-y-auto">
      <div 
        ref="scrollContainer"
        class="overflow-x-auto whitespace-nowrap"
        @wheel="handleWheel"
      >
        <div class="inline-flex p-4 space-x-4">
          <slot></slot>
        </div>
      </div>
      <div class="p-4">
        <slot name="vertical-content"></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HorizontalScroll',
    methods: {
      handleWheel(event) {
        const container = this.$refs.scrollContainer;
        const isAtRightEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth;
        const isAtLeftEnd = container.scrollLeft === 0;
  
        if (
          (event.deltaY > 0 && isAtRightEnd) || // Scrolling down at right end
          (event.deltaY < 0 && isAtLeftEnd) ||  // Scrolling up at left end
          Math.abs(event.deltaX) > Math.abs(event.deltaY) // Horizontal scrolling
        ) {
          // Allow default behavior for vertical scroll or horizontal touchpad scroll
          return;
        }
  
        // Otherwise, handle horizontal scrolling
        event.preventDefault();
        container.scrollLeft += event.deltaY;
      }
    }
  }
  </script>