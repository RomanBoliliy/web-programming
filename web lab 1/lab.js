// Завдання 1
let fullName = "Болілий Роман Олексійович";
let birthDate = "14.10.2004";
let digitsSum = birthDate.replace(/\D/g, "").split("").reduce((sum, digit) => sum + parseInt(digit), 0);

alert("Прізвище Ім’я По Батькові: " + fullName);
alert("Дата народження: " + birthDate);
alert("Сума цифр дати народження: " + digitsSum);


// Завдання 2
let num1 = parseFloat(prompt("Введіть перше число:"));
let num2 = parseFloat(prompt("Введіть друге число:"));
let operator = prompt("Введіть математичний оператор (+, -, *, /):");

let result;
switch (operator) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            result = "Ділення на нуль неможливе";
        }
        break;
    default:
        result = "Невірний оператор";
}

alert("Результат: " + result);
