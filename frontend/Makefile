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
# Setup frontend
setup:
	yarn

# Start frontend
start:
	yarn start --detached

# Run frontend tests
tests:
	yarn test:unit
	yarn test:e2e
	yarn lint
