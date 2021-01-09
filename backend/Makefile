# docker variables
DOCKER_START = docker-compose up -d
DOCKER_STOP = docker-compose stop

# Setup the project
setup:
	cp .env.example .env
	npm install

# Start the project
start:
	${DOCKER_START}
	npm run start:dev

# Stop docker containers
stop:
	${DOCKER_STOP}

# Start tests
tests:
	npm run test:unit
	${DOCKER_START}
	npm run test:e2e
	${DOCKER_STOP}
