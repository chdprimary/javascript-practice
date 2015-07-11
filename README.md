# A brief log of concepts as I learn them:
<br>
- [x] Watched Douglas Crockford's Google Tech Talk <a href="https://youtu.be/hQVTIJBZook">Javascript: The Good Parts</a>
<br>

###Professional Javascript for Web Developers:

  - EMCA-262 = ECMAScript
  - Latest version is ECMAScript 6
  - JavaScript = ECMAScript + DOM (interfaces with a document) + BOM (interfaces with the browser)
  - `<script>`
    - async
    - defer
    - src
  - place at end of `<body>` to load entire page first
  - `<noscript>` executed when browser doesn't support JavaScript or JS is turned off
  - In XHTML `<! [CDATA[ ... ]]>` indicates areas of free-form text not intended to be parsed
  - Include as much JS as possible using external files
  - Document modes for browsers
    - Quirks mode
    - Standards or Almost-standards mode  
  
  - Language Basics:
    - everything is case sensitive
    - c style comments
    - valid without semicolons, semicolon recomm.
    - "use strict"; at beginning of `<script>` or function
    - variables are loosely typed
      - attention should be paid to typing - don't type change implicitly
    - local variable if **var** keyword is used in declaration and inside a block
    - global variable if var is omitted
      - not recommended, not allowed in strict mode: woo!
    - 5 data types:
      - undefined, null, boolean, number, string (and object)
      - undefined:
        var is declared but not initializeds
        never set anything explicitly to undefined
      - booleans:
        must be lowercase
      - number:
        Number.MAX_VALUE , Number.MIN_VALUE
      - Objects:
        var o = new Object();
    - typeof
      null is actually an empty object reference
    - Boolean stuff
    - Math stuff
    - Equality operators
      - == and != allow type coercion
      - === and !== do not
    - ternary
    - for-in
      iterates the properties of an object
        - ```javascript
        for (var propName in window) {
            document.write(propName);
      }```
    - arguments to function
      `arguments[0]`
      `arguments.length`
    - you can pass in however many arguments regardless of function signature
      - outside of "use strict", changing arguments array changes value of named args (not vice versa)
    - no overloading in JS
      - function takes the last definition of the function that becomes added to the interpreter environment

###DOM: 
- DOM manipulations are very expensive 
- everything is a node
    - `document.getElementById()`
    - `getElementsByTagName()`
    - `document.querySelector()`
    - `document.querySelectorAll()`
    - `getElementsByClassName()`
- Element Traversal:
    - five properties for DOM elements:
      - childElementCount
      - firstElementChild
      - lastElementChild
      - previousElementSibling
      - nextElementSibling
- Forms
    - `<form>` element contain `<input>` elements

###CSS:
- `font-size`
- `font-family`
- `font-weight`
- `line-height`
- `color`

- `background`
- `display`
- `margin`
- `padding`
- `overflow-x; overflow-y`
- `width`
- `height`
- `box-shadow; -webkit-box-shadow`
- `top; left; right; bottom`
- `position`

- `list-style-type`
- `cursor`
- `text-decoration`


###Codewars:
```javascript
    <arr>.map() (translate each element in an array into something else, in place)
    <arr>.reduce() (gets called on every element of array) .reduce(function(s,e) {return s+e;})
    .split(), .reverse(), .join(), .replace()
    <arr>.push()
k   typeof
    <str>.concat() (DON'T USE THIS, USE ASSIGNMENT OPS LIKE +,+= INSTEAD)
    <num>.toFixed()
*   parseInt()
    try/catch(e)
k   instanceof
    Array(<length>)

    regexp (don't use quotes, use / /)
    String.fromCharCode(), .charCodeAt(idx)
    Math.floor(), <str>.substring()
*   isNaN()
*   eval()
    <arr>.indexOf() - index of first occurrence of parameter
    <arr>.every() - tests whether all elements pass test implemented by the function
```
###MDN:
```javascript
    Object.create(<prototype object>)
    Object.getOwnPropertyNames(<object>) : returns all property names
    Object.getOwnPropertyDescriptor(<object>,<prop>) : returns value, writable, enumerable, configurable values
    value, writable (can use assignment op on), enumerable (can for-in over)
      configurable (can change prop writability, enumability, configability && use delete op on)
k   delete <object.prop>
    Object.defineProperties(<obj>,{<prop>:{enumerable:false,value:8,...}}
    Object.freeze(<obj>) - makes immutable
    Object.seal(<obj>) - not as harsh as freeze()
      freeze and seal will improve performance when they are optimized in future
      will also be useful when writing frameworks / libraries so user cant break your code
      freeze and seal are examples of "object hardening"
    Object.keys(<obj>) - returns all enumerable props in order a for..in would traverse them
    <arr>.some()
    <arr>.filter(<callback>);
    <func>.length - number of arguments expected
    <func>.apply(<thisref>,<arr>) - basically used to break an array into a list of parameters for <func>
      think Math.max.apply() or Math.min.apply()
    <func>.call() is same as .apply except it takes a list of args, not an array
```
- polyfills
- comma operator (many expressions evaluated, last one's result is returned)

- Functions:
    - in JS every function is actually a Function Object
    - Functions can be created with a function expression (no name; anon function) or a function statement (name, statements optional)

- Errors:
  - SyntaxError
  - TypeError
  - RangeError
  - ReferenceError

    
- converting arguments object to ACTUAL array (so you can use array functions on it):
    - Array.prototype.slice.call(arguments) - slice is arr.slice() - slice creates a copy of it's *this*
        - (logically equivalent to arguments.slice() - but that way is illegal)

- regexp - word boundaries \b, positive lookaheads, OR operator, [abc] (any of a b or c)

###Crockford's JS Good Parts
- global variables are the worst thing ever because of identifier collision (all compilation units of proj share namespace)
  - use closures to avoid this
    - closure: outer function which basically acts as a containing block to define local variables. When outer function is called, the inner function is called immediately. The inner function has access to all declarations in outer function.
    - syntax is function(){ _declarations_ ... return _inner function_ }();
- use strict mode
- use === and !==, _never_ use == or !=
- use semicolons explicitly
- use right-sided curly braces
- be aware that forgetting `new` when constructing will cause problems
- be aware that you probably shouldn't ever have to use `eval()`
- be aware that the + operator can cause sneaky issues because of it's dual functionality
- be aware that all numbers in JS are floating-point and floating-points aren't exact 
  - (0.1 + 0.2 === 0.3) //false
- use JSLint as often as possible
