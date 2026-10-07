import React from 'react';
import { X, ShieldCheck, FileText, Truck, RefreshCcw } from 'lucide-react';
import { FARM_INFO } from '../data/farmData';

export default function PolicyModal({ policyType, onClose }) {
  if (!policyType) return null;

  const contentMap = {
    privacy: {
      title: "Privacy Policy",
      icon: <ShieldCheck size={24} className="text-primary" />,
      content: (
        <div>
          <p>Last updated: October 2026</p>
          <h4 className="policy-section-title">1. Introduction</h4>
          <p>Classic Dairy Farm Ltd ("we", "our", or "the Farm"), operating in Nkubu, Meru County, Kenya, respects your privacy and is committed to protecting your personal information under the Kenya Data Protection Act, 2019.</p>

          <h4 className="policy-section-title">2. Data We Collect</h4>
          <p>We collect customer contact names, telephone numbers (specifically M-Pesa mobile numbers for dispatch and payment confirmation), delivery addresses in Meru and surrounding areas, and farm visit booking requirements.</p>

          <h4 className="policy-section-title">3. How We Use Your Data</h4>
          <p>Your details are used solely to fulfill farm milk and feed orders, send M-Pesa payment receipts, coordinate farm gate and town deliveries, and provide technical answers to your agricultural inquiries.</p>

          <h4 className="policy-section-title">4. Third-Party Sharing</h4>
          <p>We do not sell, rent, or trade your contact numbers. Information is shared only with certified courier and local transport riders for order fulfillment or when required by Kenyan law.</p>

          <h4 className="policy-section-title">5. Contact Us</h4>
          <p>For data privacy inquiries, contact our management in Nkubu at {FARM_INFO.phone} or via {FARM_INFO.email}.</p>
        </div>
      )
    },
    terms: {
      title: "Terms of Service",
      icon: <FileText size={24} className="text-accent" />,
      content: (
        <div>
          <p>Last updated: October 2026</p>
          <h4 className="policy-section-title">1. Farm Operations</h4>
          <p>Classic Dairy Farm Ltd provides agricultural milk products, animal feeds, and practical training sessions at our premises in Nkubu, Meru County. All visits must follow farm biosecurity protocols.</p>

          <h4 className="policy-section-title">2. Pricing & Orders</h4>
          <p>All prices quoted on this website are in Kenya Shillings (KES). While every effort is made to maintain accurate pricing, farm retail prices remain subject to seasonal feed costs and owner confirmation.</p>

          <h4 className="policy-section-title">3. Biosecurity Regulations for Visitors</h4>
          <p>All visitors to our zero-grazing unit must step through disinfectant footbaths at the farm gate. Visitors who have visited farms with contagious livestock diseases within 48 hours must inform management prior to entry.</p>

          <h4 className="policy-section-title">4. Phase 1 Architecture Notice</h4>
          <p>Phase 1 represents a front-end client interface with simulated payment handoffs. Formal transactions are finalized via official M-Pesa Till/Paybill numbers and verified delivery receipts.</p>
        </div>
      )
    },
    delivery: {
      title: "Delivery & Cold-Chain Policy",
      icon: <Truck size={24} className="text-primary" />,
      content: (
        <div>
          <p>Last updated: October 2026</p>
          <h4 className="policy-section-title">1. Cold-Chain Commitment</h4>
          <p>Fresh whole milk is perishable. At Classic Dairy Farm, all milk is chilled to below 4°C immediately following morning and evening milkings. Milk dispatched for delivery is packed in insulated containers to maintain temperature integrity.</p>

          <h4 className="policy-section-title">2. Delivery Schedule by Town</h4>
          <ul className="policy-list">
            <li><strong>Nkubu Town:</strong> Dispatched twice daily (7:00 AM & 5:00 PM).</li>
            <li><strong>Meru Town & Makutano:</strong> Daily morning transit arriving before 7:30 AM.</li>
            <li><strong>Chuka, Maua & Timau:</strong> Scheduled morning runs on designated weekdays.</li>
          </ul>

          <h4 className="policy-section-title">3. Customer Receiving Obligations</h4>
          <p>Due to the pure unpreserved nature of our fresh farm milk, recipients must receive their delivery promptly and refrigerate immediately upon arrival.</p>
        </div>
      )
    },
    refund: {
      title: "Refund & Replacement Policy",
      icon: <RefreshCcw size={24} className="text-warning" />,
      content: (
        <div>
          <p>Last updated: October 2026</p>
          <h4 className="policy-section-title">1. Fresh Milk Guarantee</h4>
          <p>If our fresh milk curdles or fails standard boil tests upon immediate receipt due to cold-chain breakdown on our transit end, we offer an immediate 100% replacement or full refund via M-Pesa.</p>

          <h4 className="policy-section-title">2. Training & Farm Visit Cancellations</h4>
          <p>Reservations can be rescheduled free of charge with at least 24 hours notice. Deposits for cancellations made within 24 hours can be credited toward a future masterclass date or milk purchase.</p>

          <h4 className="policy-section-title">3. Animal Sales (Heifers)</h4>
          <p>All breeding animals are sold strictly upon on-site physical inspection and veterinary health clearance in Nkubu before transit documents are issued.</p>
        </div>
      )
    }
  };

  const current = contentMap[policyType] || contentMap.privacy;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content policy-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header-row">
          <div className="flex items-center gap-2">
            {current.icon}
            <h2 className="modal-title">{current.title}</h2>
          </div>
          <button onClick={onClose} className="modal-close-btn" aria-label="Close policy modal">
            <X size={20} />
          </button>
        </div>

        <div className="policy-modal-body">
          {current.content}
        </div>

        <div className="modal-footer-row mt-4">
          <button onClick={onClose} className="btn btn-secondary btn-full">
            Close Policy
          </button>
        </div>
      </div>
    </div>
  );
}
