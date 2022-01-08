//naive
function sumOfPair(arr, sum){
    let len = arr.length;
    for(let i = 0; i<len-1; i++){
        for (let j = i+1; j<len; j++){
            if(arr[i]+arr[j] === sum){
                return true;
            }
        }
    }
    return false;
}
let arr = [5, 6, 7, 8];
console.log(sumOfPair(arr, 19));

//optimized
function sumOfPair2(arr, sum){
    const newSet = new Set();
    for(let i=0; i<arr.length; i++){
        if(newSet.has(arr[i])){
            return true;
        }
        newSet.add(sum - arr[i]);
    }
    return false;
}

console.log(sumOfPair2(arr, 11))
