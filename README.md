# ccl-lang.github.io

The public documentation and project site for CCL.

## Local development

```bash
npm install
npm run dev
```

Node `>= 22.12.0` is recommended.

## Build

```bash
npm run build
```

## Structure

- `/` is the landing page for fast evaluation.
- `/docs/` contains guided documentation.
- `/reference/` contains short lookup pages.

## Deployment

Pushes to `main` trigger the GitHub Pages workflow in `.github/workflows/deploy.yml`.
