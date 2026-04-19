<template>
  <section class="hero-quote">
    <div class="quote-inner">
      <blockquote>
        Um klar zu sehen,<br />genügt oft ein Wechsel der Blickrichtung.
        <cite>(Antoine De Saint-Exupéry)</cite>
      </blockquote>
    </div>
  </section>

  <article>
    <div class="aboutme-top">
      <div class="profile-image-wrap">
        <img src="/assets/images/cathi_profil.webp" alt="Profilepicture of Cathrin Müller" />
      </div>
      <div class="contact-info">
        <h2>Cathrin Müller</h2>
        <p class="subtitle">Systemische Therapie &amp; Beratung</p>

        <div class="info-block">
          <h4>Sprechstunde</h4>
          <div class="opening-hours">
            <dl>
              <dt>Mo – Fr</dt>
              <dd>Nur nach Vereinbarung</dd>
            </dl>
            <dl>
              <dt>Sa – So</dt>
              <dd>Geschlossen</dd>
            </dl>
          </div>
        </div>

        <address class="address">
          <a class="info-row" href="https://maps.google.com/?q=Christine-Teusch-Bogen+47+44329+Dortmund" target="_blank">
            <span class="info-icon">&#9679;</span>
            <span>Christine-Teusch-Bogen 47, 44329 Dortmund</span>
          </a>
          <a class="info-row" href="mailto:info@systemische-therapie-mueller.de">
            <span class="info-icon">&#9679;</span>
            <span>info@systemische-therapie-mueller.de</span>
          </a>
          <a class="info-row" href="tel:+4917662817991">
            <span class="info-icon">&#9679;</span>
            <span>0176 628 17 991</span>
          </a>
          <div class="info-row muted">
            <span class="info-icon">&#9679;</span>
            <span>Fax: 0231 610 312 70</span>
          </div>
        </address>
      </div>
    </div>

    <div class="section-divider"></div>

    <div class="aboutme-bottom">
      <h1>Über meine Arbeit</h1>
      <p>Herzlich Willkommen auf meiner Webseite.</p>

      <p>Gerne möchte ich mich und meinen Werdegang in kurzen Worten skizzieren, um Ihnen oder dir eine Vorstellung
        meiner Person zu ermöglichen.</p>

      <p>Mein Name ist <strong>Cathrin Müller</strong>, ich wohne in Dortmund im Ruhrgebiet und ich
        arbeite seit 2013 mit Kindern, Jugendlichen und ihren Eltern.</p>

      <p>Hauptberuflich startete ich als Erzieherin, später studierte ich Kindheitspädagogik und 2021 absolvierte ich
        die BVEB e.V. zertifizierte Ausbildung zur Verfahrensbeiständin und Vormündin. Seit 2024 biete ich zudem
        systemische Einzel-, Paar- und Familientherapie (ifs) an, Teams können mich als zertifizierte
        Kinderschutzfachberaterin buchen.</p>

      <h3>Wie ich darauf kam?</h3>
      <p>Nun, dass ich im Berufsfeld der sozialen Arbeit Fuß fassen möchte, war früh für mich klar... am liebsten wäre
        ich Psychologin geworden... aber dafür braucht man Statistik im Studium, sagte man mir.</p>

      <p>So wurde ich zunächst Erzieherin, absolvierte zuerst Praktika in Kindergärten, dann in einer heilpädagogischen
        Tagesgruppe. Hier fiel mir auf, wie spannend es ist, sich die Geschichten, Wünsche und Gedanken anderer Menschen
        anzuhören und sie ein Stück auf ihrem Weg begleiten zu dürfen.</p>

      <p>Das weckte in mir den Wunsch, mich für Kinder und Jugendliche einzusetzen, denen möglicherweise bisher noch
        nicht so häufig zugehört wurde. So führte mein Weg in die stationäre Kinder- und Jugendhilfe. Lange arbeite ich
        in einer Familienwohngruppe, dann in einer Klärungs- und Diagnosegruppe. Zu letzt war ich pädagogische
        Bereichsleiterin bei meinem ehemaligen Arbeitgeber.</p>

      <p>2022 gründete ich meine freiberufliche Tätigkeit, welche ich seit 2024 hauptberuflich ausführe.</p>

      <p>Psychologin bin ich leider trotzdem nicht geworden, dafür aber Kindheitspädagogin. Das erschien dann doch
        sinnvoller für mich.</p>

      <p class="closing">Vielleicht lernen wir uns ja bald kennen? Ich würde mich freuen!</p>
    </div>
  </article>

  <section class="contact-section">
    <div class="contact-section-header">
      <h2>Kontakt aufnehmen</h2>
      <p>Sie haben Fragen oder möchten einen Termin vereinbaren? Schreiben Sie mir gerne.</p>
    </div>
    <div aria-labelledby="contact-form">
      <ContactForm />
    </div>
  </section>
</template>

<script setup lang="ts">
import ContactForm from '@/components/ContactForm.vue';

const title = 'Cathrin Müller – Systemische Therapie & Beratung in Dortmund'
const description = 'Systemische Einzel-, Paar- und Familientherapie in Dortmund. Cathrin Müller – zertifizierte Therapeutin, Verfahrensbeiständin und Kinderschutzfachberaterin.'
const url = 'https://www.systemische-therapie-mueller.de'
const image = `${url}/assets/images/cathi_profil.webp`

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: image,
  ogUrl: url,
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: image,
})

useHead({
  htmlAttrs: { lang: 'de' },
  link: [
    { rel: 'icon', type: 'image/ico', href: '/favicon.ico' },
    { rel: 'canonical', href: url }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Cathrin Müller',
        jobTitle: 'Systemische Therapeutin',
        description,
        url,
        image,
        worksFor: { '@type': 'LocalBusiness', name: 'Sturmfest – Systemische Therapie' },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Christine-Teusch-Bogen 47',
          addressLocality: 'Dortmund',
          postalCode: '44329',
          addressCountry: 'DE'
        }
      })
    }
  ]
})
</script>

<style scoped lang="scss">
/* ── Quote ─────────────────────────────────────────────── */
.hero-quote {
  width: 100%;
  padding: 3.5rem 2rem;
  display: flex;
  justify-content: center;

  .quote-inner {
    position: relative;
    max-width: 780px;
    width: 100%;
    padding: 2rem 2.5rem 2rem 3rem;
    background: linear-gradient(135deg, rgba(77, 124, 138, 0.07), rgba(77, 124, 138, 0.02));
    border-left: 3px solid var(--primary-brand-color);
    border-radius: 0 12px 12px 0;

    &::before {
      content: '\201C';
      position: absolute;
      top: -1.5rem;
      left: 1.25rem;
      font-size: 7rem;
      color: var(--primary-brand-color);
      opacity: 0.15;
      font-family: Georgia, serif;
      line-height: 1;
      pointer-events: none;
    }
  }

  blockquote {
    margin: 0;
    font-family: var(--font-display);
    font-size: var(--text-xl);
    font-style: italic;
    font-weight: 400;
    line-height: 1.7;
    color: var(--font-color);
  }

  cite {
    display: block;
    margin-top: 1rem;
    font-family: var(--font-body);
    font-size: var(--text-sm);
    font-style: normal;
    font-weight: 400;
    color: var(--primary-brand-color);
    text-align: right;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }
}

/* ── Article Card ───────────────────────────────────────── */
article {
  width: calc(100% - 4rem);
  max-width: 1100px;
  padding: 2.5rem;
  background: #ffffff;
  border-radius: 16px;
  border-top: 4px solid var(--primary-brand-color);
  box-shadow:
    0 4px 24px rgba(77, 124, 138, 0.1),
    0 1px 4px rgba(0, 0, 0, 0.04);

  .aboutme-top {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: stretch;
  }

  .profile-image-wrap {
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center top;
      border-radius: 12px;
      box-shadow: 0 2px 12px rgba(77, 124, 138, 0.15);
    }
  }

  /* ── Contact Info ───────────────────────────────────── */
  .contact-info {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    h2 {
      margin: 0;
      font-family: var(--font-display);
      font-size: var(--text-3xl);
      font-weight: 700;
      color: var(--font-color);
      line-height: 1.15;
    }

    .subtitle {
      margin: 0;
      font-family: var(--font-body);
      font-size: var(--text-xs);
      font-weight: 600;
      color: var(--primary-brand-color);
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    .info-block {
      h4 {
        margin: 0 0 0.6rem;
        font-family: var(--font-body);
        font-size: var(--text-xs);
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: var(--primary-brand-color);
      }

      .opening-hours {
        display: flex;
        flex-direction: column;
        gap: 0.35rem;

        dl {
          margin: 0;
          display: flex;
          justify-content: space-between;
          font-size: var(--text-base);
          font-weight: 300;
          color: var(--font-color);
        }
      }
    }

    .address {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      font-style: normal;

      .info-row {
        display: flex;
        align-items: flex-start;
        gap: 0.6rem;
        font-size: var(--text-base);
        font-weight: 400;
        color: var(--font-color);
        text-decoration: none;
        transition: color 125ms ease;

        &:hover {
          color: var(--primary-brand-color);
        }

        &.muted {
          color: #888;
          cursor: default;

          &:hover {
            color: #888;
          }
        }

        .info-icon {
          color: var(--primary-brand-color);
          font-size: 0.4rem;
          margin-top: 0.45rem;
          flex-shrink: 0;
        }
      }
    }
  }

  /* ── Divider ────────────────────────────────────────── */
  .section-divider {
    height: 1px;
    margin: 2.5rem 0;
    background: linear-gradient(to right, var(--primary-brand-color), transparent);
    opacity: 0.25;
  }

  /* ── Bio ────────────────────────────────────────────── */
  .aboutme-bottom {
    h1 {
      font-family: var(--font-display);
      font-size: var(--text-2xl);
      font-weight: 700;
      color: var(--font-color);
      margin: 0 0 1.5rem;
    }

    h3 {
      font-family: var(--font-body);
      font-size: var(--text-xs);
      font-weight: 700;
      color: var(--primary-brand-color);
      margin: 2rem 0 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }

    p {
      font-size: var(--text-base);
      font-weight: 300;
      line-height: 1.85;
      color: var(--font-color);
      margin: 0 0 1rem;
    }

    .closing {
      margin-top: 1.5rem;
      font-weight: 400;
      font-style: italic;
      color: var(--primary-brand-color);
    }
  }
}

/* ── Contact Section ────────────────────────────────────── */
.contact-section {
  width: calc(100% - 4rem);
  max-width: 1100px;
  padding: 3.5rem 0 2rem;

  .contact-section-header {
    margin-bottom: 2rem;
    border-left: 3px solid var(--primary-brand-color);
    padding-left: 1.25rem;

    h2 {
      margin: 0 0 0.5rem;
      font-family: var(--font-display);
      font-size: var(--text-2xl);
      font-weight: 700;
      color: var(--font-color);
    }

    p {
      margin: 0;
      font-size: var(--text-sm);
      font-weight: 300;
      color: #666;
    }
  }
}

/* ── Responsive ─────────────────────────────────────────── */
@media (max-width: 750px) {
  article {
    width: calc(100% - 2rem);
    padding: 1.5rem;

    .aboutme-top {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .profile-image-wrap img {
      aspect-ratio: 4 / 3;
    }
  }

  .hero-quote {
    padding: 2rem 1rem;

    .quote-inner {
      padding: 1.5rem 1.5rem 1.5rem 2rem;
    }

    blockquote {
      font-size: 1.1rem;
    }
  }

  .contact-section {
    width: calc(100% - 2rem);
  }
}
</style>
