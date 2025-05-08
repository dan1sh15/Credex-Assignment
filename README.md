# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# SoftSell - Responsive Marketing Website

A single-page responsive marketing website for the fictional company **SoftSell**, built as part of the Credex Web Development Internship assignment.

---

## 🚀 Features Implemented

### 🔧 Components Built (Using React + Tailwind CSS)

- **Hero Section**  
  Catchy headline, subheading, and CTA button.

- **How It Works**  
  A 3-step visual flow with icons: Upload License → Get Valuation → Get Paid.

- **Why Choose Us**  
  3–4 tiles with icons and short descriptions to highlight advantages.

- **Customer Testimonials**  
  Swiper slider with 5 dummy reviews, responsive and animated.

- **Contact Form**  
  Fully validated form with name, email, company, license type (dropdown), and message. Form reset after submission.

- **Dark Mode Toggle**  
  Implemented dark/light theme switch using Tailwind's `dark:` classes and React `useState`.

- **Bonus: UI Polish**
  - Responsive design (mobile-first)
  - Gradient backgrounds and modern UI
  - Font and color consistency
  - Smooth animations (basic Tailwind + Swiper transitions)

---

## 🛠️ Tech Stack

- **Frontend Framework**: React.js (via Vite)
- **Styling**: Tailwind CSS
- **Carousel**: SwiperJS
- **Hosting**: [Vercel / Netlify / GitHub Pages] *(Add yours here)*

---

## 🌗 Dark Mode

A toggle button lets users switch between light and dark themes. Tailwind's `dark` variant is used throughout components for seamless styling.

---

## 📦 Installation & Setup

```bash
git clone https://github.com/dan1sh15/Credex-Assignment.git
cd softsell-website
npm install
npm run dev

