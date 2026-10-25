# Deploy Node version

## Render / Railway
1. Set the root directory to `asmaralaya-node`.
2. Build command: `npm install`
3. Start command: `npm start`
4. Node version: 18 or newer.

No environment variables are required for the demo build.

## GitHub Pages
GitHub Pages cannot run a Node.js server. Use `../asmaralaya-demo/` for the static live demo. The static front-end automatically uses `data/content.json` when `/api/content` is unavailable.
