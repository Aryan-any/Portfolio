# Stage 1: Build
FROM node:20-alpine as build

WORKDIR /app

# Install dependencies (cache optimized)
COPY package.json package-lock.json ./
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve
FROM nginx:alpine

# Copy build output from Stage 1
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom Nginx config
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
