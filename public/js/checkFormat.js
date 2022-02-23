const regularExpressions = {
	'username': /^[a-z]+[a-z0-9]{5,19}$/g,
	'name': /^[가-힣]*$/,
	'email': /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/,
	'password': /^[A-Za-z0-9]{6,12}$/
};

function checkFormat(input) {
	let data = document.getElementById(input);
	let regularExpression = regularExpressions[input];
	if (data.value.match(regularExpression)) {
		return SUCCESS;
	}
	else {
		return ERROR_FORMAT;
	}
}

