//iterative method
 
function fibonacciIterative(n){
    let result = 1;
    let f1 = 0;
    let f2 = 1;
    for(let i=2; i<=n; i++){
        result = f1 + f2;
        f1 = f2;
        f2 = result;
    }
    return result;
}

console.log('Fibonacci Iterative: ', fibonacciIterative(0));

function fibonacciRecursive(n){
    if(n<3){
        return 1;
    }
    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}

console.log('Fibonacci Recursive: ', fibonacciRecursive(0));