//Google question

//Given an array = [2, 5, 1, 2, 3, 5, 1, 2, 4]
//it should return 2

const arr = [1, 8, 5, 2, 5, 3, 1, 2, 3, 5, 1, 2, 4];
function repeatNums(arr){
    let temp = [];
    for(let i = 0; i<arr.length; i++){
        if(!temp.includes(arr[i])){
            temp.push(arr[i]);
        }else{
            return arr[i];
        }
    }
    return undefined;
}

function repeatNums2(arr){
    //let temp = [];
    for(let i = 0; i<arr.length; i++){
        for(let j = i+1; j<arr.length; j++){
            if(arr[i] === arr[j]){
                return arr[i];
            }
        }
    }
    return undefined;
}

function repeatNums3(arr){
    let map = {};
    for(let i=0; i<arr.length; i++){
        console.log(map);
        if(map[arr[i]] != undefined){
            return arr[i]
        }
        else{
            map[arr[i]] = i;
        }
    }
    return undefined;
}
function repeatNums4(arr){
    let map = new Map();
    for(let i=0; i<arr.length; i++){
        if(map.has(arr[i])){
            return arr[i];
        }
        map.set(arr[i], i);
    }
    return 'no recurrent number';
}
// console.log(repeatNums(arr));
// console.log(repeatNums2(arr)); 
console.log(repeatNums4(arr));
