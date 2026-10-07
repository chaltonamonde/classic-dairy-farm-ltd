import React from 'react';
import { 
  Calendar, 
  Clock, 
  Users, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck, 
  BookOpen, 
  Coffee, 
  Award, 
  HelpCircle,
  MessageCircle,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { VISIT_SESSIONS, FARM_INFO } from '../data/farmData';

export default function VisitsPage({ onOpenBooking, onOpenAskModal }) {
  return (
    <div className="visits-page-view">
      {/* Page Header */}
      <section className="page-header-banner">
        <div className="container text-center">
          <span className="section-tag section-tag-green">
            <Calendar size={12} /> Practical Field Learning
          </span>
          <h1 className="page-headline">Farm Visits & Practical Dairy Training</h1>
          <p className="page-subline">
            Experience our high-yielding zero-grazing system in Nkubu, Meru. Hands-on masterclasses covering feed formulation, calf health, and hygienic milk production.
          </p>
        </div>
      </section>

      {/* Sessions Grid Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Available Session Formats</span>
            <h2 className="section-title">Select Your Training Program</h2>
            <p className="section-subtitle">
              Whether you are an aspiring agribusiness investor or an established dairy farmer seeking higher milk yields, we offer structured, practical sessions.
            </p>
          </div>

          <div className="sessions-detail-stack">
            {VISIT_SESSIONS.map((session, idx) => (
              <div key={session.id} className="card session-full-card">
                <div className="session-full-header">
                  <div>
                    <span className="badge badge-green mb-2">{session.duration}</span>
                    <h2 className="session-title-large">{session.title}</h2>
                    <p className="session-ideal-text">
                      <strong>Target Audience:</strong> {session.idealFor}
                    </p>
                  </div>

                  <div className="session-price-highlight">
                    <span className="price-tag-sub">Per Participant</span>
                    <strong className="price-tag-main">KES {session.priceKES.toLocaleString()}</strong>
                    <span className="deposit-tag-sub">Deposit to Reserve: KES {session.depositKES.toLocaleString()}</span>
                  </div>
                </div>

                <p className="session-full-desc">{session.description}</p>

                <div className="session-curriculum-grid">
                  <div className="curriculum-col">
                    <h4>Core Modules Covered:</h4>
                    <ul className="curriculum-list">
                      {session.curriculum.map((item, cIdx) => (
                        <li key={cIdx}>
                          <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="includes-col">
                    <h4>What is Included in Your Fee:</h4>
                    <ul className="includes-list">
                      {session.includes.map((inc, iIdx) => (
                        <li key={iIdx}>
                          <Award size={16} className="text-accent flex-shrink-0" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="session-card-cta-bar">
                  <div className="owner-placeholder-banner flex-1 m-0">
                    <strong>Price Note:</strong> {session.priceNote}. Instant M-Pesa STK reservation simulated.
                  </div>

                  <button 
                    onClick={() => onOpenBooking(session)}
                    className="btn btn-primary btn-lg"
                  >
                    <Calendar size={18} />
                    <span>Book Session (Pay KES {session.depositKES.toLocaleString()} Deposit)</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect & Biosecurity Protocols */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag section-tag-green">
              <ShieldCheck size={12} /> Farm Protocols
            </span>
            <h2 className="section-title">What to Expect on Your Visit</h2>
            <p className="section-subtitle">
              We operate a strict, disease-free zero-grazing facility. Here is how your visit is arranged:
            </p>
          </div>

          <div className="protocols-grid">
            <div className="card protocol-card">
              <div className="protocol-icon">🥾</div>
              <h4>Footwear & Protective Gear</h4>
              <p>
                Wear comfortable, washable farm footwear or boots. All guests must pass through disinfectant footbaths at the farm gate to safeguard herd health.
              </p>
            </div>

            <div className="card protocol-card">
              <div className="protocol-icon">📝</div>
              <h4>Training Materials Provided</h4>
              <p>
                Masterclass participants receive printed farm handbooks, feed formulation cheat-sheets, and note materials. You may bring clipboards or tablets.
              </p>
            </div>

            <div className="card protocol-card">
              <div className="protocol-icon">📸</div>
              <h4>Photography & Recordings</h4>
              <p>
                Still photography of structures, cubicles, silage bunkers, and feed mixing is welcomed for personal farmer educational reference.
              </p>
            </div>

            <div className="card protocol-card">
              <div className="protocol-icon">☕</div>
              <h4>Hospitality & Milk Tasting</h4>
              <p>
                Enjoy fresh farm tea prepared with whole chilled morning milk and sample our naturally fermented probiotic mala during tea breaks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting to the Farm in Nkubu */}
      <section className="section">
        <div className="container">
          <div className="card directions-full-card">
            <div className="directions-header">
              <MapPin size={28} className="text-primary" />
              <div>
                <h2>Directions to Classic Dairy Farm in Nkubu</h2>
                <p className="text-secondary">{FARM_INFO.fullAddress}</p>
              </div>
            </div>

            <div className="directions-body-grid mt-4">
              <div className="direction-step-item">
                <span className="step-num">Step 1</span>
                <h4>From Nairobi / Embu / Chuka</h4>
                <p>
                  Drive north on the A2 Highway toward Meru. Arrive at Nkubu town center. Continue 1.2 km past the main bus stage towards Meru Town.
                </p>
              </div>

              <div className="direction-step-item">
                <span className="step-num">Step 2</span>
                <h4>The Dairy Farm Branch-Off</h4>
                <p>
                  Look for the Classic Dairy Farm signpost on your right. Turn onto the murram all-weather access road.
                </p>
              </div>

              <div className="direction-step-item">
                <span className="step-num">Step 3</span>
                <h4>Arrival at the Gate</h4>
                <p>
                  Follow the murram road for 800 meters. The main gate is clearly signed. Safe, fenced parking is available inside the compound.
                </p>
              </div>
            </div>

            <div className="directions-cta-row mt-4">
              <a 
                href={FARM_INFO.googleMapsUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <MapPin size={16} />
                <span>Open Pin on Google Maps</span>
              </a>

              <a 
                href={`https://wa.me/${FARM_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Classic Dairy Farm, I am driving to Nkubu right now and need live directions.')}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageCircle size={16} />
                <span>Request Live WhatsApp Location</span>
              </a>

              <button onClick={onOpenAskModal} className="btn btn-secondary">
                <HelpCircle size={16} />
                <span>Ask About Group Rates</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
