<template>
  <div id="about" class="hero min-h-screen min-w-[320px] bg-primary">
    <div
      class="text-center p-4 flex flex-col gap-6 items-center justify-center"
    >
      <Avatar />
      <h1 class="font-bold text-2xl">
        <span class="fancy-text">Syafiq</span>
        <span class="green fancy-text">Abdillah</span>
        <span class="red fancy-text">Umarghanis</span>
      </h1>
      <div class="flex flex-col gap-2 items-center">
        <p>(software engineer)</p>
      </div>
      <SocialLinks />
    </div>
  </div>
</template>

<script>
export default {}
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
