# PixelPlay Games - React/Vite Nintendo webshop

## Projectomschrijving
PixelPlay Games is een webapplicatie voor een beginnende Nintendo games-webshop die ik voor mijn keuzedeel front end development heb gemaakt.  
De webshop heeft een Nintendo/game-thema en bevat een Home-pagina, Games-pagina en Contact-pagina.

De applicatie is gebouwd als moderne frontend webapplicatie met React en Vite. Hiermee voldoet mijn project beter aan de eisen van het keuzedeel Front-end Development, omdat er gebruik wordt gemaakt van een frontend framework, package management, componentmanagement, commandline tools en optimalisatie via een buildproces.

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

## Commandline tools
De volgende commandline tools worden gebruikt:

```bash
npm install
npm run dev
npm run build
npm run preview
```

### Uitleg
- `npm install`: installeert alle packages.
- `npm run dev`: start de ontwikkelserver.
- `npm run build`: maakt een geoptimaliseerde productieversie.
- `npm run preview`: bekijkt de productieversie lokaal.

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


## Responsive user interface design
De website is responsive gemaakt voor mobiel, tablet en desktop.

Toegepaste technieken:
- `meta viewport`.
- CSS Grid voor grote schermen.
- Media queries voor schermen kleiner dan 800px.
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


## Snelheidsoptimalisatie
De webapplicatie is geoptimaliseerd door:

- Vite buildproces.
- Productiebundel via `npm run build`.
- Lazy loading van game-afbeeldingen.
- Beperkt aantal externe packages.
- CSS in één gestructureerd bestand.
- Componenten en data overzichtelijk gescheiden.
- Geen zware libraries gebruikt.


## Testplan
De applicatie is getest op:

- Navigatie tussen Home, Games en Contact.
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
| SEO | Meta-tags, alt-teksten, structured data |
| Passend ontwerp | Nintendo/game-thema met felle kleuren |
| Documentatie | Deze README |
| Frontend framework | React |
| Commandline tools | NPM en Vite scripts |
| Package management | `package.json` |
| Plug-ins | Vite React plugin, Lucide React, ESLint |


## Conclusie
De webapplicatie voldoet aan de opdracht en de extra beoordelingsvereisten. Het project gebruikt moderne frontend development technieken en is geschikt om lokaal te ontwikkelen en online te plaatsen als productie build.
