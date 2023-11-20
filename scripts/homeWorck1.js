let firstName = prompt("first name");
let lastName = prompt("last name");
let yourBirthday = prompt("your birthday");
let yourAddres = prompt("your addres");
const currentYear = 2023;
let userAge = currentYear - yourBirthday;

alert("hello " + firstName + " " + lastName + " " + " I am glad, that you are already " + userAge + " years old and live in " +yourAddres);