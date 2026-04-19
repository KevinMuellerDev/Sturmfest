<template>
  <header :class="{ scrolled: isScrolled }">
    <nav>
      <button id="nav-icon" :class="{ open: isOpen }" @click="toggleMenu" aria-label="Menü öffnen/schließen">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>

    <div class="menu-backdrop" :class="{ visible: menuOpen }" @click="closeMenu" />

    <div class="menu-panel" :class="{ open: menuOpen }">
      <div class="menu-nav">
        <NuxtLink @click="closeMenu" to="/">Home</NuxtLink>
        <NuxtLink @click="closeMenu" to="/qualifikationen">Qualifikationen</NuxtLink>
        <NuxtLink @click="closeMenu" to="/angebot/systemischetherapie">Systemische Therapie</NuxtLink>
        <NuxtLink @click="closeMenu" to="/angebot/familiengerichtlich">Familiengerichtlicher Kontext</NuxtLink>
        <NuxtLink @click="closeMenu" to="/angebot/kinderschutzfachberatung">Kinderschutzfachberatung</NuxtLink>
      </div>
      <div class="menu-legal">
        <NuxtLink @click="closeMenu" to="/impressum">Impressum</NuxtLink>
        <NuxtLink @click="closeMenu" to="/privacypolicy">Datenschutzerklärung</NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isOpen = ref(false);
const menuOpen = ref(false);
const isScrolled = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
  menuOpen.value = !menuOpen.value;
};

const closeMenu = () => {
  isOpen.value = false;
  menuOpen.value = false;
};

const handleScroll = () => {
  const atf = document.querySelector('.atf-picture') as HTMLElement | null;
  const threshold = atf ? atf.offsetHeight * 0.75 : 300;
  isScrolled.value = window.scrollY > threshold;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style lang="scss">
header {
  position: absolute;
  top: 0;
  z-index: 200;
  width: 100%;
  height: var(--header-height);
  pointer-events: none;
}

/* ── Hamburger Button ───────────────────────────────────── */
#nav-icon {
  pointer-events: all;
  position: fixed;
  top: 1rem;
  right: 2rem;
  width: 28px;
  height: 20px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  z-index: 1000;

  span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    border-radius: 2px;
    background: var(--primary-brand-light);
    filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.5));
    transition: background 0.3s ease, filter 0.3s ease, transform 0.3s ease, opacity 0.3s ease, top 0.3s ease;

    &:nth-child(1) { top: 0; }
    &:nth-child(2) { top: 9px; }
    &:nth-child(3) { top: 18px; }
  }

  &.open span {
    background: var(--primary-brand-light);
    filter: none;

    &:nth-child(1) { transform: rotate(45deg); top: 9px; }
    &:nth-child(2) { opacity: 0; transform: translateX(8px); }
    &:nth-child(3) { transform: rotate(-45deg); top: 9px; }
  }
}

/* Dark hamburger when scrolled past ATF */
header.scrolled #nav-icon:not(.open) span {
  background: var(--primary-brand-dark);
  filter: none;
}

/* ── Backdrop ───────────────────────────────────────────── */
.menu-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.4s ease;
  z-index: 500;

  &.visible {
    opacity: 1;
    pointer-events: all;
  }
}

/* ── Menu Panel ─────────────────────────────────────────── */
.menu-panel {
  pointer-events: none;
  position: fixed;
  top: 0;
  right: 0;
  height: 100dvh;
  width: 360px;
  max-width: 90vw;
  background: var(--color-menu-overlay);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  transform: translateX(100%);
  transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
  padding: 5rem 3rem;
  z-index: 600;
  box-shadow: -8px 0 32px rgba(0, 0, 0, 0.15);

  &.open {
    transform: translateX(0);
    pointer-events: all;
  }

  .menu-nav {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    a {
      font-family: var(--font-display);
      font-size: 1.35rem;
      font-weight: 700;
      color: var(--primary-brand-light);
      text-decoration: none;
      padding: 0.5rem 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      cursor: pointer;
      transition: color 0.2s ease, padding-left 0.2s ease;
      letter-spacing: -0.01em;

      &:last-child {
        border-bottom: none;
      }

      &:hover {
        color: var(--border-hover);
        padding-left: 0.5rem;
      }

      &.router-link-active {
        color: var(--border-hover);
      }
    }
  }

  .menu-legal {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
    padding-top: 1.5rem;

    a {
      font-family: var(--font-body);
      font-size: 0.85rem;
      font-weight: 400;
      color: color-mix(in srgb, var(--primary-brand-light) 55%, transparent);
      text-decoration: none;
      cursor: pointer;
      transition: color 0.2s ease;
      letter-spacing: 0.02em;

      &:hover {
        color: color-mix(in srgb, var(--primary-brand-light) 90%, transparent);
      }
    }
  }
}

@media (max-width: 750px) {
  #nav-icon {
    right: 1.25rem;
    top: 0.875rem;
  }

  .menu-panel {
    left: 0;
    right: 0;
    width: auto;
    font-size: 16px;
    padding: 5rem 2rem 3rem;
    gap: 2rem;
    align-items: center;

    .menu-nav {
      width: 100%;
      align-items: center;

      a {
        font-size: 1.4rem;
        padding: 0.65rem 0;
        text-align: center;
        border-bottom-color: rgba(255, 255, 255, 0.08);

        &:hover {
          padding-left: 0;
        }
      }
    }

    .menu-legal {
      width: 100%;
      align-items: center;

      a {
        font-size: 0.9rem;
        text-align: center;
      }
    }
  }
}
</style>
