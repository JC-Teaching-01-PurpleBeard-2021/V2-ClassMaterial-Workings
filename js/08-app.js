// basic loop
/*
for (let i = 5; i < 10; i++) {
	console.log(`this is i = ${i}`);
}
*/
/*
// infinate loop -- VERY BAD!!!
for (let i = 11; i > 10; i++) {
	console.log(`this is i = ${i}`);
}
*/

// Iterate through an array
/*
const array1 = [1, 2, 3, 4, 5];
const array2 = ['Apple', 'Peach', 'Grapes', 'Lemon', 'Orange'];

for (let i = 0; i < array2.length; i++) {
	console.log(`array position = ${i} contains ${array2[i]}`);
}
*/
// Nest Loops
/*
const array1 = [1, 2, 3];

for (let i = 0; i < array1.length; i++) {
	console.log(`array position = ${i} contains ${array1[i]}`);
	for (let j = 0; j <= 3; j++) {
		console.log(`this is j = ${j}`);
	}
}
*/
// while loop

// Example 1
/*
let i = 0;

while (i < 5) {
	console.log(i);
	i++;
}
*/
// Example 2
/*
const guessWord = 'hello';

let guess = prompt('Please enter your guess');

while (guess != guessWord) {
	guess = prompt('Please enter your guess');
}
console.log(`you have guessed correctly ${guessWord}`);

// For Of Loop

/*
// Example using for loop
let exampleArray = [
	[1, 2, 3],
	['a', 'b', 'c'],
	[true, false, null],
];

// console.log(exampleArray);

for (let i = 0; i < exampleArray.length; i++) {
	const row = exampleArray[i];
	for (let j = 0; j < row.length; j++) {
		console.log(row[j]);
	}
}

// same but written with for of loop

for (let i of exampleArray) {
	for (let j of i) {
		console.log(j);
	}
}
*/

// object loop using 'for in'

/*
const classHairColour = {
	Justin: 'Used to be brown',
	Ben: 'unconfirmed',
	Vicky: 'Chestnut',
	Tish: 'Black',
	Robyn: 'Blonde',
};

for (let i in classHairColour) {
	console.log(`${i} hair colour = ${classHairColour[i]}`);
}
*/
