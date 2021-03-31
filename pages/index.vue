<template>
  <div>
    <div class="hero">
      <img src="~assets/bg.jpg" alt="" />
      <div class="container text-center">
        <h1 class="title">
          Solving <span class="red">problems</span><br />
          with &lt;<span class="green">code</span>/&gt;
        </h1>
        <p class="summary">
          I'm Syafiq, a <span class="fancy-text red">software engineer</span>.
          My hobby is to fulfil my
          <span class="fancy-text red">curiosity</span> by coding countless side
          projects. My favourite korean dramas are
          <span class="fancy-text red"> Startup </span> &
          <span class="fancy-text red"> Itaewon Class </span>. Tea and coffee
          are my best friends.
        </p>
        <div class="links">
          <i
            v-for="social in socials"
            :key="social.url"
            data-aos="fade-up"
            @click="toPage(social.url)"
            :class="social.icon  + ' clickable'"
          ></i>
        </div>
      </div>
    </div>
    <!-- Skills -->
    <Skills />
  </div>
</template>

<script>
export default {
  data() {
    return {
      socials: {
        twitter: {
          url: 'https://www.twitter.com/umarghanis',
          icon: 'icofont-twitter',
        },
        linkedin: {
          url: 'https://www.linkedin.com/in/syafiq-abdillah-1b634b78/',
          icon: 'icofont-linkedin',
        },
        github: {
          url: 'https://www.github.com/syafiqabdillah',
          icon: 'icofont-github',
        },
      },
    }
  },
  methods: {
    toPage(url) {
      window.open(url, '_blank')
    },
  },
}
</script>

<style>
.hero {
  min-height: 500px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: bisque;
}
.hero .container {
  margin: auto 0;
  max-width: 700px;
}
.hero img {
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
/* Links */
.links {
  gap: 2em;
  display: flex;
  justify-content: center;
  color: var(--light);
}
.links i {
  font-size: 2rem;
}
</style>
