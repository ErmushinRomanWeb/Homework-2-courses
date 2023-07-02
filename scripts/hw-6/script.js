// // 1 задание
// 
// const numbs = [1, 5, 4, 10, 0, 3];
// for (i = 0; i < numbs.length; i++) {
//     if (numbs[i] === 10) {
//         break
//     }
//     console.log(numbs[i]);
// }



// 2 задание

// // 1 вариант
// const numbs = [1, 5, 4, 10, 0, 3];
// console.log(numbs.indexOf(4));

// //2 вариант
// const numbs = [1, 5, 4, 10, 0, 3];
// for (i = 0; i < numbs.length; i++) {
//     if (numbs[i] === 4) {
//         console.log(i);
//     }
// }



// // 3 задание
// const numbs = [1, 3, 5, 10, 20];
// console.log(numbs.join(' '));

// не понял формулировку в задании - " (пустую строку ' '). " поэтому делаю 2 вариант
// const numbs = [1, 3, 5, 10, 20];
// console.log(numbs.join(''));



// // 4 задание
// 
// let multArr = [];
// 
// for (let i = 0; i < 3; i++) {
//     multArr[i] = [];
// 
//     for (let j = 0; j < 3; j++) {
//         multArr[i].push(1)
//     }
// }
// console.log(multArr);



// // 5 задание
// 
// const numbs = [1, 1, 1];
// numbs.push(2, 2, 2);
// 
// console.log(numbs);


// // 6 задание
// const arr = [9, 8, 7, 'a', 6, 5];
// arr.sort();
// arr.pop();
// console.log(arr);



// // 7 задание
// 
// const arr = [9, 8, 7, 6, 5];
// let ansver = +prompt('Введите число');
// let search = arr.includes(ansver);
// if (search) {
//     alert('Угадал');
// } else {
//     alert('Не угадал')
// }



// // 8 задание

// let str = 'abcdef';
// let result = str.split('').reverse().join('');
// console.log(result);



// // 9 задание
// 
// const arr = [
//     [1, 2, 3],
//     [4, 5, 6],
// ];
// allArr = arr[0].concat(arr[1]);
// console.log(allArr);



// // 10 задание
// 
// const arr = [2, 4, 3, 5, 6, 8];
// 
// for (let i = 0; i < arr.length; i++) {
//     if (isNaN(arr[i + 1])) break;
//     let result = arr[i] + arr[i + 1];
//     console.log(result);
// }



// // 11 задание
// 
// const arr = [2, 4, 3, 5, 6, 8];
//
// function squareNumber(item) {
//     let result = item.map(item => (item ** 2));
//     console.log(result);
// };
// 
// squareNumber(arr);



// // 12 задание
// 
// const arrWerbs = ['Hello', 'can', 'i', 'help', 'you'];
// 
// const converter = (arr) => {
//     let result = arr.map(el => el.length);
//     console.log(result);
// }
// converter(arrWerbs);



// // 13 задание
// 
// const arr = [3, 5, -5, 6, -7, 8];
// 
// function filterPositive(array) {
//     let result = array.filter(el => el < 0);
//     console.log(result);
// }
// 
// filterPositive(arr);


// // 14 задание
// 
// const array = [];
// const superFunction = (arr) => {
// 
//     for (let i = 0; i < 10; i++) {
//         arr.push(Math.round(Math.random() * 10));
//     }
// 
//     const evenArray = [arr.filter(el => (el % 2 === 0))];
//     console.log(evenArray);
//     console.log(arr, evenArray);
// }
// superFunction(array);



// // 15 задание
// 
// const array = [];
// const superFunction = (arr) => {
// 
//     for (let i = 0; i < 6; i++) {
//         arr.push(Math.round(Math.random() * 10));
//     }
// 
//     const result = arr.reduce((a, b) => (a + b));
//     console.log(arr);
//     console.log(result);
// }
// 
// superFunction(array)

    