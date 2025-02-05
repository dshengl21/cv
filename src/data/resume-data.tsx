import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Sheng Lien",
  initials: "SL",
  location: "Phladelphia, PA, USA",
  locationLink: "https://www.google.com/maps/place/Philadelphia",
  about:
    "Data Analysts, Cloud Specialist, Technical Consultant",
  summary: (
    <>
      CLOUD ARCHITECT with extensive experience designing and implementing cloud-based solutions, data pipelines,
      and analytical platforms, ensuring alignment with business goals and technical best practices. Dynamic professional
      with proven expertise in data engineering, visualization, and automation across industries. Strategic leader skilled
      at delivering technical demonstrations, proposals, and translating client needs into actionable technical strategies.
    </>
  ),
  avatarUrl: "https://dandanfun.s3.us-east-1.amazonaws.com/pics/Profile_square.JPEG",
  personalWebsiteUrl: "https://www.shenglien.com",
  contact: {
    email: "danielshenglien@gmail.com",
    tel: "+6463770027",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/dshengl21",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sheng-lien/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/dshengl",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Temple University",
      degree: "Bachelor's Degree in Management Information Systems",
      start: "2014",
      end: "2019",
    },
  ],
  work: [
    {
      company: "University of Pennsylvania",
      link: "",
      badges: ["Hybrid", "Solutions Architecture", "Python", "Java"],
      title: "IT Solutions Contractor",
      logo: ConsultlyLogo,
      start: "2023",
      end: "2024",
      description: (
        <>
          Delivered IT solutions for the Penn Smart Aviary.
          <ul className="list-inside list-disc">
            <li>
            Conducted systems analysis to transform requirements into technical
            implementations.
            </li>
            <li>
            Developed an automated IoT data pipeline by configuring data collection in Java on a RFID device and data
            processing and exporting in Python.
            </li>
            <li>
            Implemented an archival data pipeline from S3 Glacier by configuring an on-prem Linux server for staging, bash
            scripts for retrieval, and a GUI-based Python app for final extraction and customization.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "PurpleLab",
      link: "https://purplelab.com",
      badges: [
        "SQL",
        "Python",
        "GCP",
      ],
      title: "Data Engineer",
      logo: ParabolLogo,
      start: "2022",
      end: "2023",
      description: (
        <>

          <ul className="list-inside list-disc">
            <li>
            Developed fact tables for nationwide PBMs, payers, and insurance plans, enabling data integration in BigQuery.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "eCloudvalley",
      link: "https://www.ecloudvalley.com/en",
      badges: ["On Site", "Systems Design", "Python", "SQL", "AWS", "Presales",],
      title: "Data Analyst",
      logo: ClevertechLogo,
      start: "2020",
      end: "2022",
      description: (
        <>
          Successfully transitioned from mobile to full-stack development while
          leading distributed teams.
          <ul className="list-inside list-disc">
            <li>
            Designed AWS solutions for international clients by drafting proposals and leading data discovery workshops,
            with use cases ranging from transportation logistics, automobile IoT, to retail ML customer segmentation.
            </li>
            <li>
            Engineered automated data pipelines, implementing data migration, ETL scripts, and BI dashboards.
            </li>
            <li>
            Spearheaded international sales by leading demonstrations, pitches, and ongoing account management,
            securing 4 presales and 3 upsales signings.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "HealthShare Exchange",
      link: "https://healthshareexchange.org/",
      badges: ["On Site", "SQL", "Tableau", "Javascript","AWS Redshift"],
      title: "Data Analytics Intern",
      logo: JojoMobileLogo,
      start: "2017",
      end: "2019",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
            Developed an analytics tool using Redshift, Tableau and Javascript, enabling analysis of city-wide hospital data.
            </li>
            <li>Drafted community health and hospital readmission reports for the City of Philadelphia with CTAS SQL queries.</li>
          </ul>
        </>
      ),
    },
    
  ],
  skills: [
    "AWS/Cloud",
    "Data Pipelines",
    "Python/SQL",
    "ETL",
    "Tableau/Quicksight",
    "Systems Design",
    "Account Management",
    "Solutions Presales",
  ],
  projects: [
    {
      title: "Atlas Technology Website",
      techStack: ["Web Dev", "AWS", "Javascript"],
      description:
        "Website for a Web3 technology company based in Taiwan. Uses AWS SAM to deploy Lambda to store contact forms in DynamoDB and send emails via SES.",
      logo: MonitoLogo,
      link: {
        label: "atlas-tech.dev",
        href: "https://www.atlas-tech.dev/",
      },
    },
  ],
} as const;
