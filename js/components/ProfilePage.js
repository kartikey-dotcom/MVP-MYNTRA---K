/**
 * Myntra Desktop Profile Page Component
 * Renders full account overview, editable personal details, orders history,
 * delivery addresses, saved StyleStudio pairings, and Myntra Insider rewards.
 */

import { store } from '../state/store.js';
import { showToast } from './Toast.js';

export function renderProfilePage() {
  const container = document.getElementById('main-workspace-container');
  if (!container) return;

  const { userProfile, activeProfileTab, orders, addresses, coupons } = store;
  const wishlistCount = store.wishlistItems.length;
  const bagCount = store.getBagCount();

  container.innerHTML = `
    <div class="profile-page-wrapper">
      
      <!-- Top Breadcrumbs Bar -->
      <div class="profile-breadcrumb-bar">
        <div class="plp-breadcrumbs">
          <a href="#" data-action="nav-home">Home</a>
          <span class="crumb-separator">/</span>
          <span class="crumb-active">My Account</span>
        </div>
        <div class="profile-page-header-row">
          <h1 class="profile-main-title">Account Overview</h1>
          <div class="insider-vip-pill">
            <i data-lucide="sparkles" style="width: 13px; height: 13px; fill: #D5A118; color: #D5A118;"></i>
            <span>${userProfile.insiderTier} • ${userProfile.insiderPoints} SuperCoins</span>
          </div>
        </div>
      </div>

      <!-- Main Profile 2-Column Layout -->
      <div class="profile-layout-grid">
        
        <!-- Left Navigation Sidebar -->
        <aside class="profile-sidebar-nav">
          
          <!-- User Info Mini Header -->
          <div class="sidebar-user-card">
            <img src="${userProfile.avatarUrl}" alt="${userProfile.fullName}" class="sidebar-user-avatar" />
            <div class="sidebar-user-meta">
              <span class="sidebar-user-name">${userProfile.fullName}</span>
              <span class="sidebar-user-email">${userProfile.email}</span>
            </div>
          </div>

          <!-- Navigation Links List -->
          <nav class="profile-nav-list">
            
            <div class="nav-section-title">ACCOUNT</div>
            <button class="profile-nav-btn ${activeProfileTab === 'overview' ? 'active' : ''}" data-action="switch-tab" data-tab="overview">
              <i data-lucide="user"></i>
              <span>Profile Details</span>
            </button>
            <button class="profile-nav-btn ${activeProfileTab === 'addresses' ? 'active' : ''}" data-action="switch-tab" data-tab="addresses">
              <i data-lucide="map-pin"></i>
              <span>Saved Addresses</span>
            </button>
            <button class="profile-nav-btn ${activeProfileTab === 'coupons' ? 'active' : ''}" data-action="switch-tab" data-tab="coupons">
              <i data-lucide="ticket"></i>
              <span>Coupons & Perks</span>
            </button>

            <div class="nav-section-title">ORDERS & STYLE</div>
            <button class="profile-nav-btn ${activeProfileTab === 'orders' ? 'active' : ''}" data-action="switch-tab" data-tab="orders">
              <i data-lucide="package"></i>
              <span>Orders & Returns</span>
              ${orders.length > 0 ? `<span class="nav-badge-count">${orders.length}</span>` : ''}
            </button>
            <button class="profile-nav-btn ${activeProfileTab === 'stylestudio-looks' ? 'active' : ''}" data-action="switch-tab" data-tab="stylestudio-looks">
              <i data-lucide="sparkles"></i>
              <span>StyleStudio Looks</span>
            </button>
            <button class="profile-nav-btn ${activeProfileTab === 'insider' ? 'active' : ''}" data-action="switch-tab" data-tab="insider">
              <i data-lucide="crown"></i>
              <span>Myntra Insider VIP</span>
            </button>

            <div class="nav-section-title">QUICK ACCESS</div>
            <button class="profile-nav-btn" data-action="go-to-wishlist">
              <i data-lucide="heart" style="color: var(--myntra-crimson);"></i>
              <span>Wishlist (${wishlistCount})</span>
            </button>
            <button class="profile-nav-btn" data-action="open-bag-drawer">
              <i data-lucide="shopping-bag"></i>
              <span>Shopping Bag (${bagCount})</span>
            </button>

          </nav>
        </aside>

        <!-- Right Main Panel Content -->
        <main class="profile-main-panel">
          
          <!-- TAB 1: Profile Details Overview -->
          ${activeProfileTab === 'overview' ? `
            <div class="profile-panel-card">
              <div class="panel-card-header">
                <h3 class="panel-card-title">Profile Details</h3>
                <span class="panel-card-sub">Manage your personal information and delivery preferences</span>
              </div>

              <form id="profile-edit-form" class="profile-form-grid">
                <div class="form-group">
                  <label class="form-label" for="input-fullname">Full Name</label>
                  <input type="text" id="input-fullname" class="form-input" value="${userProfile.fullName}" required />
                </div>

                <div class="form-group">
                  <label class="form-label" for="input-email">Email Address</label>
                  <input type="email" id="input-email" class="form-input" value="${userProfile.email}" required />
                </div>

                <div class="form-group">
                  <label class="form-label" for="input-mobile">Mobile Number</label>
                  <input type="text" id="input-mobile" class="form-input" value="${userProfile.mobile}" required />
                </div>

                <div class="form-group">
                  <label class="form-label" for="input-dob">Date of Birth</label>
                  <input type="date" id="input-dob" class="form-input" value="${userProfile.dob}" />
                </div>

                <div class="form-group full-width">
                  <label class="form-label">Gender</label>
                  <div class="form-radio-row">
                    <label class="gender-radio-pill">
                      <input type="radio" name="gender" value="Female" ${userProfile.gender === 'Female' ? 'checked' : ''} />
                      <span>Female</span>
                    </label>
                    <label class="gender-radio-pill">
                      <input type="radio" name="gender" value="Male" ${userProfile.gender === 'Male' ? 'checked' : ''} />
                      <span>Male</span>
                    </label>
                    <label class="gender-radio-pill">
                      <input type="radio" name="gender" value="Other" ${userProfile.gender === 'Other' ? 'checked' : ''} />
                      <span>Other</span>
                    </label>
                  </div>
                </div>

                <div class="form-group full-width">
                  <label class="form-label" for="input-location">Location / City</label>
                  <input type="text" id="input-location" class="form-input" value="${userProfile.location}" />
                </div>

                <div class="form-submit-row full-width">
                  <button type="submit" class="btn-save-profile">
                    <i data-lucide="check" style="width: 16px; height: 16px;"></i>
                    <span>SAVE DETAILS</span>
                  </button>
                </div>
              </form>
            </div>
          ` : ''}

          <!-- TAB 2: Orders & Returns -->
          ${activeProfileTab === 'orders' ? `
            <div class="profile-panel-card">
              <div class="panel-card-header">
                <h3 class="panel-card-title">All Orders</h3>
                <span class="panel-card-sub">Track current shipments and view previous purchase receipts</span>
              </div>

              <div class="orders-list-stack">
                ${orders.map(order => `
                  <div class="order-history-card">
                    <div class="order-card-header">
                      <div class="order-meta-info">
                        <span class="order-id-tag">Order #${order.orderId}</span>
                        <span class="order-date-text">Placed on ${order.orderDate}</span>
                      </div>
                      <div class="order-status-badge">
                        <span class="status-dot">●</span>
                        <span>${order.status}</span>
                      </div>
                    </div>

                    <div class="order-items-row">
                      ${order.items.map(item => `
                        <div class="order-item-chip">
                          <img src="${item.image}" alt="${item.name}" class="order-item-thumb" />
                          <div class="order-item-desc">
                            <span class="order-item-brand">${item.brand}</span>
                            <span class="order-item-title">${item.name}</span>
                            <span class="order-item-size">Size: ${item.size} • ₹${item.price.toLocaleString('en-IN')}</span>
                          </div>
                        </div>
                      `).join('')}
                    </div>

                    <div class="order-card-footer">
                      <span class="order-total-price">Total Amount: <strong>₹${order.totalAmount.toLocaleString('en-IN')}</strong></span>
                      <div class="order-btn-group">
                        <button class="btn-order-action" data-action="track-order" data-order-id="${order.orderId}">Track Package</button>
                        <button class="btn-order-action primary" data-action="reorder-look">Style Again →</button>
                      </div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <!-- TAB 3: Saved Addresses -->
          ${activeProfileTab === 'addresses' ? `
            <div class="profile-panel-card">
              <div class="panel-card-header flex-between">
                <div>
                  <h3 class="panel-card-title">Saved Delivery Addresses</h3>
                  <span class="panel-card-sub">Manage default home and office shipping locations</span>
                </div>
                <button class="btn-add-address" data-action="show-add-address">
                  <i data-lucide="plus" style="width: 14px; height: 14px;"></i>
                  <span>ADD NEW ADDRESS</span>
                </button>
              </div>

              <div class="addresses-grid">
                ${addresses.map(addr => `
                  <div class="address-card ${addr.isDefault ? 'is-default' : ''}">
                    <div class="address-card-header">
                      <div class="address-tag-row">
                        <span class="address-type-badge">${addr.type}</span>
                        ${addr.isDefault ? '<span class="address-default-badge">DEFAULT</span>' : ''}
                      </div>
                      <button class="btn-delete-address" data-action="delete-address" data-id="${addr.id}" title="Delete Address">
                        <i data-lucide="trash-2" style="width: 15px; height: 15px;"></i>
                      </button>
                    </div>

                    <h4 class="address-recipient-name">${addr.name}</h4>
                    <p class="address-street-text">${addr.addressLine}</p>
                    <p class="address-city-text">${addr.city}, ${addr.state} - ${addr.pincode}</p>
                    <p class="address-phone-text">Mobile: <strong>${addr.mobile}</strong></p>

                    ${!addr.isDefault ? `
                      <button class="btn-set-default" data-action="set-default-address" data-id="${addr.id}">
                        Set as Default Address
                      </button>
                    ` : ''}
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <!-- TAB 4: StyleStudio Saved Looks -->
          ${activeProfileTab === 'stylestudio-looks' ? `
            <div class="profile-panel-card">
              <div class="panel-card-header">
                <h3 class="panel-card-title">StyleStudio AI Showcase</h3>
                <span class="panel-card-sub">Your unlocked 3-way pairings and occasion verified combinations</span>
              </div>

              <div class="saved-looks-grid">
                <div class="stylestudio-promo-card" data-action="go-to-stylestudio">
                  <div class="promo-sparkle-icon">
                    <i data-lucide="sparkles" style="width: 28px; height: 28px; color: var(--myntra-crimson);"></i>
                  </div>
                  <h4>Rule of 3 Styling Matrix Active</h4>
                  <p>Wishlist any piece from Women, Men, Kids, Beauty or Home to instantly generate 3 occasion outfits.</p>
                  <button class="btn-launch-stylestudio">Open StyleStudio Canvas →</button>
                </div>
              </div>
            </div>
          ` : ''}

          <!-- TAB 5: Myntra Insider VIP -->
          ${activeProfileTab === 'insider' ? `
            <div class="profile-panel-card">
              <div class="panel-card-header">
                <div class="insider-crown-title">
                  <i data-lucide="crown" style="width: 22px; height: 22px; color: #D5A118;"></i>
                  <h3 class="panel-card-title">Myntra Insider Club</h3>
                </div>
                <span class="panel-card-sub">Earn SuperCoins on every fashion styling purchase</span>
              </div>

              <div class="insider-tier-card">
                <div class="tier-header-row">
                  <div>
                    <span class="tier-subtitle">CURRENT TIER</span>
                    <h2 class="tier-title">${userProfile.insiderTier}</h2>
                  </div>
                  <div class="coins-balance-bubble">
                    <span class="coins-num">${userProfile.insiderPoints}</span>
                    <span class="coins-sub">SuperCoins</span>
                  </div>
                </div>

                <div class="tier-progress-bar-wrap">
                  <div class="tier-progress-fill" style="width: 85%;"></div>
                </div>
                <span class="tier-progress-label">150 more SuperCoins to unlock <strong>Elite VIP Tier</strong></span>
              </div>

              <div class="insider-benefits-grid">
                <div class="benefit-item">
                  <i data-lucide="truck" style="color: var(--myntra-crimson);"></i>
                  <h4>Free Priority Delivery</h4>
                  <p>Zero shipping charge on all complete look bundles.</p>
                </div>
                <div class="benefit-item">
                  <i data-lucide="sparkles" style="color: var(--myntra-crimson);"></i>
                  <h4>StyleStudio Early Drop</h4>
                  <p>Preview designer pairings 24 hours before public drop.</p>
                </div>
                <div class="benefit-item">
                  <i data-lucide="gift" style="color: var(--myntra-crimson);"></i>
                  <h4>Birthday Surprises</h4>
                  <p>Exclusive ₹1,000 gift voucher on your special day.</p>
                </div>
              </div>
            </div>
          ` : ''}

          <!-- TAB 6: Coupons & Perks -->
          ${activeProfileTab === 'coupons' ? `
            <div class="profile-panel-card">
              <div class="panel-card-header">
                <h3 class="panel-card-title">Coupons & Special Discounts</h3>
                <span class="panel-card-sub">Apply these codes during checkout for instant savings</span>
              </div>

              <div class="coupons-list-stack">
                ${coupons.map(cpn => `
                  <div class="coupon-ticket-card">
                    <div class="coupon-left-badge">
                      <span class="coupon-discount-text">${cpn.discount}</span>
                    </div>
                    <div class="coupon-middle-info">
                      <span class="coupon-code-pill">${cpn.code}</span>
                      <p class="coupon-desc-text">${cpn.desc}</p>
                      <span class="coupon-expiry-text">Expires on: ${cpn.expiry}</span>
                    </div>
                    <button class="btn-copy-code" data-action="copy-coupon" data-code="${cpn.code}">
                      COPY CODE
                    </button>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}

        </main>
      </div>

    </div>
  `;

  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Event Delegation for Profile Page
  container.onclick = (e) => {
    // 1. Switch Active Profile Tab
    const tabBtn = e.target.closest('[data-action="switch-tab"]');
    if (tabBtn) {
      store.setProfileTab(tabBtn.dataset.tab);
      return;
    }

    // 2. Go to Wishlist
    if (e.target.closest('[data-action="go-to-wishlist"]')) {
      store.setCurrentView('WISHLIST');
      return;
    }

    // 3. Open Bag
    if (e.target.closest('[data-action="open-bag-drawer"]')) {
      store.toggleBag(true);
      return;
    }

    // 4. Go to StyleStudio
    if (e.target.closest('[data-action="go-to-stylestudio"]')) {
      store.setCurrentView('WISHLIST');
      return;
    }

    // 5. Breadcrumb Home
    if (e.target.closest('[data-action="nav-home"]')) {
      store.setCurrentView('WOMEN');
      return;
    }

    // 6. Set Default Address
    const defAddrBtn = e.target.closest('[data-action="set-default-address"]');
    if (defAddrBtn) {
      store.setDefaultAddress(defAddrBtn.dataset.id);
      showToast('Default Address Updated 📍', 'New primary delivery destination set.', 'success');
      return;
    }

    // 7. Delete Address
    const delAddrBtn = e.target.closest('[data-action="delete-address"]');
    if (delAddrBtn) {
      store.deleteAddress(delAddrBtn.dataset.id);
      showToast('Address Removed', 'Address removed from your address book.', 'info');
      return;
    }

    // 8. Copy Coupon
    const copyBtn = e.target.closest('[data-action="copy-coupon"]');
    if (copyBtn) {
      const code = copyBtn.dataset.code;
      navigator.clipboard?.writeText(code);
      showToast('Coupon Code Copied! 🎟️', `Code ${code} copied to clipboard.`, 'success');
      return;
    }

    // 9. Reorder Look
    if (e.target.closest('[data-action="reorder-look"]')) {
      store.setCurrentView('WISHLIST');
      showToast('Opening StyleStudio ✨', 'Ready to style your look.', 'success');
      return;
    }

    // 10. Track Order
    const trackBtn = e.target.closest('[data-action="track-order"]');
    if (trackBtn) {
      showToast('Package Tracking 🚚', `Order #${trackBtn.dataset.orderId} is safely delivered to Bengaluru address.`, 'info');
      return;
    }

    // 11. Add Address Trigger
    if (e.target.closest('[data-action="show-add-address"]')) {
      const newCity = prompt('Enter City:', 'Bengaluru');
      const newStreet = prompt('Enter Street Address:', 'MG Road, Central Residency');
      if (newCity && newStreet) {
        store.addAddress({
          name: store.userProfile.fullName,
          type: 'OTHER',
          addressLine: newStreet,
          city: newCity,
          state: 'Karnataka',
          pincode: '560001',
          mobile: store.userProfile.mobile
        });
        showToast('Address Added 📍', 'New shipping address added to your address book.', 'success');
      }
      return;
    }
  };

  // Profile Edit Form Submit Handler
  const profileForm = container.querySelector('#profile-edit-form');
  if (profileForm) {
    profileForm.onsubmit = (e) => {
      e.preventDefault();
      const fullName = container.querySelector('#input-fullname')?.value || userProfile.fullName;
      const email = container.querySelector('#input-email')?.value || userProfile.email;
      const mobile = container.querySelector('#input-mobile')?.value || userProfile.mobile;
      const dob = container.querySelector('#input-dob')?.value || userProfile.dob;
      const location = container.querySelector('#input-location')?.value || userProfile.location;
      const gender = container.querySelector('input[name="gender"]:checked')?.value || userProfile.gender;

      store.updateUserProfile({
        fullName,
        email,
        mobile,
        dob,
        location,
        gender
      });

      showToast('Profile Saved! ✨', 'Your personal details and preferences have been updated.', 'success');
    };
  }
}
