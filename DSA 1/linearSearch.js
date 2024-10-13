
    // linear search
    // *************

function linearSearch(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i
        }
    }
    return -1
}
let arr = [1,2,3,4,5]
let target = 3
const index = linearSearch(arr,target)
if(index !== -1){
    console.log(`element found at index ${index}`);
}else{
    console.log('element not found');
}

                    // Big-O = O(n)