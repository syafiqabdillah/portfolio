<template>
  <div class="avatar-container">
    <div class="rotating-border"></div>
    <img src="~/assets/img/syafiq.jpg" alt="" class="avatar" />
  </div>
</template>

<script>
export default {}
</script>

<style>
.avatar-container {
  z-index: 0;
  position: relative;
  height: var(--avatar-size);
  width: var(--avatar-size);
  transition: transform 200ms ease-in-out;
}
.avatar-container:hover,
.avatar-container:focus {
  transform: scale(1.5);
  --border-color: var(--primary);
}
.rotating-border {
  position: absolute;
  top: 0;
  left: 0;
  margin: 0 auto;
  height: var(--avatar-size);
  width: var(--avatar-size);
  border-radius: 50%;
  border-style: dashed;
  border-color: var(--border-color);
  animation: avatarBorderMove 20s linear infinite;
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
@keyframes avatarBorderMove {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
