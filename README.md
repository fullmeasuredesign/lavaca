Lavaca 2.0.0
======

[![Build Status](https://travis-ci.org/mutualmobile/lavaca.png?branch=amd)](https://travis-ci.org/mutualmobile/lavaca)

Introducing Lavaca, the open source, HTML5 application framework by Mutual Mobile. Jumpstart development of your project by basing them off of Lavaca and using Lavaca's build tools.

Lavaca features:
* A build system supporting multiple configurations for different environments
* An HTML, JavaScript, and CSS packaging and minification system
* A JavaScript documentation generation system
* A unit testing framework
* A JavaScript MVC framework
* A templating framework
* A translation framework
* …as well as many other essential components for modern web applications.

Lavaca has a ton packed into it, and is designed to work well as a cohesive whole, while still remaining lightweight. Lavaca is built with extensibility in mind and allows you to easily extend components and build your own on top of its framework.

# Getting Started

## Quick Start
1. __Install *getlavaca* CLI tool__
```bash
$ curl https://raw.github.com/mutualmobile/lavaca/amd/getlavaca > /usr/local/bin/getlavaca && chmod +x /usr/local/bin/getlavaca
```

2. __Go to your prefered root directory then run__
```bash
$ getlavaca
```
then follow instructions. You're good to go.



## Manual Setup

1. __Get the code__
```bash
$ mkdir [my_app] && cd [my_app]
$ git clone git@github.com:mutualmobile/lavaca.git .
```

2. __Get the branch__
```bash
$ git checkout -b [my_branch] origin/amd
```

3. __Install grunt-cli globally__
Note: this may require sudo
```bash
$ npm install -g grunt-cli
```

4. __Install dev dependencies for our tasks to work__
```bash
$ npm install
```

5. __Start Development Server__
```bash
$ grunt server
```
Your application should now be running on `localhost:8080`.

## Grunt Tasks

Below is a list of grunt tasks to aid development and facilitate deployment.

### Server

A task that simply runs a static server for local development and testing. Defaults to run on `localhost:8080` with `src` being the root directory.

- __Run the default static server__

```bash
$ grunt server
```

### Build

Precompiles LESS and Dust templates, concats and minifies all CSS and JavaScript files, and builds all related files to `www`, `android/assets/www` and `ios/www` directories. 

- __Build with local config__

```bash
$ grunt build
```

- __Build with staging config__ (a copy of the build will be available in `www` folder)

```bash
$ grunt build:staging
```

- __Build with production config__ (a copy of the build will be available in `www` folder)

```bash
$ grunt build:production
```

### Test

Runs unit tests defined in `test/unit` directory with [Jasmine](http://pivotal.github.com/jasmine/) in a headless instance of Webkit using [PhantomJS](http://phantomjs.org/).

- __Run unit tests from `test/unit`__

```bash
$ grunt test
```

### Docs

Generates JavaScript documentation using [Atnotate](https://github.com/mutualmobile/lavaca/wiki/5.4.-Documentation-Generation-with-Atnotate). The resulting documentation is outputed to the `docs` folder.

- __Generate JavaScript Documentation__

```bash
$ grunt docs
```



Legal stuff:

Lavaca 2.0
Copyright (c) 2013 Mutual Mobile

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Contains components from or inspired by:

Simple Reset
(c) 2011 Eric Meyer
Released to public domain

jQuery v1.7.1
(c) 2011, John Resig
Dual licensed under the MIT or GPL Version 2 licenses.

Sizzle.js
(c) 2011, The Dojo Foundation
Released under the MIT, BSD, and GPL licenses.

Backbone.js 0.9.1 and Underscore.js 1.3.1
(c) 2012, Jeremy Ashkenas, DocumentCloud Inc
Released under the MIT license.

LinkedIn Fork of Dust.js 1.1
(c) 2010, Aleksander Williams
Released under the MIT license.

Zepto.js 0.8.0
(c) 2011 Thomas Fuchs
Released under the MIT license

ChildBrowser
(c) 2012 Jesse MacFadyen, Nitobi
Released under the MIT license

lz77.js
(c) 2009 Olle Törnström
Released under the MIT license

iScroll 4.1.9
(c) 2011 Matteo Spinelli
Released under the MIT license