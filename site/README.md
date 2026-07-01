# De Lange Slag — website

Static implementation of the De Lange Slag redesign (see `../chats/chat1.md` and
`../project/De Lange Slag.dc.html` for the original Claude Design prototype and
brief this was built from).

## Stack

Plain HTML/CSS/JS, no build step. Every page is a real, separate `.html` file
so each section has its own URL. Shared look and behaviour live in:

- `assets/css/styles.css` — design tokens, layout and components
- `assets/js/main.js` — mobile nav toggle, agenda/verkoop filters, dummy form submission

There's no backend: the "Lid worden", "Verkoop", "Promotie" and "Contact" forms
just show a confirmation message on submit (matching the sales-demo prototype's
scope — real content and submissions come later).

## Structure

```
site/
  index.html            Home
  nieuws.html            Nieuws overview
  nieuws/<slug>.html      Nieuws detail pages
  agenda.html             Agenda (filter: aankomend/verleden/alle)
  fotoboek.html            Fotoboek (albums per evenement)
  verkoop.html             Verkooprubriek (filter + advertentie-formulier)
  promotie.html            Tractorbord bestellen
  links.html               Bevriende clubs
  lid-worden.html          Aanmeldformulier
  contact.html             Contactgegevens + formulier
  privacy.html             Placeholder privacyverklaring
  assets/
    css/styles.css
    js/main.js
    img/                  Photos supplied during design (real photos, not placeholders)
```

Cards/sections without a supplied photo show a neutral placeholder block
instead of a fake or stock image.

## Local preview

No build step needed — just serve the folder, e.g.:

```
cd site
python3 -m http.server 8080
```

Then open `http://localhost:8080/`.

## Deployment

`.github/workflows/deploy.yml` (repo root) deploys this folder to GitHub Pages
on every push to `main`, via `actions/upload-pages-artifact` +
`actions/deploy-pages`. One-time setup: in the repo's **Settings → Pages**, set
**Source** to **GitHub Actions**. After that, pushes to `main` publish
automatically.
