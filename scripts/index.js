// function game1(monthNumber) {
// 
//     if (monthNumber === 12 || monthNumber === 1 || monthNumber === 2) {
//         return 'Зима';
//     } else if (monthNumber === 3 || monthNumber === 4 || monthNumber === 5) {
//         return 'Весна';
//     } else if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8) {
//         return 'Лето';
//     } else if (monthNumber === 9 || monthNumber === 10 || monthNumber === 11) {
//         return 'Осень';
//     } else if (isNaN(monthNumber)) {
//         return `${monthNumber} - это не номер месяца`;
//     } else {
//         return 'Вы ввели некорректный номер месяца'
//     }
// }


function game1() {
    const monthNumber = +prompt('Введите номер месяца, для того, что бы определить какое зто время года');

    if (monthNumber === 12 || monthNumber === 1 || monthNumber === 2) {
        return 'Зима';
    } else if (monthNumber === 3 || monthNumber === 4 || monthNumber === 5) {
        return 'Весна';
    } else if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8) {
        return 'Лето';
    } else if (monthNumber === 9 || monthNumber === 10 || monthNumber === 11) {
        return 'Осень';
    } else if (isNaN(monthNumber)) {
        return `Вы ввели не номер месяца`;
    } else {
        return 'Вы ввели некорректный номер месяца'
    }
}



const game2Arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

const game2ArrSuffle = game2Arr.sort(() => Math.random() - 0.5);
const game2ShaffleString = game2ArrSuffle.join('  ');

function game2() {
    const game2Arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

    const game2ArrSuffle = game2Arr.sort(() => Math.random() - 0.5);
    const game2ShaffleString = game2ArrSuffle.join('  ');

    confirm(`Привет Игрок!` + '\n' + `Запомни в какой последовательности расположены фрукты` + '\n' + '\n' + `${game2ShaffleString} ` + '\n' + '\n' + `Если запомнил жми "OK"`);

    let ansver1 = (prompt('Напиши, каким был первый элемент массива'));
    ansver1 = ansver1.toLocaleLowerCase();

    let ansver2 = (prompt('А теперь напиши, каким был последний элемент массива'));
    ansver2 = ansver2.toLocaleLowerCase();

    if (ansver1 === game2ArrSuffle[0].toLocaleLowerCase() && ansver2 === game2ArrSuffle[game2ArrSuffle.length - 1].toLocaleLowerCase()) {
        alert('Молодец, ты выиграл!');;

    } else if (ansver2 === game2ArrSuffle[game2ArrSuffle.length - 1].toLocaleLowerCase()) {
        alert('Ты был близок к победе, но тгадал только второй фрукт');

    } else if (ansver1 === game2ArrSuffle[0].toLocaleLowerCase()) {
        alert('Ты был близок к победе, но тгадал только первый фрукт')

    } else {
        alert('Ты не угадал ни одного слова (')
    }
}


