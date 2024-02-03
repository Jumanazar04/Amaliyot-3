// const array = [ [1,2], [true, false], 0, 'name', 'age', [3,4,5,6,7,]];

// array.forEach((user, i) =>{
//     if(typeof user == 'string'){
//         console.log('String indexi:', i);
//     }
//     // console.log(typeof user);
// })
// // console.log(array);

// for (let i = 0; i < array.length; i++) {
//     if(typeof array[i] == 'string'){
//         console.log('String indexi:', i);
//     }    
// }

// const newArray = []

// array.forEach((item, i)=>{
//     if(Array.isArray(item)){
//         item.forEach((num) =>{
//             newArray.push(num)
//         })
//     }
// })

// console.log(newArray);

// const array = [ null, 12, true, false, 0, undefined, 99, 'good', NaN, 'true', '' ];
// const newArray = [];

// array.forEach((item) =>{
//     if(!item){
//         newArray.push(item)
//     }
// })

// console.log(newArray);

// function reverseString(str) {
//     return str.split('').reverse().join('');
// }

// var originalString = "Samarkand";
// var reversedString = reverseString(originalString);
// console.log(reversedString); // natnamkaS

// let str = 'Andijan';
// let newStr = str.split('').reverse().join('');
// console.log(newStr);
// let myName = 'Jumanazar';
// let newMyName = reverseString(myName);
// console.log(newMyName);


// let newText = prompt('Ismingizni kiriting:');
// let array = newText;
// let newArray = array.split(' ');
// let newWord = ''

// newArray.forEach((item) => {
//     const boshi = item[0].toUpperCase();
//     const spliceBoshi = item.slice(1, item.length).toLowerCase();

//     newWord += ' ' + boshi + spliceBoshi;
// })

// console.log(newWord);

// const num = [ -1, 1, 2, -0.2];
// let number = 0;

// num.forEach((item) =>{
//     if( item > 0.0 && Math.floor(item) === item && item != Infinity){
//         number += item;
//     }
// })

// console.log(number);


// let text = 'qaleszaxirA';
// let newText = text.split('');
// let textOne = '';

// newText.forEach((item) =>{
//     if(item == 'a' || item == 'A'){
//         textOne += item;
//     }
// })

// console.log(textOne.length);

// let array = [221, 'Salom', true, [1, 2, 3, false], null, undefined, 'Assalomu aleykum'];
// let newArray = [];

// array.forEach((item) => {
//     newArray.push(typeof item)
// })

// console.log(newArray);

// const text = 'Jumanazar';
// let newText = text.lastIndexOf(text.slice(-1)) + 1;
// console.log(newText);

// const num = [1, 2, 3, 4, 5];
// let result = [];

// num.forEach((numbers, i)=>{
//     result.push(numbers + i)
// })

// console.log(result);

// let num = 100;
// let result = 0;

// for(let i = 1; i <= num; i++){
//     result += i;
// }

// console.log(result);


// let num = 7;
// let result = 0;

// for(let i=1; i<=10; i++){
//     result = num * i + 1;
//     console.log(result);
// }

// let array = [1, 2, 3, -4, 5, 6];
// let result = [];

// for(let i = 0; i < array.length; i++){
//     result.push(array[i] * -1);
// }

// console.log(result);

// let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
let result = [];



// for (let i = 0; i < array.length; i++) {
//     if(Math.round(array[i] % 3) == 0 ){
//         result.push(  'fizz' );
//     }else if (Math.round(array[i] % 5) == 0 ){
//         result.push('buzz');
//     }else if (Math.round(array[i] % 15) == 0 ){
//         result.push('fizzbuzz');
//     }else {
//         result.push(array[i])
//     }
    
    
    
    
// }
// console.log(result);


// function fizzBuzz  (item){
//     for (let i = 1; i <= item; i++) {
//         if(Math.round(i % 3) == 0 && Math.round(i % 5) != 0 ){
//             result.push('fizz');
//         }else if (Math.round(i % 5) == 0 && Math.round(i % 3) != 0 ){
//             result.push('buzz');
//         }else if (Math.round(i % 15) == 0 ){
//             result.push('fizzbuzz');
//         }else {
//             result.push(i)
//         }
//     }
// }

// array.forEach((item) =>{
//     if(Math.round(item % 3) == 0 && Math.round(item % 5) != 0 ){
//         result.push('fizz');
//     }else if (Math.round(item % 5) == 0 && Math.round(item % 3) != 0 ){
//         result.push('buzz');
//     }else if (Math.round(item % 5) == 0 || Math.round(item % 3) == 0 ){
//         result.push('fizzbuzz');
//     }else {
//         result.push(item)
//     }
// })
// fizzBuzz(100);
// console.log(result);

// const me = {
//     name: 'Jumanazar',
//     age: 20,
//     study: 'Universitet',
//     location: 'Andijan',
//     // lang: [Uz, Eng, Rus],
//     // sport: [footbal, tennis, chess],
//     about: function (){
//       return  `My name is ${this.name}. I am ${this.age}. I study ${this.study}. I am from ${this.location}. I can speak three language ` 
//     }

// }

// console.log(me.about());


// const main = document.querySelector('main');
// const title = document.querySelector('h1');

// console.log(main.children);
// const aray = Array.from(main.children);

// aray.forEach((child) =>{
//   if (child.textContent.includes('error')) {
//     child.classList.add('error')
//   } else if (child.textContent.includes('succes')){
//     child.classList.add('succes')
//   }
// })

// title.previousElementSibling.style.textAlign = 'end'


// const items = document.querySelectorAll('p');

// items.forEach((item, i) =>{
//   item.addEventListener('click', (e)=>{
//       console.log(e.target);
//   })
// })



