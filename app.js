let error = document.getElementById('error');
let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let passFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// a function to validate full name
function nameValid(val) {
    if (val === "" || 
        val === null || 
        val === "null" || 
        val === "undefined" || 
        !(isNaN(Number(val)))) {
        error.innerText = "You must provide your name.";   
    }
    if (val.length < 3) {
        error.innerText = "Name must contain at least three character.";
    }
}

// a function to validate provided email address
function emailValid(val) {
    if (!val.match(emailFormat)) {
        error.innerText = "Invalid Email Address."
    }
}

// a function to validate password 
function passValid(val) {
    if(!val.match(passFormat)) {
        error.innerText = `Password must conain\n 
                           1. Minimum eight characters,\n 
                           2. At least one uppercase letter,\n 
                           3. One lowercase letter,\n 
                           4. One number and one special character.`;
    }
}

// a funtion to validate the retyped password
function rePassValid(val, reVal) {
    if (val !== reVal) {
        error.innerText = "Password doesn't match."
    }
}





document.getElementById('submit').addEventListener('click', function(e) {
    error.innerText = '';
    e.preventDefault(); 
let nameVal = document.getElementById('inpName').value
let emailVal = document.getElementById('inpEmail').value
let pass = document.getElementById('inpPass').value
let rePass = document.getElementById('rePass').value
let userName = document.getElementById('userName').value
let terms = document.getElementById('terms')


nameValid(nameVal);
emailValid(emailVal);
passValid(pass);
rePassValid(pass, rePass);
})