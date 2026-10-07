import React, { useState } from 'react';
import { 
  Calendar, 
  MessageCircle, 
  ShoppingBag, 
  Star, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ChevronRight, 
  CheckCircle2, 
  Sparkles, 
  Play, 
  ArrowRight, 
  HelpCircle,
  ExternalLink,
  Award,
  Users,
  Compass,
  RotateCcw
} from 'lucide-react';
import { 
  FARM_INFO, 
  PRODUCTS, 
  VISIT_SESSIONS, 
  GOOGLE_REVIEWS, 
  FAQS 
} from '../data/farmData';
import ProductCard from '../components/ProductCard';

export default function HomePage({ 
  onNavigate, 
  onSelectProduct, 
  onAddToCart, 
  onOpenBooking, 
  onOpenAskModal, 
  onOpenReviewModal, 
  onOpenClubModal,
  onQuickReorder 
}) {
  const [activeFaq, setActiveFaq] = useState(0);

  const featuredProducts = PRODUCTS.slice(0, 3);

  const whatsappHeroUrl = `https://wa.me/${FARM_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello Classic Dairy Farm Ltd, I am contacting you from your website to order fresh milk and dairy products in Nkubu/Meru.'
  )}`;

  return (
    <div className="home-page-view">
      {/* =========================================================================
          HERO SECTION
          High impact, plain confident language, looping farm video ambient overlay
          ========================================================================= */}
      <section className="hero-section" aria-label="Welcome to Classic Dairy Farm">
        {/* Subtle Ambient Video / Kinetic Visual Layer */}
        <div className="hero-media-wrapper">
          <div className="hero-ambient-canvas">
            <div className="ambient-drift ambient-drift-1"></div>
            <div className="ambient-drift ambient-drift-2"></div>
            <div className="ambient-drift ambient-drift-3"></div>
          </div>
          {/* Farm visual backdrop with dark green to sky blue overlay */}
          <div className="hero-bg-image" style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?auto=format&fit=crop&w=1920&q=80')`
          }}></div>
          <div className="hero-overlay-gradient"></div>
        </div>

        <div className="container hero-content-container">
          <div className="hero-inner-col">
            {/* Geo & Rating Badge */}
            <div className="hero-pill-badge">
              <span className="live-dot"></span>
              <span className="pill-text">Nkubu, Meru County • 4.7★ (23 Google Reviews)</span>
            </div>

            {/* Confident Headline */}
            <h1 className="hero-headline">
              Meru's dairy farm you can <span className="text-gradient">visit</span>, <span className="text-gradient">learn from</span>, and <span className="text-gradient">buy from</span>.
            </h1>

            {/* Plain English Subtitle */}
            <p className="hero-subheading">
              Pure, unadulterated chilled milk from our modern zero-grazing unit in Nkubu, high-nutrition silage feeds, and practical masterclasses designed for Kenyan farmers who want real milk yields.
            </p>

            {/* Two Primary CTAs */}
            <div className="hero-cta-group">
              <button 
                onClick={() => onOpenBooking(VISIT_SESSIONS[0])}
                className="btn btn-primary btn-lg hero-cta-btn"
                aria-label="Book a Farm Visit"
              >
                <Calendar size={18} />
                <span>Book a Farm Visit</span>
              </button>

              <a 
                href={whatsappHeroUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg hero-cta-btn"
                aria-label="Order on WhatsApp"
              >
                <MessageCircle size={18} />
                <span>Order on WhatsApp</span>
              </a>
            </div>

            {/* Quick Re-Order Option in Hero (Weakness #8) */}
            <div className="hero-reorder-link-wrap">
              <button 
                onClick={onQuickReorder}
                className="hero-reorder-link"
              >
                <RotateCcw size={14} />
                <span>Returning customer? Click here to repeat your previous order in seconds</span>
              </button>
            </div>
          </div>
        </div>

        {/* Ambient Bottom Fade */}
        <div className="hero-bottom-curve"></div>
      </section>

      {/* =========================================================================
          TRUST STRIP (Fixing Weakness #1 & #5)
          Google Rating 4.7, Mon-Sat Hours, Local Nkubu Presence & 15-min Reply
          ========================================================================= */}
      <section className="trust-strip-section" aria-label="Farm Trust Indicators">
        <div className="container">
          <div className="trust-cards-grid">
            <div className="trust-card">
              <div className="trust-icon-wrap trust-star">
                <Star size={20} fill="#F59E0B" color="#F59E0B" />
              </div>
              <div className="trust-content">
                <div className="trust-headline-row">
                  <strong>{FARM_INFO.googleRating} Stars</strong>
                  <span className="trust-subtag">23 Google Reviews</span>
                </div>
                <p>Visitors praise modern zero-grazing hygiene and knowledgeable staff.</p>
                <a 
                  href={FARM_INFO.googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="trust-card-link"
                >
                  Verify on Google Maps <ExternalLink size={11} />
                </a>
              </div>
            </div>

            <div className="trust-card">
              <div className="trust-icon-wrap">
                <Clock size={20} className="text-accent" />
              </div>
              <div className="trust-content">
                <div className="trust-headline-row">
                  <strong>7:00 AM – 6:00 PM</strong>
                  <span className="trust-subtag">Mon to Sat</span>
                </div>
                <p>Morning milk chilled by 7:30 AM; afternoon milk chilled by 4:30 PM.</p>
                <span className="trust-inline-note">Sundays: Dedicated herd rest & care</span>
              </div>
            </div>

            <div className="trust-card">
              <div className="trust-icon-wrap">
                <MapPin size={20} className="text-primary" />
              </div>
              <div className="trust-content">
                <div className="trust-headline-row">
                  <strong>Nkubu, Meru County</strong>
                  <span className="trust-subtag">All-Weather Road</span>
                </div>
                <p>1.2 km from Nkubu town center along the Meru-Nkubu Highway.</p>
                <button onClick={() => onNavigate('contact')} className="trust-card-link">
                  View Driving Directions <ArrowRight size={11} />
                </button>
              </div>
            </div>

            <div className="trust-card">
              <div className="trust-icon-wrap">
                <ShieldCheck size={20} className="text-primary" />
              </div>
              <div className="trust-content">
                <div className="trust-headline-row">
                  <strong>15-Min Reply Promise</strong>
                  <span className="trust-subtag">Fast Support</span>
                </div>
                <p>Direct WhatsApp responses for milk orders, heifer availability & training.</p>
                <span className="trust-inline-note">⚡ No lost orders or unanswered calls</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FEATURED PRODUCTS (Fixing Weakness #3)
          24/7 catalogue preview with KES prices, pack sizes, availability badges
          ========================================================================= */}
      <section className="section" aria-label="Featured Farm Products">
        <div className="container">
          <div className="section-header">
            <span className="section-tag section-tag-green">
              <Sparkles size={12} /> 24/7 Farm Catalogue
            </span>
            <h2 className="section-title">Fresh Chilled Milk & High-Nutrition Feeds</h2>
            <p className="section-subtitle">
              Sourced directly from our Nkubu cows. Never blended, never diluted, and chilled immediately for optimal creaminess.
            </p>
          </div>

          <div className="products-showcase-grid">
            {featuredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={onSelectProduct}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>

          <div className="section-footer-cta text-center mt-5">
            <button 
              onClick={() => onNavigate('products')}
              className="btn btn-secondary btn-lg"
            >
              <span>Explore Complete 24/7 Catalogue (6 Items)</span>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SERVICES & PRACTICAL TRAINING (Fixing Weakness #4)
          Masterclasses, tours, consultation with transparent pricing & deposit UI
          ========================================================================= */}
      <section className="section section-alt" aria-label="Visits and Practical Training">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <Users size={12} /> Practical Knowledge Transfer
            </span>
            <h2 className="section-title">Learn Modern Zero-Grazing Directly On-Farm</h2>
            <p className="section-subtitle">
              Stop guessing. See how we balance TMR silage rations, manage cubicle hygiene, and keep somatic cell counts low in Mount Kenya conditions.
            </p>
          </div>

          <div className="mobile-shelf-indicator">
            <span>👈 Swipe sideways to see all 3 programs 👉</span>
          </div>

          <div className="sessions-overview-grid">
            {VISIT_SESSIONS.map(session => (
              <div key={session.id} className="card session-feature-card">
                <div className="session-card-badge-row">
                  <span className="session-duration-chip">⏱ {session.duration}</span>
                  <span className="badge badge-blue">Deposit: KES {session.depositKES.toLocaleString()}</span>
                </div>

                <h3 className="session-card-title">{session.title}</h3>
                <p className="session-card-desc">{session.description}</p>

                <div className="session-ideal-box">
                  <strong>Ideal For:</strong> <span>{session.idealFor}</span>
                </div>

                <div className="session-curriculum-snippet">
                  <h4>What You Will Master:</h4>
                  <ul>
                    {session.curriculum.slice(0, 3).map((item, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={14} className="text-primary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="session-pricing-footer">
                  <div className="session-cost-display">
                    <span className="text-xs text-muted">Investment per person:</span>
                    <strong className="session-price-val">KES {session.priceKES.toLocaleString()}</strong>
                  </div>
                  <button 
                    onClick={() => onOpenBooking(session)}
                    className="btn btn-primary btn-sm"
                  >
                    <Calendar size={14} />
                    <span>Reserve Date</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <button 
              onClick={() => onNavigate('visits')}
              className="btn btn-secondary"
            >
              <span>View All Training Modules & Booking Details</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          HOW IT WORKS (Fixing Weakness #6)
          Clear 3-step order/visit process
          ========================================================================= */}
      <section className="section" aria-label="How the Farm Works">
        <div className="container">
          <div className="section-header">
            <span className="section-tag section-tag-green">Transparent Process</span>
            <h2 className="section-title">Ordering Milk or Visiting the Farm is Simple</h2>
            <p className="section-subtitle">
              Three streamlined steps from online inquiry to fresh delivery or hands-on mastery.
            </p>
          </div>

          <div className="how-it-works-grid">
            <div className="step-card">
              <div className="step-number-bubble">1</div>
              <div className="step-card-text">
                <h3 className="step-card-title">Choose Item or Date</h3>
                <p className="step-card-desc">
                  Select your required chilled milk liters, silage bales, or preferred Saturday masterclass date on this site.
                </p>
              </div>
            </div>

            <div className="step-card">
              <div className="step-number-bubble">2</div>
              <div className="step-card-text">
                <h3 className="step-card-title">Confirm via M-Pesa or WhatsApp</h3>
                <p className="step-card-desc">
                  Receive an instant pre-filled order on WhatsApp or initiate automated M-Pesa reservation with zero guesswork.
                </p>
              </div>
            </div>

            <div className="step-card">
              <div className="step-number-bubble">3</div>
              <div className="step-card-text">
                <h3 className="step-card-title">Fresh Delivery or Farm Arrival</h3>
                <p className="step-card-desc">
                  Collect at our Nkubu farm gate, receive morning town transit, or arrive on-site with directions in hand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FARM STORY & HYGIENE PRACTICES
          ========================================================================= */}
      <section className="section section-alt" aria-label="About the Farm">
        <div className="container">
          <div className="story-split-grid">
            <div className="story-content-col">
              <span className="section-tag section-tag-green">The Nkubu Farm Story</span>
              <h2 className="section-title">Setting a New Standard for Dairy Husbandry in Meru</h2>
              <p className="story-para">
                Classic Dairy Farm Ltd was established in Nkubu to demonstrate that profitable, high-yield dairy farming is entirely achievable in Meru County through disciplined feed management, hygienic zero-grazing infrastructure, and pedigree genetics.
              </p>
              <p className="story-para">
                Too many farmers invest heavily in cows only to struggle with subclinical mastitis, low butterfat, and repeat breeding. By combining scientific Total Mixed Rations (TMR) with rigorous milking hygiene, our herd demonstrates how 25–35 liter daily averages are sustained month after month.
              </p>

              <div className="story-metrics-grid">
                <div className="story-metric-box">
                  <span className="metric-val">4.7 ★</span>
                  <span className="metric-lbl">Google Maps Rating</span>
                </div>
                <div className="story-metric-box">
                  <span className="metric-val">&lt; 4°C</span>
                  <span className="metric-lbl">Instant Chilling Temp</span>
                </div>
                <div className="story-metric-box">
                  <span className="metric-val">100%</span>
                  <span className="metric-lbl">Zero Adulteration</span>
                </div>
                <div className="story-metric-box">
                  <span className="metric-val">15 Mins</span>
                  <span className="metric-lbl">Typical Reply Speed</span>
                </div>
              </div>

              <div className="mt-4">
                <button onClick={() => onNavigate('about')} className="btn btn-secondary">
                  <span>Read Full Farm Story & View Herd Records</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <div className="story-media-col">
              <div className="card story-image-card">
                <img 
                  src="https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&w=800&q=80" 
                  alt="Modern zero-grazing cow housing" 
                  className="story-main-img"
                  loading="lazy"
                />
                <div className="owner-placeholder-banner mt-2">
                  <strong>Photo Notice:</strong> Real photos of Nkubu cow cubicles and automated milking line to be uploaded by the owner.
                </div>
                <div className="story-highlight-quote">
                  "Visitors describe a well-managed dairy farm where they get answers about modern dairy farming and can buy products."
                  <span className="quote-source">— Verified Google Maps Listing Sentiment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          REAL REVIEWS SECTION (Fixing Weakness #5)
          Built around real Google reviews, star breakdown, and prompt to review
          ========================================================================= */}
      <section className="section" aria-label="Customer and Visitor Reviews">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <Star size={12} fill="#F59E0B" color="#F59E0B" /> Google Reviews Spotlight
            </span>
            <h2 className="section-title">What Visitors & Milk Buyers Say</h2>
            <p className="section-subtitle">
              Rated 4.7 out of 5.0 across 23 reviews on Google Maps. Here is what real farmers and customers in Meru share:
            </p>
          </div>

          <div className="mobile-shelf-indicator">
            <span>👈 Swipe sideways to read all 4 reviews 👉</span>
          </div>

          <div className="reviews-cards-grid">
            {GOOGLE_REVIEWS.map(rev => (
              <div key={rev.id} className="card review-card">
                <div className="review-card-head">
                  <div className="rev-stars-row">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="#F59E0B" color="#F59E0B" />
                    ))}
                  </div>
                  <span className="badge badge-green text-xs">{rev.badge}</span>
                </div>

                <p className="review-quote-text">"{rev.comment}"</p>

                <div className="review-author-row">
                  <div className="rev-avatar">
                    {rev.author.charAt(0)}
                  </div>
                  <div>
                    <strong className="rev-author-name">{rev.author}</strong>
                    <span className="rev-date-text">{rev.relativeTime} • {rev.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="reviews-action-strip">
            <div className="rev-action-text">
              <strong>Have you visited our farm in Nkubu?</strong>
              <p>Your feedback helps other Kenyan agribusinesses discover verified dairy practices.</p>
            </div>
            <div className="rev-action-btns">
              <button onClick={onOpenReviewModal} className="btn btn-primary btn-sm">
                Leave a Review
              </button>
              <a 
                href={FARM_INFO.googleMapsUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <span>Read All 23 on Google Maps</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          DAIRY ADVICE / FAQ PREVIEW (Fixing Weakness #2)
          Answering questions online + "Ask the Farm" direct form
          ========================================================================= */}
      <section className="section section-alt" aria-label="Dairy Advice and FAQ">
        <div className="container">
          <div className="section-header">
            <span className="section-tag section-tag-green">
              <HelpCircle size={12} /> Answers Online
            </span>
            <h2 className="section-title">Frequently Asked Farm Questions</h2>
            <p className="section-subtitle">
              Visitors often ask these questions in person at our Nkubu gate. Here are clear answers 24/7:
            </p>
          </div>

          <div className="faq-accordion-box">
            {FAQS.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item-card ${activeFaq === index ? 'open' : ''}`}
              >
                <button 
                  className="faq-question-btn"
                  onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
                  aria-expanded={activeFaq === index}
                >
                  <span className="faq-q-text">{faq.question}</span>
                  <ChevronRight size={18} className="faq-chevron" />
                </button>

                {activeFaq === index && (
                  <div className="faq-answer-panel">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* "Ask the Farm" Prompt (Weakness #2 Fix) */}
          <div className="ask-farm-prompt-box">
            <div className="ask-prompt-left">
              <HelpCircle size={24} className="text-accent flex-shrink-0" />
              <div>
                <h4>Don't see the answer to your dairy question?</h4>
                <p>Send your specific feeding, housing, or disease question directly to our herd manager.</p>
              </div>
            </div>
            <div className="ask-prompt-right">
              <button onClick={onOpenAskModal} className="btn btn-accent btn-sm">
                <span>Ask the Farm Online</span>
              </button>
              <a 
                href={`https://wa.me/${FARM_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Classic Dairy Farm Ltd, I have a dairy question.')}`}
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
      </section>

      {/* =========================================================================
          REPEAT SALES & VIP CLUB (Fixing Weakness #8)
          First-order discount voucher & free 24-page PDF guide
          ========================================================================= */}
      <section className="section club-incentive-section" aria-label="Customer List Incentive">
        <div className="container">
          <div className="card club-banner-card">
            <div className="club-banner-content">
              <span className="badge badge-green mb-2">Exclusive Farmer Incentive</span>
              <h2 className="club-banner-title">
                Get KES 100 Off Your First Order + Free Mount Kenya Dairy Guide
              </h2>
              <p className="club-banner-desc">
                Join our WhatsApp & Email Farmer Network. Receive direct alerts on fresh silage baling, in-calf heifer availability, and our free 24-page Nutrition & Yield Handbook (PDF).
              </p>
              <div className="club-banner-action mt-3">
                <button 
                  onClick={onOpenClubModal}
                  className="btn btn-primary btn-lg"
                >
                  <Sparkles size={18} />
                  <span>Claim KES 100 Voucher & Free PDF Guide</span>
                </button>
              </div>
            </div>
            <div className="club-banner-graphic">
              <div className="pdf-mockup-card">
                <div className="pdf-tag">PDF GUIDE</div>
                <h4>Mount Kenya Dairy Yields</h4>
                <p>TMR Formulations & Mastitis Prevention</p>
                <div className="pdf-badge">FREE DOWNLOAD</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FINAL HIGH-CONVERTING CTA
          ========================================================================= */}
      <section className="section final-cta-section text-center" aria-label="Call to Action">
        <div className="container">
          <div className="final-cta-card">
            <span className="section-tag section-tag-green">Visit Us in Nkubu</span>
            <h2 className="final-cta-title">
              Ready to Taste Pure Farm Milk or Elevate Your Dairy Yields?
            </h2>
            <p className="final-cta-desc">
              Whether you need daily whole milk for your family, bulk cans for your cafe, or practical training on cow nutrition, Classic Dairy Farm Ltd is open Monday to Saturday.
            </p>

            <div className="final-cta-buttons">
              <button 
                onClick={() => onOpenBooking(VISIT_SESSIONS[0])}
                className="btn btn-primary btn-lg"
              >
                <Calendar size={18} />
                <span>Book a Farm Training Visit</span>
              </button>

              <a 
                href={whatsappHeroUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
              >
                <MessageCircle size={18} />
                <span>Chat Directly on WhatsApp</span>
              </a>

              <button 
                onClick={() => onNavigate('contact')}
                className="btn btn-secondary btn-lg"
              >
                <MapPin size={18} />
                <span>Get Driving Directions</span>
              </button>
            </div>

            <div className="final-promise-row mt-4">
              <span>⚡ Typical reply within 15 minutes</span>
              <span className="dot">•</span>
              <span>📍 Nkubu, Meru County</span>
              <span className="dot">•</span>
              <span>📞 +254 729 770114</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
