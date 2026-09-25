FROM node:20-alpine AS builder
WORKDIR /app

#Install the dependencies first (enables layer caching
COPY package.json package-lock.json ./
RUN npm ci 

#Copy code and build static assets
COPY . .
RUN npm run build

#Production stage
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

#clear default static files and Copy compiled build
RUN rm -rf ./*
COPY --from=builder /app/dist .

#Copy custom Nginx configuration for SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]