# ---------
# Variables
# ---------
# Make variables
MAKE_DOLLAR := $$

# Project variables
PROJECT_PREFIX = oaq

# --------------------
# Application commands
# --------------------
# Setup the whole project
setup:
	@echo "\n"
	@echo Run Setup
	@echo ---------
	yarn
	cd backend && $(MAKE) setup
	cd frontend && $(MAKE) setup
	@echo ---------
	@echo End Setup
	@echo "\n"

# Start the whole project
start:
	@echo "\n"
	@echo Start Project
	@echo -------------
	cd backend && $(MAKE) start
	yarn pm2:start
	@echo -------------
	@echo "\n"

# Stop the whole project
stop:
	@echo "\n"
	@echo Stop Project
	@echo ------------
	yarn pm2:stop
	cd backend && $(MAKE) stop
	@echo ------------
	@echo "\n"

# Current running status of the whole project
status:
	@echo "\n"
	@echo Current Running Status
	@echo ----------------------
	cd backend && $(MAKE) status
	yarn pm2:status
	@echo ----------------------
	@echo "\n"

# Run tests for the whole project
tests:
	@echo "\n"
	@echo Run Tests
	@echo ---------
	cd backend && $(MAKE) tests
	cd frontend && $(MAKE) tests
	@echo ---------
	@echo End Tests
	@echo "\n"
