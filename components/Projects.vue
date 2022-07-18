<template>
  <section
    id="projects"
    class="min-h-screen w-full bg-primary text-light flex flex-col items-center justify-start pt-20 px-2 md:px-0 pb-32"
  >
    <div class="max-w-2xl">
      <div class="mt-8 flex flex-col gap-10">
        <project-item
          v-for="project in projects"
          :key="project.name"
          :project="project"
        />
      </div>
    </div>
  </section>
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
          tech: ['Flutter', 'Dart'],
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
}
</script>

<style></style>
