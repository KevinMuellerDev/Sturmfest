<script setup lang="ts">
import Qualifications from '~/components/Qualifications.vue';
import qualification from '~/public/assets/data/qualifications.json'

const quali = qualification
const url = 'https://www.systemische-therapie-mueller.de/qualifikationen'
const title = 'Qualifikationen – Cathrin Müller | Systemische Therapie Dortmund'
const description = 'Berufliche Qualifikationen von Cathrin Müller: Kindheitspädagogin, zertifizierte systemische Therapeutin (ifs), Verfahrensbeiständin und Kinderschutzfachberaterin.'

useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: url, ogType: 'website' })
useHead({ link: [{ rel: 'canonical', href: url }] })
</script>

<template>
    <Qualifications :qualification="quali"/>
</template>