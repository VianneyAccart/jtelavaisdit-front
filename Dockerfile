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

# Build Stage
FROM base AS build
COPY . .
RUN npm run build

# Production Stage
FROM nginx:alpine AS prod
COPY --from=build /app/dist/jtelavaisdit-front/browser /usr/share/nginx/html
EXPOSE 80