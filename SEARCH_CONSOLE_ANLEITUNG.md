# Google Search Console – Schritt-für-Schritt Anleitung
## für wirlösenauf.de

---

## Schritt 1: Search Console aufrufen

1. Öffne deinen Browser und gehe zu:
   **https://search.google.com/search-console**
2. Melde dich mit dem Google-Konto an, das du für dein Business nutzt.
3. Du siehst das Search Console Dashboard (ggf. mit bereits vorhandenen Properties).

---

## Schritt 2: Neue Property hinzufügen (Domain-Property)

1. Klicke oben links auf das **Property-Dropdown** → **"Property hinzufügen"**
2. Es erscheint ein Fenster mit zwei Optionen:
   - **Domain** ← Diese wählen!
   - URL-Präfix
3. Gib ein: `wirlösenauf.de` (ohne https://, ohne www)
4. Klicke **"Weiter"**

> **Warum Domain-Property?** Sie erfasst alle Varianten der Domain:
> http, https, www, ohne www – alles in einer einzigen Ansicht.

---

## Schritt 3: DNS-Verifizierung (TXT-Record beim Domain-Anbieter eintragen)

Nach Schritt 2 zeigt Google dir einen **TXT-Record** an, z.B.:
```
google-site-verification=ABC123xyz...
```

**So trägst du ihn ein:**

### Bei IONOS / 1&1:
1. Login unter: https://mein.ionos.de
2. **Domains & SSL** → deine Domain auswählen
3. **DNS** → **Eintrag hinzufügen**
4. Typ: `TXT`, Host: `@`, Wert: den Google-Code einfügen
5. Speichern und **10–30 Minuten warten**

### Bei Strato:
1. Login unter: https://www.strato.de/apps/CustomerService
2. **Domains** → **DNS-Einstellungen**
3. **TXT-Eintrag hinzufügen** → Wert einfügen
4. Speichern, 10–30 Minuten warten

### Bei INWX / anderen Anbietern:
1. Gehe zu DNS-Verwaltung deiner Domain
2. Neuen TXT-Record anlegen:
   - **Name/Host:** `@` (= die Domain selbst)
   - **Typ:** `TXT`
   - **Wert:** den gesamten Google-Code kopieren
3. TTL: 3600 (oder Standard), speichern

### Verifizierung abschließen:
- Zurück in der Search Console: Klicke **"Verifizieren"**
- Bei Erfolg: grüne Bestätigung ✓
- Falls Fehler: 30 Minuten warten, dann erneut versuchen (DNS braucht Zeit)

---

## Schritt 4: Sitemap einreichen

1. Im linken Menü der Search Console: **"Sitemaps"**
2. Im Feld **"Neue Sitemap hinzufügen"** eingeben:
   ```
   https://wirlösenauf.de/sitemap.xml
   ```
3. Klicke **"Senden"**
4. Erwartetes Ergebnis: Status **"Erfolgreich"** + Anzahl der erkannten URLs

> Die Sitemap enthält aktuell **80+ URLs** (Hauptseite, Leistungsseiten, alle Stadtseiten).
> Google liest sie und weiß, welche Seiten indexiert werden sollen.

---

## Schritt 5: Indexierung der Hauptseite prüfen (URL-Prüftool)

1. Im linken Menü: **"URL-Prüfung"** (oder oben in der Suchleiste der Console)
2. Gib ein: `https://wirlösenauf.de/`
3. Google prüft, ob die Seite im Index ist:
   - ✅ **"URL ist in Google"** → alles in Ordnung
   - ⚠️ **"URL nicht in Google"** → Indexierung beantragen (Schritt 5b)

### Schritt 5b: Indexierung beantragen (falls noch nicht indexiert)
1. Klicke auf **"Indexierung beantragen"**
2. Google crawlt die Seite und nimmt sie in die Warteschlange auf
3. Das dauert je nach Auslastung 1–7 Tage

> **Empfehlung:** Beantrage auch die Indexierung dieser wichtigen Seiten einzeln:
> - `https://wirlösenauf.de/wertanrechnung.html`
> - `https://wirlösenauf.de/haushaltsaufloesung-hildesheim.html`
> - `https://wirlösenauf.de/haushaltsaufloesung-hannover.html`

---

## Wichtige Hinweise & Timings

| Aktion | Erwartete Wartezeit |
|--------|---------------------|
| DNS TXT-Record aktiv | 10 Min. – 48 Std. |
| Search Console Verifizierung | sofort nach DNS aktiv |
| Sitemap verarbeitet | 1–3 Tage |
| Erste Ranking-Daten sichtbar | **3–7 Tage** |
| Vollständige Daten (Impressionen, Klicks) | 7–28 Tage |

---

## Was nach der Einrichtung tun?

Nach 7 Tagen regelmäßig prüfen:

- **Performance → Abfragen**: Für welche Keywords rankt die Seite?
- **Abdeckung**: Gibt es Crawl-Fehler oder nicht indexierte Seiten?
- **Core Web Vitals**: Ladezeit und Nutzerfreundlichkeit
- **Sitemaps**: Werden alle URLs erkannt?

---

## Schnell-Checkliste

- [ ] Google-Konto bereit (Business-Konto empfohlen)
- [ ] Search Console aufgerufen
- [ ] Domain-Property `wirlösenauf.de` angelegt
- [ ] TXT-Record beim Domain-Anbieter eingetragen
- [ ] 10–30 Min. gewartet
- [ ] Verifizierung abgeschlossen
- [ ] Sitemap `https://wirlösenauf.de/sitemap.xml` eingereicht
- [ ] Indexierung der Hauptseite beantragt
- [ ] Kalender-Erinnerung für 7 Tage später gesetzt (erste Daten prüfen)

---

*Erstellt für wirlösenauf.de — Stand: März 2026*
