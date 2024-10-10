# Usa una imagen base de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos del proyecto
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Instala un servidor ligero para servir la aplicación
RUN npm install -g serve

# Expone el puerto 3000
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["serve", "-s", "dist", "-l", "3000"]