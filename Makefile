# Variables
DOCKER_COMPOSE = docker compose

# Targets
.PHONY: up-dev up-staging up-prod down logs

# Start the frontend container in development mode
up-dev:
	@echo "Stopping and removing dev container"
	$(DOCKER_COMPOSE) stop jtelavaisdit-front-dev
	$(DOCKER_COMPOSE) rm -f jtelavaisdit-front-dev
	@echo "Building/rebuilding Docker images and starting Docker Compose services..."
	$(DOCKER_COMPOSE) up --build jtelavaisdit-front-dev

# Start the frontend container in staging mode
up-staging:
	@echo "Stopping and removing staging container"
	$(DOCKER_COMPOSE) stop jtelavaisdit-front-staging
	$(DOCKER_COMPOSE) rm -f jtelavaisdit-front-staging
	@echo "Building/rebuilding Docker images and starting Docker Compose services..."
	$(DOCKER_COMPOSE) up --build -d jtelavaisdit-front-staging

# Start the frontend container in production mode
up-prod:
	@echo "Stopping and removing prod container"
	$(DOCKER_COMPOSE) stop jtelavaisdit-front-prod
	$(DOCKER_COMPOSE) rm -f jtelavaisdit-front-prod
	@echo "Building/rebuilding Docker images and starting Docker Compose services..."
	$(DOCKER_COMPOSE) up --build -d jtelavaisdit-front-prod

# Stop the frontend container and remove orphans
down:
	@echo "Stopping Docker Compose services..."
	$(DOCKER_COMPOSE) down --remove-orphans

# View logs for the frontend container
logs:
	@echo "Showing logs for all services..."
	$(DOCKER_COMPOSE) logs -f
