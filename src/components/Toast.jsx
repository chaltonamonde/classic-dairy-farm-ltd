import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  const icons = {
    success: <CheckCircle2 size={18} className="text-primary" />,
    error: <AlertCircle size={18} className="text-error" />,
    info: <Info size={18} className="text-accent" />
  };

  return (
    <div className={`toast-notification toast-${toast.type || 'success'}`} role="status">
      <div className="toast-icon">
        {icons[toast.type] || icons.success}
      </div>
      <div className="toast-body">
        {toast.title && <strong className="toast-title">{toast.title}</strong>}
        <p className="toast-message">{toast.message}</p>
      </div>
      <button 
        onClick={onClose} 
        className="toast-close-btn"
        aria-label="Close notification"
      >
        <X size={14} />
      </button>
    </div>
  );
}
