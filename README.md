# Ratha Portfolio

A responsive personal portfolio built with React + Vite, including persistent dark/light mode.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite.

## Build for deployment

```bash
npm run build
```

The production files will be generated in `dist/`.

## Customize

Edit `src/main.jsx` to change:
- Projects
- Skills
- Email
- Social links
- About text

The profile photo is at `src/assets/profile.jpg`.

## Theme

Use the Light/Dark button in the navigation. The selected theme is saved in `localStorage`, so it remains after refreshing the page.

## Animations

This version uses the `motion` package for React animations. The animation style follows the same lightweight, source-friendly approach used by modern libraries such as Animate UI: entrance reveals, staggered lists, hover motion, image zoom, and button interactions.

Install dependencies with:

```bash
npm install
```
