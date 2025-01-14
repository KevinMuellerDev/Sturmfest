<script setup lang="ts">
import MyWork from '~/storyblok/MyWork.vue';
import taskData from '~/public/assets/data/systemischetherapie.json'
const story = await useStoryblok('angebot/systemischetherapie', { version: 'draft' });
const task = taskData

onMounted(() => {
    console.log(story);
    
})
</script>

<template>
    <StoryblokComponent v-if="story" :blok="story.content" />
</template>