<template>
  <div class="flex flex-col gap-4">
    <a
      class="border border-light text-light hover:border-text-secondary bg-primary hover:bg-light hover:text-secondary transition duration-300 rounded-lg px-4 py-3 flex gap-4 items-center text-left"
      v-for="social in socials"
      :key="social.url"
      :href="social.url"
      target="_blank"
      :id="'social-' + social.id"
    >
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
} from "@fortawesome/free-brands-svg-icons";
import { faFileText } from "@fortawesome/free-solid-svg-icons";
export default {
  name: "Links",
  data() {
    return {
      socials: {
        github: {
          id: "github",
          url: "https://www.github.com/syafiqabdillah",
          icon: faGithub,
          text: "Follow me on Github",
        },
        twitter: {
          id: "twitter",
          url: "https://www.twitter.com/umarghanis",
          icon: faTwitter,
          text: "Stalk me on Twitter",
        },
        instagram: {
          id: "instagram",
          url: "https://www.instagram.com/syafiq.au",
          icon: faInstagram,
          text: "See me on Instagram",
        },
        linkedin: {
          id: "linkedin",
          url: "https://www.linkedin.com/in/syafiq-abdillah-1b634b78/",
          icon: faLinkedin,
          text: "Let's connect on Linkedin",
        },
        bragDoc: {
          id: "bragdoc",
          url: "https://bit.ly/syafiq-brag-doc",
          icon: faFileText,
          text: "Read my Brag Doc",
        },
      },
    };
  },
};
</script>

<style lang="scss">
#social-github {
  translate: calc(var(--scroll) * 50%) calc(var(--scroll) * -90%);
}
#social-twitter {
  translate: calc(var(--scroll) * 30%) calc(var(--scroll) * -60%);
}
#social-instagram {
  translate: calc(var(--scroll) * 10% * -1) 0;
}
#social-linkedin {
  translate: calc(var(--scroll) * 30% * -1) calc(var(--scroll) * 60%);
}
#social-bragdoc {
  translate: calc(var(--scroll) * 50% * -1) calc(var(--scroll) * 90%);
}
</style>
