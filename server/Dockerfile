FROM node:20-alpine
RUN npm install -g nodemon
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 5000
CMD ["npm", "run", "start"]

