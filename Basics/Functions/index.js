
/******************************************  FUNCTION DECLARATIONS VS EXPRESSIONS ***********************************************/

//2 Ways for defining a function

//Function Declaration
/*
function walk() {
    console.log('walk');
}
*/

//Function Expression
//We start by declaring a variable or constant
//We set that to function
//In JS, function are objects
//So setting variables to functions is similar to setting variables to objects
/*
let run = function () {
    console.log('run');
};
*/
//let x = 3;

//We dont put a semi-colon while defining a function using function declaration, it really doesnt matter, noe rror if we put
//But We  put a semi-colon while defining a function using function expression

//This function defined by function expression doesnt have a name
//Its syntax is similar to what we have in function declaration
//We can give it a name but then we will refer to it as named function expression


//Named Function Expression
/*
let run = function walk() {
    console.log('run');
};
*/

//Or we can exclude tha name
//With this, we will have anonymous function expression

//Anonymous Function Expression
/*
let run = function () {
    console.log('run');
};

//So we have defined an anonymous function , which doesnt have name and set run to reference it
//So now we can call this anonymous function using this reference just like how we call function in JS
run(); //run

//We can declare another variable move and set it to run
//Now both move and run are referencing the same anonymous function which is one object in memory
//So, we can call that anonymous function using this other reference(move)

let move = run;
move();  //run
*/

























/******************************************  HOISTING ***********************************************/
/*
//Function Declaration
function walk() {
    console.log('walk');
}

//Function Expression
let run = function () {
    console.log('run');
}
*/

////////////////////////////Key difference bw function declaration and function expression
//We can call this function which is defined by using function declaration syntax before it is defined
//Like this
/*
walk();  //walk
function walk() {
    console.log('walk');
}

//We get the msg walk on console
//We cant do this with function which is defined by using function expression syntax
//If a call run before it is initialized, we get the error

run(); //Cannot access 'run' before initialization //index.js:111 Uncaught ReferenceError //Run is not defined
let run = function () {
    console.log('run');
}

//This is exactly like using a variable constant before it is defined
console.log(x);
let x = 1;
//We get the same error //Reference error, not defined


//We can call this function which is defined by using function declaration syntax before it is defined
//But why is that?
//The reason for this is that because our JS engine when executes this code
//It moves all the function declarations to the top
//So, at run time our code will look like this
function walk() {
    console.log('walk');
}
walk();
*/
//This is what we call HOISTING

//So, if someone asks in interview, what is hoisting in JS
//Hoisting is process of moving function declarations to the top of the file
//This is done automatically by JS engine that is executing this code
//So, this is the reason we can call the functions which are defined using function declarations before their definiton

























/****************************************** ARGUMENTS ***********************************************/

//JS is dynamic language
//So we can declare a variable, set it to a number and then change its type and set it to a string
/*
//Thats perfectly fine from perspective of JS engine
let x = 1;
x = 'a';
//This is one of the characteristics of dynamic language
//But we have the same concept in the arguments of a function

//Im defining a function sum that has 2 parameters a and b
//We simply return a + b

function sum(a, b) {
    return a + b;
}

console.log(sum(1, 2)); //3

//In JS, it doesnt matter if this function has 2 parameters
//We can pass only one argument

console.log(sum(1));  //NaN
//In this case, we get Not a number
//Because here a is 1 and b by defualt is undefined
//So, when we have 1 plus undefined, the result is not a number
//1 + undefined = NaN
//his is not a valid arithmetic operation

//Same happens when we dont pass any arguments, we dont get any error, we get NaN
console.log(sum());  //NaN

//We can also pass additional arguments
//Thats perfectly valid JS code
console.log(sum(1, 2, 3, 4, 5));  //3
*/

//We sstill get 3 because only first 2 arguments are used

//What if we want to have flexibilty to pass as many arguments we want and get their sum
//Well every function in JS has special object called arguments
/*
function sum(a, b) {
    console.log(arguments);  //Arguments(5) [1, 2, 3, 4, 5, callee: ƒ, Symbol(Symbol.iterator): ƒ]
    return a + b;
}

console.log(sum(1, 2, 3, 4, 5)); //3
*/
//Argument object kind of looks like an array but its not an array, its an object
//The keys we have in this object
//0: 1
//1: 2
//2: 3
//3: 4
//4: 5
//These keys are indexes of the arguments we passed to this function
//length: 5, this property returns length/no of arguments
//callee : ƒ sum(a, b), this property returns currently executed function
//So, this the argument object

//So, when we have a function with varying no of parameters
//To work with all the arguments that are passed to this function



//Lets say we want to change this function to return sum of all arguments passed
//Here is a simple algorithm
/*
function sum(a, b) {
    //We declare a variable called total and set it to 0
    let total = 0;
    //We can use for...of loop to iterate over this argument object
    for (let value of arguments)
        total += value; 
    return total;
}

//We can use for..of loop on arrays but technically this loop can be used on any object that has an iterator
//So the plane objects we create with object literal syntax dont have an iterator
//But this arguments object has iterator so we can use for..of loop

console.log(sum(1, 2, 3, 4, 5)); //15

//We can remove parameters as we are working with arguments object
//Ans arguments object can access the arguments that are passed here
//We are not referencing a and b anywhere in the body of this function
//So we can simplify this code and remove the parameters

function sum() {
    let total = 0;
    for (let value of arguments)
        total += value;
    return total;
}
*/

























/****************************************** REST OPERATOR ***********************************************/

//In modern JS, if u want to have a function with many number of parameters u can use the rest operator
//We We modify declaration of function and add a parameter called args
//We prefix it with 3 dots ...args, this is what we call the rest operator
//Dont confuse it with a spread operator
//Because spread operator looks exactly like this, earlier we used in the ararys
//with the spread operator, we can spread an array which means taking its individual elemnets
//When we use this along with parameter of a function, we refer to it as the rest operator
/*
function sum(...args){
    console.log(args);  //6) [1, 2, 3, 4, 5, 6]0: 11: 22: 33: 44: 55: 6length: 6[[Prototype]]: Array(0)

}
//args in an array of 6 elements, this is a real array
//If we remove 3 dots, that means this function has single parameter called args
console.log(sum(1, 2, 3, 4, 5, 6));
*/
//When we apply rest operator to parameter of a function, we can pass very number of arguments
//Rest operator will take all of them and put them in an array

//Now if we want to get sum of all numbers in the array, we can use the reduce method
/*
function sum(...args) {
    return args.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 4, 5, 6));  //21
*/
//In modern JS, we can achieve the same functionality with less code
//Instead of defing a total var and looping over arguments object, we can have one line of code



//Imagine we are gonna use this function to calculate total cost of items in a shopping cart
//Lets say we wanna have a discount factor, so we will add a parameter in function
//REname args to prices, we are passing prices of all items in a shopping cart

//Istead of returnig sum of all items in shopping cart in prices array, we are gonna store the sum in total
//Then we will return total times 1 minus discount
//This will return final price after the discount has been counted
/*
function sum(discount, ...prices) {
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
}

console.log(sum(0.1, 20, 30));  //45
*/


//Iam gonna ass one paramete after prices rest operator, called sumValue
/*
function sum(discount, ...prices, sumVAalue) {
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
}

console.log(sum(0.1, 20, 30, 1));  
*/

//We get this error
//Uncaught SyntaxError: Rest parameter must be last formal parameter
//So we cannot have a parameter after using the rest operator
//This is why we call it rest because we can have 0 or more parametere before it but we cant have parameters after it
//This is the reason we call it rest operator

























/****************************************** DEFAULT PARAMETERS ***********************************************/

//There are times when we want to supply default vaues to the parameters of the function
//Lets imagin we want to write a function for calculating the total interest
//So here we have 3 parameters principal, rate, years
//Formula to calculate interest pricipal * rate / 100 * year

/*
function interest(principal, rate, years) {
    return principal * rate / 100 * years;
}

console.log(interest(10000, 3.5, 5));
//1750 This is total interest we need to pay
*/

//What if we have default values for interest rate and no of years?
//We can use rate = rate || 3.5;
//So, if rate has a value that is truthy then we will use that otherwise we are gonna use 3.5
//So, we can use a logical or operator to give a variable deafult value

//Similarly we can set years to years || 5

//If we exclude rate and years value while calling function, default values will be used
/*
function interest(principal, rate, years) {
    rate = rate || 3.5;
    years = years || 5;

    return principal * rate / 100 * years;
}

console.log(interest(10000));
//1750 We still get the same result
*/

//We have a cleaner way to achieve the same thing
//Instead of logical operators, we can set the default values direct in parameter list
/*
function interest(principal, rate = 3.5, years = 5) {
    return principal * rate / 100 * years;
}

console.log(interest(10000));
//1750 We still get the same result
*/

//There is just one confilict here
//Once u give a parameter defualt value in list, u have to give all other parameters after that a default value
//We will get NaN if we dont give other parameters default value
/*
function interest(principal, rate = 3.5, years) {
    return principal * rate / 100 * years;
}

console.log(interest(10000));  //NaN

//We got NaN because years doesnt have a value, it is undefiend
//That why result is NaN

//What if we pass 5 for years 
console.log(interest(10000, 5));  
//This is confusing for JS engine because it doesnt know if 5 should be used for rate or for the years
//We still get the same result NaN
//Because 5 is used for rate and year is still undefined



//There is trick
//We can pass undefined for second parameter
//With this rate  will be set to 3.5 and year will be set to 5
console.log(interest(10000, undefined, 5));  //1750
*/

//But this code is ugly

//Best pratcice whenever u want to give a parameter defaukt value, make sure that parameter is the last parameter in the list
//Or give all parameters after that a default value

























/****************************************** GETTERS AND SETTERS ***********************************************/

//Special kind of methods in obejcts -> Getters and Setters
/*
const person = {
    firstName: 'Fakhra',
    lastName: 'Rabbani'
};

//Somewhere, in our application we want to write fullname,
//So we can do this

console.log(person.firstName + ' ' + person.lastName); //Fakhra Rabbani

//Or better to use a template literal
console.log(`${person.firstName} ${person.lastName}`); //Fakhra Rabbani
*/
//Problem with this approac is that maybe there are multiple places in our application where we want to use this full name
//But we will have to repeat this template literal in multiple places

//Better approac is to define a method full name in the object and move template literal expresion there
//Whenver we want to display a persons fullname, we simply call that method

//firstName: function() { }
//Instead od adding like this like keyvalue pair, we can add it as a function without function keyword
//So if we want to write a function outside, what we do?
//Write function, name of function, parenthesis and curly brcase
//function fullName() { }
//However, when we write it inside an object, we dop function keyword
/*
const person = {
    firstName: 'Fakhra',
    lastName: 'Rabbani',
    fullName() {
        return `${person.firstName} ${person.lastName}`;
    }
};

//With this, whenever we need to use a persons fullName we call this function

console.log(person.fullName()); //Fakhra Rabbani
*/

//However, there are couple of prblms with this approach
//The first prblm is that this is read only, we cant set persons FullName from the outside
//person.fullName = 'Josh Smith';
//It would be nice if we could do this, The first and last name would aoutomaticaly be set to Josh and Smith
//The other issue is that i wont like to call it with a method
//It will be nicer if we could treat it as property so we can drop prenthesis like this
//console.log(person.fullName);

//How do we do this?
//Thats where getters and setters come

//Getters -> Acccess properties in an object
//Setters -> Chnage (mutate) them

//IN this object, we should add a getter, with that getter we can use fullname as property
//With setter, we can set it from the outside

//We prefix fullName method with get, now it is a getter
//So, we can access fullNAme like a property
/*
const person = {
    firstName: 'Fakhra',
    lastName: 'Rabbani',
    //Getter
    get fullName() {
        return `${person.firstName} ${person.lastName}`;
    }
}

console.log(person.fullName); //Fakhra Rabbani
*/

//Now to enable to set this property outside, we need to add setter
//This method will need a parameter, we can call it value, value of this parameter will be whta we will have on right side of assigment operator
//Lets say it is a string with space, so we can use split method
//Split will return an array, we can call it parts
//Then we can set first and last name
/*
const person = {
    firstName: 'Fakhra',
    lastName: 'Rabbani',
    //Getter
    get fullName() {
        return `${person.firstName} ${person.lastName}`;
    },
    //Setter
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

console.log(person); //{firstName: 'Fakhra', lastName: 'Rabbani'}

person.fullName = 'Josh Smith';

console.log(person); //{firstName: 'Josh', lastName: 'Smith'}

//Firstname and lastname properties are updated
//Also fullName its value is ... //fullName: (...)
//Somwtimes, when u login objects in the console, u see properties with this kind of value
//With tooltip, we can see, this is agetter
//In order to read it we need to click on (...)
//Now this getter method is executed
//Result is returned in console
*/

























/****************************************** TRY AND CATCH ***********************************************/
/*
person = {
    firstName: 'Fakhra',
    lastName: 'Rabbani',
    get fullName() {
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

console.log(person);

person.fullName = 'Josh Smith';

console.log(person);

//In last lec, we assumed that value we received at setter parameter is a valid string
//But what if we pass a boolean, that doesnt make sense
//We get error

//person.fullName = true;
//console.log(person); //Error
//Uncaught TypeError: value.split is not a function at set fullName[as fullName]
//Split is not a function because split is a method that belongs to string
//Booleans dont have split method

//What will happen if we pass null or undefined

person.fullName = null;
console.log(person); //Error  */
//Uncaught TypeError: Cannot read properties of null(reading 'split') at set fullName[as fullName]
//We get a different error
//Split method is only available for the strings

//DEFENSIVE PROGRAMMING
//So, here we need to add error handling
//Typically in situations like these, we should do error handling in beginning orr before function or method
//This is what we call DEFENSIVE PROGRAMMING
//So, we wanna make sure that values that are coming in are valid and are in right shape, so we can execute the logic

//So in first line of set method, we should make sure that value is string
//We can use typeof operator
//If typeof value is not equal to string, we should return
//With this, we will no longer see the error message
/*
person = {
    firstName: 'Fakhra',
    lastName: 'Rabbani',
    get fullName() {
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value) {
        if (typeof value !== 'string') return;

        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

console.log(person);

person.fullName = null;

console.log(person);  //{firstName: 'Fakhra', lastName: 'Rabbani'}
*/

//We can see the person object with original first name and last name
//So what we passed here (null) will not take effect

//But sometimes, u wanna report an error in the application
//Thats where we need throw and exception

//Throwing and exception is technical gargdient in a lot of programming languages
//So, instead of returning, we will use throw keyword and then create a new error object
//Error() is a constructor function
//We are calling it using new operator to create a new error object
//As an argument, we can pass an error msg
//So this is how we throw and exception
//Some people confuse errors with exceptions
//Here we can create a new error object, it is just a palne javascript object const e = new Error();
//There is nothing special about it
//But the moment we throw that error -> throw e; we refer to that as exception
//So this is an exceptional situation that should not have had happened
/*
person = {
    firstName: 'Fakhra',
    lastName: 'Rabbani',
    get fullName() {
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value) {
        if (typeof value !== 'string')
            throw new Error('Value is not a string');

        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}
*/
//Now in this method, we have some basic error handling
//This method is throwing an exception
//Somewhere, we need to catch that exception
//Quite often, when we catch an exception, we display an error msg to the user

//We receive this exception at line person.fullName = null;
//So, we need to wrap this line in a try block
/*
try {
    person.fullName = null;
}

//Try block can have one or more statements
//One of these statements can throw an exception

//Now we add catch block after
//In parenthesis, we give an identifier
//This is the error object that we are throwing from here // throw new Error('Value is not a string');
//So, in catch block , we can catch that error object and do something with it
//We can display it on console

//catch (e) {
//    console.log(e);
//}

//As u know, this is only visible to the developers, so an end user will not see this error
//So temporary, we can use the alert function
//This is not something recommended to do as it is poor way of reporting error to user
//The proper way is to display a red label on user interface nut we will learn that later
//For now lets use built-in alert function
catch (e) {
    alert(e);
}

console.log(person); //{firstName: 'Fakhra', lastName: 'Rabbani'}
*/



//Now instead of passing null, im gonna pass an empty string
/*
try {
    person.fullName = '';
}
catch (e) {
    alert(e);
}

console.log(person); //{firstName: '', lastName: undefined}*/

//We dont get any errors
//First name is an empty string and last name is undefined
//This is not desirable
//I want to make sure that our user is typinf first name and last name

//So, when spliting the string, we can check length of array
//if(parts.length is not 2) -> that means something is missing
//So we can throw an exception with different msg
/*

person = {
    firstName: 'Fakhra',
    lastName: 'Rabbani',
    get fullName() {
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value) {
        if (typeof value !== 'string')
            throw new Error('Value is not a string');

        const parts = value.split(' ');
        if (parts.length !== 2) throw new Error('Enter a first and last name');

        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}
try {
    person.fullName = '';
}
catch (e) {
    alert(e);
}

console.log(person);  //{firstName: 'Fakhra', lastName: 'Rabbani'}
*/

//So basically when we throw an exception, the lines after the throw statement are not executed
//We jump out of the method and control moves to the catch block where we catch the exception and do something with it

























/****************************************** LOCAL VS GLOBAL SCOPE ***********************************************/

/*
const message = 'hi';
console.log(message);  //hi

*/

//What happens if i add this message in a code block
/*
{
    const message = 'hi';
}
console.log(message);  //ERROR -> Uncaught ReferenceError: message is not defined
*/

//This is all about scoping

//So scope of a variable that is constant determines where this variable is accesssible
//When we declare let or const, their scope is limited to the block, they are defined
//So, message is accessible inside that block, not outside that block

//Why do we need code block?
//This code block can be a function
//And now we have a constant in this function start()
//Because scope of the constant is limited to the block, it is defined, we cant access this constant outside of this start function
//The same is true, when a const or let is declared in an if block
/*
function start() {
    const message = 'hi';

    if (true) {
        const another = 'bye';
    }

    console.log(another); //Error
}
//console.log(message); //Error

start();  //We get the same reference error
*/

//We have same concept in our loops
//i is variable which is only accessible in this block
//If we go outside of this for lopp block, we  cant access i
/*
function start() {
    const message = 'hi';

    if (true) {
        const another = 'bye';
    }

    for (let i = 0; i <= 5; i++) {
        console.log(i);
    }

    console.log(i); //index.js:890 Uncaught ReferenceError: i is not defined at start
}

start();
*/


//We have 2 functions
//Both have constant message with different values
//This is perfectly valid code because scope of these constant is limited to the block they are defined
//So, we can have constants with same name in different functions
/*
function start() {
    const message = 'hi';
}

function stop() {
    const message = 'bye';
}
*/

//What if we define a variable or constant outside the function
//const color = 'red';
//We dont have any code block here
//This constant has GLOBAL SCOPE

//Global means this constant is accessible everywhere
//We can log color in start function
/*
function start() {
    const message = 'hi';
    console.log(color);
}
start(); //red
*/

//This constant color is accessible in all the functions we have in our prgrm
//What if we have a constant in our function with exact same name?
/*
function start() {
    const message = 'hi';
    const color = 'blue';
    console.log(color);
}
start(); //blue */

//We get blue
//So local variables or local contants in a function take precedence over global variables or constants

//U should avoid defining global variables or constants, that is considered bad practice

//Imagine the color global is a tootbrush and each function is a person
//u dont want to have a tootbrush that is ahred with multiple people
//Each person should have their own tooth brush(local var)

//U should avoid defining global variables or constants, beacuse they are accessible evrywhere and each function can change their vlue
//This will lead to bugs and issues in our prgrm

























/****************************************** LET VS VAR ***********************************************/

/*
function start() {
    for (let i = 0; i <= 5; i++) {
        console.log(i);
    }
    //console.log(i); //Uncaught ReferenceError: i is not defined
}
start();  //0 1 2 3 4 
*/

//In last lec. we learned that i is only accesible in its scope that is in for loop block
//If we try to log this i outside the block we will get an error, i is not defined
//We have the same concept, if we remove curly braces of for loop
//Because in for loop, we have single statement, so scope of i is till there in that block
/*
function start() {
    for (let i = 0; i <= 5; i++) 
        console.log(i);
    console.log(i); //Uncaught ReferenceError: i is not defined
}
start();  //0 1 2 3 4 5
*/




//Lets see what happens when we use var keyword
/*
function start() {
    for (var i = 0; i <= 5; i++)
        console.log(i);
    console.log(i); 
}
start();  //0 1 2 3 4 5 6
*/
//NNo error ocuured
//It turns out that is accessible outside its block(formula)
//This is the issue with var keyword
//When u declare a variable with var, its scope is not limited to the block it is defined
//Its limited to the function in which it is defined


//Before ES6, var was the only way to declare variables
//Now ES6(ES2015): we have let and const to declare variables
//These 2 keywords create block scope variables

//var => function-scope variables
//ES6 (ES62015) => let, const => Block-scoped


//Technically in all programming languages, volor should only be accessible in if block
//But because we have used var, color is accessible anywhere in the function
/*
function start() {
    for (var i = 0; i <= 5; i++) {
        if (true)
            var color = 'red';
    }
    console.log(color);
}
start();  //red*/



//If we use let instead of var, we will get an error because color is not accessible outside the if block
/*
function start() {
    for (var i = 0; i <= 5; i++) {
        if (true) {
            let color = 'red'; //Uncaught ReferenceError: color is not defined
        }
    }
    console.log(color);
}
start();

//So this is the first prblm with var keyword
*/







//The second issue is with global variables

//var color = 'red';
//let age = 30;

//Let me use var outside the function, it will create global variable and attaches global variable to window object in browser
//In browsers we have this window object which is a complex object with lots of properties and methods
//When u want to build front-end application, u are gonna work with this window object a lot
//Window {window: Window, self: Window, document: document, name: '', location: Location, …}

//What matters is that this var keyword attaches this color variable with window object
//If we type window.color on console, we can see color on console

//In contrast, when we use let keyword to define a global variable
//That global variable is not atatched to window object
//If we type window.age on console, we get undefined

//So what is that var atatches to window object?
//Because window object is something central, there is only one instance of window object
//Lets say u are using 3rd party application, if that 3rs party application also has variable with same name, that variable can over-write ur variable
//So u should avoid adding stuff to window object otherwise u are gonna create all sort of issues in ur program



//When we define a function, that function is technically a global function and is added to window object
//If we type window.sayHi() on console, we can see our function is there
/*
function sayHi() {
    console.log('hi');
}
*/
//This is bad practice
//How can we prevent this?
//We can encapsule these functions in diff modules so that they are not added to window objects



//Avoid using var keyword because it creates variables that are function scoped


























/****************************************** THIS KEYWORD ***********************************************/

//This references the object that is executing the current function

//If function is part of object, we call that function method
//If there is method, then this refers that object itself

//If function is regular function, means if function is not paart of object
//This refers to global object which is window object in browser and global in note

//METHOD -> obj
//Function -> global(window, global)


//Im gonna start by creating a video object
//It will have title and play method
/*
const video = {
    title: 'a',
    play() {
        console.log(this);
    }
};

video.play(); //{title: 'a', play: ƒ}
//play: ƒ play()
//title: "a"
//[[Prototype]]: Object

//So, we get our video obejct on the console
//So in this example, because play is a method in video obejct, so this refers to this video object
//We can add a method later in this object and we will get the same result

video.stop = function () {
    console.log(this);
};
video.stop(); //{title: 'a', play: ƒ, stop: ƒ}
*/
//Once again we see our video obejct on console
//Because stop is method in video object






//Now lets look at example of regular functions

//If we log this on console, we are gonna see gloabl object which is window in browser and global in node
/*
function playVideo() {
    console.log(this);
}
playVideo();  //Window {window: Window, self: Window, document: document, name: '', location: Location, …}

//So we get window object






//Now what if it is a constructor function?
//We call the constructor functions using the new operator

function Video(title) {
    this.title = title;
    console.log(this);
};
const v = new Video('a');  //Video {title: 'a'}
*/

//Instead of window object, we have a new object here
//When we use the enw operator, this new operator creates a new empty object like this {}
//and sends this(this.title) which is in constructor function to that empty object
//Instead of console, We add title proprty to new object



//When dealing with regular function, this by default refers to global object
//But if u call a function using the new operator, which is in case of constructor function, this will refer to new empty object







//Another example

//Lets add a new peoprty of array
//Because tags is a array, we can use forEach property in which we need to pass a call back function
//In each iteration, this function will get a tag, we can display that tag on console
/*
const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(tag);
        });
    }
};

video.showTags();  // a b c
*/


//We get a b c, what if we want to display title after each tag?
/*
const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(this.title, tag);
        });
    }
};

video.showTags(); //undefined a undefined b undefined c
*/

//We get undefined instead of title
//Whats going on here?
//Remove titlle and just display this
/*
const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(this, tag);
        });
    }
};

video.showTags(); //We get window object from this  */
//This is refering to window object
//Shouldnt this refer to video object?
//Now becaause inside we are in call back function, this function is just a regular function
//Its not a method in video object
//The only method we have here is showTags
//Because here it is a regular function, this refers to global object
//So global object is executing this anonymous call back function


//How can we solve this prblm and display title to each tag?
//We have different solutions for it


//The forEach method has 2 parameters, one is a call back functiocn
//The second parameters is thisArg
//We can pass an object here and this will refer to that object
//Here i can pass a new object having firstName
/*
const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(this, tag);
        }, { firstName: 'fakhra' });
    }
};

video.showTags();
//{firstName: 'fakhra'} 'a'
//{ firstName: 'fakhra' } 'b'
//{ firstName: 'fakhra' } 'c'
*/
//We can see this is referring to new object



//In this case, we want our video object
//So as second parameter here, we can pass this because this this will point to showTags method
//So this refers to current object
//Here we are not inside call back function, this is in execution context in showTags method

/*
const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(this, tag);
        },this);
    }
};

video.showTags();
//{title: 'a', tags: Array(3), showTags: ƒ} 'a'
//{ title: 'a', tags: Array(3), showTags: ƒ } 'b'
//{ title: 'a', tags: Array(3), showTags: ƒ } 'c'
*/

//Now with each tag, we can see our video object
/*
const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(this.title, tag);
        }, this);
    }
};

video.showTags();

//a a
//a b
//a c
*/

//Not all methods in JS have ability to pass this as arrgument


























/****************************************** CHANGING THIS ***********************************************/

//This refers to object that is executing current function

//Few different solutions to change value of this

//Lets imagine our forEach method doesnt have second parameter
//How can we change value of this?
//Heres one simple solution

//Before defining forEach method, we can define a  const self and set it to this
//Some people call this that, its one's personal preference, we can call it self or that

//Self is referncing video object
//So, in our call back function we can use self instead of this
//Because value of this changes when a new function is called
//When we go to call back function, this refers to global object
//So, we can use self which is orignal value of this refering to video object

/*
const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        const self = this;
        this.tags.forEach(function (tag) {
            console.log(self.title, tag);
        });
    }
};

video.showTags();  
//a a
//a b
//a c

//This is not preffered but we see a lot in JS applications out there




//Another approach
//Functions are objects in JS

function playVideo() {
    console.log(this);
}

//This function is an object, so it has proeprties and methods which we can access by using dot notation
//Here we have 3 methods apply, bind and call, With these we can change the value of this



//CALL METHOD

//The simplest is the call method
//Parmeter of this method is thisArg, so here we can pass an object and this will refer to that object
//For example, i can pass a new object with name property

playVideo.call({ name: 'Fakhra' });  //{name: 'Fakhra'}
//We see this new object on console

//In contrast if i call this function like standard calling, this refers to window object
playVideo();    //Window {window: Window, self: Window, document: document, name: '', location: Location, …}

//This is benefit of using call method



//APPLY METHOD
//Apply method is similar to call method

playVideo.apply({ name: 'Fakhra' });  //{name: 'Fakhra'}
//What we pass as first argument here will be used as value of this
*/


//THE DIFFERENCE BW CALL AND APPLY
//is only about passing arguments

//If playVideo function has multiple parameters suppose a and b
//We can suppply multiple arguments in call method
//But with apply method, we need to pass them as an array
//This is the only difference

/*
function playVideo(a, b) {
    console.log(this);
}

playVideo.call({ name: 'Fakhra' }, 1, 2);  //{name: 'Fakhra'}
playVideo.apply({ name: 'Fakhra' }, [1, 2]);   //{name: 'Fakhra'}



//There is another method that is bind
//First argument is thisArg
//But this bind method doesnt call our playVideo function
//It returns a new function and sets this to point the thisArg object paramatically
//So no matter how we call tha function, this will always point to the obejct we passed here
//So this returns a new function, we can store the result in a constant and then we can call that function like a regular function

const fn = playVideo.bind({ name: 'Fakhra' });
fn();   //{name: 'Fakhra'}

//In this particular case, we dont need separate constant
//We can immediately call the function that is returned from the bind method
playVideo.bind({ name: 'Fakhra' })();  //{name: 'Fakhra'}

//With call, apply and bind, we can set this to our gven function
*/




//Now lets go to our previous example
/*
const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        const self = this;
        this.tags.forEach(function (tag) {
            console.log(self.title, tag);
        });
    }
};

video.showTags(); 
*/

//We no longer need self constant, we are gonna use this
//However, we know that in forEach method, this refers to global object
//We want to change this
//We can call the bind method here and then pass an object to be used as value of this
//What should we pass here? We should pass this
//Because at now, we are in showTags method and this refers to video object

/*
const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(this.title, tag);
        }.bind(this));
    }
};

video.showTags(); 
//a a
//a b
//a c
*/

//Using bind method is secons solution to solve this problem





//But there is a newer and better solution
//We have ARRROW FUNCTIONS

//The good thing about arrow functions is that they inherit this value
//Lets change this forEach function to arrow function
/*
const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(tag => {
            console.log(this.title, tag);
        });
    }
};

video.showTags();
//a a
//a b
//a c
*/
//We get the same reult without doing anything extra
//The reason for this is that arrow functions inherit this from containing function
//So, in showTags function, this refers too video object
//So when we pass arow function in forEach, the same this value is used
//In other words, this is not new bound to another object




//Three ways to cahnge value of this
//1. Using self approach
//2. Using bind method
//3. Use Arrow function














































//EXERCISE


/****************************************** SUM OF ARGUMENTS ***********************************************/

//Create a function sum that takes varying no of arguments and returns their sum
//We can pass one, two or more arguments
//sum(1, 2, 3, 4) => 10
//Modify sum function to be able to accept an array and still return the same result
//U need to detect if the argument that is passed is an array
//To do that, we do Array.isArray()
//If we pass an array, we get true Array.isArray([]) -> true
//If we pass anything else like a regular object, we get false  Array.isArray({}) -> false
/*
function sum(...items) {  //Rest operator
   return items.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3, 4));  //10

//To have varying no of parameters, we use the rest operator
//Now we can pass as many arguments we want and the rest operator will convert all of them into an array
//To get sum of all items in the array, we can use reduce method


//Now lets work on the challenge
//If we pass array on current implementation, we get array itself back instead of sum
console.log(sum([1, 2, 3, 4]));  //[1, 2, 3, 4]  */
//Lets see why this is happening
/*
function sum(...items) {  //Rest operator
    console.log(items);                 //[Array(4)]
    return items.reduce((a, b) => a + b);
}
console.log(sum([1, 2, 3, 4]));
*/
//Items is an array of array and first element in items arrays is array of numbers
//Because rest operator converts whatever we pass to it into an array
//When we pass an array, rest operator will put that array in an array
//And thats why we dont get sum of the arguments in the array
//How can we solve this?
//We need to check to see if this items array has a single element and the first element is an array itself
//We can do something like this
//if(items.length === 1 && Array.isArray(items[0])), if thats the case, we need to flaten the structure
//So, instead of having an array of arrays, we just want to have an array of numbers
//For that, we use the spread operator
//We set items to a new array which is the array in items by using spread operator like this -> items = [...items[0]]
/*
function sum(...items) {  
    if (items.length === 1 && Array.isArray(items[0]))
        items = [...items[0]];
    return items.reduce((a, b) => a + b);
}
console.log(sum([1, 2, 3, 4]));  //10
console.log(sum(1, 2, 3, 4));    //10
*/






























//EXERCISE


/****************************************** AREA OF CIRCLE ***********************************************/

//Create a circle object using the object literal syntax
//This object should have a radius property that we can read/write to,
//Likw we can set it circle.radius = 2;
//We also should have an area property that is read only, we should not be able to set area from outside but we can read it from outside


//To get the read only property, we need a getter, so we use get keyword for area
//But area property is actually implemented as a method
/*
const circle = {
    radius: 1,
    get area() {
        return Math.PI * this.radius * this.radius;
    }
}

console.log(circle.area);  //3.141592653589793
*/
//We can cahnge the radius by setting it
//But we cant set an area, even if we set, we get previous area
//Because area is read only
//We can see it on console
//circle.radius = 2;
//2
//circle.area
//12.566370614359172
//circle.area = 20;
//20
//circle.area
//12.566370614359172






























//EXERCISE


/****************************************** ERROR HANDLING ***********************************************/

//We did this exercise in array section to count no of occurences in a given array

/*
const numbers = [1, 2, 3, 4, 1];

const count = countOccurrences(numbers, 1);
console.log(count);

function countOccurrences(array, searchElement) {
    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElement) ? 1 : 0;
        return accumulator + occurrence;
}, 0);       
}
*/

//This function has a tiny prblm
//Here we are assuming that the first argument is a valid array
//What if we call this function with a boolean
//const c = countOccurrences(true, 1);
//console.log(c);
//We get errror  //Uncaught TypeError: array.reduce is not a function at countOccurrences
//Booleans dont have reduce method
//Same happens if we pass null or udefined
//When we pass null, we get different error, can not read reduce property

//So, we need to modify this function and add error handling

//If first argument is not an array, i want u to throw an exception
//And add the calling function lines to try catch block
//One of those lines is going to throw an exception
//Catch the exception and log it on the console

/*
function countOccurrences(array, searchElement) {
    //We need to validate first argument
    if (!Array.isArray(array))
        throw new Error('Invalid array');

    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElement) ? 1 : 0;
        return accumulator + occurrence;
    }, 0);
}


try {
    const numbers = [1, 2, 3, 4, 1];
    const c = countOccurrences(true, 1);
    console.log(c);
}

catch (e) {
    console.log(e.message);
}

*/


















