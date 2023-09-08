//This is my first js code

/*
console.log("Hello World");
*/


/********************************Declaring Variables**************************/

/*
let name;
console.log(name);
*/

//By default, variables we define in js, their value is undefined

//We can initialize this variable

/*
let name = 'Fakhra'
console.log(name);
*/

//Now instead of undefined, you will see Fakhra on console








/*************RULES FOR NAMING THE VARIABLES*****************/
//1. Can not be a reserved keyword(let, if, else, var and so on). We will get an error if we use these reserved names.
/*let if = 'Fakhra'  //ERROR
console.log(name);*/
//2. Should be meaningful(descriptive names)
//3. Can not start with a number(1name ->meaningless)
//4. Can not contain space or hyphen(-). So if there are multiple words, we need to put them together(camel notation -> firstName)
//5. Are case-sensitive (firstName, FirstName are different)


//Decalaration and Initialization

//1. let firstName = 'Fakhra', lastName = 'Rabbani';
//2. let firstName = 'Fakhra', lastName ;
//3. let firstName , lastName ;
//4. Modern Best Practice
//let firstName = 'Fakhra';
//let lastName = 'Rabbani';






/*************************************Constants****************************************************** */

/*
let interestRate = 0.3; //Initail Value, can be changed later
interestRate = 1;
console.log(interestRate);
*/

//value of constant cant change
/*
const let interestRate = 0.3; //ERROR
interestRate = 1;
console.log(interestRate);
*/





/*******************************PRIMITIVE TYPES****************************************************** */

//TWO Categories
//1. Primitive/ Value Types
//2. Reference Types

//Primitive -> string, number, boolean, undefined, null

/*
let name = 'Fakhra';                  //String Literal
let age = 18;                         //Number literal
let isApproved = false;               //boolean literal
//let firstName;                      //By default, its value is undefined
let firstName = undefined;            //We can also explicitly initialize it with undefined
let selectedColor = null;             //We use null where we want to clear the value of variable


console.log(name, age, isApproved, firstName, selectedColor);
*/











/********************************************Dynamic Typing************************************ */

//JS is dynamic language

//TWO Types of Languages
//1. Static
//2. Dynamic

//In static, type of variable cant be changed in the future -> string name = 'John';
//In dynamic, type of variable can be changed in run time -> let name = 'John';

/*
let name = 'Fakhra';                  
let age = 18;                         
let isApproved = false;               
let firstName = undefined;           
let selectedColor = null;   
*/ 

//On console, we can check type of variable by typeof and then we can change type of the variable and check it again. This is dynamic language
//In JS, we dont have two types of numbers(floating point and integers). All numbers are numbers.
//Type of undefined is undefined. Undefined is a type but also a value
//Type of selectedColor is object











/****************************OBJECTS******************************* */

//Reference Type -> Objects, Arrays, Functions

//Object -> Multiple related variables in an object
//Name, age -> Person, Instead of makin 2 variables(name, age) we can make one object(Person) 
//{} //object literal
//properties of object(variables) -> keyvalue pairs (one or more)
//name, age ->2 keys(properties)

/*
let person = {
    name: 'Fakhra',
    age: 18
}

console.log(person);
*/

//2 ways to work with these properties

//First Way (Dot Notation)
//By dot notation, we can access tha property, change it, read it
//Easier, short, clean -> Default choice

/*
person.name = 'faria';

console.log(person.name);
*/

//Other Way (Bracket Notation) 
//Sometimes, u dont know the name of property until run time (let selection = 'name';) - dynamic way -> choice this

/*
person['name'] = 'Aiman';

console.log(person['name']);
*/












/****************************ARRAYS************************************** */

//Array to store list(list of objects etc)
//[] -> Array literal and they declare an empty array

/*
let selectedColors = ['red', 'blue'];
console.log(selectedColors);
*/

//To access an element in array, we use index
/*
console.log(selectedColors[0]);
*/

//Javascript is dynamic, so type of objects can be changed, links of array are dynamic

//We can add third item to array like this 

/*
selectedColors[2] = 'green';

console.log(selectedColors);
*/

//We can store different types in an array , not like other languages in which type has to be same to store elements in an array

//We can make the last element of array a number, so we will have 2 strings and 1 number


/*
selectedColors[2] = 1;
console.log(selectedColors);
*/

//Objects and size of array are dynamic
//Array is an object, so like object.  array also has properties and we can use dot notation
//Type of selected colors on console is object, so array is an object in javascript
//Using dot-notation, we can see properties of array which are inherited from somewhere
//Length property returns no of items or no of elements in an array
/*console.log(selectedColors.length);*/

//Array is a data-structure which is used to represent/store a list of items



















/**********************************FUNCTIONS********************************************** */


//Functions are one of the fundamental building blocks of javascript
//Function is set of statements that perform a task that calculates value

/*
function greet()
{
    console.log('Hello World');
}

//Calling Function
greet();
*/

//Our function can take inputs also
//name is a variable or parameter which is only meaningful inside this function, it will not be accessible outside the function
//We add + for concatenation and then we add name after for input
//For calling function, we need to pass name parameter, like John as argument
//Argument is actual value of supply for the parameter

/*
function greet(name){
    console.log('Hello ' + name);
}

greet('Fakhra');

//We can reuse this function and change input
greet('Aliha');
*/

//Function can have multiple parameters separated by commas

/*
function greet(name, lastName){
    console.log('Hello ' + name + ' ' + lastName);
}
*/
//We need to pass 2 arguments for this function. If we eill not pass the second argument then we will get undefined as default value of variables in javascript is undefined
/*
greet('Fakhra');
greet('Aliha');
*/

/*
greet('Fakhra', 'Rabbani');
*/











/*************************************************TYPES OF FUNCTIONS******************************* */

//This function is performing a task to display something on console
/*
function greet(name, lastName){
    console.log('Hello ' + name + ' ' + lastName);
}

greet('Fakhra', 'Rabbani');
*/





//Functtion to calculate a value
/*
function square(number){
    return number * number;
}
*/
//square(2);
//The value returned can be used to initialize any variable
//Like we can declare a variable number and initialize it with that
/*
let number = square(2);
console.log(number);
*/
/*
console.log(square(2));
*/
//We have two function calls here in this one line code, square(2) is a function call and console.log() is another function call


//Function can display something, calculate something and also can return something
