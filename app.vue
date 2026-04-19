<script setup lang="ts">
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': 'https://www.systemische-therapie-mueller.de',
        name: 'Sturmfest – Systemische Therapie Cathrin Müller',
        description: 'Systemische Einzel-, Paar- und Familientherapie, Verfahrensbeistandschaft und Kinderschutzfachberatung in Dortmund.',
        url: 'https://www.systemische-therapie-mueller.de',
        telephone: '+4917662817991',
        email: 'info@systemische-therapie-mueller.de',
        image: 'https://www.systemische-therapie-mueller.de/assets/images/cathi_profil.webp',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Christine-Teusch-Bogen 47',
          addressLocality: 'Dortmund',
          postalCode: '44329',
          addressCountry: 'DE'
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          description: 'Nur nach Vereinbarung'
        },
        sameAs: ['https://www.bveb-ev.de/']
      })
    }
  ]
})
</script>

<template>
  <div>
    <Header />
    <div class="atf-picture">
      <div class="logo">
        <img class="animate" src="/assets/images/test.png" alt="">
      </div>
      <img class="background-atf" src="/assets/images/atf_background.webp" alt="">
    </div>
    <main>
      <div class="content animate-2">
        <NuxtPage />
      </div>
    </main>
    <Footer />
  </div>
</template>
<style lang="scss">
@import './assets/main.css';



.atf-picture {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 100dvw;
  overflow-x: hidden;

  .logo {
    position: absolute;
    display: flex;
    justify-content: center;
    padding: 0 4em;


    img {
      position: relative;
      width: calc(100% - 6em);
      max-width: 45.25em;
      z-index: 10;

    }
  }

  .background-atf {
    position: relative;
    top: 0;
    min-width: 100dvw;
    max-width: 100dvw;
    max-height: 80vh;
    object-fit: fill;
  }
}

main {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  .content {
    width: 100%;
    max-width: 1440px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
}

@keyframes mymove {
  100% {
    opacity: 1;
  }
}

</style>
