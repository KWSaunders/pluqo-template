FROM node:14

WORKDIR /bezkoder-app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD npm start