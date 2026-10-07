import React from 'react';
import { ShoppingBag, MessageCircle, Eye, Info, Check } from 'lucide-react';
import { FARM_INFO } from '../data/farmData';

export default function ProductCard({ product, onSelect, onAddToCart }) {
  const whatsappMsg = `Hello Classic Dairy Farm, I would like to order: ${product.name} (${product.packSize}) at estimated KES ${product.priceKES.toLocaleString()}. Please confirm availability and delivery to my location.`;
  const whatsappUrl = `https://wa.me/${FARM_INFO.whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <div className="card product-card">
      {/* Product Image Box */}
      <div className="product-image-wrap" onClick={() => onSelect(product)}>
        <img 
          src={product.image} 
          alt={product.name} 
          className="product-img"
          loading="lazy"
        />
        <div className="product-image-overlay">
          <button className="btn btn-secondary btn-sm" aria-label={`View details of ${product.name}`}>
            <Eye size={14} />
            <span>Details</span>
          </button>
        </div>

        {/* Availability Badge */}
        <span className={`badge badge-${product.badgeType} product-badge`}>
          {product.availabilityBadge}
        </span>

        {/* Temporary Stock/Owner Image Notice */}
        <span className="stock-photo-tag" title="Real farm photo to be supplied by owner">
          Owner Asset Placeholder
        </span>
      </div>

      {/* Product Info */}
      <div className="product-info">
        <div className="product-cat-row">
          <span className="product-category">{product.category}</span>
          <span className="product-pack-size">{product.packSize}</span>
        </div>

        <h3 className="product-title" onClick={() => onSelect(product)}>
          {product.name}
        </h3>

        <p className="product-desc-snippet">
          {product.description}
        </p>

        {/* Price Row with Placeholder Marking */}
        <div className="product-price-box">
          <div className="price-main">
            <span className="currency-label">KES</span>
            <span className="price-num">{product.priceKES.toLocaleString()}</span>
          </div>
          {product.isPlaceholderPrice && (
            <span className="price-placeholder-chip" title="Owner to confirm exact retail price">
              Est. Price*
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="product-actions-grid">
          <button 
            className="btn btn-primary btn-sm btn-cart"
            onClick={() => onAddToCart(product)}
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingBag size={15} />
            <span>Add to Cart</span>
          </button>

          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-sm btn-wa-order"
            title="Order directly via WhatsApp"
            aria-label={`Order ${product.name} via WhatsApp`}
          >
            <MessageCircle size={15} />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
