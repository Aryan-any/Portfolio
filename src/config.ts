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
        role: "AI Engineer & Researcher",
        education: "IIT Roorkee",
        location: "New Delhi, India",
        email: "mishraaryanm@gmail.com",
        github: "https://github.com/Aryan-any",
        linkedin: "https://www.linkedin.com/in/aryan-mishra-177527218/",
        // twitter: "https://twitter.com", // Uncomment when active
        // instagram: "https://instagram.com", // Uncomment when active
        bio: {
            short: "Bridging the gap between theoretical research and practical engineering.",
            long: "I am a final year Electronics and Communication Engineering student at IIT Roorkee, driven by a relentless curiosity for Artificial Intelligence. I specialize in building software that thinks—from fine-tuning Multi-Modal LLMs to deploying defense-grade Computer Vision systems."
        },
        resume: "/resume.pdf"
    },

    experiences: [
        {
            company: "IIT Roorkee",
            position: "Research Intern",
            period: "May 2025 - July 2025",
            description: "Built a defence-grade YOLOv8 pipeline using Python, PyTorch, and OpenCV. Scaled dataset to 1500+ images using super-resolution, achieving 12% boost in detection. Fine-tuned models for aircraft, runways, and hangars with terrain-robust inference.",
        },
        {
            company: "Paragon IT Services",
            position: "Analyst Intern",
            period: "Nov 2024 - Jan 2025",
            description: "Automated complex data workflows using Python, reducing processing time by 20%. Built interactive dashboards with Plotly and Dash.",
        },
        {
            company: "NCC, IIT Roorkee",
            position: "Deputy General Secretary",
            period: "March 2023 - April 2025",
            description: "Coordinated over 420 cadets and executed 15+ key initiatives. Headed a team of 57 individuals under 6 verticals.",
        },
        {
            company: "Hostel Council, IIT Roorkee",
            position: "Chief Developer",
            period: "Aug 2023 - June 2024",
            description: "Led the design and development of the Married Hostel App, handling full-stack implementation and launch.",
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
                "Hierarchical Multi-Agent Orchestration",
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
            description: "Pushing boundaries of Intelligent Systems",
            details: "Bridging the gap between theoretical research and practical engineering. From fine-tuning Multi-Modal LLMs to deploying defense-grade Computer Vision systems.",
            tools: ["Python", "PyTorch", "TensorFlow", "OpenCV", "LangChain", "LLMs", "RAG", "GenAI"]
        },
        design: {
            title: "FULL-STACK ENGINEER",
            description: "Scalable & Modern Web Systems",
            details: "Building robust, production-ready applications. EXPERTISE in modern web stacks, cloud infrastructure, and system design.",
            tools: ["Next.js", "React", "TypeScript", "FastAPI", "Docker", "SQL", "Git", "AWS"]
        },
        techStack: [
            [
                { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", url: "https://python.org" },
                { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
                { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", url: "https://typescriptlang.org" },
                { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", url: "https://en.cppreference.com/w/c" },
                { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", url: "https://isocpp.org" },
                { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg", url: "https://kotlinlang.org" },
                { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
                { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
                { name: "Bash", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg", url: "https://www.gnu.org/software/bash/" },
                { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", url: "https://react.dev" },
                { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", url: "https://nextjs.org" },
                { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", url: "https://getbootstrap.com" },
            ],
            [
                { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", url: "https://nodejs.org" },
                { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", url: "https://djangoproject.com" },
                { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", url: "https://flask.palletsprojects.com" },
                { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", url: "https://fastapi.tiangolo.com" },
                { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", url: "https://tensorflow.org" },
                { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", url: "https://pytorch.org" },
                { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg", url: "https://scikit-learn.org" },
                { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg", url: "https://opencv.org" },
                { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", url: "https://numpy.org" },
                { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", url: "https://tailwindcss.com" },
            ],
            [
                { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", url: "https://pandas.pydata.org" },
                { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", url: "https://mysql.com" },
                { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", url: "https://postgresql.org" },
                { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", url: "https://mongodb.com" },
                { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", url: "https://firebase.google.com" },
                { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", url: "https://redis.io" },
                { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", url: "https://docker.com" },
                { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", url: "https://azure.microsoft.com" },
            ],
            [
                { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", url: "https://git-scm.com" },
                { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", url: "https://github.com" },
                { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", url: "https://linux.org" },
                { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", url: "https://aws.amazon.com" },
                { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", url: "https://code.visualstudio.com" },
                { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", url: "https://vercel.com" },
            ],
            [
                { name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg", url: "https://jupyter.org" },
                { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", url: "https://figma.com" },
                { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", url: "https://postman.com" },
                { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg", url: "https://adobe.com/products/photoshop" },
            ],
            [
                { name: "Hugging Face", icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg", url: "https://huggingface.co" },
                { name: "MS Office", icon: "https://img.icons8.com/color/48/microsoft-office-2019.png", url: "https://www.microsoft.com/microsoft-365" },
            ],
        ]
    },
};
