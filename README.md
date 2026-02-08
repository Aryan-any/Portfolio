# 🚀 Portfolio Website

A high-performance, interactive 3D portfolio website built with React, Three.js, and GSAP.

## 🌟 Features
- **3D Interaction**: Immersive 3D elements powered by Three.js.
- **Smooth Animations**: High-performance animations using GSAP and Lenis.
- **Dynamic Content**: All text and data are managed via a single configuration file.
- **Responsive Design**: Fully optimized for all devices.

## 🛠️ How to Edit Content
All the text, projects, and skills on the website are managed in **one file**:
👉 `src/config.ts`

### 1. Personal Details (Bio, Links)
Edit the `personalDetails` object:
```typescript
personalDetails: {
    name: "YOUR NAME", // Top left logo
    role: "YOUR ROLE", // Hero section text
    bio: {
        short: "Your short intro...",
        long: "Your detailed bio..."
    },
    email: "your@email.com",
    // ...
}
```

### 2. Experience & History
Edit the `experiences` array. You can add as many as you want.

### 3. Projects
Edit the `projects` array.
*   **Images**: Put your project screenshots in the `public/images/` folder and reference them like `/images/my-project.png`.

### 4. Skills & Tech Stack
Edit the `skills` object.
*   **Icons**: We use URLs from [DevIcon](https://devicon.dev/). Just copy the SVG URL for any new tool you want to add.

## 🎨 Design Credits
Original Design Concept by: **[Insert Designer Name Here]**
*   Portfolio: [Link to Portfolio]
*   *Please respect the original designer's work by keeping this credit.*

## 🚀 Deployment
This project is configured for **AWS S3 + CloudFront**.
See [AWS_DEPLOYMENT.md](./AWS_DEPLOYMENT.md) for full instructions.

## 💻 Local Development
```bash
npm install
npm run dev
```
