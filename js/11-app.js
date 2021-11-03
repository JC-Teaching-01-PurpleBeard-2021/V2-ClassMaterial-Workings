// In Javascript, functions are values ( first-class citizens ). This means that they can be assigned to a variable and/or passed as a value.
// This single piece of knowledge allows us to write functional programming in this language.

// ---- Function Expression ---- \\
// Put a function in a variable ( when doing this you drop the function name)
/*
let func = () => {
	console.log('Hi');
};

func();
*/

//
// ---- Higher order functions ---- \\
// pass a function into a function as an argument
//(remember to add the () to the function once it is 'inside' the function)
/*
func2 = () => {
	return 'Hi';
};

highOrder = (f) => {
	console.log(f());
	console.log(f() + ` some extra text`);
};

highOrder(func2);
*/

//
// ---- creating a method ---- \\
// Method is always a function but function is not always a method
// Method is a property on an object
// method has a dot in front of it and () at the end to invoke it
/*
// Methods we have seen before
console.log('hello everyone'.toUpperCase()); // This is a string method
*/

/*
// Building your own method
const boxOfTricks = {
	moreText: ' some more text you have not seen before',
	cube: function (n) {
		return n ** 3;
	},
};

// console.log(boxOfTricks);
// console.log(boxOfTricks.moreText);

// console.log(`hello everyone ${boxOfTricks.moreText}`);
// console.log(boxOfTricks.cube(2));
*/
//
// ---- Key word this ---- \\
// Commonly used within a method
// because you want to access things within an object
/*
const expObject = {
	firstName: 'John',
	lastName: 'Doe',
	fullName: function () {
		return `The full name is ${this.firstName} ${this.lastName}`;
	},
};

console.log(expObject.fullName());
*/

//
// ---- try and catch ---- \\
/*
func3 = (w) => {
	try {
		console.log(w.toUpperCase());
	} catch (e) {
		console.log(`Something went wrong!!! ${e}`);
	}
	console.log(`I still ran!!!`);
};

// func3('hello');
func3(10);
*/

//
// ---- Section Example 1 ---- \\
// validation check of an email address
/*
function checkUserEntry() {
	let userEntry = document.getElementById('email').value;
	if (userEntry.length == 0) {
		throw new Error('please provide an email address');
	} else if (userEntry.indexOf('@') === -1) {
		throw new Error('please provide a valid email address');
	}
	document.getElementById('console').innerHTML = `<h3 style="color:green"> Your email is: </h3>` + userEntry;
}

function validateEntry() {
	try {
		checkUserEntry();
	} catch (error) {
		document.getElementById('console').innerHTML = `<h3 style="color:red"> Warning: </h3>` + error.message;
	}
}

document.getElementById('myBtn').addEventListener('click', validateEntry);
*/
// ======================================================
// Take a break
// ======================================================

//
// ---- ES6 Section ---- \\
// These art some methods that have been brought into ES6
// https://en.wikipedia.org/wiki/ECMAScript

//
// padstart() - Method Used to apply padding to the start of a string targeted length
/*
let str1 = 'Hello Tish';

console.log(str1.padStart(20, '0'));
console.log(str1.padStart(20, '*'));
console.log(str1.padStart(20));
*/

//
// padend() - Method Used to apply padding to the end of a string targeted length
/*
let str2 = 'How Is Ethan today';

console.log(str2.padEnd(30, '?'));
console.log(str2.padEnd(30, ';-)'));
console.log(str2.padEnd(30));
*/

//
// Includes() - Method to see if an array includes searched item
/*
const str3 = ['Trainers', 2, 'Drinks Bottle', 1, 'Protein Bar', 1];

console.log(str3.includes('Protein Bar'));
console.log(str3.includes(1));
console.log(str3.includes('P'));
console.log(str3.includes(2, 3)); // includes(searchElement, fromIndex)
*/

//
// map() - applies a function to each item in an array and returns a new array
/*
const str4 = [4, 9, 16, 25];
let resultSqrt = str4.map(Math.sqrt);

console.log(resultSqrt);
*/

//
// Filter() - filters an array in relation to the function pasted in
/*
const str4 = [4, 5, 9, 16, 25, 5];

func10 = (a) => {
	return a === 5;
};

let result5 = str4.filter(func10);

console.log(result5);
*/

//
// Reduce() - Takes the value @ index of 0 and adjusts it per the function on all the other values
/*
const str5 = [255, 5, 50];

Func11 = (total, n) => {
	return total + n;
};

console.log(str5.reduce(Func11));
*/

//
// Foreach() - a lot like the for of loop, and normally used with an anonymous function
/*
const fruits = ['apple', 'orange', 'cherry'];

fruits.forEach((e) => console.log(e.toUpperCase()));

// today you are more like to see:
// for (let e of fruits) {
// 	console.log(e.toUpperCase());
// }
*/
//
// ---- Section Example 2 ---- \\
/*
const fruits = ['apple', 'orange', 'cherry', 'PEACH'];

cap = (e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase();

const fruitList = fruits.map(cap);

console.log(fruitList);
let node1 = document.getElementById('example2');

for (let f of fruitList) {
	let newOption = document.createElement('option');
	newOption.textContent = f;

	node1.appendChild(newOption);
}
*/

//
// ---- JSON Section ---- \\
// This is what JSON looks like (name/value pairs):
/*
// {"name":"John", "age":30, "city":"New York"}

// stringify() - used to turn an object into a JSON object
// let myObj = { name: 'Chris', age: 38 };
// console.log(myObj);
// let myStringify = JSON.stringify(myObj);
// console.log(myStringify);

// parse() - used to turn a JSON into an object
const json = '{"name":"John", "age":30, "city":"New York"}';
console.log(json);
const obj = JSON.parse(json);
console.log(obj);
*/
//
// ---- Section Example 3 ---- \\
/*
let myJSON = `[{"FirstName":"Michael", "LastName":"Smith", "age":30},
                {"FirstName":"Mila", "LastName":"Doe", "age":32},
               {"FirstName":"Paul", "LastName":"Heath", "age":29},
               {"FirstName":"Dennis", "LastName":"Johnson", "age":25},
               {"FirstName":"Tim", "LastName":"Homes", "age":27},
               {"FirstName":"Erik", "LastName":"Right", "age":24}]`;

console.log(myJSON);
console.log(JSON.parse(myJSON));

let myJSONParsed = JSON.parse(myJSON);

function buildTable(data) {
	let table = document.getElementById('myTable');

	for (let i = 0; i < data.length; i++) {
		let row = `<tr>
                        <td>${data[i].FirstName}</td>
                        <td>${data[i].LastName}</td>
                        <td>${data[i].age}</td>
                  </tr>`;
		table.innerHTML += row;
	}
}

buildTable(myJSONParsed);
*/
//
//
// ---- Setting Up API Account ---- \\
// GO TO THE NEXT CLASS......
