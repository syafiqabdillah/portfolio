<template>
  <ul>
    <li v-for="skill in list" :key="skill.name">
      {{ skill.name }} - {{ skill.score }}/10
    </li>
  </ul>
</template>

<script>
export default {
  name: 'SkillList',
  props: {
    list: Array,
  },
  methods: {
    expertise(score) {
      if (score < 5) return 'beginner'
      else if (score < 8) return 'intermediate'
      else return 'advance'
    },
  },
}
</script>

<style></style>
