import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'unilingo-ai',
    title: 'UniLingo AI',
    subtitle: 'Multimodal AI Agent & Learning Framework',
    category: 'Generative AI & Agent Systems',
    technologies: ['Python', 'Flask', 'LangChain', 'HuggingFace', 'RAG', 'Vector Stores'],
    overview: 'An end-to-end Generative AI pipeline and intelligent agent framework designed to orchestrate multimodal knowledge ingestion, retrieval-augmented grounding, and hallucination reduction across foundation models.',
    problem: 'Standard foundation models often struggle with multi-format input ingestion (audio, optical scans, structured text) and risk hallucination when answering domain-specific queries without contextual grounding.',
    solution: 'Engineered a unified ingestion pipeline that standardizes multimodal inputs into normalized embeddings, persists indexed data into secure vector stores, and executes LangChain-guided RAG with strict behavioral guardrails.',
    architectureNodes: [
      { id: '1', label: 'Multimodal Inputs', category: 'Ingestion', description: 'Real-time text streams, voice audio, and OCR optical scans', tech: 'Text / Voice / OCR' },
      { id: '2', label: 'Ingestion & Normalization', category: 'Preprocessing', description: 'Audio transcription, OCR parsing, and text cleaning', tech: 'Python / Flask' },
      { id: '3', label: 'Semantic Embeddings', category: 'Vectorization', description: 'Generates high-dimensional vector representations', tech: 'HuggingFace' },
      { id: '4', label: 'Vector Knowledge Store', category: 'Storage', description: 'Indexes chunks into secure cloud vector partitions', tech: 'Vector Index' },
      { id: '5', label: 'Retrieval Layer (RAG)', category: 'Search', description: 'Extracts relevant document context via semantic similarity', tech: 'RAG Pipeline' },
      { id: '6', label: 'LangChain Agent', category: 'Orchestration', description: 'Manages reasoning steps, tool usage, and prompt templates', tech: 'LangChain' },
      { id: '7', label: 'System Guardrails', category: 'Safety', description: 'Regulates model behavior and applies hallucination filters', tech: 'Prompt Engineering' },
      { id: '8', label: 'Foundation LLM', category: 'Inference', description: 'Generates responses constrained by retrieved context', tech: 'LLM Ecosystem' },
      { id: '9', label: 'Grounded Output', category: 'Delivery', description: 'Consistent, validated, and citation-backed response', tech: 'API Response' }
    ],
    engineeringHighlights: [
      'Engineered an end-to-end Generative AI pipeline supporting real-time multimodal ingestion across text, voice, and OCR data.',
      'Implemented a Retrieval-Augmented Generation (RAG) architecture pairing embedding models with secure cloud vector stores for multi-format knowledge indexing.',
      'Constructed advanced prompt engineering strategies and system guardrails to regulate LLM behavior and reduce hallucination.',
      'Conducted output consistency evaluation across foundation models to verify reliability and structured schema adherence.'
    ],
    keyTakeaways: [
      'Multi-format normalization before vectorization significantly enhances retrieval relevance.',
      'Deterministic system guardrails prevent drift during multi-turn agent interactions.',
      'Decoupling embedding generation from LLM inference lowers token consumption and ensures architectural modularity.'
    ],
    githubUrl: 'https://github.com/junaid528',
    accentColor: '#06b6d4'
  },
  {
    id: 'majestic-pipeline',
    title: 'Majestic Data Processing & Enterprise Automation Pipeline',
    category: 'Backend & High-Throughput Pipelines',
    subtitle: 'High-Throughput Ingestion, Validation & Secure Query Framework',
    technologies: ['FastAPI', 'PostgreSQL', 'Python', 'MLOps Fundamentals', 'Automated Testing'],
    overview: 'A robust high-throughput data ingestion and automation framework built to sanitize, validate, and process high-volume administrative datasets within multi-tenant database architectures.',
    problem: 'Large administrative data streams require uncompromising schema integrity, high ingestion throughput, strict sanitization against malformed inputs, and reliable database transaction guarantees.',
    solution: 'Designed an asynchronous FastAPI processing backbone backed by PostgreSQL, featuring modular relational schemas, strict payload validation, secure query parsing, and automated test suites.',
    architectureNodes: [
      { id: '1', label: 'Enterprise Data Feeds', category: 'Ingestion', description: 'Raw administrative batches and external system feeds', tech: 'Data Sources' },
      { id: '2', label: 'Ingestion Engine', category: 'Transport', description: 'High-throughput asynchronous payload receiving', tech: 'FastAPI' },
      { id: '3', label: 'Strict Validation', category: 'Sanitization', description: 'Enforces schema constraints and input sanitization', tech: 'Pydantic / Validation' },
      { id: '4', label: 'Data Preprocessing', category: 'Transformation', description: 'Normalizes structures and formats for relational storage', tech: 'Python Scripts' },
      { id: '5', label: 'Relational Store', category: 'Persistence', description: 'Modular relational schema and indexed database tables', tech: 'PostgreSQL' },
      { id: '6', label: 'Automation Modules', category: 'Execution', description: 'Executes automated data pipelines and event triggers', tech: 'Backend Services' },
      { id: '7', label: 'Testing & Diagnostics', category: 'Reliability', description: 'Automated test suites, transaction rollbacks, and error logging', tech: 'MLOps Testing' }
    ],
    engineeringHighlights: [
      'Architected a high-throughput data ingestion framework and preprocessing pipeline utilizing an asynchronous FastAPI backend.',
      'Designed modular database schemas in PostgreSQL tailored for large administrative datasets and multi-tenant isolation.',
      'Enforced strict input validation layers and secure query parsing to protect database state integrity.',
      'Integrated automated testing modules and logging diagnostics aligned with MLOps best practices to verify data pipeline reliability.'
    ],
    keyTakeaways: [
      'Asynchronous validation routines prevent ingestion bottlenecks during high-throughput enterprise batch loads.',
      'Modular database normalization simplifies multi-tenant isolation and index maintenance.',
      'Rigorous automated testing at the data ingestion boundary catches schema anomalies before persistence.'
    ],
    githubUrl: 'https://github.com/junaid528',
    accentColor: '#3b82f6'
  },
  {
    id: 'smart-retrieval-index',
    title: 'Smart Knowledge & Retrieval Database Index',
    category: 'Information Retrieval & Data Systems',
    subtitle: 'Data-Driven Configuration & Operational Asset Indexing System',
    technologies: ['Python', 'Flask', 'SQL', 'Vector Indexing Concepts', 'System Diagnostics'],
    overview: 'A data-driven configuration and automated retrieval system engineered to index corporate product records, operational assets, and transactional metrics with continuous state tracking.',
    problem: 'Managing diverse corporate records and operational assets across decentralized formats makes rapid retrieval and systematic exception monitoring difficult without an automated indexing framework.',
    solution: 'Built modular Python preprocessing scripts that ingest heterogeneous operational data, structure it into searchable indexed formats, and maintain continuous logging for proactive anomaly detection.',
    architectureNodes: [
      { id: '1', label: 'Corporate Records', category: 'Ingestion', description: 'Product catalogues, operational assets, and transactional metrics', tech: 'Enterprise Datasets' },
      { id: '2', label: 'Modular Preprocessing', category: 'ETL', description: 'Cleans, partitions, and standardizes disparate record formats', tech: 'Python Scripts' },
      { id: '3', label: 'Configuration Layer', category: 'Orchestration', description: 'Dynamic data-driven mappings and indexing parameters', tech: 'Flask' },
      { id: '4', label: 'Automated Indexing', category: 'Indexing', description: 'Builds searchable relational and vector-oriented index structures', tech: 'SQL / Vector Concepts' },
      { id: '5', label: 'Retrieval Engine', category: 'Search', description: 'Enables high-efficiency querying across asset records', tech: 'Search Service' },
      { id: '6', label: 'State & Exception Tracking', category: 'Observability', description: 'Continuous logging monitors application state and catches exceptions', tech: 'Diagnostics' }
    ],
    engineeringHighlights: [
      'Engineered a data-driven configuration system to automate indexing across corporate product records, operational assets, and transactional metrics.',
      'Built modular Python preprocessing scripts to parse, clean, and structure raw enterprise records for rapid downstream querying.',
      'Incorporated SQL and vector indexing concepts to optimize multi-attribute record retrieval.',
      'Implemented continuous logging and application-state tracking mechanisms to accelerate exception detection and troubleshooting.'
    ],
    keyTakeaways: [
      'Decoupled preprocessing pipelines allow continuous indexing without disrupting read-side application queries.',
      'Structured application-state tracking drastically reduces mean-time-to-detection for anomalous data records.'
    ],
    githubUrl: 'https://github.com/junaid528',
    accentColor: '#10b981'
  }
];
