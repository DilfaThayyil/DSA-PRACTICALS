
// Bubble sort---------------------------------------------------------------------------------------------------

// function bubbleSort(arr){
//     let swapped 
//     do{
//         swapped = false
//         for(let i=0;i<arr.length;i++){
//             if(arr[i]>arr[i+1]){
//                 let temp = arr[i]
//                 arr[i] = arr[i+1]
//                 arr[i+1] = temp
//                 swapped = true
//             }
//         }
        
//     }while(swapped)
//         return arr
// }

// console.log(bubbleSort([7,4,6,3,23,5]))


// insertion sort------------------------------------------------------------------------------------------------

// function insertionSort(arr){
//     for(let i=1;i<arr.length;i++){
//         let numToIns = arr[i]
//         let j = i - 1
//         while(j>=0 && arr[j]>numToIns){
//             arr[j+1] = arr[j]
//             j = j -1
//         }
//         arr[j+1] = numToIns
//     }
//     return arr
// }

// console.log(insertionSort([7,29,4,6,8,93,]))


// selection sort------------------------------------------------------------------------------------------------

// function selectionSort(arr){
//     for(let i=0;i<arr.length-1;i++){
//         let minIndex = i
//         for(let j = i+1 ; j<arr.length;j++){
//             if(arr[j]<arr[minIndex]){
//                 minIndex = j
//             }
//         }
//         if(minIndex!==i){
//             let temp = arr[i]
//             arr[i] = arr[minIndex]
//             arr[minIndex] = temp
//         }
//     }

//     return arr
// }

// console.log(selectionSort([9,2,8,6,2,5]))


// quick sort------------------------------------------------------------------------------------------------------

// function quickSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let pivot = arr[arr.length-1]
//     let left = []
//     let right = []
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }

// console.log(quickSort([7,4,3,5,94,2]))


// merge sort----------------------------------------------------------------------------------------------------

// function mergeSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let mid = Math.floor(arr.length/2)
//     let left = arr.slice(0,mid)
//     let right = arr.slice(mid)
//     return merge(mergeSort(left),mergeSort(right))
// }

// function merge(left,right){
//     let sorted = []
//     while(left.length&&right.length){
//         if(left[0]<right[0]){
//             sorted.push(left.shift())
//         }else{
//             sorted.push(right.shift())
//         }
//     }
//     return [...sorted,...left,...right]
// }

// console.log(mergeSort([8,5,0,1,6,3]))


// stack----------------------------------------------------------------------------------------------------------

// class Stack{
//     constructor(size){
//         this.items = []
//         this.size = size
//     }

//     push(element){
//         return this.items.push(element)
//     }

//     pop(){
//         if(this.items.length===0){
//             return null
//         }
//         return this.items.pop()
//     }

//     display(){
//         console.log(this.items.toString())
//     }
// }

// const stack = new Stack()
// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.display()

// stack.pop()
// console.log("after deletion of last element : ")
// stack.display()



// Queue------------------------------------------------------------------------------------------------------------

// class Queue{
//     constructor(){
//         this.items = []
//     }

//     enqueue(element){
//         return this.items.push(element)
//     }

//     dequeue(){
//         return this.items.shift()
//     }

//     display(){
//         console.log(this.items.toString())
//     }
// }

// const queue = new Queue()

// queue.enqueue(100)
// queue.enqueue(200)
// queue.enqueue(300)
// queue.display()

// queue.dequeue()
// console.log("after deletion of first element : ")
// queue.display()


// Hashtable--------------------------------------------------------------------------------------------------------

// class HashTable{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }

//     hash(key){
//         let total = 0
//         for(let i=0;i<key.length;i++){
//             total += key.charCodeAt(i)
//         }
//         return total % this.size
//     }

//     set(key,value){
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if(!bucket){
//             this.table[index] = [[key,value]]
//         }else{
//             const sameKeyItem = bucket.find(item => item[0]===key)
//             if(sameKeyItem){
//                 sameKeyItem[1] = value
//             }else{
//                 bucket.push([key,value])
//             }
//         }
//     }

//     get(key){
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if(bucket){
//             const sameKeyItem = bucket.find(item => item[0]===key)
//             if(sameKeyItem){
//                 return sameKeyItem[1]
//             }
//         }
//         return undefined
//     }

//     remove(key){
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if(bucket){
//             const sameKeyItem = bucket.find(item => item[0]===key)
//             if(sameKeyItem){
//                 return bucket.splice(bucket.indexOf(sameKeyItem),1)
//             }
//         }
//     }

//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }
// }

// const table = new HashTable(50)

// table.set("name","Dilfa")
// table.set("age",20)
// table.display()

// console.log(table.get("name"))

// console.log(table.remove("name"))
// console.log("after removal :")
// table.display()