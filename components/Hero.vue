<template>
  <div class="hero min-h-screen min-w-[320px]">
      <img class="bg" src="~assets/bg.jpg" alt="" />
      <div class="container text-center p-4">
        <Avatar />
        <h1 class="font-bold text-3xl md:text-5xl mb-4">
          Solving <span class="red fancy-text">problems</span><br />
          with &lt;<span class="green fancy-text">code</span>/&gt;
        </h1>
        <p class="summary">
          I'm Syafiq, a <span class="fancy-text red">software engineer</span>.
          My hobby is to fulfil my
          <span class="fancy-text red">curiosity</span> by building <span class="fancy-text red">side
          projects</span>. 🍵 &nbsp;and ☕ &nbsp;are my
          best friends.
        </p>
        <SocialLinks />
      </div>
    </div>
</template>

<script>
export default {

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
.summary {
  max-width: 520px;
}
</style>