<script setup lang="ts">
import MyWork from '~/storyblok/MyWork.vue';
import taskData from '~/public/assets/data/kinderschutz.json'

const task = taskData
</script>

<template>
    <MyWork :task="task"/>
</template>