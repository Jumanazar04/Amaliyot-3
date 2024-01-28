const array = [ [1,2], [true, false], 0, 'name', 'age'];

// array.forEach((user, i) =>{
//     if(typeof user == 'string'){
//         console.log('String indexi:', i);
//     }
//     // console.log(typeof user);
// })
// // console.log(array);

for (let i = 0; i < array.length; i++) {
    if(typeof array[i] == 'string'){
        console.log('String indexi:', i);
    }    
}