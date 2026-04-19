<template>
  <div class="page-header">
    <h1>Qualifikationen</h1>
  </div>

  <div class="page-card">
    <section
      v-for="(quali, index) in qualification"
      :key="index"
      class="quali-section"
    >
      <h2>{{ quali.title }}</h2>
      <ul>
        <li v-for="content in quali.content" :key="content.subtitle" class="quali-item">
          <h3>{{ content.subtitle }}</h3>
          <p><strong>{{ content.pre }}</strong> {{ content.since }}</p>
          <ul v-if="content.keyPoints" class="key-points">
            <li v-for="point in content.keyPoints" :key="point">{{ point }}</li>
          </ul>
          <div v-if="content.additional">
            <p v-for="point in content.additional" :key="point">{{ point }}</p>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  qualification: { type: Object, required: true }
})
</script>

<style lang="scss" scoped>
.quali-section {
  & + .quali-section {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(77, 124, 138, 0.15);
  }

  > ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
}

.quali-item {
  h3 {
    font-size: var(--text-base) !important;
    font-family: var(--font-body) !important;
    font-weight: 700 !important;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--primary-brand-color) !important;
    margin: 0 0 0.35rem !important;
  }
}

.key-points {
  padding-left: 1.25rem;
  margin-top: 0.5rem;
}
</style>
