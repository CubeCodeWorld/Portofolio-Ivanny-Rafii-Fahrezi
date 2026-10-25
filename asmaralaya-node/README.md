# Asmaralaya Coffee — Node.js / Express Demo

This folder contains the server-backed version of the Asmaralaya Coffee company profile.

## Runtime
- Node.js 18+
- Express
- Vanilla HTML / CSS / JavaScript

## API
- `GET /api/health`
- `GET /api/content`
- `GET /api/venue`
- `GET /api/experiences`
- `GET /api/gallery`
- `POST /api/inquiry`

The inquiry endpoint only validates and echoes a safe preview. It does not persist personal data.

## Run locally
```bash
npm install
npm start
```

The same front-end also has a local JSON fallback so a static showcase can be hosted from GitHub Pages.


Update 2026-10-25: Hero video autoplay/muted/loop, official Asmaralaya brand mark rendered without its beige matte, Menu section removed, and gallery drink photography added as local assets.
