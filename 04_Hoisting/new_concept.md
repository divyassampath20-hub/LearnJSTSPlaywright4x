Backticks allow JavaScript to evaluate expressions inside ${...}

const env = "staging";
const id = 7;
console.log(`/api/${env}/users/${id + 1}`);**

/api/staging/users/8

' ' or " " → normal strings; ${} is not evaluated.


` ` → template literals; ${} evaluates variables and expressions.


In JavaScript, NaN is not equal to itself, even when using strict equality.
How should you check for NaN?
Use Number.isNaN():

let a = 34;
let result = a++;

console.log(result);
console.log(a);


The a++ operator is called post-increment.
It means JavaScript:
1. Uses the current value of a first (34).
2. Assigns that value to result.
3. Increments a by 1, making it 35.

Expression	Output	Reason
"5" + 3	"53"	String concatenation
"5" - 3	2	Numeric subtraction
"5" * 3	15	Numeric multiplication
"5" / 1	5	Numeric division

