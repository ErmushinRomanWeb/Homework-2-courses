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
    const monthNumber = prompt('Введите номер месяца, для того, что бы определить какое зто время года');

         if (monthNumber === 12 || monthNumber === 1 || monthNumber === 2) {
         return 'Зима';
     } else if (monthNumber === 3 || monthNumber === 4 || monthNumber === 5) {
         return 'Весна';
     } else if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8) {
         return 'Лето';
     } else if (monthNumber === 9 || monthNumber === 10 || monthNumber === 11) {
         return 'Осень';
     } else if (isNaN(monthNumber)) {
         return `${monthNumber} - это не номер месяца`;
     } else {
         return 'Вы ввели некорректный номер месяца'
     }
}
