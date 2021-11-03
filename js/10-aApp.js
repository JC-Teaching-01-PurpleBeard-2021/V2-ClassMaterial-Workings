// ---- Section 1 - JS Functions ---- \\

// Declare - This does nothing
// function funExp1() {
// 	console.log(Date());
// }

// // Invoke - This uses the function
// funExp1;

// // Function doing something
// function funExp2() {
// 	let tomorrow = new Date();
// 	tomorrow.setDate(tomorrow.getDate() + 1);
// 	console.log(tomorrow);
// }

// // funExp2();

// // functions with arguments
// function funExp3(arg1, arg2) {
// 	console.log(arg1 * arg2);
// }

// funExp3(5, 10);

// function expressions
// const varExp1 = function funExp4(arg1) {
// 	console.log(arg1 ** 2);
// };

// varExp1(4);
// // Show that the functions are accessible in Dev Tools

//
// ---- Section 2 - Scope ---- \\

// let varExp2 = 10;

// function funExp5() {
// 	let varExp3 = 100;
// 	console.log(varExp2 * varExp3);
// }

// funExp5();
// console.log(varExp2);
// console.log(varExp3);

//
// ---- Section 3 - Variable & Return ---- \\

// 1) Return terminates the function i.e. like break.
// 2) You can only have 1 return per function.

// Show how you cannot store the result without return
// function funExp6(arg1, arg2) {
// 	console.log(arg1 * arg2);
// }

// let varExp5 = funExp6(2, 12);

// ===================================================
// Go to DEV Tools to show the result is not storable.
// funExp6(2, 12);
// varExp5;
// ===================================================

// show that can store result
// function funExp7(arg1, arg2) {
// 	return arg1 * arg2;

// }

// let varExp6 = funExp7(2, 12);

//
// ---- Section 4 - Arrow Functions ---- \\

// basic function
// arrowExp1 = () => {
// 	return Date();
// };
// console.log(arrowExp1());

// function with arguments
// arrowExp2 = (arg1, arg2) => {
// 	return arg1 * arg2;
// };
// console.log(arrowExp2(5, 10));

// // function but no need for the return word as only one operation happening
// arrowExp3 = (arg1, arg2) => (
//    arg1 * arg2;
//    );
// console.log(arrowExp3(5, 10));

// // function one liner
// arrowExp4 = (arg1, arg2) => arg1 * arg2;
// console.log(arrowExp4(5, 10));

// // storing the result of the function
// let varExp7 = (arrowExp4 = (arg1, arg2) => arg1 * arg2);
// console.log(varExp7(2, 5));

// ======================================================
// Show Example 1
// Take a break
// ======================================================

// ---- Section 1 - DOM ---- \\
// show the window object -- Show how alert is a method of the windows object
// show the document object -- console.dir(document) -- show things like onmouseover, onclick, etc...
//
// Think of it as a 2 step process
// 1) selecting an element
// 2) applying a change to that element

// ---- Section 2 - Selectors ---- \\
// let exampleID = document.getElementById('testID').innerHTML; // This is always explicit
// let exampleClass = document.getElementsByClassName('testClass')[2].innerHTML; // could be more than one element
// let exampleTag = document.getElementsByTagName('h1')[0].innerHTML; // could be more than one element

// console.log(exampleID);
// console.log(exampleClass);
// console.log(exampleTag);

// let exampleIDv2 = document.querySelector('h1').innerHTML;
// let exampleTagv2 = document.querySelectorAll('p'); // returns you collection and you can either select just one with for example [1] or loop through them with the object loop 'for of'

// for (let i of exampleTagv2) {
// 	i.style.color = 'purple';
// }

// console.log(exampleIDv2);
// console.log(exampleTagv2);

// ---- Section 2 - Properties ---- \\

// console.log(document.querySelector('#testID').innerHTML);
// console.log(document.querySelector('input').value);
// console.log(document.querySelector('#testID').parentElement);
// console.log(document.querySelector('.testClass').style.backgroundColor);

// ---- Section 3 - Changing Properties ---- \\
// document.getElementById('testID').style.color = 'red';
// document.getElementsByTagName('h1')[0].innerHTML = 'Some New Text';
// document.getElementsByTagName('input')[0].value = 'NewValueText';
// document.getElementsByTagName('input')[0].id = 'NewID';
// document.getElementById('testID').classList.add('tempStyle');

// let btn = document.createElement('button');
// btn.innerHTML = 'New Button';
// document.getElementsByTagName('h1')[0].appendChild(btn).firstChild;

// ---- Section 4 - Events ---- \\
// types of events = click, scroll, drag, key press, mouse over, etc....
// https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers

// arrowExp10 = () => {
// 	console.log('Hello');
// };

//Option 1 = <button onclick="myFunction()">Click me</button>
//Option 2 = document.getElementById('myBtn').onclick = function () {arrowExp10();};
//Option 3 = document.getElementById('myBtn').addEventListener('click', arrowExp10); // This is the option of choice

// ======================================================
// Show Example 2 & 3
// ======================================================
