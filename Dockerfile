# Base image for both environments
FROM node:22.12.0-slim AS base
WORKDIR /app
COPY package*.json ./

# Install dependencies
RUN npm install

# Development Stage (hot reload)
FROM base AS dev
COPY . .
CMD ["npm", "run", "start"]

# Staging Stage
FROM base AS staging
COPY . .
RUN npm run build:staging

FROM nginx:alpine AS nginx-staging
COPY --from=staging /app/dist/jtelavaisdit-front/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

# Production Stage
FROM base AS production
COPY . .
RUN npm run build

FROM nginx:alpine AS nginx-production
COPY --from=production /app/dist/jtelavaisdit-front/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80