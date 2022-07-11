<template>
  <div
    class="fixed left-1/2 -translate-x-1/2 bottom-16 bg-light h-10 w-10 flex justify-center cursor-pointer items-center rounded"
    v-if="show"
    @click="scrollTop"
  >
    <i class="text-accent icofont-arrow-up"></i>
  </div>
</template>

<script>
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
  },
}
</script>

<style></style>
