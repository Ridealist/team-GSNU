# GEAR-UP Reference Clone

An Astro/TypeScript static baseline clone of the public [GEAR-UP PROJECT reference site](https://sites.google.com/view/gearup-ai/home?authuser=0). It reproduces the four-page information architecture, dark patterned headers, condensed typography, orange accents, long-form Home flow, member grid, publication list, and contact page without Google Sites platform chrome.

## Stack

- Astro static output
- TypeScript
- Plain CSS and minimal vanilla JavaScript
- GitHub Actions and GitHub Pages

## Install and run

```bash
npm install
npm run dev
```

Astro prints the local URL after startup.

## Validate and build

```bash
npm run check
npm run build
npm run preview
```

The production output is written to `dist/`.

## GitHub Pages deployment

1. Push the repository to GitHub with `main` as the deployment branch.
2. In **Settings → Pages**, select **GitHub Actions** as the source.
3. Push to `main` or run **Deploy to GitHub Pages** manually from the Actions tab.

`.github/workflows/deploy-pages.yml` installs dependencies, checks the Astro project, builds it, uploads `dist/`, and deploys the Pages artifact.

`astro.config.mjs` reads `GITHUB_REPOSITORY` during Actions builds. A repository named `<owner>.github.io` uses `/`; any other repository automatically uses `/<repository-name>/`. For a non-Actions production build, set `GITHUB_ACTIONS=true` and `GITHUB_REPOSITORY=<owner>/<repository>` to reproduce the Pages base path.

## Updating content

- Navigation: `src/data/navigation.ts`
- Home research and design copy: `src/data/home.ts`
- Members and biographies: `src/data/members.ts`
- Research citations: `src/data/researchWork.ts`
- Contact copy: `src/pages/contact.astro`

## Updating images

- Home assets: `public/assets/images/home/`
- Member portraits: `public/assets/images/members/`

Keep existing filenames and aspect ratios to replace images without layout changes. The recovered reference assets are local; production pages do not hotlink Google-hosted images. See `ASSET_TODO.md` for the remaining portrait placeholder.

## Reference captures

Development-only screenshots from the reference audit are stored in `reference-captures/`. They are not imported by the production site.
