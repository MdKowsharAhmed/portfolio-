import React, { useState, useEffect } from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import { workExperience } from "../data/portfolioData.js";

export default function Experience() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="experience"
      style={{
        padding: "3rem 1rem",
        maxWidth: "1280px",
        margin: "0 auto",
        boxSizing: "border-box",
      }}
    >
      <h2
        style={{
          fontSize: "clamp(1.5rem, 4vw, 2rem)",
          fontWeight: "700",
          marginBottom: "0.5rem",
          color: "#ffffff",
          textAlign: "center",
        }}
      >
        Professional Experience & Education
      </h2>

      <p
        style={{
          color: "#94a3b8",
          fontSize: "clamp(0.85rem, 2.5vw, 0.95rem)",
          marginBottom: "3rem",
          textAlign: "center",
        }}
      >
        Track record in enterprise cloud security engineering and IAM governance.
      </p>

      <div
        style={{
          position: "relative",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* Timeline Line */}
        <div
          style={{
            position: "absolute",
            left: isMobile ? "20px" : "50%",
            top: 0,
            bottom: 0,
            width: "3px",
            background: "#1e293b",
            transform: isMobile ? "none" : "translateX(-50%)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2.5rem",
          }}
        >
          {workExperience.map((item, index) => {
            const isEven = index % 2 === 0;
            const isEducation = item.type === "education";

            return (
              <div
                key={item.id || index}
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: isMobile
                    ? "flex-end"
                    : isEven
                    ? "flex-start"
                    : "flex-end",
                  position: "relative",
                  alignItems: "flex-start",
                }}
              >
                {/* Timeline Icon Marker */}
                <div
                  style={{
                    position: "absolute",
                    left: isMobile ? "20px" : "50%",
                    top: "24px",
                    transform: "translate(-50%, -50%)",
                    width: isMobile ? "40px" : "48px",
                    height: isMobile ? "40px" : "48px",
                    borderRadius: "50%",
                    background: isEducation ? "#0d9488" : "#0284c7",
                    border: "4px solid #0f172a",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 5,
                    boxShadow: isEducation
                      ? "0 0 18px rgba(13,148,136,0.45)"
                      : "0 0 18px rgba(2,132,199,0.45)",
                  }}
                >
                  {isEducation ? (
                    <GraduationCap size={isMobile ? 18 : 22} color="#fff" strokeWidth={2.2} />
                  ) : (
                    <Briefcase size={isMobile ? 18 : 22} color="#fff" strokeWidth={2.2} />
                  )}
                </div>

                {/* Card Container */}
                <div
                  style={{
                    width: isMobile ? "calc(100% - 3.2rem)" : "calc(50% - 2.5rem)",
                    background: "#111827",
                    border: "1px solid #1e293b",
                    borderRadius: "14px",
                    padding: isMobile ? "1.2rem 1rem" : "1.8rem",
                    transition: "0.3s ease",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
                    boxSizing: "border-box",
                  }}
                >
                  <span
                    style={{
                      color: isEducation ? "#2dd4bf" : "#38bdf8",
                      fontSize: "0.8rem",
                      fontWeight: "700",
                      letterSpacing: "0.5px",
                      textTransform: "uppercase",
                    }}
                  >
                    {item.duration}
                  </span>

                  <h3
                    style={{
                      color: "#ffffff",
                      fontSize: "clamp(1rem, 3vw, 1.2rem)",
                      margin: "0.6rem 0 0.3rem",
                      lineHeight: "1.3",
                    }}
                  >
                    {item.role}
                  </h3>

                  <p
                    style={{
                      color: "#cbd5e1",
                      marginBottom: "1rem",
                      fontSize: "0.875rem",
                    }}
                  >
                    {item.company} {item.location ? `• ${item.location}` : ""}
                  </p>

                  {item.highlights && item.highlights.length > 0 && (
                    <ul
                      style={{
                        paddingLeft: "1.2rem",
                        color: "#94a3b8",
                        lineHeight: "1.6",
                        fontSize: "0.875rem",
                        margin: 0,
                      }}
                    >
                      {item.highlights.map((point, idx) => (
                        <li
                          key={idx}
                          style={{
                            marginBottom: "0.4rem",
                          }}
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}