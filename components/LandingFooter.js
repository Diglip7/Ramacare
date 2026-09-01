export default function Footer() {
  return (
    <footer style={{
      fontFamily: "'Inter', sans-serif",
      background: '#1a1a1a',
      width: '100%',
      padding: '32px 20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px',
      boxSizing: 'border-box',
    }}>

      {/* Clinic name */}
      <p style={{
        margin: 0,
        fontSize: '15px',
        fontWeight: 700,
        color: '#ffffff',
        textAlign: 'center',
      }}>
        Rama Care Polyclinic
      </p>

      {/* Address */}
      <p style={{
        margin: 0,
        fontSize: '13.5px',
        fontWeight: 400,
        color: '#aaaaaa',
        textAlign: 'center',
        lineHeight: 1.5,
      }}>
        Ground Floor, Jumeirah terrace Building, 12 Al Dhiyafah Rd – Jumeirah – Jumeirah 1 – Dubai
      </p>

      {/* Links row */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: '4px',
      }}>
        <a href="https://ramacarepolyclinic.ae/privacy-policy/" style={{
          fontSize: '13.5px',
          fontWeight: 400,
          color: '#cccccc',
          textDecoration: 'none',
        }}>
          Privacy Policy
        </a>
        <span style={{ color: '#555555', fontSize: '13px' }}>|</span>
        <a href="https://ramacarepolyclinic.ae/refund-and-cancellation-policy/" style={{
          fontSize: '13.5px',
          fontWeight: 400,
          color: '#cccccc',
          textDecoration: 'none',
        }}>
          Refund & Cancellation Policy
        </a>
        <span style={{ color: '#555555', fontSize: '13px' }}>|</span>
        <a href="tel:+971542669345" style={{
          fontSize: '13.5px',
          fontWeight: 400,
          color: '#cccccc',
          textDecoration: 'none',
        }}>
          Contact Us: +971 54 266 9345
        </a>
      </div>

      {/* Copyright */}
      <p style={{
        margin: 0,
        fontSize: '12px',
        fontWeight: 400,
        color: '#666666',
        textAlign: 'center',
        lineHeight: 1.5,
        marginTop: '4px',
      }}>
        © 2025 RamaCare Polyclinic. All rights reserved. Advertisement License No : ZR478282–271025
      </p>

    </footer>
  );
}
