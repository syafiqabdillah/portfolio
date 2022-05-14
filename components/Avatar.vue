<template>
  <div class="avatar-container group hover:scale-110 hover:-translate-y-4">
    <div
      class="h-[170px] w-[170px] rounded-full border-4 border-dotted border-lightseagreen group-hover:border-accent animate-spin-slow"
    ></div>
    <img
      src="~/assets/img/syafiq-river.jpg"
      height="170"
      width="170"
      alt=""
      class="avatar"
    />
  </div>
</template>

<script>
export default {}
</script>

<style>
:root {
  --avatar-size: 170px;
  --border-color: var(--accent);
}
.avatar-container {
  z-index: 0;
  position: relative;
  height: var(--avatar-size);
  width: var(--avatar-size);
  transition: transform 200ms;
}
img.avatar {
  position: absolute;
  top: 0;
  left: 0;
  margin: 0 auto;
  height: var(--avatar-size);
  width: var(--avatar-size);
  border-radius: 50%;
  object-fit: cover;
  padding: 0.7em;
}
</style>
