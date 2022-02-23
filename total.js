var Username = /** @class */ (function () {
    function Username() {
        this.input = document.getElementById('username');
        this.errorBox = document.getElementById('username-error');
    }
    Username.prototype.verifyFormat = function () {
        return true;
    };
    Username.prototype.verifyDuplication = function () {
        return true;
    };
    return Username;
}());
function verifyUsername() {
    var username = new Username();
}
