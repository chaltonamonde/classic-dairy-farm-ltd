import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  Users, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  Phone, 
  Download, 
  MessageCircle, 
  CreditCard,
  Sparkles,
  Printer
} from 'lucide-react';
import { FARM_INFO, VISIT_SESSIONS } from '../data/farmData';

export default function BookingModal({ initialSession, onClose, onBookingSuccess }) {
  const [selectedSessionId, setSelectedSessionId] = useState(initialSession ? initialSession.id : VISIT_SESSIONS[0].id);
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('Morning Session (9:00 AM)');
  const [attendees, setAttendees] = useState(1);
  const [purpose, setPurpose] = useState('Practical Dairy Training');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  
  // Payment state
  const [payOption, setPayOption] = useState('deposit'); // 'deposit' or 'full' or 'ondelivery'
  const [mpesaNumber, setMpesaNumber] = useState('');
  const [step, setStep] = useState('details'); // 'details' -> 'mpesa_push' -> 'confirmed'
  const [countdown, setCountdown] = useState(15);
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  const selectedSession = VISIT_SESSIONS.find(s => s.id === selectedSessionId) || VISIT_SESSIONS[0];
  const totalPriceKES = selectedSession.priceKES * attendees;
  const depositAmountKES = selectedSession.depositKES * attendees;
  const amountToPay = payOption === 'deposit' ? depositAmountKES : totalPriceKES;

  const handleStartMpesa = (e) => {
    e.preventDefault();
    if (!date || !fullName || !phone) {
      alert('Please fill in your name, contact phone and preferred visit date.');
      return;
    }
    setMpesaNumber(phone);
    setStep('mpesa_push');

    // Simulate Daraja STK Push delay
    let timer = 15;
    const interval = setInterval(() => {
      timer -= 1;
      setCountdown(timer);
      if (timer <= 0) {
        clearInterval(interval);
        const bookingRef = `CDF-${Math.floor(100000 + Math.random() * 900000)}`;
        const mpesaRef = `QH${Math.random().toString(36).substring(2, 8).toUpperCase()}K`;
        const confirmation = {
          bookingRef,
          mpesaRef,
          sessionTitle: selectedSession.title,
          date,
          timeSlot,
          attendees,
          fullName,
          phone,
          amountPaid: amountToPay,
          balanceKES: totalPriceKES - amountToPay
        };
        setConfirmedBooking(confirmation);
        setStep('confirmed');
        if (onBookingSuccess) onBookingSuccess(confirmation);
      }
    }, 1000);
  };

  const handlePrint = () => {
    window.print();
  };

  const getConfirmationWhatsAppUrl = () => {
    if (!confirmedBooking) return '';
    const text = `Hello Classic Dairy Farm Ltd, I have booked a farm visit:
- Ref: ${confirmedBooking.bookingRef}
- Session: ${confirmedBooking.sessionTitle}
- Date: ${confirmedBooking.date} (${confirmedBooking.timeSlot})
- Group: ${confirmedBooking.attendees} person(s)
- Name: ${confirmedBooking.fullName}
- M-Pesa Ref: ${confirmedBooking.mpesaRef} (KES ${confirmedBooking.amountPaid.toLocaleString()})
Please confirm reception and guide directions.`;
    return `https://wa.me/${FARM_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content booking-modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header-row">
          <div>
            <span className="badge badge-blue">Official Farm Visit Reservation</span>
            <h2 className="modal-title mt-1">Book Training or Farm Tour</h2>
          </div>
          <button onClick={onClose} className="modal-close-btn" aria-label="Close booking modal">
            <X size={20} />
          </button>
        </div>

        {step === 'details' && (
          <form onSubmit={handleStartMpesa} className="booking-form-flow">
            {/* Step 1: Select Session */}
            <div className="form-group">
              <label className="form-label">Select Session Type:</label>
              <div className="session-select-cards">
                {VISIT_SESSIONS.map(sess => (
                  <div 
                    key={sess.id}
                    className={`session-option-card ${selectedSessionId === sess.id ? 'active' : ''}`}
                    onClick={() => setSelectedSessionId(sess.id)}
                  >
                    <div className="session-card-head">
                      <strong>{sess.title}</strong>
                      <span className="session-price-pill">KES {sess.priceKES.toLocaleString()} / person</span>
                    </div>
                    <p className="session-duration-tag">⏱ {sess.duration}</p>
                    <p className="session-sub-desc">{sess.idealFor}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 2: Date, Time & Group Size */}
            <div className="form-row-2">
              <div className="form-group">
                <label className="form-label">Visit Date (Mon – Sat):</label>
                <input 
                  type="date" 
                  className="form-input"
                  required
                  value={date}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setDate(e.target.value)}
                />
                <span className="form-hint">Farm visits are open Monday to Saturday</span>
              </div>

              <div className="form-group">
                <label className="form-label">Preferred Time Slot:</label>
                <select 
                  className="form-select"
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                >
                  <option value="Morning Session (9:00 AM – 12:30 PM)">Morning Session (9:00 AM – 12:30 PM)</option>
                  <option value="Full Day Masterclass (8:30 AM – 4:00 PM)">Full Day Masterclass (8:30 AM – 4:00 PM)</option>
                  <option value="Afternoon Guided Walk (2:00 PM – 4:30 PM)">Afternoon Guided Walk (2:00 PM – 4:30 PM)</option>
                </select>
              </div>
            </div>

            <div className="form-row-2">
              <div className="form-group">
                <label className="form-label">Group Size (People):</label>
                <input 
                  type="number" 
                  min="1" 
                  max="50" 
                  className="form-input"
                  value={attendees}
                  onChange={(e) => setAttendees(Math.max(1, parseInt(e.target.value) || 1))}
                  required
                />
                <span className="form-hint">Discount applied automatically for groups &gt; 10</span>
              </div>

              <div className="form-group">
                <label className="form-label">Purpose / Focus Area:</label>
                <select 
                  className="form-select"
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                >
                  <option value="Starting a new dairy zero-grazing unit">Starting a new zero-grazing unit</option>
                  <option value="Troubleshooting low milk yields & TMR feeding">Improving milk yields & TMR feeding</option>
                  <option value="Silage making & fodder preservation">Silage making & fodder preservation</option>
                  <option value="Calf rearing & disease prevention">Calf rearing & disease prevention</option>
                  <option value="Student / Youth agricultural exposure">Student / Youth group excursion</option>
                </select>
              </div>
            </div>

            {/* Step 3: Contact Info */}
            <div className="form-group">
              <label className="form-label">Lead Attendee Full Name:</label>
              <input 
                type="text" 
                className="form-input" 
                placeholder="e.g. Morris Mwiti"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>

            <div className="form-row-2">
              <div className="form-group">
                <label className="form-label">Contact Phone / WhatsApp (M-Pesa):</label>
                <input 
                  type="tel" 
                  className="form-input" 
                  placeholder="07XX XXX XXX or 2547XXXXXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address (Optional):</label>
                <input 
                  type="email" 
                  className="form-input" 
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Fee & Deposit Calculation Box */}
            <div className="booking-summary-box">
              <div className="summary-line">
                <span>Total Session Fee ({attendees} attendee{attendees > 1 ? 's' : ''}):</span>
                <strong>KES {totalPriceKES.toLocaleString()}</strong>
              </div>
              <div className="summary-line text-accent">
                <span>Reservation Deposit (Holds your date):</span>
                <strong>KES {depositAmountKES.toLocaleString()}</strong>
              </div>

              <div className="deposit-options-row">
                <label className={`deposit-pill ${payOption === 'deposit' ? 'active' : ''}`}>
                  <input 
                    type="radio" 
                    name="payOption" 
                    checked={payOption === 'deposit'} 
                    onChange={() => setPayOption('deposit')} 
                  />
                  <span>Pay Deposit Only (KES {depositAmountKES.toLocaleString()})</span>
                </label>

                <label className={`deposit-pill ${payOption === 'full' ? 'active' : ''}`}>
                  <input 
                    type="radio" 
                    name="payOption" 
                    checked={payOption === 'full'} 
                    onChange={() => setPayOption('full')} 
                  />
                  <span>Pay Full Amount (KES {totalPriceKES.toLocaleString()})</span>
                </label>
              </div>
            </div>

            <div className="owner-placeholder-banner">
              <strong>Owner Note:</strong> Prices are estimates ({selectedSession.priceNote}). Phase 1 provides interactive STK simulation.
            </div>

            {/* Submit Action */}
            <button type="submit" className="btn btn-primary btn-full btn-lg">
              <CreditCard size={18} />
              <span>Proceed to M-Pesa STK Push (KES {amountToPay.toLocaleString()})</span>
            </button>
          </form>
        )}

        {/* M-PESA DARAJA STK SIMULATION SCREEN */}
        {step === 'mpesa_push' && (
          <div className="mpesa-simulation-view text-center">
            <div className="mpesa-green-circle">
              <div className="pulse-spinner"></div>
              <span className="mpesa-tag">M-PESA</span>
            </div>

            <h3 className="mpesa-title">M-Pesa STK Push Prompt Sent</h3>
            <p className="mpesa-sub">
              A payment request of <strong>KES {amountToPay.toLocaleString()}</strong> has been initiated to your phone:
            </p>
            <div className="mpesa-phone-chip">
              <Phone size={16} />
              <strong>{mpesaNumber}</strong>
            </div>

            <div className="mpesa-instruction-card">
              <ol className="mpesa-steps">
                <li>Unlock your phone screen</li>
                <li>Verify Business Name: <strong>CLASSIC DAIRY FARM LTD</strong></li>
                <li>Enter your <strong>M-Pesa Secret PIN</strong> and press OK</li>
              </ol>
            </div>

            <div className="simulation-countdown">
              <span className="countdown-label">Simulating automated Daraja confirmation in:</span>
              <span className="countdown-number">{countdown}s</span>
            </div>

            <p className="simulation-note">
              <em>Phase 1 Front-End Demonstration: Auto-confirming to showcase user receipt and farm directions.</em>
            </p>
          </div>
        )}

        {/* BOOKING CONFIRMED SCREEN */}
        {step === 'confirmed' && confirmedBooking && (
          <div className="booking-confirmed-view">
            <div className="confirmed-badge-box">
              <CheckCircle2 size={40} className="text-primary mx-auto mb-2" />
              <h3 className="confirmed-title">Booking Confirmed!</h3>
              <p className="text-secondary">We look forward to welcoming you to Classic Dairy Farm in Nkubu.</p>
            </div>

            {/* Printable Pass */}
            <div className="booking-ticket-pass" id="printable-booking-pass">
              <div className="ticket-header">
                <div>
                  <h4 className="ticket-farm-name">CLASSIC DAIRY FARM LTD</h4>
                  <p className="ticket-sub">Nkubu, Meru County • Official Visit Pass</p>
                </div>
                <div className="ticket-ref-box">
                  <span className="ref-label">Booking Ref:</span>
                  <strong className="ref-val">{confirmedBooking.bookingRef}</strong>
                </div>
              </div>

              <div className="ticket-grid">
                <div className="ticket-field">
                  <span className="field-lbl">Session:</span>
                  <span className="field-val">{confirmedBooking.sessionTitle}</span>
                </div>
                <div className="ticket-field">
                  <span className="field-lbl">Date & Time:</span>
                  <span className="field-val">{confirmedBooking.date} • {confirmedBooking.timeSlot}</span>
                </div>
                <div className="ticket-field">
                  <span className="field-lbl">Lead Attendee:</span>
                  <span className="field-val">{confirmedBooking.fullName} ({confirmedBooking.phone})</span>
                </div>
                <div className="ticket-field">
                  <span className="field-lbl">Group Size:</span>
                  <span className="field-val">{confirmedBooking.attendees} Person(s)</span>
                </div>
                <div className="ticket-field">
                  <span className="field-lbl">Payment Status:</span>
                  <span className="field-val text-primary font-bold">
                    Paid KES {confirmedBooking.amountPaid.toLocaleString()} (M-Pesa: {confirmedBooking.mpesaRef})
                  </span>
                </div>
                <div className="ticket-field">
                  <span className="field-lbl">Balance on Arrival:</span>
                  <span className="field-val">
                    {confirmedBooking.balanceKES > 0 ? `KES ${confirmedBooking.balanceKES.toLocaleString()}` : 'Fully Paid'}
                  </span>
                </div>
              </div>

              {/* Driving Directions */}
              <div className="ticket-directions">
                <MapPin size={16} className="text-accent flex-shrink-0" />
                <div>
                  <strong>How to Reach the Farm in Nkubu:</strong>
                  <p>{FARM_INFO.directionsSummary}</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="confirmed-actions-row">
              <button onClick={handlePrint} className="btn btn-secondary">
                <Printer size={16} />
                <span>Print / Save Pass</span>
              </button>

              <a 
                href={getConfirmationWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageCircle size={16} />
                <span>Send to Farm WhatsApp</span>
              </a>

              <a 
                href={FARM_INFO.googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <MapPin size={16} />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
