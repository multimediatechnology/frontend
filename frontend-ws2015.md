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

## Classes

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

**Fetch 10 pages**

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

