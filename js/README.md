# Getting Started

## Install Node.js
These katas require that `Node.js` be installed. Go to the [node site](https://nodejs.org/) and following the install instructions for your operating system.
`npm`, the node package manager, will be installed when your install `Node.js`.

If you are running on Windows you will need to restart your computer in order for `Node.js` to work.

## Install Dependencies
Next, use `npm` to install dependencies for these katas:

```sh
cd <local "training" folder>/js
npm install
```

# Running Tests
[Mocha](https://github.com/mochajs/mocha) is the recommended test tool for these katas because it works for all of them. You specify the test you want to run on the command line.

```sh
npm run mocha bowling/bowling.spec.js
```
## Jasmine
Running tests with [Jasmine](http://jasmine.github.io/) works with some important caveats:
 - the Gilded Rose kata does run due to an incompatability with the approvals library
 - with Windows jasmine does not seem to pick up any of the spec files

```sh
npm run jasmine bowling/bowling.spec.js
```

## Webstorm IDE
[WebStorm](https://www.jetbrains.com/webstorm/specials/webstorm/webstorm.htm) is a great IDE with a free 30 day trial.
Out of the box, WebStorm provides IDE integration for Mocha, but not Jasmine. In this project you can still run Jamsine
tests through WebStorm via the `Jasmine` run configuration but this will run in a terminal window rather than use WebStorm unit test view.

### Enable Node.js
To run tests from the IDE you may need to enable `Node.js` if it is not already enabled.

On a Mac you do this by pressing **&#8984;,**, , selecting `Node.js and NPM` and press the `Enable` button if you see that Node.js is not enabled. The window should like the shown below:

![logo](images/WebStorm-enable-nodejs-mac.png)

On Windows you do this by entering `Ctrl+Alt+S`, selecting `Node.js and NPM` and press the `Enable` button if you see that Node.js is not enabled. The window should like the one shown below:

![logo](images/WebStorm-enable-nodejs-win.png)

## Running Tests
Right click on any `spec.js` file and select "Run".

### Viewing Markdown Files
To view the kata descriptions it is recommended that you install the 'Markdown Support' plugin. Refer to the [Enabling and Disabling Plugins](https://www.jetbrains.com/help/webstorm/2016.2/enabling-and-disabling-plugins.html) if you need help with this.
