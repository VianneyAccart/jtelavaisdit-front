# Variables
DOCKER_COMPOSE = docker compose

# Targets
.PHONY: up-dev down-dev up-staging down-staging up-prod down-prod logs

# Start the frontend container in development mode
up-dev:
	@echo "Stopping and removing dev container"
	$(DOCKER_COMPOSE) stop jtelavaisdit-front-dev
	$(DOCKER_COMPOSE) rm -f jtelavaisdit-front-dev
	@echo "Building/rebuilding Docker images and starting Docker Compose services..."
	$(DOCKER_COMPOSE) up --build jtelavaisdit-front-dev

down-dev:
	@echo "Stopping dev container"
	$(DOCKER_COMPOSE) stop jtelavaisdit-front-dev
	$(DOCKER_COMPOSE) rm -f jtelavaisdit-front-dev

# Start the frontend container in staging mode
up-staging:
	@echo "Stopping and removing staging container"
	$(DOCKER_COMPOSE) stop jtelavaisdit-front-staging
	$(DOCKER_COMPOSE) rm -f jtelavaisdit-front-staging
	@echo "Building/rebuilding Docker images and starting Docker Compose services..."
	$(DOCKER_COMPOSE) up --build -d jtelavaisdit-front-staging

down-staging:
	@echo "Stopping staging container"
	$(DOCKER_COMPOSE) stop jtelavaisdit-front-staging
	$(DOCKER_COMPOSE) rm -f jtelavaisdit-front-staging

# Start the frontend container in production mode
up-prod:
	@echo "Stopping and removing prod container"
	$(DOCKER_COMPOSE) stop jtelavaisdit-front-prod
	$(DOCKER_COMPOSE) rm -f jtelavaisdit-front-prod
	@echo "Building/rebuilding Docker images and starting Docker Compose services..."
	$(DOCKER_COMPOSE) up --build -d jtelavaisdit-front-prod

down-prod:
	@echo "Stopping prod container"
	$(DOCKER_COMPOSE) stop jtelavaisdit-front-prod
	$(DOCKER_COMPOSE) rm -f jtelavaisdit-front-prod

# View logs for the frontend container
logs:
	@echo "Showing logs for all services..."
	$(DOCKER_COMPOSE) logs -f
