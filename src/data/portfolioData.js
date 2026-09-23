// src/data/portfolio.js

export const personalInfo = {
  name: "MD KOWSHAR AHMED",
  title: "Senior Cloud DevOps Engineer | Identity & Access Management | Platform Engineer | DevSecOps Engineer",
  email: "aiops.kowshar@gmail.com",
  phone: "405-479-8989",
  location: "Dallas, TX 75069",
  summary:
    "Senior Cloud DevOps Engineer with 11+ years of hands-on experience in cloud security, infrastructure engineering, and automation equivalent to formal technical education through deep, applied expertise. Proven track record of executing enterprise-scale AWS IAM security remediation and multi-account access governance across 200+ AWS accounts in highly regulated healthcare and financial-services environments. Skilled in designing least-privilege access models, automating secure infrastructure delivery, and strengthening cloud security posture through policy-as-code and pipeline-driven remediation.",
  socialLinks: {
    linkedin: "https://linkedin.com/in/kowsharahmed",
    github: "https://github.com/MdKowsharAhmed",
    portfolio: "",
  },
};

export const keyAchievements = [
  {
    title: "Enhanced Recovery Protocols",
    description: "Reduced disaster-recovery time by 45% through automated Kubernetes workflows across AWS regions.",
  },
  {
    title: "Optimized Application Uptime",
    description: "Increased application availability to 99.9% by automating observability and alerting in AWS.",
  },
  {
    title: "Implemented DevSecOps Controls",
    description: "Reduced security vulnerabilities by 60% using automated DevSecOps controls in CI/CD pipeline.",
  },
  {
    title: "Improved Incident Response",
    description: "Decreased incident response time by 30% with centralized logging and containerized deployment pipelines.",
  },
];

export const skills = {
  securityAndCompliance: [
    "CloudTrail",
    "KMS",
    "SSM Parameter Store",
    "Secrets Manager",
    "AWS Config",
    "Wiz",
    "Prisma Cloud CIEM",
    "HIPAA compliance",
    "AWS",
    "Azure",
    "GCP",
  ],
  infrastructureAsCodeAndDelivery: [
    "Terraform",
    "CloudFormation",
    "AWS CDK",
    "Jenkins",
    "GitLab CI",
    "GitHub Actions",
    "AWS CodePipeline",
    "Kubernetes",
  ],
  identityAndAccessManagement: [
    "AWS IAM Roles & Policies",
    "STS/AssumeRole",
    "AWS Organizations & SCPs",
    "ABAC/tagging",
    "IAM Access Analyzer",
    "Access Advisor",
  ],
  governanceAtScale: [
    "AWS Organizations",
    "Service Control Policies",
    "Multi-Account Security Architecture",
  ],
  scriptingAndAutomation: ["Python/boto3", "AWS CLI", "Bash"],
};

export const workExperience = [
  {
    id: 1,
    type: "work",
    role: "Cloud DevOps Engineer",
    company: "UnitedHealthcare / Optum",
    location: "Texas",
    duration: "10/2023 - Present",
    highlights: [
      "Cut stale identities and over-permissioned access keys by 50% by right-sizing IAM permissions and enforcing tag standards mandated by governance and compliance requirements through Terraform pipelines.",
      "Reduced least-privilege remediation cycle time by 40% by building Python/boto3, AWS CLI, and Bash automation that analyzed IAM Access Analyzer findings and applied approved policy changes at scale across a multi-account AWS environment.",
      "Strengthened cross-account governance for 200+ AWS accounts by implementing IAM trust policies, STS/AssumeRole flows, permission boundaries, and Organizations SCP controls aligned to least-privilege standards.",
      "Reduced false-positive access findings by 35% by correlating CloudTrail activity, IAM Access Analyzer results, and Access Advisor usage data with application owners during recurring access reviews.",
      "Improved production resilience by automating disaster-recovery testing and failover workflows for Kubernetes workloads, cutting recovery time by 45% across AWS regions.",
      "Improved production resilience by automating disaster-recovery testing, failover workflows, and container orchestration for AWS EKS platform operations spanning AWS, Azure, and GCP — treating every incident as an input to better automation.",
    ],
  },
  {
    id: 2,
    type: "work",
    role: "Sr. Cloud DevOps Engineer",
    company: "Change Healthcare",
    location: "Texas",
    duration: "12/2022 - 10/2023",
    highlights: [
      "Reduced security-vulnerability escape rate by 50% by integrating automated policy validation, IaC security scanning, and Git-based remediation workflows directly into CI/CD pipelines.",
      "Maintained 99.9% application availability across production AWS architectures (EC2, RDS, CloudWatch) by implementing automated observability and alerting controls.",
      "Cut false-positive alert volume by 40% by deploying Prometheus, Grafana, and Splunk monitoring and validating findings jointly with engineering teams.",
      "Eliminated 15 hardcoded and exposed secrets across production services by migrating credentials to AWS KMS, SSM Parameter Store, and Secrets Manager with zero downtime.",
    ],
  },
  {
    id: 3,
    type: "work",
    role: "AWS Cloud Engineer",
    company: "ARM",
    location: "Texas",
    duration: "10/2021 - 11/2022",
    highlights: [
      "Reduced critical security vulnerabilities by 60% by enforcing DevSecOps controls, automated container-image scanning, and infrastructure policy validation across the CI/CD pipeline.",
      "Cut deployment lead time by 50% by building Terraform-driven CI/CD pipelines that enabled zero-downtime, repeatable releases.",
      "Reduced manual remediation effort by 30% by developing Python/boto3 and Bash automation to enforce infrastructure lifecycle and AWS security operations at scale.",
      "Improved access-control consistency across 350+ AWS accounts by codifying IAM roles, policies, trust relationships, and permission boundaries as reusable Terraform modules.",
    ],
  },
  {
    id: 4,
    type: "work",
    role: "AWS DevOps Engineer",
    company: "Citi Bank",
    location: "Irving, TX",
    duration: "09/2019 - 10/2021",
    highlights: [
      "Cut production incidents by 20% using centralized logging and observability for critical financial apps.",
      "Strengthened multi-account AWS access governance for 175+ accounts by auditing IAM policies, cross-account trust relationships, and STS/AssumeRole access patterns in a regulated financial-services environment.",
      "Improved deployment confidence and cut production defects by 25% by integrating SonarQube quality gates and automated security controls into global CI/CD workflows.",
    ],
  },
  {
    id: 5,
    type: "work",
    role: "DevOps Engineer",
    company: "USAA",
    location: "San Antonio, TX",
    duration: "04/2018 - 09/2019",
    highlights: [
      "Cut disaster-recovery restoration time by 40% by automating backup, AMI management, and recovery workflows with Python and AWS CLI.",
      "Reduced operational incident response time by 30% by building containerized deployment pipelines and centralized Elastic Stack logging.",
      "Remediated 25 stale credentials and access keys by identifying identity-hygiene gaps and driving controlled, Git-based change workflows.",
    ],
  },
  {
    id: 6,
    type: "work",
    role: "Build and Release Engineer",
    company: "LA Care",
    location: "California",
    duration: "06/2016 - 03/2018",
    highlights: [
      "Cut release-coordination effort by 25% by automating J2EE build and release workflows using Jenkins and Chef configuration management.",
      "Maintained a fully auditable HIPAA-compliant release process by implementing controlled promotion, review, and deployment procedures across multi-stage environments.",
    ],
  },
  {
    id: 7,
    type: "education",
    role: "MBA: Management Information Systems",
    company: "Lincoln University",
    location: "California",
    duration: "Graduated",
    highlights: [
      "Specialized in Management Information Systems and IT Infrastructure Architecture."
    ],
  },
];

export const certifications = [
  {
    id: "aws-csaa",
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services (AWS)",
    issueDate: "July 29, 2026",
    expirationDate: "July 29, 2029",
    date: "July 2026 – July 2029",
    url: "https://www.credly.com/badges/98a5867d-1188-4169-bcd2-b70caf0b1b6a/linked_in_profile",
    verified: true,
  },
  {
    id: "microsoft-azure-ai-fundamentals",
    title: "Microsoft Certified: Azure AI Fundamentals",
    issuer: "Microsoft",
    date: "Microsoft Learn credential",
    url: "https://learn.microsoft.com/en-us/users/kowshar-6774/credentials/7765784df672a010?ref=https%3A%2F%2Fwww.linkedin.com%2F",
    verified: true,
  },
];

const portfolioData = {
  personalInfo,
  keyAchievements,
  skills,
  workExperience,
  certifications,
};

export default portfolioData;