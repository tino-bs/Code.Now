# Make variables
MAKE_DOLLAR := $$

# Docker variables
DOCKER_LIST = docker ps
DOCKER_CLEAR = docker rm ${MAKE_DOLLAR}(docker ps -a -q)
DOCKER_BUILD = docker-compose build --no-cache
DOCKER_START = docker-compose up -d --force-recreate --remove-orphans
DOCKER_STOP = docker-compose stop

# Setup backend
setup:
	cp .env.example .env
	npm install

# Start docker
docker-start:
	${DOCKER_BUILD}
	${DOCKER_START}

# Start backend in standalone mode
start-standalone:
	${DOCKER_START}
	npm run start:dev

# Start backend in integrated mode
start-integrated:
	${DOCKER_START}

# Start alias
start: start-integrated:

# Stop docker containers
stop:
	${DOCKER_STOP}
	${DOCKER_CLEAR}

# Current status of backend
status:
	${DOCKER_LIST}

# Run backend tests
tests:
	npm run test:unit
	${DOCKER_START}
	npm run test:e2e
	${DOCKER_STOP}
	${DOCKER_CLEAR}
