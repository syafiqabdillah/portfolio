<template>
  <div class="flex flex-col gap-4">
    <a class="border border-light hover:border-text-secondary hover:bg-light hover:text-secondary transition duration-300 rounded-lg px-4 py-3 flex gap-4 items-center text-left"
      v-for="social in socials" :key="social.url" :href="social.url" target="_blank">
      <font-awesome-icon :icon="social.icon" class="h-8" />
      <span>{{ social.text }}</span>
    </a>
  </div>
</template>

<script>
import {
  faTwitter,
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { faFileText } from '@fortawesome/free-solid-svg-icons'
export default {
  name: 'Links',
  data() {
    return {
      socials: {
        github: {
          url: 'https://www.github.com/syafiqabdillah',
          icon: faGithub,
          text: 'Follow me on Github',
        },
        twitter: {
          url: 'https://www.twitter.com/umarghanis',
          icon: faTwitter,
          text: 'Stalk me on Twitter',
        },
        instagram: {
          url: 'https://www.instagram.com/syafiq.au',
          icon: faInstagram,
          text: 'See me on Instagram',
        },
        linkedin: {
          url: 'https://www.linkedin.com/in/syafiq-abdillah-1b634b78/',
          icon: faLinkedin,
          text: "Let's connect on Linkedin",
        },
        bragDoc: {
          url: 'https://bit.ly/syafiq-brag-doc',
          icon: faFileText,
          text: "Read my Brag Doc"
        }
      },
    }
  },
}
</script>

<style lang="scss"></style>
