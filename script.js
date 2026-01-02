// alert("Hello")

import { addition, subs } from "./calculate.js";
import { person3 } from "./person.js";
import users from "./user.js";

//arithmatic operator
//(+, - ,*, /, %)





//assignment operator
// (+=, -=, /=, *=, %=)
console.log('assignment operator')
let x = 5;
let y = 3;

x += y;
x -= y;

console.log(x);

//Unary operator (-, +, ++, --)
//pre , post  unary 
console.log('\nUnary operator')
let a = 5; 

let b = ++a;

b = a++;

console.log(b);

//conditional statement
console.log('\nCondition')
const num = 7;
if (num % 2 == 0) {
    console.log("Event");
}
else {
    console.log("Odd");
}

//write a program that check a number is positive or negative or zero

const n = 0;
if (n > 0) {
    console.log("positive");
}
else if (n < 0) {
    console.log("Negative");
}
else {
    console.log("Zero");
}

//logical & conditional 

//vowel consonant
console.log('\n\nlogical condition ')
let letter = 'A';
letter = letter.toLowerCase();
if ( 
    letter === 'a' ||
    letter === 'e' ||
    letter === 'i' ||
    letter === 'o' ||
    letter === 'u' 
) {
    console.log("Vowel");
}
else {
    console.log("Consonant");
}


//loop = for , while, do while
console.log('\nPrinting using for loop')
for (let i = 1; i<= 10; i++){
    console.log(i);
}

console.log('\n\nPrinting using while loop')
let j = 1;
while (j<= 10) {
    console.log(j);
    j++;
}

console.log('\n\nPrinting using do-while loop')
let k = 1;
do {
    
    console.log(k)
    k++;
}
while (k <= 10);


//for of & for in
console.log('\nfor of & for in')
const countries = [
    'Bnagladesh',
    'India',
    'Pakistan',
    'Nepal',
    'Bhutan'
];

for (let country of countries) {
    console.log(country);
    
}


const person = {
    name: 'Hridoy Sarker',
    age: 23,
    address: 'PSTU',
    sub: 'CSE',
    country: 'Bangladesh'

};

for (const key in person) {
    console.log(person[key]);
}


//  function
console.log('\n\nfunction ')

function greeting(message){ 
    console.log(`Hello!, ${message}`);
}

greeting("Good morning.");
greeting("Afternoon");
greeting("Evening");

// simple calculator

function addNumber(n1, n2) {
    let result = n1 + n2;
    console.log(`${n1} + ${n2} = ${result}`);
}

function SubNumber(n1, n2) {
    let result = n1 - n2;
    console.log(`${n1} - ${n2} = ${result}`);
}

function mulNumber(n1, n2) {
    let result = n1 * n2;
    console.log(`${n1} * ${n2} = ${result}`);
}


addNumber(14, 3);
SubNumber(10, 5);
mulNumber(5, 4);


// tranditional function vs arrow function

function display(message) {
    return `Hello, ${message}`;
}


const display1 = (message) =>  `Hello, ${message}` //arrow 


console.log(display(" world1"));
console.log(display1(" world2"));

// simple calculator

console.log("\n\nSimple calculator");

const addNumber1 = (num1, num2) => num1 + num2;
const subNumber1 = (num1, num2) => num1 - num2; 
const mulNumber1 = (num1, num2) => num1 * num2;
const divNumber1 = (num1, num2) => num1 / num2; 


console.log(addNumber1(10, 20));
console.log(subNumber1(10, 20));
console.log(mulNumber1(10, 20));
console.log(divNumber1(10, 20));

// using object 
console.log('\nusing Object');

const Calculator = {
    add: (num1, num2) => num1 + num2,
    sub: (num1, num2) => num1 - num2,
    mul: (num1, num2) => num1 * num2,
    div: (num1, num2) => num1 / num2,
};

console.log(Calculator.add(20, 30));
console.log(Calculator.sub(30, 10));
console.log(Calculator.mul(20, 2));
console.log(Calculator.div(30, 3));


//buildin function
//number method
const m = 12.3456;

console.log(m.toFixed(3));
console.log(m.toPrecision(4));
console.log(m.toString());
console.log(m.toString(2));
console.log(typeof(m.toString()))
//parseInt()
//parsefloat()


//math method
console.log(Math.abs(-34));
console.log(Math.round(3.45));

//random number
const randomNumber = Math.floor(Math.random()*5);
console.log(randomNumber);

//date method
const date = new Date();

console.log(date.getFullYear());
console.log(date.toLocaleTimeString());


//! Array related Mehtod

const printArray = (items) => {
    for (const item of items) {
        console.log(item);
    }
}

const fruits = ['apple', 'orange', 'mango', 'banana'];

fruits.push('cherry', 'strawberry');

printArray(fruits);

//push = unshift
//pop = shift


//slice

const country = ['Australia', 'Bangladesh', 'Nepal', 'India'];

const sliced = country.slice(1, 3);
printArray(sliced);

//splice
// country.splice(2);
// printArray(country);

console.log('\nafter splice');
country.splice(2, 1, 'Chin', 'Japan');
printArray(country);

//string related
console.log('\n\nString');

const text =' hello World ';

console.log(text.length);
console.log(text.charAt(1));
console.log(text.indexOf('hello'));
console.log(text.lastIndexOf('o'));
console.log(text.slice(2, 4));
console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.trim());


//module 

console.log(addition(10, 5));
console.log(subs(10, 5));
console.log(person3.name);
console.log(person3.nationality);
console.log(person3.printInfo());


//spread operator

const oddArray = [12, 13, 15, 34];
const newArray = [...oddArray, 65, 45, 34, 46];
console.log(newArray);


//rest parameter

const addNumber2 = (...numbers) => {
    let sum = 0;
    for (const number of numbers) {
        sum += number;
    }
    return sum;
}

console.log(addNumber2(10, 20));
console.log(addNumber2(10, 20, 30, 40, 50));

//destructure

const oldPerson = {
    name: "Yeash sarker",
    age: 23,
    language: {
        native: "Bangla",
        second: 'Hindi',
        third: 'English'
    },

};

const { language: lg, age, name } = oldPerson; //destructure

console.log(age);
console.log(name);
console.log(lg.native);

//array 

let arr = [1, 2, 3, 4];
let arr1 = [5, 6, 7, 8];
console.log(arr.indexOf(3));

let arr2 = arr.concat(arr1);
console.log(arr2);


//default value

const greet = (msg ='Good day!') => {

    console.log(msg);

}

greet('Good morning');
greet('Good evening');
greet('Good night');
greet();

// default import
console.log(users);

//? Higher order function => calculate
//? callback function => operation

const calculate = (n1, n2, operation) => {
    return operation(n1, n2);
}

const add2 = (n1, n2) => {
    return n1 + n2;
};

const sub2 = (n1, n2) => {
    return n1 - n2;
};
const multi2 = (n1, n2) => {
    return n1 * n2;
};
const divi2 = (n1, n2) => {
    return n1 / n2;
};

let res = calculate(5, 4, add2);
console.log(res);

res = calculate(4, 2, sub2);
console.log(res);

// TODO - Higher order build-in function: foreach

// const persons = ['Ali', 'Amit', 'Trrino', 'Roud', 'Hridoy'];

// persons.forEach((manus, i) => {
//     console.log(`${i}: ${manus}`);
// });

const squre = [1, 2, 3, 4, 5];
const squrenum = [];
squre.forEach((number) => {
    squrenum.push(number * number);
});
console.log(squrenum);

//

// TODO - Higher order build-in function: map

const squre1 = [1, 2, 3, 4, 5];
const squrenum1 = squre1.map((number) => number * number );
console.log(squrenum);

//map- example
const products = [
    { id: 1, name: 'apple iphone 17', price: 160000 },
    { id: 2, name: 'apple iphone 14', price: 140000 },
    { id: 3, name: 'vivo y20 ', price: 60000 },
    { id: 4, name: 'samsung galaxy s21', price: 40000 },
    { id: 5, name: 'realme rwe34', price: 3000 },
];

products.map((product, i) => {
    console.log(`\n\nProduct card: ${i+1}`);
    console.log(`ID: ${product.id}`);
    console.log(`name: ${product.name}`);
    console.log(`Price: ${product.price}`);
});


// TODO - Higher order build-in function: filter

const product1 = [
    { id: 1, name: 'apple iphone 17', price: 3000, createdAt: new Date('2023-09-25') },
    { id: 2, name: 'apple iphone 14', price: 1200, createdAt: new Date('2023-06-25')  },
    { id: 3, name: 'vivo y20 ', price: 2000 , createdAt: new Date('2023-07-15') },
    { id: 4, name: 'samsung galaxy s21', price: 1400 , createdAt: new Date('2023-08-15')},
    { id: 5, name: 'realme rwe34', price: 3000, createdAt: new Date('2023-04-15')  },
    { id: 6, name: 'apple watch 17', price: 1000, createdAt: new Date('2023-01-15')  },
    { id: 7, name: 'samsung watch 14', price: 1500 , createdAt: new Date('2023-05-15') },
    { id: 8, name: 'vivo y20 ', price: 1900 , createdAt: new Date('2023-03-15') },
    { id: 9, name: 'samsung tv ', price: 800 , createdAt: new Date('2023-02-15') },
    { id: 10, name: 'realme rwe34', price: 1700 , createdAt: new Date('2023-07-23') },
];

//!return the items price is greater than 1500

const filterproduct = product1.filter((product) => {
    return product.price > 1500;
});

console.log(filterproduct);

//! filter + map usecase:

const filteredNames = product1.filter((product) => product.price >= 1300 && product.price <= 2000).map((x)=> x.name);

console.log(filteredNames);

//! Search a product by using filter

// const searchProducts = product1.filter((product) => product.name == "apple iphone 17");
// console.log(searchProducts);

// const searchProducts = product1.filter((product) => product.name.includes('apple'));
// console.log(searchProducts);

const searchProducts = (searchValue) => {
   return product1.filter((product) => product.name.toLowerCase().includes(searchValue.toLowerCase()));
}
console.log(searchProducts("Apple"));


// TODO - Higher order build-in function: reduce

const cardProducts = [
    { id: 1, name: 'apple iphone 17', price: 160000 },
    { id: 2, name: 'apple iphone 14', price: 140000 },
];

//!using for loop
// let totalPrice = 0;
// for (let index = 0; index < cardProducts.length; index++) {
//     totalPrice += cardProducts[index].price;
// };

// console.log(`You have to pay : ${totalPrice}`);

//? Using forEach 

// let totalPrice = 0;
// cardProducts.forEach((cardItem) => totalPrice += cardItem.price);
    
// console.log(`You have to pay : ${totalPrice}`);

//! Using reduce 

const totalPrice = cardProducts
    .map((cardItem)=> cardItem.price)
    .reduce((accumulator, currentPrice) => accumulator + currentPrice, 0);

console.log(`You have to pay total: ${totalPrice}`);


// TODO - Higher order build-in function: some
//best practice : variable name should start with has
//atleast one item price >  15500
const hasPrice = cardProducts.some((cardProduct) => cardProduct.price > 15500);
console.log(`atleast one item price >  15500: ${hasPrice}`);

// TODO - Higher order build-in function: every

const allPrice = cardProducts.every((cardProduct) => cardProduct.price > 15500);
console.log(`all item price >  15500: ${allPrice}`);

// TODO - Higher order build-in function: sort
//!sort by Price

const productsSortByPrice = product1.sort((a, b) => {
    return a.price - b.price; //ascending
  //  return b.price - a.price; //descending
});
console.log(productsSortByPrice);

//! sort by name
const productsSortByName = product1.sort((a, b) => {
    return a.name.localeCompare(b.name);
     
});
console.log(productsSortByName);

//! Sort by Date
const productsSortByDate = product1.sort((a, b) => {
    return new Date(a.createdAt)- new Date(b.createdAt);
     
});
console.log(productsSortByDate);

//! Create menu for sorting using switch case

//prints products
const printProducts = (product1) => {
    console.log(JSON.stringify(product1, null, 2));
}

const menu = `
1. Sort By Name (A-Z)
2. Sort By Name (Z-A)
3. Sort By Price (Low to High)
4. Sort By Price (High to Low)
5. Sort By Date (Old to New)
6. Sort By Date (New to Old)

`;

const choise = '1';
let sortedProducts = [...product1];

switch (choise) {
    case '1':
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        printProducts(sortedProducts);
        break;
    case '2':
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        printProducts(sortedProducts);
        break;
    case '3':
        sortedProducts.sort((a, b) => a.price - b.price);
        printProducts(sortedProducts);
        break;
    case '4':
        sortedProducts.sort((a, b) => b.price - a.price);
        printProducts(sortedProducts);
        break;
    case '5':
        sortedProducts.sort((a, b) => a.createdAt - b.createdAt);
        printProducts(sortedProducts);
        break;
    case '6':
        sortedProducts.sort((a, b) => b.createdAt - a.createdAt);
        printProducts(sortedProducts);
        break;
    default:
        console.log(`Invalid choise`)
}




// create  a function for all the operations



//! 1. Errors
//? 1.1 Syntax error: missing parenthesis, semicolons, incorrect variable names
//if (6 > 5 

//? 1.2 Reference error: accessing a variable that has not been declared or not in the scope
//console.log(x);

//? 1.3 Type error: performing an operation that does not match with the data type
// let x = 3;
// x = x.toUpperCase();
// console.log(x);
//? 1.4 Range error 
//let array = [1, 2, 3];

//console.log(array[5]);


//! 2. Exception Handling: try , catch, finally, throw and throws

// console.log("Hello");

// try {
//     console.log(i);
// } catch (e) {
//     console.log(`Inside catch block`)
//     console.log(e.name);
//     console.log(e.message);
// } finally {
//     console.log(`Bye`);
//     console.log(`Today is Saturday`);
//     console.log(`I am living in Patuakhali`);
// }


// const user = { fullname: `Yeash Sarker`, Age: 23 };
// try {
//     console.log(user.nationality);

//     const number = 30;
//     number = 20;

// } catch (error) {
//     console.error(error)
// }

// console.log(`good bye`);




// const isEligibleForVote = (Age) => {
//     if (Age < 18) {
//         throw new Error("Invalid age for vote eligibility");
//     }
//     return `Welcome to Vote`;
// };

// try {
//     console.log(isEligibleForVote(15));
// } catch (error) { 
//     console.log(error.message);
// }


//! 3. JS  Object vs JSON (JavaScript Object Notation)

// //?JSON.stringify(), JSON.parse()
// const person10 = {
//     firstName: `Yeash Sarker`,
//     aGe: 23
// };

// const personJSON = JSON.stringify(person10);
// console.log(personJSON);

// console.log(JSON.parse(personJSON));

//! 4. LocalStorage
//? localstorage.setItem(key , value), localstorage.getItem(), localstorage.removeItem()

// const loginInfo = {
//     username: `yeash70`,
//     password: `123456`,
//     loginStatus: true,
// };

// console.log(loginInfo);
// localStorage.setItem('loginData', JSON.stringify(loginInfo));


// const itemFromLocalStorage = JSON.parse(localStorage.getItem('loginData'));
// console.log(itemFromLocalStorage);

// try {
//     localStorage.removeItem('loginData');
// } catch (error) {
//     console.log(error);
// }

// console.log('hello goodbye for now');

//!5. asynchronous vs syschronous
// event loop

console.log('Task 1 ccomplete');
console.log('Task 2 ccomplete');//syn
setTimeout(() => {
    console.log('Task 3 ccomplete');
}, 2000); //asyn
console.log('Task 4 ccomplete');
console.log('Task 5 ccomplete');


//! 6. promise- pending, resolve, reject
//? api calling
//asynchronous
//? js global object - window
//? get request
// const getAllProject = (id) => {
//     fetch('cftechlab.hcsarker.me/projects')
//     .then((res) => res.JSON())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }

// const getSingleProject = (id) => {
//     fetch('cftechlab.hcsarker.me/projects/${id}')
//     .then((res) => res.JSON())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }

// getSingleProject(2); 

// //? post request

// fetch('cftechlab.hcsarker.me/projects', {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'test products',
//         price: 122,
//         description: 'lorem ipsum set', 
//         category: 'web',

//     }),
//   })
//     .then((res) => res.JSON())
//     .then((json) => console.log(json))
//     .catch((err) => console.log(err));


// //? Put request

// fetch('cftechlab.hcsarker.me/projects/7', {
//     method: 'PUT',
//     body: JSON.stringify({
//         title: 'test products',
//         price: 122,
//         description: 'lorem ipsum set', 
//         category: 'web',

//     }),
//   })
//     .then((res) => res.JSON())
//     .then((json) => console.log(json))
//     .catch((err) => console.log(err));

// //? delete request

// fetch('cftechlab.hcsarker.me/projects', {
//     method: 'DELETE',
//   })
//     .then((res) => res.JSON())
//     .then((json) => console.log(json))
//     .catch((err) => console.log(err));

//? await, asyn

// const getAllProject = async () => {
//     try {
//         const res = await fetch('cftechlab.hcsarker.me/projects/4');
//         if (!res.ok) {
//             throw new Error('could not fetch data')
//         }
//         const data = await res.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// };

// getAllProject();



//! DOM
//html document => represent as a tree
//?create html element, delete, update, read
// Todo 1-> DOM -> read/select element and modify
// const titileElement = document.getElementById('title');

// console.log(titileElement);
// console.log(titileElement.id);
// console.log(titileElement?.textContent);

// titileElement.textContent = 'setting value from js';

// const button1 = document.getElementsByClassName('btn')[0];
// console.log(button1);


// const button1 = document.getElementsByTagName('button')[0];

// const button1 = document.querySelector('button');

// const button1 = document.querySelector('.btn');
// button1.textContent = "click1";
// console.log(button1);

// const buttons = document.querySelectorAll('.btn');
// console.log(buttons);

const titileElement = document.querySelector('#title');
titileElement.textContent = "welcome"; 
// titileElement.style.color = 'white';
// titileElement.style.backgroundColor = 'green';
titileElement?.classList.add("title");
// titileElement?.classList.remove("title")

// Todo 2-> DOM -> create html element 

