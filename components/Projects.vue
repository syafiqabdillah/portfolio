<template>
  <div
    id="projects"
    class="min-h-screen bg-primary text-light flex flex-col items-center justify-start pt-20 px-2 md:px-0 pb-32"
  >
    <h2 class="text-2xl font-semibold tracking-wider">Projects</h2>
    <div class="mt-8 flex flex-col gap-10">
      <div v-for="project in projects" :key="project.name">
        <div class="relative overflow-hidden group">
          <img
            :src="project.src"
            :alt="project.name"
            class="w-full object-cover"
          />
          <div
            class="absolute left-0 top-0 w-full h-full bg-primary bg-opacity-90 translate-y-full group-hover:translate-y-0 transition ease-in-out duration-500"
          >
            <ul
              class="w-full h-full flex flex-col gap-2 justify-center items-center"
            >
              <li v-for="t in project.tech" :key="t" class="md:text-xl">
                {{ t }}
              </li>
            </ul>
          </div>
        </div>
        <div class="px-2">
          <div class="mt-4 text-xl">{{ project.name }}</div>
          <a
            class="text-sm hover:text-accent hover:underline mt-2 w-max flex justify-start items-center gap-2"
            :href="project.url"
            >{{ getShortenUrl(project.url) }}
            <font-awesome-icon :icon="faExternalLink" class="h-3" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { faExternalLink } from '@fortawesome/free-solid-svg-icons'
export default {
  data() {
    return {
      projects: [
        {
          name: 'Makanapaya',
          src: require('~/assets/img/makanapaya.png'),
          url: 'https://www.makanapaya.my.id',
          tech: ['Next.js', 'React.js', 'MongoDB', 'Express.js'],
        },
        {
          name: 'Kenal Kampus',
          src: require('~/assets/img/kenalkampus.png'),
          url: 'https://www.kenalkampus.com',
          tech: ['Nuxt.js', 'Vue.js', 'MongoDB', 'Express.js'],
        },
        {
          name: 'Jlantah Hero',
          src: require('~/assets/img/jlantahhero.png'),
          url: 'https://www.jlantahhero.com',
          tech: ['Next.js', 'React.js', 'MongoDB', 'Express.js'],
        },
        {
          name: 'Foodle',
          src: require('~/assets/img/foodle.png'),
          url: 'https://www.makanapaya.my.id/foodle',
          tech: ['Next.js', 'React.js', 'MongoDB', 'Express.js'],
        },
        {
          name: 'Makanapaya Android',
          src: require('~/assets/img/makanapayaandroid.jpg'),
          url:
            'https://play.google.com/store/apps/details?id=com.syafiqau.makanapaya',
          tech: ['Flutter', 'Dart', 'MongoDB', 'Express.js'],
        },
        {
          name: 'Expensez',
          src: require('~/assets/img/expensez.jpg'),
          url:
            'https://play.google.com/store/apps/details?id=com.syafiqabdillah.expensez',
          tech: ['Flutter', 'Dart', 'MongoDB', 'Express.js'],
        },
        {
          name: 'Wedding Invitation',
          src: require('~/assets/img/wedding.png'),
          url: 'https://afifasyafiq.netlify.app',
          tech: ['Next.js', 'React.js', 'MongoDB', 'Express.js'],
        },
      ],
    }
  },
  methods: {
    getShortenUrl(url) {
      if (url.includes('www.')) return url.split('www.')[1]
      return url
    },
  },
  computed: {
    faExternalLink() {
      return faExternalLink
    },
  },
}
</script>

<style></style>
