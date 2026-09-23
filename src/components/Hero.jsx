// src/components/Hero.jsx

import React from "react";
import {
  FiDownload,
  FiMail,
  FiShield,
  FiCheckCircle,
  FiExternalLink,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";

import { personalInfo, certifications } from "../data/portfolioData.js";

// Imported local asset images and PDF
import devopsImg from "../assets/certificate1.png";
import resumePdf from "../assets/resume.pdf";

export default function Hero() {
  // Default Credly link for AWS Certified Solutions Architect - Associate
  const defaultCredlyUrl =
    "https://www.credly.com/badges/98a5867d-1188-4169-bcd2-b70caf0b1b6a/linked_in_profile";

  // Pick single certification (uses first item from data array or fallback object)
  const singleCert = certifications && certifications.length > 0 
    ? certifications[0] 
    : {
        id: "aws-csaa",
        title: "AWS Certified Solutions Architect – Associate",
        link: defaultCredlyUrl,
      };

  // Helper function to pick the local image based on certification content
  const getCertImage = (cert) => {
    if (cert.icon) return cert.icon;
    return devopsImg;
  };

  const keyRoles = [
    "Cloud DevOps Engineer",
    "Identity & Access Management",
    "Platform Engineer",
    "DevSecOps Engineer",
  ];

  return (
    <section id="about" className="hero-section">
      <style>{`
        .hero-section {
          width: 100%;
          min-height: calc(100vh - 80px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 1.5rem;
          background: transparent;
          color: #ffffff;
          box-sizing: border-box;
        }

        .hero-container {
          max-width: 1150px;
          width: 100%;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.25fr 0.75fr;
          gap: 3.5rem;
          align-items: center;
        }

        /* Professional Typography & Headings */
        .hero-salutation {
          color: #38bdf8;
          font-size: 0.95rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 0.35rem;
        }

        .hero-name-heading {
          font-size: 2.5rem;
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.025em;
          color: #ffffff;
          margin: 0 0 0.85rem 0;
        }

        .hero-roles-container {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          align-items: center;
          margin-bottom: 1.25rem;
        }

        .hero-role-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.25rem 0.65rem;
          border-radius: 6px;
          background: rgba(56, 189, 248, 0.08);
          color: #38bdf8;
          border: 1px solid rgba(56, 189, 248, 0.22);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.01em;
          cursor: default;
          transition: transform 0.25s ease, background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .hero-role-badge:hover {
          transform: scale(1.08);
          background: rgba(56, 189, 248, 0.16);
          border-color: rgba(56, 189, 248, 0.5);
          box-shadow: 0 4px 12px rgba(56, 189, 248, 0.2);
        }

        .hero-summary {
          color: #94a3b8;
          font-size: 0.875rem;
          line-height: 1.65;
          margin-bottom: 1.5rem;
          max-width: 520px;
        }

        .hero-positioning {
          color: #e0f2fe;
          font-size: clamp(1.05rem, 2.5vw, 1.35rem);
          font-weight: 650;
          line-height: 1.35;
          margin: 0 0 0.85rem;
          max-width: 600px;
        }

        .hero-metrics {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 0.55rem;
          margin: 1.5rem 0 0;
          max-width: 650px;
        }

        .hero-metric {
          padding: 0.75rem 0.7rem;
          border-left: 2px solid #38bdf8;
          background: rgba(15, 28, 54, 0.58);
        }

        .hero-metric-value {
          display: block;
          color: #f8fafc;
          font-size: 1.05rem;
          font-weight: 800;
          line-height: 1.1;
        }

        .hero-metric-label {
          display: block;
          color: #94a3b8;
          font-size: 0.65rem;
          line-height: 1.25;
          margin-top: 0.3rem;
        }

        .hero-buttons {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }

        .hero-btn {
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hero-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(56, 189, 248, 0.2);
        }

        /* Certification Card Hover Effect */
        .cert-card-link {
          transition: all 0.25s ease;
        }

        .cert-card-link:hover {
          border-color: rgba(56, 189, 248, 0.45) !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(56, 189, 248, 0.15);
        }

        .cert-card-link:hover .cert-ext-icon {
          color: #38bdf8 !important;
        }

        /* Mobile Responsive Styles */
        @media (max-width: 900px) {
          .hero-section {
            padding: 2rem 1rem;
            min-height: auto;
          }

          .hero-container {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }

          .hero-name-heading {
            font-size: 2rem;
          }

          .hero-buttons {
            flex-direction: column;
            width: 100%;
          }

          .hero-btn {
            width: 100%;
            justify-content: center;
            box-sizing: border-box;
          }

          .hero-metrics {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
      `}</style>

      <div className="hero-container">
        {/* Main Column */}
        <div style={{ textAlign: "left" }}>
          {/* Professional Salutation */}
          <div className="hero-salutation">Hello,</div>

          {/* Clear hiring-manager positioning */}
          <h1 className="hero-name-heading">I'm Kowshar Ahmed</h1>

          <p className="hero-positioning">
            Cloud DevOps &amp; IAM Engineer building secure, observable platforms at scale.
          </p>

          {/* Compact Role Badges */}
          <div className="hero-roles-container">
            {keyRoles.map((role, idx) => (
              <div key={idx} className="hero-role-badge">
                <FiShield size={12} />
                <span>{role}</span>
              </div>
            ))}
          </div>

          {/* Narrative Summary */}
          {personalInfo?.summary && (
            <p className="hero-summary">{personalInfo.summary}</p>
          )}

          {personalInfo?.impactMetrics && (
            <div className="hero-metrics" aria-label="Career impact metrics">
              {personalInfo.impactMetrics.map((metric) => (
                <div className="hero-metric" key={metric.label}>
                  <span className="hero-metric-value">{metric.value}</span>
                  <span className="hero-metric-label">{metric.label}</span>
                </div>
              ))}
            </div>
          )}

          {/* Action Buttons */}
          <div className="hero-buttons">
            <a
              href={resumePdf}
              download="Kowshar_Ahmed_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "#0284c7",
                color: "#ffffff",
                padding: "0.7rem 1.3rem",
                borderRadius: "6px",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "0.8125rem",
                letterSpacing: "0.01em",
                boxShadow: "0 4px 14px rgba(2, 132, 199, 0.3)",
              }}
            >
              <FiDownload size={14} />
              Download Resume
            </a>

            <a
              href={`mailto:${personalInfo?.email}`}
              className="hero-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.7rem 1.3rem",
                borderRadius: "6px",
                border: "1px solid rgba(56, 189, 248, 0.3)",
                background: "rgba(15, 23, 42, 0.6)",
                color: "#ffffff",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "0.8125rem",
                letterSpacing: "0.01em",
              }}
            >
              <FiMail size={14} style={{ color: "#38bdf8" }} />
              Contact
            </a>
          </div>

          {/* Social Links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginTop: "1.5rem",
            }}
          >
            {personalInfo?.socialLinks?.github && (
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                title="GitHub Profile"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                  borderRadius: "6px",
                  background: "rgba(56, 189, 248, 0.08)",
                  border: "1px solid rgba(56, 189, 248, 0.2)",
                  color: "#38bdf8",
                  textDecoration: "none",
                  transition: "all 0.25s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(56, 189, 248, 0.15)";
                  e.currentTarget.style.borderColor = "rgba(56, 189, 248, 0.4)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(56, 189, 248, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(56, 189, 248, 0.08)";
                  e.currentTarget.style.borderColor = "rgba(56, 189, 248, 0.2)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <FiGithub size={18} />
              </a>
            )}

            {personalInfo?.socialLinks?.linkedin && (
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                  borderRadius: "6px",
                  background: "rgba(56, 189, 248, 0.08)",
                  border: "1px solid rgba(56, 189, 248, 0.2)",
                  color: "#38bdf8",
                  textDecoration: "none",
                  transition: "all 0.25s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(56, 189, 248, 0.15)";
                  e.currentTarget.style.borderColor = "rgba(56, 189, 248, 0.4)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(56, 189, 248, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(56, 189, 248, 0.08)";
                  e.currentTarget.style.borderColor = "rgba(56, 189, 248, 0.2)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <FiLinkedin size={18} />
              </a>
            )}
          </div>
        </div>

        {/* Credentials Card Column */}
        <div>
          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(19, 42, 78, 0.5) 0%, rgba(12, 24, 44, 0.65) 100%)",
              border: "1px solid rgba(56, 189, 248, 0.2)",
              borderRadius: "16px",
              padding: "1.35rem 1.5rem",
              backdropFilter: "blur(12px)",
              boxShadow:
                "0 20px 40px -15px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.05)",
            }}
          >
            <h2
              style={{
                color: "#38bdf8",
                fontSize: "0.75rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontWeight: "700",
                marginBottom: "0.35rem",
                marginTop: 0,
              }}
            >
              Cloud Focus
            </h2>

            <p
              style={{
                color: "#94a3b8",
                fontSize: "0.8125rem",
                lineHeight: "1.4",
                marginBottom: "1.1rem",
              }}
            >
              Industry-recognized cloud and cybersecurity credential.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.7rem",
              }}
            >
              {/* Single Certification Card */}
              <a
                href={singleCert.link || singleCert.url || defaultCredlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-card-link"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.85rem",
                  padding: "0.7rem 0.85rem",
                  background:
                    "linear-gradient(135deg, rgba(23, 42, 74, 0.6) 0%, rgba(15, 28, 54, 0.7) 100%)",
                  border: "1px solid rgba(56, 189, 248, 0.15)",
                  borderRadius: "10px",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "8px",
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={getCertImage(singleCert)}
                    alt={singleCert.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>

                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      color: "#f8fafc",
                      margin: 0,
                      fontSize: "0.8125rem",
                      fontWeight: "600",
                      lineHeight: 1.25,
                    }}
                  >
                    {singleCert.title}
                  </h3>

                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.3rem",
                      color: "#38bdf8",
                      fontSize: "0.6875rem",
                      marginTop: "0.15rem",
                    }}
                  >
                    <FiCheckCircle size={11} />
                    Verified Credential
                  </span>
                </div>

                <FiExternalLink
                  size={14}
                  className="cert-ext-icon"
                  style={{
                    color: "#64748b",
                    flexShrink: 0,
                    transition: "color 0.2s ease",
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}