export type Project = {
  name: string;
  category: string;
  description: string;
  problem: string;
  stack: string[];
  highlights: string[];
  image?: string;
  demo?: string;
  github?: string;
  status?: string;
  featured?: boolean;
};

export const socials = {
  github: 'https://github.com/Abdelra7manZayed',
  linkedin: 'https://linkedin.com/in/abdelrahman-gamal-zayed',
  email: 'mailto:abdelrahman.gamal.zayed@gmail.com',
  emailText: 'abdelrahman.gamal.zayed@gmail.com',
  phone: 'tel:+201552519691',
  phoneText: '+20 155 251 9691',
  whatsappUsername: '@abdelrahman____zayed',
};

export const projects: Project[] = [
  {
    name: 'Multilingual Fake News Classifier', category: 'NLP', featured: true,
    description: 'Arabic/English NLP classification system for identifying misleading news through preprocessing, text representation and supervised learning.',
    problem: 'News text needs language-aware preprocessing and robust feature representations before classification can be reliable.',
    stack: ['Python', 'NLP', 'TF-IDF', 'CountVectorizer', 'Scikit-learn'],
    highlights: ['Arabic + English text', 'Text preprocessing', 'Feature extraction', 'Classification pipeline'],
    image: '/assets/nlp-cover.jpg', status: 'NLP case study',
  },
  {
    name: 'Solar Power Forecasting', category: 'Research / ML', featured: true,
    description: 'Research project using a hybrid Extreme Learning Machine + Improved Harris Hawks Optimization approach for solar power forecasting.',
    problem: 'Solar generation changes with environmental conditions, so accurate forecasting can support better planning and decision-making.',
    stack: ['Python', 'ELM', 'IHO', 'CatBoost', 'XGBoost', 'Transformer'],
    highlights: ['Hybrid optimization', 'Model benchmarking', 'R² 0.993', 'RMSE 0.167', 'MAPE 3.75%'],
    image: '/assets/research-cover.jpg', status: 'Research paper under review',
  },
  {
    name: 'GuardianEye', category: 'Computer Vision', featured: true,
    description: 'YOLO-based workplace safety monitoring that detects workers and checks required protective equipment.',
    problem: 'Manual safety checks are repetitive and difficult to monitor continuously.',
    stack: ['Python', 'YOLO', 'OpenCV', 'Computer Vision'],
    highlights: ['Object detection', 'Safety compliance checks', 'Real-time inference workflow'],
    image: '/assets/thumbs/guardian.jpg', demo: '/assets/videos/guardian.mp4', github: 'https://github.com/Abdelra7manZayed/GuardianEye',
  },
  {
    name: 'RAG Document Assistant', category: 'GenAI / RAG',
    description: 'Grounded document Q&A system designed to answer from supplied knowledge and expose source context.',
    problem: 'Users need answers from documents without relying on unsupported model memory.',
    stack: ['FastAPI', 'Streamlit', 'ChromaDB', 'Ollama', 'RAG'],
    highlights: ['Document retrieval', 'Grounded answers', 'Source-aware responses', 'API + UI architecture'],
    image: '/assets/thumbs/rag.jpg', demo: '/assets/videos/rag.webm', github: 'https://github.com/Abdelra7manZayed/Rag-Document-Assistant',
  },
  {
    name: 'Smart Diabetes Risk Predictor', category: 'Machine Learning',
    description: 'Machine-learning prediction dashboard that turns patient features into a clear risk assessment workflow.',
    problem: 'Raw health features are difficult to interpret without a structured prediction and visualization layer.',
    stack: ['Python', 'Scikit-learn', 'Pandas', 'Streamlit'],
    highlights: ['Data preprocessing', 'Model prediction', 'Interactive dashboard', 'Visual analytics'],
    image: '/assets/thumbs/diabetes.jpg', demo: '/assets/videos/diabetes.mp4', github: 'https://github.com/Abdelra7manZayed/Smart-diabetes-risk-predictor-',
  },
  {
    name: 'Facial Emotion Recognition', category: 'Deep Learning',
    description: 'Seven-class facial emotion recognition system built with TensorFlow/Keras and computer vision preprocessing.',
    problem: 'Facial expressions vary across subjects and image conditions, requiring robust visual feature learning.',
    stack: ['TensorFlow', 'Keras', 'CNN', 'OpenCV', 'Deep Learning'],
    highlights: ['7 emotion classes', 'CNN pipeline', 'Image preprocessing', 'Model evaluation'],
    image: '/assets/thumbs/facial.jpg', demo: '/assets/videos/facial.mp4',
  },
  {
    name: 'Heart Disease Prediction', category: 'Machine Learning',
    description: 'End-to-end ML workflow covering preprocessing, dimensionality reduction, feature selection and prediction.',
    problem: 'Clinical datasets can contain correlated and noisy features that affect model reliability.',
    stack: ['Python', 'Scikit-learn', 'PCA', 'Feature Selection'],
    highlights: ['Data preprocessing', 'PCA', 'Feature selection', 'Supervised learning'],
    image: '/assets/thumbs/heart_.jpg', demo: '/assets/videos/heart .mp4', github: 'https://github.com/Abdelra7manZayed/Heart-Disease-Prediction-nti-cv',
  },
  {
    name: 'DSP Audio Equalizer', category: 'Applied AI / DSP',
    description: 'Interactive Streamlit audio equalizer exploring RBJ parametric EQ alongside FFT and FIR/IIR processing.',
    problem: 'Audio filtering is easier to understand when signal transformations can be inspected interactively.',
    stack: ['Python', 'Streamlit', 'FFT', 'FIR', 'IIR', 'RBJ'],
    highlights: ['Parametric EQ', 'Frequency-domain analysis', 'Interactive controls', 'Filter comparison'],
    image: '/assets/thumbs/dsp.jpg', demo: '/assets/videos/dsp.webm', github: 'https://github.com/Abdelra7manZayed/dsp-audio-equalizer-streamlit',
  },
  {
    name: 'Cybersecurity Risk Advisor', category: 'Expert Systems',
    description: 'Rule-based expert system that translates security inputs into structured risk guidance.',
    problem: 'Security assessments benefit from consistent reasoning over a defined set of risk rules.',
    stack: ['Python', 'Expert Systems', 'Rule Engine'],
    highlights: ['Knowledge-based reasoning', 'Rule evaluation', 'Risk guidance'],
    image: '/assets/thumbs/cyber.jpg', demo: '/assets/videos/cyber.webm', github: 'https://github.com/Abdelra7manZayed/Cybersecurity-Risk-Advisor-Expert-System',
  },
  {
    name: 'OnTheNinu-Core', category: 'Backend / Systems',
    description: 'FastAPI-based supermarket operating system focused on structured backend workflows and business logic.',
    problem: 'Retail operations require a clean backend layer for managing core business processes.',
    stack: ['Python', 'FastAPI', 'Backend', 'Systems'],
    highlights: ['API-first design', 'Business logic', 'Structured backend'],
    image: '/assets/thumbs/supermarket.jpg', demo: '/assets/videos/supermarket.webm', github: 'https://github.com/Abdelra7manZayed/OnTheNinu-Core',
  },
  {
    name: 'Surface Crack Detection', category: 'Deep Learning',
    description: 'Comparative deep-learning project exploring neural architectures for visual crack detection.',
    problem: 'Infrastructure inspection benefits from automated visual detection of surface defects.',
    stack: ['Python', 'TensorFlow', 'CNN', 'LSTM', 'FFNN'],
    highlights: ['Architecture comparison', 'Visual defect detection', 'Model evaluation'],
    image: '/assets/thumbs/AM.jpeg',
  },
];

export const certificates = [
  { title: 'Computer Vision', issuer: 'National Telecommunication Institute (NTI)', thumb: '/assets/cert_thumbs/NTI_computer_vision.jpg', file: '/assets/certificates/NTI__computer_vision.pdf', date: 'August 2026' },
  { title: 'Machine Learning', issuer: 'National Telecommunication Institute (NTI)', thumb: '/assets/cert_thumbs/NTI_Machine_learning.jpg', file: '/assets/certificates/NTI__Machine_learning.pdf', date: 'July 2025' },
  { title: 'Deep Learning Training', issuer: 'Egyptian Engineers Syndicate', thumb: '/assets/cert_thumbs/Egyptian_Engineers_Syndicate_Deep_learning.jpg', file: '/assets/certificates/Egyptian_Engineers_Syndicate__Deep_learning.pdf', date: 'September 2025' },
  { title: 'AI & ML Trainee', issuer: 'Sprints — Microsoft Camp', thumb: '/assets/cert_thumbs/Sprints__Microsoft_camp_Ai,_Ml.jpg', file: '/assets/certificates/Sprints___Microsoft_camp_Ai_Ml.pdf', date: 'June 2025' },
  { title: 'Deep Learning', issuer: 'NVIDIA', thumb: '/assets/cert_thumbs/Nvidia_deep_learning.jpg', file: '/assets/certificates/Nvidia__deep_learning.pdf' },
  { title: 'Data Analysis', issuer: 'MCIT', thumb: '/assets/cert_thumbs/Mcit_data_analysis.jpg', file: '/assets/certificates/Mcit__data_analysis.pdf' },
  { title: 'AI Tech', issuer: 'IEEE', thumb: '/assets/cert_thumbs/IEEE_Ai_Tech.jpg', file: '/assets/certificates/IEEE__Ai_Tech.pdf' },
  { title: 'IEEE Competition', issuer: 'IEEE', thumb: '/assets/cert_thumbs/IEEE_IEEE_competition.jpg', file: '/assets/certificates/IEEE__IEEE_competition.pdf' },
  { title: 'Create the Crowd', issuer: 'Egyptian Youth Entity (EYE)', thumb: '/assets/cert_thumbs/EYE_create_the_crowd.jpg', file: '/assets/certificates/EYE__create_the_crowd.pdf' },
];

export const experience = [
  { date: 'Jul 2026 — Present', role: 'Agentic AI Trainee', org: 'Digital Egypt Pioneers Initiative (DEPI)', detail: 'Hands-on training focused on agentic AI and modern AI application development.' },
  { date: 'Jul 2026 — Aug 2026', role: 'Applied AI Trainee', org: 'Information Technology Institute (ITI)', detail: 'Applied AI work across NLP, Computer Vision, YOLO, LLMs and RAG.' },
  { date: 'Jul 2026 — Aug 2026', role: 'Computer Vision Intern', org: 'National Telecommunication Institute (NTI)', detail: 'Computer vision and deep learning training covering CNNs, OpenCV, face detection, YOLO and model optimization.' },
  { date: 'Sep 2025', role: 'Deep Learning Trainee', org: 'Egyptian Engineers Syndicate', detail: 'Focused training in deep learning fundamentals and practical model development.' },
  { date: 'Jul 2025', role: 'Machine Learning Intern', org: 'National Telecommunication Institute (NTI)', detail: 'Machine learning training with practical model-building and evaluation.' },
  { date: 'Apr 2025 — Jun 2025', role: 'AI & ML Trainee', org: 'Sprints — SprintUp', detail: 'Training focused on AI/ML foundations and practical project development.' },
];

export const involvement = [
  { role: 'AI Head', org: 'Microsoft Students Club — Suez Canal University', detail: 'Technical leadership and AI-focused student activities.' },
  { role: 'Volunteer', org: 'Egyptian Youth Entity (EYE)', detail: 'Volunteer contribution through the organization’s community activities.' },
  { role: 'Member', org: 'IEEE Student Club', detail: 'Student technical community involvement.' },
  { role: 'Member', org: 'Students for Egypt', detail: 'Student community involvement.' },
];

export const skills = {
  'Languages & Engineering': ['Python', 'C', 'C++', 'FastAPI', 'Streamlit', 'Git', 'GitHub'],
  'Machine Learning': ['Scikit-learn', 'Pandas', 'NumPy', 'XGBoost', 'Random Forest', 'Logistic Regression', 'KNN', 'SVM', 'LightGBM'],
  'Deep Learning': ['TensorFlow', 'Keras', 'PyTorch', 'CNN', 'LSTM', 'BiLSTM', 'EfficientNet', 'MobileNet', 'ResNet', 'VGG'],
  'Computer Vision': ['OpenCV', 'YOLOv5', 'YOLOv8', 'YOLOv11', 'Object Detection', 'Face Recognition', 'Quantization'],
  'NLP & GenAI': ['TF-IDF', 'CountVectorizer', 'Transformers', 'BERT / DistilBERT', 'LangChain', 'LangGraph', 'RAG', 'Hugging Face', 'FAISS', 'Chroma', 'Ollama', 'AutoGen'],
};
