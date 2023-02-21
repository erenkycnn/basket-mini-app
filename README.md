# basket-mini-app

Here is a simple basket app, it shows products that come from request responses.
Then you can add to your cart, you can update quantity, and delete products from the cart.

## Installation

### Installation with Docker

In the project files, when you run this code in the terminal, the project will run as a production.

```
docker build -t basket-app. && docker run -it -p 8080:8080 basket-app
```

### Installation with Yarn

```
yarn install
```

#### Run with yarn

```
yarn serve
```

#### Run with Yarn & Docker

It's a script for a run docker with yarn.

```
yarn docker
```

## Unit Test

Unit test is written with jest, you can run this command to see test results:

```
yarn test:unit
```

## Lints and fixes files

Linter is an eslint, you can fix files with codes.

```
yarn lint
```
