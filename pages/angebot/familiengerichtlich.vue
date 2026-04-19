<script setup lang="ts">
import MyWork from '~/components/MyWork.vue';
import taskData from '~/public/assets/data/familiengerichtlich.json'

const task = taskData
const url = 'https://www.systemische-therapie-mueller.de/angebot/familiengerichtlich'
const title = 'Verfahrensbeistandschaft Dortmund – Familiengerichtlicher Kontext | Cathrin Müller'
const description = 'Verfahrensbeistandschaft und Unterstützung im familiengerichtlichen Verfahren in Dortmund. Cathrin Müller setzt sich als zertifizierte Verfahrensbeiständin für das Wohl des Kindes ein.'

useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: url, ogType: 'website' })
useHead({
  link: [{ rel: 'canonical', href: url }],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Verfahrensbeistandschaft',
      serviceType: 'Familiengerichtliche Beratung',
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
