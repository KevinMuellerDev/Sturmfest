<script setup lang="ts">

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
