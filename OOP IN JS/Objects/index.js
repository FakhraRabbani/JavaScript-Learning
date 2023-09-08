
/*********************************************** INTRODUCTION  *****************************************************************/

//JS is all about objects

//Creating Objects
//Factories and Constructors
//Primitives and Reference Types
//Working on properties
//Private proeprties
//Getters/Setters












/*********************************************** OBJECT LITERALS  *****************************************************************/

//Creating an Object
//I am gonna use let keyword which is replacement of var in ES6
//Use let or const
//{ } -> Object literal syntax
//An object in JS is essentially collection of key value pairs
//Inside these curly bracse, we can add key value pairs
//draw is key, value is function
/*
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function () {
        console.log('draw');
    }
};

//This circle obejct has 3 members -> radius, location and draw
//If a member is afunction, we refer to it as method
//Draw is a method
//Other members are properties
//In some JS tutorials, they refer all these members to proeprties whether they are function or not
//But in OOP, proeprties and methods are different because proeprties use whole value and function or method is used to define some logic

//We can acccess circle object members by dot method
circle.draw();*/












/*********************************************** FACTORIES  *****************************************************************/

//Lets say we want to create another circle
//We have to duplicate all the code
//This can be a prblm if we have one or methods
//If we have a bug, it would be difficult
//Imagine having 10 methods
//So, object literal is not agod syntax to craete an object and duplicate it if the obejct has atleast one method
//If an object has one or more method, we say that object has behavior like a person that can do different things so it has behaviour
//Now lets imagine we didnt have draw method, dupicating the object wouldnt be a big deal
//So, basically we will end up with 2 obejcts and wwe can use different values
/*
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
};

const circle = {
    radius: 2,
    location: {
        x: 2,
        y: 1
    }
};
*/

//So, creating objects with object literal syntax is an issue only if the obejct has behaviour
//Solution is to use a factory or constructor function

//We simply return object in factory function
//Circle requires radius. Instead of hardcoring it, i can add a paramtere and set that to radius
//radius: radius;
//If key and value are same, we can remove noise by removing the value
//So, we only add radius
/*
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('draw');
        }
    };
}

//This is what we call a factory function
//To create a new circle, we can simply call this function

const circle = createCircle(1);*/












/*********************************************** CONSTRUCTORS  *****************************************************************/

//We can also create an object using constructor function
//Naming convention -> Pascal
//The developers in background languages like c sharp and java, it kinds of look like a class
//However when u see we are defining a function here
//In JS we dont have concept of classes
//So our circle function is gonna take radius parameter
//In the body, instead of returning the object we are gonna use the this keyword to set the properties of this object
//this is reference to the object that is executing this piece of code
//Imagine we have a new empty object in memory, we are gonna use this to refernce that object and then we will use dot notation to access various properties of that object
/*
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}
*/
//Now we can create an object
//We use the new operator to call the circle functcion and pass 1 as the argument
//const another = new Circle(1);
//When we use the new operator few things happen
//This new object will create an empty object like this {}
//Then it will set this to point that empty object
//Because by default, this points to the global object
//If u are running this code inside of a browser, the global object is the window object
//If u are running this inside node object, the global object is global
//Lets see it, if we do a console log of this in constructor function
/*
function Circle(radius) {
    console.log('this', this);
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}
//this Circle {}
//We can see this is the circle object in which there are 2 members draw and radius
//this Circle { } draw: ƒ()radius: 1[[Prototype]]: Object
//This is because i used the new operator
//If i remove that, we can see on console that this references to window object so this is the global object in browser
//const another = Circle(1);
//this Window {window: Window, self: Window, document: document, name: '', location: Location, …}
//We dont want to use this global object
//We dont want to define global variables because they are bad practice because they are available everywhere in our application So there is possibility that one or more function may modify the value of variable accidently and create bug in our application
//So, when we call our function using new operator, three things happen
const another = new Circle(1);  */
//First this new operator will create an empty object
//Then it will stet this to point to that object
//Finally, it will return that object from the function
//So, in function we dont have an explicit return statement, we are not returning this explicitly
//return this will happen automatically when we use the new operator


//So basically we have 2 ways to create an object
//We can use a factory function or a constrcutor
//There is nothing special about these
//They are both regular functions in JS
//If we return an object in our function, we refer it as factory function
//In contrast if we use the this keyword along the new operator, we refer to that function as a constructor function
//What is diff between these 2 patterns to create an object?
//Which approach should u use? It depends upon who u ask
//Developers coming from c sharp and java prefer constructor functions syntax because this looks like creating an instance of class
//But in JS we dont have classes
//Other developers dont like this aproach
//They prefer to use factory functions and one of their argument is that what if the developer forgets to use the new operator, then we are defining this properties on global object which is in this case window object
//But this argument is outdated
//With modern JS and tools thata re avaialable, we get an error if we forget to use new operator there












/*********************************************** CONSTRUCTOR PROPERTY  *****************************************************************/

//Every object in JS has a property called constructor and that refers to the function that was used to construct or create that object

//Factory Function
/*
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('draw');
        }
    };
}

const circle = createCircle(1);

//Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}
const another = new Circle(1);
*/

//Here we have 2 objects circle and another
//Lets look at their constructor property
//On console, if we log another.consructor, it returns the function that we used to create this object
//another.constructor -> ƒ Circle(radius) {
//                              this.radius = radius;
//                              this.draw = function () {
//                               console.log('draw');
//                                }
//                          }
//On console, if we log cicle.constructor, we get this
//circle.constructor -> ƒ Object() { [native code] }
//What is this?
//We can tell this is a function because we have blue f ( ƒ)
//And first letter of this function is upperCase (Object())
//So this is built in constructor function in JS


//When we create an object using object literal syntax, internally JS engine uses this constructor function
//Lets see it
//Lets define an object like this using object literal syntax
/* let x = {};
//JS engine will translate it to something like this
//let x = new Object();

//The circle object we created and returned from factory function and because we used the object literal syntax, inyernally it was created using Object construcor function

//In JS we have some other built-in constructors
//eg we have new String() for creating strings
//But quite often we use string literals //''  ""  ``
//USing these literals is cleaner and simpler

new String()  // ''  ""  ``
new boolean()  //true, false
new Number()  //1, 2, 3, ...
*/

//Every object has a constructor property and that references to the function that was used to create that object












/*********************************************** FUNCTION ARE OBJECTS  *****************************************************************/
//previous
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













/*********************************************** VALUE VS REFERNECE TYPE  *****************************************************************/

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













/*********************************************** ADDING OR REMOVING PROPERTIES  *****************************************************************/


























































//EXERCISE

//StopWatch


function Stopwatch() {

    let startTime, endTime, running, duration = 0;

    this.start = function () {
        if (running)
            throw new Error('Stop watch has already started started');

        running = true;
        startTime = new Date();
    };

    this.stop = function () {
        if (!running)
            throw new Error('Stop watch is not started');

        running = false;
        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    };

    this.reset = function () {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };

    Object.defineProperty(this, 'duration', {
        get: function () {
            return duration;
        }
    })

};

const sw = new Stopwatch();





