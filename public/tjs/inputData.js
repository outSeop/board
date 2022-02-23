var InputDataHandler = /** @class */ (function () {
    function InputDataHandler() {
    }
    InputDataHandler.prototype.setInputData = function (inputData) {
        this.inputData = inputData;
        this.input = inputData.input;
        this.errorBox = inputData.errorBox;
    };
    return InputDataHandler;
}());
var Username = /** @class */ (function () {
    function Username() {
        this.input = document.getElementById('username');
        this.errorBox = document.getElementById('username-error');
    }
    return Username;
}());
