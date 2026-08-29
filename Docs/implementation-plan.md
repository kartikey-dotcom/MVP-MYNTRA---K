# Phase-Wise Implementation Plan — Myntra "StyleStudio" MVP

Based on [`problemstatement.md`](file:///c:/Users/DELL/OneDrive/Desktop/Krishna/Myntra%20MVP/problemstatement.md) and [`Docs/architecture.md`](file:///c:/Users/DELL/OneDrive/Desktop/Krishna/Myntra%20MVP/Docs/architecture.md).

---

## 🎯 Executive Overview & Scope Boundaries

StyleStudio is an in-flow styling drawer built for Myntra Wishlist shoppers with genuine purchase intent (`GENUINE_PURCHASE_INTENT`) who stall due to the **"Rule of 3"** (hesitating to buy because they cannot visualize 3 distinct occasions/outfits).

### Strict Non-Negotiables & Scope Discipline:
- ✅ **In-Flow Drawer:** Opens on tap over `/wishlist` without full-page navigation.
- ✅ **Rule of 3 Occasion Tagging:** 2–3 complete pairings per anchor, explicitly tagged to real-world occasions (`Office`, `Weekend Casual`, `Evening Out`) with genuine styling logic.
- ✅ **Affirmation Action:** Lightweight CTA (**"Love this look"** / **"Save this pairing"**) without purchase pressure.
- 🚫 **Zero Monetary/Pricing UI:** No prices, ₹ symbols, discounts, MRP strikethroughs, or checkout bundles anywhere.
- 🚫 **Zero Scope Creep:** No comparison tools, fit/UGC height filters, live catalog scraping, or WhatsApp polling.

---

## 📅 Phased Implementation Roadmap

```mermaid
gantt
    title StyleStudio MVP Implementation Phases
    dateFormat  X
    axisFormat %d
    section Setup & Data
    Phase 1: Project Setup & Mobile Shell        :p1, 0, 1
    Phase 2: Types, Seed Catalog & Engine Logic :p2, 1, 2
    section Core UI
    Phase 3: Wishlist View & "✨ Style This" CTA :p3, 2, 3
    Phase 4: StyleStudio Bottom Sheet Drawer    :p4, 3, 4
    Phase 5: Pairing Cards & Styling Rationale   :p5, 4, 5
    section Interactivity & Polish
    Phase 6: Affirmation State & Saved Pairings  :p6, 5, 6
    Phase 7: Verification, Zero-Price Audit & QA :p7, 6, 7
```

---

### 🔹 Phase 1: Project Foundation & Mobile Viewport Shell
**Goal:** Initialize a lightweight, high-performance React + TypeScript + Tailwind CSS project with a simulated Myntra mobile viewport.

- [x] **1.1 Project Initialization:**
  - Setup modern project structure with vanilla ES modules & Lucide icons.
  - Setup local development server (`server.py`).
- [x] **1.2 Design System Tokens & Base CSS:**
  - Configure Myntra color tokens:
    - Coral/Pink Primary: `#FF3F6C` (Hover: `#E02D59`, Light: `#FFF0F3`)
    - Surface Colors: `#FFFFFF` (Card/Drawer), `#F5F5F6` (Body background)
    - Borders: `#EAEAEC`
    - Text: `#282C3F` (Primary), `#7E818C` (Secondary), `#94969F` (Tertiary)
    - Success: `#03A685`
  - Setup typography (`Inter` clean sans-serif) and custom scrollbar utilities in `css/design-tokens.css` and `css/base.css`.
- [x] **1.3 Mobile Frame Container (`MobileFrame.js` & `MyntraHeader.js`):**
  - Implement a centered mobile viewport container (`max-w-[430px]` desktop stage container with responsive mobile adaptation).
  - Add Myntra-style top app header with back button, "WISHLIST" title, item count badge, search icon, and shopping bag icon.

**Milestone 1 Verification:**
- Clean mobile frame renders with authentic Myntra top bar and responsive layout. Verified via browser test.

---

### 🔹 Phase 2: TypeScript Models, Mock Data Seed & Pairing Engine
**Goal:** Implement data models, seed the realistic 11-item catalog, and build the deterministic pairing engine.

- [x] **2.1 Type Contracts (`js/types/index.js`):**
  - Define `OccasionType`, `ProductCategory`, `CatalogItem`, `WishlistItem`, `OutfitPairing`, and `StyleStudioState`.
- [x] **2.2 Curated Catalog Seed Data (`js/data/catalog.js`):**
  - Defined **3 Anchor Items**:
    1. *Mango Relaxed-Fit Linen Blazer* (Rust)
    2. *Zara Cropped Poplin Shirt* (Optic White)
    3. *H&M High-Waisted Tailored Wide Trousers* (Olive Green)
  - Defined **8 Complementary Pieces** (e.g., Tailored Black Trousers, Vintage Straight-Leg Denim, Champagne Slip Satin Midi Skirt, Pointed Leather Loafers, Minimalist White Sneakers, Heeled Mules, Chunky Penny Loafers, Halter Top).
  - High quality, realistic image URLs with zero placeholder text.
  - **Zero Price Fields:** Strictly verified and omitted from all data structures.
- [x] **2.3 Pairing Rules & Rationale Definition (`js/data/pairings.js`):**
  - Mapped each anchor item to 3 complete, occasion-tagged pairings (`Office`, `Weekend Casual`, `Evening Out`).
  - Professional, high-conviction styling rationales for each pairing explaining silhouette balance, fabric interplay, and versatility.
- [x] **2.4 Pairing Engine Helper (`js/data/pairingEngine.js`):**
  - Pure function to fetch, filter by occasion, and return curated outfit pairings for any given anchor item with anti-collision checks.

**Milestone 2 Verification:**
- Zero price audit passed, full catalog hydration tested, occasion matrix verified for all 3 anchors.

---

### 🔹 Phase 3: Wishlist View & "✨ Style This" Entry Point
**Goal:** Build the authentic Myntra wishlist grid and the interactive entry button for StyleStudio.

- [x] **3.1 Wishlist Grid Component (`js/components/WishlistGrid.js`):**
  - 2-column mobile responsive product grid (`grid grid-cols-2 gap-3 p-3`).
  - Rule of 3 Context Banner with Myntra pink gradient accent.
- [x] **3.2 Wishlist Product Card (`js/components/WishlistCard.js`):**
  - High-density Myntra card layout:
    - Product image with 3:4 aspect ratio.
    - Brand name (bold, uppercase, `text-xs`).
    - Product title (truncated).
    - Dismiss/remove 'X' icon button with smooth hover.
    - Fallback image error handling.
- [x] **3.3 "✨ Style This" Badge CTA (`js/components/StyleButton.js`):**
  - Positioned at the bottom of the product card thumbnail.
  - Styled with gradient shimmer, sparkle icon (`Sparkles` from `lucide-react`), and coral text accent.
  - Active hover/tap micro-animation (`scale-[0.98]`).
  - Connects click event to `openDrawer(item)` state action.
- [x] **3.4 Reactive Store (`js/state/store.js`):**
  - Global reactive store managing wishlist items, active anchor item, and saved pairings with localStorage sync.

**Milestone 3 Verification:**
- Wishlist displays 3 anchor items in realistic 2-column layout; tapping "✨ Style This" updates state cleanly; verified via browser tests with zero price symbols.

---

### 🔹 Phase 4: StyleStudio Bottom Sheet Drawer
**Goal:** Create the animated, in-flow bottom drawer modal with anchor item context.

- [x] **4.1 Global State Store (`js/state/store.js`):**
  - Manage `isDrawerOpen`, `activeAnchorItem`, `savedPairingIds`, and `selectedOccasionFilter`.
- [x] **4.2 Drawer Container & Backdrop (`js/components/StyleDrawer.js`):**
  - Animated bottom sheet with spring slide-up (`translate-y-0` on open, `translate-y-full` on close).
  - Backdrop overlay with blur effect (`bg-black/50 backdrop-blur-sm`).
  - Swipe handle bar and tap-outside / escape key to close.
- [x] **4.3 Drawer Header & Anchor Summary (`js/components/DrawerHeader.js`):**
  - Close 'X' button.
  - "StyleStudio ✨" header with "Rule of 3" subtext pill.
  - Mini sticky anchor summary thumbnail (Image + Brand + Item Name).
- [x] **4.4 Occasion Filter Pills (`js/components/OccasionNav.js`):**
  - Horizontal scrollable filter pills: `All Looks`, `Office`, `Weekend Casual`, `Evening Out` with dynamic counts.
  - Coral highlight badge for active filter.

**Milestone 4 Verification:**
- Tapping "✨ Style This" smoothly opens the drawer; active anchor item is clearly visible in the header; filters and close interactions function without full-page navigation. Verified via automated browser subagent.

---

### 🔹 Phase 5: Occasion Pairing Cards & Styling Rationales
**Goal:** Render the 2–3 complete outfit pairing combinations with visual garment layouts and clear styling rationales.

- [x] **5.1 Pairing Card (`js/components/PairingCard.js`):**
  - Card container with occasion pill badge (e.g., `💼 Office / Workwear`, `☕ Weekend Casual`, `🍸 Evening Out`).
  - Style confidence pill (*"Curated Look"*).
- [x] **5.2 Outfit Canvas & Garment Thumbnails (`js/components/OutfitCanvas.js`):**
  - Multi-item visual breakdown:
    - Anchor item thumbnail (labeled *"Your Piece"*)
    - `+` operator divider
    - 1–2 complementary piece thumbnails (e.g., Bottomwear + Footwear) with brand and garment name tags.
- [x] **5.3 Styling Rationale Callout (`js/components/StylingRationale.js`):**
  - Clean callout box (`bg-[#FFF8F9] border-l-2 border-[#FF3F6C] p-3 rounded-r-lg`).
  - *"Why this works:"* header with genuine, context-specific styling logic.
  - Honest framing tag: *"Suggested styling idea based on silhouette & palette balance"*.

**Milestone 5 Verification:**
- For each anchor item, drawer renders 2–3 occasion cards showcasing the complete outfit and high-conviction styling rationales; verified via browser subagent.

---

### 🔹 Phase 6: Affirmation Action & Saved Pairings State
**Goal:** Implement the lightweight, pressure-free "Save this pairing" / "Love this look" interaction loop.

- [x] **6.1 Save Pairing CTA Button (`js/components/PairingCard.js`):**
  - Secondary outlined button: `🤍 Love this look (Save Pairing)`.
  - State toggle on tap: morphs into filled active state: `💖 Saved to My Looks ✓` with smooth scale bounce.
  - Zero checkout or purchase-forcing mechanics.
- [x] **6.2 Toast Feedback Notification (`js/components/Toast.js`):**
  - Floating pill alert: *"Look saved! You now have [N] ways to wear this item."*
  - Re-enforces progress toward the "Rule of 3".
- [x] **6.3 Saved Pairings Indicator in Wishlist:**
  - When an item has saved pairings, update its wishlist badge to show *"✨ N Saved Looks"* to reinforce purchase conviction.
  - LocalStorage persistence across page reloads.

**Milestone 6 Verification:**
- Tapping "Save this pairing" updates the button state, fires celebratory toast confirmation, updates wishlist card badge, and persists across browser refreshes. Verified via browser subagent.

---

### 🔹 Phase 7: Polish, Quality Assurance & Deployment Verification
**Goal:** Conduct an exhaustive acceptance audit and prepare for public deployment.

- [x] **7.1 Zero-Price & Non-Goal Code Audit:**
  - Automated search/grep across all components for currency symbols (`₹`, `$`, `EUR`, `INR`), price numbers, discount `%`, "Buy Now", or "Add to Bag" buttons in StyleStudio.
  - Zero placeholder text found in codebase. Verified via `verify_mvp.py`.
- [x] **7.2 Multi-Item Variation Verification:**
  - Verified that opening StyleStudio on:
    - *Mango Linen Blazer* $\rightarrow$ shows rust-tailored pairings (Black trousers, denim, slip skirt).
    - *Zara Poplin Shirt* $\rightarrow$ shows crisp white shirt pairings (Khaki wide-leg, denim shorts, pleated maxi).
    - *H&M Tailored Trousers* $\rightarrow$ shows olive trouser pairings (Mock-neck knit, graphic tee, black halter).
- [x] **7.3 Responsive & Performance Polish:**
  - Centered mobile simulator (`max-w-[430px]`) and fluid native mobile viewports.
  - Touch targets $>44$px, smooth 60fps animations.
- [x] **7.4 Deployment Configuration (`vercel.json`, `package.json`, `README.md`):**
  - Added zero-config deployment setup for Vercel, Netlify, and static cloud hosts.

---

## ✅ Acceptance Criteria & Verification Matrix

| Step | User Action | Expected System Behavior | Status Check |
|---|---|---|---|
| **1** | Open `/wishlist` | Mobile wishlist renders with 3 curated anchor items in Myntra coral theme. | [x] |
| **2** | Inspect product cards | Each card displays clear product photo, brand, title, and **"✨ Style This"** button. No prices. | [x] |
| **3** | Tap **"✨ Style This"** on Mango Blazer | Bottom sheet drawer slides up smoothly without full page reload. | [x] |
| **4** | Inspect Drawer Content | Displays 3 occasion-tagged cards: `Office`, `Weekend Casual`, `Evening Out` with multi-garment pairings. | [x] |
| **5** | Read Styling Rationales | Shows realistic, actionable styling advice for each occasion with zero placeholder copy. | [x] |
| **6** | Filter by Occasion | Tapping `Office` filters drawer list to only office pairing. | [x] |
| **7** | Tap **"Save this pairing"** | CTA updates to `Saved ✓`, toast confirms *"Look saved!"*, state is preserved. | [x] |
| **8** | Switch Anchor Item | Opening StyleStudio on *Zara Poplin Shirt* displays completely different, shirt-specific pairings. | [x] |
| **9** | Price Check Audit | Absolute zero pricing, discount, or checkout elements found in any view. | [x] |
