// 1
let a = 10;
alert(a);
a = 20;
alert(a);

// 2
let year1Iphone = 2007;
alert(`1 iphone was released in ${year1Iphone}`);

// 3
let creator = 'Brendan Eich';
alert(`JavaScript was created by ${creator}`);

// 4
let b = 10;
let c = 2;
alert((c + b) + ' | ' + (b - c) + ' | ' + (b * c) + ' | ' + (b / c));

// 5
let result = 2 ** 5;
alert(result);

// 6
let d = 9;
let i = 2;
alert(d % i);

// 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;

alert(num);

// 8
let age = Number(prompt("Сколько вам лет?"));
alert(`На текущий момент вам ${age} лет`);

// 9
const user = {
    name: 'Roman',
    age: 26,
    isAdmin: true,
};
user['city of residence'] = 'Severodvinsk';
user['age'] = 27;
delete user['city of residence'];
let info = prompt('Какую информацию хотите узнать об объекте?');
alert(user[info]);

// 10
userName = prompt('Как вас зовут?');
alert(`Привет, ${userName} !`)



