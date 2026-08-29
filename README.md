# Myntra StyleStudio — Functional MVP

> Solving the **"Rule of 3"** Wishlist Hesitation Barrier for High-Intent Shoppers.

![Myntra StyleStudio](https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1200&q=80)

---

## 🎯 Executive Overview

Shoppers with genuine, high-conviction purchase intent (`GENUINE_PURCHASE_INTENT`) frequently stall on wishlisted items due to the **"Rule of 3"** — an implicit cognitive friction where an item only feels worth purchasing if the shopper can envision at least **3 distinct, real-world outfit combinations or occasions** it fits into.

Instead of resolving this within the app, shoppers previously left Myntra to build moodboards (Pinterest, Canva) or WhatsApp screenshot polls, leading to wishlist abandonment.

**StyleStudio** directly resolves this friction in-flow inside the Wishlist without full-page navigation.

---

## ✨ Key Features & Scope Boundaries

### 1. In-Flow Entry Point
- Each wishlist card features an animated **"✨ Style This"** pill badge.
- Tapping opens the **StyleStudio Drawer** as a bottom sheet modal over `/wishlist` with smooth backdrop blur.

### 2. The "Rule of 3" Outfit Canvas
- Dynamically renders **2–3 complete occasion pairings** per anchor item:
  - **💼 Office / Workwear**
  - **☕ Weekend Casual**
  - **🍸 Evening Out**
- Multi-piece visual canvas (`Your Piece` anchor thumbnail + `+` divider + 1–2 complementary pieces) with brand and silhouette tags.

### 3. Actionable Styling Rationales
- Contextual *"Why this works"* callout box explaining silhouette balance, texture interplay, and versatility with zero filler copy.
- Transparent styling framing (*"Suggested styling idea based on silhouette & palette balance"*).

### 4. Pressure-Free Affirmation Action
- Lightweight **"Love this look (Save Pairing)"** CTA button that morphs into active **"Saved to My Looks ✓"**.
- Floating notification toast providing instant positive reinforcement of progress toward the **Rule of 3**.
- State persistence across page reloads via `localStorage`.

### 5. Strict Zero-Price & Non-Goal Compliance
- 🚫 **Zero Monetary / Pricing UI:** No prices, ₹ symbols, discounts, MRP strikethroughs, or checkout buttons.
- 🚫 **Zero Scope Creep:** No comparison tools, fit/UGC height filters, live catalog scraping, or WhatsApp polling.

---

## 🚀 Quickstart & Local Execution

### Prerequisites
- Python 3.x (or any static web server)

### 1. Clone & Navigate
```bash
cd "Myntra MVP"
```

### 2. Start the Development Server
```bash
python server.py
# OR
npm start
```
Open **`http://localhost:3000`** in your browser.

### 3. Run Automated Acceptance Tests
```bash
python verify_mvp.py
```

---

## 📁 Repository Structure

```text
├── index.html               # Main viewport shell & mounting point
├── server.py                # Zero-cache local development server
├── verify_mvp.py            # Automated audit & compliance test suite
├── vercel.json              # 1-Click zero-config static deployment configuration
├── package.json             # Project metadata and npm scripts
├── problemstatement.md      # Ground truth problem brief & scope rules
├── architecture.md          # Architectural blueprints & data models
├── implementation-plan.md   # Phased execution plan & checklist
├── edge-case.md             # Edge case taxonomy & failure mitigations
├── .env.example             # Environment configuration template
├── .env                     # Local environment settings
├── css/
│   ├── design-tokens.css    # Myntra coral color tokens, typography & shadows
│   ├── base.css             # Mobile frame container & header styles
│   └── stylestudio.css      # Drawer, outfit canvas & animation styles
└── js/
    ├── app.js               # Main application entry point
    ├── state/
    │   └── store.js         # Reactive state store & localStorage sync
    ├── data/
    │   ├── catalog.js       # Curated 11-piece seed catalog (zero prices)
    │   ├── pairings.js      # Occasion-tagged pairing definitions & rationales
    │   └── pairingEngine.js # Deterministic pairing lookup & hydration
    ├── types/
    │   └── index.js         # JSDoc type contracts & schemas
    └── components/
        ├── MyntraHeader.js  # Top wishlist navigation bar
        ├── WishlistGrid.js  # 2-column wishlist grid & context banner
        ├── WishlistCard.js  # Product card with Style This CTA
        ├── StyleButton.js   # "✨ Style This" animated badge
        ├── StyleDrawer.js   # In-flow bottom sheet drawer container
        ├── DrawerHeader.js  # Header with anchor summary mini card
        ├── OccasionNav.js   # Occasion filter navigation tabs
        ├── OutfitCanvas.js  # Multi-garment visual layout
        ├── StylingRationale.js # "Why this works" callout box
        ├── PairingCard.js   # Occasion pairing combination card
        └── Toast.js         # Progress toast notification
```

---

## 🌐 Public Deployment

This project is built with standard modern HTML5 / CSS3 / ES Modules and can be deployed directly to **Vercel**, **Netlify**, or **GitHub Pages** with zero build configuration:

### Deploy to Vercel (CLI)
```bash
vercel
```
*Configured via `vercel.json`.*

---

## 📄 License & Attribution
Developed for the **Myntra StyleStudio MVP** initiative. All fashion assets curated from high-resolution fashion archives with zero commercial dependency.
