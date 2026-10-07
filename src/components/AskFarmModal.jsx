import React, { useState } from 'react';
import { X, MessageCircle, HelpCircle, Send, CheckCircle2, Clock, Phone } from 'lucide-react';
import { FARM_INFO } from '../data/farmData';

export default function AskFarmModal({ onClose, onSubmitSuccess }) {
  const [topic, setTopic] = useState('Feeding & Silage Ratios');
  const [question, setQuestion] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleWhatsAppDirect = () => {
    const text = `Hello Classic Dairy Farm Ltd,
I have a farming question from your website:
- Topic: ${topic}
- Name: ${name || 'Farmer'}
- My Question: ${question || 'I would like technical guidance on dairy farming.'}
Looking forward to your advice!`;
    window.open(`https://wa.me/${FARM_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleSubmitWeb = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (onSubmitSuccess) {
      onSubmitSuccess({ topic, question, name, phone });
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content ask-farm-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header-row">
          <div>
            <span className="badge badge-green">Technical Dairy Support</span>
            <h2 className="modal-title mt-1">Ask the Dairy Farm</h2>
          </div>
          <button onClick={onClose} className="modal-close-btn" aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmitWeb} className="ask-form-body">
            <p className="text-secondary text-sm mb-3">
              Got a challenge with cow feeding, housing, low milk yield, or disease in Meru? Our experienced farm management team provides practical answers based on real zero-grazing experience.
            </p>

            <div className="form-group">
              <label className="form-label">Question Category:</label>
              <select 
                className="form-select"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              >
                <option value="Feeding & Silage Ratios">Nutrition, TMR & Silage Formulation</option>
                <option value="Zero-Grazing Shed Construction">Zero-Grazing Shed Design & Bedding</option>
                <option value="Breeds, AI Sires & Fertility">Breeds, AI Sires & Repeat Breeders</option>
                <option value="Mastitis & Milk Quality">Mastitis Prevention & Milking Hygiene</option>
                <option value="Calf Rearing & Health">Calf Management & Weaning Protocols</option>
                <option value="Fresh Milk Supply / Prices">Milk Purchasing & Wholesale Supply</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Your Question or Farm Challenge:</label>
              <textarea 
                className="form-textarea"
                rows="4"
                placeholder="e.g. My Friesian cow calved 60 days ago and is giving only 14 liters. I feed Napier grass and 4kg dairy meal. What should I adjust?"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                required
              ></textarea>
            </div>

            <div className="form-row-2">
              <div className="form-group">
                <label className="form-label">Your Name:</label>
                <input 
                  type="text" 
                  className="form-input"
                  placeholder="e.g. Samuel Mutuma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Phone / WhatsApp Number:</label>
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

            <div className="ask-actions-stack">
              <button type="submit" className="btn btn-primary btn-full">
                <Send size={16} />
                <span>Submit Question (Get Answer via SMS/Call)</span>
              </button>

              <button 
                type="button" 
                className="btn btn-whatsapp btn-full"
                onClick={handleWhatsAppDirect}
              >
                <MessageCircle size={16} />
                <span>Ask Instantly on WhatsApp</span>
              </button>
            </div>

            <div className="promise-note-inline">
              <Clock size={14} className="text-accent flex-shrink-0" />
              <span>{FARM_INFO.replyTimePromise}</span>
            </div>
          </form>
        ) : (
          <div className="ask-success-box text-center">
            <CheckCircle2 size={48} className="text-primary mx-auto mb-2" />
            <h3>Question Received!</h3>
            <p className="text-secondary mt-1">
              Thank you, <strong>{name}</strong>. Our farm manager has received your question on <em>{topic}</em> and will reach out to <strong>{phone}</strong> shortly.
            </p>

            <div className="success-action-btns mt-4">
              <button 
                className="btn btn-whatsapp"
                onClick={handleWhatsAppDirect}
              >
                <MessageCircle size={16} />
                <span>Follow up on WhatsApp</span>
              </button>
              <button onClick={onClose} className="btn btn-secondary">
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
