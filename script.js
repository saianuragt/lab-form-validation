// Progression 1
// Check username
// create a function called as checkUserName()
// username should not be empty
// username should be a minimum of 8 characters and above
// username should be less than 15 characters
// No space is allowed in username
// username should not contain special characters
// the function should return true if all the conditions above are validated.
// return false if the validation fails
var button = document.getElementById('submit');
button.addEventListener("click", function checkUserName(name) {
    var name = document.getElementById("usertext").value;
    if (name == "") {
        console.log("false");
        return false;
    } else if (name.length < 8 || name.length > 15) {
        console.log("false");
        return false;
    } else if (whitespace(name) == true) {
        console.log("false");
        return false;
    } else if (spe(name) == true) {
        console.log("false");
        return false;
    } else {
        console.log("true");
        return true;
    }
});

function whitespace(s) {
    return /\s/g.test(s);
} // returns true if spaces are present

function spe(name) {
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (format.test(name)) {
        return true;
    } else {
        return false;
    }
} //returs true if spe chars are present



// console.log(checkUserName());
// Progression 2
// Check mail
// create a function called as checkEmail()
// only @ , . , _ [at,dot,underscore] is allowed
// It can be alphanumeric in nature
// return true if it passses all validation and false otherwise

button.addEventListener("click", function checkEmail(email) {
    var email = document.getElementById("emailtext").value;
    var format = /[!#$%^&*()+\-=\[\]{};':"\\|,<>\/?]+/;

    if (format.test(email)) {
        console.log("false");
        return false;
    } else {
        console.log("true");
        return true; // if correct
    }
});


// console.log(checkEmail());
// Progression 3
// Check password
// create a function called as checkPassword()
// should be alphanumeric in nature
// password must contain atleast one Uppercase, one number and special characters[!@#$%^&*()_]
// return true else return false

button.addEventListener("click", function checkPassword() {
    var password = document.getElementById("passwordtext").value;
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (passw.test(password)) {
        console.log("true");
        return true;
    } else {
        console.log("false");
        return false;
    }

});