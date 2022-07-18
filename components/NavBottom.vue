<template>
  <nav
    class="polygon fixed bottom-0 left-1/2 -translate-x-1/2 h-12 px-16 bg-light text-primary"
  >
    <ul class="flex w-full h-full justify-center items-center gap-10">
      <li v-for="item in navs" :key="item.label">
        <a :href="item.url" class="hover:text-accent">{{ item.label }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navs: [
        {
          url: '#about',
          label: 'About',
        },
        {
          url: '#projects',
          label: 'Projects',
        },
        {
          url: '#experience',
          label: 'Exp',
        },
      ],
    }
  },
}
</script>

<style scoped>
.polygon {
  clip-path: polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%);
}
</style>
