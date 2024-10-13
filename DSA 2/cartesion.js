
    // cartesion product

function cartesionProduct(arr1,arr2){
    const result = []
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            result.push([arr1[i],arr2[j]])
        }
    }

    return result
}

let arr1 = [1,2]
let arr2 = [3,4,5]
console.log(cartesionProduct(arr1,arr2))

    // Big-O = O(mn)  m,n = length of 2 arrays

    // if the length of two arrays are same , 
    // Big-O = O(n^2)