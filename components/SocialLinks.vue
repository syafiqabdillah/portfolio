<template>
  <div class="links">
    <i
      v-for="social in socials"
      :key="social.url"
      @click="toPage(social.url)"
      :class="social.icon + ' clickable'"
    ></i>
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
:root {
  --vertical-move: -10px;
  --rotate-deg: 25deg;
}
.links {
  gap: 2em;
  display: flex;
  justify-content: center;
  color: var(--light);
}
.links i {
  font-size: 2.5rem;
  transition: transform 200ms;
}
.links i:nth-child(odd):hover {
  transform: translateY(var(--vertical-move)) rotate(calc( 0deg - var(--rotate-deg)));
}
.links i:nth-child(even):hover {
  transform: translateY(var(--vertical-move)) rotate(var(--rotate-deg));
}
</style>
