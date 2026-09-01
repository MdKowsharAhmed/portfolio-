import React, { useState, useEffect } from "react";
import { skills } from "../data/portfolioData.js";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

// Import Swiper React components & styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Imported Local Skill Icons
import kmsImg from "../assets/kms.png";
import ssmImg from "../assets/ssm.png";
import secretManagerImg from "../assets/secretmanager.png";
import wizImg from "../assets/wiz.png";
import hippaImg from "../assets/hippa.png";
import githubActionsImg from "../assets/Github_Action.png";
import gitlabCiImg from "../assets/GitLab_ci.png";
import terraformImg from "../assets/Terraform.png";
import jenkinsImg from "../assets/Jenkins.png";
import stsImg from "../assets/sts.png";
import abacImg from "../assets/abac.png";
import iamImg from "../assets/iam.png";
import accessAdvisorImg from "../assets/accessadvisor.png";
import serviceControlImg from "../assets/servicecontrol.png";
import bashImg from "../assets/bash.png";
import cloudtrailImg from "../assets/cloudtrail.png";
import cloudformationImg from "../assets/cloudformation.png";
import prismaImg from "../assets/parishma.png";

// Standard SVG Icons
const W3_STANDARD_ICONS = {
  aws: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  azure: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  gcp: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  splunk: "https://cdn.simpleicons.org/splunk/38BDF8",
  docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  kubernetes: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  database: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  network: "https://cdn.simpleicons.org/wireshark/38BDF8",
  security: "https://cdn.simpleicons.org/fortinet/38BDF8",
  defaultSkill: "https://cdn.simpleicons.org/w3c/38BDF8",
  defaultCategory: "https://cdn.simpleicons.org/w3c/38BDF8",
};

// Skill Icon Mapping
const getSkillIcon = (skillName) => {
  const name = skillName.toLowerCase();

  if (name.includes("github") || name.includes("actions") || name.includes("pipeline")) return githubActionsImg;
  if (name.includes("terraform")) return terraformImg;
  if (name.includes("gitlab")) return gitlabCiImg;
  if (name.includes("jenkins")) return jenkinsImg;
  if (name.includes("cloudformation") || name.includes("cfn")) return cloudformationImg;

  if (name.includes("sts")) return stsImg;
  if (name.includes("abac")) return abacImg;
  if (name.includes("iam")) return iamImg;
  if (name.includes("advisor")) return accessAdvisorImg;
  if (name.includes("scp") || name.includes("policy") || name.includes("service control") || name.includes("servicecontrol")) return serviceControlImg;

  if (name.includes("bash")) return bashImg;

  if (name.includes("prisma") || name.includes("ciem") || name.includes("parishma")) return prismaImg;

  if (name.includes("cloudtrail") || name.includes("audit") || name.includes("logging")) return cloudtrailImg;
  if (name.includes("kms")) return kmsImg;
  if (name.includes("ssm")) return ssmImg;
  if (name.includes("secret")) return secretManagerImg;
  if (name.includes("wiz")) return wizImg;
  if (name.includes("hipaa") || name.includes("hippa")) return hippaImg;

  if (name.includes("azure")) return W3_STANDARD_ICONS.azure;
  if (name.includes("gcp") || name.includes("google cloud")) return W3_STANDARD_ICONS.gcp;
  if (name.includes("aws")) return W3_STANDARD_ICONS.aws;
  if (name.includes("python")) return W3_STANDARD_ICONS.python;
  if (name.includes("splunk")) return W3_STANDARD_ICONS.splunk;
  if (name.includes("docker")) return W3_STANDARD_ICONS.docker;
  if (name.includes("kubernetes")) return W3_STANDARD_ICONS.kubernetes;
  if (name.includes("database")) return W3_STANDARD_ICONS.database;
  if (name.includes("network")) return W3_STANDARD_ICONS.network;
  if (name.includes("security")) return W3_STANDARD_ICONS.security;

  return W3_STANDARD_ICONS.defaultSkill;
};

// Category Icon Mapping
const getCategoryIcon = (category) => {
  const normalized = category.toLowerCase();

  if (normalized.includes("prisma") || normalized.includes("parishma")) return prismaImg;
  if (normalized.includes("infrastructure") || normalized.includes("provisioning")) return cloudformationImg;
  if (normalized.includes("identity") || normalized.includes("iam")) return iamImg;
  if (normalized.includes("security") || normalized.includes("audit")) return cloudtrailImg;
  if (normalized.includes("governance") || normalized.includes("service control")) return serviceControlImg;
  if (normalized.includes("automation") || normalized.includes("scripting")) return bashImg;
  if (normalized.includes("devops")) return jenkinsImg;

  return W3_STANDARD_ICONS.defaultCategory;
};

export default function Skills() {
  const [expandedCategories, setExpandedCategories] = useState({});
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = screenWidth < 768;
  const isTablet = screenWidth >= 768 && screenWidth < 1024;

  const toggleCategory = (categoryKey) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryKey]: !prev[categoryKey],
    }));
  };

  // Helper function to render exact skill card structure and styles
  const renderCard = (category, skillList) => {
    const isExpanded = !!expandedCategories[category];
    const displayedSkills = isExpanded ? skillList : skillList.slice(0, 6);
    const hasMore = skillList.length > 6;

    return (
      <div
        style={{
          background:
            "linear-gradient(135deg, rgba(19,42,78,.5) 0%, rgba(12,24,44,.65) 100%)",
          border: "1px solid rgba(56,189,248,.18)",
          borderRadius: "16px",
          padding: isMobile ? "1.2rem" : "1.4rem",
          backdropFilter: "blur(12px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxShadow: "0 20px 40px -15px rgba(0,0,0,.45)",
          height: "100%",
          boxSizing: "border-box",
        }}
      >
        <div>
          {/* Category Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: ".75rem",
              marginBottom: "1.2rem",
            }}
          >
            <img
              src={getCategoryIcon(category)}
              alt={category}
              style={{
                width: isMobile ? "22px" : "24px",
                height: isMobile ? "22px" : "24px",
                objectFit: "contain",
              }}
            />

            <h3
              style={{
                color: "#fff",
                fontSize: isMobile ? "1.05rem" : "1.18rem",
                fontWeight: "700",
                margin: 0,
              }}
            >
              {category.replace(/([A-Z])/g, " $1")}
            </h3>
          </div>

          {/* Skills List */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: ".65rem",
            }}
          >
            {displayedSkills.map((skill, idx) => (
              <div
                key={idx}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: ".55rem",
                  padding: isMobile ? ".55rem .85rem" : ".55rem .95rem",
                  background: "rgba(15,28,54,.85)",
                  border: "1px solid rgba(56,189,248,.22)",
                  borderRadius: "9999px",
                  color: "#f8fafc",
                  fontSize: isMobile ? ".85rem" : ".9rem",
                  fontWeight: "600",
                  transition: "all .25s ease",
                  cursor: "default",
                  maxWidth: "100%",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(23,42,74,.95)";
                  e.currentTarget.style.borderColor = "rgba(56,189,248,.5)";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(15,28,54,.85)";
                  e.currentTarget.style.borderColor = "rgba(56,189,248,.22)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <img
                  src={getSkillIcon(skill)}
                  alt={skill}
                  style={{
                    width: isMobile ? "18px" : "20px",
                    height: isMobile ? "18px" : "20px",
                    objectFit: "contain",
                    flexShrink: 0,
                  }}
                />

                <span
                  style={{
                    whiteSpace: "normal",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* View More / Show Less Button */}
        {hasMore && (
          <button
            onClick={() => toggleCategory(category)}
            style={{
              marginTop: "1.2rem",
              alignSelf: "flex-start",
              display: "flex",
              alignItems: "center",
              gap: ".45rem",
              background: "transparent",
              border: "none",
              color: "#38bdf8",
              cursor: "pointer",
              fontSize: ".82rem",
              fontWeight: "600",
              padding: ".2rem 0",
              transition: ".25s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#7dd3fc";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#38bdf8";
            }}
          >
            {isExpanded ? (
              <>
                Show Less <FiChevronUp />
              </>
            ) : (
              <>
                View More ({skillList.length - 6} More)
                <FiChevronDown />
              </>
            )}
          </button>
        )}
      </div>
    );
  };

  return (
    <section
      id="skills"
      style={{
        width: "100%",
        padding: isMobile
          ? "2rem 1rem"
          : isTablet
          ? "3rem 2rem"
          : "4rem 2rem",
        background: "transparent",
        color: "#ffffff",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "1150px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: ".35rem .8rem",
            borderRadius: "9999px",
            background: "rgba(56,189,248,.1)",
            color: "#38bdf8",
            border: "1px solid rgba(56,189,248,.25)",
            fontSize: ".7rem",
            fontWeight: "700",
            letterSpacing: ".05em",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          Core Capabilities
        </div>

        {/* Heading */}
        <h2
          style={{
            fontSize: isMobile
              ? "1.8rem"
              : isTablet
              ? "2.2rem"
              : "2.6rem",
            fontWeight: "800",
            lineHeight: "1.2",
            letterSpacing: "-.02em",
            color: "#fff",
            marginBottom: ".8rem",
          }}
        >
          Technical Core Competencies
        </h2>

        {/* Subtitle */}
        <p
          style={{
            color: "#94a3b8",
            fontSize: isMobile ? ".9rem" : "1rem",
            lineHeight: "1.7",
            maxWidth: "560px",
            marginBottom: "2.2rem",
          }}
        >
          Specialized expertise in cloud infrastructure, identity & access
          management, DevSecOps, and enterprise security.
        </p>

        {/* Content View */}
        {isMobile ? (
          <Swiper
            modules={[Pagination]}
            slidesPerView={1.1}
            spaceBetween={16}
            pagination={{ clickable: true }}
            style={{ paddingBottom: "2.5rem" }}
          >
            {Object.entries(skills).map(([category, skillList]) => (
              <SwiperSlide key={category}>
                {renderCard(category, skillList)}
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isTablet
                ? "repeat(2,1fr)"
                : "repeat(auto-fit,minmax(320px,1fr))",
              gap: "1.5rem",
            }}
          >
            {Object.entries(skills).map(([category, skillList]) => (
              <React.Fragment key={category}>
                {renderCard(category, skillList)}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}