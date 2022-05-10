<template>
  <div class="links">
    <div class="link" v-for="social in socials" :key="social.url">
      <i @click="toPage(social.url)" :class="social.icon + ' clickable'"> </i>
      <span class="text">{{ social.text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Links',
  data() {
    return {
      socials: {
        twitter: {
          url: 'https://www.twitter.com/umarghanis',
          icon: 'icofont-twitter',
          text: 'Follow me on Twitter',
        },
        linkedin: {
          url: 'https://www.linkedin.com/in/syafiq-abdillah-1b634b78/',
          icon: 'icofont-linkedin',
          text: "Let's connect on Linkedin",
        },
        github: {
          url: 'https://www.github.com/syafiqabdillah',
          icon: 'icofont-github',
          text: 'Follow me on Github',
        },
      },
    }
  },
  methods: {
    toPage(url) {
      window.open(url)
    },
  },
}
</script>

<style lang="scss">
:root {
  --vertical-move: -10px;
  --rotate-deg: 25deg;
}
.links {
  gap: 3rem;
  display: flex;
  justify-content: center;
  color: var(--light);
  position: relative;
  padding: 0rem 1rem 3rem;

  .link {
    i {
      font-size: 2.5rem;
      transition: all 200ms;
      display: block;
      z-index: 100;
    }

    .text {
      font-size: 1rem;
      font-family: 'Lexend';
      position: absolute;
      bottom: 0;
      left: 0;
      transform: translateY(3rem);
      transition: all 200ms;
      display: block;
      width: 100%;
      text-align: center;
      opacity: 0;
    }

    &:hover .text {
      transform: translateY(0);
      opacity: 1;
    }

    &:hover i {
      color: var(--primary);
    }

    &:nth-child(odd):hover i {
      transform: translateY(var(--vertical-move))
        rotate(calc(0deg - var(--rotate-deg)));
    }

    &:nth-child(even):hover i {
      transform: translateY(var(--vertical-move)) rotate(var(--rotate-deg));
    }
  }
}
</style>
