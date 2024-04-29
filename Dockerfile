FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . ./

EXPOSE 8005

CMD [ "npm", "start" ]