FROM node:18

WORKDIR /usr/apnawakil/backend

COPY package* .

RUN npm install

EXPOSE 3000

COPY . .

CMD [ "npm", "run", "dev"]
