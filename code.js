const inputs = document.querySelectorAll(".inputs input");
const correctPassword = "2008"

function addNumber(number) {
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "") {
            inputs[i].value = number;
            break;
        }
    }
}

function clearInput() {
    inputs.forEach(input => input.value ="");
}

function checkPassword() {
    let code = ""
    inputs.forEach(input => code += input.value);

    if (code === correctPassword) {
        window.location.href = "maincontent.html";
    } else {
        alert("Code Salah");
        clearInput();
    }
}