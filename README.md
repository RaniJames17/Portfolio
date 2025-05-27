# React Resume

A modern, responsive resume built with React and Tailwind CSS.

## Features

- ⚡ **Built with Vite** (or Create React App)
- 📱 **Responsive design** (mobile-friendly, uses Tailwind breakpoints)
- 🧩 **Component-based**: Header, About, Projects, Experience, Contact, etc.
- 🗂️ **Organized code**: Components in their own folders
- 🔄 **Props**: Data passed into components
- 🎛️ **State & Conditional Rendering**: UI interactivity (expand/collapse, theme, etc.)
- 🗂️ **Dynamic lists**: Uses `.map()` for experiences, projects, skills, etc.
- ☁️ **Deployed on Vercel**

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/RaniJames17/Resume
cd Resume
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run locally

```bash
npm run dev
# or
npm start
```

### 4. Build for production

```bash
npm run build
```

## Deployment

This project is deployed on [Vercel](https://vercel.com/):


To deploy your own:
1. Push your code to GitHub.# Remove node_modules and .cache from git tracking
git rm -r --cached node_modules
git rm -r --cached react-resume/node_modules
git rm -r --cached react-resume/.cache
2. Go to [vercel.com](https://vercel.com/), import your repo, and deploy.

## Project Structure

```
src/
  components/
    Header.jsx
    About.jsx
    Projects.jsx
    Experience.jsx
    Contact.jsx
  App.jsx
  main.jsx
```

## Key Implementation Details

- **Props** are used in components like `Contact` and `Experience`.
- **useState** is used for UI behavior (e.g., expand/collapse experience).
- **Conditional rendering** is used to show/hide experience details.
- **.map()** is used to render lists (experiences, projects, etc.).
- **Responsive layout** with Tailwind's `md:grid-cols-3` etc.

## License

MIT

---

> Built by Rani James:500237541