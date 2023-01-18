FROM node:18.9.0-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3006

CMD ["npm", "start"]