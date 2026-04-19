// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: true,
  modules: ['@nuxtjs/robots', '@nuxtjs/sitemap', 'nuxt-og-image', '@nuxt/image'],
  site: {
    url: 'https://www.systemische-therapie-mueller.de',
    name: 'Sturmfest Systemische Therapie Cathrin Müller'
  },
  robots: {
    disallow: ['/kontakt', '/impressum', '/privacypolicy', '/angebot$']
  },

  sitemap: {
    strictNuxtContentPaths: false,
    exclude: ['/kontakt', '/impressum', '/privacypolicy', '/angebot'],
    urls: [
      { loc: '/', priority: 1.0, changefreq: 'monthly' },
      { loc: '/qualifikationen', priority: 0.8, changefreq: 'monthly' },
      { loc: '/angebot/systemischetherapie', priority: 0.9, changefreq: 'monthly' },
      { loc: '/angebot/familiengerichtlich', priority: 0.9, changefreq: 'monthly' },
      { loc: '/angebot/kinderschutzfachberatung', priority: 0.9, changefreq: 'monthly' },
    ]
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/qualifikationen',
        '/angebot/systemischetherapie',
        '/angebot/familiengerichtlich',
        '/angebot/kinderschutzfachberatung',
        '/kontakt',
        '/privacypolicy'
      ]
    }
  }
})