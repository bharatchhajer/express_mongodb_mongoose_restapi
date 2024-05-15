FROM node:20.9.0

RUN mkdir -p /src
WORKDIR /src

ADD package.json /src/package.json
RUN npm install

COPY . /src

EXPOSE 3000
CMD node --env-file=container.env index.js