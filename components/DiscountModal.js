import { useEffect, useState } from 'react';
import { useModal } from './ModalContext';

export default function DiscountModal() {
  const { isOpen, closeModal } = useModal();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    date: '',
    timeSlot: '',
    message: ''
  });
  const [error, setError] = useState('');

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [closeModal]);

  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const validPhone = (v) => /^[0-9+\-\s()]{7,}$/.test(v.trim());

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName.trim()) {
      setError('Please enter your full name');
      return;
    }
    if (!validPhone(formData.phone)) {
      setError('Enter a valid phone number');
      return;
    }
    setError('');

    // Call the local API
    try {
      const response = await fetch('/api/offers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          additionalInfo: `Date: ${formData.date}, Time: ${formData.timeSlot}, Message: ${formData.message}`,
          source: 'discount-modal'
        }),
      });

      if (response.ok) {
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'generate_lead', {
            form_name: 'DiscountModal',
          });
        }
        // Redirect to confirmation page instead of WhatsApp
        window.location.href = '/request-confirmed';
      } else {
        setError('Failed to submit. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    }
  };

  const goWhatsApp = () => {
    const msg = encodeURIComponent('Hi, I want to claim the 40% discount on dermal fillers.');
    window.open(`https://wa.me/971542669345?text=${msg}`, '_blank');
  };

  const callNow = () => {
    window.location.href = 'tel:+971542669345';
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="discount-overlay" onMouseDown={(e) => {
      if (e.target === e.currentTarget) closeModal();
    }} style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.6)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100000,
      padding: '20px',
      overflowY: 'auto',
      WebkitOverflowScrolling: 'touch',
      colorScheme: 'light',
    }}>
      <div className="discount-card" onMouseDown={(e) => e.stopPropagation()} style={{
        width: 'min(480px, 100%)',
        borderRadius: '12px',
        background: '#ffffff',
        border: '3px solid #d4a84b',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        overflow: 'hidden',
        position: 'relative',
        maxHeight: '90vh',
        overflowY: 'auto',
        colorScheme: 'light',
      }}>
        <button aria-label="Close" onClick={closeModal} style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          border: '1px solid #ddd',
          background: '#fff',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <div style={{ padding: '24px 28px 28px', fontFamily: "'Inter', sans-serif" }}>
          {/* Gift Icon */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            background: '#fff5f0',
            border: '2px solid #f4d7c7',
            margin: '0 auto 12px',
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d4a84b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="8" width="18" height="4" rx="1"/>
              <path d="M12 8v13"/>
              <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/>
              <path d="M7.5 8a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 2.5 2.5v5"/>
              <path d="M16.5 8v-2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1-2.5 2.5h-5"/>
            </svg>
          </div>

          <h3 style={{
            margin: '0 0 4px 0',
            textAlign: 'center',
            fontSize: '22px',
            fontWeight: 700,
            color: '#1a1a1a',
          }}>
            Claim Your 40% Discount Now!
          </h3>
          <p style={{
            margin: '0 0 16px 0',
            textAlign: 'center',
            fontSize: '13px',
            color: '#666'
          }}>
            Plus get a <span style={{ color: '#2d7d46', fontWeight: 600 }}>FREE consultation worth AED 500</span>
          </p>

          {/* Benefits Box */}
          <div style={{
            background: '#fff0f0',
            borderRadius: '8px',
            padding: '14px 16px',
            marginBottom: '16px'
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px' }}>
              <span style={{ color: '#d4a84b', fontSize: '14px', marginTop: '2px' }}>✓</span>
              <span style={{ fontSize: '13px', color: '#444', lineHeight: '1.4' }}>FDA-approved premium fillers</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px' }}>
              <span style={{ color: '#d4a84b', fontSize: '14px', marginTop: '2px' }}>✓</span>
              <span style={{ fontSize: '13px', color: '#444', lineHeight: '1.4' }}>Expert dermatologists - 10+ years experience</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <span style={{ color: '#d4a84b', fontSize: '14px', marginTop: '2px' }}>✓</span>
              <span style={{ fontSize: '13px', color: '#444', lineHeight: '1.4' }}>Flexible Payments - Flexible Payments - Results you&apos;ll love</span>
            </div>
          </div>

          <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {/* Full Name */}
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              style={{
                width: '100%',
                padding: '12px 14px',
                borderRadius: '6px',
                border: '1px solid #d4a84b',
                outline: 'none',
                fontSize: '14px',
                background: '#ffffff',
                color: '#1a1a1a',
                boxSizing: 'border-box',
              }}
            />

            {/* Phone */}
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+971 XX XXX XXXX"
              inputMode="tel"
              style={{
                width: '100%',
                padding: '12px 14px',
                borderRadius: '6px',
                border: '1px solid #d4a84b',
                outline: 'none',
                fontSize: '14px',
                background: '#ffffff',
                color: '#1a1a1a',
                boxSizing: 'border-box',
              }}
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              style={{
                width: '100%',
                padding: '12px 14px',
                borderRadius: '6px',
                border: '1px solid #d4a84b',
                outline: 'none',
                fontSize: '14px',
                background: '#ffffff',
                color: '#1a1a1a',
                boxSizing: 'border-box',
              }}
            />

            {/* Date and Time Row */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                style={{
                  flex: 1,
                  padding: '12px 14px',
                  borderRadius: '6px',
                  border: '1px solid #d4a84b',
                  outline: 'none',
                  fontSize: '14px',
                  background: '#ffffff',
                  color: '#1a1a1a',
                  boxSizing: 'border-box',
                }}
              />
              <select
                name="timeSlot"
                value={formData.timeSlot}
                onChange={handleChange}
                style={{
                  flex: 1,
                  padding: '12px 14px',
                  borderRadius: '6px',
                  border: '1px solid #d4a84b',
                  outline: 'none',
                  fontSize: '14px',
                  background: '#ffffff',
                  color: '#1a1a1a',
                  cursor: 'pointer',
                  boxSizing: 'border-box',
                }}
              >
                <option value="">Select time slot</option>
                <option value="9:00 AM">9:00 AM</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="2:00 PM">2:00 PM</option>
                <option value="3:00 PM">3:00 PM</option>
                <option value="4:00 PM">4:00 PM</option>
                <option value="5:00 PM">5:00 PM</option>
              </select>
            </div>

            {/* Message */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Additional information."
              rows={3}
              style={{
                width: '100%',
                padding: '12px 14px',
                borderRadius: '6px',
                border: '1px solid #d4a84b',
                outline: 'none',
                fontSize: '14px',
                background: '#ffffff',
                color: '#1a1a1a',
                resize: 'none',
                minHeight: '80px',
                boxSizing: 'border-box',
              }}
            />

            {error ? <div style={{ color: '#dc2626', fontSize: '12px' }}>{error}</div> : null}

            <button type="submit" style={{
              height: '48px',
              borderRadius: '8px',
              background: '#c49a2c',
              color: '#fff',
              fontWeight: 600,
              fontSize: '15px',
              border: 'none',
              cursor: 'pointer',
              marginTop: '4px'
            }}>
              Get My 40% Discount →
            </button>
          </form>

          <p style={{
            margin: '14px 0 12px',
            textAlign: 'center',
            fontSize: '12px',
            color: '#666'
          }}>
            Or contact us directly:
          </p>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={goWhatsApp} style={{
              flex: 1,
              height: '40px',
              borderRadius: '6px',
              border: '1px solid #22C55E',
              background: '#fff',
              color: '#22C55E',
              fontWeight: 500,
              fontSize: '14px',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.48A11.78 11.78 0 0 0 12.06 0C5.5 0 .21 5.3.21 11.84c0 2.09.55 4.14 1.59 5.94L0 24l6.38-1.67a11.77 11.77 0 0 0 5.68 1.45h.01c6.56 0 11.85-5.29 11.85-11.85 0-3.17-1.23-6.15-3.41-8.39zm-8.46 18.9h-.01a9.83 9.83 0 0 1-5.02-1.38l-.36-.21-3.78.99 1.01-3.68-.24-.38a9.83 9.83 0 1 1 8.39 4.66zm5.43-7.38c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.77-1.68-2.07-.18-.3-.02-.46.13-.61.13-.13.3-.35.44-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.24-.24-.57-.49-.5-.67-.5-.17 0-.37 0-.57 0-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.47 0 1.45 1.08 2.85 1.23 3.04.15.2 2.12 3.23 5.13 4.53.72.31 1.28.49 1.72.63.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.41.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/></svg>
              WhatsApp
            </button>
            <button onClick={callNow} style={{
              flex: 1,
              height: '40px',
              borderRadius: '6px',
              border: '1px solid #d4a84b',
              background: '#fff',
              color: '#c49a2c',
              fontWeight: 500,
              fontSize: '14px',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.11.37 2.3.57 3.58.57a1 1 0 0 1 1 1V22a1 1 0 0 1-1 1C10.85 23 1 13.15 1 1a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.28.2 2.47.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z"/></svg>
              Call Now
            </button>
          </div>

          <p style={{ margin: '14px 0 0', fontSize: '11px', color: '#888', textAlign: 'center', lineHeight: '1.5' }}>
            <span style={{ marginRight: '4px' }}>🔒</span>
            Your information is 100% secure. We&apos;ll call you within 5 minutes to schedule.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .discount-card { width: 100%; }
        }
      `}</style>
    </div>
  );
}
