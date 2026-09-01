// src/components/Certifications.jsx
import React from 'react';
import { FiExternalLink } from 'react-icons/fi';

// Import local certificate icon asset
import certificate1Img from '../assets/certificate1.png';

export default function Certifications() {
  // Single certification details including issue and expiration dates
  const singleCert = {
    id: 'aws-csaa',
    title: 'AWS Certified Solutions Architect – Associate',
    issued: 'July 29, 2026',
    expires: 'July 29, 2029',
    image: certificate1Img,
    url: 'https://www.credly.com/badges/98a5867d-1188-4169-bcd2-b70caf0b1b6a/linked_in_profile'
  };

  return (
    <section 
      id="certifications" 
      style={{ 
        padding: '2.5rem 1rem', 
        maxWidth: '1280px', 
        margin: '0 auto',
        boxSizing: 'border-box',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}
    >
      <style>{`
        .cert-grid-card {
          transition: all 0.25s ease;
        }

        .cert-grid-card:hover {
          border-color: rgba(56, 189, 248, 0.45) !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(56, 189, 248, 0.15);
        }

        .cert-grid-card:hover .cert-ext-icon {
          color: #38bdf8 !important;
        }
      `}</style>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
        <h2 style={{ fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', fontWeight: '700', margin: 0, color: '#ffffff' }}>
          Technical Certifications
        </h2>
      </div>
      <p style={{ color: '#94a3b8', fontSize: 'clamp(0.8125rem, 2.5vw, 0.9rem)', margin: '0 0 2rem 0', lineHeight: '1.5' }}>
        Industry-recognized cloud and security credentials.
      </p>

      <div 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '1rem' 
        }}
      >
        <a 
          href={singleCert.url}
          target="_blank"
          rel="noopener noreferrer"
          className="cert-grid-card"
          style={{ 
            backgroundColor: '#111827', 
            padding: '1rem 1.25rem', 
            borderRadius: '8px', 
            border: '1px solid #1e293b',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            boxSizing: 'border-box',
            textDecoration: 'none',
            cursor: 'pointer'
          }}
        >
          <div 
            style={{ 
              backgroundColor: '#1e293b', 
              padding: '0.5rem', 
              borderRadius: '6px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              width: '44px',
              height: '44px',
              flexShrink: 0
            }}
          >
            <img 
              src={singleCert.image} 
              alt={singleCert.title} 
              style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
            />
          </div>

          <div style={{ minWidth: 0, flex: 1 }}>
            <h3 
              style={{ 
                fontSize: 'clamp(0.875rem, 2.5vw, 0.95rem)', 
                color: '#ffffff', 
                margin: 0, 
                fontWeight: '600',
                lineHeight: '1.35',
                wordBreak: 'break-word'
              }}
            >
              {singleCert.title}
            </h3>

            {/* Verified status badge & Issued date */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.4rem', marginTop: '0.3rem' }}>
              <span 
                style={{ 
                  color: '#38bdf8', 
                  fontSize: '0.75rem', 
                  fontWeight: '500'
                }}
              >
                ✓ Verified
              </span>
              <span style={{ color: '#475569', fontSize: '0.75rem' }}>•</span>
              <span style={{ color: '#cbd5e1', fontSize: '0.75rem' }}>
                Issued {singleCert.issued}
              </span>
            </div>

            {/* Expiration date */}
            <div style={{ color: '#64748b', fontSize: '0.725rem', marginTop: '0.15rem' }}>
              Expires {singleCert.expires}
            </div>
          </div>

          <FiExternalLink
            size={16}
            className="cert-ext-icon"
            style={{
              color: '#64748b',
              flexShrink: 0,
              transition: 'color 0.2s ease'
            }}
          />
        </a>
      </div>
    </section>
  );
}