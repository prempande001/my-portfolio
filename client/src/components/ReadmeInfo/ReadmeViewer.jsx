import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import ReadmeContent from "./Info.md?raw";

const CopyButton = ({ label, text }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <button
      onClick={copyToClipboard}
      className={`ml-4 px-3 py-1 text-sm font-medium rounded transition-all duration-200 ${
        copied
          ? "bg-green-600 text-white"
          : "bg-gray-700 text-white hover:bg-gray-600"
      }`}
    >
      {copied ? "Copied!" : `Copy ${label}`}
    </button>
  );
};

const ReadmeViewer = () => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    setMarkdown(ReadmeContent);
  }, []);

  const info = {
    name: {
      label: "Name",
      text: "Parmeshwar Pande",
      link: "https://www.linkedin.com/in/parmeshwar-pande-572208249",
    },
    email: {
      label: "Email",
      text: "prempande001@gmail.com",
      link: "mailto:prempande001@gmail.com",
    },
    phone: {
      label: "Phone",
      text: "+91-9730574564",
    },
    location: {
      label: "Location",
      text: "Mumbai, Maharashtra, India",
    },
    links: [
      { label: "GitHub", url: "https://github.com/prempande001" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/parmeshwar-pande-572208249" },
    ],
  };

  const education = [
    {
      schoolName: "Dr. Babasaheb Ambedkar Marathwada University, Chh. Sambhajinagar",
      degree: "Master of Computer Applications (MCA)",
      year: "June 2024 – June 2026",
      major: "Computer Applications",
      percentage: 69.10,
    },
    {
      schoolName: "Dr. Babasaheb Ambedkar Marathwada University, Chh. Sambhajinagar",
      degree: "Bachelor of Science in Computer Science (B.Sc.)",
      year: "2018 – 2021",
      major: "Computer Science",
      percentage: 73.57,
    },
  ];

  const experience = [
    {
      title: "DevOps Engineer",
      company: "Infosys",
      location: "Client: Bank Muscat — Internet Banking & Mobile Banking Deployment",
      duration: "Apr 2022 – May 2026",
      achievements: [
        "Built and maintained CI/CD pipelines in Jenkins and automated infrastructure provisioning with Terraform, cutting manual deployment effort by 80% and accelerating releases across Dev, QA, UAT, and Production.",
        "Containerized Java applications using Docker and deployed them on Kubernetes with Helm, reducing environment-related issues and improving resource utilization.",
        "Managed core AWS services (EC2, S3, IAM, VPC, ELB, Auto Scaling) to maintain 99.9% uptime for banking applications while cutting monthly cloud costs by 20% through optimized resource planning.",
        "Automated backup and alerting workflows using AWS Lambda and Bash scripting, reducing manual operational effort.",
        "Strengthened security posture by implementing least-privilege IAM policies and VPC network rules, helping the team pass security audits with zero critical findings.",
        "Monitored system health and performance using Grafana and CloudWatch to enable faster incident detection, and provided L2/L3 production support to resolve issues within SLA.",
        "Managed GitHub repositories and branching strategy, and standardized builds with Maven, achieving a 95% success rate on production deployments.",
        "Automated server provisioning and configuration using Ansible, ensuring consistency across environments and reducing manual deployment effort.",
        "Configured Kubernetes auto-scaling and health checks, enabling automatic traffic handling and self-healing of containers on failure.",
        "Administered AWS RDS databases, including backups, monitoring, and scaling, ensuring reliable database operations with minimal manual intervention.",
      ],
      link: { label: "LinkedIn", url: "https://www.linkedin.com/in/parmeshwar-pande-572208249" },
    },
  ];

  return (
    <div className="p-4 mt-12 bg-white dark:bg-black text-gray-900 dark:text-white min-h-screen transition-colors duration-500">
      <div className="flex flex-col gap-6 h-full">
        {/* Personal Information in Two Columns */}
        <div className="md:w-full bg-gray-100 dark:bg-gray-900 rounded p-6 max-h-full">
          <h2 className="text-3xl font-bold mb-4">Personal Information</h2>
          <div className="grid grid-cols-2 gap-3">
            {[info.name, info.email, info.phone, info.location].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 p-4 rounded mb-3 transition"
              >
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 text-xl font-semibold"
                  >
                    {item.text}
                  </a>
                ) : (
                  <span className="text-xl font-semibold">{item.text}</span>
                )}
                <CopyButton label={item.label} text={item.text} />
              </div>
            ))}
          </div>
        </div>

        {/* Profile Links in Two Columns */}
        <div className="md:w-full bg-gray-100 dark:bg-gray-900 rounded p-6 max-h-full">
          <h3 className="text-2xl font-semibold mb-4">🔗 Profiles</h3>
          <div className="grid grid-cols-2 gap-3">
            {info.links.map((link) => (
              <div
                key={link.label}
                className="flex items-center justify-between bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 p-3 rounded transition"
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline"
                >
                  {link.label}
                </a>
                <CopyButton label={link.label} text={link.url} />
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="md:w-full bg-gray-100 dark:bg-gray-900 rounded p-6 ">
          <h3 className="text-2xl font-semibold mb-4">🎓 Education</h3>
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-200 dark:bg-gray-800 p-4 rounded mb-3 transition hover:bg-gray-300 dark:hover:bg-gray-700"
            >
              <h4 className="text-xl font-semibold">{edu.degree}</h4>
              <div className="flex items-center justify-between">
                <p className="text-gray-600 dark:text-gray-300">{edu.schoolName}</p>
                <CopyButton label={""} text={edu.schoolName} /> 
              </div>
              <p className="text-gray-500 dark:text-gray-400">{edu.year} | {edu.major}</p>
              <div className="flex items-center justify-between">
                <p className="text-gray-600 dark:text-gray-300">{edu.percentage}</p>
                <CopyButton label={""} text={edu.percentage} /> 
              </div>
            </div>
          ))}
        </div>

        {/* Experience Section */}
        <div className="md:w-full bg-gray-100 dark:bg-gray-900 rounded p-6 max-h-full">
          <h3 className="text-2xl font-semibold mb-4">💼 Experience</h3>
          {experience.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-200 dark:bg-gray-800 p-4 rounded mb-3 transition hover:bg-gray-300 dark:hover:bg-gray-700"
            >
            
              <div className="flex items-center justify-between">
                <h4 className="text-xl font-semibold">{exp.title}</h4>
                <CopyButton label={""} text={exp.title} /> 
              </div>

              <div className="flex items-center justify-between">
                 {exp.company && <p className="text-gray-600 dark:text-gray-300">{exp.company}</p>}
                 {exp.company && <CopyButton label={""} text={exp.company} />}
              </div>
              {exp.location && <p className="text-gray-500 dark:text-gray-400">{exp.location}</p>}
              <p className="text-gray-500 dark:text-gray-400">{exp.duration}</p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-2">
                {exp.achievements.map((achievement, i) => (
                  <div className="flex items-center justify-between">
                    <li key={i}>{achievement}</li>
                    <CopyButton label={""} text={achievement} />
                  </div>
                  
                ))}
              </ul>
              {exp.link && (
                <a
                  href={exp.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline mt-2 inline-block"
                >
                  {exp.link.label}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReadmeViewer;