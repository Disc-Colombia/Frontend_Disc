FROM node:20 as build

WORKDIR /frontendapp

COPY package*.json ./
COPY tsconfig*.json ./
COPY vite.config.ts ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY --from=build /frontendapp/dist /usr/share/nginx/html

COPY ./scripts/docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

RUN rm -f /usr/share/nginx/html/env-config.js

EXPOSE 80

CMD ["/docker-entrypoint.sh"]
