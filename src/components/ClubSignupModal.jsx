import React, { useState } from 'react';
import { X, Gift, Download, CheckCircle2, MessageCircle, Sparkles, Copy, Check } from 'lucide-react';
import { FARM_INFO } from '../data/farmData';

export default function ClubSignupModal({ onClose, onJoined }) {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [farmerType, setFarmerType] = useState('Dairy Farmer in Meru / Mt Kenya');
  const [submitted, setSubmitted] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const discountCode = "CLASSIC100";

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (onJoined) {
      onJoined({ phone, email, farmerType, discountCode });
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(discountCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content club-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header-row">
          <span className="badge badge-green">Classic Dairy Farmers Club</span>
          <button onClick={onClose} className="modal-close-btn" aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {!submitted ? (
          <div className="club-modal-body">
            <div className="club-gift-icon-box">
              <Gift size={32} className="text-primary" />
            </div>

            <h2 className="modal-title text-center">Join Our Farmer Circle & Save</h2>
            <p className="modal-desc text-center">
              Sign up with your WhatsApp number or email to receive:
            </p>

            <div className="incentive-cards-list">
              <div className="incentive-item">
                <span className="inc-icon">🎁</span>
                <div>
                  <strong>KES 100 Off Your First Order:</strong>
                  <p>Applicable to fresh milk, mala, or silage purchases.</p>
                </div>
              </div>
              <div className="incentive-item">
                <span className="inc-icon">📖</span>
                <div>
                  <strong>Free Mt. Kenya Dairy Guide (PDF):</strong>
                  <p>Practical TMR rations, silage recipes & mastitis control blueprints.</p>
                </div>
              </div>
              <div className="incentive-item">
                <span className="inc-icon">📲</span>
                <div>
                  <strong>Exclusive WhatsApp Herd Updates:</strong>
                  <p>First notice on available in-calf heifers and fresh silage bailing runs.</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="club-form-stack mt-3">
              <div className="form-group">
                <label className="form-label">WhatsApp Number (For instant coupon & alerts):</label>
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
                <label className="form-label">Email Address (Optional for PDF Guide):</label>
                <input 
                  type="email"
                  className="form-input"
                  placeholder="farmer@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">I am a:</label>
                <select 
                  className="form-select"
                  value={farmerType}
                  onChange={(e) => setFarmerType(e.target.value)}
                >
                  <option value="Dairy Farmer in Meru / Mt Kenya">Active Dairy Farmer in Meru / Mt. Kenya</option>
                  <option value="Prospective Dairy Agribusiness Investor">Prospective Dairy Agribusiness Investor</option>
                  <option value="Hotel / Shop / Bulk Milk Buyer">Hotel / Shop / Bulk Milk Buyer</option>
                  <option value="Household Milk Consumer in Nkubu/Meru">Household Milk Consumer in Nkubu / Meru</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary btn-full btn-lg">
                <Sparkles size={16} />
                <span>Claim Voucher & Free Dairy Guide</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="club-success-body text-center py-3">
            <CheckCircle2 size={48} className="text-primary mx-auto mb-2" />
            <h3 className="text-2xl font-bold">Karibu to the Classic Dairy Club!</h3>
            <p className="text-secondary mt-1">Here is your welcome voucher code for online or WhatsApp orders:</p>

            <div className="coupon-code-box">
              <span className="coupon-code">{discountCode}</span>
              <button 
                onClick={handleCopy}
                className="btn btn-secondary btn-sm copy-btn"
                title="Copy voucher code"
              >
                {copiedCode ? <Check size={14} className="text-primary" /> : <Copy size={14} />}
                <span>{copiedCode ? 'Copied!' : 'Copy Code'}</span>
              </button>
            </div>
            <p className="text-xs text-muted mt-1">Use this code at checkout to get KES 100 off your order.</p>

            <div className="download-guide-box mt-4">
              <Download size={20} className="text-accent" />
              <div className="text-left">
                <strong>Mount Kenya High-Yield Dairy Guide</strong>
                <p className="text-xs text-secondary">Free 24-page handbook (PDF)</p>
              </div>
              <button 
                onClick={() => alert('PDF guide download initiated! Check your downloads folder or WhatsApp for the copy.')}
                className="btn btn-secondary btn-sm ml-auto"
              >
                Download PDF
              </button>
            </div>

            <div className="mt-4">
              <button onClick={onClose} className="btn btn-primary">
                Done & Return to Site
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
