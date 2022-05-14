<template>
  <div class="hero min-h-screen min-w-[320px]">
    <img class="bg" src="~assets/bg.jpg" alt="" />
    <div
      class="text-center p-4 flex flex-col gap-6 items-center justify-center"
    >
      <Avatar />
      <h1 class="font-bold text-3xl">
        <span class="fancy-text">Syafiq</span>
        <span class="green fancy-text">Abdillah</span>
        <span class="red fancy-text">Umarghanis</span>
      </h1>
      <div class="flex flex-col gap-2">
        <p>
          Hi, I am Syafiq, a
          <span class="fancy-text red">software engineer</span>
        </p>
        <p>
          I have created too many
          <span class="green fancy-text cursor-pointer">side projects</span>
        </p>
        <p class="group">Welcome, <span class="group-hover:hidden">strangers</span> <span class="hidden group-hover:inline-block">friends</span></p>
      </div>
      <SocialLinks />
    </div>
  </div>
</template>

<script>
export default {
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

<style lang="scss">
.hero {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: bisque;
}

.hero img.bg {
  background: #171717;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.2);
  position: absolute;
  z-index: -1;
}
.hero .title {
  font-weight: 900;
  font-size: 2.5rem;
}
.summary {
  max-width: 520px;
}
</style>
