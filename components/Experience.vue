<template>
  <section id="experience" class="min-h-screen bg-primary flex flex-col justify-center items-center text-light">
    <div class="flex flex-col gap-8">
      <div v-for="exp in experiences" :key="exp.name" >
        <h4>
          {{ exp.name }}
        </h4>
        <p class="text-sm">
          {{ exp.timeline }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      experiences: [
        {
          name: 'Frontend Engineer @ ALAMI / Hijra',
          timeline: 'September 2022 - now',
          description: ''
        },
        {
          name: 'Lead Webdev Team @ Justika',
          timeline: 'June 2022 - August 2022',
          description: '',
        },
        {
          name: 'Software Engineer @ Justika',
          timeline: 'April 2021 - August 2022',
          description: '',
        },

      ],
    }
  },
}
</script>

<style></style>
