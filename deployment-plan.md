# Deployment Plan — Myntra "StyleStudio" MVP

This document outlines the deployment strategy, environments, prerequisites, and step-by-step instructions for deploying **Myntra StyleStudio** to **Streamlit Cloud** and **Vercel / Static Cloud Hosting**.

---

## 🎯 Deployment Objectives
1. **Public Availability:** Must be deployed to a live, publicly accessible URL.
2. **Cold-Start Resilience:** Near-instantaneous initial load ($<2$s) with zero external database dependencies.
3. **Zero-Price Enforcement:** Ensure zero currency or checkout leaks exist in production.

---

## 🚀 Option 1: Streamlit Cloud Deployment (Recommended)

Streamlit Cloud allows 1-click zero-config deployment directly from your GitHub repository: [`https://github.com/kartikey-dotcom/MVP-MYNTRA---K.git`](https://github.com/kartikey-dotcom/MVP-MYNTRA---K.git).

### Step-by-Step Deployment Guide:
1. Navigate to [share.streamlit.io](https://share.streamlit.io/) and log in with your GitHub account.
2. Click **"Create app"** or **"New app"**.
3. Select your repository:
   - **Repository:** `kartikey-dotcom/MVP-MYNTRA---K`
   - **Branch:** `main`
   - **Main file path:** `streamlit_app.py`
4. Expand **Advanced settings** $\rightarrow$ **Secrets** (TOML format) and paste the configuration below.
5. Click **"Deploy!"**.

### Streamlit Secrets Configuration (TOML Format):
```toml
# =======================================================
# Streamlit Cloud Secrets — Myntra StyleStudio
# =======================================================

APP_NAME = "Myntra StyleStudio"
APP_DESCRIPTION = "Rule of 3 Styling Drawer for Myntra Wishlist"
APP_VERSION = "1.0.0"
NODE_ENV = "production"

# Feature Configuration
ENABLE_LOCAL_STORAGE_PERSISTENCE = true
ENABLE_RULE_OF_3_CONTEXT_BANNER = true

# Gemini AI API Configuration
GEMINI_API_KEY = "your-gemini-api-key-here"

[server]
port = 8501
enableCORS = false
enableXsrfProtection = true
```

---

## ⚡ Option 2: Vercel Static Hosting (1-Click)

1. Navigate to [vercel.com](https://vercel.com/) and click **"Add New Project"**.
2. Select the repository `kartikey-dotcom/MVP-MYNTRA---K`.
3. Set Framework Preset to **"Other"** (or Static).
4. Root Directory: `./`
5. Click **"Deploy"**.

*Automated routing and clean headers are pre-configured in [`vercel.json`](file:///c:/Users/DELL/OneDrive/Desktop/Krishna/Myntra%20MVP/vercel.json).*

---

## 🧪 Post-Deployment Verification Matrix

| Verification Item | Action | Pass Threshold |
|---|---|---|
| **Public URL Load** | Open the deployed link on mobile & desktop | Loads in $<2$s with zero console errors |
| **Cold Start Test** | Leave idle for 30 minutes and re-open | Full UI and catalog load immediately |
| **Drawer Animation** | Tap *"✨ Style This"* on Mango Linen Blazer | StyleStudio drawer slides up smoothly |
| **Rule of 3 Verification** | Check 3 occasion outfits & rationales | All 3 occasions (`Office`, `Weekend`, `Evening`) render |
| **Affirmation State** | Tap *"Love this look"* | Button updates to *"Saved ✓"*, toast appears, saved count increases |
