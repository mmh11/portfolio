import verdeAwardImage from '../assets/1761372917445.jpg'
import verdeTeamImage from '../assets/1761952471443.jpg'

export const aboutHighlights = [
  'Master of Cybersecurity, Monash University',
  'Graduated with Distinction',
  'CompTIA Security+',
  'Hands-on MSP internship experience',
  'AWS serverless development',
  'Microsoft 365, DNS and email security exposure',
  'Professional React development experience',
]

export const contactLinks = [
  {
    label: 'Email',
    value: 'huim13a@gmail.com',
    href: 'mailto:huim13a@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'Sze Ming (Martin) Hui',
    href: 'https://www.linkedin.com/in/sze-ming-hui-baa202225/',
    external: true,
  },
  {
    label: 'GitHub',
    value: 'github.com/mmh11',
    href: 'https://github.com/mmh11',
    external: true,
  },
  {
    label: 'Website',
    value: 'sze.bio',
    href: 'https://sze.bio',
    external: true,
  },
]

export const experience = [
  {
    role: 'IT / Cybersecurity Intern',
    company: 'CyberAgency Group',
    period: 'June 2026 - Present',
    location: 'Melbourne, Australia',
    capabilities: [
      {
        title: 'AWS / Cloud Operations',
        items: [
          "Created and configured two dedicated AWS accounts for the organisation's AWS Partner Central and Partner Managed Accounts environment.",
          'Established separate AWS Organizations with the corresponding accounts acting as management accounts.',
          'Participated in AWS Partner and PMA onboarding discussions and documented the customer onboarding workflow.',
          'Worked with internal stakeholders and an external AWS distribution and partner team during setup.',
          'Currently developing further AWS knowledge as part of the role.',
        ],
      },
      {
        title: 'Email Security & DNS',
        items: [
          'Worked with EasyDMARC across client domains to investigate email authentication and deliverability configurations.',
          'Investigated SPF, DKIM and DMARC configuration.',
          'Created and validated DNS records including CNAME and Microsoft 365 DKIM selectors.',
          'Used DNS lookup tools such as dig to verify record propagation and diagnose missing records.',
          'Investigated Mailjet custom return-path configuration and coordinated with vendor support where required.',
          'Assisted with troubleshooting email delivery and authentication issues involving Microsoft 365 and Google environments.',
        ],
      },
      {
        title: 'Microsoft 365 / IT Support',
        items: [
          'Performed Microsoft 365 account and password administration.',
          'Assisted users with Outlook and Microsoft Teams access issues.',
          'Investigated Microsoft 365 quarantine and email-related configurations.',
          'Supported account and offboarding related IT administration.',
          'Performed general troubleshooting and escalated issues where appropriate.',
        ],
      },
      {
        title: 'MSP Operations',
        items: [
          'Gained exposure to ConnectWise PSA ticket workflows and ConnectWise RMM.',
          'Worked with ITBoost, SentinelOne exposure, vendor escalation and technical documentation.',
          'Prepared customer communication, ticket notes and resolution documentation.',
          'Built operational context that complements university cybersecurity and software engineering experience.',
        ],
      },
    ],
  },
  {
    role: 'Intern Programmer',
    company: 'Automated Systems (H.K.) Limited',
    period: 'January 2022 - August 2022',
    project: 'Hong Kong Education Bureau eFormSS',
    items: [
      'Completed an 8-month software development internship.',
      'Developed dynamic multi-step web forms using React, Redux and React Hook Form.',
      'Created reusable frontend components within a production-scale government system.',
      'Used GitLab and Jira in an Agile development environment.',
      'Collaborated with developers and project stakeholders.',
    ],
    technologies: ['React', 'Redux', 'React Hook Form', 'JavaScript', 'GitLab', 'Jira'],
  },
]

export const featuredProjects = [
  {
    title: 'Verde: Personalised Carbon Footprint Tracker',
    label: 'Monash PG Industry Project Expo Winner',
    period: 'August - December 2025',
    summary:
      'A flagship capstone project combining cloud engineering, backend development and cybersecurity. My main technical contribution focused on a secure AWS serverless backend and structured security work.',
    contribution: [
      'Designed serverless backend architecture.',
      'Developed REST API endpoints and backend workflows.',
      'Implemented authentication and access-control concepts.',
      'Designed data-flow diagrams and conducted security threat modelling using STRIDE.',
      'Performed security risk assessment, API testing and security testing.',
      'Used tools including Burp Suite and Frida to identify weaknesses and document mitigations.',
    ],
    technologies: [
      'AWS Lambda',
      'API Gateway',
      'Aurora Serverless / MySQL',
      'IAM',
      'AWS Cognito',
      'Python',
      'REST APIs',
      'JWT',
      'RBAC',
      'CloudWatch',
      'CloudTrail',
      'AWS WAF',
      'Secrets Manager',
    ],
    images: [
      {
        src: verdeAwardImage,
        alt: 'Verde project award graphic for Monash PG Industry Experience Expo Winner 2025',
      },
      {
        src: verdeTeamImage,
        alt: 'Postgraduate Industry Experience Industry Night group photo with Verde team members',
      },
    ],
  },
  {
    title: 'Network Security Design & Attack Simulation',
    period: 'November 2025',
    summary:
      'Designed and implemented a multi-tier network security environment in GNS3, presenting the work as an architecture and validation exercise rather than only a classroom assessment.',
    contribution: [
      'Designed a DMZ architecture with DNS, web services, SMTP, certificate authority and SSH services.',
      'Configured firewall policies, site-to-site IPSec VPN, remote-access VPN and ESP encryption.',
      'Validated traffic behavior and encrypted flows using Wireshark.',
      'Performed attack simulation and documented defensive countermeasures.',
    ],
    technologies: ['GNS3', 'Linux', 'Wireshark', 'IPSec', 'DNS', 'SMTP', 'SSH', 'Firewalls', 'VPN'],
    highlights: [
      {
        title: 'Architecture Zones',
        text: 'DMZ services, internal network boundaries, DNS, web, SMTP, certificate authority and SSH services.',
      },
      {
        title: 'VPN Implementation',
        text: 'Site-to-site IPSec, remote-access VPN and ESP encryption configured and reviewed in lab conditions.',
      },
      {
        title: 'Security Controls',
        text: 'Firewall policy design, service-specific access rules, attack simulation and defensive countermeasures.',
      },
      {
        title: 'Validation',
        text: 'Traffic behavior and encrypted flows checked with Wireshark to confirm expected network behavior.',
      },
    ],
  },
]

export const upcomingProjects = [
  {
    title: 'AWS Cloud Security / Detection & Response Lab',
    description:
      'Planned as a future project. It is intentionally listed separately from completed work until implementation details exist.',
  },
]

export const skillGroups = [
  {
    title: 'Cloud',
    description: 'AWS serverless and account-level work, with emphasis on identity, observability and secure service integration.',
    items: [
      'AWS Lambda',
      'API Gateway',
      'IAM',
      'Cognito',
      'Aurora MySQL',
      'CloudWatch',
      'CloudTrail',
      'AWS WAF',
      'Secrets Manager',
      'AWS Organizations',
    ],
  },
  {
    title: 'Cybersecurity',
    description: 'Applied through university projects and MSP exposure, especially around threat modelling, access control and email authentication.',
    items: [
      'Threat Modelling',
      'STRIDE',
      'Risk Assessment',
      'OWASP Top 10',
      'IAM / Access Control',
      'Penetration Testing',
      'Network Security',
      'Email Authentication',
      'SPF',
      'DKIM',
      'DMARC',
    ],
  },
  {
    title: 'Security / Network Tools',
    description: 'Tools used for testing, validation and lab-based investigation across application and network security tasks.',
    items: ['Burp Suite', 'Wireshark', 'Nmap', 'Frida', 'Metasploit', 'GNS3', 'Kali Linux'],
  },
  {
    title: 'Microsoft / IT Operations',
    description: 'Operational platforms encountered through MSP work, user support and email-related administration.',
    items: [
      'Microsoft 365',
      'DNS troubleshooting',
      'Email administration',
      'Windows',
      'ConnectWise PSA',
      'ConnectWise RMM',
      'ITBoost',
      'SentinelOne',
    ],
    note: 'Includes hands-on work and operational exposure; not presented as expert-level RMM or SentinelOne administration.',
  },
  {
    title: 'Development',
    description: 'Professional React experience supported by backend, API and database work in project environments.',
    items: ['Python', 'JavaScript', 'React', 'Redux', 'React Hook Form', 'REST APIs', 'SQL', 'MySQL', 'Git', 'Docker'],
  },
]

export const education = [
  {
    degree: 'Master of Cybersecurity',
    institution: 'Monash University',
    period: '2024 - 2025',
    result: 'Graduated with Distinction',
    details: 'GPA: 3.625 | WAM: 82.125',
  },
  {
    degree: 'Bachelor of Science (Honours)',
    institution: 'Financial Technology & Artificial Intelligence, The Hong Kong Polytechnic University',
    period: '2019 - 2023',
    result: 'Second Class Honours, Division 1',
  },
]

export const certifications = [
  {
    name: 'CompTIA Security+ (SY0-701)',
    issued: 'Issued June 2026',
    expires: 'Expires June 2029',
  },
]

export const currentLearning = [
  {
    name: 'Microsoft 365 Certified: Copilot and Agent Administration Fundamentals (AB-900)',
    status: 'Exam scheduled',
  },
  {
    name: 'AWS foundational certification',
    status: 'Planned next',
  },
]

export const timelineItems = [
  {
    period: '2019 - 2023',
    title: 'BSc Financial Technology & Artificial Intelligence',
    description: 'Built a foundation across finance technology, AI and software-oriented technical study.',
  },
  {
    period: '2022',
    title: 'Software Engineering Internship - Automated Systems',
    description: 'Developed React form components in a production-scale government eForms platform.',
  },
  {
    period: '2024 - 2025',
    title: 'Master of Cybersecurity - Monash University',
    description: 'Completed postgraduate cybersecurity study and graduated with Distinction.',
  },
  {
    period: '2025',
    title: 'Verde AWS/Cybersecurity Capstone - Expo Winner',
    description: 'Contributed secure AWS serverless backend work, threat modelling and API security testing.',
  },
  {
    period: 'June 2026',
    title: 'CompTIA Security+',
    description: 'Earned Security+ SY0-701 certification.',
  },
  {
    period: 'June 2026 - Present',
    title: 'CyberAgency Group - MSP / Cloud / Security / IT Operations',
    description: 'Working across operational IT, cloud account setup, Microsoft 365, DNS and email security support.',
  },
]

export const timelineDirection = {
  title: 'Current Direction',
  description:
    'Cloud Security / AWS / Cybersecurity Engineering, with a focus on practical cloud infrastructure and security operations.',
}
