var fullName = "";
var email1 = "";
var comment = "";
var regEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
var errMessage = "";

window.onload = function () {
    document.getElementById("fullName").focus();
}
function validationContact() {
    errMessage = ""; 
    fullName = document.getElementById("fullName").value;
    email = document.getElementById("email").value;
    comment = document.getElementById("comment").value;

    if (fullName.trim() === "") {
        errMessage += "Name is required !\n";
    }
    if (email.trim() === "" || regEmail.test(email.trim()) === false) {
        errMessage += "Email is required and format xxx@xxx.xxx !\n";
    }
    if (comment.trim() === "") {
        errMessage += "Please give us some feedback that we have to improved !\n";
    }
}
function displayInfoContact() {
    validationContact();
    if (errMessage !== "") {
        alert(errMessage);
        return;
    }
    alert("Successfully!");
}