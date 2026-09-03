import { useModal } from './ModalContext';
export default function ConsultationSection() {
  const { openModal } = useModal();
  return (
    <div style={{
      fontFamily: "'Inter', sans-serif",
      background: 'linear-gradient(135deg, #fff8f0 0%, #fce8e8 50%, #fff0f0 100%)',
      width: '100%',
      padding: '80px 20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxSizing: 'border-box',
    }}>

      {/* Gold badge */}
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#B8860B',
        color: '#ffffff',
        fontSize: '14px',
        fontWeight: 600,
        padding: '11px 26px',
        borderRadius: '50px',
        marginBottom: '26px',
      }}>
        Limited Slots Available
      </div>

      {/* Heading */}
      <h2 className="consult-headline" style={{
        fontSize: 'clamp(28px, 3.2vw, 44px)',
        fontWeight: 700,
        color: '#0d0d0d',
        margin: '0 0 18px 0',
        lineHeight: 1.15,
        letterSpacing: '-0.2px',
        textAlign: 'center',
        maxWidth: '820px',
      }}>
        Book Your Free Consultation Today
      </h2>

      {/* Subtitle */}
      <p style={{
        fontSize: '15px',
        fontWeight: 400,
        color: '#777777',
        margin: '0 0 42px 0',
        textAlign: 'center',
        maxWidth: '600px',
        lineHeight: 1.6,
      }}>
        Transform your look with confidence. Our expert dermatologists are ready to help you achieve your aesthetic goals.
      </p>

      {/* 3 CTA Buttons */}
      <div style={{
        display: 'flex',
        gap: '16px',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: '48px',
      }}>

        {/* Call Now - dark gold */}
        <a href="tel:+971542669345" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          background: '#8B6914',
          color: '#ffffff',
          fontSize: '16px',
          fontWeight: 600,
          height: '48px',
          padding: '12px 24px',
          borderRadius: '8px',
          textDecoration: 'none',
          border: 'none',
          cursor: 'pointer',
          whiteSpace: 'nowrap',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 6px 16px rgba(139,105,20,0.3)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}>
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.7 12.09a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.42h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          Call Now
        </a>

        {/* WhatsApp - green */}
        <a href="https://wa.me/971542669345" target="_blank" rel="nofollow noopener noreferrer" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          background: '#22C55E',
          color: '#ffffff',
          fontSize: '16px',
          fontWeight: 600,
          height: '48px',
          padding: '12px 24px',
          borderRadius: '8px',
          textDecoration: 'none',
          border: 'none',
          cursor: 'pointer',
          whiteSpace: 'nowrap',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 6px 16px rgba(34,197,94,0.3)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}>
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <path d="M8 12a4 4 0 0 0 8 0"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
          </svg>
          Whatsapp
        </a>

        {/* Book Online - outlined gold */}
        <a  onClick={openModal} style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          background: 'transparent',
          color: '#B8860B',
          fontSize: '16px',
          fontWeight: 600,
          height: '48px',
          padding: '12px 24px',
          borderRadius: '8px',
          textDecoration: 'none',
          border: '2px solid #B8860B',
          cursor: 'pointer',
          whiteSpace: 'nowrap',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 6px 16px rgba(184,134,11,0.2)';
          e.currentTarget.style.background = '#B8860B';
          e.currentTarget.style.color = '#ffffff';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.color = '#B8860B';
        }}>
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          Book Online
        </a>

      </div>

      {/* Map card */}
      <div style={{
        width: '100%',
        maxWidth: '680px',
        background: '#ffffff',
        borderRadius: '18px',
        overflow: 'hidden',
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        border: '1px solid #f0e8e0',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)';
      }}>

        {/* Card header */}
        <div style={{
          padding: '22px 28px 8px',
          textAlign: 'center',
        }}>
          <p style={{
            margin: '0 0 8px 0',
            fontSize: '17px',
            fontWeight: 700,
            color: '#111111',
          }}>
            Visit Our Dubai Clinic
          </p>
          <p style={{
            margin: '0 0 16px 0',
            fontSize: '14.5px',
            fontWeight: 400,
            color: '#777777',
            lineHeight: 1.5,
          }}>
            Ground Floor, Jumeirah terrace Building, 12 Al Dhiyafah Rd – Jumeirah 1 – Dubai
          </p>
        </div>

        {/* Google Map embed */}
        <div style={{
          width: '100%',
          height: '260px',
          overflow: 'hidden',
        }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.5!2d55.2708!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1cbb7e2!2sRama%20Care%20Polyclinic!5e0!3m2!1sen!2sae!4v1"
            width="100%"
            height="260"
            style={{ border: 'none', display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="RamaCare Polyclinic Location"
          />
        </div>

        {/* Bottom trust row */}
        <div style={{
          padding: '18px 28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '32px',
          flexWrap: 'wrap',
          borderTop: '1px solid #f5f0eb',
        }}>
          {['DHA Licensed', 'Free Parking', '10+ Years of Exp.'].map((item) => (
            <div key={item} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '14px',
              fontWeight: 500,
              color: '#444444',
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B8860B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              {item}
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 1280px) {
          .consult-headline { font-size: 40px; }
        }
        @media (max-width: 1024px) {
          .consult-headline { font-size: 36px; }
        }
        @media (max-width: 768px) {
          .consult-headline { font-size: 30px; }
        }
      `}</style>

    </div>
  );
}
