<template>
  <div
    id="projects"
    class="min-h-screen bg-primary text-light flex flex-col items-center justify-start pt-20 px-2 pb-20"
  >
    <h2 class="text-2xl font-semibold tracking-wider">Projects</h2>
    <div class="mt-8 flex flex-col gap-4">
      <div v-for="project in projects" :key="project.name">
        <img
          :src="project.src"
          :alt="project.name"
          class="w-full object-cover"
        />
        <div class="mt-2">{{ project.name }}</div>
        <a class="text-sm text-accent" :href="project.url">{{
          getShortenUrl(project.url)
        }}</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      projects: [
        {
          name: 'Makanapaya',
          src: require('~/assets/img/makanapaya.png'),
          url: 'https://www.makanapaya.my.id',
        },
        {
          name: 'Kenal Kampus',
          src: require('~/assets/img/kenalkampus.png'),
          url: 'https://www.kenalkampus.com',
        },
        {
          name: 'Jlantah Hero',
          src: require('~/assets/img/jlantahhero.png'),
          url: 'https://www.jlantahhero.com',
        },
        {
          name: 'Foodle',
          src: require('~/assets/img/foodle.png'),
          url: 'https://www.makanapaya.my.id/foodle',
        },
        {
          name: 'Makanapaya Android',
          src: require('~/assets/img/makanapayaandroid.jpg'),
          url:
            'https://play.google.com/store/apps/details?id=com.syafiqau.makanapaya',
        },
        {
          name: 'Expensez',
          src: require('~/assets/img/expensez.jpg'),
          url:
            'https://play.google.com/store/apps/details?id=com.syafiqabdillah.expensez',
        },
        {
          name: 'Wedding Invitation',
          src: require('~/assets/img/wedding.png'),
          url: 'https://afifasyafiq.netlify.app',
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
}
</script>

<style></style>
