import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { FARM_INFO } from '../data/farmData';

export default function WhatsAppSticky({ contextMessage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const defaultMsg = contextMessage || "Hello Classic Dairy Farm Ltd, I'm visiting your website and would like to inquire about milk orders and farm visits.";

  const handleSend = (msgToSend) => {
    const text = encodeURIComponent(msgToSend || defaultMsg);
    window.open(`https://wa.me/${FARM_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="whatsapp-floating-container">
      {isOpen ? (
        <div className="whatsapp-popup-card">
          <div className="whatsapp-popup-header">
            <div className="wa-avatar-row">
              <div className="wa-avatar">🐄</div>
              <div>
                <h4 className="wa-name">{FARM_INFO.name}</h4>
                <span className="wa-status">
                  <span className="status-dot"></span> Online • Nkubu, Meru
                </span>
              </div>
            </div>
            <button 
              className="wa-close-btn" 
              onClick={() => setIsOpen(false)}
              aria-label="Close WhatsApp chat prompt"
            >
              <X size={18} />
            </button>
          </div>

          <div className="whatsapp-popup-body">
            <div className="wa-bubble">
              <p>Habari! 👋 Welcome to Classic Dairy Farm in Nkubu.</p>
              <p className="mt-1">How can we assist you today? We usually reply within 15 minutes during farm hours.</p>
            </div>

            <div className="wa-quick-chips">
              <button 
                className="wa-chip"
                onClick={() => handleSend("Hello Classic Dairy Farm, I'd like to order fresh chilled milk in Nkubu/Meru.")}
              >
                🥛 Order Fresh Milk
              </button>
              <button 
                className="wa-chip"
                onClick={() => handleSend("Hello Classic Dairy Farm, I want to book a practical farm training visit.")}
              >
                📅 Book Farm Training
              </button>
              <button 
                className="wa-chip"
                onClick={() => handleSend("Hello Classic Dairy Farm, what are your silage bales and hay prices?")}
              >
                🌾 Inquire on Silage & Feeds
              </button>
              <button 
                className="wa-chip"
                onClick={() => handleSend("Hello, I am a hotel/shop owner in Meru looking for wholesale milk supply.")}
              >
                🏢 Wholesale Supply Quote
              </button>
            </div>

            <div className="wa-input-row">
              <input 
                type="text" 
                className="form-input text-sm"
                placeholder="Type your message..."
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && customMsg.trim()) {
                    handleSend(customMsg);
                    setCustomMsg('');
                  }
                }}
              />
              <button 
                className="btn btn-whatsapp btn-sm"
                onClick={() => {
                  handleSend(customMsg || defaultMsg);
                  setCustomMsg('');
                }}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          className="whatsapp-floating-btn"
          onClick={() => setIsOpen(true)}
          aria-label="Open WhatsApp live inquiry chat"
          title="Instant WhatsApp Chat with Classic Dairy Farm"
        >
          <div className="wa-tooltip">
            <span className="pulse-dot"></span>
            <span>Fast reply (~15 mins)</span>
          </div>
          <MessageCircle size={28} />
        </button>
      )}
    </div>
  );
}
