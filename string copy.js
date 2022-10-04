//reverse a string
let str = 'Hi! My name is Aditya';

//traditional way
function reverseStr(input){
    let newStr = [];
    let j = 0;
    for(let i = input.length -1; i>=0; i--){
        newStr.push(input[i]);
    }
    return newStr.join('');
}

//inbuilt function way
function reverseStr2(input){
    return input.split('').reverse().join('');
}

//modern way
const reverseStr3 = input => input.split('').reverse().join('');
const reverseStr4 = input => [...input].reverse().join('');

console.log(reverseStr3(str));