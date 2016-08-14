# Javascript Training Module

## Local Dev (Mac)

On a Mac you'll already have PHP installed locally. You can use PHP's local server to serve the CI folder after cloning this repo.

```sh
$ git clone git@github.com:telusdigital/developer-training-module.git
$ cd developer-training-module
$ npm install

$ php -S localhost:8080 -t ci
```

## Build SCSS

If you need to build CSS you can do that from the root

```sh
$ npm run build
```
This will build CSS to the `/ci/assets/css` folder. The source files are stores in `/src/scss/`

## Running Tests

### Javascript tests

Karama and Jasmine is installed with `npm install`. From your root run:

```sh
$ npm run test
```

The tests are stored in the `/ci/assets/js/test/` folder. Karma will load any file that ends in `.spec.js`

### PHP tests

PHP tests need to be run from the `/ci/application/tests/` folder.

```sh
$ cd ci/application/tests
$ php phpunit.phar
```
