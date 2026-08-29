# TASK: Build the Functional MVP — Myntra "StyleStudio"

## READ FIRST — Instruction Discipline
Use this document as the literal, complete scope for what to build. Do not add features not listed here, even if they seem like natural or impressive extensions (e.g., no comparison tools, no synthetic-review detection, no seller dashboards, no price/discount mechanisms). If something feels missing, flag it as a question rather than inventing a solution. This project has twice previously suffered from unprompted scope additions — treat any impulse to add something not in this brief as a signal to stop, not proceed.

---

## 1. Problem Statement & Context
- **Target User:** Working professionals with genuine, high-conviction purchase intent (Myntra's AI discovery engine classification: `GENUINE_PURCHASE_INTENT`), whose wishlisted items stall indefinitely.
- **The Problem:** Users apply an implicit **"Rule of 3"** — an item only feels worth buying if they can picture at least 3 real occasions or outfit combinations it fits into. A single isolated, studio-lit product photo doesn't let them run this mental test. Instead of resolving this inside Myntra, users leave the app to build Pinterest moodboards, Instagram/Canva collages, or WhatsApp screenshot polls — and the item is frequently abandoned in the wishlist rather than purchased.
- **Significance:** This is Myntra's own AI discovery engine's #1-ranked friction cluster by Opportunity Score (777.6, nearly 2x the next-highest cluster), present in 38.4% of high-signal deliberations across a 20,000-record corpus, and independently confirmed across primary interviews using near-identical language ("Rule of 3," "wardrobe orphan fear," "does this work 3 ways").
- **Crucial Rule:** This is **not** a price problem. No monetary or discount mechanism may appear anywhere in this build.

---

## 2. Product Form Factor & UI Style
- **Form Factor:** Mobile web / embedded React component simulating the Myntra mobile app's wishlist view (`/wishlist`).
- **Aesthetic:** Match Myntra's real design language:
  - **Primary Brand Accent:** Myntra Coral/Pink (`#FF3F6C` or `#FF527B`)
  - **Background:** Crisp light (`#F5F5F6` and `#FFFFFF`)
  - **Typography:** Clean sans-serif, bold micro-labels, scannable tags
  - **Cards:** Rounded-xl, subtle borders, high visual density

---

## 3. Core Functional Requirements (MVP Scope)

### A. Wishlist Item Card — Entry Point
- Each item in the sample wishlist shows a small **"✨ Style This"** button/badge alongside the standard product card.

### B. StyleStudio Drawer
*(Opens on tap, stays in-flow — no full page navigation away from wishlist)*
For the selected wishlisted item, generate and display **2–3 complete outfit pairings**:
- **Pairing Composition:** Each pairing shows the wishlisted item + 1–2 complementary pieces (e.g., top + bottom + footwear), as product-card thumbnails from the sample catalog.
- **Occasion Tagging:** Each pairing is explicitly tagged to a real-life occasion (e.g., "Office," "Weekend Casual," "Evening Out") — mandatory mechanism answering the "Rule of 3" finding.
- **Styling Rationale:** Include a one-line rationale under each pairing (e.g., *"Smart-casual enough for the office, dresses down easily for evening"*) — genuinely useful styling logic, not filler text.

### C. Pairing Logic (The "AI" Layer)
- Use LLM-generated or rule-based curated pairing logic over the small sample catalog (Section 4) — matching by category compatibility, color coordination, and occasion tag.
- This does **NOT** require computer vision or real-time garment matching. A prompt-based or rule-based recommendation layer is sufficient and appropriate for this MVP's scope.
- Be honest in the UI if a pairing is a "suggested styling idea" rather than a guarantee — don't overclaim certainty.

### D. Primary Action
- Each pairing has a lightweight CTA: **"Love this look"** or **"Save this pairing"** — a simple positive-signal action, not a purchase-forcing dark pattern. (No "Buy Now" bundling required for MVP scope — the goal is resolving styling uncertainty, not forcing a bundle purchase.)

---

## 4. Mock Data Seed
Seed the prototype with a small, realistic, internally consistent sample catalog (5–10 items) across at least 2–3 categories (e.g., one blazer/top-wear anchor item + several bottoms + footwear options), so pairings look genuinely coherent rather than random.

### Example Anchor:
- **Mango Relaxed-Fit Linen Blazer (Rust, ₹4,200)** — pair with:
  1. *Tailored black trousers* (Office)
  2. *Straight-leg denim* (Weekend)
  3. *Midi skirt* (Evening Out)

*(Build 1–2 more anchor items with their own coherent pairing sets. Quality and internal consistency of a small set matters more than catalog size.)*

---

## 5. Explicit Non-Goals
- ❌ No comparison matrix, no fit/UGC height-filtering tool, no WhatsApp polling feature.
- ❌ No live Myntra backend/catalog integration.
- ❌ No pricing, discount, or coupon mechanism anywhere.
- ❌ No login/account system beyond what's needed to view the sample wishlist.

---

## 6. Implementation Stack
- **Framework:** React / Next.js, Tailwind CSS, mobile-first responsive.
- **Icons:** `lucide-react` (Heart, Sparkles, ArrowRight, X, Check).
- **Interactions:** Drawer open/close, pairing card display, "Save this pairing" state toggle.

---

## 7. Deployment & Acceptance Criteria
1. **Public Deployment:** Must be deployed to a public URL (Streamlit Cloud, Vercel, or equivalent) — not left running locally only.
2. **Cold Start Verification:** Test the deployed link after a period of inactivity before considering this done.
3. **End-to-End Flow:** A user must be able to:
   - Open the sample wishlist
   - Tap **"Style This"** on an item
   - See 2–3 occasion-tagged pairings with rationale
   - Save a pairing
   *(This full loop must work end-to-end with zero placeholder text).*
4. **No Pricing/Discount UI:** Zero discount badges or monetary checkout mechanics anywhere in the build.
5. **Dynamic/Sensible Pairing Logic:** Confirm the pairing logic varies meaningfully by item (different anchor items produce genuinely different, sensible pairings) rather than static generic output.
