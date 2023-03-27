# Next.js OpenJira App

The database is needed to run it locally

```
docker-compose up -d
```

MongoDB local connection string:

```
mongodb://localhost:27017/entriesDB
```

## Environment variables

Add the necessary environment variables and rename the **.env.template** to **.env**

## Populate the database with test data (dev env)

To fill the database with test data, you can add data in **@/database/seed-data.ts** and call:

```
http://localhost:3000/api/seed
```
