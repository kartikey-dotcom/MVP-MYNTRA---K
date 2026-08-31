import streamlit as st
import streamlit.components.v1 as components
import os
import re

# Streamlit Page Configuration - Wide desktop layout
st.set_page_config(
    page_title="Myntra StyleStudio — Desktop Experience",
    page_icon="🛍️",
    layout="wide",
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
        width: 100% !important;
        border: none !important;
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
pairing_engine_js = read_file("js/data/pairingEngine.js")
store_js = read_file("js/state/store.js")
header_js = read_file("js/components/MyntraHeader.js")
plp_js = read_file("js/components/ProductListingPage.js")
wishlist_card_js = read_file("js/components/WishlistCard.js")
wishlist_grid_js = read_file("js/components/WishlistGrid.js")
stylestudio_desktop_js = read_file("js/components/StyleStudioDesktop.js")
shopping_bag_drawer_js = read_file("js/components/ShoppingBagDrawer.js")
footer_js = read_file("js/components/Footer.js")
toast_js = read_file("js/components/Toast.js")

# Clean JS code for browser inline execution
def clean_js(code):
    code = re.sub(r'import\s+.*?from\s+[\'"].*?[\'"];?', '', code)
    code = re.sub(r'import\s+[\'"].*?[\'"];?', '', code)
    code = re.sub(r'\bexport\s+const\s+', 'const ', code)
    code = re.sub(r'\bexport\s+function\s+', 'function ', code)
    code = re.sub(r'\bexport\s+let\s+', 'let ', code)
    code = re.sub(r'\bexport\s+class\s+', 'class ', code)
    code = re.sub(r'\bexport\s+default\s+', '', code)
    code = re.sub(r'\bexport\s*\{[^}]*\};?', '', code)
    return code

catalog_clean = clean_js(catalog_js)
pairing_engine_clean = clean_js(pairing_engine_js)
store_clean = clean_js(store_js)
header_clean = clean_js(header_js)
plp_clean = clean_js(plp_js)
wishlist_card_clean = clean_js(wishlist_card_js)
wishlist_grid_clean = clean_js(wishlist_grid_js)
stylestudio_desktop_clean = clean_js(stylestudio_desktop_js)
shopping_bag_drawer_clean = clean_js(shopping_bag_drawer_js)
footer_clean = clean_js(footer_js)
toast_clean = clean_js(toast_js)

all_styles = "\n".join([
    design_tokens_css,
    base_css,
    stylestudio_css,
    """
    html, body {
        margin: 0;
        padding: 0;
        background-color: #FFFFFF;
        overflow-x: hidden;
    }
    """
])

all_scripts = "\n\n".join([
    catalog_clean,
    pairing_engine_clean,
    store_clean,
    header_clean,
    plp_clean,
    wishlist_card_clean,
    wishlist_grid_clean,
    stylestudio_desktop_clean,
    shopping_bag_drawer_clean,
    footer_clean,
    toast_clean,
    """
    function renderApp() {
        renderHeader();

        const workspace = document.getElementById('main-workspace-container');
        if (workspace) {
            if (['WISHLIST', 'STUDIO'].includes(store.currentView)) {
                workspace.innerHTML = `
                    <div class="desktop-content-container">
                        <section class="wishlist-column-section" id="wishlist-column-container" aria-label="My Wishlist"></section>
                        <section class="stylestudio-column-section" id="stylestudio-column-container" aria-label="StyleStudio Showcase"></section>
                    </div>
                `;
                renderWishlistGrid();
                renderStyleStudioDesktop();
            } else {
                renderProductListingPage();
            }
        }

        renderShoppingBagDrawer();
        renderFooter();

        if (window.lucide) window.lucide.createIcons();
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
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Online Shopping for Women, Men, Kids Fashion & Lifestyle - Myntra StyleStudio</title>
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Outfit:wght@500;600;700;800&display=swap" rel="stylesheet">
  <script src="https://unpkg.com/lucide@latest"></script>

  <style>
__STYLES_PLACEHOLDER__
  </style>
</head>
<body>

  <!-- Top Desktop Navigation Header Container -->
  <div id="header-container"></div>

  <!-- Dynamic Main Workspace (PLP or Wishlist + StyleStudio) -->
  <main class="desktop-main-wrapper" id="main-workspace-container">
  </main>

  <!-- Shopping Bag Slide-Over Drawer Container -->
  <div id="bag-drawer-root"></div>

  <!-- Footer Container -->
  <div id="footer-container"></div>

  <!-- Toast Notification Container -->
  <div id="toast-root"></div>

  <script>
__SCRIPTS_PLACEHOLDER__
  </script>
</body>
</html>
"""

final_html = html_template.replace("__STYLES_PLACEHOLDER__", all_styles).replace("__SCRIPTS_PLACEHOLDER__", all_scripts)

components.html(final_html, height=1200, scrolling=True)
