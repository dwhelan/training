# Getting Started

These katas require that `node` be installed. Go to the [node site](https://nodejs.org/) and following installed instructions for your operating system.
`npm`, the node package manager, will be installed when your install `node`.

Next, use `npm` to install dependencies for these katas:

```sh
$ cd <local "training" folder>/js
$ npm install
```

# Running Tests

## Command Line
You can run the tests using [Jasmine](http://jasmine.github.io/):

```sh
$ jasmine
```

**Note:**: The approvals library appears to be incompatible with the latest `Jasmine` and as a result the Gilded Rose kata only runs with Mocha support.
If you run `jasmine` it will exclude the gilded rose kata.

or [Mocha](https://github.com/mochajs/mocha)"

```sh
$ mocha
```

If you prefer, you can run these uing `npm`:

```sh
$ npm run jasmine
$ npm run mocha
```

## IDE
You can also run tests via your IDE.

### WebStorm
[WebStorm](https://www.jetbrains.com/webstorm/specials/webstorm/webstorm.htm) is a great IDE with a free 30 day trial.
Out of the box, WebStorm provides IDE integration for Mocha, but not Jasmine. In this project you can still run Jamsine
tests through WebStorm via the `Jasmine` run configuration but this will run in a terminal window rather than use WebStorm unit test view.

See [Enabling JavaScript Unit Testing Support](https://www.jetbrains.com/help/webstorm/2016.2/enabling-javascript-unit-testing-support.html) for details on configuring WebsStorm.