import React, { useState } from 'react';
import { 
  Phone, 
  Clock, 
  MapPin, 
  Star, 
  ShoppingBag, 
  Menu, 
  X, 
  MessageCircle, 
  ChevronRight,
  Sparkles,
  RotateCcw
} from 'lucide-react';
import { FARM_INFO } from '../data/farmData';

export default function Navbar({ 
  activePage, 
  setActivePage, 
  cartCount, 
  onOpenCart, 
  onQuickReorder,
  onOpenAskModal 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'visits', label: 'Visits & Training' },
    { id: 'learn', label: 'Dairy Advice' },
    { id: 'wholesale', label: 'Wholesale' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${FARM_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello Classic Dairy Farm Ltd, I am contacting you from your website. I would like to make an enquiry.'
  )}`;

  return (
    <header className="navbar-wrapper">
      {/* Top Announcement & Trust Bar */}
      <div className="top-trust-bar">
        <div className="container top-trust-container">
          <div className="top-trust-left">
            <span className="trust-item">
              <MapPin size={13} className="text-accent" />
              <span>{FARM_INFO.shortLocation}</span>
            </span>
            <span className="trust-sep">•</span>
            <span className="trust-item">
              <Clock size={13} className="text-accent" />
              <span>Mon – Sat: 7:00 AM – 6:00 PM</span>
            </span>
            <span className="trust-sep hidden-mobile">•</span>
            <a 
              href={FARM_INFO.googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="trust-item trust-link hidden-mobile"
              title="View Google Maps Listing & Reviews"
            >
              <Star size={13} fill="#F59E0B" color="#F59E0B" />
              <strong className="text-white">{FARM_INFO.googleRating}</strong>
              <span className="text-muted">({FARM_INFO.googleReviewCount} Google Reviews)</span>
            </a>
          </div>

          <div className="top-trust-right">
            <button 
              className="quick-reorder-btn"
              onClick={onQuickReorder}
              title="Quick re-order your previous milk or feed order"
            >
              <RotateCcw size={12} />
              <span>Quick Re-Order</span>
            </button>
            <a href={`tel:${FARM_INFO.phone}`} className="phone-top-link">
              <Phone size={13} />
              <span>{FARM_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="main-navbar" aria-label="Main Navigation">
        <div className="container nav-content">
          {/* Brand Logo */}
          <button 
            className="brand-logo-btn" 
            onClick={() => handleNavClick('home')}
            aria-label="Classic Dairy Farm Home"
          >
            <div className="brand-icon-box">
              <span className="brand-cow-emoji">🐄</span>
              <div className="brand-glow-circle"></div>
            </div>
            <div className="brand-text-col">
              <span className="brand-name">CLASSIC DAIRY FARM</span>
              <span className="brand-sub">NKUBU, MERU • EST. DAIRY EXCELLENCE</span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <div className="desktop-nav-links">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`nav-link-btn ${activePage === link.id ? 'active' : ''}`}
                aria-current={activePage === link.id ? 'page' : undefined}
              >
                {link.label}
                {activePage === link.id && <span className="nav-active-indicator" />}
              </button>
            ))}
          </div>

          {/* Action Buttons: Cart & WhatsApp */}
          <div className="nav-actions">
            <button 
              className="nav-cart-btn"
              onClick={onOpenCart}
              aria-label={`View cart with ${cartCount} items`}
            >
              <ShoppingBag size={20} />
              <span className="cart-badge">{cartCount}</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-sm nav-wa-btn"
            >
              <MessageCircle size={16} />
              <span>Order on WhatsApp</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button 
              className="mobile-hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-backdrop" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-drawer-panel" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <div className="brand-text-col">
                <span className="brand-name">CLASSIC DAIRY FARM</span>
                <span className="brand-sub">Nkubu, Meru</span>
              </div>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="close-drawer-btn"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mobile-drawer-trust">
              <a 
                href={FARM_INFO.googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mobile-rating-badge"
              >
                <Star size={14} fill="#F59E0B" color="#F59E0B" />
                <span>{FARM_INFO.googleRating} Google Rating ({FARM_INFO.googleReviewCount} Reviews)</span>
              </a>
              <p className="mobile-hours-text">⏰ Mon – Sat: 7:00 AM – 6:00 PM</p>
            </div>

            <div className="mobile-drawer-links">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`mobile-nav-link ${activePage === link.id ? 'active' : ''}`}
                >
                  <span>{link.label}</span>
                  <ChevronRight size={18} className="text-muted" />
                </button>
              ))}
            </div>

            <div className="mobile-drawer-footer">
              <button 
                className="btn btn-secondary btn-full mb-2"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onQuickReorder();
                }}
              >
                <RotateCcw size={16} />
                <span>Repeat Previous Order</span>
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-full"
              >
                <MessageCircle size={18} />
                <span>Chat & Order on WhatsApp</span>
              </a>

              <a href={`tel:${FARM_INFO.phone}`} className="mobile-call-link">
                <Phone size={16} />
                <span>Call {FARM_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
