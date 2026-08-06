# Wat je zelf kunt doen

Een privé duurzaamheidsradar: wat wij thuis daadwerkelijk doen, wat we
vervangen hebben, waar we een keer in geïnvesteerd hebben en wat we bewust
laten staan. Bedoeld om mensen te inspireren die zich machteloos voelen of denken
"wat ik doe maakt toch niet uit".

## Uitgangspunten

- **Volledig privé.** Dit is een persoonlijk project, gemaakt op eigen tijd. Het
  staat los van welke werkgever dan ook: geen huisstijl, geen inhoud, geen
  materiaal van een organisatie. Dit gaat over thuis.
- **Geen verdienmodel.** Wel een "trakteer me op een koffie"-knop, verder niets.
- **Eerlijk boven volledig.** Alleen dingen die wij echt doen of echt hebben
  overwogen. Inclusief wat we bewust níét doen, met de reden erbij.
- **Handelingsperspectief.** Elk item vertelt de lezer wat hij morgen kan doen.

## Aan de slag

```bash
npm install
npm run dev
```

De site draait dan op http://localhost:4321.

## Hoe het in elkaar zit

| Pad | Wat het is |
| --- | --- |
| `src/data/radar.js` | **Alle inhoud.** De acht thema's, de vier ringen en alle items. Dit is het enige bestand dat je aanraakt om iets toe te voegen. |
| `src/lib/layout.js` | Rekent uit waar elke blip in de boomschijf komt te staan. |
| `src/components/Radar.astro` | De radar zelf, als SVG. |
| `src/pages/index.astro` | De pagina: hero, radar, lijst, het waarom, over ons. |
| `src/styles/global.css` | Kleuren, typografie, knoppen. |

### Een item toevoegen

Zet er een object bij in `src/data/radar.js`:

```js
{
  segment: 'tuin',        // eten · huishouden · energie · tuin · spullen · geld · vervoer · buiten
  ring: 'vandaag',        // vandaag · vervang · investeer · laat
  titel: 'Korte titel',
  tekst: 'Twee, drie zinnen. Waarom doen we dit, en wat merk je ervan?',
}
```

De nummering, de plaatsing in de radar en de lijst onderaan volgen vanzelf.
Items met `bronNodig: true` zijn bewust voorzichtig geformuleerd omdat de
onderbouwing nog ontbreekt.

## Status

Eerste versie. Zie [docs/beslissingen.md](docs/beslissingen.md) voor wat
vaststaat en wat open is, [docs/kwadranten.md](docs/kwadranten.md) voor de
indeling, [docs/mogelijke-aanvullingen.md](docs/mogelijke-aanvullingen.md) voor
wat er nog kan bij, en [INBOX.md](INBOX.md) voor de ruwe verzameling.

Nog te doen voor publicatie:

- De koffie-knop koppelen aan een echte Buy Me a Coffee-pagina.
- De drie claims onderbouwen die in de inbox als "bron nodig" staan.
- Domeinnaam vastleggen en hosting kiezen.
- Een echte tekstfont kiezen; nu staat er een systeem-serif.
