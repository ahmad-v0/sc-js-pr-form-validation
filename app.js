let form = document.getElementById('formElem');
let error = document.getElementById('error');
let success = document.getElementById('success');
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

// a function to check for gender input
function genderValid(val){
    if (!val){
        error.innerText = "Please select your gender."
    }
}

// a function to validate user name input
function userNameValid(val) {
    if (val === "" || 
        val === null || 
        val === "null" || 
        val === "undefined") {
        error.innerText = "You must provide a unique user name.";   
    }
}

// a function to update age as per input from the slider
document.getElementById('age').addEventListener('input', function(e) {
    document.getElementById('inpAge').innerText = e.target.value;
})

// a function to validate age
function ageValid(val) {
    if (val === 0) {
        error.innerText = "You must provide your age.";
    }
}

// a function to check for agreement of terms and condition
function termValid(val) {
    if (!val) {
        error.innerText = "You must agree to all our terms and condition."
    }
}

// a function to show successful form submission
function successNotice() {
    if (error.innerText === "") {
        success.innerText = "Form Submitted Successfully.";
        form.reset();
    }
}

// document.getElementById('submit').addEventListener('click', function(e) {
// a better way to handle form submission
form.addEventListener('submit', function(e) {
    error.innerText = '';
    e.preventDefault(); 
let nameVal = document.getElementById('inpName').value;
let emailVal = document.getElementById('inpEmail').value;
let pass = document.getElementById('inpPass').value;
let rePass = document.getElementById('rePass').value;
let gender = document.querySelector('input[name="gender"]:checked');
let userName = document.getElementById('userName').value;
let ageInp = document.getElementById('inpAge');
let terms = document.getElementById('terms').checked;


nameValid(nameVal);
emailValid(emailVal);
passValid(pass);
rePassValid(pass, rePass);
genderValid(gender);
userNameValid(userName);
ageValid(Number(ageInp.innerText));
termValid(terms);
successNotice();
})