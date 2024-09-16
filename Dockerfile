FROM node:20 as build

WORKDIR /frontendapp

COPY package*.json ./
COPY tsconfig*.json ./
COPY vite.config.ts ./

RUN npm install

COPY . .

ARG VITE_API_URL
ARG VITE_APP_SITE_KEY

ENV VITE_API_URL=${VITE_API_URL}
ENV VITE_APP_SITE_KEY=${VITE_APP_SITE_KEY}

RUN npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY --from=build /frontendapp/dist /usr/share/nginx/html

#COPY ./scripts/docker-entrypoint.sh /docker-entrypoint.sh
#RUN chmod +x /docker-entrypoint.sh
#
#RUN rm -f /usr/share/nginx/html/env-config.js

EXPOSE 80

#CMD ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]