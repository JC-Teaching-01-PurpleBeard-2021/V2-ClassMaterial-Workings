const formObject = {};

funcHW = () => {
	// what could I have done differently here?
	// Get all the inputs from the webpage
	let varFname = document.getElementById('fname').value;
	let varLname = document.getElementById('lname').value;
	let varInput2 = document.getElementById('input2').value;
	let varInput4 = document.getElementById('input4').value;
	let varGender = document.querySelector('input[name="gender"]:checked').value;
	let varCountry = document.getElementById('country').value;

	let varContact = [];
	if (document.getElementById('contact1').checked) {
		varContact.push(document.getElementById('contact1').value);
	}
	if (document.getElementById('contact2').checked) {
		varContact.push(document.getElementById('contact2').value);
	}
	if (document.getElementById('contact3').checked) {
		varContact.push(document.getElementById('contact3').value);
	}

	let varSubject = document.getElementById('subject').value;

	// what could I have done differently here?
	// put all the results in an object
	formObject.firstName = varFname;
	formObject.lastName = varLname;
	formObject.email = varInput2;
	formObject.phone = varInput4;
	formObject.gender = varGender;
	formObject.country = varCountry;
	formObject.contact = varContact;
	formObject.message = varSubject;

	console.log(formObject);
};

// this is an eventlistner (which we will cover today) which excutes the above function when the button is clicked
document.getElementById('newBtn').addEventListener('click', funcHW);
