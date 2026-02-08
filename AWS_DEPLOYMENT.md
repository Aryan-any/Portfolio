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
*   `AWS_S3_BUCKET`: 'aryan-website-portfolio'

*   `AWS_DISTRIBUTION_ID` (for cache invalidation): E3AHV232FCDU3Y

### 5. How to Get Your Secrets (Step-by-Step for New Users)

Since you are new to AWS, here is exactly how to get these 4 values:

#### A. `AWS_S3_BUCKET`
*   This is simply the **name** you gave your bucket in Step 2 (e.g., `aryan-portfolio-site`).

#### B. `AWS_DISTRIBUTION_ID`
1.  Go to **AWS Console > CloudFront**.
2.  Click on the distribution you created in Step 3.
3.  Copy the **ID** from the top left (it looks like `E1XXXXXX`).

#### C. `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`
You need to create a "Service Account" (IAM User) for GitHub to log in as.

1.  Go to **AWS Console > IAM** (Identity and Access Management).
2.  Click **Users** > **Create user**.
3.  **User name**: `github-deployer`. Click Next.
4.  **Permissions options**: Select **"Attach policies directly"**.
5.  Search for and check these two policies:
    *   `AmazonS3FullAccess`
    *   `CloudFrontFullAccess`
    *(Note: For a production enterprise app, you'd want tighter security, but this is standard for personal projects).*
6.  Click **Next** > **Create user**.
7.  Click on the user you just created (`github-deployer`).
8.  Go to the **Security credentials** tab.
9.  Scroll down to **Access keys** and click **Create access key**.
10. Select **Command Line Interface (CLI)** > I understand... > Next.
11. Click **Create access key**.
12. **Download the .csv file** or copy the keys immediately.
    *   **Access key** = `AWS_ACCESS_KEY_ID`
    *   **Secret access key** = `AWS_SECRET_ACCESS_KEY`

Then create a `.github/workflows/deploy.yml` (I can create this for you if requested).
