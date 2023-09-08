
/***************************************************  BASICS   *****************************************************************************/

//Objects -> Collection of key value pairs
//Encapsulation of parameters
//For example, we are building an application where we are drawing different kind of shapes like circle, rectangle and so on
//So, we can declare multiple variables around circle like
//We are defining these variables
/*
let radius = 1;
let x = 1;
let y = 1;
*/
//All these variables are highly related and represent circle
//Better approach is to put these variables inside an object
//We can also add another object in one object
//Purpose of object is to group related variablws
//Defining object of circle
/*
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1,
    },
    isVisible: true,
}
*/

//Functions
/*
function draw() { }
function move() { }
*/
//These functions are highly related to variables defined above
//So, instead of defining these functions outside alone, its better to define them inside circle object
//In this way, we will have a circle object and access to all the properties and functions
/*
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1,
    },
    isVisible: true,
    //Adding function in an object
    draw: function () {
        console.log('draw');
    }

}
//We can access all of these by dot notation
circle.draw();
*/

//This was object-oriented style of programming (OOP)
//In oop, we see a program as collection of objects which talk to each other to perform some functionality
//In oop, if a function is part of an object, we refer that function as method

















/***************************************************  FACTORY FUNCTIONS  **********************************************************************/

//Imagine u need to create two circle objects

/*
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1,
    },
    isVisible: true,
    
    draw: function () {
        console.log('draw');
    }

}


const circle2 = {
    radius: 1,
    location: {
        x: 1,
        y: 1,
    },
    isVisible: true,
  
    draw: function () {
        console.log('draw');
    }

}
*/

//We have only one method(function) here, what if we have 10 more methods, u dont want to duplicate or repeat all that logic
//When we have logic, we use factory or constructor functions

/*
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1,
    },
    isVisible: true,

    draw: function () {
        console.log('draw');
    }

}
*/


//FACTORY FUNCTIONS -> Produce objects

//We are gonna move circle object definition inside function

/*
function createCircle() {

    const circle = {
        radius: 1,
        location: {
            x: 1,
            y: 1,
        },
        isVisible: true,

        draw: function () {
            console.log('draw');
        }

    };

    return circle;
}
*/

//We dont need reference of this circle object anywhere, so we can make this code shorter by removing const circle and simply returning this object
/*
function createCircle() {

    return {
        radius: 1,
        location: {
            x: 1,
            y: 1,
        },
        isVisible: true,

        draw: function () {
            console.log('draw');
        }

    };

}
*/

//So now whenever we call createCircle function, we will get an object of circle
//However we have hardcorded some values like every circle created will have radius of 1
//What if we want to have a circle of bigger radius, tgen we need to pass radius as a parameter here

/*
function createCircle(radius) {

    return {
        radius: radius,
        location: {
            x: 1,
            y: 1,
        },
        isVisible: true,

        draw: function () {
            console.log('draw');
        }

    };

}
*/
//Similarly, we can do this with location

/*
function createCircle(radius, location) {

    return {
        radius: radius,
        location: location,
        isVisible: true,

        draw: function () {
            console.log('draw');
        }

    };

}
*/

//For simplicity
/*
function createCircle(radius) {

    return {
        radius: radius,

        draw: function () {
            console.log('draw');
        }

    };

}
*/

//If our key(radius) and value (: radius) are same, we can make our code shorter by adding the key
//radius, is same as radius: radius,
/*
function createCircle(radius) {

    return {
        radius,

        draw: function () {
            console.log('draw');
        }

    };

}
*/
//There is also a shorte way to define this method(draw function)
//Instead of defining it as a key value we can define it as simply draw() {}

/*
function createCircle(radius) {

    return {
        radius,
        draw() {
            console.log('draw');
        }
    };

}
//Now we have a factory function and we can simply call it by creating a circle object

const circle1 = createCircle(1);
console.log(circle1);

//We have defined our logic in one place

const circle2 = createCircle(2);
console.log(circle2);
*/

//We can use factory functions to create object but we can also use constructor functions to create objects

















/***************************************************  CONSTRUCTOR FUNCTIONS  *******************************************************************/

//Constructor function -> Create or construct an object
//Naming convention is different
//Camel notation: oneTwoThreeFour
//Pascal notation: OneTwoThreeFour
//For constructor functions, we will use pascal notation
//Instead of returning an object, we are going to use a different appraoch to initialize the object
//In javascript, we have a keyword this
//this is reference to the object that is executing some piece of code
//In js, objects are dynamic. Whwn we create them, we can add additional properties or methods
//So, here we are adding a new property(empty object)
/*
function Circle(radius) {
    this.radius = radius;
}
*/
//We are gonna now add draw method to this empty object

/*
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}
*/


//Now to create an object using this constructor, we are gonna use keyword new
//When we use this new operator here, 3 things happrn
//This new operator creates an empty javascript object someting like this
//const x = {};
//Next, it will point that (this.) which is in constructor to this new empty object({})
//Finally, this new operator will return this new object from this function
//It looks like this, return this;
//We dont need to explicity add thi return this, statement in function

//const circle = new Circle(1);

//Difference bw factory function and constructor function
//With factory functions, we simply call the function and that function will return a new object
//In contrast, in constructor functions, we use the new operator and instead of returning the object, we use the this keyword
//In factory functions, we use the camel notation and in constructor functions, we use pascal notation
//Both these are equally goof for creating new objects

















/***************************************************  DYNAMIC NATURE OF OBJECTS  **************************************************************/

//Objects in JS are dynamic
//U can always add new properties or methods or remove existence of one
//This object has one property radius

/*
const circle = {
    radius: 1
}

//We can add another new property like this

circle.color = 'yellow';

console.log(circle);

//Similarly we can add method to our object

circle.draw = function () { }

console.log(circle);

//We can also delete existing properties or methods

delete circle.color;
delete circle.draw;

console.log(circle);
*/

//In start we have use const to define object but we are modifying it, deleting properties, so what kind of const this is
//When we use const here, it means we cant re-assign that variable
//So we cant reset circle to new object, we will get an error
//circle = {}; //ERROR

//We cant re-assign circle object nut we can modify, cahnge it ny adding or removing propeties

















/***************************************************  CONSTRUCTOR PROPERTY  **************************************************************/

//FACTORY FUNCTION
/*
function createCircle(radius) {

    return {
        radius,
        draw() {
            console.log('draw');
        }
    };

}

const circle = createCircle(1);



//CONSTRUCTOR FUNCTION

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const another = new Circle(1);
*/

//While printing on console
//circle,constructor and another.constructor
//we will see that another.constructor will return the function code we wrote
//But circle.constructor give something else
//f stands for function
//Its is a built-in constructor function actually


//Lets create an object usisng object literal syntax
//Internally, javascript uses this constructor function
/*
 
 let x = {};
//Object Literal, Javascript will convert that into this let x = new Object();

//The circle object we created and returned from our factory object  and because we use the object literal syntax, internally it was created using
//that built-in object constructor

//We have some built-in js functions

new String();  //but we mostly use string literals like '', ""
//Using these literals is more cleaner than using constructor
new Boolean(); //But we use mostly boolean literals -> true, false
new Number(); //1, 2, 3,....
*/

//Every object has a constructor property and that refers the function that is used to create an object

















/***************************************************  FUNCTIONS ARE OBJECTS  **************************************************************/

/*
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const another = new Circle(1);

//Functions are object
//This circle function here is an object
//We can se proprties, methods by using dot notaion
//On console,
//Circle.name returns name of the function
//Circle.length returns the no of arguments
//Every object in js has a constructor property and that refers as function that was used to create an object
//Who do u think created this object?
//We can check it on console
//Circle.constructor
//So here we have another built-in function called function
//And when we declare function in code using above syntax
//Internally JS engine will use this function constructor built in to create the circle object


//When we declare a function internally, it is represented like thus

const Circle1 = new Function('radius', ` this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
`);

//We can call this circle1 function just like calling circle function

const circle = new Circle1(1);
*/

//Now in console, when we write circle, we can see that it is real circle object with those 2 members





//Methods available in our functions

/*
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

//Call method -> We can call a function
//Look at arguments
//First is this argument, here we need to pass an empty object
//After that we pass our other arguments explicitly like 1, 2, 3
//circle.call({}, 1)  , const another = new Circle(1); bith these are same


//Circle.call({}, 1)

const another = new Circle(1);


//New operator will automatically internally create an empty object aas first argument
//If we dont use new operator, (this.) will automatically point to some global object

//Instead of passing an empty object, we will pass window
//Circle.call(window, 1)


//Circle.call({}, 1)

//The first argument specifies target of this operator

//Now, we have another method called apply
//This is exactly like call method
//But instead of passing all arguments explicitly, we pass them in an array

Circle.apply({}, [1, 2, 3]);
*/

















/***************************************************  VALUE VS REFERENCE TYPE  **************************************************************/

//Two categories/ Types
//1. Value Type / Primitive Type -> Number, strings, boolean, symbol, undefined, null
//2. Reference Type -> Objects, Arrays, Function
//Functions are also object, samw with arrays
//So, in JS we have primitives and objects

//Lets take 2 pimitives
/*
let x = 10;
let y = x; //y is 10 //Value of x is copied here

x = 20;
*/

//These x and y are independent variables, when on console we see x and y values, we see x = 20 and y = 10



//What if we have reference type or objects
//Let x has a property of value
/*
let x = {value: 10}; //When we use an object, that object is not stored in this variable(x)
let y = x;

x.value = 20;
*/

//On console, when we check value of a and y, we will see x = {value: 20}, same y = {value: 20}, both will have value property 20
//When we use an object, that object is not stored in this variable(x)
//The object is stored somewhere else in the memory and the address locatation of that memory is stored inside that variable
//So, when we copy x into y, its the address or reference that we are copying
//In other wordds, both x and y are pointing to same object in the memory
//So, when we make changes in object, changes are visible to other variables

//PRIMITIVES are copied by value
//OBJECTS are copied by their reference





//Another Example
/*
let number = 10;

function increase(number) {
    number++;
}

increase(number);

console.log(number);
*/

//We were expecting that 11 will come, but we got 10, number didnt increase.
//When we call this function, value of number is copied in parameter variable which is local in this function
//So the number++ variable inside the function is completely independent of number variable outside(let number = 10)
//In function, we increase no by 1, so it will be 11, but after this function(}), this number will go out of scope
//So when we log number on console, we are dealing with that number(let number = 10)
//Primitives are copied by their value
//Here we are dealing with 2 independent copies, thats why we see 10 on console




/*
let obj = { value: 10 };

function increase(obj) {
    obj.value++;
}

increase(obj);

console.log(obj);
*/

//When we console on screen, we will see 11
//Reason is that when we call increase, the object is passed by reference
//So the local parameter we have in function will point to same object(let obj =....) we defined above
//We have 2 variables that are pointing to same object
//We are not dealing with 2 independent copies
//So any changes made to this object will be visible to other variable


















/***************************************************  ENUMARATING PROPERTIES OF AN OBJECT  ********************************************************/

//Here we have a circle object with radius property and draw method

/*
const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
}
*/

//We have used for in and for of loops to iterate over properties of an object

//FOR IN LOOP

//With this, we can iterate over all the properties and methods of the object
/*
for (let key in circle) {
    console.log(key); // We have radius and draw
    //If we want to get value of the property or key then we use bracket notation
    console.log(key, circle[key]);
}
*/

//FOR OF LOOP

/*
for (let key of circle) {
    console.log(key); //ERROR -> Circle is bot iterable
    //For of loop can be used with iterables such as array or maps

}
*/

//AN object is not iterable, so we can not iterate it using a for of loop
//However we have this method Object.keys
//Object.keys(circle). With this we can get all keys in cicle obect adn this will return an array
//Since arrays are iterable, so now we can use for of loop to iterate now

/*
for (let key of Object.keys(circle)){
    console.log(key); //radius and draw

}
*/
//Object.keys(circle)
//This object is built-in constructor function
//So somewhere we have this consructor function like this
/*
function Object(){

}
//And whenever we create an object using object literal syntax internally that is translated to call to this constructor function
//SO when we create an object using object literal syntax like this
const x = { value: 1 };
//This is internally translated to call to that constructor function that is function Object(){} which looks like this
const x = new Object();
*/

//All functions in JS are objects. so they have properties and methods we can access using dot notation
//So when we typt Object. we see all properties and methods defined in that object
//Object.keys();
//Here we are using keys method which returns string array which contains all properties and methods in this object


//We have sa similar  method like keys which is entries
/*
for (let key of Object.entries(circle)) {
    console.log(key);
}
*/
//Instead of returning key as a string array, it returns each key value pair as an array
/*
for (let entry of Object.entries(circle)) {
    console.log(entry);
}
*/
//On console, we can see each entry is an array. First element is key and second element is value in array

//Sometimes we wanna see if an object has given property or method, we use in operator
//By in operator we see if given property exists in a given object
/*
if ('radius' in circle) console.log('yes');
if ('color' in circle) console.log('yes');
*/
//The simplest way to enumarate properties of an object is to use for in loop
//But we can also use for of loop along with Object.keys() and Object.entries()


















/*************************************************** CLONING AN OBJECT  ********************************************************/

//We can get all properties of an object and copy those properties into another object
/*
const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};
*/
//We want to create another circle object which is a copy of this circle object
//Initially, we set it into an empty object
/*
const another = {};

//Now, we can use for in loop to iterate over properties of circle object and then copy them to this new another object
//To access value of properties , we will use bracket notation

for (let key in circle) {
    another[key] = circle[key];
}


//In first iteration, we are doing this
//another['radius'] = circle['radius'];
//We are setting radius property of another object to circle of radius
//We are putting radius property having value 1 to another object

console.log(another);
*/

//If we write another.draw() on console, everything works fine

//But this approach for copying or cloning an object is little bit odd

//In modern JS there is better way
//One way id object dot assign method

//Object.assign();

//Object has a method called assign
//Now as a first argument here, we can pass a target object which can be an empty object and then we can pass one or more source objects

//Object.assign({}, circle);

//It will take all properties of source object and will copy them to new object and then retirns the result
/*
const another = Object.assign({}, circle);

console.log(another);
*/

//The first argument doesnt need to be an empty object. It can be an existing object which may have one or more properties or methods
//So as an example, lets add a color property there instead of emoty obejct
/*
const another = Object.assign({color: 'yellow'}, circle);

console.log(another);
*/

//This new object has color property as well as members of circle object



//There is a more simpler elegant way to clone an object
//We can use the spread operator which is three dots
/*
const another = { ...circle }; //It will spread circle object

//This spread operator takes all properties and methods in circle object and puts them in between those curly braces
//This is simplest way to clone an object

console.log(another);
*/

//Object.assign copies properties or methods from one or more source objects into a targeted object and we can use it to clone an object or to combine multiple objects into a single object
//The spread operator is used to spread an object which basically means getting all these propertes and methods and putting them into another object



















/*************************************************** GARBAGE COLLECTION  ********************************************************/

//In low level languages like c or c++, when creating an object we need to allocate memory to it and when we are done we need to de-allocate memory
//But in JS, we dont have this concept
//We can easily create an object
//At the time of initialization, memory is automatically created to this object
//We can use that object and after using we dont need to de-allocate memory
/*
let circle = {};
console.log(circle);
*/

//Our JS engine has Garbage Collector
//Its purpose is to find variables or constants that are no longer used and to de-allocate the memory that was allocated to them earlier

//We can not control it. We cant tell garbage collector when to allocate or remove the memory
//This garbage collector runs on the background



















/********************************************************** MATH  ********************************************************************/

//Buit-in Objects in JS
//First one we are gonna look at is Math object
//Math -> Built-in Object that has properties and methods for mathematical constants and functions. Not a function object
//One of the useful property is Math.PI
//Mrthods
//Math.abs(x) -> Returns absolute value of a number -> If we give it a negative number, it returns its positive value
//There are many methods an properties in Math object

//In ur application, if u need to deal with mathematical calculations, just use google and see all methods of Math object

//Random Method
//On console whenw we write Math.random(), we get a new random number everytime between 0 to 1
//Now if u wanna map it into a given range, there is a simple mathematical formula
//Getting a random number between two values
//We need a function which takes min and max and generate a random no between those two values
/*
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

console.log(getRandomArbitrary(5, 6));
*/


//Round Method
//Math.round(1.9) -> It will return 2 on console

//We also have Math.max()
//We can give it a bunch of arguments and it will return the largest no Math.max(1, 2, 3);

//We also have Math.min()
//We can give it a bunch of arguments and it will return the samllest no Math.min(1, 2, 3);




















/********************************************************** STRING  ********************************************************************/

//String -> Built-in Object

//const message = '';

//When we write message. we see many properties and methods
//Earlier, we learnt that string is a primitive type
//Primitive Types dont have properties and methods, only objects do
//Why we see properties or methods in string here
//It is because in JS there are 2 types of strings
//So, this is what we call a string primitive

//string primitive
//const message = 'This is my first message';

//We also have string object
//String Object
//We have this constructor function String() and we can use that to create a new string object
//const another = new String('hi');
//Now we have another string

//Now lets look at type of each of these constants on console
//type of message is string and type of another is an object
//First constant is a string primitive, the second one is an object
//However when we use dot notation with string primitive, JS engine internally wraps it with string object, we can see this when we work with a string object
//Just Like Math methods, we can see string methods in documentation


//Methods
//On console
//We have length property which returns no of characters in the string
//This is particularly useful in situations where we want to make sure user types certain no of letters in an input field or maybe u want to put a limit
//message.length;


//If u want to access a character at given index, we use square brackets -> message[0]
//message[0] returns T, message[1] returns h

//If u wanna see string has special word, we can use include method
//message.includes('my') -> True, this string has my
//message.includes('not') -> False

//We have also another method startwith()
//message.startswith('This') -> True, this string starts with this
//message.startswith('this') -> False, Researchers are case sensitive

//We have similar methods endswith()
//message.endswith('e) -> True

//If u want to find the index of given character or given string inside the string, we can use the indexOf method
//message.indexOf('my') -> 8 //My starts at index 8

//We can also replace part of a string
//message.replace('first', 'second') -> We replaced first with second
//This returns a new string but it does not modify the original string, so if we log the original one, we still have my first msg

//toUpperCase() returns a new string where all letters are uppercase
//message.toUpperCase();

//Similar to this we haave toLowerCase()
//message.toLowerCase();

//const msg = ' This is my first message ';

//Another useful method is trim
//If we use trim method, it removes all the white space before and after the string

//This method has variations
//We have trimLeft() which only removes white spaces on beginning of string
//We also have trimright() and so on


//In JS, there is ESCAPE NOTATION
//There are some characters and if u wanna use them, u need to use them using escape notation
//For example, u wanna have a single quote ' inside of ur string
//We need to prefix it with backslash \'
//Now this character is escpaped, its encoded

//const mesg = 'This is my \' first msg';

//Another useful escape character is \n which represents a new line

//const mg = 'This is my\n first msg';

//Another useful method is spplit method
//With this, we can split a string based on given character
//If i pass ' ' white space, we get an array of items and each item in the array is word in our msg //mg.split(' ')




















/********************************************************** TEMPLATE LITERALS  ********************************************************************/

//In last lec, we learnt about \n, but in this approach we cant visualize how output looks like

//const message = 'This is my\n first message';

//On console, on first line, we have this is my and on second line we have first message but on code it looks different

//If we want to make string look like similar to what output looks,, we need to do something like this
//We break the string into two parts and concatenate them and add second part on new line
//Now this kind of looks similar to what we have in output

/*
const message =
    'This is my\n' +
    '\'first\' message';
    */

//This above code is kind of ugly and noisy
//Thats why we are gonna use template literals


//We have learned diff kinds of literals in JS

//Object {}
//Boolean true, false
//String '', ""

//Template literals which are indicated by back tick characters ``

//Now im gonna use a template literal instead of string literal
//We can format our string the way we want it to look like

/*const another = `This is my
first message`;*/

//What we have in code is similar to what we have in output
/*
const another = 
`This is my
'first' message`;
*/

//This is useful when u want to set out email messages in your application

//We can format our string exactly the way we want it to look like

/*
const mail =
    `Hi, John,

Thank you for joining my mail list.

Regards,
Mosh`;
*/

//Another benefit of using template literals is that here we can add place holders
//Lets say we want to add name here dynamically

//With a regular string, we have to do something like this
//We have to concatenate hi with some variable or constant

//const name = 'John';
//const message = 'Hi' + name + ',\n';

//This is very ugly
//There is better way

//With twmplate literals, we can add a place holder using a dollar sign and curly braces ${}
//Inside these curly braces, we have an expression, we can pass the name of variable or constant

/*
const mail =
`Hi, ${name},

Thank you for joining my mail list.

Regards,
Mosh`;
*/

//Now on console, we can see that we got John dynamically
//So this is a plcae holder for our name constant

//Here, we can add any kind of expression
//We can add mathematical expresssion

/*
const mail =
`Hi, ${name} ${2 + 3},
     
Thank you for joining my mail list.

Regards,
Mosh`;
*/

//So, technically we can add any expression that produces a value in between the curly braces, we can also call a function that returns the value





















/********************************************************** DATE  ********************************************************************/

//Date -> Built-in Object

//Diff ways to create date object

//const date1 = new Date();

//Date is a constructor function
//This Date constructor has differenet versions
//We can use date constructor without any parameter and this returns the current date time
/*
const now = new Date();

//We have another constructor with one parameter value(which can be a string or a number, number milliseconds and is from Jan 1, 1970) or another date object
//Here im gonna pass a string

const date1 = new Date('May 11 2018 09:00');

//We can use many formats
//Search on google javascript date, in date strings u can see diff formats


//Another way to create a date object is by passing numbers
//Here we have another constrcutor with these parameters
//year which is a number, month which is a number and so on
//Date(year: number, month: number, date?: number, hours?: number, minutes?: number, seconds: number,...)

//Month is zero based. Zero represents January, 1 represents feb and so on
//Third parameter is date parameter and thats the day of the month
//Nex parameter is hour like 9 and then minutes are zero
//If we dont write minutes in argument  zero, it is ok. Because all other arguments are zero by default

const date2 = new Date(2018, 4, 11, 9);

//So this is how we create date objects
//All of these date objects have bunch of get and set methods

//getDate() returns day of months
//getFullYear()
//getHours()
//getMilliseconds()
//getMinutes() and so on

//We also have set methods

now.setFullYear(2017);
*/

//We changed the year to 2017

//Now lets see how we can display them on console

//All these date methods have a method for converting them to a string
//We can call toDateString() and we get a string by calling now.toDateString() on console
//We also have toTimeString() which returns time component of that date object
//Another useful method is toISOString(), we have a date, T and time
//This is standard ISO format and is commonly used in web applications


















//EXERCISE


/********************************************************** ADDRESS OBJECTS  ********************************************************************/

//Create an address object with 3 properties (street, city and zipCode)
//After that create a function showAddress(address) that take an address object adn displays all the properties in this obejct along with their value
/*
const address = {
    street: 04,
    city: 'Lahore',
    zipCode: 5496,
};

for (let key in address) {
    console.log(key, address[key]);
}
*/

//To create an object, we can use let or const keyword. In this case, it doesnt matter
//To intialize this object, we will use object literal syntax

/*
let address = {
    street: 'a',
    city: 'b',
    zipCode: 'c',
};

//Now we need to create this function showAddress(address) and to enumerate properties of object, we are gonna use for in loop

function showAddress(address) {
    for (let key in address) {
        console.log(key, address[key]);
    }
}

showAddress(address);
*/



















//EXERCISE


/********************************************************** FACTORY AND CONSTRUCTOR  ********************************************************************/

//Initialize address object using factory and constructor function

//Factory Function

/*
function createAddress() {
    return{
        street: 'a',
        city: 'b',
        zipCode: 'c',
    };
    
}

const address = createAddress();
console.log(address);

//Constructor Function

function Address() {
    this.street = 'a';
    this.city = 'b';
    this.zipCode = 'c';
}

const add = new Address();
console.log(add);
*/


//FACTORY FUNCTIONS

//Factory functions simply return a new object
//Here we can name this function createAddress
//We can give it three parameters (street, city, zipCode)
//We can simply return new objectt then with three properties
//street: street,
//If key and value are same, we can make code cleaner like this street, by dropping the value

/*
function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode,
    };

}

let address = createAddress('a', 'b', 'c');
console.log(address);

//CONSTRUCTOR FUNCTION

//Constructor functions have naming convention -> Pascal notation
//We are gonna pass 3 paarmeters
//Instead of returning a new object, we are gonna use this keyword to intialize this new object

function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

let add = new Address('a', 'b', 'c');
console.log(add);
*/



















//EXERCISE


/********************************************************** OBJECT EQUALITY  ********************************************************************/

//We are gonna use constructor function we created above to create 2 address objects

//Constructor Function

/*
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');

//Create 2 functions
//One is areEqual(address1, address2), we will pass 2 address objects
//We will check to see if these 2 objects are equal
//Objects are reference type
//So, we can have 2 objects with exact same properties
//But these objects are in different memory locations
// === By equaltiy operator, we are meant to see if these obejcts have same reference
//We also need to check if proeprties are equal
//If properties are equal, this function needs to return trur, otherwise false

//We need to return boolean which is result of 3 conditional statements
function areEqual(address1, address2){
    return((address1.street === address2.street) && (address1.city === address2.city) && (address1.zipCode === address2.zipCode))
}

console.log(areEqual(address1, address2));

//Other function
//areSame(address1, address2)
//This function tells if address1 and address2 are pointing to the exact same location
//In other words, referencing the same object

//To see if two objects are referencing to same location, use string equality operator

function areSame(address1, address2) {
    return address1 === address2;
}

console.log(areSame(address1, address2));

let address3 = address2; //Both of these are pointing to same object in memory

console.log(areSame(address2, address3));

*/




















//EXERCISE


/********************************************************** BLOG POST OBJECT  ********************************************************************/

//Create blog post object with these properties
//title
//body
//author
//views
//comments
//  comments should have 2 more properties (author, body)
//isLive -> true or false

//We need to use object literal syntax to create or initialize a blog post object
/*
let post = {
    title:'a',
    body: 'b',
    author: 'c',
    views: 10,
    //comments should be an array because there can be many comments
    //Since each comment has author and body, we will use object literal syntax
    comments: [
        { author: 'a', body: 'b'},
        { author: 'c', body: 'd' }
    ], 
    islive: true,
};

console.log(post);
*/





















//EXERCISE


/********************************************************* CONSTRUCTOR FUNCTION  ********************************************************************/

//We are gonna use constructor function to create a post object
//Imagine we are building blogging engine
//The user is drafting a post but they have not published it yet
//What should constrcutor function look like?

//What parameters do we need?
//We need title, body, author
//We dont need views because we are first time creating a post, views should be set to zero and everytime we view that post, we increment that value
//For a new post that hasnt been published yet, we dont have any comments, so we dont wanna add comments parameter
//isLive is gonna set default, so there is no need to add extra parameter in this function

//We should aim to have functions with fewer parameters
//The more parameters a function has, the harder it gets to use it
//We are gonna initialize comments with empty array, so in future we can add new comments

/*
function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

let post = new Post('a', 'b', 'c');
console.log(post);
*/






















//EXERCISE


/********************************************************* PRICE RANGE OBJECT  ********************************************************************/

//Create an array of objects
//Each object is what we call a price range object
//What properties should each object have?

//In this array, we are gonna have 3 objects
//Each object should have 4 properties
//One is the label that we display to the user like a dollar sign
//The second property is a tool tip
//When we hover mouse over button, we can see a tooltip
//For each price range object, we need a tooltip
//We need two more properties to determine min and max per person
//Average price per person falls from 0 to 10 $
//This is important for filtering
//For example, if u are building a website like yelp, somewhere we need to store list of restaurants
//So, we need another array resturnat having objects
//Each object should have this property averageperPerson
//Lets say avg per person is 5$
//When we cam to filtering
//Let suppsoe user only wants to see inexpensive restaurants, then we need the object first having price per person form 0 to 10 $
//Now we want to filter list of restaurants and pull out those whose avgprce per person is bw those values

/*
let priceRanges = [
    { label: '$', tooltip: 'InExpensive', minPerPerson: 0, maxPerPerson: 10 },
    { label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20 },
    { label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50 },
]

let restaurant = [
    {averagePerPerson = 5}
]
*/

