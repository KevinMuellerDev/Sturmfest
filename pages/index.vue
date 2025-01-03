<template>
    <section>
      <blockquote>
        Um klar zu sehen,<br> genügt oft ein Wechsel der Blickrichtung.
        <cite>(Antoine De Saint-Exupéry)</cite>
      </blockquote>
    </section>
    <article>
      <div class="aboutme-top">
        <img src="/assets/images/cathi_profil.webp" alt="Profilepicture of Cathrin Müller">
        <div class="contact-info">
          <h4>Sprechstunde</h4>
          <div class="opening-hours">
            <dl>
              <dt>Mo - Fr</dt>
              <dd>Nur nach Vereinbarung</dd>
            </dl>
            <dl>
              <dt>Sa - So</dt>
              <dd>Geschlossen</dd>
            </dl>
          </div>
          <address class="address">
            <p><strong>Adresse:</strong> Christine-Teusch-Bogen 47, 44329 Dortmund</p>
            <p><strong>E-Mail:</strong> <a
                href="mailto:info@systemische-therapie-mueller.de">info@systemische-therapie-mueller.de</a></p>
            <p><strong>Tel:</strong> <a href="tel:+4917662817991">0176 628 17 991</a></p>
            <p><strong>Fax:</strong> 0231 610 312 70</p>
          </address>
        </div>
      </div>
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
          Kinderschutzfachberaterin buchen. </p>
  
        <h4>Wie ich darauf kam?</h4>
        <p>Nun, dass ich im Berufsfeld der sozialen Arbeit Fuß fassen möchte, war früh für mich klar... am liebsten wäre
          ich Psychologin geworden... aber dafür braucht man Statistik im Studium, sagte man mir.</p>
  
        <p>So wurde ich zunächst Erzieherin, absolvierte zuerst Praktika in Kindergärten, dann in einer heilpädagogischen
          Tagesgruppe. Hier fiel mir auf, wie spannend es ist, sich die Geschichten, Wünsche und Gedanken anderer Menschen
          anzuhören und sie ein Stück auf ihrem Weg begleiten zu dürfen.</p>
  
        <p>Das weckte in mir den Wunsch, mich für Kinder und Jugendliche einzusetzen, denen möglicherweise bisher noch
          nicht so häufig zugehört wurde. So führte mein Weg in die stationäre Kinder- und Jugendhilfe. Lange arbeite ich
          in einer Familienwohngruppe, dann in einer Klärungs- und Diagnosegruppe. Zu letzt war ich pädagogische
          Bereichsleiterin bei meinem ehemaligen Arbeitgeber. </p>
  
        <p>2022 gründete ich meine freiberufliche Tätigkeit, welche ich seit 2024 hauptberuflich ausführe.</p>
  
        <p>Psychologin bin ich leider trotzdem nicht geworden, dafür aber Kindheitspädagogin. Das erschien dann doch
          sinnvoller für mich.</p>
  
  
        <p>Vielleicht lernen wir uns ja bald kennen? Ich würde mich freuen!</p>
      </div>
    </article>
  
    <div aria-labelledby="contact-form">
      <ContactForm />
    </div>
  
  
  </template>
  
  <script setup lang="ts">
  import ContactForm from '@/components/ContactForm.vue';
  </script>
  
  <style scoped lang="scss">
  section {
    width: 100%;
    max-width: fit-content;
    margin: 4rem 0;
    text-align: center;
    font-size: 2em;
    font-style: italic;
    font-weight: 400;
  
    cite {
      display: block;
      font-weight: 300;
      text-align: end;
    }
  }
  
  article {
    width: calc(100% - 3rem);
    padding: 1rem;
    font: 400 1.5rem 'Lato';
    border: 2px solid var(--secondary-brand-color);
    background-color: var(--secondary-brand-color);
    border-radius: 2em;
  
    .aboutme-top {
      display: flex;
      gap: 7.5rem;
    }
  
    img {
      border-radius: 1.25em;
      width: 50%;
      object-fit: cover;
    }
  
    .contact-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      font-weight: 300;
  
      h4 {
        margin: 0 0 1em 0;
        color: var(--font-color);
        font-size: 1.75rem;
        font-weight: 600;
      }
  
      .opening-hours {
        width: 80%;
        display: flex;
        flex-direction: column;
        gap: 0.5em;
  
        dl {
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 1em;
          line-height: 1em;
        }
      }
  
      .address {
        margin-top: 3rem;
  
        b {
          font-weight: 400;
        }
      }
  
    }
  
    .aboutme-bottom {
      margin-top: 2rem;
  
      p {
        font-weight: 300;
        font-size: 1em;
      }
    }
  }
  </style>
  