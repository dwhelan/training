[![Build Status](https://travis-ci.org/dwhelan/training.svg?branch=master)](https://travis-ci.org/dwhelan/training)

# Agile Engineering Training

This repository contains training exercises and katas for the LeanIntuit Agile Engineering training course.

## Getting started
The easiest way to access the training exercises is to use `git`. If you really, really don't want to use `git` then
click **Clone or download** on this page, select **Download Zip** and  unzip the files on your local file system.

If you do want to use `git` but don't have it installed we suggest you download it from the [git download page](https://git-scm.com/download/).

With `git` installed you simply open up a shell or command window and clone this repository:

```
$ git clone https://github.com/dwhelan/training-js.git
```

# JavaScript
The javascript code is ECMAScript 5.1.

## Getting started
### Install node.js
These katas require that `Node.js` be installed. Go to the [node site](https://nodejs.org/) and following the install instructions for your operating system.
`npm`, the node package manager, will be installed when you install `Node.js`.

If you are running on Windows you will need to restart your computer in order for `Node.js` to work.

The following ruby `Node.js` versions are supported:
- 3.x
- 4.x
- 5.x
- 6.0
- 6.1
- 6.2
- 6.3
- 6.4
- 6.5
- 6.6

Other versions will likely work but have not been tested.

### Install dependencies
Next, use `npm` to install dependencies for these katas:

```sh
cd <local "training" folder>/js
npm install
```

## Running tests
[Mocha](https://github.com/mochajs/mocha) is used as the test framework for these katas. You specify the test(s) you want to run on the command line:

```sh
npm test bowling
```
If you are on Windows you may see the error `File sizes do not match` because of line ending differences. The fix is delete the `Gilded_Rose.should_update_items.approved.txt` file and rename the `Gilded_Rose.should_update_items.received.txt` file to `Gilded_Rose.should_update_items.approved.txt`.

On non-Windows systems you can also run your tests with code coverage:

```sh
npm run coverage gilded_rose
```
Open the Coverage report at [coverage/lcov-report/index.html](coverage/lcov-report/index.html) with your browser.

### Jasmine
Running tests with [Jasmine](http://jasmine.github.io/) works with some caveats.

First of all, it has been configured to run all specs in the `js` folder, so you can't specify the tests for individual katas.

Next, the Gilded Rose kata does run as expected due to an incompatability with the approvals library (it does not calculate the correct file name and looks for files with nothing before the `.approved.txt` or `received.txt`).

To run the tests with Jamsine:

```sh
npm run jasmine bowling
```
Also, when you first run, you will see an error like `Approved file does not exist`. In the `gilded_rose` folder delete the `.approved.txt` file and rename the `.received.txt` file to `.approved.txt` and re-run.

# IDE suggestions
For some tips on using some popular IDEs you might to check out:
* [WebStorm](WebStorm.md)
* [Atom](Atom.md)

# To do
* DRY up `var expect = require("expect");`
* get working with Jasmine
* create an ecmascript 6 version of the katas
* fix missing bartender.md => or simplify how kata descriptions are done
