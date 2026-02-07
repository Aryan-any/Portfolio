# AWS Deployment Strategy: S3 + CloudFront

This architecture provides a professional, scalable, and low-cost hosting solution for your React application.

## Architecture

1.  **S3 Bucket**: Stores your static files (`dist/` folder).
2.  **CloudFront (CDN)**: Caches your content globally (fast loading everywhere) and provides SSL (HTTPS).
3.  **Route 53**: Manages your domain name (DNS).

## Step-by-Step Setup

### 1. Build the Project
Ensure your `dist/` folder is ready:
```bash
npm run build
```

### 2. S3 Setup (Storage)
1.  Go to **AWS Console > S3**.
2.  Click **Create bucket**.
    *   **Name**: `aryan-portfolio-site` (must be unique).
    *   **Region**: Choose one close to you (e.g., `us-east-1`).
3.  **Uncheck** "Block all public access" (we need CloudFront to access it, or public if hosting directly).
    *   *Professional Tip*: Keep it private and use a CloudFront Origin Access Policy (OAC) for security.
4.  Upload the contents of your `dist/` folder to the bucket root.

### 3. CloudFront Setup (CDN & HTTPS)
1.  Go to **AWS Console > CloudFront**.
2.  Click **Create distribution**.
3.  **Origin Domain**: Select your S3 bucket.
4.  **Viewer Protocol Policy**: Select "Redirect HTTP to HTTPS".
5.  **Default Root Object**: Enter `index.html`.
6.  **Error Pages** (Crucial for React Router):
    *   Create a Custom Error Response.
    *   **HTTP Error Code**: `403` and `404`.
    *   **Customize Error Response**: Yes.
    *   **Response Page Path**: `/index.html`.
    *   **HTTP Response Code**: `200`.
    *   *Why?* This lets React Router handle URLs like `/about` instead of S3 returning a 404.

### 4. Continuous Deployment (GitHub Actions)
To automate this, add these secrets to your GitHub Repo (`Settings > Secrets`):
*   `AWS_ACCESS_KEY_ID`
*   `AWS_SECRET_ACCESS_KEY`
*   `AWS_S3_BUCKET`
*   `AWS_DISTRIBUTION_ID` (for cache invalidation)

Then create a `.github/workflows/deploy.yml` (I can create this for you if requested).
