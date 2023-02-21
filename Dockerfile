FROM node:14.17.6-alpine3.14

WORKDIR /app
COPY . /app

RUN yarn install
RUN yarn lint
RUN yarn build

CMD ["yarn", "serve"]
