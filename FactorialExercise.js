//first method iterative

function factorial1(num){
    for(let i=num-1; i>0; i--){
        num = num * i;
    }
    return num;
}

// console.log(factorial1(6));

function factorial2(num){
    if(num === 2){
        return 2;
    }
    return num * factorial2(num - 1);
}
console.log(factorial2(5));
