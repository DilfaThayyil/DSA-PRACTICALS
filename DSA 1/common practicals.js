//*************reversing an array********************
// let arr = [1,2,3,4,5,6]
// let left = 0
// let right = arr.length-1
// while(left<right){
//     let temp = arr[left]
//     arr[left] = arr[right]
//     arr[right] = temp

//     left++
//     right--
// }
// console.log(arr)



// ************find largest element***************
// let arr = [34,23,76,34,98,45,3]
// let max = 0
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>max){
//         max = arr[i]
//     }
// }
// console.log(max)



// ***********find 2nd largest element***********
// let arr = [65,23,87,34,54,65,23]
// let max1 = 0
// let max2 = 0
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>max1){
//         max1 = arr[i]
//     }else if(arr[i]<max1 && arr[i]>=max2){
//         max2 = arr[i]
//     }
// }
// console.log(max2)



// *******find duplicates from sorted array*******
// let arr = [1,2,2,3,3,4,4,5]
// let duplicates = []
// for(let i=0;i<arr.length;i++){
//     if(arr[i]===arr[i+1]){
//         duplicates.push(arr[i])
//     }
// }
// console.log(duplicates)



// ********find duplicates from unsorted array********
// let arr = [6,2,1,3,4,3,6,1]
// let dupArray = []
// let seen = new Set()
// for(let i=0;i<arr.length;i++){
//     if(seen.has(arr[i])){
//         dupArray.push(arr[i])
//     }else{
//         seen.add(arr[i])
//     }
// }
// console.log(dupArray)



// *********Prime numbers********
// function isPrime(n){
//     if(n<2){
//         return false
//     }
//     for(let i=2;i<n;i++){
//         if(n%i===0){
//             return false
//         }
//     }
//     return true
// }
// console.log(isPrime(2))
// console.log(isPrime(1))



// *********factorial********
// function factorial(n){
//     if(n<2){
//         return n
//     }
//     let result = 1
//     for(let i=2;i<=n;i++){
//         result = result*i
//     }
//     return result
// }
// console.log(factorial(4))

// ********factorial using recursion********
// function factorial(n){
//     if(n===0 || n===1){
//         return 1
//     }else{
//         return n*factorial(n-1)
//     }
// }
// console.log(factorial(4))



// ********binary search*********
// function binary(arr,target){
//     let left = 0
//     let right = arr.length-1
//     if(left>right){
//         return -1
//     }
//     while(left<=right){
//         let mid = Math.floor((left+right)/2)
//         if(arr[mid]===target){
//             return mid
//         }else if (arr[mid>target]){
//             right = mid-1
//         }else{
//             left = mid+1
//         }
//     }
//     return -1
// }
// let arr = [1,2,3,4,5]
// let target = 5
// const index = binary(arr,target)
// if(index !== -1){
//     console.log(`${target} found at index ${index}`);
// }else{
//     console.log("element not found");
// }


// ********binary search using recursion********
// function binarySearch(arr,target,left=0,right=arr.length-1){
//     if(left>right){
//         return -1
//     }
//     const mid = Math.floor((left+right)/2)
//     if(arr[mid]===target){
//         return mid
//     }else if(arr[mid]>target){
//         return binarySearch(arr,target,left,mid-1)
//     }else{
//         return binarySearch(arr,target,mid+1,right)
//     }
// }

// let arr = [1,2,3,4,5]
// let target = 4
// const index = binarySearch(arr,target)
// if(index !== -1){
//     console.log(`${target} found at index ${index}`)
// }else{
//     console.log("elment not found")
// }



//************fibonaccci**************
// function fibonacci(n){
//     let fib = [0,1]
//     for(let i=2;i<n;i++){
//         fib[i] = fib[i-1] + fib[i-2]
//     }
//     return fib
// }
// console.log(fibonacci(10))

// **********sum of fibonacci using recursion*******
// function fib(n){
//     if(n===0 || n===1){
//         return n
//     }
//     return fib(n-1)+fib(n-2)
// }
// console.log(fib(5))

// .********Sum of fibonacci********
// function fibSum(n){
//     let fib = [0,1]
//     let sum = 1
//     for(let i = 2; i<n ; i++){
//         fib[i] = fib[i-1] + fib[i-2]
//         sum = sum+fib[i]
//     }
//     return sum
// }

// console.log(fibSum(5))



// *********sum of array*******
// let arr = [10,43,10]
// let sum = 0
// for(let i=0;i<arr.length;i++){
//     sum=sum+arr[i]
// }
// console.log(sum)


// *********sum of array using recursion********
// function sum(arr){
//     if(arr.length===0){
//         return null
//     }
//     return arr[0]+sum(arr.slice(1))
// }

// let arr = [10,43,20]
// console.log(sum(arr))



// ********yield numbers from 2d array********
// function* genArray(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr[i].length;j++){
//             yield arr[i][j]
//         }
//     }
// }
// let arr = [[1,2],[3,4],[5,6]]
// let generator = genArray(arr)
// let result = generator.next()
// while(!result.done){
//     console.log(result.value)
//     result = generator.next()
// }


// ************flatten 2d array***********
// let arr = [[1,2],[3,4],[5,6]]
// let flatArr = []
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//         flatArr.push(arr[i][j])
//     }
// }
// console.log(flatArr)


// ***********move all zero to rightside in array**********
// let arr = [1,0,2,0,3,4,0,0,5]
// let j = 0
// for(let i=0;i<arr.length;i++){
//     if(arr[i]!==0){
//         arr[j]=arr[i]
//         j++
//     }
// }
// for(let i=j;i<arr.length;i++){
//     arr[i]=0
// }
// console.log(arr)
// --------------------------------------------------------
// // for sorted LL
// function removeDuplicates(){
//     if(!this.head){
//         return null
//     }
//     let curr = this.head
//     while(curr&&curr.next){
//         if(curr.value===curr.next.value){
//             curr.next = curr.next.next
//             this.size--
//         }else{
//             curr = curr.next
//         }
//     }
// }
// --------------------------------------------------------
// // for unsorted LL
// function removeDuplicates(){
//     if(!this.head){
//         return null
//     }
//     let curr = this.head
//     let seen = new Set()
//     seen.add(curr.value)
//     while(curr.next){
//         if(seen.has(curr.next.value)){
//             curr.next = curr.next.next
//             this.size--
//         }else{
//             seen.add(curr.next.value)
//             curr = curr.next
//         }
//     } 
// }