<template>
  <div
    class="absolute left-1/2 -translate-x-1/2 bottom-16 bg-light h-10 w-10 flex justify-center cursor-pointer items-center rounded text-primary hover:text-accent"
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
