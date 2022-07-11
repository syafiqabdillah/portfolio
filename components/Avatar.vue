<template>
  <div class="avatar-container">
    <div class="avatar bg-light p-1 hover:scale-125 transition duration-300">
      <img
        src="~/assets/img/syafiq-river.jpg"
        height="100"
        width="100"
        alt="Syafiq on the river"
        class="avatar"
      />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.avatar {
  clip-path: polygon(
    10% 0,
    90% 0,
    100% 10%,
    100% 90%,
    90% 100%,
    10% 100%,
    0 90%,
    0 10%
  );
}
</style>
