# url-shortener
r0s.io URL shortener

# Bring up db
```bash
docker-compose up # --build if first time
docker exec -ti url-db mongo # connect to db
```

# Bring up server
```bash
cd services/server
yarn run dev
```

# Bring up client
```bash
cd services/client
yarn run start
```

# API
```bash
# Create a new shorten url
curl localhost:8000/s -H "Content-Type: application/json" -XPOST --data '{"originalUrl":"https://www.espn.com","shortBaseUrl":"https://r0s.io"}'

# Access shortened url
curl localhost:8000/s/{urlCode from previouse response}
```