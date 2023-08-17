<template>
  <nav class="fixed bottom-0 right-0 z-50 rounded-tl-2xl min-h-12 bg-light text-primary">
    <ToTop />
    <ul class="flex justify-end items-center px-4 py-3 gap-x-10 gap-y-2 flex-wrap">
      <li v-for="item in navs" :key="item.label">
        <a :href="item.url" :target="target(item.url)" class="hover:text-accent">{{
          item.label
        }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navs: [
        {
          url: "#about",
          label: "About",
        },
        {
          url: "#projects",
          label: "Projects",
        },
        {
          url: "#experience",
          label: "Experience",
        },
      ],
    };
  },
  methods: {
    target(url) {
      return url.includes("http") ? "_blank" : "_self";
    },
  },
};
</script>
