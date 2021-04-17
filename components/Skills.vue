<template>
  <div class="body">
    <div class="container">
      <h2 class="title fancy-text">Skills</h2>
      <div class="skills">
        <SkillCard
          v-for="card in skillCards"
          :key="card.name"
          :name="card.name"
          :list="card.list"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SkillCard from "./SkillCard"
export default {
  components: { SkillCard },
  name: 'Skills',
  data() {
    return {
      skills: {
        programmingLanguage: [
          {
            name: 'python',
            score: 8,
          },
          {
            name: 'javascript',
            score: 8,
          },
          {
            name: 'java',
            score: 7,
          },
          {
            name: 'dart',
            score: 4,
          },
        ],
        backendFramework: [
          {
            name: 'flask',
            score: 8,
          },
          {
            name: 'fastAPI',
            score: 8,
          },
          {
            name: 'laravel lumen',
            score: 6,
          },
          {
            name: 'spring',
            score: 4,
          },
        ],
        frontendFramework: [
          {
            name: 'Vue.js',
            score: 8,
          },
          {
            name: 'React.js',
            score: 7,
          },
          {
            name: 'Nuxt.js',
            score: 6,
          },
          {
            name: 'Thymeleaf',
            score: 4,
          },
        ],
      },
    }
  },
  computed: {
    skillCards() {
      return [
        {
          name: 'programming language',
          list: this.skills.programmingLanguage,
        },
        {
          name: 'front end framework',
          list: this.skills.frontendFramework,
        },
        {
          name: 'back end framework',
          list: this.skills.backendFramework,
        },
      ]
    },
  },
}
</script>

<style scoped>
.body {
  padding: 3em 0;
  text-align: center;
  background-color: whitesmoke;
}
.title {
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 500;
  display: inline-block;
}
.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  margin: 2em 1em;
  text-transform: capitalize;
  text-align: left;
}
</style>
