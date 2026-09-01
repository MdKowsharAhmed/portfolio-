import React, { useState, useEffect } from "react";
import { personalInfo } from "../data/portfolioData.js";
import {
  FiFileText,
  FiMenu,
  FiX,
} from "react-icons/fi";

// Import the local resume asset
import resumePdf from "../assets/resume.pdf";

export default function Navbar() {
  const menuItems = [
    "About",
    "Skills",
    "Certifications",
    "Experience",
    "Achievements",
  ];

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);

      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        width: "100%",
        background: "rgba(12,24,44,0.90)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,.08)",
      }}
    >
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          height: "64px",
          padding: "0 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: ".7rem",
          }}
        >
          <h2
            style={{
              color: "#fff",
              fontSize: "1.1rem",
              fontWeight: 700,
              margin: 0,
              whiteSpace: "nowrap",
            }}
          >
            {personalInfo.name}
          </h2>
        </div>

        {/* Desktop Menu */}
        {!isMobile && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.4rem",
            }}
          >
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{
                  color: "#94a3b8",
                  textDecoration: "none",
                  fontSize: ".9rem",
                  fontWeight: 500,
                  transition: ".25s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#38bdf8";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#94a3b8";
                }}
              >
                {item}
              </a>
            ))}

            <a
              href={resumePdf}
               download="Kowshar_Ahmed_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: ".45rem",
                padding: ".55rem 1rem",
                borderRadius: "8px",
                textDecoration: "none",
                color: "#38bdf8",
                border: "1px solid rgba(56,189,248,.35)",
                background: "rgba(10,25,47,.65)",
                transition: ".25s",
                fontWeight: 600,
                fontSize: ".85rem",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#0284c7";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  "rgba(10,25,47,.65)";
                e.currentTarget.style.color = "#38bdf8";
              }}
            >
              <FiFileText />
              Resume
            </a>
          </div>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "transparent",
              border: "none",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        )}
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobile && menuOpen && (
        <div
          style={{
            background: "rgba(12,24,44,0.98)",
            backdropFilter: "blur(12px)",
            borderTop: "1px solid rgba(255,255,255,.08)",
            padding: "1rem 1.5rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "#cbd5e1",
                textDecoration: "none",
                fontSize: "0.95rem",
                fontWeight: 500,
                padding: "0.85rem 0.5rem",
                borderRadius: "8px",
                transition: "all .25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "rgba(56,189,248,.12)";
                e.currentTarget.style.color = "#38bdf8";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#cbd5e1";
              }}
            >
              {item}
            </a>
          ))}

          <a
            href={resumePdf}
             download="Kowshar_Ahmed_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: "0.75rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: ".5rem",
              background: "#0284c7",
              color: "#ffffff",
              textDecoration: "none",
              padding: "0.9rem",
              borderRadius: "10px",
              fontWeight: 600,
              transition: ".25s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#0369a1";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#0284c7";
            }}
          >
            <FiFileText size={18} />
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
}