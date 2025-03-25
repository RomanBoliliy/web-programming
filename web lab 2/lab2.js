// Масив для збереження даних
let journal = [];

// Заповнення журналу користувачем
let numStudents = parseInt(prompt("Скільки студентів у журналі?"));
for (let i = 0; i < numStudents; i++) {
    let name = prompt("Введіть прізвище студента " + (i + 1) + ":");
    let grade = parseInt(prompt("Введіть оцінку для " + name + ":"));
    journal.push({ name, grade });
}

// Відображення журналу на екрані
document.write("<h2>Журнал оцінок</h2>");
document.write("<table border='1'><tr><th>Прізвище</th><th>Оцінка</th></tr>");
for (let student of journal) {
    document.write(`<tr><td>${student.name}</td><td>${student.grade}</td></tr>`);
}
document.write("</table>");

// Пошук оцінки за прізвищем
let searchName = prompt("Введіть прізвище студента для пошуку оцінки:");
let found = false;
for (let student of journal) {
    if (student.name.toLowerCase() === searchName.toLowerCase()) {
        alert(`Оцінка студента ${student.name}: ${student.grade}`);
        found = true;
        break;
    }
}
if (!found) {
    alert("Студента з таким прізвищем не знайдено.");
}
