# Prompt: Dipak Rathod — Animated DevOps Engineer Portfolio

Copy everything below into your AI coding tool (Claude, v0, Cursor, etc.) as one prompt.

---

Build a highly animated, visually striking personal portfolio website for a DevOps engineer. Use React (with Framer Motion for animations), Tailwind CSS, and React Router. The site should feel premium, modern, and cinematic — heavy use of scroll-triggered animations, micro-interactions, parallax, and smooth transitions, but still fast and performant (lazy-load below-the-fold sections, respect `prefers-reduced-motion`).

## Person / Content

**Name:** Dipak Rathod
**Title:** AWS DevOps Engineer
**Location:** Pune, Maharashtra, India
**Email:** dkrathod2000@gmail.com
**Phone:** +91-7249651966
**LinkedIn:** https://www.linkedin.com/in/dipak-rathod/

**Professional Summary:**
DevOps Engineer with 3 years of experience in AWS Cloud, CI/CD automation, Infrastructure as Code (Terraform, CloudFormation), Kubernetes, Docker, Linux administration, and DevSecOps. Experienced in building scalable, secure, and highly available cloud infrastructure with expertise in automation, monitoring, and deployment pipelines.

**Technical Skills (group into animated skill cards/categories with icons):**
- **Cloud Platforms:** AWS — EC2, S3, IAM, VPC, Route 53, ALB/NLB, Auto Scaling, RDS, DynamoDB, ECR, EKS, Lambda, CloudWatch, CloudTrail, SNS
- **Infrastructure as Code:** Terraform, AWS CloudFormation
- **CI/CD & Build Automation:** Jenkins, GitHub Actions, GitLab CI/CD, AWS CodePipeline, AWS CodeBuild, AWS CodeDeploy, Maven
- **Containers & Orchestration:** Docker, Kubernetes
- **Monitoring & Logging:** Prometheus, Grafana, AWS CloudWatch, ELK Stack
- **Version Control & Collaboration:** Git, GitHub, GitHub Copilot
- **Programming & Scripting:** Python, Bash, Shell Scripting
- **Operating Systems:** Linux (RHEL, Ubuntu), Windows Server
- **Databases:** MySQL, AWS RDS, DynamoDB
- **Application Servers:** Apache Tomcat
- **Security & DevSecOps:** IAM, Security Groups, AWS Security Best Practices, SonarQube, DevSecOps
- **Methodologies:** Agile, Scrum

**Work Experience:**
- **Tech Mahindra | DevOps Engineer** — Nov 2023 – Present
  Client: Rogers Communications (Telecom)
  - Designed, implemented, and maintained CI/CD pipelines using Jenkins, GitHub Actions, GitLab CI/CD, and AWS CodePipeline, reducing deployment time by 40% and improving release efficiency.
  - Automated infrastructure provisioning using Terraform and AWS CloudFormation (IaC), ensuring consistent, scalable, and repeatable deployments across environments.
  - Managed and optimized AWS cloud infrastructure (EC2, VPC, IAM, S3, RDS, DynamoDB, ELB, Auto Scaling, CloudWatch, CloudTrail, SNS) ensuring high availability, security, and performance.
  - Containerized applications using Docker and deployed workloads on Kubernetes, improving scalability, portability, and resource utilization.
  - Automated build, deployment, and release processes using Maven, Bash, and pipeline automation, reducing manual effort and deployment errors.
  - Deployed, configured, and maintained Java-based applications on Apache Tomcat across Dev, Test, QA, and Production environments.
  - Implemented centralized monitoring, logging, and alerting using Prometheus, Grafana, ELK Stack, AWS CloudWatch, and CloudTrail, enabling proactive monitoring and faster incident resolution.
  - Integrated SonarQube into CI/CD pipelines to improve code quality and enforce DevSecOps practices.
  - Optimized AWS resource utilization through rightsizing, tagging strategies, and Reserved Instances, reducing cloud infrastructure costs by 25%.
  - Investigated and resolved 20+ production incidents per month within SLA, improving MTTR by 20% through root cause analysis and proactive monitoring.
  - Collaborated with Development, QA, Support, and Infrastructure teams using Agile methodologies to deliver reliable releases.

**Certifications (display as animated badge cards):**
- AWS Certified DevOps Engineer – Professional
- AWS Certified Solutions Architect – Professional
- AWS Certified Solutions Architect – Associate

**Education:**
- MCA, Dr. Babasaheb Ambedkar Marathwada University, Aurangabad — 2022–2024, 79.70%
- BCS, Dr. Babasaheb Ambedkar Marathwada University, Aurangabad — 2019–2022, 77.43%

**Projects:** (No project list exists yet — generate 3-4 realistic project cards inferred from the experience above, clearly framed as representative work, e.g.: "Multi-Environment CI/CD Pipeline for Telecom Client" (Jenkins + GitHub Actions + AWS CodePipeline), "EKS-Based Container Platform Migration" (Docker + Kubernetes + Terraform), "Centralized Observability Stack" (Prometheus + Grafana + ELK), "Cost-Optimized Multi-Account AWS Landing Zone" (Terraform + CloudFormation + IAM). Leave these clearly editable so Dipak can replace with real project names/repos later.)

## Sections & Structure

1. **Hero** — animated intro with name, title ("AWS DevOps Engineer"), a typewriter/rotating-text effect cycling through key specialties (CI/CD, Kubernetes, Terraform, AWS Cloud, DevSecOps), animated gradient/particle or subtle grid background evoking infrastructure/cloud themes, CTA buttons (Download Resume, Contact Me), and entrance animations (staggered fade/slide-in).
2. **About** — summary paragraph, animated stat counters (3+ years experience, 20+ incidents/month resolved, 40% faster deployments, 25% cost reduction), profile image with subtle hover/parallax tilt.
3. **Skills** — categorized, animated grid/carousel of skill badges grouped by the categories above, each with an icon (use a tech-icon library), hover-scale and stagger-in-on-scroll animations. Consider a tab or filter UI (Cloud / IaC / CI-CD / Containers / Monitoring / Security).
4. **Experience** — vertical animated timeline (scroll-linked line-draw animation) with the Tech Mahindra role, expandable bullet points with icons per achievement, animated counters for the metrics (40%, 25%, 20+, 20%).
5. **Projects** — animated card grid (tilt-on-hover / reveal-on-scroll) for the 4 generated project cards, each with tech-stack tags and a short description.
6. **Certifications** — animated badge/medal cards for the 3 AWS certifications with subtle shine/glow hover effect.
7. **Education** — simple animated cards/timeline for MCA and BCS.
8. **Contact** — animated contact form or direct links (email, phone, LinkedIn), with icon micro-interactions and a subtle background animation matching the hero.
9. **Footer** — social links (LinkedIn) with hover animations, back-to-top button with smooth scroll.

## Animation & Design Requirements

- Use Framer Motion `whileInView` for scroll-triggered reveals on every section (staggered children).
- Smooth page-load sequence (hero elements animate in with delay/stagger).
- Custom cursor or magnetic-button hover effect on primary CTAs (optional but preferred for "most attractive").
- Dark theme by default (DevOps/cloud aesthetic: deep navy/slate background, electric blue/teal/orange accent colors evoking terminal/cloud dashboards), with smooth theme toggle to light mode.
- Subtle animated background elements (floating cloud/container icons, grid lines, or particle network) that don't distract from content.
- Smooth scroll behavior between sections with a sticky, animated navbar (active-section highlight, scroll-progress bar).
- Micro-interactions on all buttons/links/cards (scale, glow, or color-shift on hover).
- Fully responsive (mobile-first), animations gracefully simplified/disabled on smaller screens and for `prefers-reduced-motion`.
- Fast performance: code-split sections, optimize images, avoid layout thrashing from animations.

## Tech Stack

React + Vite, Tailwind CSS, Framer Motion, React Router, an icon set (react-icons or lucide-react) for skill/tech icons. Keep components modular (one file per section) so content is easy to update later.

---
