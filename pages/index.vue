<template>
  <div class="relative">
    <Hero />
    <Projects />
    <Experience />
    <NavTop />
    <NavBottom />
  </div>
</template>

<script>
export default {
  name: 'Home',
  head: {
    title: 'Syafiq Abdillah Umarghanis',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'A lifelong learned software engineer. Like to do any sort of side projects for the sake of adventure.',
      },
    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://www.syafiqau.my.id',
      },
    ],
  },
}
</script>

<style></style>
