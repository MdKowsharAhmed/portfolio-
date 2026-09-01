// src/components/Footer.jsx
import React, { useState, useEffect } from "react";
import { personalInfo } from "../data/portfolioData.js";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer
      style={{
        backgroundColor: "#0f172a",
        borderTop: "1px solid #1e293b",
        padding: isMobile ? "2.5rem 1rem 1.5rem" : "3rem 2rem 2rem",
        color: "#94a3b8",
        marginTop: isMobile ? "2.5rem" : "4rem",
        boxSizing: "border-box",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      {/* Top Row */}
      <div
        style={{
          width: "100%",
          maxWidth: "1280px",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: isMobile ? "center" : "left",
          gap: isMobile ? "1.5rem" : "2rem",
          paddingBottom: "2rem",
          borderBottom: "1px solid #1e293b",
          boxSizing: "border-box",
        }}
      >
        {/* Name */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: isMobile ? "center" : "flex-start",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: isMobile ? "center" : "flex-start",
              gap: "0.5rem",
              marginBottom: "0.5rem",
            }}
          >
            <h3
              style={{
                color: "#ffffff",
                margin: 0,
                fontSize: "1.1rem",
              }}
            >
              {personalInfo.name}
            </h3>
          </div>

          <p
            style={{
              margin: 0,
              fontSize: "0.85rem",
              color: "#64748b",
            }}
          >
            {personalInfo.title}
          </p>
        </div>

        {/* Contact Info */}
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            gap: isMobile ? "0.75rem" : "2rem",
            fontSize: "0.85rem",
            width: isMobile ? "100%" : "auto",
          }}
        >
          {/* Email */}
          <a
            href={`mailto:${personalInfo.email}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              color: "#94a3b8",
              textDecoration: "none",
              transition: "all .3s ease",
              wordBreak: "break-word",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#38bdf8";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#94a3b8";
            }}
          >
            <span>✉️</span>
            <span>{personalInfo.email}</span>
          </a>

          {/* Phone */}
          <a
            href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              color: "#94a3b8",
              textDecoration: "none",
              transition: "all .3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#38bdf8";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#94a3b8";
            }}
          >
            <span>📞</span>
            <span>{personalInfo.phone}</span>
          </a>

          {/* Location */}
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              color: "#94a3b8",
            }}
          >
            <span>📍</span>
            <span>{personalInfo.location}</span>
          </span>
        </div>
      </div>

      {/* Bottom Row */}
      <div
        style={{
          width: "100%",
          maxWidth: "1280px",
          marginTop: "1.5rem",
          display: "flex",
          flexDirection: isMobile ? "column-reverse" : "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: isMobile ? "1rem" : "0",
          fontSize: "0.8rem",
          color: "#475569",
          textAlign: "center",
          boxSizing: "border-box",
        }}
      >
        <p style={{ margin: 0 }}>
          © {new Date().getFullYear()} {personalInfo.name}. All rights
          reserved.
        </p>

        <a
          href="#about"
          style={{
            color: "#64748b",
            textDecoration: "none",
            transition: "color .3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#38bdf8";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#64748b";
          }}
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}