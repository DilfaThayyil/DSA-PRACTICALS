
    // recursiveBinarySearch
    // *********************

// function recursiveBinarySearch(arr,target,left=0,right=arr.length-1){
//     if(left>right){
//         return -1
//     }
//     let mid = Math.floor((left+right)/2)
//     if(arr[mid]===target){
//         return mid
//     }else if(arr[mid]<target){
//         return recursiveBinarySearch(arr,target,mid+1,right)
//     }else{
//         return recursiveBinarySearch(arr,target,left,mid-1)
//     }
// }

// let arr = [1,2,3,4,5]
// let target = 3
// let index = recursiveBinarySearch(arr,target)
// if(index !== -1){
//     console.log(`element found at index ${index}`);
// }else{
//     console.log('element not found');
// }

                    // Big-O = O(log n)


    // Binary search
    // *************

// function binarySearch(arr,target,left=0,right=arr.length){
//     while(left<right){
//         let mid = Math.floor((left+right)/2)
//         if(target===arr[mid]){
//             return mid
//         }else if(target<arr[mid]){
//             right = mid - 1
//         }else{
//             left = mid + 1
//         }
//     }
//     return -1
// }

// let sortedArray = [1,2,3,4,5]
// let target = 3
// const index = binarySearch(sortedArray,target)
// if(index !== -1){
//     console.log(`element found at index ${index}`);
// }else{
//     console.log('element not found');
// }

                    // Big-O = O(log n)



