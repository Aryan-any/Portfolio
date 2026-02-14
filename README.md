# ⚡ 3D Interactive Portfolio

> "Bridging the gap between theoretical research and practical engineering."

A high-performance, immersive 3D portfolio website built with modern web technologies. This project showcases my work as an AI Researcher through interactive 3D elements, smooth scroll animations, and a responsive design system.

## 🌟 Features

*   **3D Experience**: Powered by **Three.js** (`@react-three/fiber`) for immersive visuals.
*   **High-Perf Animations**: **GSAP** and **Lenis** for buttery smooth scrolling and interactions.
*   **Config-Driven**: Entire content (bio, skills, projects) managed via a single `config.ts` file.
*   **Modern Stack**: Built with **React 18**, **TypeScript**, and **Vite**.
*   **Dockerized**: Fully containerized with Nginx for consistent deployment.
*   **CI/CD**: Automated deployment pipeline to AWS S3 & CloudFront via GitHub Actions.

---

## 🛠️ Tech Stack

This project is built on a solid foundation of cutting-edge tools:

*   **Core**: React, TypeScript, Vite
*   **3D & Graphics**: Three.js, React Three Fiber, React Three Drei
*   **Animation**: GSAP (GreenSock), Lenis Scroll, Framer Motion
*   **Styling**: Tailwind CSS, PostCSS
*   **Deployment**: Docker, AWS (S3 + CloudFront), GitHub Actions

---

## 🎨 Inspiration & Credits

This project was built by **Aryan Mishra**, taking heavy design and code inspiration from the open-source community.

*   **Development**: Re-engineered and customized by Aryan Mishra to include a dynamic configuration system (`config.ts`) and scalable AWS infrastructure.

*I believe in giving credit where it is due. If you are the original author of the reference design, please feel free to contact me!*

---

## 🚀 Getting Started

### Prerequisites

*   Node.js (v18 or higher)
*   npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Aryan-any/Portfolio.git
    cd Portfolio
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Run Development Server**
    ```bash
    npm run dev
    ```
    Open `http://localhost:5173` to view it in the browser.

---

## 📦 Deployment

### Docker (Local Production)
To test the production build locally using Docker:

```bash
docker-compose up --build
```
This serves the app on `http://localhost:8080`.

### AWS CloudFront
The project is set up to deploy to AWS automatically via GitHub Actions.

---

## 📄 License

This project is open source. [Please feel free to use it for personal learning.]
