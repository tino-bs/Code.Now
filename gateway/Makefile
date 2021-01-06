# Setup the project
setup:
	cp .env.example .env
	npm install

# Start the project
start:
	docker-compose up -d
	npm run start:dev

# Stop docker containers
stop:
	docker-compose stop

# Start tests
tests:
	npm run test:unit
	docker-compose up -d
	npm run test:e2e
	docker-compose stop
