import React, { useState, useEffect } from 'react';
import './App.css';
import { PRODUCTS, VISIT_SESSIONS, FARM_INFO } from './data/farmData';

// Shared Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppSticky from './components/WhatsAppSticky';
import Toast from './components/Toast';
import ProductModal from './components/ProductModal';
import BookingModal from './components/BookingModal';
import AskFarmModal from './components/AskFarmModal';
import ReviewModal from './components/ReviewModal';
import ClubSignupModal from './components/ClubSignupModal';
import PolicyModal from './components/PolicyModal';

// Pages
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import VisitsPage from './pages/VisitsPage';
import DairyAdvicePage from './pages/DairyAdvicePage';
import WholesalePage from './pages/WholesalePage';
import CartCheckoutPage from './pages/CartCheckoutPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  // Navigation State
  const [activePage, setActivePage] = useState('home');

  // Cart State (Persisted in localStorage)
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('classic_dairy_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Modal States
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [bookingSession, setBookingSession] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isAskModalOpen, setIsAskModalOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isClubModalOpen, setIsClubModalOpen] = useState(false);
  const [activePolicy, setActivePolicy] = useState(null);

  // Toast System
  const [toast, setToast] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('classic_dairy_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.warn('Could not persist cart to localStorage', e);
    }
  }, [cartItems]);

  const showToast = (message, type = 'success', title = '') => {
    setToast({ message, type, title });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  // Cart Handlers
  const handleAddToCart = (product, qty = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + qty } : item
        );
      }
      return [...prev, { ...product, quantity: qty }];
    });
    showToast(`Added ${qty}x ${product.name} to cart.`, 'success', 'Cart Updated');
  };

  const handleUpdateQuantity = (productId, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems(prev => prev.map(item => 
      item.id === productId ? { ...item, quantity: newQty } : item
    ));
  };

  const handleRemoveItem = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
    showToast('Item removed from cart.', 'info');
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Quick Re-Order Feature (Fixing Weakness #8)
  const handleQuickReorder = () => {
    // Add essential morning milk bundle
    const milk = PRODUCTS.find(p => p.id === 'fresh-raw-milk-1l') || PRODUCTS[0];
    const mala = PRODUCTS.find(p => p.id === 'traditional-mala-500ml') || PRODUCTS[2];

    setCartItems([
      { ...milk, quantity: 2 },
      { ...mala, quantity: 1 }
    ]);
    setActivePage('cart');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    showToast('Loaded your standard Milk & Mala repeat order into cart!', 'success', 'Quick Re-Order');
  };

  // Booking Modal Trigger
  const handleOpenBooking = (session = null) => {
    setBookingSession(session || VISIT_SESSIONS[0]);
    setIsBookingOpen(true);
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="app-root">
      {/* Toast Notification */}
      <Toast toast={toast} onClose={() => setToast(null)} />

      {/* Main Navbar */}
      <Navbar 
        activePage={activePage}
        setActivePage={setActivePage}
        cartCount={totalCartCount}
        onOpenCart={() => {
          setActivePage('cart');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onQuickReorder={handleQuickReorder}
        onOpenAskModal={() => setIsAskModalOpen(true)}
      />

      {/* Main Page Routing */}
      <main id="main-content" tabIndex="-1">
        {activePage === 'home' && (
          <HomePage 
            onNavigate={(page) => {
              setActivePage(page);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectProduct={(p) => setSelectedProduct(p)}
            onAddToCart={handleAddToCart}
            onOpenBooking={handleOpenBooking}
            onOpenAskModal={() => setIsAskModalOpen(true)}
            onOpenReviewModal={() => setIsReviewModalOpen(true)}
            onOpenClubModal={() => setIsClubModalOpen(true)}
            onQuickReorder={handleQuickReorder}
          />
        )}

        {activePage === 'products' && (
          <ProductsPage 
            onSelectProduct={(p) => setSelectedProduct(p)}
            onAddToCart={handleAddToCart}
            onQuickReorder={handleQuickReorder}
          />
        )}

        {activePage === 'visits' && (
          <VisitsPage 
            onOpenBooking={handleOpenBooking}
            onOpenAskModal={() => setIsAskModalOpen(true)}
          />
        )}

        {activePage === 'learn' && (
          <DairyAdvicePage 
            onOpenAskModal={() => setIsAskModalOpen(true)}
          />
        )}

        {activePage === 'wholesale' && (
          <WholesalePage 
            onQuoteSubmitted={(quote) => {
              showToast(`Wholesale quote request logged for ${quote.bizName}. Check WhatsApp for copy.`, 'success', 'Quote Received');
            }}
          />
        )}

        {activePage === 'about' && (
          <AboutPage 
            onOpenBooking={handleOpenBooking}
          />
        )}

        {activePage === 'contact' && (
          <ContactPage 
            onMessageSent={(msg) => {
              showToast(`Thank you ${msg.name}. Your inquiry on "${msg.subject}" has been received.`, 'success', 'Message Sent');
            }}
          />
        )}

        {activePage === 'cart' && (
          <CartCheckoutPage 
            cartItems={cartItems}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onClearCart={handleClearCart}
            onNavigate={(page) => {
              setActivePage(page);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOrderCompleted={(order) => {
              showToast(`Order ${order.orderRef} placed successfully!`, 'success', 'Order Complete');
            }}
          />
        )}
      </main>

      {/* Sticky Contextual WhatsApp Floating Widget */}
      <WhatsAppSticky 
        contextMessage={
          activePage === 'visits' 
            ? "Hello Classic Dairy Farm, I'm reviewing your Visits & Training page and would like to reserve a date."
            : activePage === 'wholesale'
            ? "Hello Classic Dairy Farm, I represent a business in Meru looking for a wholesale milk quote."
            : undefined
        }
      />

      {/* Modals */}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
          onSelectRelated={(p) => setSelectedProduct(p)}
        />
      )}

      {isBookingOpen && (
        <BookingModal 
          initialSession={bookingSession}
          onClose={() => setIsBookingOpen(false)}
          onBookingSuccess={(booking) => {
            showToast(`Farm training reservation confirmed! Ref: ${booking.bookingRef}`, 'success', 'Booking Confirmed');
          }}
        />
      )}

      {isAskModalOpen && (
        <AskFarmModal 
          onClose={() => setIsAskModalOpen(false)}
          onSubmitSuccess={(data) => {
            showToast(`Question on "${data.topic}" submitted. Our farm manager will reply shortly.`, 'success', 'Question Received');
          }}
        />
      )}

      {isReviewModalOpen && (
        <ReviewModal 
          onClose={() => setIsReviewModalOpen(false)}
          onSubmitReview={(rev) => {
            showToast('Thank you for rating Classic Dairy Farm Ltd!', 'success', 'Review Recorded');
          }}
        />
      )}

      {isClubModalOpen && (
        <ClubSignupModal 
          onClose={() => setIsClubModalOpen(false)}
          onJoined={(data) => {
            showToast('Welcome to Classic Dairy Farmers Club! Use CLASSIC100 for KES 100 off.', 'success', 'Voucher Claimed');
          }}
        />
      )}

      {activePolicy && (
        <PolicyModal 
          policyType={activePolicy}
          onClose={() => setActivePolicy(null)}
        />
      )}

      {/* Site Footer */}
      <Footer 
        setActivePage={(page) => {
          setActivePage(page);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenPolicyModal={(policy) => setActivePolicy(policy)}
        onOpenReviewModal={() => setIsReviewModalOpen(true)}
      />
    </div>
  );
}
