<template>
    <header>
        <nav>
            <div id="nav-icon4" :class="{ open: isOpen }" @click="toggleNavIcon">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
        <div class="menu-bar" :class="menuOpen ? 'menu_open ' : allowCloseAnimation ? 'menu_close' : ''">
            <div>
                <NuxtLink @click="toggleNavIcon" to="/">Home</NuxtLink>
                <NuxtLink @click="toggleNavIcon" to="/qualifikationen">Qualifikationen</NuxtLink>
                <NuxtLink @click="toggleNavIcon" to="/angebot/systemischetherapie">Systemische Therapie</NuxtLink>
                <NuxtLink @click="toggleNavIcon" to="/angebot/familiengerichtlich">Familiengerichtlicher Kontext
                </NuxtLink>
                <NuxtLink @click="toggleNavIcon" to="/angebot/kinderschutzfachberatung">Kinderschutzfachberatung
                </NuxtLink>
            </div>
            <div>
                <NuxtLink @click="toggleNavIcon" to="/impressum">Impressum</NuxtLink>
                <NuxtLink @click="toggleNavIcon" to="/privacypolicy">Datenschutzerklärung</NuxtLink>
            </div>

        </div>
    </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const isOpen = ref(false);
const menuOpen = ref(false);
const allowCloseAnimation = ref(false);


const toggleNavIcon = () => {
    if (!menuOpen.value) {
        allowCloseAnimation.value = true
    }
    isOpen.value = !isOpen.value;
    menuOpen.value = !menuOpen.value;
};
</script>

<style lang="scss">
header {
  position: absolute;
  top: 0;
  z-index: 15;
  display: flex;
  justify-content: end;
  align-items: center;
  height: var(--header-height);
  width: 100%;

  .menu-bar {
    position: fixed;
    border-radius: 0 0 0 16px;
    right: 0;
    top: 0;
    width: 0;
    padding: 64px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 64px;
    background-color: rgba($color: #524d41, $alpha: 0.9);
    opacity: 0;
    overflow-x: hidden;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
    }

    a {
      font-size: 2rem;
      text-align: center;
    }
  }

  nav {
    display: flex;
    gap: 24px;
    padding-right: 32px;
    font-size: 1.25em;

    .link-active {
      color: var(--secondary-brand-color);
    }

    #nav-icon4 {
      position: fixed;
      width: 30px;
      right: 32px;
      height: 22.5px;
      z-index: 1000;
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: .5s ease-in-out;
      -moz-transition: .5s ease-in-out;
      -o-transition: .5s ease-in-out;
      transition: .5s ease-in-out;
      cursor: pointer;
    }

    #nav-icon4 span {
      display: block;
      position: absolute;
      height: 3px;
      width: 100%;
      background: #9a9a9a;
      border-radius: 9px;
      opacity: 1;
      left: 0;
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: .25s ease-in-out;
      -moz-transition: .25s ease-in-out;
      -o-transition: .25s ease-in-out;
      transition: .25s ease-in-out;
    }

    #nav-icon4 span:nth-child(1) {
      top: 0px;
      -webkit-transform-origin: left center;
      -moz-transform-origin: left center;
      -o-transform-origin: left center;
      transform-origin: left center;
    }

    #nav-icon4 span:nth-child(2) {
      top: 9px;
      -webkit-transform-origin: left center;
      -moz-transform-origin: left center;
      -o-transform-origin: left center;
      transform-origin: left center;
    }

    #nav-icon4 span:nth-child(3) {
      top: 18px;
      -webkit-transform-origin: left center;
      -moz-transform-origin: left center;
      -o-transform-origin: left center;
      transform-origin: left center;
    }

    #nav-icon4.open span:nth-child(1) {
      -webkit-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      -o-transform: rotate(45deg);
      transform: rotate(45deg);
      top: -2px;
      left: 8px;
    }

    #nav-icon4.open span:nth-child(2) {
      width: 0%;
      opacity: 0;
    }

    #nav-icon4.open span:nth-child(3) {
      -webkit-transform: rotate(-45deg);
      -moz-transform: rotate(-45deg);
      -o-transform: rotate(-45deg);
      transform: rotate(-45deg);
      top: 19.5px;
      left: 8px;
    }
  }

}

.menu_open {
  animation-duration: 0.5s;
  animation-name: menu-slidein;
  animation-fill-mode: forwards;
}

@keyframes menu-slidein {
  from {
    width: 0;
    opacity: 0;
  }

  to {
    width: 33%;
    opacity: 1;
  }
}

@keyframes menu-slidein-mobile {
  from {
    width: 0;
    opacity: 0;
  }

  to {
    width: 100%;
    opacity: 1;
  }
}

.menu_close {
  animation-duration: 0.5s;
  animation-name: menu-slideout;
  animation-fill-mode: forwards;
}

@keyframes menu-slideout {
  from {
    width: 33%;
    opacity: 1;
  }

  to {
    width: 0;
    opacity: 0;
  }
}

@keyframes menu-slideout-mobile {
  from {
    width: 100%;
    opacity: 1;
  }

  to {
    width: 0;
    opacity: 0;
  }
}

</style>