<script setup lang="ts">
const story = await useAsyncStoryblok('angebot/systemischetherapie', { version: 'draft' });
</script>

<template>
    <StoryblokComponent v-if="story" :blok="story.content" />
</template>