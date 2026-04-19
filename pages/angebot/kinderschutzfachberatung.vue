<script setup lang="ts">
import MyWork from '~/components/MyWork.vue';
import taskData from '~/public/assets/data/kinderschutz.json'

const task = taskData
const url = 'https://www.systemische-therapie-mueller.de/angebot/kinderschutzfachberatung'
const title = 'Kinderschutzfachberatung § 8b SGB VIII Dortmund | Cathrin Müller'
const description = 'Kinderschutzfachberatung nach § 8b SGB VIII für Schulen, Kitas und Jugendhilfeeinrichtungen in Dortmund. Zertifizierte Beratung zur Früherkennung und Intervention bei Kindeswohlgefährdung.'

useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogUrl: url, ogType: 'website' })
useHead({
  link: [{ rel: 'canonical', href: url }],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Kinderschutzfachberatung',
      serviceType: 'Kinderschutzberatung nach § 8b SGB VIII',
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
