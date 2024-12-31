# Base image for both environments
FROM node:22.12.0-slim AS base
WORKDIR /app
COPY package*.json ./
RUN npm install

# Development Stage (hot reload)
FROM base AS dev
COPY . .
CMD ["npm", "run", "start"]

# Build Stage
FROM base AS build
COPY . .
# Ajout d'un argument pour choisir l'environnement lors du build
ARG CONFIGURATION=production
RUN npm run build:${CONFIGURATION}

# Runtime Stage with nginx
FROM nginx:alpine AS runtime
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/jtelavaisdit-front/browser /usr/share/nginx/html
EXPOSE 80