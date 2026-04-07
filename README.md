# RioShop — Tech Built for Bold Movement

A modern, full-featured e-commerce storefront for premium technology accessories — mobile tech, smart home devices, and car tech. Built with React, TypeScript, and Tailwind CSS, powered by a Lovable Cloud backend.

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Backend & Infrastructure](#backend--infrastructure)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

**RioShop** is a responsive, production-grade e-commerce web application showcasing a curated catalog of 30+ technology products across three categories: Mobile Tech, Smart Home, and Car Tech. The app features a complete shopping experience — from product discovery and filtering through checkout and order confirmation.

## Features

### Storefront & Product Catalog
- Hero banner with brand messaging
- Category-based product filtering (Mobile Tech, Smart Home, Car Tech)
- Full-text product search
- Multiple sort options (featured, price, name, rating)
- Product detail dialog with image gallery, color/size selectors, and related products
- Stock availability badges
- Star ratings and customer reviews

### Shopping Experience
- Persistent shopping cart with slide-out drawer
- Swipeable cart items (mobile-optimized)
- In-cart quantity indicators on product cards and related products
- Wishlist with local persistence
- Full checkout flow with shipping address form
- Order confirmation emails via Resend (backend function)

### User Accounts
- Email/password authentication (Lovable Cloud Auth)
- User profile management (name, phone, avatar)
- Order history tracking
- Account settings page

### UX & Design
- Dark/light theme toggle with system preference detection
- Fully responsive layout (mobile-first)
- SEO metadata via `react-helmet-async`
- Accessible UI components (shadcn/ui + Radix primitives)
- Toast notifications for user actions
- Newsletter signup section

### Informational Pages
- FAQ (accordion-style)
- Shipping policy
- Returns policy
- Contact page

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | React 18, TypeScript 5 |
| **Build Tool** | Vite 5 |
| **Styling** | Tailwind CSS 3, shadcn/ui, Radix UI |
| **Routing** | React Router v6 |
| **State Management** | React Context (Cart, Wishlist, Auth, Theme) |
| **Data Fetching** | TanStack React Query |
| **SEO** | react-helmet-async |
| **Backend** | Lovable Cloud (Supabase) — Auth, Database, Edge Functions |
| **Email** | Resend (via Edge Function) |
| **Deployment** | Lovable Platform |

---

## Project Structure

```
src/
├── assets/              # Product images and static assets
├── components/
│   ├── ui/              # shadcn/ui primitives (Button, Dialog, Sheet, etc.)
│   ├── CartDrawer.tsx   # Slide-out shopping cart
│   ├── CategoryFilter.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Newsletter.tsx
│   ├── ProductCard.tsx
│   ├── ProductDetailDialog.tsx
│   ├── ProductReviews.tsx
│   ├── ProductSorting.tsx
│   ├── ReviewSubmissionForm.tsx
│   ├── SEO.tsx
│   ├── StarRating.tsx
│   ├── StockBadge.tsx
│   └── SwipeableCartItem.tsx
├── contexts/
│   ├── AuthContext.tsx   # Authentication state & profile management
│   ├── CartContext.tsx   # Cart state with localStorage persistence
│   ├── ThemeContext.tsx  # Dark/light theme toggle
│   └── WishlistContext.tsx
├── data/
│   └── products.ts      # Product catalog (30+ items)
├── hooks/
│   ├── use-mobile.tsx
│   └── use-toast.ts
├── integrations/
│   └── supabase/        # Auto-generated client & types
├── pages/
│   ├── Account.tsx
│   ├── Auth.tsx
│   ├── Checkout.tsx
│   ├── Contact.tsx
│   ├── FAQ.tsx
│   ├── Index.tsx        # Main storefront
│   ├── NotFound.tsx
│   ├── Orders.tsx
│   ├── Returns.tsx
│   ├── Shipping.tsx
│   └── Wishlist.tsx
└── main.tsx

supabase/
├── config.toml
└── functions/
    └── send-order-confirmation/   # Order confirmation email Edge Function
```

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 18 (recommended: install via [nvm](https://github.com/nvm-sh/nvm))
- **npm** or **bun**

### Installation

```bash
# Clone the repository
git clone <YOUR_GIT_URL>
cd rioshop

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## Environment Variables

The following environment variables are managed automatically by Lovable Cloud:

| Variable | Description |
|---|---|
| `VITE_SUPABASE_URL` | Backend API endpoint |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Public API key |
| `VITE_SUPABASE_PROJECT_ID` | Project identifier |

The `RESEND_API_KEY` secret is configured in the backend for the order confirmation Edge Function.

> **Note:** The `.env` file is auto-generated — do not edit it manually.

---

## Backend & Infrastructure

The application backend is powered by **Lovable Cloud**, providing:

- **Authentication** — Email/password signup & login with session persistence
- **Database** — User profiles, order records, and product reviews
- **Edge Functions** — Serverless order confirmation emails (Resend integration)
- **Storage** — User avatar uploads

---

## Development

This project was designed and developed using the **Lovable AI development platform** with iterative, prompt-driven development. All features — from initial scaffolding through UI polish, backend integration, and UX refinements — were built collaboratively between the project owner and Lovable AI.

### Key Development Highlights

- Mobile-first responsive design tested across viewport sizes
- Accessible component architecture using Radix UI primitives
- Persistent cart and wishlist state via localStorage
- Modular context-based state management (no external state library)
- SEO-optimized with Open Graph and Twitter Card meta tags
- Dark/light theming with CSS custom properties and HSL design tokens

---

## License

This project is proprietary. All rights reserved.
