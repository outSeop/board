async function verify(inputData) {
	if (inputData === 'username') {
		let username = new InputDataHandler();
		username.setInputData(new Username);
		username.verifyFormat();
		await username.verifyDuplication();
	}

	if (inputData == 'name') {
		let name = new InputDataHandler();
		name.setInputData(new Name);
		name.verifyFormat();
		console.log(name.validation);
	}

	if (inputData == 'email') {
		
	}
}