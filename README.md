# WDD 430 - Portfolio Application

Welcome to the **wdd430-portfolio** project built with Next.js (App Router), TypeScript, and Tailwind CSS.

## 🚀 Live Demo
- **Vercel Deployment URL**: [https://wdd430-portfolio-hgregori.vercel.app](https://wdd430-portfolio-hgregori.vercel.app) *(Update with your exact Vercel URL once deployed)*

## 🛠️ Tech Stack
- **Framework**: [Next.js](https://nextjs.org/) (App Router, Server Components)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Linting**: ESLint

## 📁 Project Structure
```
wdd430-portfolio/
├── app/
│   ├── about/
│   │   └── page.tsx          # About page with custom Server Component
│   ├── api/
│   │   └── hello/
│   │       └── route.ts      # Sample API endpoint
│   ├── favicon.ico
│   ├── globals.css           # Global Tailwind styles
│   ├── layout.tsx            # Root layout with Header & Footer
│   └── page.tsx              # Home / Portfolio project list
├── components/
│   ├── Footer.tsx            # Dynamic copyright year Server Component
│   ├── Header.tsx            # Navigation header
│   ├── ProjectCard.tsx       # Reusable project card component
│   ├── ProjectList.tsx       # Grid container rendering project cards
│   └── SkillsCard.tsx        # Custom Server Component for About page
└── public/
```

## 💻 Getting Started Locally

First, install dependencies (if not already installed):
```bash
npm install
```

Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🧪 Verification & Building

Run the production build:
```bash
npm run build
```

Run ESLint:
```bash
npm run lint
```
