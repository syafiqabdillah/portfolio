<template>
  <div id="about" class="min-h-screen z-10 min-w-[320px] fixed top-0 left-0 right-0">
    <div
      class="text-center pt-20 pb-16 px-4 flex flex-col gap-6 items-center justify-center"
    >
      <Avatar />
      <h1
        class="font-extrabold text-2xl lg:text-6xl uppercase tracking-widest bg-gradient-to-r from-light to-secondary before:bg-gradient-to-r before:from-secondary before:to-light"
      >
        Syafiq
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

<style lang="scss" scoped>
#about {
  background: rgba(44, 54, 57, calc(100% - var(--scroll) * 100%));
  translate: 0 calc((max(var(--scroll), 0.3) - 0.3) * -1 * 150%);

  h1 {
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    z-index: 1;

    &::before {
      content: "SYAFIQ";
      position: absolute;
      top: 0;
      left: 0;
      width: calc(min(var(--scroll) * 300%, 100%));
      height: 100%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      z-index: 2;
    }
  }
}
</style>
