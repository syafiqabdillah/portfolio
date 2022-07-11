<template>
  <div class="relative">
    <Hero />
    <Projects />
    <NavTop />
    <NavBottom />
    <ToTop />
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
        href: 'https://syafiqau.my.id',
      },
    ],
  },
}
</script>

<style></style>
