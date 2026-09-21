# Santhosh: Portfolio

React + TypeScript + Tailwind CSS single-page portfolio, served by nginx in a Docker container.

## Run locally (Node 20.19+)
```
npm install
npm run dev      # http://localhost:5174
npm run build    # production build in dist/
```

## Edit the content
All text is in `src/data/content.ts`. Colours are in `src/index.css`.

## Add a project
1. Put screenshots in `public/` (about 1360 x 820, JPG).
2. Add one object to the `projects` array in `src/data/content.ts`.
   - `featured: true` gives a large row (rows alternate left and right).
   - `featured: false` gives a compact card in a "More projects" grid.

## Add a photo
Replace the "S" circle in `src/components/Hero.tsx` with an `<img>` of your photo.

## Deploy (Portainer)
Stack from this repo using `docker-compose.yml`. It joins the `edge` network as `portfolio-web`.
In Cloudflare, route `portfolio.imsanthosh.tech` and `imsanthosh.tech` to `http://portfolio-web:80`.
