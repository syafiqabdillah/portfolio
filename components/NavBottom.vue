<template>
  <nav
    class="fixed bottom-0 right-0 rounded-tl-2xl h-12 px-16 bg-light text-primary"
  >
    <ToTop />
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
          label: 'Experience',
        },
      ],
    }
  },
}
</script>

