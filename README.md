# Classic Dairy Farm Ltd — Front-End Web Application
**Location:** Nkubu, Meru County, Kenya  
**Contact:** +254 729 770114 | Mon – Sat: 7:00 AM – 6:00 PM  
**Google Maps Verified Rating:** 4.7 ★ (23 reviews)  

---

## 1. Overview & Architecture

Classic Dairy Farm Ltd is an established modern zero-grazing dairy farm and practical training center situated in **Nkubu, Meru County, Kenya**. 

This repository contains the complete **Phase 1 front-end application**, built with **React 19 + Vite + Vanilla CSS Design Tokens**. The application directly resolves the eight primary digital and operational discovery weaknesses faced by the agribusiness, providing an engaging user experience, instant WhatsApp commerce integrations, simulated M-Pesa Daraja STK push reservations, and educational technical dairy guides for Mount Kenya farmers.

---

## 2. Business Weaknesses & Front-End Solutions

| # | Business Weakness | How This Site Solves It | Key Component / Page |
|---|-------------------|-------------------------|----------------------|
| **1** | Only findable on Maps | Local and regional SEO with `LocalBusiness` and `Product` JSON-LD schema, Meru/Nkubu keywords, Google Business Profile deep links, and Learn section articles. | `index.html`, `HomePage.jsx`, `Footer.jsx` |
| **2** | In-person questions with no online answers | 24/7 Dairy Advice & Knowledge Base (feeding & TMR, breeds, zero-grazing housing, mastitis control, silage making) + "Ask the Farm" direct question submission form with WhatsApp shortcut. | `DairyAdvicePage.jsx`, `AskFarmModal.jsx` |
| **3** | No product list, prices or availability | 24/7 Catalogue featuring fresh chilled whole milk, traditional fermented mala, silage bales, and hay with KES prices, pack sizes, and availability badges. | `ProductsPage.jsx`, `ProductCard.jsx`, `ProductModal.jsx` |
| **4** | No way to book farm visits or pay deposits | Interactive booking flow for Masterclasses and Tours with date picker, group size calculator, KES 500 reservation deposit UI, M-Pesa STK push simulation, and printable pass with Nkubu driving directions. | `VisitsPage.jsx`, `BookingModal.jsx` |
| **5** | Strong reviews unused for marketing | Google Reviews spotlight displaying the verified 4.7★ rating from 23 reviews, authentic quote breakdowns, direct link to Google Maps, and review prompt modal. | `HomePage.jsx`, `ReviewModal.jsx`, `TrustStrip` |
| **6** | Lost orders and unanswered inquiries | Unified cart checkout flow, sticky floating WhatsApp widget with dynamic pre-filled messages per product/service, and a visible 15-minute response promise badge. | `CartCheckoutPage.jsx`, `WhatsAppSticky.jsx`, `Navbar.jsx` |
| **7** | Inability to reach commercial bulk buyers | Dedicated Wholesale & B2B page with interactive quote calculator (volume, frequency, location), cold-chain quality guarantee, and regional delivery schedule table across Meru County. | `WholesalePage.jsx` |
| **8** | No customer list for repeat sales | "Classic Dairy Club" signup offering KES 100 first-order voucher (`CLASSIC100`), free 24-page Mount Kenya Dairy Guide (PDF), and a 1-click Quick Re-Order shortcut for returning milk buyers. | `ClubSignupModal.jsx`, `Navbar.jsx`, `CartCheckoutPage.jsx` |

---

## 3. Design System & Tokens

The design strictly follows the dark green and sky-blue palette specified in the design requirements:

- **Page Background:** `#07130E` (Primary dark canvas)
- **Alternate Section Background:** `#0B1F17`
- **Card Background:** `#0F2A1F` with 1px border `#1E4D38` (Hover border: `#2E6B4F`)
- **Primary Brand Green:** `#22C55E` (Hover `#16A34A`), Deep green: `#14532D`
- **Sky Blue Accents:** `#38BDF8` (Hover `#7DD3FC`) for links, badges, focus rings, and glowing highlights
- **Brand Gradient:** `linear-gradient(135deg, #14532D, #22C55E 50%, #38BDF8)`
- **Typography:**
  - Headings: `Plus Jakarta Sans` (Display serif/sans-serif with high legibility)
  - Body: `Inter` (Clean geometric sans-serif)
- **Spacing Scale:** Standard 8px scale (`--space-1`: 8px, `--space-2`: 16px, `--space-3`: 24px, `--space-4`: 32px, `--space-6`: 48px, `--space-8`: 64px, etc.)
- **Accessibility:** WCAG AA contrast compliance across all text layers, visible focus rings, and `prefers-reduced-motion` support.

---

## 4. Owner Details & Placeholders to Replace

To uphold the strict requirement of **never inventing unverified facts**, all unconfirmed details have been marked with prominent placeholders in both code and UI:

| Item | Current Status | Code Location | Action Required by Owner |
|---|---|---|---|
| **Retail Product Prices** | Marked as `[Add real price - estimated KES ...]` | `src/data/farmData.js` (`PRODUCTS`) | Confirm farm-gate price per liter and silage bale cost |
| **Herd Size & Production** | `[Owner to confirm: e.g. 50+ Head Pedigree Herd]` | `src/data/farmData.js` (`FARM_INFO.ownerPlaceholders`) | Supply actual registered herd count and daily milk yield |
| **Breeds Kept** | Friesian, Ayrshire, and Jersey crosses | `src/data/farmData.js` | Confirm pedigree registry and sire lineages |
| **Certifications** | Marked as `Pending Upload / In-Progress` | `src/pages/AboutPage.jsx` | Supply Kenya Dairy Board (KDB) and public health certificate numbers |
| **Official Email** | `info@classicdairyfarm.co.ke` | `src/data/farmData.js` | Verify official domain mailbox |
| **Farm Photos & Videos** | Temporary stock placeholders marked with `Owner Asset Placeholder` | `src/data/farmData.js`, `HomePage.jsx` | Provide real high-res photos/short videos of Nkubu cow cubicles and milking area |

---

## 5. Local Setup & Running

### Prerequisites
- Node.js (v18+ or v24+)
- npm (v9+)

### Installation
```bash
# Clone or navigate to the project directory
cd "classic dairy farm"

# Install dependencies
npm install

# Start development server
npm run dev
```

The Vite dev server will launch at: `http://localhost:5174/` (or `http://localhost:5173/`).

### Production Build
```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 6. Phase 2 Backend & Database Integration Guide

Phase 1 provides clean architectural decoupling so that a **Node.js / Express** backend, **PostgreSQL** database, and **Safaricom M-Pesa Daraja API** can be connected seamlessly.

### Proposed Database Schema (PostgreSQL)

```sql
-- 1. Customers Table
CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(150) NOT NULL,
    phone_number VARCHAR(20) NOT NULL UNIQUE, -- E.164 format: 2547XXXXXXXX
    email VARCHAR(150),
    delivery_zone VARCHAR(100),
    specific_address TEXT,
    is_club_member BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Products Table
CREATE TABLE products (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    category VARCHAR(100) NOT NULL,
    pack_size VARCHAR(100) NOT NULL,
    price_kes NUMERIC(10, 2) NOT NULL,
    availability_status VARCHAR(50) DEFAULT 'in_stock',
    image_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. Orders Table
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    order_ref VARCHAR(50) UNIQUE NOT NULL, -- e.g. CDF-ORD-10821
    customer_id INTEGER REFERENCES customers(id),
    subtotal_kes NUMERIC(10, 2) NOT NULL,
    delivery_fee_kes NUMERIC(10, 2) NOT NULL,
    discount_kes NUMERIC(10, 2) DEFAULT 0,
    total_kes NUMERIC(10, 2) NOT NULL,
    delivery_zone VARCHAR(100) NOT NULL,
    payment_method VARCHAR(50) NOT NULL, -- 'mpesa_stk' or 'pay_on_delivery'
    payment_status VARCHAR(50) DEFAULT 'pending', -- 'pending', 'paid', 'failed'
    mpesa_receipt_number VARCHAR(50), -- From Daraja callback (e.g. QHX89L2M1)
    dispatch_status VARCHAR(50) DEFAULT 'processing',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. Order Items Table
CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
    product_id VARCHAR(50) REFERENCES products(id),
    quantity INTEGER NOT NULL,
    unit_price_kes NUMERIC(10, 2) NOT NULL
);

-- 5. Bookings Table (Visits & Training)
CREATE TABLE bookings (
    id SERIAL PRIMARY KEY,
    booking_ref VARCHAR(50) UNIQUE NOT NULL, -- e.g. CDF-BK742
    customer_id INTEGER REFERENCES customers(id),
    session_id VARCHAR(50) NOT NULL,
    visit_date DATE NOT NULL,
    time_slot VARCHAR(100) NOT NULL,
    group_size INTEGER NOT NULL DEFAULT 1,
    purpose TEXT,
    deposit_amount_kes NUMERIC(10, 2) NOT NULL,
    balance_amount_kes NUMERIC(10, 2) NOT NULL,
    deposit_status VARCHAR(50) DEFAULT 'paid',
    mpesa_receipt_number VARCHAR(50),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

### Proposed Express.js API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/products` | Retrieve live products and stock statuses |
| `POST` | `/api/orders` | Create a new milk/feed order |
| `POST` | `/api/bookings` | Reserve a farm visit or masterclass session |
| `POST` | `/api/payments/stk-push` | Trigger Safaricom Daraja Lipa Na M-Pesa STK Push |
| `POST` | `/api/payments/daraja-callback` | Webhook URL receiving Daraja STK Push JSON callback |
| `POST` | `/api/enquiries/ask-farm` | Log dairy questions and forward to farm manager SMS |
| `POST` | `/api/club/signup` | Register new customer into WhatsApp broadcast list |

### Safaricom Daraja STK Push Integration Hook

Replace the front-end simulation in `src/components/BookingModal.jsx` and `src/pages/CartCheckoutPage.jsx` with a call to your backend:

```javascript
// Example Daraja STK Push call in Phase 2
const initiateMpesaPayment = async (phone, amount, orderRef) => {
  const response = await fetch('/api/payments/stk-push', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      phoneNumber: phone.replace(/^0/, '254'), // Format to 2547XXXXXXXX
      amount: Math.round(amount),
      accountReference: orderRef,
      transactionDesc: `Classic Dairy Farm ${orderRef}`
    })
  });
  const data = await response.json();
  return data; // contains CheckoutRequestID
};
```
