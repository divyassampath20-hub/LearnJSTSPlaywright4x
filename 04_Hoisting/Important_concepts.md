# JavaScript Notes: Hoisting

## 1. What is Hoisting?

Hoisting means JavaScript prepares variable and function declarations before executing your code.

## 2. Hoisting with `var`

Variables declared using `var` are hoisted and initialized with `undefined`.

```javascript
console.log(greeting);
var greeting = "Hello";
console.log(greeting);
```

**Output:**
```text
undefined
Hello
```

**Why?**

- JavaScript registers `greeting` and initializes it to `undefined`.
- The first `console.log()` prints `undefined`.
- The assignment `"Hello"` happens when execution reaches that line.
- The second `console.log()` prints `"Hello"`.

Conceptually, the code behaves like this:

```javascript
var greeting = undefined;
console.log(greeting);

greeting = "Hello";
console.log(greeting);
```

Note: This is a conceptual illustration, not a literal transformation performed by JavaScript.

## 3. Hoisting with `let`

Variables declared using `let` are hoisted, but they cannot be accessed before initialization due to TDZ.

```javascript
console.log(apiUrl);
let apiUrl = "/login";
```

**Output:** `ReferenceError`

**Why?**

- The variable is registered in its scope.
- It remains uninitialized until its declaration is evaluated.
- Accessing it before initialization throws a `ReferenceError`.

## 4. Hoisting with `const`

Variables declared using `const` also have a Temporal Dead Zone (TDZ).

```javascript
console.log(port);
const port = 3000;
```

**Output:** `ReferenceError`

**Why?**

- `const` is hoisted but cannot be accessed before initialization.
- A `const` declaration must include an initial value.

## 5. What is the Temporal Dead Zone (TDZ)?

Temporal Dead Zone (TDZ) is the time when a let or const variable exists in its scope but cannot be accessed before it is initialized.

Accessing the variable during this period causes a `ReferenceError`.

```javascript
{
    // TDZ for message starts when this scope is entered

    console.log(message); // ReferenceError

    let message = "Hi";   // Initialization
}
```

The TDZ ends when the declaration is evaluated and the variable is initialized.

## 6. `var` vs `let` vs `const`

| Feature | `var` | `let` | `const` |
|---|---|---|---|
| Hoisted | Yes | Yes | Yes |
| Initialized during setup | `undefined` | No | No |
| Access before initialization | `undefined` (if in scope) | `ReferenceError` | `ReferenceError` |
| Scope | Function or global | Block | Block |
| Can be reassigned | Yes | Yes | No |
| Must initialize at declaration | No | No | Yes |

Important: The table describes ordinary declarations in their applicable scope. Redeclaration rules and global-script behavior have additional details.

## 7. Function Hoisting

### Function declaration

Function declarations can generally be called before they appear in the code.

```javascript
sayHello();

function sayHello() {
    console.log("Hello!");
}
```

**Output:**
```text
Hello!
```

The function declaration is available when execution begins.

### Function expression using `var`

```javascript
sayHello();

var sayHello = function() {
    console.log("Hello!");
};
```

**Output:** `TypeError`

**Why?**

- `sayHello` is initially `undefined`.
- The function assignment has not happened yet.
- Calling `undefined` as a function causes a `TypeError`.

### Function expression using `let`

```javascript
sayHello();

let sayHello = function() {
    console.log("Hello!");
};
```

**Output:** `ReferenceError`

**Why?** `sayHello` is accessed during its TDZ.

## 8. Quick Rules to Remember

- `var` → hoisted and initialized to `undefined`.
- `let` → hoisted, but inaccessible before initialization.
- `const` → hoisted, but inaccessible before initialization.
- Function declarations → can generally be called before their declaration.
- Function expressions → follow the hoisting rules of the variable used to store them.
- TDZ → accessing an uninitialized `let` or `const` variable causes a `ReferenceError`.
- Hoisting does not mean assignments happen before their original execution order.

## 9. Common JavaScript Errors

| Error | Meaning |
|---|---|
| `ReferenceError` | Accessing a variable before initialization, or referring to an unavailable identifier |
| `TypeError` | Performing an operation that is invalid for the value, such as calling `undefined` as a function |

## 10. Interview Quick Revision

**Q: What is hoisting?**

A: JavaScript processes declarations before executing statements in their scope.

**Q: Why does `var` return `undefined` before assignment?**

A: A `var` binding is initialized to `undefined` before normal execution reaches its assignment.

**Q: Why does `let` throw a `ReferenceError` before declaration?**

A: It is in the Temporal Dead Zone until initialization.

**Q: Can a function be called before its declaration?**

A: Yes, for a function declaration. This does not generally apply to function expressions assigned to variables.

**Q: Does JavaScript physically move declarations to the top?**

A: No. Hoisting describes declaration handling during execution setup.

### One-line memory trick

`var` → `undefined`; `let` and `const` → TDZ and `ReferenceError`; function declaration → callable before its declaration.
