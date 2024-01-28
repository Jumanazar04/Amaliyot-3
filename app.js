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

function reverseString(str) {
    return str.split('').reverse().join('');
}

var originalString = "Samarkand";
var reversedString = reverseString(originalString);
console.log(reversedString); // natnamkaS

let str = 'Andijan';
let newStr = str.split('').reverse().join('');
console.log(newStr);
let myName = 'Jumanazar';
let newMyName = reverseString(myName);
console.log(newMyName);
