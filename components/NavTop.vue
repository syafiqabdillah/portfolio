<template>
  <nav
    class="polygon fixed top-0 left-1/2 -translate-x-1/2 h-12 w-[250px] bg-light text-primary flex items-center justify-center"
  >
    <a href="/" class="hover:text-accent text-center"> Syafiq Abdillah </a>
  </nav>
</template>

<script>
export default {}
</script>

<style scoped>
.polygon {
  clip-path: polygon(0% 0%, 100% 0%, 85% 100%, 15% 100%);
}
</style>
