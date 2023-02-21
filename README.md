# basket-mini-app

This is a simple basket app that displays products fetched from a request response. You can add items to your cart, update their quantity, and remove products from the cart.

## Installation

### Installation with Docker

To run the project as a production build, use the following commands in the terminal from the project files:

```
docker build -t basket-app. && docker run -it -p 8080:8080 basket-app
```

### Installation with Yarn

To install the app with yarn, run:

```
yarn install
```

#### Running with yarn

To run the app with yarn, run:

```
yarn serve
```

#### Running with Yarn & Docker

To run the app with Yarn and Docker, use the following script:

```
yarn docker
```

## Unit Test

The app includes unit tests written with Jest. To view the test results, run the following command:

```
yarn test:unit
```

## Linting and Fixing Files

The app uses ESLint for linting. To fix files with code, run:

```
yarn lint
```
