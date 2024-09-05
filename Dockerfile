FROM node:20.9-alpine AS builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:20.9-alpine

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/package*.json ./

RUN npm install --only=production

COPY --from=builder /usr/src/app/dist ./dist

ENV MONGO_DB_HOST=localhost \
    MONGO_DB_PORT=27017 \
    MONGO_DB_DATABASE=data-client \
    PORT=3001 \
    REDIS_HOST=localhost \
    REDIS_PORT=6379 \
    CACHE_TTL=20

EXPOSE 3001

CMD ["node", "dist/main"]