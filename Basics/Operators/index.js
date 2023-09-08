//In JS, there are different kind of operators
//We use these operators along our variables or constants to create expressions, and with these expressions we can implement logic and algorithms
//operators, variables -> expressions -> algorithms

//Operators in JS
//1. Arithmetic
//2. Assigment
//3. Comparison
//4. Logical
//5. Bitwise





/*************************************ARITHMETIC OPERATORS**************************** */
//Use to perform calculations like in maths

//Basic Arithmetic operators -> +, -, *, /, %
//Additionl arithmetic operator in JS axpaniation -> ** [x**y -> this is x power to y]

/*
let x = 10;
let y = 3;
*/

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y);


//Increment(++)
/*
console.log(x); //10
console.log(++x); //Value will be incremented first and then we will see it on console //11
console.log(x++);  //Value of x will be shown on console first and then it will increment //11
console.log(x); //12


//Decrement(--)

console.log(x); //12
console.log(--x); //Value will be decremented first and then we will see it on console //11
console.log(x--);  //Value of x will be shown on console first and then it will decrement //11
console.log(x); //10
*/









/*********************************ASSIGMENT OPERATORS************************************ */

//let  x = 10;

//x++ is same as x = x + 1;
//x = x + 5 cant be done by increment opertor, we can do it as
//x += 5;    //same as x = x + 5
//x *= 3 is same as x = x * 3
//All arithmetic operators have combination with assigment operator













/*****************************************COMPARISON OPERATORS*********************************** */

/*
let x = 1;

//Result of expression including comparison results boolean

//Realtional operators
console.log(x > 0);  //True on console
console.log(x >= 1);   //True
console.log(x <= 1);   //True
console.log(x < 1);   //False

//Equality operators
console.log(x === 1);   //True
console.log(x !== 1);   //False
*/









/*************************************EQUALITY OPERATORS************************************ */

//Strict Equality (Ensures both sides are of same type and have same value to return true)
//More Accurate and precise

/*
console.log(1 === 1); //TRUE
console.log('1' === 1);  //False

//Lose Equality (doesnt care for type, if type doesnt matches, it converts right side type to left side one, and it will only check value)

console.log(1 == 1); //TRUE
console.log('1' == 1);  //True
//Lose equality -> it will see left side of operator, it is a string, then it will convert another side var to sam type (string)
//It will look like this -> ('1' == '1'). Both have same values, so we get true

console.log(true == 1); //True
//It will convert 1 to boolean
*/












//***********************TERNARY/CONDITIONAL OPERATORS************************* */

//If a customer has more than 100 points they are gold, otherwise they are silver

/*
let points = 110;

let type = points > 100 ? 'gold' : 'silver';
//We will put a condition then ? , if it is true then type will be gold, otherwise(:) it will be silver
//Starts with a condition -> Ternary operator

console.log(type);

let score = 90;
let typeCustomer = score > 100 ? 'gold' : 'silver';
console.log(typeCustomer);
*/













/***********************************LOGICAL OPERATORS***************************** */

//To make decisions based on logical conditions
//3 logical operators in JS

//Logical AND (&&)
//Returns true if both operands are true

// console.log(true && true);
// console.log(false && true);
// console.log(true && false);
// console.log(false && false);

/*
let highIncome = true;
let goodCreditScore = true;
//We want to ensure applicant has high income and good credit score

let eligibleForLoan = highIncome && goodCreditScore;

console.log(eligibleForLoan);


//LOGICAL OR ||
//Return trur if one of operands is true

let moreIncome = false;
let goodScore = true;

let eligible = moreIncome || goodScore;

console.log(eligible);
*/

//NOT (!)
//If applicant is not eligible, we want to consider that application as refused
//let applicationRefused = !eligibleForLoan;
//if eligible for loan is true, not will convert it to false, it will give us opposite, application refused is opposite of alligible

/*
let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;

console.log('Eligible', eligibleForLoan);

let applicationRefused = !eligibleForLoan;

console.log('Application Refused', applicationRefused);
*/








/********************LOGICAL OPERATORS WITH NON- BOOLEAN********************** */

//result of logical operators depend upon value of operands

//FALSY VALUES( false)
   // undefined
   // null
   // 0
   // false
   // ''
   // NaN (not a number)

//Anything that is not falsy -> TRUTHY


//What if we have value like false || 1 || 2, we get 1
//Evaluation starts from right, as we fnd over truthy value it returns that doesnt matter if there are more on right side
//This is called short-circuiting, others are ignored after getting truthy value

//Real example

/*
let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor);
//If user has selected color we will get user color
*/


/*
let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor);
//If user has not selected color we will get default color which is blue
*/

//With this technique, we can provide default values

















/**************************************BITWISE OPERATORS************************************ */

//1 =      00000001 (8 BITS)  //Decimal to binary
//2 =      00000010
//Res =    00000011   Bitwise operator OR -> atleast one true -> true
//Bitwise and -> both 1 -> 1

/*
console.log(1 | 2);
console.log(1 & 2);
*/

//Real world Example

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
 myPermission = myPermission | readPermission | writePermission;

let message = (myPermission & readPermission) ? 'yes' : 'no';

console.log(message);

//myPermission = myPermission  | writePermission;

//let message = (myPermission & readPermission) ? 'yes' : 'no';

//console.log(message)














/******************************OPERATOR PRECEDENCE******************************** */
/*
let x = 2 + 3 * 4

console.log(x);   //14   // * has higher precedence

let y = (2 + 3) * 4;

console.log(y);   //20    
*/









/************************ Swapping******************* */

let a = 'red';
let b = 'blue';


let temp = a;
a = b;
b = temp;


console.log(a);
console.log(b);