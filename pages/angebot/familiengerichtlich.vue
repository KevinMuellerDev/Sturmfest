<script setup lang="ts">
const story = await useStoryblok('angebot/familiengerichtlich', { version: 'draft' });
</script>

<template>
    <StoryblokComponent v-if="story" :blok="story.content" />
</template>