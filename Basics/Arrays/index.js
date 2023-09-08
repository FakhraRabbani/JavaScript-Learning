
/***********************************************  INTRODUCTION  **************************************************************/

//Operations we can perform on an array
//Adding new elements
//Finding elements
//Removing elements
//Splitting arrays
//Combining arrays







/******************************************  ADDING ELEMENTS   ***********************************************************/

/*

const numbers = [3, 4];

//I have declared numbers as a constant
//That means we cant assgin number to something else, if we do this, we get erro assigment to constant variable
//numbers = [1];  //ERROR on console
//However, its perfectly fine to modify this array. We can add new elemnts and remove elements
//So constant doesnt stop from modifying content of an array

//Arrays are objects
//So using dot notation we can see all the properties or methods defined inside the array
//numbers.

//We are gonna look at three methods to add new elements at end, middle and beginning of an array



//The first method we are gonna use is the PUSH METHOD
//PUSH METHOD -> END

//we can pass one or more arguments and these arguments will be placed at the end of this array

numbers.push(5, 6);
console.log(numbers);



//If u wanna add elements to the beginning of array, u can use unshift method
//UNSHIFT METHOD -> BEGINNING

//This basically pushes the element in an array to the right and adds new element to the beginning

numbers.unshift(1, 2);
console.log(numbers);



//If u wanna add elements in middle of array, u use the splice method
//SPLICE METHOD -> MIDDLE

//With this method, we can go to a given position and add new elements or remove existing elements

//The first parameter is a start which is a number, thats our starting position
//Lets say in our array we want to add element between 2 and 3 so starting position will be at 3(the index of 3)
//Our starting position or starting index is 2(index of 3)

//The second parameter is deleteCount which is a number , how many elements do u wanna delete?
//We dont need to delete any element so we will pass zero

//The third parameter is the items we wanna add

numbers.splice(2, 0, 'a', 'b');
console.log(numbers);


*/














/******************************************  FINDING ELEMENTS (PRIMITIVE)  ***********************************************************/

//Finding elements depends if we are storing primitives or reference types in an array

//PRIMITIVES

/*
const numbers = [1, 2, 3, 4];

//We have a method called indexOf
//We pass an element as parameter in this method
//If that element is present in the array, it returns index of that element
//If the element doesnt exist, it will return -1

console.log(numbers.indexOf('a'));
console.log(numbers.indexOf(1));

//Type of element matters
//If we will pass 1 as a string, it will return -1 because we dont have 1 as a string in array, it is a number

console.log(numbers.indexOf('1'));


//We have another method called lastIndexOf
//It will return last index of element if number exists, otherwise -1

const number = [1, 2, 3, 1, 4];

console.log(number.indexOf(1));
console.log(number.lastIndexOf(1));  //3


//To check if an element exists in array, we can do this
console.log(numbers.indexOf(1) !== -1);
//If this expression returns true, it means this element exists in the array
//But this is a bit ugly
//We have a new method in JS includes()
console.log(numbers.includes(1));
//It simply returns true if given element is present in the array

//All of these above methods have second parameter which is optional called starting index

console.log(number.indexOf(1));
//It has a seond parameter fromIndex, it is the index from which the search will begin
console.log(number.indexOf(1, 2));

*/














/******************************************  FINDING ELEMENTS (REFERENCE)  ***********************************************************/

//REFERENCE TYPE

//In this courses array, we will have some objects with id and name properties
//Shift, ALT, down arrow -> duplicate line

//We have two course obejcts in array

/*

const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' }
];

*/

//We want to see if course a exists in this array
//The include method will not help here

//console.log(courses.includes({ id: 1, name: 'a' }));
//We get false
//The reason is that the object we are passing in the include method and the obejct we have in courses array, these 2 objects are different
//These 2 objects have 2 different references
//They are in 2 different locations in the memory

//Objects are reference types
//So when we check them with equality, their references are checked

//In this case, there are 2 different refernces, thats why we get false

//So, if we have an array with reference type, we need to use find method



//FIND METHOD

//The find() method returns the value of first element in the provided array that satisfies the provided testing function.
//If no values satisfy the testing function, undefined is returned.

//As an argument of this method, we need to pass function
//We call this function predicate and we use that to determine if given element exists in an array or not
//This function takes a parameter that is element in this array
//In body of this function, we should return a boolean
//So, this is what happens we use find method and pass function
//This function is executed once for the first element in the array and if that is not present, then the search will continue
//The function will be then called for second element in the array
//In contrast, if there are no elements in the array that matches  this creteria will get undefined

//We call this function 'predicate' or 'call back function'
//Because this function is called back as finding an element in this array
//What is our creteria? We are looking for a course named 'a'
/*
 const course = courses.find(function (course) {
    return course.name === 'a';
})

console.log(course);

//We get complete course object that we have in the array

const cours = courses.find(function (cours) {
    return cours.name === 'xyz';
})

console.log(cours);
*/

//Now we get undefined becuase we changed the creteria and we dont have any xyz object


//Find method returns the first element that matches the creteria




//We have a similar method called findIndex
//FIND INDEX METHOD
//instead of returning the object, it will return its index

/*

const cours = courses.findIndex(function (cours) {
    return cours.name === 'xyz';
})

console.log(cours);

//The object doesnt exist, it will return -1


const course = courses.findIndex(function (course) {
    return course.name === 'a';
})

console.log(course);
//It will return 0 because index of first element that matches this creteria is 0

*/















/******************************************  ARROW FUNCTIONS  ***********************************************************/
/*
const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' }
];

*/
/*
const course = courses.find(function (course) {
    return course.name === 'a'
})

console.log(course);
*/

//There is shorter, cleaner way to write above code using arrow function
//So, whenever u need to pass a function as call back function or as argument to different methods, u can use arrow function syntax

//Remove function keyword
//To set parameters of this function to body, put a fat arroe in between them () => {}
//This is what we call an arrow function
//If ur function has a single parameter, we can also get rid of parameter paranthesis, this makes code cleaner
//If u dont have any parameters u need to pass an empty parenthesis
//If ur function is returning single piece of code, it has single line of code
//Then u can remove curly braces and return keyword
//U can put everything on one line like this
/*
const course = courses.find(course => course.name === 'a');
//We read this expression as course goes to course.name equals 'a'
//So basically we are finding a course with name equal to 'a'

console.log(course);
*/















/******************************************  REMOVING ELEMENTS  ***********************************************************/

//const numbers = [1, 2, 3, 4];

//Earlier we learned 3 methods to add elements in an array
//PUSH METHOD -> ADD AT END OF AN ARRAY  numbers.push()
//UNSHIFT METHOD -> BEGINNING OF ARRAY   numbers.unshift()
//SPLICE METHOD -> SOMEWHERE IN MIDDLE   numbers .splice()

//We can remove element from the end, beginning and from middle

//POP METHOD -> END
//this will remove last element from array
/*
const last = numbers.pop();
console.log(numbers); //[1, 2, 3]
console.log(last); //4


//SHIFT METHOD -> BEGINNING
//this will remove  element from beginning of array
//Similar to pop element, it will return the element that we removed, so we can store that in first

const first = numbers.shift();
console.log(numbers); //[2, 3]
console.log(first);  //1
*/

//SPLICE METHOD
//If u wanna remove some element from middle, u pass index of that element
//Lets say we wanna remove 3 from array
//Index of 3 is 2
//As second argument, we pass number of elements we wanna remove or delete
//We can remove one element or more
/*
numbers.splice(2, 1);
console.log(numbers);  //[1 2 4]
*/

//We can also delete more than one elements
/*
numbers.splice(2, 2);
console.log(numbers);  //[1 2]
*/

//POP METHOD -> REMOVE LAST ELEMENT
//SHIFT METHOD -> REMOVE BEGINNING ELEMENT
//SPLICE METHOD -> REMOVE ELEMENT FROM SOMEWHERE MID















/******************************************  EMPTYING AN ARRAY  ***********************************************************/

//HOW CAN WE REMOVE ALL ELEMENTS IN AN ARRAY?
//there are different solutions

//let numbers = [1, 2, 3, 4];

//SOLUTION 1
//We can simply re-assign array to a new array
//numbers = [];

//console.log(numbers);

//Now, our array is empty
//However, the old array is still in the memory
//So, if there are no other references to this object, eventually it will be removed by the garbage collector

//This means that if we have another variable called another and this is also pointing to the same object
//The original array will not be garbage collected then
/*
let another = numbers;

//So now when we will re-assign numbers variable
numbers = [];
//numbers is pointing to new object in memory
//But another is still pointing to the old object

console.log(another); //[1 2 3 4]
*/
//This solution works if u dont have any other references to original array
//If u do have references to original array like another, then we will use one of other solutions




//SOLUTION 2

//We can simply set the length property to zero
//This will truncade the array, it will remove all the elements
/*
another = numbers;

numbers.length = 0;

console.log(numbers); //[]
console.log(another); //[]
*/

//The orginal array has been truncaded, so it doesnt matter how many references u have to that array




//SOLUTION 3

//Another solution is to use the splice method
//By slice method, u can go to agiven position and remove one or more elements
//We can start from first element at 0 index and remove all elements in that array
//How many elements we have in the arrays is numbers.length
/*
another = numbers;

numbers.splice(0, numbers.length);

console.log(numbers); //[]
console.log(another); //[]
*/





//SOLUTION 4
//The last solution is to use the pop method
//Pop method removes last element in the array
//We can put this in a loop
//And keep calling this method as long as we have an element in this array
/*
another = numbers;

while (numbers.length > 0)
    numbers.pop();

console.log(numbers); //[]
console.log(another); //[]
*/

//This last solution is not recommended
//Because if u are dealing with a large array, lets say u have million obejcts in the array, there is going to be a performance cost
//U are intentionally calling this pop method million times
//However, thats not situation with most applications out there unless u work for google
//But this approach is pretty noisy

//First solution is very simple and elegant
//The only issue is that it doesnt work if we have multiple references to that array

//Personal preference is to set length of array to zero

//Solution 3 is also a little bit noisy















/******************************************  COMBINING AND SLICING ARRAYS  ***********************************************************/

//How we can combine 2 arrays or slice an array into 2 parts?

/*
//Decalaring two arrays
const first = [1, 2, 3];
const second = [4, 5, 6];

//To combine these arrays, we use the concat method
//This will basically concat first array with the second
//CONCAT METHOD

const combined = first.concat(second);

//Both arrays are un-affected
//So this will return a new array which is combination of first and second array

console.log(combined); //[1 2 3 4 5 6]

//We have another method that is opposite of concat
//That is slice method which we use to slice an array into two parts

//There are multilpe ways to use this slice method
//One way is to pass based index for start and end

const slice = combined.slice(2, 4);

console.log(slice); //[3 4]

//We went to combined array, started at index 2 and finished after index 4. So, we extracted 3 and 4

//Another way to use slice method
//We can exclude end index
//With this, we get all elements in the orginal array starting from given index

const slic = combined.slice(2);
console.log(slic);  //[3 4 5 6]

//Third way is to exclude the starting index
//With this, we get copy of original array


//If u want to combine arrays, use concat method
//If u wanna slice an array, use the slice method


//If u are dealing with primitive values, these primitives will be copied to the target array
//But if u have objects in ur array, the objects themselves are not copied, their references are copied
//That means elements imposed the inputs on output arrays and will point to the same object

const f = [{ id: 1 }]; //Reference type
//When we call the concat method, this obejct itself is not copied to combined array
//Only its reference is copied

const combine = f.concat(second);

console.log(combine);  //[{… }, 4, 5, 6]

//This means that if i go to the first array and get the first element which is an object and change its id, lets say to 10
//We can see that in combined array

f[0].id = 10;

console.log(combine);
//We can see that id is changed to 10

//because we are dealing with reference type, this obejct is copied by reference
//Same principle applies to the slcie method

*/















/******************************************  SPREAD OPERATOR (...) ***********************************************************/
/*
const first = [1, 2, 3];
const second = [4, 5, 6];

//const combined = first.concat(second);

//In last lec, we learned that concat method is used to combine two arrays
//There is another way to achieve the same thing using spread operator

const combined = [...first, ...second];  //[1 2 3 4 5 6]
//When we spread an array, it returns individually each element of that array
//So basically, we are declaring a new array and in that array, we are adding individual elements of first and second array
//We have all elements of first array followed by all elements of second array, spread operator gives better visualization
//With spread operator, we have more flexibility

//As apart from combining these 2 arrays, we need to add element between these arrays
//We can simly do this like this

const combine = [...first, 'a', ...second, 'b'];
//We can clearly see what combine array looks like
//In contrast, if u want to do same thing with concat method, our code is gonna be complex

console.log(combined);
console.log(combine);

//We also learned about slice method above

//const copy = combined.slice();
//It will return copy of the orginal array if u call slice method without any argument

//console.log(copy);
 

//We can use spread operator to copy all elements in an array  to a new array
//So we can write this as

const copy = [...combine]
//This will return all the elements of the combined array and put them into the new array

*/















/*************************************************  ITERATING AN ARRAY ***********************************************************/

//In control flow, we learned about different loops in JS

//If we want to iterate an array, we can use for of loop
/*
const numbers = [1, 2, 3];

for (let number of numbers)
    console.log(number);  //1 2 3

//For each iteration number will be set to each element in the array

//There is also another way to iterate an array
//That is by using for each method
//All the arrays have for each method


//FOR EACH METHOD
//It takes call back function
//We pass a function. That function takes a parameters such as number
//In the body we can simply log this number on console

numbers.forEach(function (number) {
    console.log(number);  // 1  2 3
});

//When we call this forEach method, this function will be executed for each element in that array
//Each element will be passed as an argument to this function

//We can use arrow function sytax to simplify this code

numbers.forEach(number => console.log(number));

//This call back function  whivh we pass to the forEach method can optionally take second parameter and thats the index
//We can also display index of each number like this

numbers.forEach((number, index) => console.log(index, number));

//We dont get index with for of loop, if we need that we can use for in loop
*/















/*************************************************  JOINING ARRAYS ***********************************************************/

//Another useful method in arrays is join
//JOIN METHOD
/*
const numbers = [1, 2, 3];
//numbers.join()

//The first parameter is separator? which is a string
//Whenever there is a question mark, that means the parameter is optional
//So, we can optionally pass a string which will be used as a separator
//Lets say we wanna join these elements using a comma
//So, we pass comma as a string
//This join method returns a string

const joined = numbers.join(',');

console.log(joined);  //1,2,3




//SPLIT METHOD

//Another useful method that goes in hand in hadn with join is split method
//But this method is not part of arrays, it is part of strings

const message = 'This is my first message';

//we can split this message like this
//We need to pass separator string
//This method will return an arary

const parts = message.split(' ');
console.log(parts);
//Each element in the array is word in our original  message

//Now we have an array, so we can use join method to combine these arrays using separator

const combined = parts.join('-');
console.log(combined);  //This-is-my-first-message

*/

//This technique is particularly useful when building a URL slug
//I have opened a stack overflow website
//Tite of question is Creating arrays in Javascript
//We have white space in this question title
//But we cant have white space between urls
//Title ofquestion is converted into url slug httep..............creating-arrays-in-javascript
//All white spaces are replaced with the hyphen
//So we kind of converted title of question into url slug
//We have to split the string, replace some words with other words and then eventually combine them using a hyphen















/*************************************************  SORTING ARRAYS ***********************************************************/
/*
const numbers = [2, 3, 1];

//We can sort this array easily by sort method
//SORT METHOD

//this sort method converts each element to a string and then sorts the elements in the array

numbers.sort();
console.log(numbers); //[1, 2, 3]

//Another method companion to sort method is the reverse method
//REVERSE METHOD

//With this method, we can reverse order of elements in an array

numbers.reverse();
console.log(numbers); //[3, 2, 1]
*/





//When u have numbers and strings in an array, this sort method is easy to use
//But when we have objects like course obejcts, then it doesnt work by default, we need to do some extra work
/*
const courses = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'JavaScript' }
];
*/
//Lets say we wanna sort this array by name of courses
//So, javascript should come before nodejs
/*
courses.sort();
console.log(courses);
*/
//By sort, nothing is going to happen, Node will still come first

//This sort method optionally takes an argument and that is a function which is used for comparison
//So, when we call this sort method, it gets two obejcts from this array
//and compares them
//If they are in order, it will skip to next element, otherwise it will re-arrange them
//So, we need to pass a function for comparison
//This function should take 2 parameters, we can call them a and b or first and second
//Now in this function
//a < b => -1 , if a is less than b, it should return -1
//a > b => 1
//a === b => 0
/*
courses.sort(function (a, b) {

    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
})

//I am not using elseif, because if first condition is true, control will move out of this function

console.log(courses);
*/



//We can see that JavaScript is coming first

//However, if i change this J to lowercase j and save the changes then Node.js will come first

/*
const courses = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'javaScript' }
];
*/
/*
courses.sort(function (a, b) {

    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
})

console.log(courses);
*/

//Each character in computer is internally represented using a number
//In google, search ascii table //American standard code for information interchange
//There is numeric representation of each chracater
//j is represented as 106 and N is represented as 78
//78 is less than 106, thats why Node came first

//To solve this problem, we should remove case sensitivity when comparing these names
//So, we can use two constants
//We are gonna convert both to upperCase and then compare them
//Instead of toUppercase, we can also call toLowerCASE
//Both these names should be upperCase or both should be lowerCase
/*
courses.sort(function (a, b) {

    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
})

console.log(courses);
*/















/*************************************************  TESTING ELEMENTS OF AN ARRAY ***********************************************************/

//We have 2 new methods in JS called every and some


//EVERY METHOD

//const numbers = [1, 2, 3];

//Lets imagine we wanna check and see if all elements in this array are positive
//So we call numbers.every()
//And we pass a call back function which has 3 parameters -> Value whih is a number becuase here we have an array of numbers, index which is the index of this value and the array itself
//While writing this function, u dont need to add all the parameters
//U can only add the ones u

//Im going to add only one parameter value because i dont care about the index of these elements
//In the body of this function, we can check to see if that value is positive number
/*
numbers.every(function (value) {
    return value >= 0;
});
*/

//If this expression evaluates true, it will return true, othewise it will return false
//This method will return a boolean so we can store it
/*
const allPositive = numbers.every(function (value) {
    return value >= 0;
});

//What happens when we call this method(function)
//This method will run this function on every element in this array as soon as it finds an element that doesnt matches this creteria wriiten in body and then it will stop searching

console.log(allPositive);  //True

//We can see it is true because every element in the array is positive number

//If i add -1 in numbers array, we get false

const number = [1, -1, 2, 3];

const allPos = number.every(function (value) {
    return value >= 0;
});

console.log(allPos);  //False

//As soon as we hit the negative number(-1) in array, the search will terminate
//So, if we have million of other numbers in the array this every method call abck function is not gonna call those extra numebrs






//SOME METHOD

//We have a similar method some
//This method checks if we have atleast one element in the array that matches the creteria


const atLeastOnePos = number.some(function (value) {
    return value >= 0;
});

console.log(atLeastOnePos);  //True
*/

//This some method will run this call back function on every element in this array
//As soon as it finds an element that matches the creteria, its going to return true and the search will terminate
//SO, in this example if we have million elements in the array. Because the first element matches the creteria thats why the call back function will be executed only on first element
//So, it doesnt matter what we have after the first element



//every() checks to see if every element in the array matches the given creteria
//some() checks to see if we have atleast one element that matches the given creteria
//These methods are new in JS, so some older browsers dont support this















/*************************************************  FILTERING AN ARRAY ***********************************************************/

//How to filter an array based on search creteria?

//Lets say we only want to return positive numbers
//So, we can use filter method like this numbers.filter()
//We need to pass a call back function which has three parametere -> value, index and array

//At now, we only care about value because i just wanna see if value or number is positive, i dont care abou the index
//In body, we can write creteria

//This filter method will look thorough the array and execute this call back function for each number or element
//If the element matches this creteria, it will add the element to a new array and we can store that new array

//const numbers = [1, -1, 2, 3];

/*
const filtered = numbers.filter(function (value) {
    return value >= 0;
});

console.log(filtered);  //[1, 2, 3]
*/

//We have single line of code and we are simply returning a value, so we can use arrow function here
/*
const filtered = numbers.filter(value =>  value >= 0);

console.log(filtered);
*/

//Now we can make this code a little bit shorter
//In this case, we can use abbreviation v for value or n for number as it is obvious we are working with the numbers array
/*
const filtered = numbers.filter(n => n >= 0);

console.log(filtered);
*/

//So with filter we get numbers where number is greater than or equal to zero
//Here we are dealing with array of numbers

//In real world applications, u would be using an array of objects
//For example on yelp website, we can click on bun open now, it is a kind of filter which shows only those restauarnts that are open now
//So, if u wanna implement something like this, u would have an array of restaurants
//Each restaurant has opening hour
//So, u can filter restaurants that are currently open and return them
















/*************************************************  MAPPING AN ARRAY ***********************************************************/

//Another very useful and powerful method we have in modern JS is map method
//With this method, we can map each element in the array to something out

//Following from an example in last lec
/*
const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(n => n >= 0);

console.log(filtered);

//We have an array of positive numbers

//Lets say u wanna construct some html markup using the elements in this array
//So, we call filtered.map()
//Once again, we need to pass a call back function
//This call back function can have 3 parameters -> Value, index and array
//In this case, we are only going to work with value
//We gonna map the number with some html markup
//So we can add a string in openig list item thn we add number and then closing list item
//With this markup, we can display each number using a bullet point
//Of course, we need to put them in ul element

const items = filtered.map(n => '<li>' + n + '</li>');

console.log(items);  //['<li>1</li>', '<li>2</li>', '<li>3</li>'

//We can see each number is now mapped to a string
//Now we have an aray of strings

//We can use the join method to join elements of this array and create a string

//const html = items.join();
//console.log(html);  //<li>1</li>,<li>2</li>,<li>3</li>

//Now instead of an array, we have a string
//Note that by default, coma is used as a separator
//We dont have coma in our html markup
//We just wanna combine these using an empty character like this

//const html = items.join('');
//console.log(html);  //<li>1</li><li>2</li><li>3</li>

//Now that coma is gone

//Only thing now remaing is the ul element

//We add <ul> and then concatenate it with all the items and then finally other ul

const html = '<ul>' + items.join('') + '</ul>';
console.log(html);  //<ul><li>1</li><li>2</li><li>3</li></ul>
*/

//So here is our html markup to display all these numbers using bullet point

//We can use the map method to map each element in array into something else
//In this example, we are mapping these numbers to string
//We can also map them to objects




//Lets look at another example
/*
const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(n => n >= 0);
*/

//Instead of mapping a number to string, lets say we wanna map them to an object
//Im gonna define an object
//In this object, we will have a value property and we will set that to this number and finally u wanna return this object

/*
const items = filtered.map(n => {

    const obj = { value: n };
    return obj;
})

console.log(items);
*/

//This is the result of our map
//(3)[{… }, {… }, {… }]
//0: { value: 1 } value: 1[[Prototype]]: Object
//1: { value: 2 }
//2: { value: 3 }
//length: 3[[Prototype]]: Array(0)

//We mapped each number to an obejct with value property
//It is useful while building real world applications

//In this call back function, we are declaring a constanat and then returning it
//Technically, we dont need to declare it as a separate constant
//We can simply put return keyword and return the object
//Because we are not working with that object constant

/*
const items = filtered.map(n => {
    return { value: n };
})

console.log(items);
*/




//In ur arrow function, if u have single line of code an u are returning a value, u can exclude the return keyword as well as the curly braces

//const items = filtered.map(n => { value: n });

//console.log(items);  //(3) [undefined, undefined, undefined]

//We dont get the same result
//We get an array of 3 undefined elements
//The reason is this that by default these curly braces in an arrow function represent a code block
//So JS engine tries to parse this arrow function, it thinks here that we are defining a code block as a postonal object to return here
//So, if we aew returning an object, we need to put parenthesis() around the object
//With this our JS engine will not look at it as a code block
/*
const items = filtered.map(n => ({ value: n }));

console.log(items);
*/

//Now we get 3 obejcts



//Both the filter and map method return a new array
//They dont modify the original array

//These methods are chainable
//We can call them one after another in a chain

//In this case the filtered constant is only used in map method
//We havent use it anywhere else in the code
//So, we dont need to store the result of filtered object in a separate constant
/*
const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(n => n >= 0);

const items = filtered.map(n => ({ value: n }));

console.log(items);
*/

//Instead we are gonna immediately call the map method on the result that is returned by filter statement

//const numbers = [1, -1, 2, 3];

//numbers.filter(n => n >= 0).map(n => ({ value: n }));

//This is what we call chaining
//We are calling one method which returns some result and then we are immediately calling map method on that result
//When chaining multiple methods, by convention we put each method call on a separate line and this makes our code cleaner like this

/*
const items = numbers
    .filter(n => n >= 0)
    .map(n => ({ value: n }));

console.log(items);
*/
//This is a better and cleaner code


//Because the map method is returning a new array, again we can call filter or map method on that array
//We can put a filter and get objects with value greater than

/*
const items = numbers
    .filter(n => n >= 0)
    .map(n => ({ value: n }))
    .filter(obj => obj.value > 1);

console.log(items);  //(2) [{…}, {…}]0: {value: 2}1: {value: 3}length: 2[[Prototype]]: Array(0)

//We get only 2 objects in the array
//Objects with value 2 and 3

//Again we can call the map method
//We can map each obejct to a number
//So we read the value property and return it

const itemss = numbers
    .filter(n => n >= 0)
    .map(n => ({ value: n }))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);

console.log(itemss);   //2) [2, 3]0: 21: 3length: 2[[Prototype]]: Array(0)
*/

//We gwt an array of 2 numbers
















/*************************************************  REDUING AN ARRAY ***********************************************************/

//const numbers = [1, -1, 2, 3];

//Lets say we wanna calculate sum of all numbers in this array
//This will be equal to calculating all the cost of items in a shopping cart
//So, each number here will represent price of an item in a shopping cart
//Here is an algorithm for calculating sum of all the numbers in an array
/*
let sum = 0;

for (let n of numbers)
    sum += n;

console.log(sum);   //5

//There is a cleaner and elegant way to write the same code using the reduce method in an array

//All arrays have reduce method and with this method we can reduce all the elements in an array into a single value
//The single value can be a number, a string, an object, it can be anything

//In this example, we want to reduce all the elements into single numbers which is sum of those elements

//This method takes a call back function with 2 parameters -> accumulator and current value
//This accumulator parameter is exactly like sum we have above
//It is something we initialize
//And then this call back function is executed multiple times
//Each time the current value will be set to one element in this array
//With each call, we are gonna get this current value and we will add it to accumulator

numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

//Internally, the reduce method will get this result and store it in the accumulator
//One more thing to do is to intialize acccumulator to zero

//So, as second argument to reduce method, we pass zero

numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
*/
//Note that this reduce method has 2 arguments
//First argument is the call back function
//Second argument is the intial value for the accumulator

//Finally we get result as single value, in this case sum
/*
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum); //5

//What exactly is happening here?

//INitially we set accumulator to zero a = 0
//In the first round, current value will be set to the first number in array that is to 1 c = 1
//Then we add both of these together, so a will be set to 1 after the call back function executed, a = 1
//a = 0, c = 1 => a = 1

//Now in second round, a is 1, current value will be set to secocnd number in this array that is -1, and once again we will add thm togetehr so a will be zero after second call
//a = 1, c = -1 => a = 0

//a = 0, c = 2 => a = 2
//a = 2, c = 3 => a = 5

//With reduce method, we start with an accucmulator. Then we look thorough this array and convert all numbers in the array into single value which is in this case accumulator or sum of all numbers in array

//Now we can make this code even shorter
//We can exclude the initialization of the accumulator
//With this accumulator will be set to first element of array that is 1
//a = 1, c = -1 => a = 0, it is exactly like second call in above code
//Second round, a = 0, c = 2 => a = 2
//Last call a = 2, c = 3 => a = 5

//If we dont simplify, intial value will have one more call
//If we simplify, initila value will be set to first number in array


const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

console.log(sum); //5

//We can make it even more short
//We can get rid of return keyword as we are returning a single line of code and exclude curly braces

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(sum); //5
*/

//With this single line of code, we reduce the number arrays
//and this is how our reduction algorithm works
//U simply get current value and add it to accumulator
//It is far more elegant and simple than looping and sum etc




















//EXERCISE



/*************************************************  ARRAY FROM RANGE ***********************************************************/

//Write a function called  arrayFromRange
//This function should take 2 parameters min and max
//When we run this prgrm, we get an array and in this array we have number from min to max
//We can also pass negative number like -10 to -4 so we get an array like this => -10, -9, -8, -7, -6, -5, -4
/*
const numbers = arrayFromRange(10, -4);

console.log(numbers);

//First we create an empty array called output
//Now we need a for loop to generate numbers between min and max
//Finally we will return this output

function arrayFromRange(min, max) {

    const output = [];
    for (let i = min; i <= max; i++)
        output.push(i);
    return output;
}
*/
//If the max value second parameter is less than min, we get an empty array





















//EXERCISE



/*************************************************  INCLUDES ***********************************************************/
/*
const numbers = [1, 2, 3, 4];

//We have seen include method before
//With this method we can check to see if given element exists in the array

console.log(numbers.includes(1)); //True

console.log(includes(numbers, 5));

//Imagine we dont have this method in arrays
//U need to implement this function urself
//Write a function includes that takes an array and a search element
//If we have search element in the array, it should return true othwerwies it should return false

function includes(array, searchElement) {

    for (let element of array)
    if (element === searchElement)
            return true;
    return false;
}
*/
//We are gonna iterate over array, if we find an element equal to searchelement, we will return true, otherwise we will return false

//If the max value second parameter is less than min, we get an empty array





















//EXERCISE



/*************************************************  EXCEPT ***********************************************************/

//We have a function called except that takes an array and another array having element that we wanan exclude from our array
//So, this function returns a new array without tha value we passed in secod parameter
//It doesnt matter how many same elements of number we have like if we pass 1, it will remove all ones from array
/*
const numbers = [1, 2, 3, 4, 1];

const output = except(numbers, [1, 2]);

console.log(output);

//If this exluded array includes this element in the array
//If the current element is not equal to excluded element, then we will apply not operator
//And then we will add that element in our output array

function except(array, excluded) {

    const output = [];

    for (let element of array) 
        if (!excluded.includes(element))
            output.push(element)

    return output;

}
*/





















//EXERCISE



/*************************************************  MOVING AN ELEMENT ***********************************************************/

//We have this function called move
//We use it to move an element in array
//We give it an array, index of the element we want to move and an offset
//In this case, i want to move first elemnet which is at zero index
//I pass 0 as offset
//Nothing is gonna change, we are gonna get the same array
//If i pass 1 as offset, element at first index which is 1 moves one position to the right
//If i pass 3 as an offset. 1 moves at 3rd index
//If i pass anything more than length of array, i get error, invalid offset
//To display errors, we use a method
//console.error('Invalid offset');
//This offset can also be a negative number
//Lets say we wanna move 2nd element which one position to the left
//So, we set offset to -1 and index to 1
//Original array is not affected
//so, we get a new array with items re-ordered

/*
const numbers = [1, 2, 3, 4];

const output = move(numbers, 1, -2); 

console.log(output);  

function move(array, index, offset) {

    //We need to do some basic validation before running the algorithm
    //We define a constant that is position, new position and thats gonna be index + offset
    const position = index + offset
    //Now we will put a check to see if position is out of bound from array
    //If we pass greter value than array length, we should see error om console and if position is negative no, we should display an error
    //And finally we return so that rest of function is not executed
    if (position >= array.length || position < 0) {
        console.error('Invalid OffSet');
        return;
    }
    //The other option than returning is to put an else block and put other algorithm in it which is unneccessary

    //The first thing we want to do is copy the array, because we dont want to modify the original array
    //We will use spread operator dor this
    //This will be clone of original array

    const output = [...array];

    //Now as part of moving an element, first we have to remove it from the array and then put it into the right position
    //To remove an element from the array, we use splice method
    //We give it the index and delete element as parameter, the return value is an array
    //It returns an array, so items that have been removed will return as an array
    //In this case we are removing one element, we can access first element in the array and that will return the element which is deleted
    //Lets store it in separate constant
    //We are storing it because next we need to add it back to the array

    const element = output.splice(index, 1)[0];

    //Now we wanna add this to a specific position
    //Once again, we need to use the splice method
    //Where we are gonna place it?
    //We aregonna go to index + offset
    //We dont want to delete any items so we pass zero
    //And finally we pass element that we want to place in the array

    //output.splice(index + offset, 0, element);
    output.splice(position, 0, element);

    //Finally we return the output

    return output;

}
*/





















//EXERCISE



/*************************************************  COUNTING OCCURENCES ***********************************************************/

//Create a function called count occurences
//This function takes and array and a searchElement and returns and returns number of times the search element has occurred in the array
//If the search element doesnt exist in the array, it should return zero
//Implement by simple and reduce method in the arrays because here we are reducing the entire array with anumber and that number represents the times the no has occurred
/*
const numbers = [1, 2, 3, 4, 1];

const count = countOccurrences(numbers, 1);

console.log(count);
*/

//Basic implementation
/*
function countOccurrences(array, searchElement) {

   let count = 0;
    for (let element of array)
        if (element === searchElement) 
            count++;
    return count;
          
}
*/

//Using reduce method
//Accumulator represents number of times search element has occurred in our array
//So, im gonna initialzie it with zero
//Now every time this call back function is called, we wnt to compare currentValue with searcElement
//If they are equal, we should return accumulator + 1, otherwise we should return accumulator
//We are gonna define a constant occurence and by conditional operator we will add 1 to accumulator if searchelement equals current otherwise we will add zero
//Finally we will return accumulator + occurrence
/*
function countOccurrences(array, searchElement) {

    return array.reduce((accumulator, current) => {

        const occurrence = (current === searchElement) ? 1 : 0;
       // console.log(accumulator, current, searchElement);
        return occurrence + accumulator;
    }, 0);

}
*/





















//EXERCISE



/*************************************************  GET MAX ***********************************************************/

//Create function getMax //We give it an array and it returns largest number in that array
//If we give it an empty array, it returns undefined
//We cant return 0 or -1 as none of the values if exist in array so we return undefined
/*
const numbers = [1, 2, 4, 3];

const max = getMax(numbers);

console.log(max);
*/
//Basic Implementation
/*
function getMax(array) {
    let max = array[0];

    for (let n of array)
        if (n > max)
            max = n;
    return max;
}
*/

/*
function getMax(array) {

    //First we want to see if the array is empty or not
    //If it is empty, we are gonna return undefined
    if (array.length === 0) return undefined;

    //We wanna assume that first element is the largest number
    let max = array[0];
    //We are gonna iterate over array and if we find number larger than max, we will reset it
    //We start from second element in array at index 1
    for (let i = 1; i < array.length; i++)
        if (array[i] > max)
            max = array[i];
    return max;
}
*/

//REDUCE METHOD

//If we dont pass initial value, accumulator will bydefault set to first element in the array
/*
function getMax(array) {
    if (array.length === 0) return undefined;

    array.reduce((accumulator, current) => { 
        //If current value is greater than accumulator, we want to eturn current value, otherwise we will return accumulator

        //if (current > accumulator)
           // return current;
        //return accumulator;

        //We can write it using conditional operator
        return (current > accumulator) ? current : accumulator;
           
    });
}

//We can make this code more cleaner by renaming parameters 

function getMax(array) {
    if (array.length === 0) return undefined;

    array.reduce((a, b) => {       
       // return (b > a) ? b : a;
        return (a > b) ? a : b;
    });
}
*/
//We can put it in a single line
/*
function getMax(array) {
    if (array.length === 0) return undefined;
    return array.reduce((a, b) =>  (a > b) ? a : b);
}
*/
//Anytime u have an array of values and u want to get single value as resulr of iterating over array, think of reduce method





















//EXERCISE



/*************************************************  MOVIE ***********************************************************/

//Lets declare a constant called movies and set it to array of objects
//In this array, we are gonna have 4 movie objects
//In each object, we are gonna have 3 properties => title, year, rating
//Shift Alt down arrow to duplicate current line
/*
const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3 },
    { title: 'd', year: 2017, rating: 4.5 },
];
*/

//With this array of movies, get all movies in 2018 with rating greater than 4
//Sort them by theri rating in descending order
//So, movies with higher ratings should come first
//Pick onlt their titl property and display it on console

//So we wanna filter movies by their year and rating
/*
const filtered = movies
    .filter(m => m.rating >= 4 && m.year === 2018);
console.log(filtered);
*/

//These methods are chainalce
//Because filter retuens a new array
//So we can immediately apply on filter array

//For sort
//If a > b -> return positive no
//If a < b -> return negative no
//If a === b -> return 0

//We can simply subtract a.rating - b.rating
//If a = 4.7 and b = 4.5, a - b = 0.5 which is positive no , so a > b
//So, we dont need 3 if statemnets
/*
movies
    .filter(m => m.rating >= 4 && m.year === 2018)
    .sort((a, b) => a.rating - b.rating)
//This sort method returns value in ascending order
//We need in descending order
//So, we need to call reverse method to change order of movies

movies
    .filter(m => m.rating >= 4 && m.year === 2018)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    */

//Finally we need only title of movies, so we use map method
/*
const titles = movies
    .filter(m => m.rating >= 4 && m.year === 2018)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title);

console.log(titles);  //['b', 'a']
*/

