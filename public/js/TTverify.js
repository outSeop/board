let checker = {
	username: 0,
	name: 0,
	email: 0,
	password: 0,
	passwordConfirmation: 0
};

function TTverifyUsername() {
	let username = document.getElementById('username');
	let errorBox = document.getElementById('username-error');
	let formatChecker = checkFormat('username');
	if (formatChecker.code != '0') {
		return displayError(username, errorBox, formatChecker.content);
	}
}

function verifyName() {
	let name = document.getElementById('name');
	let errorBox = document.getElementById('name-error');
	let formatChecker = checkFormat('name');
	return displayError(name, errorBox, formatChecker.content);
}

function verifyEmail() {
	let email = document.getElementById('email');
	let errorBox = document.getElementById('email-error');
	let formatChecker = checkFormat('email');
	return displayError(email, errorBox, formatChecker.content);
}

function verifyPassword() {
	let password = document.getElementById('password');
	let errorBox = document.getElementById('password-error');
	let formatChecker = checkFormat('password');
	return displayError(password, errorBox, formatChecker.content);
}

function verifyPasswordConfirmation() {
	let password = document.getElementById('password');
	let passwordConfirmation = document.getElementById('passwordConfirmation');
	let errorBox = document.getElementById('passwordConfirmation-error');
	let message;
	if (password.value === passwordConfirmation.value) {
		message = SUCCESS.content;
	}
	else {
		message = ERROR_CONFIRMATION.content;
	}
	return displayError(passwordConfirmation, errorBox, message);
}

function verify42() {
	let errorBox = document.getElementById('submit-error');
	if (verifyErrorState() == 1) {
		fetch('/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(createUserDataSet())
			})
		.then((res) => {
			if (res == '200') {
			
			}
				
		})
	}
	else {
		displayError(null, errorBox, 'error');
	}
}

function verifyErrorState() {
	if (checker.username == 1 &&
	checker.name == 1 &&
	checker.email == 1 &&
	checker.password == 1 &&
	checker.passwordConfirmation == 1)
		return 1;
	else
		return 0;
}

function displayError(value, errorBox, message) {
	if (message == 'success') {
		if (value != null) {
			checker[value.id] = 1;
			value.style.border = "2px solid #32CD32";
		}
		errorBox.innerText = '';
	}
	else {
		if (value != null) {
			checker[value.id] = 0;
			value.style.border = "2px solid #F74C4C";
		}
		errorBox.innerText = message;
	}
}
function createUserDataSet() {
	var userData = new Object();
	userData.username = document.getElementById('username').value;
	userData.name = document.getElementById('name').value;
	userData.email = document.getElementById('email').value;
	userData.password = document.getElementById('password').value;
	userData.passwordConfirmation= document.getElementById('passwordConfirmation').value;
	return userData;
}

