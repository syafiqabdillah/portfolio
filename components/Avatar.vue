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
:root {
  --avatar-size: 170px;
  --border-color: var(--accent);
}
.avatar-container {
  z-index: 0;
  position: relative;
  height: var(--avatar-size);
  width: var(--avatar-size);
  transition: transform 1s;
}
.avatar-container:hover {
  transform: scale(1.2);
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
  animation: rotatingBorder linear 20s infinite;
}
@keyframes rotatingBorder {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
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
