<template>
  <section
    id="experience"
    class="min-h-screen bg-primary flex flex-col justify-center items-center text-light"
  >
    <div class="flex flex-col gap-4">
      <div
        v-for="exp in experiences"
        :key="exp.name"
        class="border-2 border-light rounded-xl p-2"
      >
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
          name: 'Software Engineer @ Justika',
          timeline: 'April 2021 - current',
          description: '',
        },
        {
          name: 'Lead Webdev Team @ Justika',
          timeline: 'June 2022 - current',
          description: '',
        },
      ],
    }
  },
}
</script>

<style></style>
