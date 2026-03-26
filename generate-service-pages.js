const fs = require('fs');
const path = require('path');

const services = [
  {
    slug: 'haushaltsaufloesung',
    num: '01',
    icon: '🏠',
    title: 'Haushaltsauflösung',
    tagline: 'Komplett. Diskret. Termingerecht.',
    description: 'Wir übernehmen die vollständige Auflösung Ihrer Wohnung oder Ihres Hauses — professionell, mit größtem Respekt und zu einem fairen Festpreis.',
    intro: [
      'Eine Haushaltsauflösung ist oft mit besonderen Umständen verbunden: Umzug ins Pflegeheim, ein Todesfall in der Familie oder ein Neuanfang. Wir verstehen, dass es sich dabei nicht nur um Möbel und Gegenstände handelt, sondern um ein ganzes Lebensnachlass.',
      'Unser erfahrenes Team begleitet Sie durch den gesamten Prozess — von der kostenlosen Erstbesichtigung bis zur besenreinen Übergabe. Dabei gehen wir achtsam mit Ihrem Eigentum um und informieren Sie transparent über jeden Schritt.',
      'Verwertbare Gegenstände rechnen wir fair an und mindern so Ihre Gesamtkosten. Unser Ziel: maximale Entlastung für Sie in einer ohnehin belastenden Situation.',
    ],
    bullets: [
      'Kostenlose Erstbesichtigung & Festpreisangebot',
      'Komplette Entrümpelung aller Räume',
      'Fachgerechte Entsorgung & Verwertung',
      'Besenreine Übergabe garantiert',
      'Diskrete Durchführung, auch kurzfristig',
      'Anrechnung verwertbarer Gegenstände',
    ],
    process: [
      { step: '01', title: 'Besichtigung', desc: 'Kostenlose Vor-Ort-Besichtigung — wir verschaffen uns ein genaues Bild.' },
      { step: '02', title: 'Festpreisangebot', desc: 'Sie erhalten innerhalb von 24h ein verbindliches, transparentes Angebot.' },
      { step: '03', title: 'Terminvereinbarung', desc: 'Wir planen den Termin nach Ihren Wünschen — auch kurzfristig möglich.' },
      { step: '04', title: 'Durchführung', desc: 'Unser Team arbeitet sorgfältig, diskret und zügig.' },
      { step: '05', title: 'Übergabe', desc: 'Sie erhalten die Räume besenrein übergeben — bereit für den nächsten Schritt.' },
    ],
    metaDesc: 'Professionelle Haushaltsauflösung in Hannover und Umgebung. Kostenlose Besichtigung, faire Festpreise, besenreine Übergabe. wirlösenauf.de – Ihr vertrauensvoller Partner.',
  },
  {
    slug: 'entruempelung',
    num: '02',
    icon: '🗂️',
    title: 'Entrümpelung',
    tagline: 'Keller. Dachboden. Garage.',
    description: 'Ob vollgepackter Keller, überfüllter Dachboden oder Garage — wir räumen schnell, zuverlässig und kümmern uns um die fachgerechte Entsorgung.',
    intro: [
      'Im Laufe der Jahre sammelt sich vieles an: Kisten, alte Möbel, Elektrogeräte und Gegenstände, für die sich keine Verwendung mehr findet. Eine Entrümpelung schafft Platz und Ordnung — ohne dass Sie sich selbst darum kümmern müssen.',
      'Wir übernehmen alles: vom Abtransport bis zur ordnungsgemäßen, umweltgerechten Entsorgung. Verwertbare Materialien werden dem Recycling zugeführt, wertvolle Gegenstände fair aufgekauft.',
      'Dank unserer flexiblen Terminplanung sind wir auch kurzfristig für Sie einsetzbar. Rufen Sie uns einfach an — wir machen Ihnen ein unverbindliches Angebot.',
    ],
    bullets: [
      'Keller, Dachboden & Garagen',
      'Büros und Gewerberäume',
      'Ordnungsgemäße Entsorgung nach gesetzlichen Vorschriften',
      'Umweltgerechtes Recycling',
      'Kurzfristige Terminvergabe möglich',
      'Festpreisgarantie ohne versteckte Kosten',
    ],
    process: [
      { step: '01', title: 'Anfrage', desc: 'Kurze Beschreibung per Telefon oder Kontaktformular genügt.' },
      { step: '02', title: 'Angebot', desc: 'Wir erstellen ein verbindliches Festpreisangebot — auch ohne Vor-Ort-Termin.' },
      { step: '03', title: 'Termin', desc: 'Sie wählen Ihren Wunschtermin, wir erscheinen pünktlich.' },
      { step: '04', title: 'Räumung', desc: 'Unser Team räumt effizient und hinterlässt die Fläche besenrein.' },
      { step: '05', title: 'Entsorgung', desc: 'Alles wird fachgerecht entsorgt oder dem Recycling zugeführt.' },
    ],
    metaDesc: 'Entrümpelung in Hannover und Region — Keller, Dachboden, Garage, Gewerbe. Schnell, fair, umweltgerecht. Festpreis, kurzfristige Termine. wirlösenauf.de.',
  },
  {
    slug: 'moebeltransport',
    num: '03',
    icon: '🚛',
    title: 'Möbeltransport',
    tagline: 'Sicher. Versichert. Pünktlich.',
    description: 'Wir transportieren Ihre Möbel und Wertsachen sicher und versichert — egal ob innerhalb der Stadt oder in eine andere Region.',
    intro: [
      'Ob Einzelstück oder kompletter Haushalt — unser Transportteam geht mit größter Sorgfalt mit Ihren Möbeln um. Jedes Stück wird sachgerecht verpackt, gesichert und termingerecht ans Ziel gebracht.',
      'Wir verfügen über moderne Transportfahrzeuge verschiedener Größen sowie erfahrenes Personal, das auch mit schweren oder empfindlichen Möbeln umzugehen weiß. Antiquitäten, Klaviere, Gemälde — alles wird mit dem nötigen Fachwissen bewegt.',
      'Alle Transporte sind versichert. Sie müssen sich keine Sorgen machen — Ihr Eigentum ist bei uns in besten Händen.',
    ],
    bullets: [
      'Einzelstücke & komplette Haushalte',
      'Professionelle Verpackung inklusive',
      'Vollversicherter Transport',
      'Moderne Fahrzeugflotte in allen Größen',
      'Auch für Antiquitäten & Sonderstücke',
      'Pünktlich & zuverlässig',
    ],
    process: [
      { step: '01', title: 'Anfrage', desc: 'Teilen Sie uns mit, was transportiert werden soll und wohin.' },
      { step: '02', title: 'Angebot', desc: 'Festpreisangebot inkl. Verpackungsmaterial und Versicherung.' },
      { step: '03', title: 'Vorbereitung', desc: 'Unser Team verpackt alles fachgerecht vor dem Transport.' },
      { step: '04', title: 'Transport', desc: 'Pünktliche Abholung und Lieferung an die Zieladresse.' },
      { step: '05', title: 'Aufbau', desc: 'Auf Wunsch bauen wir Möbel auch am neuen Standort wieder auf.' },
    ],
    metaDesc: 'Möbeltransport in Hannover und Region — professionell, versichert, pünktlich. Einzelstücke oder kompletter Haushalt. wirlösenauf.de – Ihr Transportpartner.',
  },
  {
    slug: 'verwertung',
    num: '04',
    icon: '♻️',
    title: 'Verwertung & Ankauf',
    tagline: 'Wert erkennen. Kosten senken.',
    description: 'Wertvolle Gegenstände werden von uns fair bewertet und angekauft — das senkt oft Ihre Gesamtkosten bei der Haushaltsauflösung erheblich.',
    intro: [
      'Bei vielen Haushaltsauflösungen befinden sich unter den scheinbaren "Altlasten" noch wertvolle Gegenstände: Antiquitäten, Schmuck, Sammlerstücke, hochwertige Möbel oder Elektronik. Wir erkennen und bewerten diese fachkundig.',
      'Der ermittelte Wert wird direkt von unseren Kosten für die Auflösung abgezogen — ein transparenter, fairer Prozess, der für Sie finanziell spürbar ist. In manchen Fällen entstehen so gar keine Kosten mehr.',
      'Alles, was nicht verkäuflich ist, wird umweltgerecht dem Recycling zugeführt. Wir arbeiten nach dem Grundsatz: Was noch Wert hat, bekommt eine zweite Chance.',
    ],
    bullets: [
      'Fachkundige Bewertung vor Ort',
      'Antiquitäten, Möbel, Schmuck & Elektronik',
      'Direkter Abzug vom Auflösungspreis',
      'Transparenter, nachvollziehbarer Prozess',
      'Restmaterialien werden recycelt',
      'Auch Einzelankauf möglich',
    ],
    process: [
      { step: '01', title: 'Sichtung', desc: 'Unsere Experten sichten alle vorhandenen Gegenstände.' },
      { step: '02', title: 'Bewertung', desc: 'Fachkundige Einschätzung des Marktwerts aller verwertbaren Stücke.' },
      { step: '03', title: 'Angebot', desc: 'Sie erhalten eine transparente Auflistung — Ankaufswert vs. Auflösungskosten.' },
      { step: '04', title: 'Abzug', desc: 'Der Ankaufswert wird direkt von der Auflösungsrechnung abgezogen.' },
      { step: '05', title: 'Verwertung', desc: 'Wir kümmern uns um den Weiterverkauf oder das Recycling.' },
    ],
    metaDesc: 'Verwertung & Ankauf bei Haushaltsauflösungen in Hannover. Antiquitäten, Möbel, Schmuck fair bewerten lassen. Kosten senken durch Anrechnung. wirlösenauf.de.',
  },
  {
    slug: 'endreinigung',
    num: '05',
    icon: '🧹',
    title: 'Endreinigung',
    tagline: 'Sauber. Übergabebereit. Garantiert.',
    description: 'Nach der Auflösung hinterlassen wir Ihre Räume besenrein und ordentlich — direkt bereit für die Wohnungsübergabe an Vermieter oder Käufer.',
    intro: [
      'Eine ordentliche Übergabe ist entscheidend, damit Sie Ihre Kaution zurückerhalten oder ein reibungsloses Abnahmeprotokoll erstellen können. Unsere Endreinigung sorgt dafür, dass die Räume in einwandfreiem Zustand übergeben werden.',
      'Unser Reinigungsteam arbeitet systematisch und gründlich: Böden, Fenster, Küche und Sanitäranlagen werden gereinigt. Auf Wunsch bieten wir auch eine Tiefenreinigung an, die alle Flächen streifenfrei und makellos hinterlässt.',
      'Die Endreinigung ist standardmäßig Teil unserer Haushaltsauflösungspakete — oder kann separat als eigenständige Dienstleistung gebucht werden.',
    ],
    bullets: [
      'Besenreine Übergabe als Standard',
      'Optionale Tiefenreinigung verfügbar',
      'Böden, Fenster, Küche & Sanitär',
      'Dokumentierte Übergabe auf Wunsch',
      'Ideal für Kautionsrückgabe',
      'Auch als Einzelleistung buchbar',
    ],
    process: [
      { step: '01', title: 'Abstimmung', desc: 'Wir klären den gewünschten Reinigungsumfang mit Ihnen.' },
      { step: '02', title: 'Reinigung', desc: 'Systematische Reinigung aller Räume nach Standard oder Tiefenreinigung.' },
      { step: '03', title: 'Kontrolle', desc: 'Qualitätskontrolle durch unseren Objektleiter vor der Übergabe.' },
      { step: '04', title: 'Übergabe', desc: 'Übergabe an Sie — auf Wunsch mit Abnahmeprotokoll.' },
    ],
    metaDesc: 'Endreinigung nach Haushaltsauflösung in Hannover. Besenrein garantiert, Tiefenreinigung auf Wunsch. Ideal für Wohnungsübergabe. wirlösenauf.de.',
  },
  {
    slug: 'nachlassbearbeitung',
    num: '06',
    icon: '📋',
    title: 'Nachlassbearbeitung',
    tagline: 'Mit Respekt. Mit Einfühlungsvermögen.',
    description: 'Wir bearbeiten Nachlässe mit größtem Feingefühl und Respekt — und entlasten Angehörige in einer der schwersten Phasen ihres Lebens.',
    intro: [
      'Der Verlust eines geliebten Menschen ist schmerzhaft genug. Die Abwicklung seines Nachlasses sollte keine zusätzliche Last sein. Unser Team hat jahrelange Erfahrung in der respektvollen und einfühlsamen Bearbeitung von Nachlässen.',
      'Wir koordinieren alle notwendigen Schritte: Sichtung und Bewertung persönlicher Gegenstände, Abstimmung mit Erben und Angehörigen, Ankauf wertvoller Stücke sowie die vollständige Räumung und Entsorgung. Dabei wahren wir stets die Würde des Verstorbenen.',
      'Sprechen Sie uns an — vertraulich, diskret und ohne Druck. Wir sind für Sie da.',
    ],
    bullets: [
      'Einfühlsamer Umgang mit persönlichen Gegenständen',
      'Abstimmung direkt mit Erben oder Betreuern',
      'Sichtung, Bewertung & Ankauf wertvoller Stücke',
      'Vollständige Räumung auf Wunsch',
      'Diskrete, vertrauliche Abwicklung',
      'Kurzfristige Termine auch in dringenden Fällen',
    ],
    process: [
      { step: '01', title: 'Erstgespräch', desc: 'Einfühlsames Erstgespräch — persönlich, telefonisch oder vor Ort.' },
      { step: '02', title: 'Planung', desc: 'Gemeinsame Planung des Vorgehens im Einvernehmen mit allen Beteiligten.' },
      { step: '03', title: 'Sichtung', desc: 'Sorgfältige Sichtung aller Gegenstände — nichts wird übersehen.' },
      { step: '04', title: 'Durchführung', desc: 'Respektvolle Räumung und Verwertung nach Ihren Wünschen.' },
      { step: '05', title: 'Abschluss', desc: 'Besenreine Übergabe und transparente Abrechnung.' },
    ],
    metaDesc: 'Nachlassbearbeitung in Hannover mit Einfühlungsvermögen und Respekt. Vollständige Abwicklung für Angehörige. wirlösenauf.de – diskret und vertrauenswürdig.',
  },
];

function generatePage(svc) {
  const processHTML = svc.process.map(p => `
        <div class="proc-step">
          <div class="proc-num">${p.step}</div>
          <div>
            <div class="proc-title">${p.title}</div>
            <div class="proc-desc">${p.desc}</div>
          </div>
        </div>`).join('');

  const bulletsHTML = svc.bullets.map(b => `<li>${b}</li>`).join('\n            ');

  const otherServices = services.filter(s => s.slug !== svc.slug);
  const otherCardsHTML = otherServices.map((s, i) => `
          <a href="${s.slug}.html" class="other-card" style="transition-delay:${i * 0.06}s">
            <span class="other-icon">${s.icon}</span>
            <span class="other-title">${s.title}</span>
            <svg class="other-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>`).join('');

  return `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${svc.title} | wirlösenauf.de – Haushaltsauflösung Hannover</title>
  <meta name="description" content="${svc.metaDesc}" />
  <link rel="canonical" href="https://wirloesenauf.de/leistungen/${svc.slug}.html" />
  <script src="https://cdn.tailwindcss.com"><\/script>
  <style>
    :root {
      --green-deep:   #1B5E20;
      --green-main:   #2E7D32;
      --green-mid:    #388E3C;
      --green-light:  #4CAF50;
      --green-pale:   #C8E6C9;
      --green-bg:     #F1F8F1;
      --off-white:    #FAFEFA;
      --text-dark:    #111811;
      --text-mid:     #3a4a3a;
      --text-muted:   #6b7c6b;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif;
      font-size: 17px;
      line-height: 1.75;
      color: var(--text-dark);
      background: var(--off-white);
      overflow-x: hidden;
    }
    h1, h2, h3, h4 {
      font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif;
      line-height: 1.15;
    }

    /* NAV */
    nav {
      position: sticky; top: 0; z-index: 100;
      display: flex; align-items: center; justify-content: space-between;
      padding: 0 48px; height: 72px;
      background: rgba(250,254,250,0.9);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--green-pale);
    }
    .nav-logo img { height: 44px; width: auto; display: block; }
    .nav-links { display: flex; list-style: none; gap: 32px; }
    .nav-links a {
      font-size: 15px; font-weight: 600; color: var(--text-mid);
      text-decoration: none; transition: color 0.2s;
    }
    .nav-links a:hover { color: var(--green-main); }
    .nav-cta {
      display: inline-flex; align-items: center; gap: 8px;
      background: var(--green-main); color: #fff;
      font-size: 14px; font-weight: 700; padding: 10px 22px;
      border-radius: 50px; text-decoration: none;
      transition: background 0.2s, transform 0.2s;
    }
    .nav-cta:hover { background: var(--green-deep); transform: translateY(-1px); }

    /* HERO */
    .svc-hero {
      background: var(--green-deep);
      padding: 100px 48px 90px;
      position: relative;
      overflow: hidden;
    }
    .svc-hero::before {
      content: '';
      position: absolute; inset: 0;
      background:
        radial-gradient(ellipse at 80% 20%, rgba(76,175,80,0.25) 0%, transparent 55%),
        radial-gradient(ellipse at 10% 80%, rgba(27,94,32,0.4) 0%, transparent 50%);
      pointer-events: none;
    }
    .svc-hero-inner {
      max-width: 900px; margin: 0 auto;
      position: relative; z-index: 1;
    }
    .breadcrumb {
      display: flex; align-items: center; gap: 8px;
      font-size: 13px; color: rgba(255,255,255,0.55);
      margin-bottom: 28px;
    }
    .breadcrumb a { color: rgba(255,255,255,0.55); text-decoration: none; }
    .breadcrumb a:hover { color: rgba(255,255,255,0.9); }
    .breadcrumb-sep { color: rgba(255,255,255,0.3); }
    .svc-hero-num {
      font-size: 13px; font-weight: 800; letter-spacing: 0.15em;
      text-transform: uppercase; color: #81C784; margin-bottom: 20px;
    }
    .svc-hero h1 {
      font-size: clamp(36px, 5vw, 64px);
      font-weight: 900; color: #fff;
      letter-spacing: -0.03em;
      margin-bottom: 20px;
    }
    .svc-hero-tagline {
      font-size: 20px; color: rgba(255,255,255,0.7);
      font-weight: 600; letter-spacing: 0.01em;
    }

    /* CONTENT */
    .svc-content {
      max-width: 1100px; margin: 0 auto;
      padding: 90px 48px;
      display: grid;
      grid-template-columns: 1fr 380px;
      gap: 72px;
      align-items: start;
    }
    .svc-text h2 {
      font-size: 32px; font-weight: 900;
      letter-spacing: -0.025em; color: var(--text-dark);
      margin-bottom: 28px;
    }
    .svc-text p {
      font-size: 17px; color: var(--text-mid);
      line-height: 1.8; margin-bottom: 20px;
    }
    .svc-text p:last-child { margin-bottom: 0; }

    /* SIDEBAR */
    .svc-sidebar { position: sticky; top: 96px; }
    .svc-sidebar-card {
      background: var(--green-deep);
      border-radius: 24px; padding: 36px;
      color: #fff;
    }
    .svc-sidebar-card h3 {
      font-size: 20px; font-weight: 800; color: #fff;
      margin-bottom: 20px; letter-spacing: -0.02em;
    }
    .svc-bullets { list-style: none; margin-bottom: 32px; }
    .svc-bullets li {
      font-size: 15px; color: rgba(255,255,255,0.85);
      padding: 9px 0 9px 24px; position: relative;
      border-bottom: 1px solid rgba(255,255,255,0.08);
    }
    .svc-bullets li:last-child { border-bottom: none; }
    .svc-bullets li::before {
      content: '✓'; position: absolute; left: 0;
      color: #81C784; font-weight: 900;
    }
    .svc-cta-btn {
      display: flex; align-items: center; justify-content: center; gap: 10px;
      width: 100%; padding: 16px;
      background: #fff; color: var(--green-deep);
      font-size: 15px; font-weight: 800;
      border-radius: 14px; text-decoration: none;
      transition: background 0.2s, transform 0.2s;
    }
    .svc-cta-btn:hover { background: var(--green-pale); transform: translateY(-2px); }

    /* PROCESS */
    .svc-process {
      background: var(--green-bg);
      padding: 90px 48px;
    }
    .svc-process-inner { max-width: 900px; margin: 0 auto; }
    .svc-process h2 {
      font-size: 34px; font-weight: 900;
      letter-spacing: -0.025em; margin-bottom: 48px;
      color: var(--text-dark);
    }
    .proc-step {
      display: flex; gap: 24px; align-items: flex-start;
      padding: 24px 0;
      border-bottom: 1px solid var(--green-pale);
    }
    .proc-step:last-child { border-bottom: none; }
    .proc-num {
      width: 44px; height: 44px;
      background: var(--green-main); color: #fff;
      border-radius: 12px;
      display: flex; align-items: center; justify-content: center;
      font-size: 13px; font-weight: 800; letter-spacing: 0.05em;
      flex-shrink: 0;
    }
    .proc-title {
      font-size: 17px; font-weight: 800;
      color: var(--text-dark); margin-bottom: 4px;
    }
    .proc-desc { font-size: 15px; color: var(--text-mid); line-height: 1.65; }

    /* OTHER SERVICES */
    .svc-others {
      padding: 90px 48px;
      max-width: 1100px; margin: 0 auto;
    }
    .svc-others h2 {
      font-size: 28px; font-weight: 900;
      letter-spacing: -0.025em; margin-bottom: 32px;
      color: var(--text-dark);
    }
    .other-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 14px;
    }
    .other-card {
      display: flex; flex-direction: column; gap: 10px;
      background: #fff; border: 1.5px solid var(--green-pale);
      border-radius: 18px; padding: 22px 20px;
      text-decoration: none; color: var(--text-dark);
      transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease, border-color 0.3s;
    }
    .other-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 12px 36px rgba(46,125,50,0.13);
      border-color: var(--green-light);
    }
    .other-icon { font-size: 26px; }
    .other-title { font-size: 14px; font-weight: 800; color: var(--text-dark); line-height: 1.3; flex: 1; }
    .other-arrow { color: var(--green-main); margin-top: auto; }

    /* CTA SECTION */
    .svc-cta-section {
      background: var(--green-deep);
      padding: 90px 48px;
      text-align: center;
    }
    .svc-cta-section h2 {
      font-size: clamp(28px,4vw,44px);
      font-weight: 900; color: #fff;
      letter-spacing: -0.025em; margin-bottom: 16px;
    }
    .svc-cta-section p {
      font-size: 18px; color: rgba(255,255,255,0.7); margin-bottom: 40px;
    }
    .cta-btns { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
    .cta-btn-primary {
      display: inline-flex; align-items: center; gap: 10px;
      background: #fff; color: var(--green-deep);
      font-size: 16px; font-weight: 800;
      padding: 18px 36px; border-radius: 50px;
      text-decoration: none;
      transition: background 0.2s, transform 0.2s;
    }
    .cta-btn-primary:hover { background: var(--green-pale); transform: translateY(-2px); }
    .cta-btn-sec {
      display: inline-flex; align-items: center; gap: 10px;
      background: transparent; color: rgba(255,255,255,0.85);
      font-size: 16px; font-weight: 700;
      padding: 18px 36px; border-radius: 50px;
      border: 2px solid rgba(255,255,255,0.25);
      text-decoration: none;
      transition: border-color 0.2s, color 0.2s, transform 0.2s;
    }
    .cta-btn-sec:hover { border-color: rgba(255,255,255,0.6); color: #fff; transform: translateY(-2px); }

    /* FOOTER */
    footer {
      background: #0D1F0E;
      padding: 48px;
    }
    .footer-inner {
      max-width: 1100px; margin: 0 auto;
      display: flex; justify-content: space-between; align-items: center;
      flex-wrap: wrap; gap: 24px;
    }
    .footer-copy { font-size: 14px; color: rgba(255,255,255,0.4); }
    .footer-links { display: flex; gap: 24px; }
    .footer-links a { font-size: 14px; color: rgba(255,255,255,0.4); text-decoration: none; }
    .footer-links a:hover { color: rgba(255,255,255,0.75); }

    @media (max-width: 1024px) {
      .svc-content { grid-template-columns: 1fr; }
      .svc-sidebar { position: static; }
      .other-grid { grid-template-columns: repeat(3, 1fr); }
    }
    @media (max-width: 768px) {
      nav { padding: 0 24px; }
      .nav-links { display: none; }
      .svc-hero, .svc-content, .svc-process, .svc-others, .svc-cta-section, footer { padding-left: 24px; padding-right: 24px; }
      .other-grid { grid-template-columns: repeat(2, 1fr); }
      .cta-btns { flex-direction: column; align-items: center; }
    }
  </style>
</head>
<body>

  <nav>
    <a href="../index.html" class="nav-logo">
      <img src="../brand_assets/Logo/logo.png" alt="wirlösenauf.de" />
    </a>
    <ul class="nav-links">
      <li><a href="../index.html#leistungen">Leistungen</a></li>
      <li><a href="../index.html#ablauf">Ablauf</a></li>
      <li><a href="../index.html#vorteile">Vorteile</a></li>
      <li><a href="../index.html#bewertungen">Bewertungen</a></li>
    </ul>
    <a href="tel:+491726030946" class="nav-cta">📞 Kostenlos anrufen</a>
  </nav>

  <section class="svc-hero">
    <div class="svc-hero-inner">
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <a href="../index.html">Startseite</a>
        <span class="breadcrumb-sep">›</span>
        <a href="../index.html#leistungen">Leistungen</a>
        <span class="breadcrumb-sep">›</span>
        <span>${svc.title}</span>
      </nav>
      <div class="svc-hero-num">Leistung ${svc.num}</div>
      <h1>${svc.title}</h1>
      <p class="svc-hero-tagline">${svc.tagline}</p>
    </div>
  </section>

  <div class="svc-content">
    <div class="svc-text">
      <h2>${svc.description}</h2>
      ${svc.intro.map(p => `<p>${p}</p>`).join('\n      ')}
    </div>
    <div class="svc-sidebar">
      <div class="svc-sidebar-card">
        <h3>Das ist enthalten</h3>
        <ul class="svc-bullets">
          ${bulletsHTML}
        </ul>
        <a href="tel:+491726030946" class="svc-cta-btn">
          📞 Jetzt kostenlos anfragen
        </a>
      </div>
    </div>
  </div>

  <section class="svc-process">
    <div class="svc-process-inner">
      <h2>So läuft es ab</h2>
      ${processHTML}
    </div>
  </section>

  <section class="svc-others">
    <h2>Weitere Leistungen</h2>
    <div class="other-grid">
      ${otherCardsHTML}
    </div>
  </section>

  <section class="svc-cta-section">
    <h2>Bereit für Ihre Anfrage?</h2>
    <p>Kostenlose Besichtigung · Unverbindliches Angebot · Faire Festpreise</p>
    <div class="cta-btns">
      <a href="tel:+491726030946" class="cta-btn-primary">📞 Jetzt anrufen</a>
      <a href="../index.html" class="cta-btn-sec">Zurück zur Startseite</a>
    </div>
  </section>

  <footer>
    <div class="footer-inner">
      <span class="footer-copy">© 2025 wirlösenauf.de. Alle Rechte vorbehalten.</span>
      <div class="footer-links">
        <a href="#">Impressum</a>
        <a href="#">Datenschutz</a>
        <a href="#">AGB</a>
      </div>
    </div>
  </footer>

</body>
</html>`;
}

// Generate all pages
const outDir = path.join(__dirname, 'leistungen');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

services.forEach(svc => {
  const filePath = path.join(outDir, `${svc.slug}.html`);
  fs.writeFileSync(filePath, generatePage(svc), 'utf8');
  console.log(`  ✓ leistungen/${svc.slug}.html`);
});
console.log(`\nDone — ${services.length} service pages generated.`);
