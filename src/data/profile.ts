import { Profile } from '../types';

export const profileData: Profile = {
  name: 'Mohammed Junaid Khan',
  role: 'Software Engineer | Generative AI & Cloud Engineering',
  supportingRole: 'Generative AI Engineer | Backend & Cloud Systems',
  location: 'Mysore, Karnataka, India',
  email: 'mohammedjunaidk01@gmail.com',
  phone: '+91 9916413594',
  github: 'https://github.com/junaid528',
  linkedin: 'https://linkedin.com/in/mohammedjunaid-khan-1987b7340',
  heroEyebrow: 'SOFTWARE ENGINEER • GENERATIVE AI • CLOUD',
  heroHeadline: 'Building Intelligent Systems That Turn Complex Problems Into Production-Ready AI Experiences.',
  summary: 'Computer Science and Engineering (Data Science) graduate with hands-on experience building Generative AI applications, RAG pipelines, backend systems, and cloud workflows using Python, LangChain, HuggingFace, FastAPI, and Microsoft Azure.',
};

export const engineeringPrinciples = [
  {
    number: '01',
    title: 'Build for Reliability',
    description: 'Enforce strict schema validation, deterministic fallback logic, and resilient error recovery to ensure systems withstand unpredictable real-world inputs.'
  },
  {
    number: '02',
    title: 'Design for Scale',
    description: 'Decouple heavy computing workloads, optimize payload throughput, and structure backend microservices to scale gracefully under enterprise demands.'
  },
  {
    number: '03',
    title: 'Ground AI With Knowledge',
    description: 'Eliminate model hallucination and inconsistency by pairing foundation models with verified vector retrieval, semantic chunking, and system guardrails.'
  },
  {
    number: '04',
    title: 'Engineer for Production',
    description: 'Bridge experimental prototypes with deployable software using automated testing, containerization, CI/CD pipelines, and active diagnostic monitoring.'
  }
];
