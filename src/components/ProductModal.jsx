import React, { useState } from 'react';
import { 
  X, 
  ShoppingBag, 
  MessageCircle, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle,
  Clock,
  MapPin
} from 'lucide-react';
import { FARM_INFO, PRODUCTS } from '../data/farmData';

export default function ProductModal({ product, onClose, onAddToCart, onSelectRelated }) {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const totalKES = product.priceKES * quantity;
  const whatsappMsg = `Hello Classic Dairy Farm Ltd, I would like to order:
- Item: ${product.name}
- Pack Size: ${product.packSize}
- Quantity: ${quantity}
- Total Estimated: KES ${totalKES.toLocaleString()}
Please confirm delivery timeline to my address in Meru County.`;

  const whatsappUrl = `https://wa.me/${FARM_INFO.whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`;

  const relatedProducts = PRODUCTS.filter(p => p.id !== product.id && p.category === product.category).slice(0, 2);

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content product-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header-row">
          <span className="badge badge-green">{product.availabilityBadge}</span>
          <button onClick={onClose} className="modal-close-btn" aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        <div className="product-modal-body">
          <div className="product-modal-image-col">
            <div className="product-modal-img-wrap">
              <img src={product.image} alt={product.name} className="product-modal-img" />
              <div className="owner-placeholder-banner mt-2">
                <strong>Owner Note:</strong> {product.imageCaption}
              </div>
            </div>

            <div className="cold-chain-guarantee">
              <ShieldCheck size={18} className="text-primary" />
              <div>
                <strong>Farm Fresh & Chilled:</strong>
                <p>Cooled to below 4°C within 30 minutes of milking in Nkubu.</p>
              </div>
            </div>
          </div>

          <div className="product-modal-details-col">
            <span className="product-cat-pill">{product.category}</span>
            <h2 className="modal-product-title">{product.name}</h2>
            <p className="modal-pack-info">Pack / Unit: <strong>{product.packSize}</strong></p>

            <div className="modal-price-strip">
              <div className="modal-price">
                <span className="cur">KES</span>
                <span className="amount">{product.priceKES.toLocaleString()}</span>
              </div>
              {product.isPlaceholderPrice && (
                <div className="price-owner-note">
                  <AlertCircle size={14} className="text-warning" />
                  <span>{product.priceNote}</span>
                </div>
              )}
            </div>

            <p className="modal-product-desc">{product.description}</p>

            {product.specs && (
              <div className="specs-list-box">
                <h4>Quality & Specifications:</h4>
                <ul>
                  {product.specs.map((spec, i) => (
                    <li key={i}>
                      <CheckCircle2 size={14} className="text-primary" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="quantity-select-row">
              <span className="qty-label">Quantity:</span>
              <div className="qty-picker">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="qty-btn"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="qty-value">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="qty-btn"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
              <div className="total-display">
                <span className="text-muted">Total: </span>
                <strong className="text-primary">KES {totalKES.toLocaleString()}</strong>
              </div>
            </div>

            {/* Modal CTAs */}
            <div className="modal-actions-stack">
              <button 
                className="btn btn-primary btn-full"
                onClick={() => {
                  onAddToCart(product, quantity);
                  onClose();
                }}
              >
                <ShoppingBag size={18} />
                <span>Add {quantity} to Cart (KES {totalKES.toLocaleString()})</span>
              </button>

              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-full"
              >
                <MessageCircle size={18} />
                <span>Order Now via WhatsApp</span>
              </a>
            </div>

            <p className="modal-reply-hint">
              <Clock size={12} className="inline mr-1 text-accent" />
              {FARM_INFO.replyTimePromise}
            </p>
          </div>
        </div>

        {/* Related Items if available */}
        {relatedProducts.length > 0 && (
          <div className="modal-related-section">
            <h4 className="related-title">Related Items from our Nkubu Farm:</h4>
            <div className="related-grid">
              {relatedProducts.map(rel => (
                <div 
                  key={rel.id} 
                  className="related-item-card"
                  onClick={() => {
                    onSelectRelated(rel);
                  }}
                >
                  <img src={rel.image} alt={rel.name} />
                  <div>
                    <h5>{rel.name}</h5>
                    <p className="text-primary font-semibold">KES {rel.priceKES.toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
