// // 1 задание

// const people = [
//     { name: 'Глеб', age: 29 },
//     { name: 'Анна', age: 17 },
//     { name: 'Олег', age: 7 },
//     { name: 'Оксана', age: 47 }
//  ];
// 
// console.log(people.sort((a, b) => a.age > b.age ? 1 : -1));



// 2 задание


function isPositive(number) {
    if (number > 0) {
        return true;
    } else {
        return false;
    }
}

// function isMale(object) {
//     if (object.gender == 'male') {
//         return true;
//     } else {
//         return false;
//     }
// }
// 
// function filter(arr, ruleFunction) {
//     const output = [];
// 
//     for (let i = 0; i < arr.length; i++) {
//         if (ruleFunction(arr[i]) === true) {
//             output.push(arr[i])
//         }
//     }
//     return output
//     
// }
// 
// console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]
// 
// const people = [
//     { name: 'Глеб', gender: 'male' },
//     { name: 'Анна', gender: 'female' },
//     { name: 'Олег', gender: 'male' },
//     { name: 'Оксана', gender: 'female' }
// ];
// 
// console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]


// // 3 задание
// 
// const dateTimer = () => {
//     const interval = setInterval(() => {
//         console.log(new Date());
//     }, 3000);
// 
//     setTimeout (() => {
//         clearInterval(interval);
//         console.log('Прошло 30 секунд');
//     }, 30000)
// }
// dateTimer()




// // 4 задание
// 
// function delayForSecond(callback) {
//     setTimeout(callback, 1000)
// }
// 
// delayForSecond(function () {
//    console.log('Привет, Глеб!');
// })




// // 5 задание
// 
// // Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда», 
// // а затем вызывает переданный колбэк
// function delayForSecond(cb) {
//     setTimeout(() => {
//         console.log('Прошла одна секунда');
// 				if(cb) { 	cb(); }
// 
//     }, 1000)
// }
// 
// // Функция sayHi выводит в консоль приветствие для указанного имени
// function sayHi (name) {
//     console.log(`Привет, ${name}!`);
// }
// 
// // Код выше менять нельзя
// 
// // Нужно изменить код ниже:
// delayForSecond(() => {
//     sayHi('Глеб')
// })