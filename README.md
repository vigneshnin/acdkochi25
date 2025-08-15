# acdkochi25

AWS Community Day Kochi — 2025 · Official Website

## Shader Gradient (Hero Background)

The hero section uses a GPU shader gradient powered by the [`shadergradient`](https://github.com/ruucm/shadergradient) package, which is primarily built for React components.
Since this site is plain HTML/CSS, we bundle a small widget with **Vite** and inject it into the hero `<div>`.

### Source location

```
public/shader-gradient/
└─ src/
   └─ ShaderBG.jsx   ← edit this file to change the gradient
```

### How it works

* We compile the React component into a single JS bundle with Vite.
* The built script is then loaded on the site and mounts into the hero container.

### Build steps

```bash
cd public/shader-gradient
npm i
npm run build
```

After the build, you’ll have the latest shader gradient bundle in `public/shader-gradient/dist/`.

### Where to edit

Update the gradient/component logic in:

```
public/shader-gradient/src/ShaderBG.jsx
```

Then rebuild to reflect changes.

### Repo hygiene

To keep the repo tidy, we ignore the `dist` output except for the final widget bundle:

```
# .gitignore
/public/shader-gradient/dist/*
!/public/shader-gradient/dist/shaderbg-widget.js
```

> Do not edit files in `dist/` directly—make changes in `src/` and rebuild.

---

**Tip:** If you change public APIs or props in `ShaderBG.jsx`, remember to rebuild so the site picks up the new bundle. Consider cache-busting the script tag (e.g., `?v=YYYYMMDDHHmm`) if your hosting layer is aggressive about caching.
