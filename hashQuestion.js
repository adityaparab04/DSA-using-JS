//Google question

//Given an array = [2, 5, 1, 2, 3, 5, 1, 2, 4]
//it should return 2

const arr = [3, 8, 5, 2, 5, 3, 1, 2, 3, 5, 1, 2, 4];
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

// console.log(repeatNums(arr));
// console.log(repeatNums2(arr)); 
console.log(repeatNums3(arr));
