# Reviews following topics:

- fetch()
- callbacks
- closures
- addEventListener
- spread operator
    - for objects and for arrays
- destructuring syntax
- `&&` and `||`


# Intros:

- Promises
- Prototypes
- Classes

## Closure

- a nested function that access variables from the outer function!!!

## Callback

- is an argument that is a function

## does it have to be an arrow function?

- Nope!

## does it have to be an annonymous function?

- Sometimes...

## Promises

- for organizing asynchronous code.
- they solve the problem of "callback HELL"
    - aka working with deeply nested callback functions


- it's an objects
- with a .then() function
    - pass it a callback function
- and it has a .catch() function


- it's an object
- it exists in one of three states
    - pending
    - fulfilled
    - rejected


### How do I wait for a bunch of Promises to finish?

Use `Promise.all()`, which will "await" for an Array of Promises to finish.


A closure is an anonymous function that uses variables defined by the outter function
