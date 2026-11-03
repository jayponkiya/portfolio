# Jay Ponkiya — Portfolio

Personal portfolio for Jay Ponkiya, Sr. Front End Developer (Shopify and WordPress). Dark mode is the default. Light mode is saved in the browser.

## Commands

```bash
npm install
npm run dev
npm run build
```

`npm run dev` starts the site at http://localhost:5173. `npm run build` writes the production site to `dist`.

## Edit the content

All copy, projects, skills, jobs, and links live in `src/data/portfolio.js`. Change that file and refresh. Sections only render what is in it.

- Portrait on the page: replace `src/assets/profile.jpg`.
- Link-preview image: replace `public/profile.jpg` with the same photo.
- Resume button: replace `public/Jay_Ponkiya_Resume.pdf`. Keep the file name, or update `resume` in `portfolio.js`.
- Do not add a date of birth.

Project cards use a typographic cover. There are no screenshots in this folder, so none are shown. To add a real image later, add an `image` field on that project and render it in `src/sections/Projects.jsx`.

Stats for project count and companies are counted from the arrays in `portfolio.js`. The “5.5+” years figure is written out because that is what the resume states.

## Contact form

With no extra setup, Send opens the visitor’s email app with the message addressed to the email in `portfolio.js`.

To send from the site instead, copy `.env.example` to `.env.local` and fill in an [EmailJS](https://www.emailjs.com/) service id, template id, and public key. The template receives `from_name`, `reply_to`, `message`, and `subject`. Restart the dev server after saving the file.

## Deploy

Build command: `npm run build`  
Publish directory: `dist`

**Vercel:** import the project, leave the framework as Vite, and deploy. Add the three `VITE_EMAILJS_*` variables in Project Settings if you use EmailJS.

**Netlify:** same build command and publish directory. Add the same variables under Site configuration → Environment variables if you use EmailJS.

This is a single page, so no redirect rules are required. After the site has a public URL, set `og:image` in `index.html` to the full image URL (for example `https://your-domain/profile.jpg`) so link previews resolve.
