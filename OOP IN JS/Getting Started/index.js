

/***************************************    WHAT IS OOP?     ****************************************************/

//OOP is a programming paradign or style of programming centered around objects rather than functions
//Its nothing new, its been round since 70s but unlike tools and frameworks that come and go, OOP is still very relevant today
//Thats because its not a programming language or tool
//Its a style of programming or a programming paradign
//There are several programming languages out there in support of OOP
//Such as C sharp, Java, ruby, python, javaScript and more
//JS is a little bit contreversial
//Many of the popular frameworks out there that might we are using are actually designed with OOP concept in mind
//OOP is a very popular style of programming and it comes up in many technical interviwes











/***************************************    FOUR PILLARS OF OOP     ****************************************************/

//Popular interview question -> 4 concepts of OOP
//These concepts are
//1. Encapsulation      2. Abstraction        3. Inheritance          4. Polymorphism

//Before OOP, we had Procedural Programming
//Procedural Programming divided program into set of functions
//So, we had data stored in bunch of variables and functions that operate on data
//This style of programming is very simple and striaghtforward
//But as ur program grows, u will end up with a bunch of functios that are all over placed
//U might find yourself copying and pasting lines of code over and over
//To make a change to one function and then several other functions break
//Thats what we called spagetthi code
//There is so much interdependency between all these functions. It becomes problematic

//OOP came to solve this prblm
//In OOP, we combine group of related variables and functions into a unit
//We call that unit an object
//We refer to these variables as property and the functions as method

//Heres an example
//Think of a car
//A car is an object with properties such as make, model and color; and methods like start(), stop() and move()

//Another example
//Think of localStorage object in ur browser
//Every browser has a local storage object that allows u to store data locally
//This local storage object has a property like length which returns no of objects in the storage  and methods like setItems() and removeItems()

//So, in OOP, we group related variables and functions that operate on them into a object
//And this is what we call encapsulation

//Example of encapsulation in action
//So, here we have 3 variables -> baseSalary, overtime and rate
/*
let baseSalary = 30_000;
let overtime = 10;
let rate = 20;
//We have a function to calculate wage for an employee
function getWage(baseSalary, overtime, rate) {
    return baseSalary + (overTime * rate);
}
//We refer this kind of implementation as procedural, we have functions on one side and variables on one side, they are decoupled

//Now lets look at Object oriented way to solve this prblm
//We can have an employee object with 3 properties -> baseSalary, overtime and rate; and a method called getWage
let employee = {
    baseSalary: 30_000,
    overtime: 10,
    rate: 20,
    getWage: function () {
        return this.baseSalary + (this.overTime * this.rate);
    }
};
employee.getWage();
//Now why this is better?
//First of all look at the getWage function, this function has no parameters
//In contrast in our procedural example, our getWage function has 3 parameters
//THe reason we dont have any parameters in oop implementation is that because all parameters are modeled as proeprty of this object
//All these proeprties and getWage function, they are ghighly related , so they are part of one unit
//SO, one of symptom of prcedural programming is its function with so many parameters
//When u write code in object oriented way, ur function ends up having fewer and fewer parameters
//As uncle Bob says -> The best functions are those with no parameters
//The fewer the no of parameters, the easier it is to use and maintain that function
//So thats encapsulation


//Now lets look at abstraction
//Think of DVD player as an object
//This DVD player has a complex logic board in the inside and few buttons on the outside that u interact with
//U simple press the play button and u dont care what happens on the inside
//All the complexity is hidden from u
//This is abstraction in practice

//We can use the same technique in our objects
//So, we can hide some of the properties and methods from the outside
//This gives us a couple of benefits
//1. Simpler interface -> we will make interface of those objects simpler using and understanding obejct with few proeprties and methods is easier than an object with several proeprties and methods
//2. Reduce the impact of change -> It helps us reduce the impact of change
//Lets imagine that tomorrow we change these inner or private methods, none of these changes will leak to the outside because we dont have any code that touches the outside containing object
//U may delet a method or change its parameters, nut none of the changes will impact the rest of application code
//So, with abstraction we reduce the impact of change



//Inheritance
//Inheritane is a mechanism that allows u to reduce the redundant code
//Heres an example
//Think of html elements like text box, select(drop down list), checkbox and so on
//All these elements have a few things in common
//They should have properties like hidden, innerHTML and proeprties like click() and focus()
//Instead of redefining all these proeprties and methods foe every type of HTML element
//We can define them once in a generic object calling HTML element and have other objects(text box, select(drop down list), checkbox and so on) inherit these proeprties and methods
//So, Inheritane helps us eleminate redundant code



//Polymorphism
//Poly means many and morp means form
//So, polymorphism means many forms
//In OOP, polymorphism is a technique that allows u to get rid of long if...else or  swwith...case statements
////Back to our above HTML element example, all these obejcts (text box, select(drop down list), checkbox and so on) should have ability to render to the page
//But the way each element is rendered is different from the others
//If u want to render multiple HTML elements in a procedural way, our code will probably look like this
/*
switch (...){
    case 'select' : renderSelect();
    case 'text': renderTextBox();
    case 'checkbox' : render checkBox();
    case...
    case...
}*/
//But in object orientation, we can implement a render method in each of these objects (text box, select(drop down list), checkbox and so on)
//and the render method will behave differently depending on the type of object we are referncing
//So, we can get rid of the nasty switch...case and use one line of code like this
//element.render();



//BENEFITS OF OOP
//Using encapsulation, we group  related functions and variabels together and this way we can reduce complexity
//Now we can reuse these obejcts in diff parts of prgrm or in diff prgrms
//ENCAPSULATION -> reduce complexity + increase reusablity
//With abstraction, we hide the details and the complexity and show only the essentials. This technique reduces complexity and  also isolates the impact of chnages in the code
//ABSTRACTION -> reduces complexity + isolates the impact of chnages
//INHERITANCE -> eliminate redundant code
//POLYMORPHISM -> Refactor ugly switch/case statements











/***************************************    COURSE STRUCTURE     ****************************************************/


//ES6 -> ECMASCRIPT 6 / 2015 -> Speicification designed by ECMA which is an organization that defines standards and technologies
//JS is  a programming language that confirms ECMA6 specification
//From 2015, ECMA started to enhance JS.So the specificaton that came out in 2015 is reffered as ECMA2015 or ECMAScript version 6
//In this specification we have some new features in JS
//One of them is classes

//OUTLINE
//Objects
//Prototypes
//Protypical Inheritance
//ES6 Classes
//Modules






























