/*******************************if.....else************************** */

//Two Types of conditional statements
//1. if...else, 2. switch case
//1. if...else

//Hour
//If hr is bw 6am and 12pm: good morning
//If hr is bw 12pm and 6 pm: good afternoon
//otherwise: good evening

/*
let hour = 10;

if(hour >= 6 && hour < 12){
    console.log('Good Morning');
}
else if(hour >= 12 && hour < 18){
    console.log('Good afternoon');
}
else{
    console.log('Good evening');
}
*/









/**********************************SWITCH CASE*************************************** */

/*
let role;

switch(role){
    case 'guest':
        console.log('Guest User');
        break;

    case 'moderator':
        console.log('Moderator User');
        break;

    default:
        console.log('UnKnown User');
}
*/
/*
let role = 'guest';

switch(role){
    case 'guest':
        console.log('Guest User');
        break;

    case 'moderator':
        console.log('Moderator User');
        break;

    default:
        console.log('UnKnown User');
}
*/


//We can compare value of variables againt bunch of other values in switch case

/*
let role = 'guest';

if(role === 'guest') console.log('Guest User');
else if(role === 'modderator')  console.log('Moderator User');
else console.log('UnKnown User');
*/
//if...else better choice

















//LOOPS (Repetition)
//1. For loop
// 2. While loop
// 3. Do While loop
// 4. For in loop
// 5. For of loop


/******************************************For************************************** */

//for(initial expression; condition; increment expression)

/*
for(let i = 0; i < 5; i++){
    console.log('Hello World', i);
}

//Print odd no
for(let i = 1; i <= 5; i++){
    if(i % 2 !== 0)
    console.log(i);
}
*/

/*
for(let i = 5; i >= 1; i--){
    if(i % 2 !== 0)
    console.log(i);
}
*/







/******************************************WHILE LOOP****************************** */

/*
let i = 0;
while(i <= 5){
    console.log(i);
    i++;
}
*/






/***************************************DO WHILE LOOP**************************** */

/*
let i = 9;
do {
    console.log(i);
    i++;
}while(i <= 5);
*/






/**************************************INFINITE LOOPS******************************** */

/*
let i = 0;
while(i < 5){
    console.log(i);
   // i++;
}
*/

/*
while(true){

}
*/

/*
do{
    
}while(true);
*/

/*
let x = 0;
do{
    
}while(x < 5);
*/

/*
for(let i = 0; i < 10;){

}
*/

/*
for(let i = 0; i > 0; i++){

}
*/


//Avoid infinite loops










//Iterate over properties of an object or an array ->for...in
//Iterate over elements or items in an array -> for...of

/***************************************For...In************************************************** */
//Iterate over properties of an object or an array

//Person Object with 2 properties

/*
const person = {
    name: 'Fakhra',
    age: 18
};

//key->name of property of objeect

for(let key in person)
   console.log(key);    //name, age 

//to display value? 
//Dot notation -> person.name
//Brcaket notation -> person['name']

//We cant do person.key it will result undefined but we can do person[key] 

for(let key in person)
   console.log(key, person[key]);    //name Fakhra, age 18

//Array
const colors = ['red', 'green', 'blue'];

for(let index in colors)
   console.log(index);

//To get element

for(let index in colors)
    console.log(index, colors[index]);


*/








/**********************************FOR OF LOOP****************************************** */
//Iterate over elements or items in an array
//Ideal way to iterate over arrays -> for of loop

//With this loop, we dont need to deal with index or bracket notation to access element

/*
const colors = ['red', 'green', 'blue'];

for(let color of colors)   //color will hold elements 
   console.log(color);
*/











/*************************************BREAK AND CONTINUE************************** */

//Break -> jump out
//Continue -> Move to next iteration


/*
let i = 0;
while(i <= 10){
    console.log(i);
    i++;
}
*/



//Somwtimees, we want to jump out of loop, there we use break keyword

/*
let i = 0;
while (i <= 10) {
    if (i === 5) break;        // 0 to 4 print
    console.log(i);
    i++;
}
*/



//I wanna see if i is even no or not
/*
let i = 0;
while (i <= 10) {

    if (i % 2 === 0) {
        i++;
        continue;              //We get odd numbers only
    }
    console.log(i);
    i++;
}
*/

//By continue, it will jump to the beginning of the loop and contyinuees execution of next statement





















////////////////////////////EXERCISES





/*******************************************MAX OF TWO NUMBERS**************************************************************/
//Exercise-> Write a function that takes 2 numbers and returns the maximum of the two

/*
let number = max(4, 4);

console.log(number);
*/

/*
function max(a, b) {
    if (a > b)
        return a;
    else
        return b;
}
*/

/*
function max(a, b){
    if (a > b)
        return a;
    return b;
}
*/

//Conditional statement
//(condition) ? a : b
/*
function max(a, b) {

   return (a > b) ? a : b;
}
*/














/********************************************** LANDSCAPE ********************************************************************************/

//I want to implement a function landscape, it takes 2 parameters an returns true if width > height means it is landscape


//console.log(isLandscape(300, 600));

/*
function isLandscape(width, height) {
    return (width > height) ? true : false;
}
*/

/*
function isLandscape(width, height) {
    return (width > height);
}
*/












/********************************************** FIZZBUZZ ALGORITHM (INTERVIEW) **************************************************************/

//We give it a input and it returns

//If no is divisible by 3, we get -> fizz
//If no is divisible by 5, we get -> buzz
//If no is divisible by both 3 and 5 like 15, we get -> fizzbuzz
//If no is not divisible either by 3 or 5, we get that -> number back(input)
//If we dont pass the number like we pass string, we will get a message -> Not a number


//const output = fizzBuzz(false);
//console.log(output);

/*
function fizzBuzz(input) {

    if (typeof input !== 'number')
        return 'Not a number';

    if ((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz';

    if (input % 3 === 0)
        return 'Fizz';

    if (input % 5 === 0)
        return 'Buzz';

        return input;
}
*/


//In javascript, we have a specific vaalue called Not a number(NaN);

/*
function fizzBuzz(input) {

    if (typeof input !== 'number')
        return NaN;

    if ((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz';

    if (input % 3 === 0)
        return 'Fizz';

    if (input % 5 === 0)
        return 'Buzz';

    return input;
}
*/

//Type of NaN is number, but its value is not a mathematical number

















/********************************************SPEED LIMIT *************************************************************/

//Speed Limit = 70
//If car drives undeer speed limit or exact 70(speed limit), we will get msg -> OK
//For every increase of 5 in speed limit, they will get 1 point
//If i drive 75, i get 1 point
//If i drive at 72, im still good, we will get OK msg
//5 -> 1 point
//We need to use built-in javascript function -> Math.floor(), we can give this a floating number and it converts into greatest no
//In console, if we type Math.floor(1.3) we get 1
//If we pass 80, we get 2 points
//If we drive at 180, our license is suspended
//More than 12 points -> License suspended




//If speed is more than speed limit, then we need to calculate points
//(speed - speedLimit) / 5


//checkSpeed(130);


/*
function checkSpeed(speed) {

    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint)
        console.log('OK');
    else {
        const points = Math.floor((speed - speedLimit) / kmPerPoint);

        if (points >= 12)
            console.log('License Suspended');
        else
            console.log('Points', points);
    }
}
*/


//Removing indentation

/*
function checkSpeed(speed) {

    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint) {
        console.log('OK');
        return;
    }
        
    const points = Math.floor((speed - speedLimit) / kmPerPoint);

    if (points >= 12)
        console.log('License Suspended');
    else
        console.log('Points', points);
        
   
}
*/

















/********************************************Show Numbers *************************************************************/

//We need to pass a parameter like 10, it will display numbers from 0 to 10, and will tell whether that number is odd or even

//showNumbers(10);

/*
function showNumbers(limit) {

    for (let i = 0; i <= limit; i++)
    {
        if (i % 2 === 0)
            console.log(i, 'EVEN');
        else
            console.log(i, 'ODD');
    }
    
}
*/

/*
function showNumbers(limit) {

    for (let i = 0; i <= limit; i++) {

        const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
        console.log(i, message);
    }

}
*/

















/********************************************  COUNT TRUTHY  *************************************************************/
//Take an array and returns truthy elements in that array


//TRUTHY, FALSY VALUES

/*
const isActive = true;  //Boolean True
if (isActive) console.log('Hello');
*/

//In if condition, it can be number, object, boolean

/*
const name = 'Fakhra';  //Truthy Value, not a boolean true
if (name) console.log('Hello'); 
*/

/*
const name = '';  //Falsy Value
if (name) console.log('Hello'); 
*/







//FALSY VALUES IN JAVASCRIPT
//Falsy
//undefined
//null
//''
//false
//0
//NaN



//Function that returns no of truthy values

//const array = [ 1, 2, 3];
//Three truthy valued

//const array = [0, 1, 2, 3];
//Three truthy values because 0 is a falsy value



/*
const array = [ 0, null, undefined, '', 1, 2, 3, 4];

console.log(countTruthy(array));


function countTruthy(array) {
    let count = 0;
    for (let value of array)
        if (value)
            count++;
    return count;
}
*/

















/********************************************  STRING CHECK  *************************************************************/
//Function -> Show Properties
//We will pass an object and fuction will tell all properties of that object

/*
const movie = {
    title: 'a',
    releaseYear: 2019,
    rating: 4.5,
    director: 'b',

};

showProperties(movie);  //We will see string properties (title a director b)

//We will use for in loop to iterate over properties of this object
//key will hold name of one of these properties on each iteration
function showProperties(obj) {
    for (let key in obj)
        // console.log(key);  // title   releaseYear   rating   director
        //Now we need to get value of eacg of these and check typeof

        if (typeof obj[key] === 'string')
            console.log(key, obj[key]);


}
*/

















/********************************************  SUM OF MULTIPLES *************************************************************/

//Function
//We give it a limit
//It returns sum of all multiples of 3 and 5 from 0 off to this limit
//What are multiples of 3 and 5?

/*
console.log(sum(10));

//Limit -> 10
//Multiples of 3 -> 3, 6, 9
//Multiples of 5 -> 5, 10
//If we add these numbers, result -> 33

function sum(limit) {
    let sum = 0;

    for (let i = 0; i <= limit; i++)
        if (i % 3 === 0 || i % 5 === 0)
            sum += i;

    return sum;

}
 */

















/********************************************  GRADE *************************************************************/

//Calculate grade of a std, pass marks array to the function
//Function first calculates average grade
//0-59: F
//60-69: D
//70-79: C
//80-89: B
//90-100: A

/*
const marks = [ 80, 80, 50];
//Avg Grade: 70

console.log(calculateGrade(marks));

*/

/*
function calculateGrade(marks) {

    let sum = 0;

    for (let mark of marks) {
        sum += mark;
    }

    let avg = sum / marks.length;

    if (avg < 60) return 'F';
    if (avg < 70) return 'D';
    if (avg < 80) return 'C';
    if (avg < 90) return 'B';
    return 'A';
}
*/


/*
function calculateGrade(marks) {

    
    const avg = calculateAverage(marks);

    if (avg < 60) return 'F';
    if (avg < 70) return 'D';
    if (avg < 80) return 'C';
    if (avg < 90) return 'B';
    return 'A';
}

function calculateAverage(array) {

    let sum = 0;

    for (let value of array) {
        sum += value;
    }

    return  sum / array.length;
}
*/

















/********************************************  STARS *************************************************************/
/*
showStars(5)

function showStars(rows) {

    for (let row = 1; row <= rows; row++) {

        let pattern = '';

        for (let j = 0; j < row; j++)
            pattern += '*';
           console.log(pattern);
       
    }
        
  
}
*/

















/********************************************  PRIME NO *************************************************************/

//Prime -> Whose factors are only 1 and itself, it cant be divided evenly to other numbers
//Composite

//12 -> 1, 2, 3, 4, 6, 12
//12 is comppsite as it can be divided by its factors evenly
//Prime no in contrast has only 2 factors (1 and itself)
//11 -> 1, 11
//13 -> 1, 13

//showPrimes(10);

/*
function showPrimes(limit) {

    for (let no = 2; no <= limit; no++) {

        let isPrime = true;

        for (let factor = 2; factor < no; factor++) {
            if (no % factor === 0) {
                isPrime = false;
                break;
            }                
        }

        if (isPrime) console.log(no);
        
    }
}
*/

//Single Responsibility Principle -> Each function performs only one task
/*
function showPrimes(limit) {

    for (let no = 2; no <= limit; no++) {

        if (isPrime(no)) console.log(no);

    }
}

function isPrime(no) {

    for (let factor = 2; factor < no; factor++) {
        if (no % factor === 0) {
            return false;
        }
    }
    return true;
}
*/