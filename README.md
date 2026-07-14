# PROJECT ZERO Website

A static GitHub Pages website for the PROJECT ZERO Open Alpha.

## Upload to GitHub

Upload all files and folders in this package to the root of your GitHub repository:

- `index.html`
- `style.css`
- `script.js`
- `assets/`

Then open the repository's **Settings → Pages** and publish from the `main` branch and `/ (root)` folder.

## Change the download and survey buttons

Open `index.html` and find:

```html
<a class="button button--solid" href="#" aria-disabled="true">DOWNLOAD — SOON</a>
<a class="button button--ghost" href="#" aria-disabled="true">SURVEY — SOON</a>
```

Replace `#` with your real links and remove `aria-disabled="true"`.

## Replace text

All visible website text is inside `index.html`. You can edit it directly in GitHub.

## Image

The main visual is located at:

`assets/project-zero-alpha.jpeg`
