footer: MultiMediaTechnology WS 2015 – Hannes Moser – @eliias 2015
slidenumbers: true
build-lists: true
autoscale: true

# Frontend Development 1
### The *hot shit*<sup>TM</sup>, happens on the frontend!

---

## Goals

- Advanced knowledge of Frontend Development
	- Tooling (w/ *Web Production Workflows*)
	- ECMAScript 2015 (biggest part)
	- HTML5 (recap)
	- CSS3 (+SASS → part of tooling but also structured work)
- Concept and implementation of a frontend for a web application

---

## Exam Procedure And Grades

There will be continuous assessment throughout the course. The final grade will consist of:

- homework: 40%
- oral exams: 25%
- final exam (last scheduled course date): 35%

Each of these three parts must be passed separately.

---

## Documents

- You can use these slides to learn, but…
- referenced articles and book chapters will be part of **the exams**!

# Read the articles and book chapters!

---

## Others

- Strong intersection with *Web Production workflows*
- You might get emails such as this one: "Install Node.js on your laptop"
	- Preparation for the course is mandatory!

---

# Style

---

## What we have done so far

```css
body {
	background-color: white;
}

body a {
	color: red;
}
```

followed by another ~~250~~ 1k lines of code.

---

## Organize Stylesheets

---

## Organize Stylesheets[^CSS Pur!]

![inline](images/css-modules.png)

[^CSS Pur!]: CSS Pur!, Betinna K. Lechner, Bernhard Stockmann 2010

---

## Organize Stylesheets

- Use `@import`
- Use a convention (BEM, Atomic CSS)
- `Concat` files
- Use a preprocessor (SASS, LESS, …)

---

## Organize Stylesheets
### The `@import` statement

- The specification for the `@import` [rule](http://www.w3.org/TR/css-cascade-3/#at-import)

```
@import [ <url> | <string> ] <media-query-list>? ;
```

```css
@import "mystyle.css";
@import url("mystyle.css");
```
[^CSS Cascading and Inheritance Level 3]

[^CSS Cascading and Inheritance Level 3]: http://www.w3.org/TR/css-cascade-3/#at-import

---

## Organize Stylesheets
### The `@import` statement

**Advantages**
- Standard
- Works for every browser
- Easy to understand

**Problems**
- Multiple Requests

---

## Organize Stylesheets
### The `@import` statement

**Use case:** Import 3rd party styles and webfonts.

```css
@import url(https://fonts.googleapis.com/css?family=Open+Sans);
```

```css
body {
	font-family: 'Open Sans', sans-serif;
}
```

---

## Organize Stylesheets
### Conventions

Use a convention or define one yourself.

- BEM (Block-Element-Modifier)
- Atomic CSS
- OOCSS

---

## Organize Stylesheets
### The `BEM`[^BEM] convention

```css
.header__form--email {}
```

- No `ID`, `class` only
- Separator rules:
	- "`__`" 2 *underscores* between a `block` and an `element`
	- "`--`" 2 *dashes* between `element` and `modifier`

[^BEM]: https://en.bem.info

---

## Organize Stylesheets
### The `BEM` convention

- Blocks are `containers`
- Blocks contain `elements`
- Your classes always start with blockname [^An introduction to the BEM methodology]

![fit right](https://cms-assets.tutsplus.com/uploads/users/51/posts/19403/image/bem-blocks.jpg)

[^An introduction to the BEM methodology]: [http://webdesign.tutsplus.com/articles/an-introduction-to-the-bem-methodology--cms-19403](http://webdesign.tutsplus.com/articles/an-introduction-to-the-bem-methodology--cms-19403)

---

## Organize Stylesheets
### The `BEM` convention

**Example** [^CSSWizardy: MindBEMding – getting your head ’round BEM syntax]

```scss
.site-logo {
	background: url("images/logo.png");
}
.site-logo--xmas {
	background: url("images/logo-xmas.png");
}
```
[^CSSWizardy: MindBEMding – getting your head ’round BEM syntax]: [http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)

---

## Organize Stylesheets
### The `BEM` convention

> The reason for double rather than single hyphens and underscores is so that your block itself can be hyphen delimited…
-- [Harry Roberts](http://csswizardry.com/)

---

## Organize Stylesheets
### Atomic CSS

![](http://bradfrost.com/wp-content/uploads/2012/11/Screen-Shot-2012-11-13-at-5.15.05-PM.png)

---

## Organize Stylesheets
### Atomic CSS

- It is more a methodology than a convention
- It is based on 5 levels
  - Atoms
  - Molecules
  - Organisms
  - Templates
  - Pages

---

## Organize Stylesheets
### Atomic CSS

**Atoms**

```html
<label>
<input>
<form>
```

---

## Atom

![](http://bradfrost.com/wp-content/uploads/2013/06/atoms.jpg)

---

## Organize Stylesheets
### Atomic CSS

**Molecules**
`Molecules` are groups of `atoms`.

```html
<div class="molecule">
  <input class="atom">
</div>
```

---

## Molecule

![](http://bradfrost.com/wp-content/uploads/2013/06/molecule.jpg)

---

## Organize Stylesheets
### Atomic CSS

**Organisms**
`Organisms` are groups of `molecules`.

```html
<div class="organism">
  <div class="molecule">
  <div class="molecule">
  <div class="molecule">
</div>
```

---

## Organism

![](http://bradfrost.com/wp-content/uploads/2013/06/organism-examples.jpg)

---

## Organize Stylesheets
### Atomic CSS

**Templates**
`Templates` are mostly groups of `organisms`.

---

## Template

![](http://bradfrost.com/wp-content/uploads/2013/06/template1.jpg)

---

## Organize Stylesheets
### Atomic CSS

**Pages**
`Pages` are concrete instances of `Templates`.

---

## Page

![](http://bradfrost.com/wp-content/uploads/2013/06/page1.jpg)

---

## Organize Stylesheets
### OOCSS

> As with any object-based coding method, the purpose of OOCSS is to encourage code reuse and, ultimately, faster and more efficient stylesheets that are easier to add to and maintain.
-- Louis Lazaris [^An Introduction To Object Oriented CSS (OOCSS)]

[^An Introduction To Object Oriented CSS (OOCSS)]: [http://www.smashingmagazine.com/2011/12/an-introduction-to-object-oriented-css-oocss/](http://www.smashingmagazine.com/2011/12/an-introduction-to-object-oriented-css-oocss/)

---

## Organize Stylesheets
### OOCSS[^Bootstrap]

![inline](images/oocss-example.png)

[^Bootstrap]: [http://getbootstrap.com/components/](http://getbootstrap.com/components/)

---

## Organize Stylesheets
### OOCSS

**Resources**
- http://de.slideshare.net/DanOlsavsky/oocss-20284331
- http://oocss.org/
- https://smacss.com/

---

## Grid

Grids did exist long before they have been used as layout tool for websites. [^Grid (graphic design)]

![right fit](http://designshack.net/wp-content/uploads/wsjWEB.jpg)

[^Grid (graphic design)]: [https://en.wikipedia.org/wiki/Grid_(graphic_design)](https://en.wikipedia.org/wiki/Grid_(graphic_design))

---

## Grid
### The vertical grid

> Always start your ~~design~~ project with a layout grid. No exceptions.
-- DI* [^DI*]

![right fit](images/vertical-grid.png)

[^DI*]: [DESIGNERS INSIGHTS](http://www.designersinsights.com/designer-resources/using-layout-grids-effectively)

---

# People And Blogs
## …you probably should have heared of

- Lea Verou: http://lea.verou.me/
- Sara Soueidan: http://sarasoueidan.com/
- Harry Roberts: http://csswizardry.com/

---

# GIT

---

## Advantages

- Non-linear development
- Decentralized and complete copies of repositories
- Cryptographically save
- Automatic versioning

Everything you need to know is here: [http://git-scm.com/](http://git-scm.com/)

---

## GIT is useful…

if you work

- alone
- as part of a team

---

# It is always useful!

---

## Non-linear development

- Development without space and time restrictions → Branche
- Merge branches together → Merge
- Snapshot development state → Tag

Possible problem: **Merge Conflicts**

---

![inline](images/merge-conflict-meme.png)

---

## How do we get conflicts?

- Dev **A** works on specific code
- Dev **B** works on the same code section
- Dev **A** push his state
- Dev **B** tries to push it
	- **MERGE CONFLICT**
	- Most of the times, GIT is able to solve this for you

---

## How does such a conflict look like?

- GIT will let you know

![inline](images/merge-conflict.png)

---

## How to resolve conflicts?

- Open affected file(s) and find the marked sections

![inline](images/merge-conflict-patch.png)

---

## I have resolved it, what should I do next?

Add and commit your fix:
- *git-add*
- *git-commit*
- *git-push*

![inline](images/merge-conflict-resolved.png)

---

## Branching & Merging

---

## Scenario

- Many people working together
- Many people writing source code
- Many people using *git-pull* all the time
- Many people are frustrated about conflicts

Thre is a solution for that…

---

## Create a branch!

---

More about branching and merging!

---

# CLI 101

---

![inline](images/terminal.png)

---

# Why is the CLI so important for us?

---

## It is the ONLY interface for a lot of tasks!

---

# Common CLI tasks

- Login to servers
- Build tools
- Set file and directory permissions
- Install packages

---

# Important commands

---

## man → __manual__

---

## man man → __opens the man manual__

---

## man ls → __opens the ls manual__

---

## cd → __change directory__

---

## cd .. → __goto parent dir__

---

## cd . → __goto current dir__

---

## cd ./sub → __goto subdirectory__

---

## cd ../sibling <br>→ __goto parent and switch to sibling__

---

## cd ../../ → __go 2 steps up__

---

## pwd → __print name of working directory__

---

## pwd → */var/www/html*

---

## ls → __list__

---

## ls -l → __list in long format__

---

## ls -a → __include hidden files and dirs__

---

## ls -la → __combine flags__

---

## rm → __remove files or directories__

---

## rm -r <br>→ __remove directories and their contents recursively__

---

## rm -f <br>→ __ignore nonexistent files and arguments, never prompt__

---

## chown → __change ownership__

---

## chown www-data:www-data <br>→ __group and user__

---

## chown www-data → __change user only__

---

## chown :www-data <br>→ __change group only__

---

## chown www-data: → __change both__

---

## chmod → __change file mode__

---

## chmod 777 file → __octal-mode__

---

## chmod a+x file → __symbolic-mode__

---

## chmod ugo-rwx file → __reset everything__

---

## tail → __output the last part__

---

## tail file → __output the last part of file__

---

## tail -f file <br>→ __output the last part of file and follow__

---

## exit <br>→ __cause normal process termination__

---

## exit <br>→ __close your terminal session__

---

## Ctrl+c → __kill process with SIGINT__

---

## Ctrl+z <br>→ __suspend process with SIGSTOP__

---

## fg <br>→ __bring suspended process back to foreground__

---

## bg <br>→ __run process in background__

---

## jobs <br>→ __list suspended commands__

---

## kill %1 <br>→ __kill command by index__

---

## clear → __clear the terminal screen__

---

## vi → __start vi editor__

---

## vim → __start vim editor__

---

## nano → __start nano editor__

---

## pico → __start pico editor__

---

## which → __locate a command__

---

## which node <br>→ */usr/local/nvm/versions/io.js/v1.7.1/bin/node*

---

### service <br>→ __run a System V init script__

---

# Package Manager

We are going to use `npm` a lot, but there is more than one.

- [npm](https://www.npmjs.com/)
- [bower](http://bower.io/)
- [jspm](http://jspm.io/)

---

## Install

- You need Node.js. Use [`nvm`](https://github.com/creationix/nvm) to install it.
- `npm` comes with Node.js

---

**Install your first dependency**

```bash
npm install -g eslint
```

![right fit](videos/npm-i-g.mov)

---

## ECMAScript 2015

ECMAScript is a language specification (no implementation). ECMA-262 6<sup>th</sup> is the latest edition but there are already drafts for ES7. You might have heard of it as ES6, ES Next or Harmony.

It does not guarantee you, that JavaScript works the same on all platforms (browsers and standalone runtimes → Node.js).

---

![](https://media.giphy.com/media/iSrxcRcKNkVRm/giphy.gif)

---

## ECMAScript Compatiblity Table [^ECMAScript Compatibility]

![right filtered](images/es-comparison-chart.png)

[^ECMAScript Compatibility]: ECMAScript compatibility table 2015, http://kangax.github.io/compat-table/es6/

---

## Helpful ECMAScript resources

- [caniuse](http://caniuse.com/)
- [Specification](http://www.ecma-international.org/ecma-262/6.0/)
- [Learn ES2015](https://babeljs.io/docs/learn-es2015/)
- [Blog about ES2015](http://www.2ality.com/)
- [ES Compatibility Table](http://kangax.github.io/compat-table/es6/)

---

## Use it today

- [Compiler/Transpiler (Babel)](https://babeljs.io)
- [Browserify](http://browserify.org/)
- [Modern Browsers](http://browsehappy.com/)
- [Node.js](https://nodejs.org)
- [npm](https://www.npmjs.com/)

---

## Toolchain

The toolchain to write modern JavaScript, can get complex.

We will deal with these issues in *Web Prodcution Workflows*.

---

## Code says more than words

**Yay, constants!**

```js
const foo = 'bar'
```

**And let?**

```js
let foo = 'bar'
foo = 'another bar'
```

---

## JavaScript now has block-scoped binding constructs[^MDN 2015]

```js
{
	// Hi, I am block
}

if (true) {
	// Another block
}
```

[^MDN 2015]: MDN 2015, https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/let

---

## No more `var`?

```js
if (true) {
	var foo = 'bar'
}

// is interpreted as

var foo
if (true) {
	foo = 'bar'
}
```

Your `var` gets hoisted on top of the closest function scope (or top of the file).

---

## How `let` and `const` works

```js
if (true) {
	let foo = 'bar'
}
console.log(foo) // undefined
```

It just lives inside the block.

---

## What's the special sauce of `const`

```js
const foo = 'bar'
foo = 'lalaland'
// SyntaxError: invalid assignment to const foo
```

You cannot reassign to an exsiting `const`.

But…

---

## The "But" in `const`

```js
const a = [1, 2, 3]

a.push(4)

console.log(a) // Array [ 1, 2, 3, 4 ]
```

This works, cause you do not assign anything new to `a`.
You just manipulate the existing `Array`.

---

## Summary

- Blocked scope binding as you would have expect it in the first place
- `const` and `let` is the new `var`

---

## Enhanced object literals + freeze

---

## Destructuring

---

## Default, ...rest & ...spread

---

## Arrow Functions

---

## Classes

---

## Modules

---

## Iterators + for..of

---

## Generators

---

## Promises

---

## Code Quality

- ESLint
- JSCS

---

# Stylesheets

---

## So what…

- BEM
- Atomic CSS
- Preprocessors
- Grids
- Mediaqueries
- Responsive Layouts

---

# APIs

---

## Authentication

---

# Transition + Animation

---

## Feature Testing & Cross-platform

---

# Non-blocking Programming

---

## Why and how?

```js
const result = fetch('file.bin')
// i am still waiting…

process(result)
```

---

## Continuation-passing Style [^CPS]

[^CPS]: http://matt.might.net/articles/by-example-continuation-passing-style/

---

## Definition

> No procedure is allowed to return to its caller--ever.
-- Matt Might

> Procedures can take a callback to invoke upon their return value.
-- Matt Might

---

## CPS by example

```js
const result = fetch('file.bin')
// i am still waiting…

process(result)

// transforms into

fetch('file.bin', process)
```

---

## CPS the JavaScript/Node.js way

```js
const result = fetch('file.bin', function(err, result) {
	if (err) {
		throw new Error('booooo')
	}
	process(result)
})
```

---

## CPS real world example

```js
app.get('/users', function(req, res, next) {
	req.users.isAuthenticated(function(err, match) {
		if (err) {
			return next(err)
		}
		next(null, match)
	})
})
```
---

## CPS and the “Pyramide of doom”

Things can get ugly pretty quick. This phenomenon is also known as “Callback hell”.

```js
fs.readdir(source, function(err, files) {
  if (err) {
    console.log('Error finding files: ' + err)
  } else {
    files.forEach(function(filename, fileIndex) {
      gm(source + filename).size(function(err, values) {
        if (err) {
          console.log('Error identifying file size: ' + err)
        } else {
          aspect = (values.width / values.height)
          widths.forEach(function(width, widthIndex) {
            height = Math.round(width / aspect)
            this.resize(width, height).write(destination + 'w' + width + '_' + filename, function(err) {
              if (err) console.log('Error writing file: ' + err)
            })
          }.bind(this))
        }
      })
    })
  }
})
```

---

## How to avoid the callback hell

> “Write small modules that each do one thing, and assemble them into other modules that do a bigger thing. You can't get into callback hell if you don't go there.” [^Callback hell]
-- Isaac Schlueter

[^Callback hell]: http://callbackhell.com/

---

# Promises

“The Promise object is used for deferred and asynchronous computations. A Promise represents an operation that hasn't completed yet, but is expected in the future.” [^MDN Promise]

It is available in all ES2015 comaptible implementations.

[^MDN Promise]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise

---

## How to use

- Use builtin Promise object on modern platforms (Node.js/ES2015 in Browsers)
- Use a Promise library → Promises/A+ [^Promises/A+]
	- [**polyfill**](https://github.com/jakearchibald/es6-promise) for everything
	- [**q**](https://github.com/kriskowal/q) for the browser
	- [**bluebird**](https://github.com/petkaantonov/bluebird) for the server

[^Promises/A+]: https://promisesaplus.com/

---

## Example

```js
const foo = Promise.resolve('bar')
foo.then(function(value) {
	console.log(value) // "bar"
})
```

---

**Async HTTP requests**

```js
const foo = fetch('https://hannesmoser.at') // returns Promise
foo.then(function(value) {
	console.log(value) // the HTML of my website
})
```

**Chaining**

```js
read('file')
	.then(process)
	.then(save)
```

---

**Fetch `n` pages**

```js
const pages = [fetch(…), …]
Promise
	.all(pages)
	.then(save)
```

---

# Universal JavaScript

---

# Functional programing [^fp]

- Functions are first-class citizens
- Higher order functions

**ATTENTION!** This is a limited and not 100% correct definition of functional programing. But good enought too start.

[^fp]: https://en.wikipedia.org/wiki/Functional_programming

---

## Example

```js
function pick(a) {
	return function(n) {
	return random(n, a)
		.forEach(function(a) {
			console.log('* ', a, "\n")
		})
	}
}
```

---

# Alternative Script Languages

- CoffeeScript
- TypeScript
- Dart

---

## Libraries

- lodash
- jquery
- modernizr
- react
- handlebars
- immutable

---

# Polyfills

- fetch

---

## Automation

- Creating projects
- Yeoman
- Webpack
- systemjs
- Broccoli

---

![](https://media.giphy.com/media/yoJC2o71OtZLQGO6JO/giphy.gif)

---

# Performance Metrics

![filter](https://media.giphy.com/media/lRZRxfMmikYV2/giphy.gif)

---

## Hot technologies

- https://assets.thoughtworks.com/assets/technology-radar-may-2015-en.pdf

---

![](https://media.giphy.com/media/10XpbAw59H1mog/giphy.gif)
