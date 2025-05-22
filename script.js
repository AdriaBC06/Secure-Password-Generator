const MAYUS_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const MINUS_LETTERS = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "1234567890";
const SPECIAL_CHARACTERS = ".!?;:'@#$%^&*_-+=~`|/(){}[]<>";

let applyMayus = false;
let applyMinus = false;
let applyNumbers = false;
let applySpecial = false;

let passwordPosibilities = "";

let passwordLength = 5;

let password = "";

function generatePassword() {
    password = "";

    passwordPosibilities = "";

    if (applyMayus) {
        passwordPosibilities += MAYUS_LETTERS;
    }

    if (applyMinus) {
        passwordPosibilities += MINUS_LETTERS;
    }

    if (applyNumbers) {
        passwordPosibilities += NUMBERS;
    }

    if (applySpecial) {
        passwordPosibilities += SPECIAL_CHARACTERS;
    }

    console.log(passwordPosibilities);
    console.log(passwordPosibilities.length);
    console.log(passwordLength);

    if (passwordPosibilities.length > 0 && passwordLength > 0) {
        for (let i = 0; i < passwordLength; i++) {
            password += passwordPosibilities.charAt(Math.floor(Math.random() * passwordPosibilities.length));
        }
    }

    document.getElementById("password").innerHTML = password;
}

generatePassword();

document.getElementById("generatePasswordButton").addEventListener("click", generatePassword);