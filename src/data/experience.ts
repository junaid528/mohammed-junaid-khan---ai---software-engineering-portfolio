import { Experience } from '../types';

export const experiencesData: Experience[] = [
  {
    id: 'neo-tech',
    role: 'Software Engineer Intern',
    company: 'Neo Technology Solutions',
    location: 'UK (Remote)',
    period: 'June 2026 – Present',
    type: 'Internship',
    isCurrent: true,
    responsibilities: [
      'Design and deploy advanced backend cloud workflows for enterprise application layers.',
      'Manage scalable data and hosting infrastructures within Microsoft Azure.',
      'Integrate complex REST APIs and microservices to map backend computing tasks to client-facing products.',
      'Optimize payload structures and payload delivery speeds for improved responsiveness.',
      'Maintain rigorous software engineering standards through version control, automated testing, CI/CD, and configuration troubleshooting.',
      'Analyze system diagnostics and server logs to identify performance bottlenecks and optimize system scalability and execution costs during deployment cycles.'
    ],
    skills: [
      'Microsoft Azure',
      'REST APIs',
      'Microservices',
      'CI/CD Pipelines',
      'Automated Testing',
      'Cloud Infrastructure',
      'Backend Engineering',
      'System Diagnostics'
    ]
  },
  {
    id: 'mindmatrix',
    role: 'Android App Development Intern',
    company: 'MindMatrix',
    location: 'Remote / Hybrid',
    period: 'February 2026 – May 2026',
    type: 'Internship',
    isCurrent: false,
    responsibilities: [
      'Developed structural mobile logic using Kotlin and MVVM architecture.',
      'Implemented structured data pipelines for seamless client-side state coordination.',
      'Implemented automated testing logic to safeguard runtime execution stability.',
      'Integrated external system APIs to bridge mobile clients with core services.'
    ],
    skills: [
      'Kotlin',
      'MVVM Architecture',
      'External APIs',
      'Data Pipelines',
      'Automated Testing'
    ]
  }
];
