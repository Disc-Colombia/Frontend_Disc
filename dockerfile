FROM node:20 as build

WORKDIR /frontendapp

COPY package*.json ./
COPY tsconfig*.json ./
COPY vite.config.ts ./

RUN npm install

# Copia el resto de los archivos de tu proyecto
COPY . .

# Compila el proyecto (si es necesario, ajusta el comando según tu configuración)
RUN npm run build

# Expone el puerto en el que tu aplicación estará disponible
EXPOSE 3000

# Define el comando por defecto para ejecutar la aplicación
CMD ["npm", "run dev"]
