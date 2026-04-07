# Changelog

All notable changes to the RioShop project are documented in this file. This project follows an iterative, prompt-driven development process using the Lovable AI platform.

---

## [1.9.0] — 2026-04-07

### Added
- **Wishlist database sync** — wishlist now persists to the database for logged-in users, with automatic merge of guest localStorage items on login
- Guest users continue to use localStorage as a seamless fallback
- Added `loading` state to WishlistContext for async operations

### Changed
- Refactored `WishlistContext` to use `useCallback` for memoized handlers and hybrid local/remote persistence strategy

---

## [1.8.0] — 2026-03-04

### Added
- In-cart quantity badge on "Add to Cart" buttons for related products in the product detail dialog
- Button dynamically switches to filled variant and displays "In Cart (X)" when item is already in cart

---

## [1.7.0] — 2026-02-18

### Added
- Swipe-to-remove gesture for cart items on mobile (`SwipeableCartItem` component)
- Apple Pay and Google Pay payment method buttons on the checkout page

---

## [1.6.0] — 2026-02-09

### Added
- Sticky "Add to Cart" bar at the bottom of the product detail dialog on mobile viewports
- Mobile-optimized checkout layout improvements

### Tested
- Full responsive design audit across mobile viewport (390×844)
- End-to-end checkout flow verified on small screens

---

## [1.5.0] — 2026-02-08

### Tested
- Comprehensive end-to-end testing of all major flows: product browsing, cart, checkout, and order confirmation email delivery

---

## [1.4.0] — 2026-02-05

### Added
- **Order confirmation emails** via backend Edge Function (Resend integration)
  - Professional HTML email with order ID, itemized list, shipping address, and total
- **Review submission form** — logged-in users can rate and review products (`ReviewSubmissionForm` component)
- **Account/Profile page** — users can manage personal info, saved addresses, and account settings (`Account.tsx`)

---

## [1.3.0] — 2026-01-27

### Added
- **Backend infrastructure** (Lovable Cloud)
  - Database tables: `profiles`, `addresses`, `orders`, `order_items`, `product_reviews`, `newsletter_subscribers`, `wishlists`
  - Row Level Security (RLS) policies on all tables
- **Authentication system** — email/password signup & login with session persistence (`AuthContext`)
- Auth page (`Auth.tsx`) and Orders page (`Orders.tsx`)
- Google OAuth sign-in option

---

## [1.2.0] — 2026-01-12

### Added
- **Product reviews** display component with mock review data (`ProductReviews`)
- **Stock badge** component with availability indicators (`StockBadge`)
- `stock` field added to the `Product` interface with values populated across catalog

---

## [1.1.0] — 2026-01-06

### Added
- **Wishlist page** (`Wishlist.tsx`) with add-to-cart and clear-all functionality
- `clearWishlist` function in `WishlistContext`
- Functional hero section buttons (Shop Now / View Collection)
- SEO metadata via `react-helmet-async`

### Assessed
- Full app assessment identifying completed features and gaps for future development

---

## [1.0.0] — 2025-12-28

### Added
- **Shopping cart** with `CartContext`, localStorage persistence, and slide-out `CartDrawer`
- **Navigation header** with logo, category links, search, cart badge, and mobile hamburger menu
- **Checkout page** with shipping address form and order summary
- **Footer** with site links, social icons, and newsletter signup
- **Category filter** component
- **Product sorting** (featured, price, name, rating)
- Dark/light **theme toggle** (`ThemeContext`)
- **Newsletter** signup section

### Fixed
- Resolved crash caused by `CartDrawer` rendered outside `BrowserRouter`
- Recreated missing `CartContext` file

---

## [0.3.0] — 2025-12-30

### Added
- 10 new products with generated images (total: 48)
- `rating`, `reviewCount`, `originalPrice`, `isNew`, and `isBestseller` fields to Product interface
- Star rating display on product cards

---

## [0.2.0] — 2025-11-17

### Added
- **Product variants** — color and size selectors for 30+ products across all categories
- **Quantity selector** in product detail dialog
- **Related products** section in product detail dialog

---

## [0.1.0] — 2025-11-07

### Added
- **Product detail dialog** with image, description, price, tags, and category
- Expanded catalog to 38 products with generated images

### Fixed
- Product images not displaying due to incorrect Vite asset referencing — migrated from string paths to ES6 imports

---

## [0.0.1] — 2025-10-29

### Initial Release
- Project scaffolding with React 18, Vite 5, TypeScript, Tailwind CSS
- Hero section with brand messaging
- Product grid with category filtering
- 28 initial products across Mobile Tech, Smart Home, and Car Tech categories
- Responsive layout foundation
- Design system with electric blue accents, clean product cards, and smooth animations

---

*Developed collaboratively using the [Lovable](https://lovable.dev) AI development platform.*
