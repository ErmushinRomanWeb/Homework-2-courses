// // 1 задание
// 
// let str = 'Hello, my name is Roman';
// str = str.toLocaleUpperCase();
// console.log(str);


// 
// // 2 задание
// 
// const arr1 = ['Hello rabbit', 'Goodbay sun', 'Hello tomato', 'Goodbay rabbit', 'Hello dog'];
// 
// function search(arr, str) {
//     const arr2 = [];
// 
//     arr.forEach(element => {
//         if (element.toLocaleLowerCase().startsWith(str.toLocaleLowerCase())) {
//             arr2.push(element);
//         }
//     });
//     console.log(arr2)
// }
// search(arr1, 'Hello')



// // 3 задание
// 
// let numb = 32.58884;
// console.log(Math.floor(numb));
// console.log(Math.ceil(numb));
// console.log(Math.round(numb));



// // 4 задание
// 
// // 1 вариант
// console.log(Math.max(52, 53, 49, 77, 21, 32));
// console.log(Math.min(52, 53, 49, 77, 21, 32));
// 
// // 2 вариант
// const numbs = [52, 53, 49, 77, 21, 32];
// 
// function searchNumber(arr) {
//     console.log(Math.max.apply(null, arr));
//     console.log(Math.min.apply(null, arr));
// }
// searchNumber(numbs);
// 
// // 3 вариант
// 
// const numbs2 = [52, 53, 49, 77, 21, 32];
// console.log(Math.max(...numbs2));
// console.log(Math.min(...numbs2));



// // 5 задание
// 
// const randomNumb = (numb) => console.log(Math.round(Math.random() * 10));
// 
// randomNumb()



// 6 задание

// let qestion = prompt('Введите число')
// 
// const generator = (numb) => {
//     const arrNumber = [];
// 
//     while (arrNumber.length < Math.floor((numb / 2))) {
//         arrNumber.push(Math.round(Math.random() * (numb - 0) + 0))
//     }
//     console.log(arrNumber);
// }
// 
// generator(qestion)



// // 7 задание
// 
// const generator = (num1, num2) => {
//     if (num1 < num2) {
//         console.log(Math.round(Math.random() * (num2 - num1) + num1) );
//     } else {
//         console.log(Math.round(Math.random() * (num1 - num2) + num2));
//     }
// }
// 
// generator(9, 1)



// // 8 задание
// 
// let myDate = new Date('1, July, 2023');
// console.log(myDate);
// 
// let myDate2 = new Date('7/1/2023');
// console.log(myDate2);
// 
// let myDate3 = new Date();
// console.log(myDate3);
// 
// let myDate4 = new Date(2023, 6, 1);
// console.log(myDate4);



// // 9 задание

// 1 вариант

// let currentDate = new Date();
// currentDate = +currentDate;
// let days37 = 73 * 24 * 60 * 60 * 1000;
// let searchDate = currentDate + days37;
// let dateIn37Days = new Date(searchDate);
// console.log(dateIn37Days);

// 2 вариант

// let currentDate = new Date();
// currentDate.setDate(currentDate.getDate() + 73);
// console.log(currentDate);



// // 10 задание
// 
// const readableDate = (date) => {
// 
//     const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
// 
//     const months = ["Января", "Февраль", "Март", "Апрель", "Май", "Июнь",
//         "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
// 
// 
//     let myDate = new Date(date);
//     let fullDate = 'Дата:' + ' ' + myDate.getDate() + ' ' + months[myDate.getMonth()] + ' ' + myDate.getFullYear() + ' ' + '-' + ' ' + 'это' + ' ' + days[myDate.getDay()] + '\n' + 'Время:' + ' ' + myDate.getHours() + ':' + myDate.getMinutes() + ':' + myDate.getSeconds()
//     console.log(fullDate);
// }
// 
// readableDate(new Date)






