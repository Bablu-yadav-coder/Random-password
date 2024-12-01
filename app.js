let passwordBox = document.querySelector("#display");
let btn = document.querySelector(".btn");
let copy = document.querySelector(".img");


btn.addEventListener("click", ()=> {
    let password = getPassword();
    passwordBox.value = password
})

copy.addEventListener("click", ()=> {
    passwordBox.select();
    document.execCommand("copy");
})

let UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = UPPERCASE.toLowerCase();
let number = "0123456789";

function getPassword() {
    let password = "";
    
    for(let i=0; i<2; i++) {
        password += UPPERCASE[Math.floor(Math.random() * UPPERCASE.length)];
        password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        password += UPPERCASE[Math.floor(Math.random() * UPPERCASE.length)];
        password += number[Math.floor(Math.random() * number.length)];
    }
    return password;

}