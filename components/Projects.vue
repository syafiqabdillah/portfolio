<template>
  <section
    id="projects"
    class="min-h-screen w-full bg-primary text-light flex flex-col items-center justify-start pt-20 px-2 md:px-0 pb-32"
  >
    <div class="max-w-4xl">
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
          name: 'Not My Anime List',
          desc:
            'My spin-off of MyAnimeList using their AniList API. You can search anime, create/edit/delete collections, and save your choice of anime into your collections.',
          src: require('~/assets/img/notmal.png'),
          url: 'https://notmal.netlify.app',
          tech: [
            'Typescript',
            'React.js',
            'React Testing Library',
            'Cypress',
            'GraphQL',
            'Emotion',
            'Progressive Web Apps',
          ],
        },
        {
          name: 'Makanapaya',
          desc:
            'A website that helps you think of what to eat or drink. Used by up to hundreds users per day.',
          src: require('~/assets/img/makanapaya.png'),
          url: 'https://www.makanapaya.my.id',
          tech: [
            'Next.js',
            'React.js',
            'Progressive Web Apps',
            'MongoDB',
            'Express.js',
            'Mixpanel',
            'Sentry',
          ],
        },
        {
          name: 'Kenal Kampus',
          desc:
            'Collection of stories from students and alumni in universities all over Indonesia. It helps high school student to choose where to pursue their study.',
          src: require('~/assets/img/kenalkampus.png'),
          url: 'https://kenalkampus.vercel.app/',
          tech: [
            'Nuxt.js',
            'Vue.js',
            'Progressive Web Apps',
            'MongoDB',
            'Express.js',
            'Mixpanel',
          ],
        },
        {
          name: 'Jlantah Hero',
          desc:
            'A mobile-first web app that lets you convert your used vegetable oil into money or new oils. It was our submission in Indonesia Digital Tribe 2021-2022 event that led us to Top 7 position out of 2000+ teams.',
          src: require('~/assets/img/jlantahhero.png'),
          url: 'https://www.jlantahhero.com',
          tech: ['Next.js', 'React.js', 'MongoDB', 'Express.js', 'Mixpanel'],
        },
        {
          name: 'Foodle',
          desc:
            'My spin-off of the viral word game in 2021-2022, Wordle, but the words are from Makanapaya.',
          src: require('~/assets/img/foodle.png'),
          url: 'https://www.makanapaya.my.id/foodle',
          tech: ['Next.js', 'React.js', 'MongoDB', 'Express.js'],
        },
        {
          name: 'Makanapaya Android',
          desc: 'Android version of Makanapaya.',
          src: require('~/assets/img/makanapayaandroid.jpg'),
          url:
            'https://play.google.com/store/apps/details?id=com.syafiqau.makanapaya',
          tech: ['Flutter', 'Dart', 'MongoDB', 'Express.js', 'Mixpanel'],
        },
        {
          name: 'Expensez',
          desc: 'A simple expense tracker application.',
          src: require('~/assets/img/expensez.jpg'),
          url:
            'https://play.google.com/store/apps/details?id=com.syafiqabdillah.expensez',
          tech: ['Flutter', 'Dart'],
        },
      ],
    }
  },
}
</script>

<style></style>
