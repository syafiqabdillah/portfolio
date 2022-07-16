<template>
  <div
    class="absolute left-0 top-0 w-full h-full bg-primary bg-opacity-90 transition ease-in-out duration-500"
    :class="{
      'translate-y-[80%]': !open,
      'translate-y-0': open,
    }"
  >
    <div
      class="h-[20%] bg-black bg-opacity-40 cursor-pointer flex justify-center items-center"
      @click="toggleOpen"
    >
      {{ open ? 'hide' : 'show' }} tech stacks
    </div>
    <ul class="h-[80%] w-full flex flex-col gap-2 justify-center items-center">
      <li v-for="t in project.tech" :key="t" class="md:text-xl">
        {{ t }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    project: Object,
    open: Boolean,
    toggleOpen: Function,
  },
}
</script>

<style></style>
