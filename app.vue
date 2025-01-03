<script setup lang="ts">

</script>

<template>
  <header>
    <nav>
      <NuxtLink to="/" activeClass="link-active">Home</NuxtLink>
    </nav>
  </header>
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
  <footer>
    <div class="img-links">
      <a href="https://www.bveb-ev.de/" target="_blank"><img src="/assets/images/bveb_logo.png" alt="bveb_logo"></a>
    </div>
    <div class="site-links">
      <NuxtLink to="/impressum" activeClass="link-active">Impressum</NuxtLink>
      <NuxtLink to="/privacypolicy" activeClass="link-active">Datenschutz / Haftungsausschluss</NuxtLink>
    </div>
  </footer>

</template>
<style lang="scss">
@import './assets/main.css';
header {
  position: absolute;
  top: 0;

  z-index: 15;
  display: flex;
  justify-content: end;
  align-items: center;
  height: var(--header-height);
  width: 100%;



  nav {
    display: flex;
    gap: 24px;
    padding-right: 32px;
    font-size: 1.25em;

    .link-active {
      color: var(--secondary-brand-color);
    }
  }


}

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
    max-height: 100vh;
    object-fit: cover;
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

footer {
  display: flex;
  justify-content: space-between;
  padding: 0 32px;
  align-items: center;
  background-color: var(--primary-brand-color);
  height: 64px;

  .img-links {
    img {
      width: 32px;
    }
  }

  .site-links {
    display: flex;
    justify-content: space-around;
    gap: 16px;
  }
}
</style>
