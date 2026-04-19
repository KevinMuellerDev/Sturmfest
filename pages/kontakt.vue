<script setup lang="ts">
const url = 'https://www.systemische-therapie-mueller.de/kontakt'
useSeoMeta({
  title: 'Impressum | Sturmfest Systemische Therapie Cathrin Müller',
  description: 'Impressum und Anbieterkennzeichnung von Cathrin Müller, Sturmfest Systemische Familientherapie, Dortmund.',
  robots: 'noindex, follow'
})
useHead({ link: [{ rel: 'canonical', href: url }] })
</script>

<template>
  <div class="page-header">
    <h1>Impressum</h1>
  </div>

  <div class="page-card">
    <div class="impressum-grid">
      <div class="impressum-section">
        <h3>Angaben gemäß § 5 TMG</h3>
        <p>
          <strong>Sturmfest - Systemische Familientherapie Cathrin Müller</strong><br>
          Cathrin Müller<br>
          Christine-Teusch-Bogen 47<br>
          44329 Dortmund<br>
          Deutschland
        </p>
        <p>Vertreten durch: <strong>Cathrin Müller</strong></p>
      </div>

      <div class="impressum-section">
        <h3>Kontakt</h3>
        <p>
          Telefon: <a href="tel:+4917662817991">0176/628 179 91</a><br>
          Fax: 0231 610 312 70<br>
          E-Mail: <a href="mailto:info@systemische-therapie-mueller.de">info@systemische-therapie-mueller.de</a>
        </p>
        <p>Steuernummer: 332/5009/3348</p>
      </div>
    </div>

    <div class="section-divider"></div>

    <div class="impressum-section">
      <h3>Haftungsausschluss</h3>

      <h4>Haftung für Links</h4>
      <p>
        Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben.
        Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
        Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
        wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
        Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
        jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
        Rechtsverletzungen werden wir derartige Links umgehend entfernen.
      </p>

      <h4>Haftung für Inhalte</h4>
      <p>
        Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und
        Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7
        Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis
        10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
        Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
        bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
        konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
        Inhalte umgehend entfernen.
      </p>
    </div>

    <div class="impressum-section">
      <h3>Urheberrecht</h3>
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
        Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
        Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
        Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit
        die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet.
        Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
        Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
        Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
      </p>
    </div>

    <div class="impressum-section">
      <h3>EU-Streitschlichtung</h3>
      <p>
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:<br>
        <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
          https://ec.europa.eu/consumers/odr/
        </a>
      </p>
      <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
    </div>

    <div class="impressum-section">
      <h3>Verbraucherstreitbeilegung</h3>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
      </p>
    </div>

    <p class="source">
      Quelle: <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer">e-recht24.de</a>
    </p>
  </div>
</template>

<style scoped lang="scss">
.impressum-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 0.5rem;

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

.section-divider {
  height: 1px;
  margin: 2rem 0;
  background: linear-gradient(to right, var(--primary-brand-color), transparent);
  opacity: 0.25;
}

.impressum-section {
  margin-bottom: 1.5rem;
}

.source {
  margin-top: 2rem;
  opacity: 0.6;
  font-size: var(--text-sm) !important;
}
</style>
