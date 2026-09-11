

export const project = [
    {
        id: 1,
        name: 'Banking CI/CD Pipeline Modernization',
        client: 'Client: Bank Muscat — Internet & Mobile Banking',
        description: 'Architected and maintained Jenkins CI/CD pipelines using GitOps and Pipeline-as-Code practices for critical banking journeys (Term Loan, Overdraft, Corporate Online Banking, Insurance, Find Branch), with infrastructure provisioning automated end-to-end through Terraform.',
        highlights: [
            'Cut manual deployment effort by 80% and accelerated releases across Dev, QA, UAT, and Production.',
            'Standardized builds with Maven and managed GitHub branching strategy, achieving a 95% success rate on production deployments.',
            'Delivered within an Agile/Scrum model with zero critical findings in security audits.',
        ],
        repository: 'https://github.com/prempande001',
        image: '/projects/cicd-pipeline.svg',
        url: 'https://github.com/prempande001',
        technologies: 'Jenkins, Terraform, Maven, Git/GitHub, GitOps, Pipeline-as-Code, SonarQube, Trivy',
        status: 'Completed',
        notice: 'Representative of enterprise CI/CD work delivered for Bank Muscat at Infosys. Source is private; repository link points to my GitHub profile.',
    },
    {
        id: 2,
        name: 'Containerized Banking Platform on Kubernetes',
        client: 'Client: Bank Muscat — Internet & Mobile Banking',
        description: 'Containerized Java banking applications with Docker and orchestrated deployments on Kubernetes with Helm, implementing blue-green and canary deployment strategies to reduce environment-related issues and improve resource utilization.',
        highlights: [
            'Configured Kubernetes auto-scaling and health checks, enabling automatic traffic handling and self-healing of containers on failure.',
            'Improved overall application resilience and release safety through blue-green and canary rollouts.',
            'Automated server provisioning and configuration with Ansible, cutting manual deployment effort by 50%.',
        ],
        repository: 'https://github.com/prempande001',
        image: '/projects/eks-migration.svg',
        url: 'https://github.com/prempande001',
        technologies: 'Docker, Kubernetes, Helm, Ansible, AWS EKS, ECR',
        status: 'Completed',
        notice: 'Representative of enterprise container platform work delivered for Bank Muscat at Infosys. Source is private; repository link points to my GitHub profile.',
    },
    {
        id: 3,
        name: 'Production Observability & Self-Healing Automation',
        client: 'Client: Bank Muscat — Internet & Mobile Banking',
        description: 'Monitored system health and performance with Grafana and CloudWatch, and automated backup, alerting, and self-healing workflows using AWS Lambda and Bash scripting to reduce manual operational effort and speed up incident detection.',
        highlights: [
            'Reduced manual operational effort by over 60% through automated backup, alerting, and self-healing workflows.',
            'Enabled faster incident detection and ITIL-aligned incident and change management.',
            'Provided L2/L3 production support, resolving issues within SLA.',
        ],
        repository: 'https://github.com/prempande001',
        image: '/projects/observability-stack.svg',
        url: 'https://github.com/prempande001',
        technologies: 'Grafana, AWS CloudWatch, AWS Lambda, Bash Scripting',
        status: 'Completed',
        notice: 'Representative of enterprise observability work delivered for Bank Muscat at Infosys. Source is private; repository link points to my GitHub profile.',
    },
    {
        id: 4,
        name: 'Secure, Highly-Available AWS Banking Infrastructure',
        client: 'Client: Bank Muscat — Internet & Mobile Banking',
        description: 'Managed core AWS services (EC2, S3, IAM, VPC, ELB, Auto Scaling, RDS) to deliver high-availability, disaster-recovery-ready infrastructure, implementing least-privilege IAM policies and VPC network rules aligned with DevSecOps practices.',
        highlights: [
            'Maintained 99.9% uptime for banking applications while cutting monthly cloud costs by 20% through optimized resource planning.',
            'Helped the team pass security audits with zero critical findings.',
            'Administered AWS RDS databases end-to-end, including backups, monitoring, and scaling.',
        ],
        repository: 'https://github.com/prempande001',
        image: '/projects/aws-landing-zone.svg',
        url: 'https://github.com/prempande001',
        technologies: 'Terraform, AWS IAM, VPC, EC2, ELB, Auto Scaling, RDS',
        status: 'Completed',
        notice: 'Representative of enterprise cloud infrastructure work delivered for Bank Muscat at Infosys. Source is private; repository link points to my GitHub profile.',
    },
]


export const experience = [
    {
        id: 1,
        company: "Infosys",
        address: "Client: Bank Muscat — Internet Banking & Mobile Banking Deployment",
        position: "DevOps Engineer",
        startDate: "Sep 2023",
        endDate: "May 2026",
        description:
            "AWS DevOps Engineer supporting Bank Muscat's Internet and Mobile Banking platforms, owning CI/CD pipelines, cloud infrastructure automation, containerized deployments, monitoring, and production releases for critical banking journeys including Term Loan, Overdraft, Corporate Online Banking, Insurance, and Find Branch.",
        achievements: [
            "Architected and maintained CI/CD pipelines in Jenkins using GitOps and Pipeline-as-Code practices, and automated infrastructure provisioning with Terraform, cutting manual deployment effort by 80% and accelerating releases across Dev, QA, UAT, and Production.",
            "Containerized Java applications using Docker and orchestrated deployments on Kubernetes with Helm, implementing blue-green and canary deployment strategies that reduced environment-related issues and improved resource utilization.",
            "Managed core AWS services (EC2, S3, IAM, VPC, ELB, Auto Scaling) to deliver high-availability, disaster-recovery-ready infrastructure, maintaining 99.9% uptime for banking applications while cutting monthly cloud costs by 20% through optimized resource planning.",
            "Automated backup, alerting, and self-healing workflows using AWS Lambda and Bash scripting, reducing manual operational effort by over 60%.",
            "Followed DevSecOps practices by using SonarQube to scan code for vulnerabilities and Trivy to scan Docker images, along with least-privilege IAM policies and VPC network rules, helping the team pass security audits with zero critical findings.",
            "Monitored system health and performance using Grafana and CloudWatch, enabling faster incident detection and driving ITIL-aligned incident and change management, while providing L2/L3 production support to resolve issues within SLA.",
            "Managed GitHub repositories and branching strategy, and standardized builds with Maven, achieving a 95% success rate on production deployments within an Agile/Scrum delivery model.",
            "Developed and managed declarative Jenkins pipelines using Jenkinsfile and Dockerfile stored in GitHub, enabling Jenkins to automatically detect code changes and execute the required build, code scanning, Docker image creation, and deployment steps.",
            "Automated server provisioning and configuration using Ansible, ensuring consistency across environments and reducing manual deployment effort by 50%.",
            "Configured Kubernetes auto-scaling and health checks, enabling automatic traffic handling and self-healing of containers on failure, and improving overall application resilience.",
            "Administered AWS RDS databases, including backups, monitoring, and scaling, ensuring reliable database operations with minimal manual intervention.",
        ],
        link: { label: "LinkedIn", url: "https://www.linkedin.com/in/parmeshwar-pande-572208249" },
        project: project,
    },
    {
        id: 2,
        company: "Infosys",
        address: "Client: State Bank of India (Foreign) — Digital Banking Platform Support",
        position: "Junior DevOps Engineer",
        startDate: "Apr 2022",
        endDate: "Aug 2023",
        description:
            "Junior AWS DevOps Engineer supporting State Bank of India's foreign branch operations, assisting with CI/CD pipeline execution, cloud infrastructure setup, containerized deployments, and monitoring for digital banking platform releases.",
        achievements: [
            "Assisted in building and maintaining CI/CD pipelines in Jenkins using Pipeline-as-Code principles, supporting automated build, test, and deployment processes across Dev and QA environments within an Agile/Scrum delivery model.",
            "Supported containerization of applications using Docker and assisted with deployments to Kubernetes clusters under senior engineer guidance, contributing to faster and more consistent environment setup.",
            "Provisioned and managed core AWS resources (EC2, S3, IAM, VPC) for application hosting, following organizational security, compliance, and DevSecOps standards.",
            "Wrote and maintained Bash and Python scripts to automate routine operational tasks, reducing manual effort for the team by approximately 40%.",
            "Monitored application and infrastructure health using CloudWatch and Grafana dashboards, escalating incidents in line with SLA and ITIL-aligned incident management practices.",
            "Assisted with Ansible playbooks for server configuration management and Terraform scripts for infrastructure provisioning.",
            "Performed code build and deployment tasks using Maven and managed source code repositories in Git/GitHub under established branching guidelines, supporting GitOps-based version control practices.",
            "Executed code quality checks using SonarQube and coordinated with development teams to resolve flagged issues before release.",
            "Supported day-to-day production issue triage and ticket resolution using Jira Service Management, escalating critical issues to senior engineers as needed.",
            "Documented deployment procedures, runbooks, and configuration changes to support knowledge transfer and consistent environment setup.",
        ],
        link: { label: "LinkedIn", url: "https://www.linkedin.com/in/parmeshwar-pande-572208249" },
        project: [],
    },
]


export const education = [
    {
        schoolName: 'Dr. Babasaheb Ambedkar Marathwada University, Chh. Sambhajinagar',
        degree: 'Master of Computer Applications (MCA)',
        year: 'June 2024 – June 2026',
        major: 'Computer Applications',
        percentage: 69.10,
    },
    {
        schoolName: 'Dr. Babasaheb Ambedkar Marathwada University, Chh. Sambhajinagar',
        degree: 'Bachelor of Science in Computer Science (B.Sc.)',
        year: '2018 – 2021',
        major: 'Computer Science',
        percentage: 73.57,
    },
    {
        schoolName: 'Maharashtra State Board',
        degree: 'Higher Secondary Education (HSC)',
        year: '2018',
        major: 'General Education',
        percentage: 74.77,
    },
    {
        schoolName: 'Maharashtra State Board',
        degree: 'Secondary Education (SSC)',
        year: '2016',
        major: 'General Education',
        percentage: 73.60,
    },
]

export const certifications = []

export const skill = [
    {
        name: "Cloud Platform (AWS)",
        type: "cloud",
        items: [
            { name: "AWS Compute — EC2, Lambda, Auto Scaling", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazonaws.svg" },
            { name: "AWS Containers — ECR, EKS, ECS", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/kubernetes.svg" },
            { name: "AWS Storage & Database — S3, EBS, RDS, DynamoDB", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazonaws.svg" },
            { name: "AWS Networking — VPC, Route53, ELB, AMI", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazonaws.svg" },
            { name: "AWS Messaging & Monitoring — SNS, CloudWatch, Amazon Connect", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazonaws.svg" },
            { name: "AWS CloudFormation", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazonaws.svg" },
        ]
    },
    {
        name: "Infrastructure as Code & Config Management",
        type: "iac",
        items: [
            { name: "Terraform", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/terraform.svg" },
            { name: "Ansible", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/ansible.svg" },
        ]
    },
    {
        name: "CI/CD, Build & Artifact Management",
        type: "cicd",
        items: [
            { name: "Jenkins", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/jenkins.svg" },
            { name: "Maven", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/apachemaven.svg" },
            { name: "Nexus Repository", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/sonatype.svg" },
        ]
    },
    {
        name: "Containers & Orchestration",
        type: "containers",
        items: [
            { name: "Docker", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/docker.svg" },
            { name: "Kubernetes (with Helm)", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/kubernetes.svg" },
        ]
    },
    {
        name: "Monitoring & Observability",
        type: "monitoring",
        items: [
            { name: "Grafana", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/grafana.svg" },
            { name: "AWS CloudWatch", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazonaws.svg" },
        ]
    },
    {
        name: "Version Control & Collaboration",
        type: "vcs",
        items: [
            { name: "Git", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/git.svg" },
            { name: "GitHub", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg" },
        ]
    },
    {
        name: "Programming & Automation Scripting",
        type: "scripting",
        items: [
            { name: "Python", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/python.svg" },
            { name: "Shell / Bash Scripting", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/gnubash.svg" },
            { name: "YAML", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/yaml.svg" },
        ]
    },
    {
        name: "Security & Secrets Management",
        type: "security",
        items: [
            { name: "IAM Policies & VPC Security Groups", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazonaws.svg" },
            { name: "AWS Secrets Manager", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazonaws.svg" },
            { name: "SonarQube", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/sonarqube.svg" },
            { name: "Trivy", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/trivy.svg" },
        ]
    },
    {
        name: "Systems, Tools & Methodologies",
        type: "systems",
        items: [
            { name: "Linux (Ubuntu, Amazon Linux) & Windows Server", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linux.svg" },
            { name: "MobaXterm, WinSCP, PuTTY", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/windowsterminal.svg" },
            { name: "Jira Service Management", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/jira.svg" },
            { name: "Notepad++ & VS Code", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/visualstudiocode.svg" },
        ]
    },
]
