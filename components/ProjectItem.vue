<template>
  <div>
    <div class="relative overflow-hidden group">
      <img
        :src="project.src"
        :alt="project.name"
        class="w-full object-cover md:rounded-xl"
      />
    </div>
    <div class="px-2">
      <div class="mt-4 text-xl">{{ project.name }}</div>
      <div class="mt-2 text-sm">{{ project.desc }}</div>
      <a
        class="text-sm text-accent underline mt-2 inline-block"
        :href="project.url"
        >{{ getShortenUrl(project.url) }}
      </a>
      <ul class="mt-2">
        <li v-for="t in project.tech" class="list-disc ml-6" :key="t">
          {{ t }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: Object,
  },
  data() {
    return {
      open: false,
    }
  },
  methods: {
    getShortenUrl(url) {
      if (url.includes('www.')) return url.split('www.')[1]
      return url
    },
    toggleOpen() {
      console.log('toggle')
      this.open = !this.open
    },
  },
}
</script>

<style></style>
