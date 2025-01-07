<script setup lang="ts">
import MyWork from '~/components/MyWork.vue';
import taskData from '~/public/assets/data/familiengerichtlich.json'

const task = taskData
</script>

<template>
    <MyWork :task="task"/>
</template>