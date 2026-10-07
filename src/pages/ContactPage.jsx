import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Star, 
  CheckCircle2, 
  ExternalLink,
  Navigation,
  Compass
} from 'lucide-react';
import { FARM_INFO } from '../data/farmData';

export default function ContactPage({ onMessageSent }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Milk Purchase / Order Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (onMessageSent) {
      onMessageSent({ name, phone, subject, message });
    }
  };

  const handleSendWhatsApp = () => {
    const text = `Hello Classic Dairy Farm Ltd,
- Name: ${name || 'Website Visitor'}
- Phone: ${phone || 'N/A'}
- Subject: ${subject}
- Message: ${message || 'I would like to get in touch with Classic Dairy Farm.'}`;

    window.open(`https://wa.me/${FARM_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="contact-page-view">
      {/* Header Banner */}
      <section className="page-header-banner">
        <div className="container text-center">
          <span className="section-tag section-tag-green">
            <MapPin size={12} /> Nkubu, Meru County
          </span>
          <h1 className="page-headline">Contact & Visit Our Farm</h1>
          <p className="page-subline">
            We are open Monday to Saturday from 7:00 AM to 6:00 PM for farm gate milk purchases, scheduled training visits, and agricultural consultations.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="section">
        <div className="container">
          <div className="contact-split-grid">
            {/* Left Col: Contact Channels & Map Preview */}
            <div className="contact-info-col">
              <div className="card contact-details-card mb-4">
                <h3 className="text-xl font-bold mb-3">Farm Contact Details</h3>

                <div className="contact-item-row">
                  <div className="contact-icon-bubble">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <span className="contact-lbl">Direct Farm Phone:</span>
                    <a href={`tel:${FARM_INFO.phone}`} className="contact-val-link">
                      <strong>{FARM_INFO.phone}</strong>
                    </a>
                    <span className="contact-hint">Call anytime Mon – Sat, 7:00 AM – 6:00 PM</span>
                  </div>
                </div>

                <div className="contact-item-row">
                  <div className="contact-icon-bubble">
                    <MessageCircle size={20} className="text-primary" />
                  </div>
                  <div>
                    <span className="contact-lbl">Official Farm WhatsApp:</span>
                    <a 
                      href={`https://wa.me/${FARM_INFO.whatsappNumber}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="contact-val-link text-primary font-bold"
                    >
                      +{FARM_INFO.whatsappNumber} (Chat Now)
                    </a>
                    <span className="contact-hint">⚡ {FARM_INFO.replyTimePromise}</span>
                  </div>
                </div>

                <div className="contact-item-row">
                  <div className="contact-icon-bubble">
                    <MapPin size={20} className="text-accent" />
                  </div>
                  <div>
                    <span className="contact-lbl">Physical Location:</span>
                    <strong className="block text-white">{FARM_INFO.fullAddress}</strong>
                    <span className="contact-hint">1.2 km from Nkubu town center (All-weather access)</span>
                  </div>
                </div>

                <div className="contact-item-row">
                  <div className="contact-icon-bubble">
                    <Clock size={20} className="text-accent" />
                  </div>
                  <div>
                    <span className="contact-lbl">Public Opening Hours:</span>
                    <strong className="block text-white">Monday – Saturday: 7:00 AM – 6:00 PM</strong>
                    <span className="contact-hint">Sunday: Closed for public visits (Herd care only)</span>
                  </div>
                </div>

                <div className="contact-item-row">
                  <div className="contact-icon-bubble">
                    <Mail size={20} className="text-accent" />
                  </div>
                  <div>
                    <span className="contact-lbl">Email Address:</span>
                    <a href={`mailto:${FARM_INFO.email}`} className="contact-val-link">
                      {FARM_INFO.email}
                    </a>
                    <span className="owner-placeholder-tag">[Owner to confirm official mailbox]</span>
                  </div>
                </div>
              </div>

              {/* Interactive Simulated Google Map Card */}
              <div className="card map-preview-card">
                <div className="map-card-head">
                  <div className="flex items-center gap-2">
                    <Navigation size={18} className="text-primary" />
                    <h4 className="font-bold">Google Maps Location</h4>
                  </div>
                  <a 
                    href={FARM_INFO.googleMapsUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    <span>Open in Maps App</span>
                    <ExternalLink size={12} />
                  </a>
                </div>

                {/* Simulated Map Graphical Visual */}
                <div className="simulated-map-box">
                  <div className="map-grid-pattern"></div>
                  <div className="map-road road-highway">
                    <span className="road-label">Meru - Nkubu Highway</span>
                  </div>
                  <div className="map-road road-branch">
                    <span className="road-label">Dairy Farm Murram Road (800m)</span>
                  </div>
                  <div className="map-marker-pin">
                    <div className="pin-pulse"></div>
                    <div className="pin-head">
                      <span>🐄</span>
                    </div>
                    <div className="pin-popup">
                      <strong>Classic Dairy Farm Ltd</strong>
                      <span>4.7 ★ (23 Reviews)</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-card-alt text-xs text-secondary border-t border-card-border">
                  <p>
                    <strong>GPS Coordinates:</strong> Lat: -0.0631° S, Long: 37.6622° E (Meru County). Accessible by 2WD cars, motorbikes, pickups and buses.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Col: Contact Message Form */}
            <div className="contact-form-col">
              <div className="card contact-form-card">
                <span className="badge badge-green mb-2">Direct Inquiry Form</span>
                <h3 className="text-2xl font-bold mb-2">Send the Farm a Message</h3>
                <p className="text-secondary text-sm mb-4">
                  Leave your details and inquiry below. Our team in Nkubu will contact you via phone or SMS promptly.
                </p>

                {!submitted ? (
                  <form onSubmit={handleSubmit} className="contact-form-stack">
                    <div className="form-group">
                      <label className="form-label">Your Full Name:</label>
                      <input 
                        type="text" 
                        className="form-input" 
                        placeholder="e.g. Dennis Kinyua"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>

                    <div className="form-row-2">
                      <div className="form-group">
                        <label className="form-label">Phone Number (Calling / WhatsApp):</label>
                        <input 
                          type="tel" 
                          className="form-input" 
                          placeholder="07XX XXX XXX"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label">Inquiry Subject:</label>
                        <select 
                          className="form-select"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                        >
                          <option value="Milk Purchase / Order Inquiry">Fresh Milk / Mala Orders</option>
                          <option value="Farm Visit or Training Booking">Farm Visit or Masterclass Booking</option>
                          <option value="Silage & Fodder Purchase">Silage Bales & Hay Inquiries</option>
                          <option value="Breeding Heifers / In-Calf Stock">Breeding Heifers & Livestock</option>
                          <option value="Wholesale & Commercial Supply">Wholesale & B2B Commercial Supply</option>
                          <option value="General Question">General Technical Question</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Your Message or Order Details:</label>
                      <textarea 
                        className="form-textarea" 
                        rows="5"
                        placeholder="Provide details about your required milk volume, preferred visit date, or technical dairy questions..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      ></textarea>
                    </div>

                    <div className="contact-actions-stack mt-4">
                      <button type="submit" className="btn btn-primary btn-full btn-lg">
                        <Send size={18} />
                        <span>Submit Inquiry</span>
                      </button>

                      <button 
                        type="button" 
                        onClick={handleSendWhatsApp}
                        className="btn btn-whatsapp btn-full"
                      >
                        <MessageCircle size={18} />
                        <span>Send Message Directly via WhatsApp</span>
                      </button>
                    </div>

                    <div className="promise-note-inline mt-3">
                      <Clock size={14} className="text-accent" />
                      <span>{FARM_INFO.replyTimePromise}</span>
                    </div>
                  </form>
                ) : (
                  <div className="contact-success-state text-center py-5">
                    <CheckCircle2 size={50} className="text-primary mx-auto mb-2" />
                    <h3 className="text-2xl font-bold">Inquiry Sent Successfully!</h3>
                    <p className="text-secondary mt-1">
                      Asante sana, <strong>{name}</strong>. Our farm manager in Nkubu has received your message regarding <em>{subject}</em> and will reach out to <strong>{phone}</strong> shortly.
                    </p>

                    <div className="mt-4 flex flex-col gap-2">
                      <button 
                        onClick={handleSendWhatsApp}
                        className="btn btn-whatsapp"
                      >
                        <MessageCircle size={16} />
                        <span>Follow Up Instantly on WhatsApp</span>
                      </button>
                      <button 
                        onClick={() => { setSubmitted(false); setMessage(''); }}
                        className="btn btn-secondary btn-sm"
                      >
                        Send Another Inquiry
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Directions Guide */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag section-tag-green">
              <Compass size={12} /> Road Navigation
            </span>
            <h2 className="section-title">How to Reach Classic Dairy Farm in Nkubu</h2>
            <p className="section-subtitle">
              Accessible all year round via standard vehicles or public transport matatus.
            </p>
          </div>

          <div className="transit-cards-grid">
            <div className="card transit-card">
              <div className="transit-icon">🚗</div>
              <h4>Driving via Private Vehicle</h4>
              <p>
                From Meru Town: Drive south along the A2 Meru-Nkubu highway (approx. 15 km). Before reaching the Nkubu town roundabout, turn left at the Classic Dairy Farm signpost. Follow the murram road for 800m.
              </p>
            </div>

            <div className="card transit-card">
              <div className="transit-icon">🚐</div>
              <h4>Public Transport (Matatu)</h4>
              <p>
                Board any Meru-Nkubu or Nairobi-Meru matatu. Alight at the Nkubu Dairy junction stage. Boda-bodas are stationed at the junction and will take you directly to the farm gate in 2 minutes for KES 50.
              </p>
            </div>

            <div className="card transit-card">
              <div className="transit-icon">🚚</div>
              <h4>Heavy Trucks for Fodder Pickup</h4>
              <p>
                Our access murram road has wide clearances and packed sub-base suitable for canters and lorries collecting bulk silage bales or hay. Fenced turnaround space inside the farm yard.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
