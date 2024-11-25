
let array = [11,22,33,44]

console.log("Original array : ",array)

array.push(55)
console.log("Array after adding an element : ",array);

array.pop()
console.log("Array after removing an element : ")

console.log("Element at index 2 : ",array[2])

console.log("Iterating over array elements : ")
array.forEach((num,index)=>{
    console.log(`Element at index ${index} : ${num}`)
})

    //// sum of array using recursion
    ////***************************** 

// function sum(arr){
//     if(arr.length===0){
//         return null
//     }
//     return arr[0]+sum(arr.splice(1))
// }
// let arr = [1,2,3,4]
// console.log(sum(arr))


        // Big-O = O(n)
    //// reversing an array
    ////********************

// function reverse(arr){
//     let left = 0
//     let right = arr.length-1
//     while(left<right){
//         let temp = arr[left]
//         arr[left] = arr[right]
//         arr[right] = temp

//         left++
//         right--
//     }
//     return arr
// }

// let arr = [87,5536,0,87,56]
// console.log(reverse(arr))


// move all zero elements into the right side of array
// ***************************************************
// let arr = [3,0,5,0,0,7,9,0]    //for sorted output
// let j = 0
// for(let i=0;i<arr.length;i++){
//     if(arr[i]!==0){
//         arr[j] = arr[i]
//         j++
//     }
// }
// for(let i=j;i<arr.length;i++){
//     arr[i] = 0
// }

// console.log(arr) 


        // find largest 3 elements
        // ***********************

function findLargests(arr){
    let first = 0
    let second = 0
    let third = 0
    for(let i=0;i<arr.length;i++){
        if(arr[i]>first){
            third = second
            second = first
            first = arr[i]
        }else if(arr[i]>second){
            third = second
            second = arr[i]
        }else{
            third = arr[i]
        }
    }
    return [first,second,third]
}
let arr1 = [95,34,54,76]
console.log(findLargests(arr1));



        // find second largest
        // *********************

function secondLargest(arr){
    let largest = 0
    let secLargest = 0
    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            secLargest = largest
            largest = arr[i]
        }else if(arr[i]>secLargest&&arr[i]<largest){
            secLargest = arr[i]
        }
    }
    return secLargest
}

let arr = [95,34,54,76]
console.log(secondLargest(arr));



    // flatten 2D array
    // *****************************

// let array = [[1,2],[3,4],[5,6]]
// let result = []
// for(let i=0;i<array.length;i++){
//     for(let j=0;j<array[i].length;j++){
//         result.push(array[i][j])
//     }
// }
// console.log(result)


    // yield numbers from a 2D array
    // *****************************

// function* numGenerator(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr[i].length;j++){
//             yield arr[i][j]
//         }
//     }
// }

// const arr = [[1,2],[3,4],[5,6]]
// const generator = numGenerator(arr)
// let result = generator.next()

// while(!result.done){
//     console.log(result.value);
//     result = generator.next()
// }

    // // fibonacci
    // ************
// function fibonacci(n){
//     let arr = [0,1]
//     for(let i=2;i<n;i++){
//         arr[i] = arr[i-1]+arr[i-2]
//     }
//     return arr
// }

// console.log(fibonacci(3));
// console.log(fibonacci(4));
// console.log(fibonacci(5));

                //  Big-O = O(n)



//     // factorial
//     // *********

// function factorial(n){
//     let result = 1
//     for(let i=2;i<=n;i++){
//         result = result*i
//     }
//     return result
// }

// console.log(factorial(0));
// console.log(factorial(1));
// console.log(factorial(5));
// console.log(factorial(6));

                 // Big-O = O(n)       
                 


    // recursiveFibonacci
    // ******************

// function recursiveFibonacci(n){
//     if(n<2){
//         return n
//     }
//     return recursiveFibonacci(n-1)+recursiveFibonacci(n-2)
// }
// console.log(recursiveFibonacci(0));
// console.log(recursiveFibonacci(1));
// console.log(recursiveFibonacci(6));

                // Big-O = O(n^2)     
                

    // PowerOfTwo
    // *********
// function isPowerOfTwo(n){
//     if(n<1){
//         return false
//     }
//     while(n>1){
//         if(n%2!==0){
//             return false
//         }
//         n = n/2
//     }
//     return true
// }

// console.log(isPowerOfTwo(1));
// console.log(isPowerOfTwo(2));
// console.log(isPowerOfTwo(5));                