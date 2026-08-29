import streamlit as st
import streamlit.components.v1 as components
import os

# Streamlit Page Configuration
st.set_page_config(
    page_title="Myntra StyleStudio — Wishlist",
    page_icon="✨",
    layout="centered",
    initial_sidebar_state="collapsed"
)

# Hide default Streamlit headers/footer for an authentic app feel
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
        border-radius: 12px;
    }
</style>
"""
st.markdown(hide_streamlit_style, unsafe_allow_html=True)

# Read and inline the complete application HTML/CSS/JS for zero-dependency execution
APP_DIR = os.path.dirname(os.path.abspath(__file__))

def get_file_content(relative_path):
    path = os.path.join(APP_DIR, relative_path)
    if os.path.exists(path):
        with open(path, "r", encoding="utf-8") as f:
            return f.read()
    return ""

html_content = get_file_content("index.html")
design_tokens_css = get_file_content("css/design-tokens.css")
base_css = get_file_content("css/base.css")
stylestudio_css = get_file_content("css/stylestudio.css")

catalog_js = get_file_content("js/data/catalog.js")
pairings_js = get_file_content("js/data/pairings.js")
pairing_engine_js = get_file_content("js/data/pairingEngine.js")
store_js = get_file_content("js/state/store.js")
header_js = get_file_content("js/components/MyntraHeader.js")
style_btn_js = get_file_content("js/components/StyleButton.js")
wishlist_card_js = get_file_content("js/components/WishlistCard.js")
wishlist_grid_js = get_file_content("js/components/WishlistGrid.js")
drawer_header_js = get_file_content("js/components/DrawerHeader.js")
occasion_nav_js = get_file_content("js/components/OccasionNav.js")
outfit_canvas_js = get_file_content("js/components/OutfitCanvas.js")
styling_rationale_js = get_file_content("js/components/StylingRationale.js")
pairing_card_js = get_file_content("js/components/PairingCard.js")
toast_js = get_file_content("js/components/Toast.js")
app_js = get_file_content("js/app.js")

# Inlined Single-Page HTML for Streamlit Component rendering
inlined_html = f"""
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>Myntra StyleStudio — Wishlist</title>
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <script src="https://unpkg.com/lucide@latest"></script>

  <style>
    {design_tokens_css}
    {base_css}
    {stylestudio_css}
    
    /* Streamlit full-height fit */
    html, body {{
      margin: 0;
      padding: 0;
      background-color: transparent;
      overflow-x: hidden;
    }}
    .desktop-stage {{
      min-height: 100vh;
      background: transparent;
      padding: 10px 0;
    }}
  </style>
</head>
<body>
  <div class="desktop-stage">
    <main class="mobile-frame" id="app">
      <header class="myntra-header" id="header-container"></header>
      <section class="wishlist-viewport" id="wishlist-container" aria-label="Myntra Wishlist Items"></section>
      <div id="drawer-root"></div>
      <div id="toast-root"></div>
    </main>
  </div>

  <script type="module">
    // Inlined Modules
    {catalog_js.replace("export const ", "const ").replace("export {", "//")}
    {pairings_js.replace("export const ", "const ").replace("export {", "//")}
    {pairing_engine_js.replace("import { ALL_CATALOG_ITEMS } from './catalog.js';", "").replace("import { OUTFIT_PAIRINGS } from './pairings.js';", "").replace(/export /g, "")}
    {store_js.replace("import { ANCHOR_WISHLIST_ITEMS } from '../data/catalog.js';", "").replace(/export /g, "")}
    {header_js.replace(/export /g, "")}
    {style_btn_js.replace(/export /g, "")}
    {wishlist_card_js.replace(/import .*/g, "").replace(/export /g, "")}
    {wishlist_grid_js.replace(/import .*/g, "").replace(/export /g, "")}
    {drawer_header_js.replace(/import .*/g, "").replace(/export /g, "")}
    {occasion_nav_js.replace(/import .*/g, "").replace(/export /g, "")}
    {outfit_canvas_js.replace(/import .*/g, "").replace(/export /g, "")}
    {styling_rationale_js.replace(/import .*/g, "").replace(/export /g, "")}
    {pairing_card_js.replace(/import .*/g, "").replace(/export /g, "")}
    {toast_js.replace(/import .*/g, "").replace(/export /g, "")}
    
    function renderApp() {{
      renderHeader(store.wishlistItems.length);
      renderWishlistGrid();
      renderStyleDrawer();
    }}

    document.addEventListener('DOMContentLoaded', () => {{
      renderApp();
      store.subscribe(() => {{
        renderApp();
      }});
      if (window.lucide) window.lucide.createIcons();
    }});
    renderApp();
  </script>
</body>
</html>
"""

# Render full mobile application in Streamlit Component
components.html(inlined_html, height=890, scrolling=True)
