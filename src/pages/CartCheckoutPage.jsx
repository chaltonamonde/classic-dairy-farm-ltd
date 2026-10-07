import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Trash2, 
  ArrowLeft, 
  Truck, 
  CreditCard, 
  ShieldCheck, 
  CheckCircle2, 
  MessageCircle, 
  Printer, 
  MapPin, 
  Phone, 
  Tag, 
  AlertCircle 
} from 'lucide-react';
import { DELIVERY_ZONES, FARM_INFO } from '../data/farmData';

export default function CartCheckoutPage({ 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem, 
  onClearCart, 
  onNavigate,
  onOrderCompleted 
}) {
  const [selectedZone, setSelectedZone] = useState(DELIVERY_ZONES[0].zone);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('mpesa_stk'); // 'mpesa_stk' or 'pay_on_delivery'
  const [voucherCode, setVoucherCode] = useState('');
  const [discountKES, setDiscountKES] = useState(0);
  const [voucherApplied, setVoucherApplied] = useState(false);

  // Checkout flow state
  const [isProcessing, setIsProcessing] = useState(false);
  const [countdown, setCountdown] = useState(12);
  const [confirmedOrder, setConfirmedOrder] = useState(null);

  // Subtotal Calculation
  const subtotalKES = cartItems.reduce((sum, item) => sum + (item.priceKES * item.quantity), 0);
  const activeZoneObj = DELIVERY_ZONES.find(z => z.zone === selectedZone) || DELIVERY_ZONES[0];
  const deliveryFeeKES = cartItems.length > 0 ? activeZoneObj.feeKES : 0;
  const grandTotalKES = Math.max(0, subtotalKES + deliveryFeeKES - discountKES);

  const handleApplyVoucher = (e) => {
    e.preventDefault();
    if (voucherCode.trim().toUpperCase() === 'CLASSIC100') {
      setDiscountKES(100);
      setVoucherApplied(true);
    } else {
      alert('Invalid voucher code. Try "CLASSIC100" for KES 100 off your order.');
    }
  };

  const handleProcessOrder = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      alert('Your cart is empty. Add milk or feeds before checking out.');
      return;
    }
    if (!fullName || !phone) {
      alert('Please provide your name and phone number for delivery dispatch.');
      return;
    }

    setIsProcessing(true);

    if (paymentMethod === 'mpesa_stk') {
      let timer = 12;
      const interval = setInterval(() => {
        timer -= 1;
        setCountdown(timer);
        if (timer <= 0) {
          clearInterval(interval);
          completeCheckout();
        }
      }, 1000);
    } else {
      setTimeout(() => {
        completeCheckout();
      }, 1500);
    }
  };

  const completeCheckout = () => {
    setIsProcessing(false);
    const orderRef = `CDF-ORD-${Math.floor(10000 + Math.random() * 90000)}`;
    const mpesaRef = paymentMethod === 'mpesa_stk' ? `QH${Math.random().toString(36).substring(2, 8).toUpperCase()}K` : 'PAY-ON-DELIVERY';
    
    const orderData = {
      orderRef,
      mpesaRef,
      items: [...cartItems],
      subtotalKES,
      deliveryFeeKES,
      discountKES,
      grandTotalKES,
      fullName,
      phone,
      deliveryZone: selectedZone,
      deliveryAddress: deliveryAddress || selectedZone,
      paymentMethod,
      orderDate: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
    };

    setConfirmedOrder(orderData);
    onClearCart();
    if (onOrderCompleted) onOrderCompleted(orderData);
  };

  const getWhatsAppOrderUrl = () => {
    if (!confirmedOrder) return '';
    const itemsText = confirmedOrder.items.map(it => `• ${it.name} (${it.packSize}) x ${it.quantity} = KES ${(it.priceKES * it.quantity).toLocaleString()}`).join('\n');
    const text = `Hello Classic Dairy Farm Ltd,
I have placed an order on your website:
- Order Ref: ${confirmedOrder.orderRef}
- Customer: ${confirmedOrder.fullName} (${confirmedOrder.phone})
- Delivery Location: ${confirmedOrder.deliveryAddress} (${confirmedOrder.deliveryZone})
- Items:
${itemsText}
- Subtotal: KES ${confirmedOrder.subtotalKES.toLocaleString()}
- Delivery Fee: KES ${confirmedOrder.deliveryFeeKES.toLocaleString()}
${confirmedOrder.discountKES > 0 ? `- Discount: -KES ${confirmedOrder.discountKES}\n` : ''}- Total: KES ${confirmedOrder.grandTotalKES.toLocaleString()}
- Payment: ${confirmedOrder.paymentMethod === 'mpesa_stk' ? `M-Pesa Completed (Ref: ${confirmedOrder.mpesaRef})` : 'Pay on Delivery'}
Please confirm dispatch time!`;

    return `https://wa.me/${FARM_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="cart-checkout-page-view">
      <section className="page-header-banner">
        <div className="container text-center">
          <span className="section-tag section-tag-green">
            <ShoppingBag size={12} /> Secure Checkout
          </span>
          <h1 className="page-headline">Farm Cart & Order Dispatch</h1>
          <p className="page-subline">
            Fresh morning chilled milk & dairy inputs delivered directly across Nkubu and Meru County.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {!confirmedOrder ? (
            <div className="cart-checkout-grid">
              {/* Left Column: Cart Items & Delivery Details */}
              <div className="checkout-main-col">
                <div className="card cart-items-card mb-4">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      <ShoppingBag size={20} className="text-primary" />
                      <span>Order Items ({cartItems.length})</span>
                    </h3>
                    {cartItems.length > 0 && (
                      <button onClick={onClearCart} className="text-xs text-muted hover:text-error">
                        Clear all items
                      </button>
                    )}
                  </div>

                  {cartItems.length > 0 ? (
                    <div className="cart-items-list">
                      {cartItems.map(item => (
                        <div key={item.id} className="cart-item-row">
                          <img src={item.image} alt={item.name} className="cart-item-img" />
                          <div className="cart-item-info">
                            <h4 className="cart-item-name">{item.name}</h4>
                            <span className="cart-item-pack">{item.packSize}</span>
                            <div className="cart-item-price-line">
                              KES {item.priceKES.toLocaleString()} each
                              {item.isPlaceholderPrice && <span className="text-xs text-warning ml-1">(Est.*)</span>}
                            </div>
                          </div>

                          <div className="cart-item-qty-controls">
                            <button 
                              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                              className="cart-qty-btn"
                              aria-label="Decrease quantity"
                            >
                              -
                            </button>
                            <span className="cart-qty-num">{item.quantity}</span>
                            <button 
                              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                              className="cart-qty-btn"
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                          </div>

                          <div className="cart-item-line-total">
                            <strong>KES {(item.priceKES * item.quantity).toLocaleString()}</strong>
                          </div>

                          <button 
                            onClick={() => onRemoveItem(item.id)}
                            className="cart-remove-btn"
                            aria-label={`Remove ${item.name} from cart`}
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="empty-cart-state text-center py-4">
                      <ShoppingBag size={40} className="text-muted mx-auto mb-2 opacity-50" />
                      <p className="text-lg font-medium">Your farm cart is currently empty</p>
                      <p className="text-secondary text-sm mb-3">Explore our fresh milk and silage options.</p>
                      <button onClick={() => onNavigate('products')} className="btn btn-secondary btn-sm">
                        Browse 24/7 Catalogue
                      </button>
                    </div>
                  )}
                </div>

                {/* Customer & Delivery Location Form */}
                <form id="checkout-form" onSubmit={handleProcessOrder} className="card checkout-delivery-card">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <Truck size={20} className="text-accent" />
                    <span>Delivery Location & Contact Info</span>
                  </h3>

                  <div className="form-group">
                    <label className="form-label">Delivery Destination (Town / Hub):</label>
                    <select 
                      className="form-select"
                      value={selectedZone}
                      onChange={(e) => setSelectedZone(e.target.value)}
                    >
                      {DELIVERY_ZONES.map(z => (
                        <option key={z.zone} value={z.zone}>
                          {z.zone} — {z.feeKES === 0 ? 'FREE Pickup' : `KES ${z.feeKES.toLocaleString()} Delivery`} ({z.schedule})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label className="form-label">Recipient Full Name:</label>
                      <input 
                        type="text" 
                        className="form-input" 
                        placeholder="e.g. Grace Mukami"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">M-Pesa Mobile Number:</label>
                      <input 
                        type="tel" 
                        className="form-input" 
                        placeholder="07XX XXX XXX (For STK push & driver call)"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Specific Delivery Address / Known Landmark in Meru:</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="e.g. Near Nkubu Stage behind Cooperative Bank, or Makutano Meru"
                      value={deliveryAddress}
                      onChange={(e) => setDeliveryAddress(e.target.value)}
                    />
                  </div>

                  {/* Payment Method Selector */}
                  <div className="form-group mt-4">
                    <label className="form-label">Select Payment Method:</label>
                    <div className="payment-options-grid">
                      <label className={`payment-method-card ${paymentMethod === 'mpesa_stk' ? 'active' : ''}`}>
                        <input 
                          type="radio" 
                          name="payMethod" 
                          checked={paymentMethod === 'mpesa_stk'} 
                          onChange={() => setPaymentMethod('mpesa_stk')}
                        />
                        <div className="pay-method-content">
                          <div className="flex items-center gap-2">
                            <span className="mpesa-text-badge">M-PESA</span>
                            <strong>Daraja STK Push Prompt</strong>
                          </div>
                          <p className="text-xs text-secondary mt-1">
                            An instant prompt will be sent to your phone screen to enter your M-Pesa PIN.
                          </p>
                        </div>
                      </label>

                      <label className={`payment-method-card ${paymentMethod === 'pay_on_delivery' ? 'active' : ''}`}>
                        <input 
                          type="radio" 
                          name="payMethod" 
                          checked={paymentMethod === 'pay_on_delivery'} 
                          onChange={() => setPaymentMethod('pay_on_delivery')}
                        />
                        <div className="pay-method-content">
                          <div className="flex items-center gap-2">
                            <Truck size={16} className="text-accent" />
                            <strong>Pay on Delivery / Collection</strong>
                          </div>
                          <p className="text-xs text-secondary mt-1">
                            Pay via Cash or M-Pesa Till to the rider upon receiving chilled milk bottles.
                          </p>
                        </div>
                      </label>
                    </div>
                  </div>
                </form>
              </div>

              {/* Right Column: Order Summary & Voucher */}
              <div className="checkout-summary-col">
                <div className="card order-summary-card">
                  <h3 className="summary-card-title">Order Summary</h3>

                  {/* Voucher Form */}
                  <form onSubmit={handleApplyVoucher} className="voucher-input-group mb-3">
                    <input 
                      type="text" 
                      className="form-input text-xs uppercase"
                      placeholder="Enter promo code (e.g. CLASSIC100)"
                      value={voucherCode}
                      onChange={(e) => setVoucherCode(e.target.value)}
                    />
                    <button type="submit" className="btn btn-secondary btn-sm">
                      Apply
                    </button>
                  </form>
                  {voucherApplied && (
                    <div className="voucher-success-notice mb-3">
                      <Tag size={12} className="text-primary" />
                      <span>Code CLASSIC100 applied: KES 100 off!</span>
                    </div>
                  )}

                  <div className="summary-rows-stack">
                    <div className="summary-row">
                      <span>Items Subtotal:</span>
                      <strong>KES {subtotalKES.toLocaleString()}</strong>
                    </div>

                    <div className="summary-row">
                      <span>Delivery Fee ({selectedZone.split('(')[0]}):</span>
                      <strong>{deliveryFeeKES === 0 ? 'FREE' : `KES ${deliveryFeeKES.toLocaleString()}`}</strong>
                    </div>

                    {discountKES > 0 && (
                      <div className="summary-row text-primary">
                        <span>First-Order Voucher Discount:</span>
                        <strong>- KES {discountKES.toLocaleString()}</strong>
                      </div>
                    )}

                    <div className="summary-row total-row">
                      <span>Total Payable:</span>
                      <strong className="text-primary text-xl">KES {grandTotalKES.toLocaleString()}</strong>
                    </div>
                  </div>

                  {/* Transparency Note */}
                  <div className="owner-placeholder-banner text-xs mt-3">
                    <strong>Note:</strong> Phase 1 Front-End stores order details in browser memory and allows instant transfer to farm WhatsApp.
                  </div>

                  {/* Checkout Submit Button */}
                  <div className="checkout-action-wrap mt-4">
                    {isProcessing ? (
                      <div className="mpesa-inline-processing text-center py-2">
                        <div className="pulse-spinner mx-auto mb-2"></div>
                        <p className="text-sm font-semibold">
                          Sending M-Pesa STK Prompt to <strong>{phone}</strong>...
                        </p>
                        <span className="text-xs text-muted">Auto-confirming in {countdown}s</span>
                      </div>
                    ) : (
                      <button 
                        type="submit" 
                        form="checkout-form"
                        className="btn btn-primary btn-full btn-lg"
                        disabled={cartItems.length === 0}
                      >
                        <CreditCard size={18} />
                        <span>Confirm Order (KES {grandTotalKES.toLocaleString()})</span>
                      </button>
                    )}

                    <button 
                      onClick={() => onNavigate('products')}
                      className="btn btn-secondary btn-full btn-sm mt-2"
                    >
                      <ArrowLeft size={14} />
                      <span>Continue Shopping</span>
                    </button>
                  </div>
                </div>

                {/* Reply-Time & Cold-Chain Notice */}
                <div className="card trust-mini-card mt-3">
                  <div className="flex items-center gap-2 mb-1 text-accent text-sm font-semibold">
                    <ShieldCheck size={16} />
                    <span>Cold-Chain Transit Protected</span>
                  </div>
                  <p className="text-xs text-secondary">
                    Chilled below 4°C. Free replacements guaranteed if transit conditions do not meet standard dairy specifications.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            /* ORDER CONFIRMATION SCREEN */
            <div className="card order-success-confirmation-card max-w-2xl mx-auto">
              <div className="text-center py-2">
                <CheckCircle2 size={52} className="text-primary mx-auto mb-2" />
                <h2 className="text-2xl font-bold">Order Confirmed!</h2>
                <p className="text-secondary text-sm">
                  Thank you, <strong>{confirmedOrder.fullName}</strong>. Your dairy order has been logged for dispatch from our Nkubu farm.
                </p>
              </div>

              {/* Printable Receipt Slip */}
              <div className="receipt-slip mt-4" id="printable-receipt">
                <div className="receipt-header">
                  <div>
                    <h4>CLASSIC DAIRY FARM LTD</h4>
                    <p className="text-xs text-secondary">Nkubu, Meru County • Fresh Milk Dispatch</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-muted">Order Ref:</span>
                    <strong className="block text-primary">{confirmedOrder.orderRef}</strong>
                    <span className="text-xs text-secondary">{confirmedOrder.orderDate}</span>
                  </div>
                </div>

                <div className="receipt-items-table mt-3">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-card-border text-muted text-xs">
                        <th className="text-left pb-1">Item</th>
                        <th className="text-center pb-1">Qty</th>
                        <th className="text-right pb-1">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {confirmedOrder.items.map((it, idx) => (
                        <tr key={idx} className="border-b border-card-border/50">
                          <td className="py-2">
                            <strong>{it.name}</strong>
                            <div className="text-xs text-muted">{it.packSize}</div>
                          </td>
                          <td className="text-center py-2">{it.quantity}</td>
                          <td className="text-right py-2">KES {(it.priceKES * it.quantity).toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="receipt-totals-box mt-3 text-sm">
                  <div className="flex justify-between py-1">
                    <span>Subtotal:</span>
                    <span>KES {confirmedOrder.subtotalKES.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Delivery Fee ({confirmedOrder.deliveryZone}):</span>
                    <span>{confirmedOrder.deliveryFeeKES === 0 ? 'FREE' : `KES ${confirmedOrder.deliveryFeeKES.toLocaleString()}`}</span>
                  </div>
                  {confirmedOrder.discountKES > 0 && (
                    <div className="flex justify-between py-1 text-primary">
                      <span>Voucher Discount:</span>
                      <span>- KES {confirmedOrder.discountKES.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between py-2 border-t border-card-border font-bold text-base">
                    <span>Total Amount:</span>
                    <span className="text-primary">KES {confirmedOrder.grandTotalKES.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between py-1 text-xs text-muted">
                    <span>Payment Method:</span>
                    <span>{confirmedOrder.paymentMethod === 'mpesa_stk' ? `M-Pesa (${confirmedOrder.mpesaRef})` : 'Pay on Delivery'}</span>
                  </div>
                </div>

                <div className="receipt-delivery-note mt-3">
                  <MapPin size={14} className="text-accent inline mr-1" />
                  <span className="text-xs text-secondary">
                    Delivery to: <strong>{confirmedOrder.deliveryAddress}</strong> ({confirmedOrder.deliveryZone}) • Phone: <strong>{confirmedOrder.phone}</strong>
                  </span>
                </div>
              </div>

              {/* Order Actions */}
              <div className="confirmation-actions-row mt-4">
                <a 
                  href={getWhatsAppOrderUrl()}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <MessageCircle size={16} />
                  <span>Send Order Details to Farm WhatsApp</span>
                </a>

                <button onClick={() => window.print()} className="btn btn-secondary">
                  <Printer size={16} />
                  <span>Print Receipt</span>
                </button>

                <button onClick={() => { setConfirmedOrder(null); onNavigate('products'); }} className="btn btn-primary">
                  Order More Products
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
