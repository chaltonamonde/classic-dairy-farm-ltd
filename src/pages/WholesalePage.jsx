import React, { useState } from 'react';
import { 
  Building2, 
  Truck, 
  ShieldCheck, 
  Calculator, 
  CheckCircle2, 
  MessageCircle, 
  Send, 
  FileText, 
  Clock, 
  MapPin,
  Calendar
} from 'lucide-react';
import { FARM_INFO, DELIVERY_ZONES } from '../data/farmData';

export default function WholesalePage({ onQuoteSubmitted }) {
  const [productType, setProductType] = useState('Fresh Chilled Whole Milk (20L Cans)');
  const [volume, setVolume] = useState(60); // Litres per day or bales
  const [frequency, setFrequency] = useState('Daily Morning Delivery (7:00 AM)');
  const [destination, setDestination] = useState('Meru Town & Makutano');
  const [bizName, setBizName] = useState('');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Approximate wholesale pricing logic (with placeholder transparency)
  const isFeed = productType.includes('Silage') || productType.includes('Hay');
  const unitRateKES = isFeed ? 600 : 85; // Est. KES 85/L for wholesale milk vs KES 90 retail
  const estimatedOrderKES = volume * unitRateKES;

  const handleSendWhatsAppQuote = () => {
    const text = `Hello Classic Dairy Farm Ltd,
I would like to request an official Wholesale Supply Quote:
- Business: ${bizName || 'Commercial Buyer'}
- Contact: ${contactName || 'Buyer'} (${phone || 'N/A'})
- Product: ${productType}
- Volume: ${volume} ${isFeed ? 'Bales' : 'Litres'} per dispatch
- Frequency: ${frequency}
- Location: ${destination}
- Est. Value: KES ${estimatedOrderKES.toLocaleString()}
Please provide your wholesale contract terms.`;

    window.open(`https://wa.me/${FARM_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (onQuoteSubmitted) {
      onQuoteSubmitted({ bizName, contactName, phone, productType, volume, frequency, destination, estimatedOrderKES });
    }
  };

  return (
    <div className="wholesale-page-view">
      {/* Header Banner */}
      <section className="page-header-banner">
        <div className="container text-center">
          <span className="section-tag section-tag-green">
            <Building2 size={12} /> B2B & Institutional Supply
          </span>
          <h1 className="page-headline">Wholesale Milk & Bulk Dairy Feeds</h1>
          <p className="page-subline">
            Supplying hotels, cafes, bakeries, supermarkets, schools, and processors across Nkubu and Meru County with certified cold-chain reliability.
          </p>
        </div>
      </section>

      {/* Main Grid: Benefits & Quote Calculator */}
      <section className="section">
        <div className="container">
          <div className="wholesale-split-grid">
            {/* Left Col: B2B Value Proposition */}
            <div className="wholesale-info-col">
              <span className="section-tag">Reliable Commercial Supply</span>
              <h2 className="section-title">Never Run Out of Fresh Dairy Quality</h2>
              <p className="text-secondary mb-4">
                Hospitality and food service businesses cannot afford sour milk or unpredictable deliveries. We provide stable year-round volume backed by our modern bulk cooling vat and dedicated transit runs.
              </p>

              <div className="wholesale-benefits-stack">
                <div className="card benefit-item-card">
                  <ShieldCheck size={24} className="text-primary flex-shrink-0" />
                  <div>
                    <h4>Uncompromising Purity & Testing</h4>
                    <p>Every can is density-tested with lactometers and screened for zero antibiotics and zero adulteration.</p>
                  </div>
                </div>

                <div className="card benefit-item-card">
                  <Truck size={24} className="text-accent flex-shrink-0" />
                  <div>
                    <h4>Pre-7:30 AM Delivery in Meru & Nkubu</h4>
                    <p>Dispatched before morning rush so your kitchen, bakery, or cafe is fully stocked for breakfast service.</p>
                  </div>
                </div>

                <div className="card benefit-item-card">
                  <Calendar size={24} className="text-primary flex-shrink-0" />
                  <div>
                    <h4>Dry Season Price Stability Contracts</h4>
                    <p>Lock in guaranteed monthly rates so dry season milk shortages don't eat into your operating margins.</p>
                  </div>
                </div>

                <div className="card benefit-item-card">
                  <FileText size={24} className="text-accent flex-shrink-0" />
                  <div>
                    <h4>Commercial Invoicing & KRA Compliance</h4>
                    <p>Structured monthly invoicing with flexible electronic payment options (M-Pesa Paybill / Bank Transfer).</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Interactive Quote Calculator */}
            <div className="wholesale-calc-col">
              <div className="card wholesale-quote-card">
                <div className="quote-card-header">
                  <div className="flex items-center gap-2">
                    <Calculator size={20} className="text-accent" />
                    <h3 className="text-xl font-bold">Request a Wholesale Quote</h3>
                  </div>
                  <span className="badge badge-green text-xs">Instant Calculation</span>
                </div>

                {!submitted ? (
                  <form onSubmit={handleFormSubmit} className="quote-form-body mt-3">
                    <div className="form-group">
                      <label className="form-label">Product Required:</label>
                      <select 
                        className="form-select"
                        value={productType}
                        onChange={(e) => setProductType(e.target.value)}
                      >
                        <option value="Fresh Chilled Whole Milk (20L Cans)">Fresh Chilled Whole Milk (20L Stainless Cans)</option>
                        <option value="Cultured Lala / Mala (Commercial Bulk)">Traditional Fermented Lala / Mala (Bulk Containers)</option>
                        <option value="Maize Silage 50kg Bales (Feed Supply)">High-Nutrition Maize Silage (50kg Bales)</option>
                        <option value="Brachiaria & Rhodes Grass Hay">Brachiaria & Rhodes Hay (Rectangular Bales)</option>
                      </select>
                    </div>

                    <div className="form-row-2">
                      <div className="form-group">
                        <label className="form-label">
                          Estimated Volume ({isFeed ? 'Bales' : 'Litres'} / dispatch):
                        </label>
                        <input 
                          type="number"
                          min="20"
                          max="2000"
                          step="10"
                          className="form-input"
                          value={volume}
                          onChange={(e) => setVolume(Math.max(10, parseInt(e.target.value) || 10))}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label">Delivery Frequency:</label>
                        <select 
                          className="form-select"
                          value={frequency}
                          onChange={(e) => setFrequency(e.target.value)}
                        >
                          <option value="Daily Morning Delivery (7:00 AM)">Daily Morning (7:00 AM)</option>
                          <option value="Alternate Days (Every 48 Hours)">Alternate Days (Mon/Wed/Fri)</option>
                          <option value="Twice Weekly">Twice Weekly</option>
                          <option value="Weekly Bulk Transport">Weekly Bulk Transport</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Delivery Destination:</label>
                      <select 
                        className="form-select"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                      >
                        {DELIVERY_ZONES.map(z => (
                          <option key={z.zone} value={z.zone}>{z.zone} ({z.schedule})</option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Business / Institution Name:</label>
                      <input 
                        type="text"
                        className="form-input"
                        placeholder="e.g. Meru Highlands Hotel / Nkubu Bakery"
                        value={bizName}
                        onChange={(e) => setBizName(e.target.value)}
                        required
                      />
                    </div>

                    <div className="form-row-2">
                      <div className="form-group">
                        <label className="form-label">Contact Person:</label>
                        <input 
                          type="text"
                          className="form-input"
                          placeholder="e.g. Peter Munene"
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label">Phone / WhatsApp:</label>
                        <input 
                          type="tel"
                          className="form-input"
                          placeholder="07XX XXX XXX"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    {/* Dynamic Calculation Summary */}
                    <div className="quote-estimate-strip">
                      <div className="flex justify-between items-center">
                        <span className="text-secondary text-sm">Estimated Dispatch Value:</span>
                        <strong className="text-primary text-xl">KES {estimatedOrderKES.toLocaleString()}</strong>
                      </div>
                      <div className="owner-placeholder-banner text-xs mt-2">
                        *Estimated at KES {unitRateKES}/{isFeed ? 'bale' : 'Litre'}. Wholesale contract discounts applied upon account confirmation.
                      </div>
                    </div>

                    <div className="quote-actions-stack mt-3">
                      <button type="submit" className="btn btn-primary btn-full">
                        <Send size={16} />
                        <span>Submit Official Quote Request</span>
                      </button>

                      <button 
                        type="button" 
                        onClick={handleSendWhatsAppQuote}
                        className="btn btn-whatsapp btn-full"
                      >
                        <MessageCircle size={16} />
                        <span>Fast Track Quote via WhatsApp</span>
                      </button>
                    </div>

                    <div className="promise-note-inline mt-2">
                      <Clock size={12} className="text-accent" />
                      <span>{FARM_INFO.replyTimePromise}</span>
                    </div>
                  </form>
                ) : (
                  <div className="quote-success-box text-center py-4">
                    <CheckCircle2 size={48} className="text-primary mx-auto mb-2" />
                    <h3>Quote Request Submitted!</h3>
                    <p className="text-secondary mt-1">
                      Thank you, <strong>{contactName}</strong>. Our commercial accounts desk has received the supply inquiry for <strong>{bizName}</strong> ({volume} {isFeed ? 'bales' : 'L'} to {destination}).
                    </p>

                    <div className="mt-4">
                      <button 
                        onClick={handleSendWhatsAppQuote}
                        className="btn btn-whatsapp btn-full"
                      >
                        <MessageCircle size={16} />
                        <span>Instant WhatsApp Follow-Up</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Delivery Schedule Table */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag section-tag-green">
              <Truck size={12} /> Logistical Coverage
            </span>
            <h2 className="section-title">Meru County Wholesale Delivery Schedule</h2>
            <p className="section-subtitle">
              Scheduled cold-chain transit runs serving towns across Mount Kenya East.
            </p>
          </div>

          <div className="card schedule-table-card">
            <div className="table-responsive">
              <table className="schedule-table">
                <thead>
                  <tr>
                    <th>Delivery Zone</th>
                    <th>Transit Schedule & Timing</th>
                    <th>Standard Fee (Per Run)</th>
                    <th>Bulk Volume Threshold</th>
                  </tr>
                </thead>
                <tbody>
                  {DELIVERY_ZONES.map((zone, idx) => (
                    <tr key={idx}>
                      <td className="font-semibold text-primary">{zone.zone}</td>
                      <td>{zone.schedule}</td>
                      <td>{zone.feeKES === 0 ? 'FREE (Pickup)' : `KES ${zone.feeKES.toLocaleString()}`}</td>
                      <td><span className="badge badge-green text-xs">Free transit for &gt; 100 Litres</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
