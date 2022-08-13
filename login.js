var firstName = "";
var secondName = "";
var email = "";
var password = "";
var cfPassword = "";
var phone = "";
var regEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
var regPassword = /[a-z0-9]{5,15}/;
var errMessage = "";
var regPhone = /[0-9]{10,11}/;

window.onload = function () {
    document.getElementById("firstName").focus();
}
function validation() {
    errMessage = "";
    firstName = document.getElementById("firstName").value;
    secondName = document.getElementById("secondName").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    cfPassword = document.getElementById("cfPassword").value;
    phone = document.getElementById("phone").value;
    gender = document.querySelector('input[name="gender"]:checked')
        ? document.querySelector('input[name="gender"]:checked').value
        : "";
    if (firstName.trim() === "") {
        errMessage += "First name is required !\n";
    }
    if (secondName.trim() === "") {
        errMessage += "Second name is required !\n";
    }
    if (email.trim() === "" || regEmail.test(email.trim()) === false) {
        errMessage += "Email is required and format xxx@xxx.xxx !\n";
    }
    if (password.trim() === "" || regPassword.test(password.trim()) === false) {
        errMessage += "Make sure your password is formatted correctly !\n";
    }
    if (cfPassword.trim() === "" || regPassword.test(cfPassword.trim()) === false) {
        errMessage += "Re-confirm your password and format it correctly !\n";
    }
    if (cfPassword !== password) {
        errMessage += "Your confirmed password and your password must be the same"
    }
    if (regPhone.test(phone.trim()) === false) {
        errMessage += "The Mobile must be digits only and required !\n";
    }
    if (gender.trim() === "") {
        errMessage += "Choose your gender, please !\n";
    }
}
function displayInfo() {
    validation();
    if (errMessage !== "") {
        alert(errMessage);
        return;
    }
    alert("Welcome,"+ firstName);
    document.getElementById("here").innerHTML = "Welcome," + firstName;
}