<template>
  <div>
    <div class="relative overflow-hidden group">
      <img :src="project.src" :alt="project.name" class="w-full object-cover" />
      <tech-stacks :toggleOpen="toggleOpen" :project="project" :open="open" />
    </div>
    <div class="px-2">
      <div class="mt-4 text-xl">{{ project.name }}</div>
      <div>
        <a
          class="text-sm text-accent underline mt-2 inline-block"
          :href="project.url"
          >{{ getShortenUrl(project.url) }}
        </a>
      </div>
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
