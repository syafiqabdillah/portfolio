<template>
  <div>
    <div class="hero">
      <img class="bg" src="~assets/bg.jpg" alt="" />
      <div class="container text-center">
        <Avatar />
        <h1 class="title">
          Solving <span class="red">problems</span><br />
          with &lt;<span class="green">code</span>/&gt;
        </h1>
        <p class="summary">
          I'm Syafiq, a <span class="fancy-text red">software engineer</span>.
          My hobby is to fulfil my
          <span class="fancy-text red">curiosity</span> by building side
          projects. My favourite korean dramas are
          <span class="fancy-text red"> Startup </span> &
          <span class="fancy-text red"> Itaewon Class </span>. 🍵 and ☕ are my
          best friends.
        </p>
        <SocialLinks />
      </div>
    </div>
    <!-- Skills -->
    <Skills />
  </div>
</template>

<script>
export default {
  name: "Home",
}
</script>

<style>
:root {
  --avatar-size: 170px;
  --border-color: var(--accent);
}
.hero {
  min-height: 700px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: bisque;
}
.hero .container {
  margin: auto 0;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
</style>
