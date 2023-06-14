// // 1 задание
// let password = 'f5f5f5';
// let enterPassword = prompt('Введите пароль');
// 
// (password === enterPassword) ? console.log('Пароль введен верно') : console.log('Пароль введен неправильно');


// //2 задание
// let c = Number(prompt('Введите число, которое больше 1 и меньше 10'));
// 
// if (c > 1 && c < 10) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }

// // 3 задание
// let d = 101;
// let e = 7;
// 
// (d > 100 || e > 100) ? console.log('Верно') : console.log('Неверно');


// // 4 задание
// let a = '2';
// let b = '3';
// 
// alert(Number(a) + Number(b));

// // 5 задание
// let monthNumber = Number(prompt('Укажите номер месяца, для того, что бы определить, какое у вас время года.'))
// switch (monthNumber) {
//     case 12:
//     case 1:
//     case 2:
//         console.log('Зима');
//         break;
//     case 3:
//     case 4:
//     case 5:
//         console.log('Весна');
//         break;
//     case 6:
//     case 7:
//     case 8:
//         console.log('Лето');
//         break;
//     case 9:
//     case 10:
//     case 11:
//         console.log('Осень');
//         break;
//     default:
//         console.log('Вы ввели не существующий месяц');
//         break;
// }


// // 7 задание
// let anyNumber = Number(prompt('Введите любое число'));
// 
// let result = anyNumber % 2;
// 
// if (result === 0) {
//     alert(`Число - ${anyNumber} является четным`);
// 
// } else if (isNaN(anyNumber)) {
//     alert('Вы ввели не число');
//     
// } else {
//     alert(`Число - ${anyNumber} является нечетным`);
// }

// // 8 задание
// let clientOS = confirm('Если вы используете Android нажмите - OK, если используете iOS нажмите - Отмена');
// 
// if (clientOS) {
//     console.log('Установите версию приложения для Android по ссылке');
// } else {
//     console.log('Установите версию приложения для iOS по ссылке');
// }


// // 9 задание
// let clientOS = confirm('Если вы используете Android нажмите - OK, если используете iOS нажмите - Отмена');
// let yearOfIssue = Number(prompt('Укажите год выпуска устройства'));
// 
// if (clientOS && yearOfIssue >= 2015) {
//     console.log('Установите версию приложения для Android по ссылке');
//     
// } else if (clientOS && yearOfIssue < 2015) {
//     console.log('Установите облегченную версию приложения для Android по ссылке');
// 
// } else if (clientOS === false & yearOfIssue >= 2015) {
//     console.log('Установите  версию приложения для iOS по ссылке');
// 
// } else if (isNaN(yearOfIssue)) {
//     console.log('Вы ввели некорректную дату');
// 
// } else {
//     console.log('Установите облегченную версию приложения для iOS по ссылке');
// }



