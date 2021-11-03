// ---- Task 1 ---- \\
/*
const shoppingList = ['tissues', 'toothpaste', 'hand cream', 'toothbrush'];

// console.log(shoppingList[0]);

// shoppingList.push('apples');
// console.log(shoppingList);
// console.log(shoppingList[4]);

// console.log(shoppingList);
// shoppingList[3] = 'new brush';
// console.log(shoppingList);
*/

// ---- Task 2 ---- \\
/*
const amount = prompt('Enter the amount you wish to save each month:');
const months = prompt('Enter number of months you will save for:');

alert(`Amount being saved each month: £${amount} for this number of months: £${months} = £${amount * months}`);
*/

// ---- Task 3 ---- \\
/*
let fruit = prompt('Enter a fruit to get a fact about it (singular of a fruit):');
fruit = fruit.toLowerCase();

console.log(fruit);

if (fruit == 'apple') {
	alert(`${fruit.charAt(0).toUpperCase() + fruit.slice(1)}s are green.`);
} else if (fruit == 'grape') {
	alert(`${fruit.charAt(0).toUpperCase() + fruit.slice(1)}s are actually berries.`);
} else if (fruit == 'orange') {
	alert(`${fruit.charAt(0).toUpperCase() + fruit.slice(1)}s have over 600 varieties.`);
} else {
	alert(`I have not facts for you today.... sorry....`);
}
*/

// ---- Task 4 ---- \\
/*
const shoppingList = ['tissues', 'toothpaste', 'hand cream', 'toothbrush'];
let construct = '';

for (let i = 0; i < shoppingList.length; i++) {
	construct += `<tr><td id="${i}">${shoppingList[i]}</td></tr>`;
	console.log(construct);
}

document.getElementById('workedExample').innerHTML = `<table>${construct}</table>`;
*/
