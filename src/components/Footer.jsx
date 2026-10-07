import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Star, 
  MessageCircle, 
  ExternalLink, 
  ShieldCheck, 
  Award, 
  Heart
} from 'lucide-react';
import { FARM_INFO } from '../data/farmData';

export default function Footer({ setActivePage, onOpenPolicyModal, onOpenReviewModal }) {
  const handlePage = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      {/* Response Promise Banner */}
      <div className="footer-promise-bar">
        <div className="container footer-promise-content">
          <div className="promise-item">
            <span className="promise-icon">⚡</span>
            <div>
              <strong>Instant Response Promise:</strong>
              <p>{FARM_INFO.replyTimePromise}</p>
            </div>
          </div>
          <div className="promise-cta">
            <a 
              href={`https://wa.me/${FARM_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Classic Dairy Farm Ltd, I have a quick question.')}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-sm"
            >
              <MessageCircle size={15} />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container footer-main-content">
        <div className="footer-grid">
          {/* Column 1: Farm Brand & Local SEO */}
          <div className="footer-col brand-col">
            <div className="footer-brand-title">
              <span className="footer-cow-icon">🐄</span>
              <span>Classic Dairy Farm Ltd</span>
            </div>
            <p className="footer-desc">
              Meru's established model dairy farm and training center in Nkubu. Producing pure, chilled whole milk, high-nutrition dairy feeds, and empowering Kenyan farmers through practical zero-grazing masterclasses.
            </p>

            <div className="footer-trust-badge">
              <div className="google-badge-top">
                <Star size={16} fill="#F59E0B" color="#F59E0B" />
                <span className="rating-score">{FARM_INFO.googleRating} / 5.0</span>
                <span className="rating-count">({FARM_INFO.googleReviewCount} Google Reviews)</span>
              </div>
              <div className="google-badge-actions">
                <a 
                  href={FARM_INFO.googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="google-maps-link"
                >
                  <span>View on Google Maps</span>
                  <ExternalLink size={12} />
                </a>
                <button 
                  onClick={onOpenReviewModal}
                  className="leave-review-text-btn"
                >
                  Leave a Review
                </button>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Explore Farm</h4>
            <ul className="footer-links-list">
              <li><button onClick={() => handlePage('home')}>Farm Home</button></li>
              <li><button onClick={() => handlePage('products')}>24/7 Milk & Feed Catalogue</button></li>
              <li><button onClick={() => handlePage('visits')}>Book Farm Visit & Masterclass</button></li>
              <li><button onClick={() => handlePage('learn')}>Dairy Advice & Guides (Learn)</button></li>
              <li><button onClick={() => handlePage('wholesale')}>Wholesale & Commercial Milk</button></li>
              <li><button onClick={() => handlePage('about')}>About Our Herd & Practices</button></li>
              <li><button onClick={() => handlePage('contact')}>Contact & Farm Directions</button></li>
            </ul>
          </div>

          {/* Column 3: Contact & Hours */}
          <div className="footer-col">
            <h4 className="footer-heading">Farm Visit & Contact</h4>
            <div className="footer-contact-item">
              <MapPin size={18} className="text-accent flex-shrink-0" />
              <div>
                <strong>Location:</strong>
                <p>{FARM_INFO.fullAddress}</p>
              </div>
            </div>
            <div className="footer-contact-item">
              <Clock size={18} className="text-accent flex-shrink-0" />
              <div>
                <strong>Operating Hours:</strong>
                <p>Monday – Saturday: 7:00 AM – 6:00 PM</p>
                <small className="text-muted">Sunday: Livestock Care Only (No public visits)</small>
              </div>
            </div>
            <div className="footer-contact-item">
              <Phone size={18} className="text-primary flex-shrink-0" />
              <div>
                <strong>Phone & WhatsApp:</strong>
                <p><a href={`tel:${FARM_INFO.phone}`}>{FARM_INFO.phone}</a></p>
              </div>
            </div>
            <div className="footer-contact-item">
              <Mail size={18} className="text-accent flex-shrink-0" />
              <div>
                <strong>Email Enquiries:</strong>
                <p><a href={`mailto:${FARM_INFO.email}`}>{FARM_INFO.email}</a></p>
                <span className="owner-placeholder-tag">[To be confirmed by owner]</span>
              </div>
            </div>
          </div>

          {/* Column 4: Local Meru Dairy Coverage & Compliance */}
          <div className="footer-col">
            <h4 className="footer-heading">Regional Delivery Hubs</h4>
            <p className="footer-text-sm">
              Daily morning fresh milk runs and scheduled silage transports serving:
            </p>
            <div className="town-tags-cloud">
              <span className="town-tag">Nkubu Town</span>
              <span className="town-tag">Meru Town</span>
              <span className="town-tag">Makutano</span>
              <span className="town-tag">Chuka</span>
              <span className="town-tag">Maua Route</span>
              <span className="town-tag">Imenti South</span>
              <span className="town-tag">Timau</span>
            </div>

            <div className="compliance-box">
              <ShieldCheck size={16} className="text-primary" />
              <div>
                <span className="compliance-title">Compliance & Standards:</span>
                <p className="compliance-note">
                  {FARM_INFO.ownerPlaceholders.certifications}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Owner Placeholders Transparency Banner */}
        <div className="footer-placeholder-notice">
          <span className="badge badge-placeholder">Phase 1 Transparency Notice</span>
          <p>
            All Google Maps verified details (phone +254 729 770114, Nkubu location, 4.7★ rating, operating hours) are live. 
            Product retail prices, herd counts and certifications are marked as estimates awaiting final owner verification. No facts have been fabricated.
          </p>
        </div>

        {/* Bottom Legal Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            © {new Date().getFullYear()} Classic Dairy Farm Ltd (Nkubu, Meru). All rights reserved.
          </div>

          <div className="footer-legal-links">
            <button onClick={() => onOpenPolicyModal('privacy')}>Privacy Policy</button>
            <span className="sep">•</span>
            <button onClick={() => onOpenPolicyModal('terms')}>Terms of Service</button>
            <span className="sep">•</span>
            <button onClick={() => onOpenPolicyModal('delivery')}>Delivery & Cold-Chain Policy</button>
            <span className="sep">•</span>
            <button onClick={() => onOpenPolicyModal('refund')}>Refund & Replacement Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
