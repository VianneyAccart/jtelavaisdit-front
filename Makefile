# Variables
DOCKER_COMPOSE = docker compose

# Targets
.PHONY: up-dev up-staging up-prod down logs

# Start the frontend container in development mode
up-dev:
	@echo "Stopping and cleaning up any existing containers..."
	$(DOCKER_COMPOSE) down --remove-orphans
	@echo "Building/rebuilding Docker images and starting Docker Compose services..."
	$(DOCKER_COMPOSE) up --build jtelavaisdit-front-dev

# Start the frontend container in staging mode
up-staging:
	@echo "Pulling latest changes from the remote repository..."
	git fetch --all
	git checkout --force "origin/staging"
	@echo "Stopping and cleaning up any existing containers..."
	$(DOCKER_COMPOSE) down --remove-orphans
	@echo "Building/rebuilding Docker images and starting Docker Compose services..."
	$(DOCKER_COMPOSE) up --build -d jtelavaisdit-front-staging

# Start the frontend container in production mode
up-prod:
	@echo "Stopping and cleaning up any existing containers..."
	$(DOCKER_COMPOSE) down --remove-orphans
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
