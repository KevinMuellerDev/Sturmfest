<template>
    <footer>
        <div class="img-links">
            <a href="https://www.bveb-ev.de/" target="_blank"><img src="/assets/images/bveb_logo.png"
                    alt="bveb_logo"></a>
        </div>
        <div class="site-links">
            <NuxtLink to="/impressum" activeClass="link-active">Impressum</NuxtLink>
            <NuxtLink to="/privacypolicy" activeClass="link-active">Datenschutz / Haftungsausschluss</NuxtLink>
        </div>
    </footer>
</template>

<style lang="scss">
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