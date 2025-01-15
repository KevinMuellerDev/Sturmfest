<script setup lang="ts">
const story = await useStoryblok('angebot/systemischetherapie', { version: 'draft' });
</script>

<template>
    <StoryblokComponent v-if="story" :blok="story.content" />
</template>