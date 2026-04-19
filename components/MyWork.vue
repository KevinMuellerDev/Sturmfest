<template>
  <div class="page-header">
    <h1>{{ task.title }}</h1>
  </div>

  <div class="page-card">
    <img v-if="task.img" :src="`/assets/${task.img}`" :alt="task.imgAlt || ''" class="task-image" />

    <section v-for="(offer, index) in task.offers" :key="index" class="task-section">
      <h2 v-html="offer.subtitle"></h2>
      <p>{{ offer.description }}</p>

      <div v-if="offer.contentList" class="content-list">
        <h3>Was ich anbiete:</h3>
        <ul>
          <li v-for="content in offer.contentList" :key="content.context">
            {{ content.context }}{{ content.description }}
          </li>
        </ul>
      </div>

      <div v-if="offer.content" v-for="content in offer.content">
        <h3 v-if="content.subtitle">{{ content.subtitle }}</h3>
        <p v-for="text in content.text">{{ text }}</p>
      </div>

      <div v-for="text in offer.closingText">
        <h3 v-if="text.header">{{ text.header }}</h3>
        <p>{{ text.paragraph }}</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  task: { type: Object, required: true }
})
</script>

<style lang="scss" scoped>
.task-image {
  display: block;
  width: 100%;
  max-width: 320px;
  border-radius: 12px;
  margin: 0 0 2rem;
  box-shadow: 0 2px 12px rgba(77, 124, 138, 0.15);

  @media (max-width: 768px) {
    margin: 0 auto 2rem;
  }
}

.task-section {
  & + .task-section {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(77, 124, 138, 0.15);
  }
}
</style>
