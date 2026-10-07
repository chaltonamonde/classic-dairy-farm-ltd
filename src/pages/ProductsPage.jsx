import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Sparkles, 
  ShoppingBag, 
  MessageCircle, 
  Info, 
  ShieldCheck, 
  RotateCcw,
  Tag
} from 'lucide-react';
import { PRODUCTS, FARM_INFO } from '../data/farmData';
import ProductCard from '../components/ProductCard';

export default function ProductsPage({ 
  onSelectProduct, 
  onAddToCart, 
  onQuickReorder 
}) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  const categories = ['All', 'Fresh Milk', 'Fermented Dairy', 'Feeds & Silage', 'Livestock & Heifers'];

  // Filter & Search Logic
  const filteredProducts = PRODUCTS.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.priceKES - b.priceKES;
    if (sortBy === 'price-high') return b.priceKES - a.priceKES;
    return 0; // featured default
  });

  return (
    <div className="products-page-view">
      {/* Page Header */}
      <section className="page-header-banner">
        <div className="container">
          <div className="page-header-content text-center">
            <span className="section-tag section-tag-green">
              <Sparkles size={12} /> 24/7 Digital Farm Store
            </span>
            <h1 className="page-headline">Farm Products & Nutrition Feeds</h1>
            <p className="page-subline">
              Pure whole milk, fermented mala, premium maize silage, and high-pedigree dairy stock directly from our Nkubu farm.
            </p>

            {/* Quick Re-Order Banner for Repeat Buyers */}
            <div className="reorder-chip-container mt-3">
              <button onClick={onQuickReorder} className="reorder-pill-btn">
                <RotateCcw size={14} />
                <span>Repeat Your Previous Order (Nkubu & Meru Delivery)</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Catalogue Section */}
      <section className="section">
        <div className="container">
          {/* Owner Transparency Banner */}
          <div className="owner-placeholder-banner mb-4">
            <div className="flex items-start gap-2">
              <Info size={16} className="text-warning flex-shrink-0 mt-0.5" />
              <div>
                <strong>Catalogue Notice for Customers:</strong>
                <p>
                  Prices shown reflect current estimated Meru market rates (e.g. fresh milk at KES 90/L, silage at KES 650/bag). 
                  Exact daily prices and live herd availability are finalized upon owner confirmation or instant WhatsApp inquiry.
                </p>
              </div>
            </div>
          </div>

          {/* Search, Filter & Sort Controls */}
          <div className="catalogue-controls-bar">
            {/* Search Input */}
            <div className="search-input-box">
              <Search size={18} className="search-icon" />
              <input 
                type="text" 
                className="catalogue-search-input"
                placeholder="Search milk, silage, mala, heifers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search products"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="clear-search-btn"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="category-pills-row">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`category-pill ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Sort Selector */}
            <div className="sort-selector-wrap">
              <span className="sort-lbl">Sort:</span>
              <select 
                className="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">Featured First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="products-catalogue-grid mt-4">
              {filteredProducts.map(product => (
                <ProductCard 
                  key={product.id}
                  product={product}
                  onSelect={onSelectProduct}
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>
          ) : (
            <div className="catalogue-empty-state text-center py-5">
              <p className="text-xl font-semibold mb-2">No items found matching "{searchQuery}"</p>
              <p className="text-secondary text-sm mb-4">
                Try searching for 'milk', 'silage', 'hay', or change the active category filter.
              </p>
              <button 
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                className="btn btn-secondary"
              >
                Reset Search Filters
              </button>
            </div>
          )}

          {/* Cold-Chain Quality Guarantee Banner */}
          <div className="cold-chain-banner-card mt-5">
            <div className="cold-chain-icon">
              <ShieldCheck size={36} className="text-primary" />
            </div>
            <div className="cold-chain-text">
              <h3>The Classic Dairy Hygiene & Chilling Guarantee</h3>
              <p>
                Every liter of our milk is drawn using sanitised stainless equipment, tested with strip-cups and lactometer density gauges, and transferred into refrigerated bulk coolers below 4°C within 30 minutes of milking in Nkubu.
              </p>
            </div>
            <div className="cold-chain-action">
              <a 
                href={`https://wa.me/${FARM_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Classic Dairy Farm, I would like to inquire about daily recurring milk delivery to my home/business.')}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-sm"
              >
                <MessageCircle size={15} />
                <span>Set Up Daily Supply</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
