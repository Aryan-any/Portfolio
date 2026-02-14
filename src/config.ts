interface PersonalDetails {
    name: string;
    role: string;
    education: string;
    location: string;
    email: string;
    github: string;
    linkedin: string;
    twitter?: string;
    instagram?: string;
    bio: {
        short: string;
        long: string;
    };
    resume: string;
}

export const config: {
    personalDetails: PersonalDetails;
    experiences: any[];
    projects: any[];
    skills: any;
} = {
    personalDetails: {
        name: "ARYAN MISHRA",
        role: " Developer",
        education: "IIT Roorkee",
        location: "New Delhi, India",
        email: "mishraaryanm@gmail.com",
        github: "https://github.com/Aryan-any",
        linkedin: "https://www.linkedin.com/in/aryan-mishra-177527218/",
        // twitter: "https://twitter.com", // Uncomment when active
        // instagram: "https://instagram.com", // Uncomment when active
        bio: {
            short: "Building agentic, multimodal AI systems from research to production.",
            long: "I’m Aryan Mishra, a final-year Electronics and Communication Engineering student at IIT Roorkee. I design and build intelligent systems that go beyond models—multi-agent architectures, multimodal LLM pipelines, and production-ready AI applications. From RAG systems and tool-using agents to Dockerized deployments on AWS, I focus on turning cutting-edge AI research into scalable, real-world products."
        },
        resume: "/resume.pdf"
    },

    experiences: [
        {
            company: "IIT Roorkee",
            position: "Research Intern",
            period: "May 2025 - July 2025",
            description: "Built a defense-grade computer vision pipeline using YOLOv8, PyTorch, and OpenCV for aerial surveillance applications. Expanded and enhanced a 1500+ image dataset with super-resolution and augmentation, improving detection accuracy by 12%. Fine-tuned models for aircraft, runways, and hangars, focusing on robust real-world inference and reliable deployment performance.",
        },
        {
            company: "Paragon IT Services",
            position: "Analyst Intern",
            period: "Nov 2024 - Jan 2025",
            description: "Automated data workflows using Python, reducing processing time by 20%. Developed structured validation and reporting systems and built interactive dashboards with Plotly and Dash to support real-time analytics and data-driven decisions.",
        },
        {
            company: "NCC, IIT Roorkee",
            position: "Deputy General Secretary",
            period: "March 2023 - April 2025",
            description: "Led operations for 420+ cadets and executed 15+ major institutional initiatives. Managed a 57-member team across 6 verticals, driving coordination, accountability, and leadership development at scale.",
        },
        {
            company: "Hostel Council, IIT Roorkee",
            position: "Chief Developer",
            period: "Aug 2023 - June 2024",
            description: "Led the end-to-end development of the Married Hostel App, handling system design, backend architecture, API integration, and deployment. Built a scalable, maintainable application focused on structured data management and smooth user experience.",
        }
    ],

    projects: [
        {
            id: 1,
            title: "ValuAI",
            category: "GenAI • Multi-Agent System",
            technologies: "Python, PyTorch, OpenAI GPT-4o, ChromaDB, FastAPI",
            image: "/images/valuai.png",
            description: "An enterprise-grade, autonomous multi-agent system designed to identify arbitrage opportunities in e-commerce markets. It employs a hybrid intelligence architecture that synergizes Generative AI (LLMs), classical Deep Learning (ResNets), and Semantic Search (RAG).",
            features: [
                "Autonomous Multi-Agent Orchestration",
                "Real-time DealNews RSS Scraping",
                "RAG with Vector Search",
                "Custom ResNet for Price Prediction"
            ],
            link: "https://github.com/Aryan-any/ValuAI",
        },
        {
            id: 2,
            title: "MediNotes",
            category: "Healthcare AI • SaaS",
            technologies: "Next.js, TypeScript, FastAPI, OpenAI, Clerk",
            image: "/images/medinotes.png",
            description: "A modern healthcare application that converts raw consultation notes into structured medical summaries. Designed for clinicians to automate documentation using Pydantic-driven strict validation.",
            features: [
                "Structured Medical Summaries",
                "Patient-Friendly Email Drafts",
                "Strict Pydantic Validation",
                "HIPAA-compliant Architecture"
            ],
            link: "https://github.com/Aryan-any/MediNotes",
        },
        {
            id: 3,
            title: "Neural Style Transfer",
            category: "Deep Learning • CV",
            technologies: "PyTorch, TransformerNet, VGG16, COCO Dataset",
            image: "/images/styletransfer.png",
            description: "A fast Neural Style Transfer system using TransformerNet architecture to apply artistic styles to images in real time.",
            features: [
                "Real-time Style Inference",
                "Custom TransformerNet Architecture",
                "Perceptual Loss Optimization"
            ],
            link: "https://github.com/Aryan-any/Neural-Style-Transfer",
        },
        {
            id: 4,
            title: "Expert Knowledge Worker",
            category: "RAG • Enterprise AI",
            technologies: "LangChain, Ollama, Gradio, OpenAI",
            image: "/images/expertworker.png",
            description: "An AI-powered knowledge assistant designed to act as an expert on all company-related matters. Uses RAG to search internal documents.",
            features: [
                "Local LLM Support (Ollama)",
                "Hybrid Search (Keyword + Vector)",
                "Document Ingestion Pipeline"
            ],
            link: "https://github.com/Aryan-any/Expert-Knowledge-Worker",
        }
    ],

    skills: {
        develop: {
            title: "AI ENGINEER",
            description: "Building Scalable, Intelligent Systems",
            details: "Designing AI that moves beyond notebooks. Specializing in Multi-Agent Systems, RAG pipelines, and high-performance Computer Vision applications closer to production.",
            tools: ["Python", "PyTorch", "OpenAI", "LangChain", "Ollama", "HuggingFace", "CUDA"]
        },
        data: {
            title: "DATA ANALYST",
            description: "Turning Raw Data into Actionable Intelligence",
            details: "Architecting end-to-end data pipelines for critical insights. Expertise in scraping unstructured data, statistical modeling, and building interactive dashboards for real-time decision-making.",
            tools: ["Pandas", "NumPy", "SQL", "Plotly", "Scikit-learn", "Tableau"]
        },
        design: {
            title: "FULL-STACK ENGINEER",
            description: "Architecting Modern Web Ecosystems",
            details: "Building robust, cloud-native web applications. Expertise in frontend performance optimization, microservices architecture, and secure, containerized deployments.",
            tools: ["Next.js", "TypeScript", "FastAPI", "Docker", "AWS", "PostgreSQL", "Redis", "Figma"]
        },
        techStack: [
            // Row 1: The Heavy Hitters (12 items) - AI, Core, & Compute
            [
                { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", url: "https://python.org" },
                { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", url: "https://pytorch.org" },
                { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", url: "https://tensorflow.org" },
                { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg", url: "https://opencv.org" },
                { name: "LangChain", icon: "https://raw.githubusercontent.com/langchain-ai/langchain/master/docs/static/img/langchain_logo.png", url: "https://langchain.com" },
                { name: "Hugging Face", icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg", url: "https://huggingface.co" },
                { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg", url: "https://scikit-learn.org" },
                { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", url: "https://numpy.org" },
                { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", url: "https://pandas.pydata.org" },
                { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", url: "https://isocpp.org" },
                { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", url: "https://linux.org" },
                { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", url: "https://docker.com" },
            ],
            // Row 2: Production & Backend (10 items)
            [
                { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", url: "https://fastapi.tiangolo.com" },
                { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", url: "https://djangoproject.com" },
                { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", url: "https://flask.palletsprojects.com" },
                { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", url: "https://aws.amazon.com" },
                { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", url: "https://git-scm.com" },
                { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", url: "https://github.com" },
                { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", url: "https://postgresql.org" },
                { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", url: "https://mongodb.com" },
                { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", url: "https://redis.io" },
                { name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg", url: "https://jupyter.org" },
            ],
            // Row 3: Web & Frontend (8 items)
            [
                { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", url: "https://typescriptlang.org" },
                { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", url: "https://react.dev" },
                { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", url: "https://nextjs.org" },
                { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", url: "https://nodejs.org" },
                { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", url: "https://tailwindcss.com" },
                { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
                { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
                { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
            ],
            // Row 4: Tools & Environment (6 items)
            [
                { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", url: "https://code.visualstudio.com" },
                { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", url: "https://postman.com" },
                { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", url: "https://figma.com" },
                { name: "Bash", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg", url: "https://www.gnu.org/software/bash/" },
                { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", url: "https://vercel.com" },
                { name: "Three.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg", url: "https://threejs.org" },
            ],
            // Row 5: Foundations (4 items)
            [
                // { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", url: "https://en.cppreference.com/w/c" },
                // { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg", url: "https://kotlinlang.org" },
                { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", url: "https://mysql.com" },
                { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", url: "https://firebase.google.com" },
                { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", url: "https://azure.microsoft.com" },
                { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg", url: "https://adobe.com/products/photoshop" },
            ],
            // Row 6: The "Secret Sauce" (2 items)
            [
                { name: "OpenAI", icon: "https://img.icons8.com/grey/48/chatgpt.png", url: "https://openai.com" }, // Representing the GenAI Core
                { name: "GSAP", icon: "https://cdn.jsdelivr.net/npm/gsap@3.12.5/all.js", url: "https://gsap.com" }, // The animation engine powering this site
            ]
        ]
    },
};
