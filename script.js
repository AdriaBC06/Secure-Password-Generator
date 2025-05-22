const MAYUS_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const MINUS_LETTERS = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "1234567890";
const SPECIAL_CHARACTERS = ".!?;:'@#$%^&*_-+=~`|/(){}[]<>";

let applyMayus;
let applyMinus;
let applyNumbers;
let applySpecial;

let passwordPosibilities = "";

let password = "";

console.log(localStorage.getItem("applyMayus"));

document.getElementById("mayus").checked = localStorage.getItem("applyMayus") === "true";
document.getElementById("minus").checked = localStorage.getItem("applyMinus") === "true";
document.getElementById("numbers").checked = localStorage.getItem("applyNumbers") === "true";
document.getElementById("special").checked = localStorage.getItem("applySpecial") === "true";
document.getElementById("length").value = localStorage.getItem("length");

function generatePassword() {
    password = "";

    passwordPosibilities = "";

    if (document.getElementById("mayus").checked) {
        passwordPosibilities += MAYUS_LETTERS;
        applyMayus = true;
    } else {
        applyMayus = false;
    }

    if (document.getElementById("minus").checked) {
        passwordPosibilities += MINUS_LETTERS;
        applyMinus = true;
    } else {
        applyMinus = false;
    }

    if (document.getElementById("numbers").checked) {
        passwordPosibilities += NUMBERS;
        applyNumbers = true;
    } else {
        applyNumbers = false;
    }

    if (document.getElementById("special").checked) {
        passwordPosibilities += SPECIAL_CHARACTERS;
        applySpecial = true;
    } else {
        applySpecial = false;
    }

    if (passwordPosibilities.length > 0 && document.getElementById("length").value > 0) {
        for (let i = 0; i < document.getElementById("length").value; i++) {
            password += passwordPosibilities.charAt(Math.floor(Math.random() * passwordPosibilities.length));
        }
    }

    document.getElementById("password").innerHTML = password;
}

function copy(){
    var copyText = document.getElementById("password").innerHTML;

    navigator.clipboard.writeText(copyText);

    alert("Copied password correctly! :)");
}

generatePassword();

document.getElementById("generatePasswordButton").addEventListener("click", generatePassword);

document.getElementById("mayus").addEventListener("change", () => 
    {localStorage.setItem("applyMayus", 
        document.getElementById("mayus").checked)});

document.getElementById("minus").addEventListener("change", () => 
    {localStorage.setItem("applyMinus", 
        document.getElementById("minus").checked)});

document.getElementById("numbers").addEventListener("change", () => 
    {localStorage.setItem("applyNumbers", 
        document.getElementById("numbers").checked)});

document.getElementById("special").addEventListener("change", () => 
    {localStorage.setItem("applySpecial", 
        document.getElementById("special").checked)});

document.getElementById("length").addEventListener("change", () =>
{localStorage.setItem("length", document.getElementById("length").value)});

document.getElementById("copy").addEventListener("click", copy);