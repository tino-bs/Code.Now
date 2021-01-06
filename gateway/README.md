<img src="https://nestjs.com/img/logo_text.svg" align="right" width="200" alt="Nest Logo" />

# Gateway
> API gateway, based on [Nest](https://github.com/nestjs/nest).

## Setup
Make sure to have [Node.js 12](https://nodejs.org/en/download/) (or later) installed

### Environment variables
copy the file `.env.example` to `.env`

### Install Dependencies
```bash
npm install
```

### Optional: Local environment overrides
copy the file `.env.local.example` to `.env.local` and change your desired variables in the copied file

### Run The App
```bash
# development mode
npm run start:dev

# production mode
npm run start:prod
```

## Tests
```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```

## Postgres DB

### Local connection to the database
```bash
# start docker container, if it is not already running
docker-compose up -d
```

#### Connection via pgAdmin
* visit http://localhost:8080
* enter `{POSTGRES_USER}` and `{POSTGRES_PASSWORD}`

*See the [pgAdmin docs](https://www.pgadmin.org) for further information*

#### Connection via bash
```bash
docker-compose run postgres bash
```
```bash
psql --host=postgres --username={POSTGRES_USER} --dbname={POSTGRES_DB}
```

enter `{POSTGRES_PASSWORD}`
  
*For detailed explanation on how things work, run `help`
or check out the [Postgres docs](https://www.postgresql.org/docs).*

run `exit` to exit

## Nest
For detailed explanation on how things work, run 
```bash
npm run help 
```
or check out the [Nest docs](https://docs.nestjs.com).
