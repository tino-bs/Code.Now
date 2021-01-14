# ---------
# Variables
# ---------
# Make variables
MAKE_DOLLAR := $$

# Project variables
PROJECT_PREFIX = oaq

# Docker variables
DOCKER_LIST = docker ps -a --filter name=${PROJECT_PREFIX}
DOCKER_CLEAR = docker rm ${MAKE_DOLLAR}(docker ps -qa --filter name=${PROJECT_PREFIX})
DOCKER_BUILD = docker-compose build --no-cache
DOCKER_START = docker-compose up -d --force-recreate --remove-orphans
DOCKER_STOP = docker-compose stop

# -----------
# DB commands
# -----------
# Generate migration
migration-add:
	yarn migration:add

# Run migrations
migration-run:
	yarn migration:run

# Run alias
migration: migration-run

# --------------------
# Application commands
# --------------------
# Setup backend
setup:
	cp .env.example .env
	yarn

# Start docker
docker-start:
	${DOCKER_BUILD}
	${DOCKER_START}

# Start backend in standalone mode
start-standalone:
	${DOCKER_START}
	yarn start:dev

# Start backend in integrated mode
start-integrated:
	${DOCKER_START}

# Start alias
start: start-integrated

# Stop docker containers
stop:
	${DOCKER_STOP}
	${DOCKER_CLEAR}

# Current status of backend
status:
	${DOCKER_LIST}

# Run backend tests
tests:
	yarn test:unit
	${DOCKER_START}
	yarn test:e2e
	${DOCKER_STOP}
	${DOCKER_CLEAR}
