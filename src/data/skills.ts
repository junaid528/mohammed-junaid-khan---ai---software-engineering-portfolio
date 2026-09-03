import { SkillCategory } from '../types';

export const skillCategoriesData: SkillCategory[] = [
  {
    title: 'Generative AI & LLM Ecosystems',
    description: 'Foundation model orchestration, autonomous agent design, prompt tuning, and safety constraints.',
    icon: 'Bot',
    skills: [
      'Generative AI Applications',
      'Large Language Models',
      'GPT',
      'LLaMA',
      'Gemini',
      'AI Agent Frameworks',
      'Multi-Step Generative Workflows',
      'System Rules & Guardrails',
      'Hallucination Reduction'
    ]
  },
  {
    title: 'AI Frameworks & Pipelines',
    description: 'Frameworks for grounding models, generating embeddings, semantic chunking, and contextual retrieval.',
    icon: 'Workflow',
    skills: [
      'LangChain',
      'LlamaIndex',
      'HuggingFace Transformers',
      'RAG Pipelines',
      'Embedding Models',
      'Tokenization',
      'Prompt Engineering',
      'Semantic Indexing'
    ]
  },
  {
    title: 'Databases & Storage',
    description: 'Vector indices for similarity search alongside robust relational and document storage.',
    icon: 'Database',
    skills: [
      'Pinecone',
      'FAISS',
      'Weaviate',
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Structured Data Handling',
      'Vector Search'
    ]
  },
  {
    title: 'Cloud, DevOps & MLOps',
    description: 'Enterprise hosting in Azure, containerization, reproducible builds, and automated testing.',
    icon: 'Cloud',
    skills: [
      'Microsoft Azure',
      'AWS / GCP Deployment',
      'Docker',
      'Kubernetes',
      'MLflow',
      'CI/CD Pipelines',
      'Testing Automation for ML Systems',
      'Payload Optimization'
    ]
  },
  {
    title: 'Core Software Engineering',
    description: 'High-performance backends, clean API contracts, systems diagnostics, and resilient algorithms.',
    icon: 'Code2',
    skills: [
      'Python',
      'SQL',
      'Git / GitHub',
      'Data Structures & Algorithms',
      'Software Design Principles',
      'REST APIs',
      'FastAPI',
      'Flask',
      'System Log Analysis'
    ]
  }
];

export const stackLayers = [
  {
    layer: 'AI / LLM LAYER',
    badge: 'Foundation Models',
    items: ['GPT', 'LLaMA', 'Gemini', 'HuggingFace Open Weights'],
    description: 'Reasoning and synthesis engines with configured temperature, context windows, and safety rules.'
  },
  {
    layer: 'ORCHESTRATION & RAG',
    badge: 'Agentic Frameworks',
    items: ['LangChain', 'LlamaIndex', 'Embedding Models', 'RAG Guardrails'],
    description: 'Semantic routing, chunking, retrieval-augmented context injection, and stateful agent memory.'
  },
  {
    layer: 'APPLICATION & BACKEND',
    badge: 'Service Layer',
    items: ['Python', 'FastAPI', 'Flask', 'REST APIs', 'Async Handlers'],
    description: 'Microservices, asynchronous endpoint execution, payload validation, and client routing.'
  },
  {
    layer: 'DATA & STORAGE LAYER',
    badge: 'State & Vectors',
    items: ['PostgreSQL', 'MongoDB', 'Pinecone', 'FAISS', 'Weaviate'],
    description: 'High-speed relational transactional data coupled with high-dimensional vector search.'
  },
  {
    layer: 'CLOUD & MLOPS INFRASTRUCTURE',
    badge: 'Production Operations',
    items: ['Microsoft Azure', 'Docker', 'Kubernetes', 'MLflow', 'CI/CD'],
    description: 'Scalable cloud infrastructure, automated container builds, diagnostic monitoring, and cost optimization.'
  }
];
