// JavaScript source code


/******************* EXAMINING DOM *************************/
/*

let val;
val = document;
val = document.all;  //HTML COLLECTION
//Access index or items
val = document.all[0];
val = document.all[1];
val = document.all[2];
//Length Property
val = document.all.length; //43
//Access Elements Without Selectors
val = document.head;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;
val = document.forms;
val = document.forms[0];
val = document.forms[1];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;
val = document.links;         //Collection of links
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList; //Collection of classes
val = document.links[0].classList[0];
val = document.images;  //HTML Collection
val = document.scripts;  
val = document.scripts[2].getAttribute('src');
*/

//ForEach with collection
/*
let scripts = document.scripts;
scripts.forEach(function (script) {
    console.log(script);
});
//ERROR-> forEach is not a function
*/


/*
//Converting HTML Collection to Array
//Array.from Method
let scripts = document.scripts;
let scriptsArr = Array.from(scripts);
scriptsArr.forEach(function (script) {
    console.log(script);
});

scriptsArr.forEach(function (script) {
    console.log(script.getAttribute('src'));
});

console.log(val);
*/



























/*******************  DOM SELECTORS FOR SINGLE ELEMENTS *************************/



/*
//BY ID
//document.getElementById()

//Select h5 by ID
console.log(document.getElementById('task-title'));
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

//Styling
document.getElementById('task-title').style.background = '#333';
document.getElementById('task-title').style.color = '#fff';
document.getElementById('task-title').style.padding = '5px';
//Disappear something
//document.getElementById('task-title').style.display = 'none';
//Change Content
document.getElementById('task-title').textContent = 'TASK LIST';
//InnerText
document.getElementById('task-title').innerText = 'My Tasks';
//Inner HTML
//document.getElementById('task-title').innerHTML = '<span style = "color: red">Task List</span>';
//Better way is this 
const taskTitle = document.getElementById('task-title');
taskTitle.innerHTML = '<span style = "color: red">Task List</span>';




//Query Selector
//document.querySelector()

//Accessing Things
//By Id
console.log(document.querySelector('#task-title'));
//By Class
console.log(document.querySelector('.card-title'));
//Selector itself
console.log(document.querySelector('h5'));
//If there are more selectors, it gets first pne
console.log(document.querySelector('li'));
document.querySelector('li').style.color = 'red';
//Sub Classes / Nested Elements
document.querySelector('ul li').style.color = 'blue';
//Pseudo-Classes
document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';
document.querySelector('li:nth-child(odd)').style.background = '#ccc';  //Only for 1st ODD
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';  //Only for 1st EVEN
*/


























/*******************  DOM SELECTORS FOR MULTIPLE ELEMENTS *************************/
/*
//Return HTML collection

//BY CLASS NAME
//document.getElementsByClassName();

const items = document.getElementsByClassName('collection-item');   //Globally class of collection items get
console.log(items);
console.log(items[0]);
items[0].style.color = 'red';
items[3].textContent = 'Hello';

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');    //Specifically inside ul ones having class of collection items
console.log(listItems);




//BY TAG NAME
//document.getElementsByTagName()

let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
lis[0].style.color = 'blue';
lis[1].textContent = 'Item';

//HTML Collection -> Not an Array
//lis.reverse();  //ERROR

//Conversion

lis = Array.from(lis);
lis.reverse();
console.log(lis);

lis.forEach(function (li) {
    console.log(li);
});

lis.forEach(function (li) {
    console.log(li.className);
});

lis.forEach(function (li) {
    li.textContent = 'Hello';
});

lis.forEach(function (li, index) {
    console.log(li.className);
    li.textContent = `${index}: Hello`;
});




//QUERY SELECTOR ALL
//document.querySelectorAll()

//Returns Node List
const itemss = document.querySelectorAll('ul.collection li.collection-item'); 
console.log(itemss);

//We can do forEach without converting to array

itemss.forEach(function (item, index) {
    item.textContent = `${index}: Hello World`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
liOdd.forEach(function (li, index) {
    li.style.background = '#ccc';
});

const liEven = document.querySelectorAll('li:nth-child(even)');
//liEven.forEach(function (li, index) {
//    li.style.background = '#f4f4f4';
//});

for (let i = 0; i < liEven.length; i++) {
    liEven[i].style.background = '#f4f4f4';
}

*/


























/*******************  TRAVERSING THE DOM *************************/

/*
//Moving up and down

let val;
const list = document.querySelector('ul.collection');
//const listItem = document.querySelector('li.collection-item');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

//GET CHILD NODES
val = list.childNodes;  //Node List
//Text Nodes-> Line breaks
//GET CHILDREN ELEMENT
val = list.children;    //HTML Collection

val = list.children[0];
val = list.childNodes[0];
val = list.childNodes[0].nodeName;

//Node Type
val = list.childNodes[0].nodeType;  //3
val = list.childNodes[1].nodeType;  //1

//Numbere referring node types
//1. Element
//2. Attribute(depricated)
//3. TextNode
//8. Comment
//9. Document itself
//10. DocType

//childnodes - > Give any Type
//children - > Give only elements

val = list.children[0];
list.children[1].textContent = 'Hello';


//CHILDREN OF CHILDREN

val = list.children[3].children;
val = list.children[3].children[0];
list.children[3].children[0].id = 'test-link';

//FIRST CHILD
val = list.firstChild;

//FIRST ELEMENT CHILD
val = list.firstElementChild;

//LAST CHILD
val = list.lastChild;

//LAST ELEMENT CHILD
val = list.lastElementChild;

//COUNT
val = list.childElementCount;


//GET PARENT NODE
val = listItem.parentNode;

//PARENT ELEMENT
val = listItem.parentElement;

val = listItem.parentElement.parentElement;


//SIBLINGS

//GET NEXT SIBLING
val = listItem.nextSibling;

//NEXT ELEMENT SIBLING
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;

//PREVIOUS SIBLING
val = listItem.previousSibling;

//PREVIOUS ELEMENT SIBLING
val = listItem.previousSibling.previousSibling;  //null

val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;


console.log(val);

*/


























/*******************  CREATING ELEMENTS *************************/
/*
//Create Element
const li = document.createElement('li');

//Add Class
li.className = 'collection-item';

//Add Id
li.id = 'new-item';

//Add attribute
li.setAttribute('title', 'New Item');

//Create Text Node and Append
li.appendChild(document.createTextNode('Hello World'));

//Append li as a child to ul
document.querySelector('ul').appendChild(li);

//Create new link element
const link = document.createElement('a');

//Add Class
link.className = 'delete-item secondary-content';

//Add icon //Add innerHTML
link.innerHTML = `<i class = "fa fa-remove"></i>`;

//Append this link to li
li.appendChild(link);

console.log(li);
*/


























/*******************  REMOVING AND REPLACING ELEMENTS *************************/

/*
//REPLACE ELEMENTS

//Create Element
const newHeading = document.createElement('h2');

//Add an ID
newHeading.id = 'task-title';

//Add text Node
newHeading.appendChild(document.createTextNode('Task List'));

//Get Old Heading
const oldHeading = document.getElementById('task-title');

//Parent
const cardAction = document.querySelector('.card-action');

//Replace
cardAction.replaceChild(newHeading, oldHeading);

console.log(newHeading);





//REMOVE ELEMENTS
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

//Remove a list item
lis[0].remove();

//Remove Child Element
list.removeChild(lis[2]);



//Classes And Attributes
const firstLi = document.querySelector('li:first-child');
console.log(firstLi);

const link = firstLi.children[0];
console.log(link);

let val;
//className
val = link.className;
//classList
val = link.classList;
val = link.classList[0];
//Add a class using classList
link.classList.add('test');
val = link;
//Remove class
link.classList.remove('test');

console.log(val);


//Attributes
//Get Attribute
val = link.getAttribute('href');
//Check Attribute
val = link.hasAttribute('href');
val = link.hasAttribute('title');
//Add Attribute
link.setAttribute('title', 'Google');
val = link;
//Remove Attribute
link.removeAttribute('title');
console.log(val);
*/



























/*******************  EVENT LISTENER AND EVENT OBJECTS *************************/

//Add event Listener to clear tasks button
//Prevent default behavior -> Event object
/*
document.querySelector('.clear-tasks').addEventListener('click', function (e) {
    console.log('Clicked');
    e.preventDefault();
});
*/
/*
document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
    let val;
    val = e;
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;
    e.target.innerText = 'Hello';
    //Event Type
    val = e.type;
    console.log(val);
   e.preventDefault();
}

document.querySelector('.clear-tasks').addEventListener('mouseover', atClick);

function atClick(e) {
    let val;
    //Event Type
    val = e.type;
    val = e.timeStamp;
    //Get coordinates of events relative to browser windoe
    val = e.clientY;
    val = e.clientX;
    //Get coordinates relative to element
    val = e.offsetY;
    val = e.offsetX;
    console.log(val);
    e.preventDefault();
}
*/



























/*******************  MOUSE EVENTS  *************************/

/*
//Create couple of variables for selectors
const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

//Create Event Handler
function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);
    e.preventDefault();
}

//Click
clearBtn.addEventListener('click', runEvent);

//Double Click
clearBtn.addEventListener('dblclick', runEvent);

//MouseDown
clearBtn.addEventListener('mousedown', runEvent);

//MouseUp
clearBtn.addEventListener('mouseup', runEvent);

//Mouseenter
//clearBtn.addEventListener('mouseenter', runEvent);
card.addEventListener('mouseenter', runEvent);

//Mouse leave
card.addEventListener('mouseleave', runEvent);

//Mpuse over
card.addEventListener('mouseover', runEvent);

//Mouseout
card.addEventListener('mouseout', runEvent);

//Mouse move
card.addEventListener('mousemove', runEvent);

function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);
    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
}

function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);
    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
    document.body.style.background = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;

}
*/



























/*******************  KEYBOARD AND INPUT EVENTS  *************************/

/*
const form = document.querySelector('form');
const taskInput = document.getElementById('task');

//form.addEventListener('submit', runEvent);
//taskInput.value = '';


function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`);
    //Get Input Value
    console.log(taskInput.value);
    e.preventDefault();
}

//Key down event
//taskInput.addEventListener('keydown', runEvent);


function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);
    console.log(taskInput.value);
    console.log(e.target.value);
    e.preventDefault();
}


const heading = document.querySelector('h5');

function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);
    console.log(e.target.value);
    heading.innerText = e.target.value;
    e.preventDefault();
}

//Key up
//taskInput.addEventListener('keyup', runEvent);

//Key press
//taskInput.addEventListener('keypress', runEvent);

//Focus
//taskInput.addEventListener('focus', runEvent);

//Blur
//taskInput.addEventListener('blur', runEvent);

//Cut
//taskInput.addEventListener('cut', runEvent);

//Paste
//taskInput.addEventListener('paste', runEvent);

//Actual Input Events
//taskInput.addEventListener('input', runEvent);



//Change Event
const select = document.querySeletor('select');
select.addEventListener('change', runEvent);
*/



























/*******************  EVENT BUBBLING AND DELEGATION  *************************/

//EVENT BUBBLING

/*
document.querySelector('.card-title').addEventListener('click', function () { console.log('card-title') });
//Parent of card-title -> card-content
document.querySelector('.card-content').addEventListener('click', function () { console.log('card-content') });
//Parent of card-content -> card
document.querySelector('.card').addEventListener('click', function () { console.log('card') });
//Parent of card -> col
document.querySelector('.col').addEventListener('click', function () { console.log('col') });



//EVENT DELEGATION


const delItem = document.querySelector('.delete-item');
/*
delItem.addEventListener('click', deleteItem);
function deleteItem() {
    console.log('delete item');
}
*/

//document.body.addEventListener('click', deleteItem);
/*
function deleteItem(e) {
    //Find Target
    console.log(e.target);
    //Add condition
    if (e.target.parentElement.className === 'delete-item secondary-content')
        console.log('delete item');
}*/

//Better Way
/*
function deleteItem(e) {
    if (e.target.parentElement.classList.contains('delete-item')){
        console.log('delete item');
        e.target.parentElement.parentElement.remove();
    }
}
*/



























/*******************  LOCAL AND SESSION STORAGE  *************************/

/*
//set local storage
localStorage.setItem('name', 'Fakhra');

//set session storage
sessionStorage.setItem('name', 'Beth');

//remove from storage
//localStorage.removeItem('name');

//get from storage

const name = localStorage.getItem('name');
console.log(name);

//set another value
localStorage.setItem('age', '18');
const age = localStorage.getItem('age');
console.log(name, age);
*/

//Add task to form
document.querySelector('form').addEventListener('submit', function (e) {
    const task = document.getElementById('task').value;
    let tasks;
    if (localStorage.getItem('tasks') === null)
        tasks = [];
    else
        tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    alert('Task Saved');
    e.preventDefault();
})










