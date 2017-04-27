FROM node:6.10-alpine

RUN mkdir -p /usr/src/app/js
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY src /usr/src/app/src

EXPOSE 3000

ENTRYPOINT ["npm","start"]
