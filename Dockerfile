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

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]