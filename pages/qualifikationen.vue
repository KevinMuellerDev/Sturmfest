<script setup lang="ts">
import Qualifications from '~/components/Qualifications.vue';
import qualification from '~/public/assets/data/qualifications.json'

const quali = qualification
</script>

<template>
    <Qualifications :qualification="quali"/>
</template>