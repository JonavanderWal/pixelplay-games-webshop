# PixelPlay Games - React/Vite Nintendo webshop

## Projectomschrijving
PixelPlay Games is een webapplicatie voor een beginnende Nintendo games-webshop.  
De webshop heeft een Nintendo/game-thema en bevat een Home-pagina, Games-pagina en Contact-pagina.

De applicatie is gebouwd als moderne frontend webapplicatie met React en Vite. Hiermee voldoet het project beter aan de eisen van het keuzedeel Front-end Development, omdat er gebruik wordt gemaakt van een frontend framework, package management, componentmanagement, commandline tools en optimalisatie via een buildproces.

## Pagina's
De webapplicatie bevat minimaal drie pagina's:

### 1. Home
- Introductie over de webshop.
- Uitleg over het aanbod.
- Call-to-action knoppen.
- Geanimeerde Nintendo Switch visual.

### 2. Games
- Overzicht van Nintendo games.
- Elke game heeft een afbeelding, titel, beschrijving en prijs.
- Zoekfunctie om games te filteren.
- Lightbox interactie wanneer je op een game klikt.

### 3. Contact
- Contactformulier met naam, e-mail, onderwerp en bericht.
- Het formulier hoeft niet echt te versturen, maar geeft wel een zichtbare melding.

## Gebruikte technieken
- HTML5
- CSS3 / structured CSS
- JavaScript
- React
- Vite
- NPM
- Lucide React icons als plug-in/component library
- CSS Grid
- Flexbox
- Media queries
- SEO meta-tags
- Structured data met JSON-LD

## Frontend framework
Voor deze opdracht is React gebruikt.

React wordt toegepast voor:
- Paginaweergave via state.
- Herbruikbare data voor games.
- Interactie zoals lightbox, zoekfunctie en formuliermelding.
- Dynamische rendering van gamekaarten.

Vite wordt gebruikt als moderne ontwikkelomgeving en build tool.

## Commandline tools
De volgende commandline tools worden gebruikt:

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
```

### Uitleg
- `npm install`: installeert alle packages.
- `npm run dev`: start de ontwikkelserver.
- `npm run build`: maakt een geoptimaliseerde productieversie.
- `npm run preview`: bekijkt de productieversie lokaal.
- `npm run lint`: controleert de codekwaliteit.

## Package- en componentmanagement
Package management wordt gedaan met NPM.  
De gebruikte packages staan in `package.json`.

Belangrijke packages:
- `react`
- `react-dom`
- `vite`
- `@vitejs/plugin-react`
- `lucide-react`
- `eslint`

Componentmanagement is toegepast door:
- Data van games apart te bewaren in `src/data/games.js`.
- Herbruikbare interface-elementen te maken via React rendering.
- De applicatie overzichtelijk op te bouwen vanuit `src/main.jsx`.

## Plug-ins
De webapplicatie gebruikt onder andere:

- `@vitejs/plugin-react` voor React ondersteuning in Vite.
- `lucide-react` voor iconen.
- `eslint` voor controle van codekwaliteit.

## Responsive user interface design
De website is responsive gemaakt voor mobiel, tablet en desktop.

Toegepaste technieken:
- `meta viewport`.
- CSS Grid voor grote schermen.
- Media queries voor schermen kleiner dan 800px.
- Mobiel hamburgermenu.
- Flexbox voor knoppen en navigatie.
- Afbeeldingen schalen automatisch mee.
- Layout verandert van twee kolommen naar één kolom op mobiel.

## SEO-technieken
De volgende SEO-technieken zijn toegepast:

- Duidelijke paginatitel in `index.html`.
- Meta description.
- Meta keywords.
- Author meta-tag.
- Robots meta-tag.
- Open Graph tags.
- Semantische HTML-structuur.
- Beschrijvende alt-teksten bij afbeeldingen.
- Structured data via JSON-LD.
- Responsive design.
- Logische contentstructuur met headings.
- Interne navigatie tussen de pagina's.

Let op: omdat dit een React single page application is, staat de basis-SEO in `index.html`. Voor een echte webshop zou server-side rendering of prerendering een mogelijke verbetering zijn.

## Snelheidsoptimalisatie
De webapplicatie is geoptimaliseerd door:

- Vite buildproces.
- Productiebundel via `npm run build`.
- Lazy loading van game-afbeeldingen.
- Preconnect naar de externe afbeeldingsbron.
- Beperkt aantal externe packages.
- CSS in één gestructureerd bestand.
- Componenten en data overzichtelijk gescheiden.
- Geen zware libraries gebruikt.

## Online zetten
Om de webapp online te zetten op het domein van school:

1. Open het project in Visual Studio Code.
2. Voer uit:

```bash
npm install
npm run build
```

3. Upload de inhoud van de map `dist` naar het domein van school.

Belangrijk: upload dus niet alleen de `src` map, maar de gebouwde productieversie uit `dist`.

## Testplan
De applicatie is getest op:

- Navigatie tussen Home, Games en Contact.
- Mobiele navigatie met hamburgermenu.
- Zoekfunctie op de games-pagina.
- Lightbox openen en sluiten.
- Contactformuliermelding.
- Desktop layout.
- Mobiele layout.
- Productie build via `npm run build`.

## Eisencheck
| Eis | Uitwerking |
| --- | --- |
| Minimaal 3 pagina's | Home, Games en Contact |
| Interactie | Lightbox, hover effecten, animatie, zoekfunctie, formuliermelding |
| Responsive | Media queries, Grid, Flexbox, mobiel menu |
| Online plaatsbaar | Build via Vite en uploadbare `dist` map |
| SEO | Meta-tags, alt-teksten, structured data, semantische HTML |
| Passend ontwerp | Nintendo/game-thema met felle kleuren |
| Documentatie | Deze README |
| Frontend framework | React |
| Commandline tools | NPM en Vite scripts |
| Package management | `package.json` |
| Plug-ins | Vite React plugin, Lucide React, ESLint |
| Snelheidsoptimalisatie | Buildproces, lazy loading, preconnect |

## Mogelijke verbeteringen
- Echte winkelwagen.
- Productfilter op prijs of categorie.
- Backend voor contactformulier.
- Database met games.
- Betalingssysteem.
- Prerendering of server-side rendering voor betere SEO.
- Eigen afbeeldingen in plaats van externe afbeeldingen.

## Conclusie
De webapplicatie voldoet aan de opdracht en de extra beoordelingsvereisten. Het project gebruikt moderne frontend development technieken en is geschikt om lokaal te ontwikkelen en online te plaatsen als productie build.
