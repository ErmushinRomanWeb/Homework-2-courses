// // 1 задание

// const lesserNumber = (a, b) => {
//     if (a < b) {
//         return a;
//     } else if (a === b) {
//         return a;
//     } else {
//         return b
//     }
// }
// 
// console.log(lesserNumber(6, 6));



// // 2 задание

// 'use strict'
// function determineParity(designatedNumber) {
//     let result = designatedNumber % 2;
//     if (result === 0) {
//         console.log(`Число ${designatedNumber} является четным`);
//     } else {
//         console.log(`Число ${designatedNumber} является нечетным`);
//     }
// }
// 
// determineParity(9)



// // 3 задание
// // 3.1

// 'use strict'
// const squareNumber = (designatedNumber) => console.log(designatedNumber ** 2);
// 
// squareNumber(2)

//// 3.2

// 'use strict'
// 
// const squareNumber = (designatedNumber) => {
//     return designatedNumber ** 2;
// };
// 
// console.log(squareNumber(5));



// // 4 задание
// function determineAge() {
//     let userAnsver = Number(prompt('Сколько вам лет?'));
//     
//     if (userAnsver <= 12 && userAnsver >= 0) {
//         alert('Привет, друг');
//     } else if (userAnsver < 0) {
//         alert('Вы ввели неправильное значение');
//     } else{
//         alert('Добро пожаловать!');
//     }
// }
// 
// determineAge();



// // 5 задание

// const numberCheck = (number1, number2) => {

//     if (isNaN(number1) || isNaN(number2)) {
//         return 'Одно или оба значения не являются числом';
//     } else {
//         return number1 * number2;
//     }
// }
// 
// console.log(numberCheck(5, 'g'));



// 6 задание

// const askForANumber = () => {
// 
//     let userAnsver = +prompt('Введите число для того, что бы возвести его в куб');
//     let result = userAnsver ** 3;
// 
//     if (isNaN(userAnsver)) {
//         return 'Переданный параметр не является числом'
//     } else {
//         return `${userAnsver} в кубе равняется ${result} `
//     }
// }
// 
// alert(askForANumber())



// // 7 задание
// const pNumber = 3.14;
// function getArea() {
//     return pNumber * (this.radius ** 2);
// }
// function getPerimeter() {
//     return 2 * pNumber * this.radius;
// }
// 
//  const circle1 = {
//     radius: 45,
//     area: getArea,
//     perimeter: getPerimeter,
//  }
// 
//  const circle2 = {
//     radius: 50,
//     area: getArea,
//     perimeter: getPerimeter,
//  }
// 
// console.log(circle1.perimeter());
// console.log(circle1.area());
// console.log(circle2.perimeter());
// console.log(circle2.area());