class InputDataHandler {
	private inputData: InputData;

	public input: HTMLInputElement;
	public errorBox: HTMLInputElement;
	public format: RegExp;
	public validation: boolean;
	
	public verifyFormat: Function;
	public verifyDuplication: Function;
	public verifyAll: Function;

	public setInputData(inputData: InputData) {
		this.inputData = inputData;
		this.input = inputData.input;
		this.errorBox = inputData.errorBox;
		this.format = inputData.format;
		this.verifyFormat = inputData.verifyFormat;
		this.verifyDuplication = inputData.verifyDuplication;
		this.verifyAll = inputData.verifyAll;
	}
}

interface InputData {
	input: HTMLInputElement;
	errorBox: HTMLInputElement;
	validation: boolean;
	format: RegExp;
	

	verifyFormat: () => void;
	verifyDuplication?: () => void;
	verifyAll: () => void;
}

class Username implements InputData{
	input: HTMLInputElement;
	errorBox: HTMLInputElement;
	format: RegExp;
	validation: boolean = true;
	
	constructor() {
		this.input = document.getElementById('username') as HTMLInputElement;
		this.errorBox = document.getElementById('username-error') as HTMLInputElement;
		this.format = RegExp(/^[a-z]+[a-z0-9]{5,19}$/g);
	}

	verifyFormat() {
		if (this.format.test(this.input.value)) {
			this.validation = this.validation && true;
		}
		else {
			this.validation = false;
		}
	}
	
	async verifyDuplication() {
		const apiResponse = await fetch('/users/new', {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				id: 'username',
				input: this.input.value,
			}),
		});
		let apiResponseJson = await apiResponse.json();
		if (apiResponseJson.code == '0') {
			this.validation = this.validation && true;
		}
		else {
			console.log('test');
			this.validation = false;
		}
	}

	async verifyAll() {
		this.verifyFormat();
		this.verifyDuplication();
	}
}

class Name implements InputData {
	input: HTMLInputElement;
	errorBox: HTMLInputElement;
	format: RegExp;
	validation: boolean;
	
	constructor() {
		this.input = document.getElementById('name') as HTMLInputElement;
		this.errorBox = document.getElementById('name-error') as HTMLInputElement;
		this.format = RegExp(/^[가-힣]*$/);
	}

	verifyFormat() {
		if (this.format.test(this.input.value)) {
			this.validation = true;
		}
		else {
			this.validation = false;
		}
	}

	verifyAll() {
		this.verifyFormat();
	}
}