const passBox = document.getElementById("passBox");
const inputSlider = document.getElementById("inputSlider");
const sliderValue = document.getElementById("sliderValue");
const includeChars = document.getElementById("includeChars");
const includeNumbers = document.getElementById("includeNumbers");

const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+=[]{}|:;'<>,.?/";
const nums = "0123456789";

sliderValue.textContent = inputSlider.value;

inputSlider.addEventListener("input", () => {
    sliderValue.textContent = inputSlider.value;
});

function generatePassword() {
    let finalChars = "";
    if (includeChars.checked) finalChars += chars;
    if (includeNumbers.checked) finalChars += nums;
    if (finalChars.length === 0) {
        passBox.value = "Select options";
        return;
    }

    let password = "";
    for (let i = 0; i < inputSlider.value; i++) {
        const randomIndex = Math.floor(Math.random() * finalChars.length);
        password += finalChars[randomIndex];
    }
    passBox.value = password;
}

function copyPassword() {
    navigator.clipboard.writeText(passBox.value).then(() => {
        alert("Password copied!");
    });
}