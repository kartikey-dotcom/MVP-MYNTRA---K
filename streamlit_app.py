import streamlit as st
import streamlit.components.v1 as components
import os
import re

# Streamlit Page Configuration
st.set_page_config(
    page_title="Myntra StyleStudio — Browse & Wishlist",
    page_icon="✨",
    layout="centered",
    initial_sidebar_state="collapsed"
)

# Custom Styling to hide default Streamlit branding & container padding
hide_streamlit_style = """
<style>
    #MainMenu {visibility: hidden;}
    footer {visibility: hidden;}
    header {visibility: hidden;}
    .block-container {
        padding-top: 0rem !important;
        padding-bottom: 0rem !important;
        padding-left: 0rem !important;
        padding-right: 0rem !important;
        max-width: 100% !important;
    }
    iframe {
        border-radius: 16px;
    }
</style>
"""
st.markdown(hide_streamlit_style, unsafe_allow_html=True)

# Read file contents safely
APP_DIR = os.path.dirname(os.path.abspath(__file__))

def read_file(relative_path):
    path = os.path.join(APP_DIR, relative_path)
    if os.path.exists(path):
        with open(path, "r", encoding="utf-8") as f:
            return f.read()
    return ""

design_tokens_css = read_file("css/design-tokens.css")
base_css = read_file("css/base.css")
stylestudio_css = read_file("css/stylestudio.css")

catalog_js = read_file("js/data/catalog.js")
pairings_js = read_file("js/data/pairings.js")
pairing_engine_js = read_file("js/data/pairingEngine.js")
store_js = read_file("js/state/store.js")
header_js = read_file("js/components/MyntraHeader.js")
wishlist_card_js = read_file("js/components/WishlistCard.js")
wishlist_grid_js = read_file("js/components/WishlistGrid.js")
browse_card_js = read_file("js/components/BrowseCard.js")
browse_view_js = read_file("js/components/BrowseView.js")
drawer_header_js = read_file("js/components/DrawerHeader.js")
occasion_nav_js = read_file("js/components/OccasionNav.js")
pairing_card_js = read_file("js/components/PairingCard.js")
toast_js = read_file("js/components/Toast.js")

# Clean JS code for browser inline execution
def clean_js(code):
    code = re.sub(r'import\s+.*?from\s+[\'"].*?[\'"];?', '', code)
    code = re.sub(r'\bexport\s+const\s+', 'const ', code)
    code = re.sub(r'\bexport\s+function\s+', 'function ', code)
    code = re.sub(r'\bexport\s+let\s+', 'let ', code)
    code = re.sub(r'\bexport\s+default\s+', '', code)
    code = re.sub(r'\bexport\s*\{[^}]*\};?', '', code)
    return code

catalog_clean = clean_js(catalog_js)
pairings_clean = clean_js(pairings_js)
pairing_engine_clean = clean_js(pairing_engine_js)
store_clean = clean_js(store_js)
header_clean = clean_js(header_js)
wishlist_card_clean = clean_js(wishlist_card_js)
wishlist_grid_clean = clean_js(wishlist_grid_js)
browse_card_clean = clean_js(browse_card_js)
browse_view_clean = clean_js(browse_view_js)
drawer_header_clean = clean_js(drawer_header_js)
occasion_nav_clean = clean_js(occasion_nav_js)
pairing_card_clean = clean_js(pairing_card_js)
toast_clean = clean_js(toast_js)

all_styles = "\n".join([
    design_tokens_css,
    base_css,
    stylestudio_css,
    """
    html, body {
        margin: 0;
        padding: 0;
        background-color: transparent;
        overflow-x: hidden;
    }
    .desktop-stage {
        min-height: 100vh;
        background: transparent;
        padding: 10px 0;
    }
    """
])

all_scripts = "\n\n".join([
    catalog_clean,
    pairings_clean,
    pairing_engine_clean,
    store_clean,
    header_clean,
    wishlist_card_clean,
    wishlist_grid_clean,
    browse_card_clean,
    browse_view_clean,
    drawer_header_clean,
    occasion_nav_clean,
    pairing_card_clean,
    toast_clean,
    """
    function renderStyleDrawer() {
        const drawerRoot = document.getElementById('drawer-root');
        if (!drawerRoot) return;

        const { isDrawerOpen, activeAnchorItem, selectedOccasionFilter } = store;
        if (!activeAnchorItem) {
            drawerRoot.innerHTML = '';
            return;
        }

        const pairings = getPairingsForAnchor(activeAnchorItem.id, selectedOccasionFilter);

        drawerRoot.innerHTML = `
            <div class="drawer-backdrop ${isDrawerOpen ? 'active' : ''}" id="style-drawer-backdrop" data-action="close-drawer"></div>
            <div class="drawer-container ${isDrawerOpen ? 'open' : ''}" id="style-drawer-body" role="dialog" aria-modal="true">
                ${renderDrawerHeaderHTML(activeAnchorItem)}
                ${renderOccasionNavHTML(activeAnchorItem.id, selectedOccasionFilter)}
                <div class="drawer-content-scroll" id="drawer-pairing-list">
                    ${pairings.map(p => renderPairingCardHTML(p, activeAnchorItem)).join('')}
                </div>
            </div>
        `;

        if (window.lucide) window.lucide.createIcons();
        setupDrawerEvents(drawerRoot);
    }

    function setupDrawerEvents(drawerRoot) {
        drawerRoot.onclick = (e) => {
            if (e.target.closest('[data-action="close-drawer"]')) {
                store.closeDrawer();
                return;
            }
            const filterBtn = e.target.closest('[data-action="filter-occasion"]');
            if (filterBtn) {
                const occasion = filterBtn.dataset.occasion;
                if (occasion) store.setOccasionFilter(occasion);
                return;
            }
            const saveBtn = e.target.closest('[data-action="toggle-save-pairing"]');
            if (saveBtn) {
                const pairingId = saveBtn.dataset.pairingId;
                if (pairingId && store.activeAnchorItem) {
                    const isNowSaved = store.toggleSavePairing(pairingId);
                    if (isNowSaved) {
                        showToast('Look saved!', 'Added to your saved styling looks ✨', 'success');
                    } else {
                        showToast('Look removed from saved', '', 'info');
                    }
                }
                return;
            }
        };
    }

    function renderApp() {
        renderHeader();
        if (store.activeTab === 'wishlist') {
            renderWishlistGrid();
        } else {
            renderBrowseView();
        }
        renderBottomNavBar();
        renderStyleDrawer();
    }

    document.addEventListener('DOMContentLoaded', () => {
        renderApp();
        store.subscribe(() => {
            renderApp();
        });
        if (window.lucide) window.lucide.createIcons();
    });

    renderApp();
    """
])

html_template = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>Myntra StyleStudio — Browse & Wishlist</title>
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <script src="https://unpkg.com/lucide@latest"></script>

  <style>
__STYLES_PLACEHOLDER__
  </style>
</head>
<body>
  <div class="desktop-stage">
    <main class="mobile-frame" id="app">
      <header class="myntra-header" id="header-container"></header>
      <section class="wishlist-viewport" id="wishlist-container" aria-label="Fashion Products"></section>
      <div id="drawer-root"></div>
      <div id="toast-root"></div>
    </main>
  </div>

  <script>
__SCRIPTS_PLACEHOLDER__
  </script>
</body>
</html>
"""

final_html = html_template.replace("__STYLES_PLACEHOLDER__", all_styles).replace("__SCRIPTS_PLACEHOLDER__", all_scripts)

components.html(final_html, height=890, scrolling=True)
