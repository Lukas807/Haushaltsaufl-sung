const fs = require('fs');
const path = require('path');

const cities = [
  // ── Region Hannover ──────────────────────────────────────────
  { slug: 'hannover',              name: 'Hannover',                region: 'Region Hannover',           pop: '522.000', nearby: ['Langenhagen','Garbsen','Laatzen','Hemmingen','Lehrte'] },
  { slug: 'langenhagen',           name: 'Langenhagen',             region: 'Region Hannover',           pop: '54.000',  nearby: ['Hannover','Garbsen','Wedemark','Isernhagen','Burgwedel'] },
  { slug: 'garbsen',               name: 'Garbsen',                 region: 'Region Hannover',           pop: '59.000',  nearby: ['Hannover','Seelze','Wunstorf','Ronnenberg','Gehrden'] },
  { slug: 'neustadt-am-ruebenberge', name: 'Neustadt am Rübenberge', region: 'Region Hannover',          pop: '44.000',  nearby: ['Wunstorf','Garbsen','Seelze','Nienburg','Wennigsen'] },
  { slug: 'lehrte',                name: 'Lehrte',                  region: 'Region Hannover',           pop: '44.000',  nearby: ['Hannover','Sehnde','Peine','Burgdorf','Uetze'] },
  { slug: 'laatzen',               name: 'Laatzen',                 region: 'Region Hannover',           pop: '41.000',  nearby: ['Hannover','Hemmingen','Sarstedt','Pattensen','Ronnenberg'] },
  { slug: 'wunstorf',              name: 'Wunstorf',                region: 'Region Hannover',           pop: '41.000',  nearby: ['Garbsen','Neustadt am Rübenberge','Seelze','Nienburg','Stadthagen'] },
  { slug: 'barsinghausen',         name: 'Barsinghausen',           region: 'Region Hannover',           pop: '33.000',  nearby: ['Gehrden','Springe','Wennigsen','Bad Münder','Ronnenberg'] },
  { slug: 'seelze',                name: 'Seelze',                  region: 'Region Hannover',           pop: '34.000',  nearby: ['Hannover','Garbsen','Wunstorf','Neustadt am Rübenberge','Gehrden'] },
  { slug: 'burgdorf',              name: 'Burgdorf',                region: 'Region Hannover',           pop: '31.000',  nearby: ['Lehrte','Uetze','Isernhagen','Celle','Wedemark'] },
  { slug: 'ronnenberg',            name: 'Ronnenberg',              region: 'Region Hannover',           pop: '23.000',  nearby: ['Hannover','Garbsen','Hemmingen','Gehrden','Barsinghausen'] },
  { slug: 'sehnde',                name: 'Sehnde',                  region: 'Region Hannover',           pop: '23.000',  nearby: ['Lehrte','Hannover','Peine','Hildesheim','Uetze'] },
  { slug: 'isernhagen',            name: 'Isernhagen',              region: 'Region Hannover',           pop: '24.000',  nearby: ['Hannover','Langenhagen','Burgdorf','Wedemark','Burgwedel'] },
  { slug: 'wedemark',              name: 'Wedemark',                region: 'Region Hannover',           pop: '29.000',  nearby: ['Langenhagen','Burgwedel','Isernhagen','Celle','Neustadt am Rübenberge'] },
  { slug: 'springe',               name: 'Springe',                 region: 'Region Hannover',           pop: '28.000',  nearby: ['Barsinghausen','Gehrden','Bad Münder','Wennigsen','Hameln'] },
  { slug: 'gehrden',               name: 'Gehrden',                 region: 'Region Hannover',           pop: '15.000',  nearby: ['Ronnenberg','Barsinghausen','Springe','Wennigsen','Hannover'] },
  { slug: 'hemmingen',             name: 'Hemmingen',               region: 'Region Hannover',           pop: '18.000',  nearby: ['Hannover','Laatzen','Pattensen','Ronnenberg','Sarstedt'] },
  { slug: 'burgwedel',             name: 'Burgwedel',               region: 'Region Hannover',           pop: '20.000',  nearby: ['Isernhagen','Wedemark','Langenhagen','Lehrte','Celle'] },
  { slug: 'pattensen',             name: 'Pattensen',               region: 'Region Hannover',           pop: '14.000',  nearby: ['Hemmingen','Laatzen','Sarstedt','Springe','Hannover'] },
  { slug: 'uetze',                 name: 'Uetze',                   region: 'Region Hannover',           pop: '20.000',  nearby: ['Lehrte','Burgdorf','Peine','Celle','Sehnde'] },
  { slug: 'wennigsen',             name: 'Wennigsen (Deister)',     region: 'Region Hannover',           pop: '14.000',  nearby: ['Barsinghausen','Gehrden','Springe','Hannover','Ronnenberg'] },

  // ── Landkreis Hildesheim ─────────────────────────────────────
  { slug: 'hildesheim',            name: 'Hildesheim',              region: 'Landkreis Hildesheim',      pop: '98.000',  nearby: ['Sarstedt','Nordstemmen','Harsum','Giesen','Hannover'] },
  { slug: 'sarstedt',              name: 'Sarstedt',                region: 'Landkreis Hildesheim',      pop: '19.000',  nearby: ['Hildesheim','Pattensen','Nordstemmen','Giesen','Hannover'] },
  { slug: 'alfeld',                name: 'Alfeld (Leine)',          region: 'Landkreis Hildesheim',      pop: '17.000',  nearby: ['Gronau','Freden','Hildesheim','Einbeck','Hameln'] },
  { slug: 'bad-salzdetfurth',      name: 'Bad Salzdetfurth',        region: 'Landkreis Hildesheim',      pop: '13.000',  nearby: ['Hildesheim','Bockenem','Groß Düngen','Hannover','Hameln'] },
  { slug: 'nordstemmen',           name: 'Nordstemmen',             region: 'Landkreis Hildesheim',      pop: '11.000',  nearby: ['Sarstedt','Pattensen','Hildesheim','Springe','Elze'] },
  { slug: 'harsum',                name: 'Harsum',                  region: 'Landkreis Hildesheim',      pop: '10.000',  nearby: ['Hildesheim','Sarstedt','Algermissen','Peine','Giesen'] },
  { slug: 'gronau-leine',          name: 'Gronau (Leine)',          region: 'Landkreis Hildesheim',      pop: '10.000',  nearby: ['Alfeld','Elze','Hildesheim','Hameln','Springe'] },
  { slug: 'bockenem',              name: 'Bockenem',                region: 'Landkreis Hildesheim',      pop: '9.400',   nearby: ['Bad Salzdetfurth','Hildesheim','Wolfenbüttel','Salzgitter','Lamspringe'] },
  { slug: 'giesen',                name: 'Giesen',                  region: 'Landkreis Hildesheim',      pop: '9.300',   nearby: ['Hildesheim','Sarstedt','Diekholzen','Söhlde','Schellerten'] },
  { slug: 'algermissen',           name: 'Algermissen',             region: 'Landkreis Hildesheim',      pop: '7.600',   nearby: ['Hildesheim','Harsum','Peine','Hohenhameln','Sarstedt'] },

  // ── Landkreis Hameln-Pyrmont ─────────────────────────────────
  { slug: 'hameln',                name: 'Hameln',                  region: 'Landkreis Hameln-Pyrmont',  pop: '58.000',  nearby: ['Bad Münder','Coppenbrügge','Hessisch Oldendorf','Springe','Hildesheim'] },
  { slug: 'hessisch-oldendorf',    name: 'Hessisch Oldendorf',      region: 'Landkreis Hameln-Pyrmont',  pop: '18.000',  nearby: ['Hameln','Rinteln','Aerzen','Emmerthal','Bad Pyrmont'] },
  { slug: 'bad-pyrmont',           name: 'Bad Pyrmont',             region: 'Landkreis Hameln-Pyrmont',  pop: '19.000',  nearby: ['Hameln','Salzhemmendorf','Bad Münder','Rinteln','Detmold'] },
  { slug: 'bad-muender',           name: 'Bad Münder am Deister',   region: 'Landkreis Hameln-Pyrmont',  pop: '17.000',  nearby: ['Hameln','Springe','Barsinghausen','Bad Nenndorf','Coppenbrügge'] },
  { slug: 'aerzen',                name: 'Aerzen',                  region: 'Landkreis Hameln-Pyrmont',  pop: '10.000',  nearby: ['Hameln','Emmerthal','Hessisch Oldendorf','Bad Pyrmont','Rinteln'] },
  { slug: 'emmerthal',             name: 'Emmerthal',               region: 'Landkreis Hameln-Pyrmont',  pop: '9.800',   nearby: ['Hameln','Aerzen','Gronau','Coppenbrügge','Hessisch Oldendorf'] },
  { slug: 'salzhemmendorf',        name: 'Salzhemmendorf',          region: 'Landkreis Hameln-Pyrmont',  pop: '9.200',   nearby: ['Hameln','Bad Pyrmont','Alfeld','Bockenem','Coppenbrügge'] },
  { slug: 'coppenbruegge',         name: 'Coppenbrügge',            region: 'Landkreis Hameln-Pyrmont',  pop: '6.900',   nearby: ['Hameln','Bad Münder','Salzhemmendorf','Bad Pyrmont','Springe'] },

  // ── Landkreis Schaumburg ─────────────────────────────────────
  { slug: 'stadthagen',            name: 'Stadthagen',              region: 'Landkreis Schaumburg',      pop: '22.000',  nearby: ['Bückeburg','Bad Nenndorf','Obernkirchen','Wunstorf','Hannover'] },
  { slug: 'rinteln',               name: 'Rinteln',                 region: 'Landkreis Schaumburg',      pop: '25.000',  nearby: ['Hessisch Oldendorf','Bückeburg','Hameln','Stadthagen','Bad Oeynhausen'] },
  { slug: 'bueckeburg',            name: 'Bückeburg',               region: 'Landkreis Schaumburg',      pop: '19.000',  nearby: ['Stadthagen','Rinteln','Bad Nenndorf','Obernkirchen','Minden'] },
  { slug: 'bad-nenndorf',          name: 'Bad Nenndorf',            region: 'Landkreis Schaumburg',      pop: '11.000',  nearby: ['Stadthagen','Hannover','Wunstorf','Rodenberg','Bad Münder'] },
  { slug: 'obernkirchen',          name: 'Obernkirchen',            region: 'Landkreis Schaumburg',      pop: '8.900',   nearby: ['Stadthagen','Bückeburg','Nienstädt','Bad Nenndorf','Rinteln'] },
  { slug: 'rodenberg',             name: 'Rodenberg',               region: 'Landkreis Schaumburg',      pop: '6.200',   nearby: ['Bad Nenndorf','Stadthagen','Wunstorf','Gehrden','Barsinghausen'] },

  // ── Landkreis Peine ──────────────────────────────────────────
  { slug: 'peine',                 name: 'Peine',                   region: 'Landkreis Peine',           pop: '50.000',  nearby: ['Ilsede','Wendeburg','Lehrte','Sehnde','Braunschweig'] },
  { slug: 'ilsede',                name: 'Ilsede',                  region: 'Landkreis Peine',           pop: '21.000',  nearby: ['Peine','Hohenhameln','Lengede','Sehnde','Salzgitter'] },
  { slug: 'vechelde',              name: 'Vechelde',                region: 'Landkreis Peine',           pop: '18.000',  nearby: ['Peine','Braunschweig','Wendeburg','Cremlingen','Wolfenbüttel'] },
  { slug: 'lengede',               name: 'Lengede',                 region: 'Landkreis Peine',           pop: '14.000',  nearby: ['Peine','Ilsede','Salzgitter','Wolfenbüttel','Hohenhameln'] },
  { slug: 'edemissen',             name: 'Edemissen',               region: 'Landkreis Peine',           pop: '12.000',  nearby: ['Peine','Uetze','Lehrte','Burgdorf','Celle'] },
  { slug: 'wendeburg',             name: 'Wendeburg',               region: 'Landkreis Peine',           pop: '10.000',  nearby: ['Peine','Vechelde','Braunschweig','Lehrte','Cremlingen'] },
  { slug: 'hohenhameln',           name: 'Hohenhameln',             region: 'Landkreis Peine',           pop: '9.300',   nearby: ['Peine','Ilsede','Hildesheim','Algermissen','Harsum'] },

  // ── Landkreis Celle ──────────────────────────────────────────
  { slug: 'celle',                 name: 'Celle',                   region: 'Landkreis Celle',           pop: '66.000',  nearby: ['Burgdorf','Lehrte','Wathlingen','Hambühren','Uetze'] },
  { slug: 'bergen',                name: 'Bergen',                  region: 'Landkreis Celle',           pop: '13.000',  nearby: ['Celle','Winsen','Faßberg','Lachendorf','Eschede'] },
  { slug: 'hambühren',             name: 'Hambühren',               region: 'Landkreis Celle',           pop: '10.000',  nearby: ['Celle','Lehrte','Wathlingen','Burgdorf','Edemissen'] },
  { slug: 'wathlingen',            name: 'Wathlingen',              region: 'Landkreis Celle',           pop: '6.400',   nearby: ['Celle','Burgdorf','Lehrte','Edemissen','Hambühren'] },
  { slug: 'wietze',                name: 'Wietze',                  region: 'Landkreis Celle',           pop: '7.300',   nearby: ['Celle','Nienhagen','Winsen','Bergen','Wedemark'] },

  // ── Landkreis Nienburg ───────────────────────────────────────
  { slug: 'nienburg',              name: 'Nienburg (Weser)',        region: 'Landkreis Nienburg',        pop: '32.000',  nearby: ['Rehburg-Loccum','Stolzenau','Wunstorf','Neustadt am Rübenberge','Hannover'] },
  { slug: 'rehburg-loccum',        name: 'Rehburg-Loccum',          region: 'Landkreis Nienburg',        pop: '9.900',   nearby: ['Nienburg','Wunstorf','Neustadt am Rübenberge','Stolzenau','Hannover'] },
  { slug: 'stolzenau',             name: 'Stolzenau',               region: 'Landkreis Nienburg',        pop: '7.000',   nearby: ['Nienburg','Rinteln','Rehburg-Loccum','Hoya','Wunstorf'] },
  { slug: 'hoya',                  name: 'Hoya',                    region: 'Landkreis Nienburg',        pop: '3.800',   nearby: ['Nienburg','Stolzenau','Eystrup','Sulingen','Bremen'] },

  // ── Landkreis Wolfenbüttel ───────────────────────────────────
  { slug: 'wolfenbuettel',         name: 'Wolfenbüttel',            region: 'Landkreis Wolfenbüttel',    pop: '52.000',  nearby: ['Braunschweig','Salzgitter','Peine','Bockenem','Cremlingen'] },
  { slug: 'cremlingen',            name: 'Cremlingen',              region: 'Landkreis Wolfenbüttel',    pop: '12.000',  nearby: ['Wolfenbüttel','Braunschweig','Peine','Vechelde','Wendeburg'] },
];

const outputDir = path.join(__dirname, 'staedte');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

function generatePage(city) {
  const nearbyLinks = city.nearby.map(n => {
    const found = cities.find(c => c.name === n || c.name.startsWith(n));
    if (found) return `<a href="${found.slug}.html">${found.name}</a>`;
    return `<span>${n}</span>`;
  }).join(' · ');

  const allCitiesLinks = cities.map(c =>
    `<a href="${c.slug}.html" ${c.slug === city.slug ? 'class="active-city"' : ''}>${c.name}</a>`
  ).join('\n        ');

  return `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Entrümpelung ${city.name} | wirlösenauf.de – Haushaltsauflösung</title>
  <meta name="description" content="Professionelle Entrümpelung &amp; Haushaltsauflösung in ${city.name} (${city.region}). ✓ Kostenlose Besichtigung ✓ Faire Festpreise ✓ Schnelle Termine. Jetzt kostenloses Angebot anfordern!" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://wirloesenauf.de/staedte/${city.slug}.html" />
  <meta property="og:title" content="Entrümpelung ${city.name} | wirlösenauf.de" />
  <meta property="og:description" content="Professionelle Entrümpelung &amp; Haushaltsauflösung in ${city.name}. Faire Preise, schnelle Termine, besenreine Übergabe." />
  <meta property="og:type" content="website" />
  <script src="https://cdn.tailwindcss.com"></script>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "wirlösenauf.de",
    "description": "Professionelle Entrümpelung und Haushaltsauflösung in ${city.name} und Umgebung",
    "url": "https://wirloesenauf.de",
    "telephone": "+491726030946",
    "areaServed": "${city.name}",
    "serviceType": ["Entrümpelung", "Haushaltsauflösung", "Kellerentrümpelung", "Dachbodenräumung"],
    "priceRange": "€€",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Niedersachsen",
      "addressCountry": "DE"
    }
  }
  </script>
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
    body { font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif; font-size: 17px; line-height: 1.75; color: var(--text-dark); background: var(--off-white); overflow-x: hidden; }
    h1, h2, h3, h4 { font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif; line-height: 1.15; color: var(--text-dark); }

    /* NAV */
    nav {
      position: sticky; top: 0; z-index: 100;
      background: rgba(255,255,255,0.96); backdrop-filter: blur(12px);
      border-bottom: 2px solid var(--green-pale);
      display: flex; align-items: center; justify-content: space-between;
      padding: 0 48px; height: 72px;
      box-shadow: 0 2px 24px rgba(30,94,32,0.08);
    }
    nav a.nav-home { text-decoration: none; }
    nav a.nav-home img { height: 44px; width: auto; display: block; }
    .nav-cta {
      background: var(--green-main); color: #fff;
      padding: 11px 26px; border-radius: 50px;
      font-size: 16px; font-weight: 700; text-decoration: none;
      transition: background 0.2s ease, transform 0.15s ease;
      box-shadow: 0 4px 16px rgba(46,125,50,0.35);
    }
    .nav-cta:hover { background: var(--green-deep); transform: translateY(-2px); }
    .breadcrumb {
      font-size: 14px; color: var(--text-muted); padding: 12px 48px;
      border-bottom: 1px solid var(--green-pale); background: #fff;
    }
    .breadcrumb a { color: var(--green-main); text-decoration: none; }
    .breadcrumb a:hover { text-decoration: underline; }

    /* HERO */
    .city-hero {
      background: radial-gradient(ellipse at 70% 40%, #2d6a31 0%, #1B5E20 40%, #0d3b12 100%);
      padding: 80px 48px;
      position: relative; overflow: hidden;
    }
    .city-hero::before {
      content: ''; position: absolute; inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E");
      opacity: 0.04; pointer-events: none;
    }
    .city-hero-inner {
      max-width: 1100px; margin: 0 auto;
      display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center;
      position: relative; z-index: 2;
    }
    .city-badge {
      display: inline-flex; align-items: center; gap: 8px;
      background: rgba(76,175,80,0.2); border: 1px solid rgba(76,175,80,0.4);
      color: #A5D6A7; padding: 7px 18px; border-radius: 50px;
      font-size: 13px; font-weight: 700; letter-spacing: 0.06em;
      text-transform: uppercase; margin-bottom: 20px;
    }
    .city-badge-dot { width: 7px; height: 7px; background: var(--green-light); border-radius: 50%; animation: pulse 2s ease-in-out infinite; }
    @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.7)} }
    .city-hero h1 { font-size: clamp(36px, 4.5vw, 62px); font-weight: 900; color: #fff; letter-spacing: -0.03em; margin-bottom: 20px; }
    .city-hero h1 .accent { color: var(--green-light); }
    .city-hero-sub { font-size: 18px; color: rgba(255,255,255,0.82); line-height: 1.7; margin-bottom: 36px; max-width: 500px; }
    .btn-primary {
      display: inline-flex; align-items: center; gap: 8px;
      background: var(--green-light); color: #fff;
      font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif; font-size: 17px; font-weight: 800;
      padding: 16px 36px; border-radius: 50px; text-decoration: none; border: none; cursor: pointer;
      transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
      box-shadow: 0 6px 28px rgba(76,175,80,0.45);
    }
    .btn-primary:hover { background: var(--green-main); transform: translateY(-3px); }
    .btn-primary:active { transform: translateY(0); }

    /* CALCULATOR (same as main) */
    .calc-card {
      background: rgba(255,255,255,0.07); backdrop-filter: blur(20px);
      border: 1px solid rgba(255,255,255,0.14); border-radius: 24px;
      padding: 28px 24px; box-shadow: 0 24px 64px rgba(0,0,0,0.35);
    }
    .calc-title { font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif; font-size: 19px; font-weight: 700; color: #fff; margin-bottom: 4px; }
    .calc-subtitle { font-size: 13px; color: rgba(255,255,255,0.55); margin-bottom: 20px; font-weight: 600; }
    .calc-step { margin-bottom: 18px; }
    .calc-step-label { font-size: 11px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; color: #A5D6A7; margin-bottom: 9px; display: flex; align-items: center; gap: 6px; }
    .calc-step-num { width: 17px; height: 17px; background: rgba(76,175,80,0.25); border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 900; color: var(--green-light); }
    .calc-type-grid { display: flex; flex-wrap: wrap; gap: 6px; }
    .calc-type-btn {
      background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.14);
      color: rgba(255,255,255,0.75); font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif;
      font-size: 12px; font-weight: 700; padding: 6px 12px; border-radius: 50px;
      cursor: pointer; transition: background 0.2s, border-color 0.2s, color 0.2s, transform 0.15s; outline: none;
    }
    .calc-type-btn:hover, .calc-type-btn.active { background: var(--green-light); border-color: var(--green-light); color: #fff; }
    .calc-fill-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 6px; }
    .calc-fill-btn {
      background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.14);
      color: rgba(255,255,255,0.75); font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif;
      font-size: 11px; font-weight: 700; padding: 9px 4px; border-radius: 10px;
      cursor: pointer; text-align: center; transition: background 0.2s, border-color 0.2s, transform 0.15s; outline: none;
    }
    .calc-fill-btn:hover, .calc-fill-btn.active { background: rgba(76,175,80,0.22); border-color: var(--green-light); color: #fff; }
    .fill-bars { display: flex; gap: 2px; justify-content: center; margin-bottom: 5px; }
    .fill-bar-seg { width: 6px; height: 12px; border-radius: 2px; background: rgba(255,255,255,0.18); }
    .fill-bar-seg.on { background: var(--green-light); }
    .calc-floor-wrap { position: relative; }
    .calc-floor-select {
      width: 100%; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.18);
      color: rgba(255,255,255,0.85); font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif;
      font-size: 14px; font-weight: 600; padding: 10px 36px 10px 14px; border-radius: 10px;
      cursor: pointer; appearance: none; outline: none; transition: border-color 0.2s;
    }
    .calc-floor-select:focus { border-color: var(--green-light); }
    .calc-floor-select option { background: #1a4d1e; color: #fff; }
    .calc-floor-arrow { position: absolute; right: 12px; top: 50%; transform: translateY(-50%); pointer-events: none; color: rgba(255,255,255,0.5); }
    .calc-price-box {
      margin-top: 16px; background: linear-gradient(135deg,rgba(76,175,80,0.18),rgba(46,125,50,0.12));
      border: 1px solid rgba(76,175,80,0.35); border-radius: 14px; padding: 16px 18px;
    }
    .calc-price-label { font-size: 11px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.55); }
    .calc-price-amount { font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif; font-size: 28px; font-weight: 900; color: #fff; line-height: 1; transition: opacity 0.3s, transform 0.3s; }
    .calc-price-amount.updating { opacity: 0; transform: translateY(5px); }
    .calc-price-note { font-size: 11px; color: rgba(255,255,255,0.4); margin-top: 2px; }
    .calc-price-accent { color: var(--green-light); }
    .calc-cta-btn {
      display: block; width: 100%; margin-top: 12px;
      background: var(--green-light); color: #fff;
      font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif; font-size: 15px; font-weight: 800;
      padding: 13px; border-radius: 50px; border: none; cursor: pointer;
      text-align: center; text-decoration: none;
      transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
      box-shadow: 0 6px 24px rgba(76,175,80,0.4);
    }
    .calc-cta-btn:hover { background: var(--green-deep); transform: translateY(-2px); }

    /* TRUST BAR */
    .trust-bar { background: var(--green-main); padding: 20px 48px; display: flex; justify-content: center; gap: 48px; flex-wrap: wrap; }
    .trust-item { display: flex; align-items: center; gap: 10px; color: #fff; font-size: 15px; font-weight: 700; }
    .trust-icon { width: 32px; height: 32px; background: rgba(255,255,255,0.15); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; }

    /* CONTENT */
    .content-section { max-width: 1100px; margin: 0 auto; padding: 80px 48px; }
    .section-label { font-size: 12px; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase; color: var(--green-main); margin-bottom: 12px; }
    .content-section h2 { font-size: clamp(28px,3.5vw,44px); font-weight: 900; letter-spacing: -0.02em; margin-bottom: 20px; }
    .content-section p { font-size: 17px; color: var(--text-mid); line-height: 1.8; margin-bottom: 18px; }

    .services-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; margin-top: 40px; }
    .service-card {
      background: #fff; border-radius: 16px; padding: 28px 24px;
      border: 2px solid var(--green-pale);
      transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
    }
    .service-card:hover { transform: translateY(-6px); box-shadow: 0 12px 32px rgba(46,125,50,0.1); border-color: var(--green-light); }
    .service-icon { font-size: 28px; margin-bottom: 14px; }
    .service-card h3 { font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif; font-size: 18px; font-weight: 800; margin-bottom: 8px; }
    .service-card p { font-size: 15px; color: var(--text-muted); line-height: 1.6; margin: 0; }

    /* BENEFITS */
    .benefits-section { background: var(--green-bg); padding: 80px 48px; }
    .benefits-inner { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
    .benefit-list { list-style: none; display: flex; flex-direction: column; gap: 14px; margin-top: 28px; }
    .benefit-item { display: flex; align-items: flex-start; gap: 14px; }
    .benefit-check { width: 26px; height: 26px; background: var(--green-main); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px; }
    .benefit-check svg { width: 14px; height: 14px; }
    .benefit-text { font-size: 16px; color: var(--text-mid); line-height: 1.6; }
    .benefit-text strong { color: var(--text-dark); }

    /* NEARBY CITIES */
    .nearby-section { max-width: 1100px; margin: 0 auto; padding: 64px 48px; }
    .nearby-grid { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 24px; }
    .nearby-link {
      background: #fff; border: 2px solid var(--green-pale); color: var(--green-deep);
      padding: 9px 18px; border-radius: 50px; font-size: 14px; font-weight: 700;
      text-decoration: none; transition: background 0.2s, border-color 0.2s, transform 0.15s;
    }
    .nearby-link:hover { background: var(--green-main); border-color: var(--green-main); color: #fff; transform: translateY(-2px); }

    /* ALL CITIES */
    .all-cities-section { background: var(--green-bg); padding: 64px 48px; }
    .all-cities-inner { max-width: 1100px; margin: 0 auto; }
    .cities-grid { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 24px; }
    .cities-grid a {
      background: #fff; border: 1px solid var(--green-pale); color: var(--text-mid);
      padding: 6px 14px; border-radius: 50px; font-size: 13px; font-weight: 600;
      text-decoration: none; transition: background 0.15s, color 0.15s, border-color 0.15s;
    }
    .cities-grid a:hover { background: var(--green-light); border-color: var(--green-light); color: #fff; }
    .cities-grid a.active-city { background: var(--green-main); border-color: var(--green-main); color: #fff; }

    /* CTA SECTION */
    .cta-section {
      background: radial-gradient(ellipse at 60% 50%, #2d6a31 0%, #1B5E20 50%, #0d3b12 100%);
      padding: 80px 48px; text-align: center;
    }
    .cta-section h2 { font-size: clamp(28px,4vw,48px); font-weight: 900; color: #fff; letter-spacing: -0.02em; margin-bottom: 20px; }
    .cta-section p { font-size: 18px; color: rgba(255,255,255,0.8); max-width: 540px; margin: 0 auto 40px; line-height: 1.7; }

    /* FOOTER */
    footer { background: #0d2b0f; color: rgba(255,255,255,0.7); padding: 40px 48px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; }
    footer img { height: 36px; width: auto; background: #fff; border-radius: 8px; padding: 4px 10px; }
    footer span { font-size: 14px; }
    footer a { color: rgba(255,255,255,0.6); text-decoration: none; font-size: 14px; }
    footer a:hover { color: var(--green-light); }

    @media (max-width: 900px) {
      .city-hero-inner, .benefits-inner { grid-template-columns: 1fr; gap: 40px; }
      .services-grid { grid-template-columns: 1fr 1fr; }
      nav, .breadcrumb, .city-hero, .content-section, .benefits-section, .nearby-section, .all-cities-section, .cta-section, footer { padding-left: 24px; padding-right: 24px; }
    }
    @media (max-width: 600px) {
      .services-grid { grid-template-columns: 1fr; }
      .trust-bar { gap: 20px; }
    }
  </style>
</head>
<body>

  <nav>
    <a href="../index.html" class="nav-home">
      <img src="../brand_assets/Logo/logo.png" alt="wirlösenauf.de" />
    </a>
    <a href="tel:+491726030946" class="nav-cta">📞 Kostenlos anrufen</a>
  </nav>

  <div class="breadcrumb">
    <a href="../index.html">Startseite</a> › Entrümpelung ${city.name}
  </div>

  <!-- HERO -->
  <section class="city-hero">
    <div class="city-hero-inner">
      <div>
        <div class="city-badge"><span class="city-badge-dot"></span>${city.region}</div>
        <h1>Entrümpelung &amp; Haushaltsauflösung in <span class="accent">${city.name}</span></h1>
        <p class="city-hero-sub">
          Professionelle Entrümpelung in ${city.name} — wir räumen Wohnungen, Häuser, Keller, Garagen und Dachböden schnell, sauber und zu fairen Festpreisen.
        </p>
        <a href="#kontakt" class="btn-primary">
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M3 12L12 4l9 8v8a1 1 0 01-1 1H5a1 1 0 01-1-1v-8z" fill="white"/></svg>
          Kostenloses Angebot in ${city.name}
        </a>
      </div>
      <div class="calc-card">
        <div class="calc-title">Kostenrechner</div>
        <div class="calc-subtitle">Sofort-Schätzung für ${city.name}</div>
        <div class="calc-step">
          <div class="calc-step-label"><span class="calc-step-num">1</span>Was soll entrümpelt werden?</div>
          <div class="calc-type-grid">
            <button class="calc-type-btn active" data-type="wohnung" onclick="calcSetType(this)">🏠 Wohnung</button>
            <button class="calc-type-btn" data-type="haus" onclick="calcSetType(this)">🏡 Haus</button>
            <button class="calc-type-btn" data-type="unternehmen" onclick="calcSetType(this)">🏢 Unternehmen</button>
            <button class="calc-type-btn" data-type="garage" onclick="calcSetType(this)">🚗 Garage</button>
            <button class="calc-type-btn" data-type="keller" onclick="calcSetType(this)">🪜 Keller</button>
            <button class="calc-type-btn" data-type="dachboden" onclick="calcSetType(this)">🔺 Dachboden</button>
            <button class="calc-type-btn" data-type="sonstiges" onclick="calcSetType(this)">📦 Sonstiges</button>
          </div>
        </div>
        <div class="calc-step">
          <div class="calc-step-label"><span class="calc-step-num">2</span>Wie voll ist das Objekt?</div>
          <div class="calc-fill-grid">
            <button class="calc-fill-btn active" data-fill="0.4" onclick="calcSetFill(this)">
              <div class="fill-bars"><div class="fill-bar-seg on"></div><div class="fill-bar-seg"></div><div class="fill-bar-seg"></div><div class="fill-bar-seg"></div></div>¼ voll
            </button>
            <button class="calc-fill-btn" data-fill="0.7" onclick="calcSetFill(this)">
              <div class="fill-bars"><div class="fill-bar-seg on"></div><div class="fill-bar-seg on"></div><div class="fill-bar-seg"></div><div class="fill-bar-seg"></div></div>½ voll
            </button>
            <button class="calc-fill-btn" data-fill="1.0" onclick="calcSetFill(this)">
              <div class="fill-bars"><div class="fill-bar-seg on"></div><div class="fill-bar-seg on"></div><div class="fill-bar-seg on"></div><div class="fill-bar-seg"></div></div>¾ voll
            </button>
            <button class="calc-fill-btn" data-fill="1.4" onclick="calcSetFill(this)">
              <div class="fill-bars"><div class="fill-bar-seg on"></div><div class="fill-bar-seg on"></div><div class="fill-bar-seg on"></div><div class="fill-bar-seg on"></div></div>Voll
            </button>
          </div>
        </div>
        <div class="calc-step" style="margin-bottom:0">
          <div class="calc-step-label"><span class="calc-step-num">3</span>Stockwerk</div>
          <div class="calc-floor-wrap">
            <select class="calc-floor-select" id="calcFloor" onchange="calcUpdate()">
              <option value="0">Erdgeschoss (EG)</option>
              <option value="80">1. Obergeschoss</option>
              <option value="160">2. Obergeschoss</option>
              <option value="240">3. Obergeschoss</option>
              <option value="340">4. Obergeschoss</option>
              <option value="480">5. OG oder höher</option>
            </select>
            <svg class="calc-floor-arrow" width="14" height="14" fill="none" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
        </div>
        <div class="calc-price-box">
          <div class="calc-price-label">Geschätzte Kosten in ${city.name}</div>
          <div class="calc-price-amount" id="calcPriceDisplay">ab <span class="calc-price-accent">€ 240</span></div>
          <div class="calc-price-note">Unverbindlich · Festpreis nach kostenloser Besichtigung</div>
        </div>
        <a href="#kontakt" class="calc-cta-btn">Kostenloses Angebot anfordern →</a>
      </div>
    </div>
  </section>

  <!-- TRUST BAR -->
  <div class="trust-bar">
    <div class="trust-item"><div class="trust-icon">✓</div> Kostenlose Besichtigung</div>
    <div class="trust-item"><div class="trust-icon">✓</div> Faire Festpreise</div>
    <div class="trust-item"><div class="trust-icon">✓</div> Termingarantie</div>
    <div class="trust-item"><div class="trust-icon">✓</div> Besenreine Übergabe</div>
    <div class="trust-item"><div class="trust-icon">✓</div> 15+ Jahre Erfahrung</div>
  </div>

  <!-- CONTENT -->
  <section class="content-section">
    <div class="section-label">Ihr lokaler Partner</div>
    <h2>Entrümpelung in ${city.name} — schnell &amp; zuverlässig</h2>
    <p>
      Sie suchen einen zuverlässigen Entrümpelungsdienst in <strong>${city.name}</strong>? wirlösenauf.de ist Ihr lokaler Partner für professionelle Entrümpelungen und Haushaltsauflösungen in ${city.name} und der gesamten ${city.region}. Wir kennen die Region und sind schnell vor Ort.
    </p>
    <p>
      Ob Wohnungsauflösung nach einem Todesfall, Kellerentrümpelung, Dachbodenräumung oder die komplette Auflösung eines Unternehmens in ${city.name} — wir übernehmen alles: vom Ausräumen über die fachgerechte Entsorgung bis zur besenreinen Übergabe.
    </p>
    <p>
      Unser Team ist in ${city.name} und Umgebung regelmäßig im Einsatz. Wir bieten Ihnen eine kostenlose Besichtigung vor Ort, ein transparentes Festpreisangebot und eine schnelle Terminvereinbarung — oft schon innerhalb weniger Tage.
    </p>

    <div class="services-grid">
      <div class="service-card">
        <div class="service-icon">🏠</div>
        <h3>Wohnungsauflösung</h3>
        <p>Komplette Räumung von Wohnungen in ${city.name} — einfühlsam, diskret und gründlich.</p>
      </div>
      <div class="service-card">
        <div class="service-icon">🏡</div>
        <h3>Haushaltsauflösung</h3>
        <p>Professionelle Auflösung ganzer Haushalte in ${city.name} und Umgebung zu fairen Festpreisen.</p>
      </div>
      <div class="service-card">
        <div class="service-icon">🪜</div>
        <h3>Kellerentrümpelung</h3>
        <p>Wir räumen Ihren Keller in ${city.name} vollständig aus — inklusive Entsorgung.</p>
      </div>
      <div class="service-card">
        <div class="service-icon">🔺</div>
        <h3>Dachbodenräumung</h3>
        <p>Dachbodenentrümpelung in ${city.name}: schnell, gründlich, staubfrei.</p>
      </div>
      <div class="service-card">
        <div class="service-icon">🚗</div>
        <h3>Garagenentrümpelung</h3>
        <p>Garagen und Carports in ${city.name} — wir räumen und entsorgen alles fachgerecht.</p>
      </div>
      <div class="service-card">
        <div class="service-icon">🏢</div>
        <h3>Gewerbeentrümpelung</h3>
        <p>Büros, Läden und Betriebe in ${city.name} — auch größere Objekte kein Problem.</p>
      </div>
    </div>
  </section>

  <!-- BENEFITS -->
  <section class="benefits-section">
    <div class="benefits-inner">
      <div>
        <div class="section-label">Unsere Vorteile</div>
        <h2>Warum wirlösenauf.de in ${city.name}?</h2>
        <ul class="benefit-list">
          <li class="benefit-item">
            <div class="benefit-check"><svg fill="none" viewBox="0 0 14 14"><path d="M2 7l3.5 3.5L12 3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
            <div class="benefit-text"><strong>Kostenlose Besichtigung</strong> in ${city.name} — wir kommen zu Ihnen und geben ein unverbindliches Angebot.</div>
          </li>
          <li class="benefit-item">
            <div class="benefit-check"><svg fill="none" viewBox="0 0 14 14"><path d="M2 7l3.5 3.5L12 3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
            <div class="benefit-text"><strong>Transparente Festpreise</strong> — keine versteckten Kosten, kein böses Erwachen nach der Arbeit.</div>
          </li>
          <li class="benefit-item">
            <div class="benefit-check"><svg fill="none" viewBox="0 0 14 14"><path d="M2 7l3.5 3.5L12 3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
            <div class="benefit-text"><strong>Schnelle Termine</strong> in ${city.name} — oft schon innerhalb von 2–3 Werktagen.</div>
          </li>
          <li class="benefit-item">
            <div class="benefit-check"><svg fill="none" viewBox="0 0 14 14"><path d="M2 7l3.5 3.5L12 3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
            <div class="benefit-text"><strong>Besenreine Übergabe</strong> — wir verlassen das Objekt so, wie Sie es übergeben möchten.</div>
          </li>
          <li class="benefit-item">
            <div class="benefit-check"><svg fill="none" viewBox="0 0 14 14"><path d="M2 7l3.5 3.5L12 3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
            <div class="benefit-text"><strong>Wertanrechnung</strong> — verwertbare Gegenstände werden angerechnet und reduzieren Ihren Preis.</div>
          </li>
          <li class="benefit-item">
            <div class="benefit-check"><svg fill="none" viewBox="0 0 14 14"><path d="M2 7l3.5 3.5L12 3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
            <div class="benefit-text"><strong>Über 15 Jahre Erfahrung</strong> in der Region — wir wissen, worauf es ankommt.</div>
          </li>
        </ul>
      </div>
      <div>
        <div class="section-label">Kontakt</div>
        <h2 id="kontakt">Jetzt Angebot anfordern für ${city.name}</h2>
        <p>Rufen Sie uns direkt an oder schreiben Sie uns — wir melden uns innerhalb von 24 Stunden mit einem unverbindlichen Angebot.</p>
        <a href="tel:+491726030946" class="btn-primary" style="margin-top:8px; display:inline-flex;">
          📞 0172 6030946
        </a>
        <p style="margin-top:20px; font-size:15px;">
          <strong>Servicegebiet:</strong> ${city.name}, ${city.nearby.join(', ')} und gesamte ${city.region}.
        </p>
      </div>
    </div>
  </section>

  <!-- NEARBY CITIES -->
  <section class="nearby-section">
    <div class="section-label">Auch in Ihrer Nähe</div>
    <h2>Entrümpelung in der Umgebung von ${city.name}</h2>
    <div class="nearby-grid">
      ${city.nearby.map(n => {
        const found = cities.find(c => c.name === n || c.name.startsWith(n));
        if (found) return `<a href="${found.slug}.html" class="nearby-link">Entrümpelung ${n}</a>`;
        return `<span class="nearby-link" style="cursor:default">${n}</span>`;
      }).join('\n      ')}
    </div>
  </section>

  <!-- ALL CITIES -->
  <section class="all-cities-section">
    <div class="all-cities-inner">
      <div class="section-label">Alle Standorte</div>
      <h2>Entrümpelung in ganz Niedersachsen</h2>
      <p style="color:var(--text-mid);font-size:15px;margin-top:8px;">Wir sind in allen folgenden Städten und Gemeinden aktiv:</p>
      <div class="cities-grid">
        ${allCitiesLinks}
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta-section">
    <h2>Bereit für Ihre Entrümpelung in ${city.name}?</h2>
    <p>Kostenlose Besichtigung, transparenter Festpreis, schneller Termin — rufen Sie jetzt an.</p>
    <a href="tel:+491726030946" class="btn-primary" style="margin:0 auto;display:inline-flex;">
      📞 Jetzt kostenlos anrufen
    </a>
  </section>

  <footer>
    <a href="../index.html"><img src="../brand_assets/Logo/logo.png" alt="wirlösenauf.de" /></a>
    <span>© 2025 wirlösenauf.de. Alle Rechte vorbehalten.</span>
    <div style="display:flex;gap:20px;">
      <a href="../index.html">Startseite</a>
      <a href="#">Impressum</a>
      <a href="#">Datenschutz</a>
    </div>
  </footer>

  <script>
    const calcBasePrices = { wohnung:600, haus:1200, unternehmen:1500, garage:300, keller:250, dachboden:350, sonstiges:500 };
    let calcCurrentType = 'wohnung', calcCurrentFill = 0.4;
    function calcSetType(btn) {
      document.querySelectorAll('.calc-type-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active'); calcCurrentType = btn.dataset.type; calcUpdate();
    }
    function calcSetFill(btn) {
      document.querySelectorAll('.calc-fill-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active'); calcCurrentFill = parseFloat(btn.dataset.fill); calcUpdate();
    }
    function calcUpdate() {
      const base = calcBasePrices[calcCurrentType] || 500;
      const floor = parseInt(document.getElementById('calcFloor').value, 10);
      const raw = Math.round((base * calcCurrentFill + floor) / 10) * 10;
      const lo = raw, hi = Math.round(raw * 1.35 / 10) * 10;
      const el = document.getElementById('calcPriceDisplay');
      el.classList.add('updating');
      setTimeout(() => {
        el.innerHTML = 'ab <span class="calc-price-accent">€\\u202F' + lo.toLocaleString('de-DE') + '</span> – ' + hi.toLocaleString('de-DE') + ' €';
        el.classList.remove('updating');
      }, 180);
    }
    calcUpdate();
  </script>
</body>
</html>`;
}

let count = 0;
for (const city of cities) {
  const html = generatePage(city);
  const filePath = path.join(outputDir, `${city.slug}.html`);
  fs.writeFileSync(filePath, html, 'utf-8');
  count++;
}

console.log(`✅ ${count} Stadtseiten generiert in ./staedte/`);
console.log(cities.map(c => `  - staedte/${c.slug}.html (${c.name})`).join('\n'));
