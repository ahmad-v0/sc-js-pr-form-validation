let error = document.getElementById('error')

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





document.getElementById('submit').addEventListener('click', function(e) {
    error.innerText = '';
    e.preventDefault(); 
let nameVal = document.getElementById('inpName').value
let emailVal = document.getElementById('inpEmail').value
let pass = document.getElementById('rePass').value
let rePass = document.getElementById('rePass').value
let userName = document.getElementById('userName').value
let terms = document.getElementById('terms')


nameValid(nameVal);
})