let str = 'aditya';

let arrStr = str.split('');

let newArr = [];
let j = 0;
for(let i = arrStr.length; i>0; i--){
    newArr[j] = arrStr[i-1];
    j++; 
}
console.log(newArr.join(''));
console.log(str.split('').reverse().join(''));
