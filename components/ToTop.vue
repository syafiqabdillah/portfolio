<template>
  <div
    class="absolute right-4 bottom-16 bg-light h-10 w-10 flex justify-center cursor-pointer items-center rounded border-2 border-primary text-primary hover:text-light hover:bg-primary transition-all duration-300"
    v-if="show"
    @click="scrollTop"
  >
    <font-awesome-icon :icon="faArrowUp" class="h-4" />
  </div>
</template>

<script>
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

export default {
  data() {
    return {
      scrollPosition: null,
    }
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    },
    scrollTop() {
      window.scroll(0, 0)
    },
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll)
  },
  computed: {
    show() {
      return this.scrollPosition > 500
    },
    faArrowUp() {
      return faArrowUp
    },
  },
}
</script>

<style></style>
