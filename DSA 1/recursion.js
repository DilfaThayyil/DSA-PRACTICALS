

    // //calculate factorial
    // //*******************

// function factorial(n){
//     if(n === 0 || n === 1){
//         return 1
//     }else{
//         return n*factorial(n-1)
//     }
// }

// console.log("Factorial of 5 : ",factorial(5));


    // //calculate fibonacci sequence
    // // ***************************

// function fibonacci(n){
//     if(n===0){
//         return 0
//     }else if(n===1){
//         return 1
//     }else{
//         return fibonacci(n-1) + fibonacci(n-2)
//     }
// }

// console.log("Fibonacci sequence upto 8 : ")
// for(let i = 0 ; i<=8 ; i++){
//     console.log(fibonacci(i));
// }



    // //sum of elements using recursion
    // //******************************

// function sum (arr){
//     if(arr.length===0){
//         return 0
//     }
//     return arr[0]+sum(arr.slice(1))
// }


// const arr = [10,20,30,40,50]
// console.log(sum(arr))


    // // mutual recursion
    // //*******************

function isEven(n){
    if(n===0){
        return true
    }
    return isOdd(n-1)
}

function isOdd(n){
    if(n===0){
        return false
    }
    return isEven(n-1)
}

console.log(isEven(4));
console.log(isOdd(3));


    // binarysearch using recursion
    // ****************************

// function binarySearch(arr,target,left=0,right=arr.length-1){
//     if(left>right){
//         return -1
//     }
//     let mid = Math.floor((left+right)/2)
//     if(arr[mid]===target){
//         return mid
//     }else if (arr[mid]>target){
//         return binarySearch(arr,target,left,mid-1)
//     }else{
//         return binarySearch(arr,target,mid+1,right)
//     }
// }

// const arr = [1,2,3,4,5]
// const target = 3
// const index = binarySearch(arr,target)
// if(index!== -1){
//     console.log(`element found at index ${index}`);
// }else{
//     console.log('element not found');
// } 

