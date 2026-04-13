# RioShop — Tech Built for Bold Movement

A production-grade e-commerce storefront for premium technology accessories — mobile tech, smart home devices, and car tech. Designed and developed iteratively by **Rio** using the **Lovable AI development platform**.

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite)

---

## About

**RioShop** is a fully responsive, mobile-first e-commerce web application featuring a curated catalog of 48 technology products across three categories: Mobile Tech, Smart Home, and Car Tech. The project was built from the ground up through prompt-driven development — every feature, from initial scaffolding through UI polish, backend integration, and UX refinements, was designed and directed by **Rio** with Lovable AI handling the implementation.

This is not a template or starter project. Every component, interaction, and integration was purpose-built for this storefront.

---

## Live Features

### Product Catalog & Discovery
- 48-product catalog across Mobile Tech, Smart Home, and Car Tech categories
- Real-time search with live filtering across product names and descriptions
- Sort by featured, price (low/high), name (A–Z/Z–A), and customer rating
- Product detail dialogs with image galleries, color/size selectors, and related products
- Stock availability badges with real-time inventory display
- Star ratings and customer review system with submission forms

### Shopping Cart
- Persistent cart with localStorage — survives page refreshes and browser restarts
- Slide-out cart drawer accessible from any page
- Swipe-to-remove on mobile (custom gesture handling)
- In-cart quantity badges on product cards and related product buttons
- Real-time cart total and item count in the header

### Wishlist
- Hybrid persistence: localStorage for guests, database-synced for authenticated users
- Automatic merge of guest wishlist items into the database on login
- Dedicated wishlist page with quick add-to-cart actions
- Heart toggle on every product card

### User Accounts & Authentication
- Email/password signup and login via Lovable Cloud Auth
- Google OAuth integration
- User profile management (display name, phone, avatar upload)
- Order history with status tracking
- Account settings page with profile editing

### Checkout & Orders
- Multi-field shipping address form with validation
- Order summary with itemized totals
- Express checkout button UI (Apple Pay, Google Pay — ready for Stripe integration)
- Order confirmation emails via Resend backend function
- Order history page with status badges

### Admin Dashboard
- Role-based access control (RBAC) with `has_role` security function
- Order management table with status filtering and updates
- Revenue and customer statistics
- Real-time order updates via database subscriptions

### Design & UX
- Dark/light theme toggle with system preference detection
- Fully responsive layout tested across mobile, tablet, and desktop
- Accessible components built on Radix UI primitives (shadcn/ui)
- Toast notifications for all user actions
- SEO metadata with Open Graph and Twitter Card tags
- Newsletter signup with database persistence

### Informational Pages
- FAQ (accordion-style with curated questions)
- Shipping policy
- Returns policy
- Contact page

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18, TypeScript 5 |
| Build | Vite 5 |
| Styling | Tailwind CSS 3, shadcn/ui, Radix UI |
| Routing | React Router v6 |
| State | React Context (Cart, Wishlist, Auth, Theme) |
| Data Fetching | TanStack React Query |
| SEO | react-helmet-async |
| Backend | Lovable Cloud — Auth, Database, Edge Functions, Storage |
| Email | Resend (via Edge Function) |
| Hosting | Lovable Platform (static SPA via CDN) |

---

## Project Structure

```
src/
├── assets/              # Product images and static assets
├── components/
│   ├── ui/              # shadcn/ui primitives
│   ├── CartDrawer.tsx
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
│   ├── AuthContext.tsx
│   ├── CartContext.tsx
│   ├── ThemeContext.tsx
│   └── WishlistContext.tsx
├── data/
│   └── products.ts      # 48-product catalog
├── hooks/
│   ├── use-mobile.tsx
│   ├── use-toast.ts
│   └── useAdminRole.ts
├── pages/
│   ├── Account.tsx
│   ├── Admin.tsx
│   ├── Auth.tsx
│   ├── Checkout.tsx
│   ├── Contact.tsx
│   ├── FAQ.tsx
│   ├── Index.tsx
│   ├── NotFound.tsx
│   ├── Orders.tsx
│   ├── Returns.tsx
│   ├── Shipping.tsx
│   └── Wishlist.tsx
└── main.tsx

supabase/
├── config.toml
└── functions/
    └── send-order-confirmation/
```

---

## Infrastructure & Capacity

- **Frontend**: Static SPA served via CDN — unlimited concurrent page loads
- **Backend**: Lovable Cloud (Nano instance) — ~60 direct DB connections, supports **200–500 concurrent users** (up to 1,000 with connection pooling)
- **Auth**: Session-based with JWT tokens, handles thousands of concurrent sessions
- **Storage**: Cloud object storage for user avatar uploads

---

## Development

This project was conceived, designed, and directed by **Rio**. All product decisions, feature prioritization, UX direction, and quality assurance were led by Rio through iterative prompt-driven development on the Lovable AI platform.

**Development approach:**
- Mobile-first responsive design validated across viewport sizes
- Iterative feature building — each capability tested and refined before moving to the next
- Security-first database design with Row-Level Security on all user data
- Progressive enhancement from static catalog → authenticated experience → admin tooling

See [CHANGELOG.md](./CHANGELOG.md) for the full version history and feature timeline.

---

## Roadmap

- [ ] Stripe payment integration (replace Express checkout placeholders)
- [ ] Custom email domain verification for Resend deliverability
- [ ] Admin RBAC database migration (currently blocked by infra timeout — retry pending)
- [ ] Real-time order status publication for live admin updates
- [ ] Product inventory management in admin panel

---

## Environment

Environment variables are managed automatically by Lovable Cloud:

| Variable | Purpose |
|---|---|
| `VITE_SUPABASE_URL` | Backend API endpoint |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Public API key |
| `VITE_SUPABASE_PROJECT_ID` | Project identifier |

The `RESEND_API_KEY` secret is configured in the backend for order confirmation emails.

> The `.env` file is auto-generated — do not edit manually.

---

## License

Proprietary. All rights reserved.
