class InputDataHandler {
	private inputData: InputData;

	public input: HTMLInputElement;
	public errorBox: HTMLInputElement;

	public setInputData(inputData: InputData) {
		this.inputData = inputData;
		this.input = inputData.input;
		this.errorBox = inputData.errorBox;
	}
}

interface InputData {
	input: HTMLInputElement;
	errorBox: HTMLInputElement;
	format: regExp;
}

class Username implements InputData {
	input: HTMLInputElement;
	errorBox: HTMLInputElement;
	format: regExp;
	
	constructor() {
		this.input = document.getElementById('username') as HTMLInputElement;
		this.errorBox = document.getElementById('username-error') as HTMLInputElement;
		this.format = regExp(/^[a-z]+[a-z0-9]{5,19}$/g,);
	}


	
}