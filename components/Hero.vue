<template>
  <div id="about" class="min-h-screen z-10 min-w-[320px] fixed top-0 left-0 right-0">
    <div
      class="text-center pt-20 pb-16 px-4 flex flex-col gap-6 items-center justify-center"
    >
      <Avatar />
      <h1 class="font-bold text-2xl lg:text-3xl">
        <span class="fancy-text">Syafiq</span>
        <span class="green fancy-text">Abdillah</span>
        <span class="red fancy-text">Umarghanis</span>
      </h1>
      <div class="flex flex-col gap-2 items-center">
        <p class="text-light">
          I create
          <span class="text-[8px]">weird and hopefully </span>useful stuff with code.
        </p>
      </div>
      <SocialLinks />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    setScrollVar() {
      const el = document.documentElement;
      const percentageScrolled = el.scrollTop / el.clientHeight;
      el.style.setProperty("--scroll", percentageScrolled);
    },
  },
  mounted() {
    window.addEventListener("scroll", this.setScrollVar);
    window.addEventListener("resize", this.setScrollVar);
    this.setScrollVar();
  },
  unmounted() {
    removeEventListener("scroll", this.setScrollVar);
    removeEventListener("resize", this.setScrollVar);
  },
};
</script>

<style lang="scss">
:root {
  --scroll-treshold: 0.3;
}

#about {
  background: rgba(44, 54, 57, calc(100% - var(--scroll) * 100%));
  translate: 0
    calc((max(var(--scroll), var(--scroll-treshold)) - var(--scroll-treshold)) * -1 * 70%);
}
</style>
