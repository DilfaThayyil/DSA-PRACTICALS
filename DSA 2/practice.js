// // reverse stack using recursion
// // *****************************
// class Stack{
//     constructor(){
//         this.items = []
//     }

//     push(element){
//         this.items.push(element)
//     }

//     isEmpty(){
//         return this.items.length===0
//     }

//     pop(){
//         if(this.isEmpty()){
//             return null
//         }
//         return this.items.pop()
//     }

//     reverse(){
//         if(!this.isEmpty()){
//             let top = this.pop()
//             this.reverse()
//             this.insertAtBottom(top)
//         }
//     }

//     insertAtBottom(element){
//         if(this.isEmpty()){
//             this.push(element)
//         }else{
//             let top = this.pop()
//             this.insertAtBottom(element)
//             this.push(top)
//         }
//     }

//     print(){
//         console.log(this.items.toString())
//     }
// }

// const stack = new Stack()

// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.print()

// stack.reverse()
// stack.print()


// // ---------------------------------------------------------------------------------------------------------------


// // reverse queue using recursion
// // *****************************

// class Queue{
//     constructor(){
//         this.items = []
//     }

//     enqueue(element){
//         this.items.push(element)
//     }

//     isEmpty(){
//         return this.items.length===0
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             return null
//         }
//         return this.items.shift()
//     }

//     reverse(){
//         if(!this.isEmpty()){
//             let top = this.dequeue()
//             this.reverse()
//             this.enqueue(top)
//         }
//     }

//     print(){
//         console.log(this.items.toString())
//     }
// }

// const queue = new Queue()

// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.print()

// queue.reverse()
// queue.print()


// // ----------------------------------------------------------------------------------------------------------------


            // bubble sort
            // ***********

// function bubbleSort(arr){
//     let swapped;
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

// let arr = [4,7,9,5,3,37]
// console.log(bubbleSort(arr))


            // insertion sort
            // **************

// function insertionSort(arr){
//     for(let i=1;i<arr.length;i++){
//         let numToIns = arr[i]
//         let j = i-1
//         while(j>=0 && arr[j]>numToIns){
//             arr[j+1] = arr[j]
//             j = j-1
//         }
//         arr[j+1] = numToIns
//     }
//     return arr
// }

// console.log(insertionSort([7,5,3,6,84]))


            // quick sort
            // **********

// function quickSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let pivot = arr[arr.length-1]
//     let right = []
//     let left = []
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }

// console.log(quickSort([7,3,5,9,55,6]))


            // merge sort
            // **********


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
//         if(left[0]<=right[0]){
//             sorted.push(left.shift())
//         }else{
//             sorted.push(right.shift())
//         }
//     }
//     return [...sorted,...left,...right]
// }

// console.log(mergeSort([7,4,5,9,67,8]))
