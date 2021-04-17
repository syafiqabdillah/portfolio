<template>
  <div class="card">
    <div class="category-name">{{ name }}</div>
    <SkillList :list="list" />
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
.card {
  min-height: 100px;
  min-width: 250px;
  flex: 1;
  border-radius: 1em;
  padding: 2em;
  box-shadow: 0 0 3em rgba(0, 0, 0, 0.15);
  transition: transform 200ms;
}
.card:hover {
  transform: translateY(-1em);
}
.card .category-name {
  font-weight: 600;
  text-transform: uppercase;
}
</style>
