// src/components/Achievements.jsx
import React from "react";
import { Shield, Zap } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { keyAchievements } from "../data/portfolioData.js";

export default function Achievements() {
  if (!keyAchievements || keyAchievements.length === 0) return null;

  // Helper function to map dynamic categories
  const getDynamicCategory = (item = {}) => {
    if (item.category) return item.category;

    const searchText = `${item.title || ""} ${item.description || ""}`.toLowerCase();

    if (
      searchText.includes("iam") ||
      searchText.includes("identity") ||
      searchText.includes("access") ||
      searchText.includes("auth") ||
      searchText.includes("rbac") ||
      searchText.includes("permission")
    ) {
      return "Identity & Access Management";
    }

    if (
      searchText.includes("devsecops") ||
      searchText.includes("vulnerabilit") ||
      searchText.includes("security") ||
      searchText.includes("compliance") ||
      searchText.includes("wiz") ||
      searchText.includes("kms")
    ) {
      return "DevSecOps Engineer";
    }

    if (
      searchText.includes("platform") ||
      searchText.includes("recovery") ||
      searchText.includes("disaster") ||
      searchText.includes("kubernetes") ||
      searchText.includes("terraform") ||
      searchText.includes("cdk") ||
      searchText.includes("infrastructure")
    ) {
      return "Platform Engineer";
    }

    return "Cloud DevOps Engineer"; // Fallback category
  };

  // Helper function to map tech stacks directly from skill categories
  const getDefaultTechStack = (title = "") => {
    const lowerTitle = title.toLowerCase();

    if (
      lowerTitle.includes("iam") ||
      lowerTitle.includes("identity") ||
      lowerTitle.includes("access") ||
      lowerTitle.includes("role") ||
      lowerTitle.includes("permission")
    ) {
      return ["AWS IAM", "STS/AssumeRole", "ABAC/tagging", "IAM Access Analyzer", "Access Advisor"];
    }

    if (
      lowerTitle.includes("devsecops") ||
      lowerTitle.includes("security") ||
      lowerTitle.includes("compliance") ||
      lowerTitle.includes("vulnerabilit") ||
      lowerTitle.includes("secret")
    ) {
      return ["CloudTrail", "KMS", "Secrets Manager", "Wiz", "Prisma Cloud CIEM", "HIPAA compliance"];
    }

    if (
      lowerTitle.includes("governance") ||
      lowerTitle.includes("organization") ||
      lowerTitle.includes("policy") ||
      lowerTitle.includes("multi-account")
    ) {
      return ["AWS Organizations", "Service Control Policies", "Multi-Account Security Architecture", "AWS Config"];
    }

    if (
      lowerTitle.includes("recovery") ||
      lowerTitle.includes("disaster") ||
      lowerTitle.includes("deploy") ||
      lowerTitle.includes("pipeline") ||
      lowerTitle.includes("kubernetes")
    ) {
      return ["Terraform", "CloudFormation", "AWS CDK", "GitHub Actions", "GitLab CI", "Kubernetes"];
    }

    return ["Python/boto3", "AWS CLI", "Bash", "Terraform", "GitHub Actions"];
  };

  const cardStyle = {
    backgroundColor: "#111827",
    padding: "1.25rem",
    borderRadius: "12px",
    border: "1px solid #1e293b",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
    height: "100%",
    boxSizing: "border-box",
    transition: "0.3s",
  };

  const AchievementCard = ({ item }) => {
    const technologies =
      item.technologies && item.technologies.length > 0
        ? item.technologies
        : getDefaultTechStack(item.title);

    const categoryBadge = getDynamicCategory(item);

    return (
      <div
        style={cardStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-5px)";
          e.currentTarget.style.borderColor = "#38bdf8";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.borderColor = "#1e293b";
        }}
      >
        {/* Top Content Area */}
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <span
              style={{
                background: "rgba(56,189,248,.12)",
                color: "#38bdf8",
                padding: "6px 10px",
                borderRadius: "6px",
                fontSize: ".7rem",
                fontWeight: 600,
              }}
            >
              {categoryBadge}
            </span>

            <Shield size={18} color="#38bdf8" />
          </div>

          <h3
            style={{
              color: "#fff",
              fontSize: "1.15rem",
              marginBottom: ".8rem",
              lineHeight: 1.4,
            }}
          >
            {item.title}
          </h3>

          {item.description && (
            <div
              style={{
                display: "flex",
                gap: ".5rem",
                background: "rgba(16,185,129,.12)",
                color: "#34d399",
                padding: ".6rem",
                borderRadius: "8px",
                fontSize: ".82rem",
                marginBottom: "1rem",
              }}
            >
              <Zap size={15} />
              <span>{item.description}</span>
            </div>
          )}
        </div>

        {/* Bottom Tech Stack Section - Equalized line */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: ".45rem",
            marginTop: "auto",
            paddingTop: "1rem",
            borderTop: "1px solid #1e293b",
            marginLeft: "-1.25rem",
            marginRight: "-1.25rem",
            paddingLeft: "1.25rem",
            paddingRight: "1.25rem",
            width: "calc(100% + 2.5rem)",
            boxSizing: "border-box",
          }}
        >
          {technologies.map((tech) => (
            <span
              key={tech}
              style={{
                background: "#1e293b",
                color: "#cbd5e1",
                padding: ".3rem .6rem",
                borderRadius: "6px",
                fontSize: ".75rem",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section
      id="achievements"
      style={{
        padding: "2.5rem 1rem",
        maxWidth: "1280px",
        margin: "0 auto",
      }}
    >
      <h2
        style={{
          color: "#fff",
          fontSize: "clamp(1.5rem,4vw,1.9rem)",
          marginBottom: ".4rem",
        }}
      >
        Key Achievements
      </h2>

      <p
        style={{
          color: "#94a3b8",
          marginBottom: "2rem",
        }}
      >
        Automated governance frameworks, cloud security architectures, and
        scalable infrastructure.
      </p>

      {/* Desktop Grid */}
      <div className="desktop-achievements">
        {keyAchievements.map((item, index) => (
          <AchievementCard key={item.id || index} item={item} />
        ))}
      </div>

      {/* Mobile Swipe */}
      <div className="mobile-achievements">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1.1}
          centeredSlides={false}
          spaceBetween={15}
          pagination={{ clickable: true }}
        >
          {keyAchievements.map((item, index) => (
            <SwiperSlide key={item.id || index}>
              <AchievementCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        .desktop-achievements {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
          align-items: stretch;
        }

        .mobile-achievements {
          display: none;
        }

        .swiper {
          padding-bottom: 40px;
        }

        .swiper-pagination-bullet {
          background: #38bdf8;
          opacity: 0.4;
        }

        .swiper-pagination-bullet-active {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .desktop-achievements {
            display: none;
          }

          .mobile-achievements {
            display: block;
          }

          .swiper-slide {
            height: auto;
          }
        }
      `}</style>
    </section>
  );
}