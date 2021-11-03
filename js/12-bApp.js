// ---- Task 1 - Functions ---- \\
// Return your name and Console.log it
/*
func1 = () => `Justin Heath`;
console.log(func1());
*/

//
// Pass in 2 arguments, perform an operation on them and ‘Return’ the result. Then console.log it
/*
let prom1 = prompt('Please enter your first name');
let prom2 = prompt('Please enter your first pet name');
console.log(prom1);
console.log(prom2);
func2 = (name, pet) => `Your film star name would be '${name} ${pet}'`;
console.log(func2(prom1, prom2));
*/

//
// Pass in an array or object into the function, loop through it and console.log it
/*
const array1 = [];
let prom1 = prompt('Please enter your first word');
let prom2 = prompt('Please enter your second word');
let prom3 = prompt('Please enter your third word');
let prom4 = prompt('Please enter your fourth word');

for (let i = 1; i <= 4; i++) {
	let inputText = eval(`prom${i}`);
	array1.push(inputText);
}

console.log(array1);

func3 = (a) => {
	for (let i = 0; i < a.length; i++) {
		console.log(`${i}. word = ${a[i]}`);
	}
};

func3(array1);
*/

// ---- Task 2 - DOM ---- \\
//
// Select the spans in the document and change the colour
/*
let spanUpdate = document.getElementsByTagName('span');

for (let i of spanUpdate) {
	i.style.color = 'purple';
}
*/

//
// Select just 1 of the spans and change the colour and the text inside it
/*
let spanUnique = document.querySelector('span:nth-of-type(3)');

spanUnique.innerHTML = `Hello Justin you are working hard`;
spanUnique.style.color = 'green';
*/

//
// Create a paragraph and append it to the bottom of the current paragraph.
/*
let promptText = prompt('Please write the paragraph you would like to add:');
let para1 = document.createElement('p');

para1.innerHTML = promptText;
para1.classList.add('paraNew');
document.querySelector('p').appendChild(para1);
*/

// ---- Task 3 - DOM/Function ---- \\
//
// Use the inputs in the html sheet.  Take the values input into them and return them to the DOM and insert them back into the div.
/*
createSent = () => {
	let input1 = document.getElementById('input1').value;
	let input2 = document.getElementById('input2').value;
	let input3 = document.getElementById('input3').value;
	let input4 = document.getElementById('input4').value;
	let input5 = document.getElementById('input5').value;
	let divNew = document.querySelector('#task3Div');
	divNew.classList.add('newDiv');
	divNew.innerHTML = `My name is ${input1} and I like eating chocolate ${input2} and pizza ${input3} at the same time.  While in ${input4} watching/reading ${input5}.`;
};

document.getElementById('task3btn').addEventListener('click', createSent);
*/

// ---- Task 4 - API ---- \\
//
// Bring back the API data and display 6 pictures in the div’s provided. Format the div’s so looks correct on the page.
// Register at the following website and follow the documentation to bring back 6 images
// https://www.pexels.com/api/documentation/
/*
let API_Key = `563492ad6f91700001000001d3a32ef416904ce18eb06b96c2222211`;
let BaseURL = 'https://api.pexels.com/v1/curated?per_page=6';
let sectionPic = document.querySelector('section');

fetch(BaseURL, { headers: { Authorization: API_Key } })
	.then((res) => res.json())
	.then((data) => {
		data.photos.forEach((pics) => {
			// for each item in the array
			let img = document.createElement('div');
			img.className = 'imgDetails';
			img.style.backgroundImage = `url(${pics.src.medium})`;
			sectionPic.appendChild(img);
		});

		console.log(data.photos);
	})
	.catch((err) => console.log(err));
*/
