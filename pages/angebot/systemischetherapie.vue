<script setup lang="ts">
import MyWork from '~/components/MyWork.vue';
import taskData from '~/public/assets/data/systemischetherapie.json'

const task = taskData
const url = 'https://www.systemische-therapie-mueller.de/angebot/systemischetherapie'
const title = 'Systemische Therapie Dortmund – Familien-, Paar- & Einzeltherapie | Cathrin Müller'
const description = 'Systemische Familien-, Paar- und Einzeltherapie sowie kindzentrierte Familientherapie in Dortmund. Cathrin Müller begleitet Sie auf dem Weg zu neuen Perspektiven.'

useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: url, ogType: 'website' })
useHead({
  link: [{ rel: 'canonical', href: url }],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Systemische Therapie',
      serviceType: 'Psychotherapie',
      description,
      url,
      provider: {
        '@type': 'LocalBusiness',
        name: 'Sturmfest – Systemische Therapie Cathrin Müller',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Dortmund',
          addressCountry: 'DE'
        }
      },
      areaServed: { '@type': 'City', name: 'Dortmund' }
    })
  }]
})
</script>

<template>
  <MyWork :task="task" />
</template>
