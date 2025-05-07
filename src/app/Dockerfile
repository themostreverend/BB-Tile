# Stage 1: Build the Angular application
FROM node:latest as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Stage 2: Serve the built application using a lightweight web server (e.g., nginx)
FROM nginx:alpine
COPY --from=builder /app/dist/addin-hello-world /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]