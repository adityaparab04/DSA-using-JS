const array1 = ['a', 'b', 'c', 'i'];
const array2 = ['z', 'y', 'i'];
//time complexity O(arr1 x arr2) = O(m x n)
// function similarItems(arr1, arr2){
//     for(let i = 0; i<array1.length; i++){
//         for(let j = 0; j<array2.length; j++){
//             if(array1[i] === array2[j])
//                 return true;
//         }
//     }   
//     return false;
// }

// console.log(similarItems(array1, array2));

//time complexity O(n)
// function similarItems2(arr1, arr2){
//     //loop through first array and create object where properties are equal to items in array
//     let map = {};
//     for (let i=0; i<arr1.length; i++){
//         if(!map[arr1[i]]){
//             map[arr1[i]] = true;
//         }
//         console.log(map);    
//     }
//     // console.log(map);
//     for(let j = 0; j<arr2.length; j++){
//         if(map[arr2[j]]){
//             return true;
//         }
//         console.log(map);
//     }
//     return false;
// }

// console.log(similarItems2(array1, array2));

//using js built in methods
// function similarItems3(arr1, arr2){
//     return arr1.some(item => arr2.includes(item));
// }
// console.log(similarItems3(array1, array2));

//just revising

function commonItems(arr1, arr2){
    let obj = new Object();
    arr1.forEach(elem => {
        if(!obj[elem]){
            obj[elem] = true
        }
    });
    let count = 0;
    // arr2.forEach(elem => {
    
    //     if(obj[elem]){
    //         return true
    //     }
    //     count++
    // });
    
    // for (let elem in arr2){
    //     if(obj[elem]){
    //         return true;
    //     }
    // }
    for (let i=0; i<arr2.length; i++){
        if(obj[arr2[i]]){
            return true;
        }
    }

    console.log(count);
    return false;
}

console.log(commonItems(array1, array2));