# labbi.com.np

Personal site of Labbi Karmacharya, civic technologist and data scientist.

## Stack

Plain HTML, CSS, and JavaScript. No build step. Hosted on GitHub Pages with a custom domain (`CNAME`).

- `index.html` — all content and sections
- `style.css` — warm ink + terracotta theme, light default with a dark toggle
- `index.js` — theme, nav, scroll reveal, count-up, show-more toggles, CV modal, form handling
- `assets/` — images (`assets/work/` holds project thumbnails)
- `robots.txt`, `sitemap.xml` — SEO

## Editing content

Content lives directly in `index.html`. Each section is commented (Hero, About, Work, Experience, Writing, Speaking, Awards, Contact).

### Project images

Drop wide images (about 16:10) into `assets/work/` using these names to fill the Work cards:
`bureaucrazy.jpg`, `digital-kala.jpg`, `futureshub.jpg`, `matdaan.jpg`, `publication.jpg`, `blind-portal.jpg`, `fraud-detection.jpg`, `himalayan-java.jpg`. A missing image falls back to a gradient and icon.

## Forms (CV request + contact)

Both forms use [Web3Forms](https://web3forms.com). Get a free access key with your email, then replace `YOUR_WEB3FORMS_ACCESS_KEY` in `index.html` (two places). Submissions arrive in your inbox. The CV is not published anywhere. You reply with the file after reviewing each request.

## Local preview

Open `index.html` in a browser, or run any static server from the project root.
