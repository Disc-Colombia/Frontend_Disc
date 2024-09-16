#!/bin/sh

# Generar el archivo env-config.js basado en las variables de entorno
echo "window.env = {" > /usr/share/nginx/html/env-config.js
echo "  VITE_API_URL: '$(echo $VITE_API_URL)'," >> /usr/share/nginx/html/env-config.js
echo "  VITE_APP_SITE_KEY: '$(echo $VITE_APP_SITE_KEY)'" >> /usr/share/nginx/html/env-config.js
echo "};" >> /usr/share/nginx/html/env-config.js

# Iniciar Nginx
nginx -g 'daemon off;'
