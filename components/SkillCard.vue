<template>
  <div class="skill">
    <div class="category">{{ name }}</div>
    <skill-list :list="list" />
  </div>
</template>

<script>
export default {
  name: "SkillCard",
  props: {
    name: String,
    list: Array
  }
}
</script>

<style scoped>
.skill {
  min-height: 100px;
  min-width: 250px;
  flex: 1;
  border-radius: 1em;
  padding: 2em;
  box-shadow: 0 0 3em rgba(0, 0, 0, 0.15);
}
.skill .category {
  font-weight: bold;
}
</style>
