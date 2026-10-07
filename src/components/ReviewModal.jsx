import React, { useState } from 'react';
import { X, Star, ExternalLink, CheckCircle2, MessageSquare } from 'lucide-react';
import { FARM_INFO } from '../data/farmData';

export default function ReviewModal({ onClose, onSubmitReview }) {
  const [rating, setRating] = useState(5);
  const [name, setName] = useState('');
  const [experience, setExperience] = useState('Farm Visit & Training');
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (onSubmitReview) {
      onSubmitReview({ rating, name, experience, comment });
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content review-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header-row">
          <div>
            <span className="badge badge-warning">Customer Feedback</span>
            <h2 className="modal-title mt-1">Review Classic Dairy Farm</h2>
          </div>
          <button onClick={onClose} className="modal-close-btn" aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {/* Google Maps Real Review Prompt */}
        <div className="google-review-highlight-card">
          <div className="g-card-top">
            <span className="g-logo">G</span>
            <div>
              <strong>Classic Dairy Farm Ltd on Google Maps</strong>
              <div className="g-stars-row">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={14} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>
                <span><strong>{FARM_INFO.googleRating}</strong> ({FARM_INFO.googleReviewCount} Reviews)</span>
              </div>
            </div>
          </div>
          <p className="g-card-text">
            Have you visited our farm in Nkubu or bought our fresh milk? Help fellow Kenyan dairy farmers find us by posting an honest review on Google Maps.
          </p>
          <a 
            href={FARM_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
          >
            <span>Review Us on Google Maps</span>
            <ExternalLink size={14} />
          </a>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="review-form-body mt-4">
            <h4 className="form-subheading">Or Leave Direct Website Feedback:</h4>

            <div className="form-group text-center my-3">
              <label className="form-label mb-2">Your Rating:</label>
              <div className="star-picker">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className="star-btn"
                    onClick={() => setRating(star)}
                    aria-label={`Rate ${star} stars`}
                  >
                    <Star 
                      size={28} 
                      fill={star <= rating ? "#F59E0B" : "none"} 
                      color={star <= rating ? "#F59E0B" : "#6B8F7E"} 
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="form-row-2">
              <div className="form-group">
                <label className="form-label">Your Name:</label>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="e.g. Christine Kendi"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Nature of Visit / Interaction:</label>
                <select 
                  className="form-select"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                >
                  <option value="Farm Visit & Training">Farm Visit & Masterclass</option>
                  <option value="Fresh Milk & Mala Buyer">Fresh Milk & Mala Buyer</option>
                  <option value="Silage & Fodder Customer">Silage & Hay Customer</option>
                  <option value="Breeding Stock Buyer">Heifer / Breeding Stock Buyer</option>
                  <option value="Wholesale Dairy Buyer">Wholesale / Hotel Buyer</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Your Review & Comments:</label>
              <textarea 
                className="form-textarea"
                rows="3"
                placeholder="Share your experience regarding milk quality, farm cleanliness, or the technical advice received..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-full">
              <MessageSquare size={16} />
              <span>Submit Review</span>
            </button>
          </form>
        ) : (
          <div className="review-success-box text-center py-4">
            <CheckCircle2 size={44} className="text-primary mx-auto mb-2" />
            <h3>Asante Sana!</h3>
            <p className="text-secondary mt-1">
              Your feedback helps us continuously elevate our dairy operations and customer service in Nkubu, Meru.
            </p>
            <button onClick={onClose} className="btn btn-secondary mt-3">
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
