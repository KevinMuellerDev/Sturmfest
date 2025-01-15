<script setup lang="ts">
const story = await useStoryblok('qualifikationen', { version: 'draft' }); 
</script>

<template>
    <StoryblokComponent v-if="story" :blok="story.content" />
</template>