<script setup lang="ts">
import MyWork from '~/components/MyWork.vue';
import taskData from '~/public/assets/data/kinderschutz.json'

const task = taskData
</script>

<template>
    <MyWork :task="task"/>
</template>