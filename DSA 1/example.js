// class DoublyNode{
//     constructor(value){
//         this.value = value
//         this.next = null
//         this.prev = null
//     }
// }

// class DoublyLinkedList{
//     constructor(value){
//         this.head = null
//         this.tail = null
//     }

//     prepend(value){
//         const node = new DoublyNode(value)
//         if(!this.head){
//             this.head = node
//             this.tail = node
//         }else{
//             node.next = this.head
//             this.head.prev = node
//             this.head = node
//         }
//     }

//     append(value){
//         const node = new DoublyNode(value)
//         if(!this.head){
//             this.head = node
//             this.tail = node
//         }else{
//             this.tail.next = node
//             node.prev = this.tail
//             this.tail = node
//         }
//     }

//     insert(value,index){
//         const node = new DoublyNode(value)
//         if(index===0){
//             if(!this.head){
//                 this.head = node
//                 this.tail = node
//             }else{
//                 node.next = this.head
//                 this.head.prev = node
//                 this.head = node
//             }
//             return
//         }
//         let curr = this.head
//         let currentIndex = 0
//         while(curr&&currentIndex<index){
//             curr = curr.next
//             currentIndex++
//         }
//         if(currentIndex===index){
//             if(curr){
//                 node.next = curr
//                 node.prev = curr.prev
//                 if(curr.prev){
//                     curr.prev.next = node
//                 }
//                 curr.prev = node
//             }else{
//                 this.tail.next = node
//                 node.prev = this.tail
//                 this.tail = node
//             }
//         }else{
//             console.log("index out of bounds");
//         }
//     }

//     reverse(){
//         let curr = this.head
//         let temp = null
//         while(curr){
//             temp = curr.prev
//             curr.prev = curr.next 
//             curr.next = temp
//             curr = curr.prev
//         }
//         if(temp){
//             this.head = temp.prev
//         }
//     }

//     deleteByIndex(index){
//         if(!this.head){
//             return
//         }
//         let curr = this.head
//         let currentIndex = 0
//         if(index===0){
//             if(this.head===this.tail){
//                 this.head = null
//                 this.tail = null
//             }else{
//                 this.head = this.head.next
//                 this.head.prev = null
//             }
//             return
//         }
//         while(curr&&currentIndex<index){
//             curr = curr.next
//             currentIndex++
//         }
//         if(!curr){
//             console.log("index out of bounds");
//         }
//         if(curr===this.tail){
//             this.tail = curr.prev
//             this.tail.next = null
//         }else{
//             curr.prev.next = curr.next
//             if(curr.next){
//                 curr.next.prev = curr.prev
//             }
//         }
//         return
//     }


//     deleteByValue(value){
//         if(!this.head){
//             return
//         }
//         let curr = this.head
//         if(this.head.value===value){
//             if(this.head===this.tail){
//                 this.head = null
//                 this.tail = null
//             }else{
//                 this.head = this.head.next
//                 this.head.prev = null
//             }
//             return
//         }
//         while(curr&&curr.value!==value){
//             curr = curr.next
//         }
//         if(!curr){
//             console.log("value not found");
//         }
//         if(curr===this.tail){
//             this.tail = curr.prev
//             this.tail.next = null
//         }else{
//             curr.prev.next = curr.next
//             if(curr.next){
//                 curr.next.prev = curr.prev
//             }
//         }
//         return
//     }

//     print(){
//         let curr = this.head
//         while(curr){
//             console.log(curr.value)
//             curr = curr.next
//         }
//     }
// }

// const list = new DoublyLinkedList()

// list.prepend(32)
// list.prepend(43)
// list.append(54)
// list.append(711)
// list.insert(9777,3)
// list.insert(634,4)
// console.log("List : ");
// list.print()

// list.reverse()
// console.log("reversed : ");
// list.print()

// list.deleteByIndex(2)
// console.log("after deletion : ");
// list.print()

// list.deleteByValue(54)
// console.log("after deletion : ");
// list.print()




// function binarySearch(arr,target,left=0,right=arr.length-1){
//     if(left>right){
//         return -1
//     }
//     let mid = Math.floor((left+right)/2)
//     if(arr[mid]===target){
//         return mid
//     }else if(arr[mid]>target){
//         return binarySearch(arr,target,left,mid-1)
//     }else{
//         return binarySearch(arr,target,mid+1,right)
//     }
// }

// const sortedArray = [1,2,3,4,5]
// const target = 3
// const index = binarySearch(sortedArray,target)
// if(index !== -1){
//     console.log(`element found at index ${index}`);
// }else{
//     console.log('element not found');
// }




// class DoublyNode{
//     constructor(value){
//         this.value = value
//         this.next = null
//         this.prev = null
//     }
// }

// class DoublyLinkedList{
//     constructor(value){
//         this.head = null
//         this.tail = null
//     }

//     insert(value,index){
//         const node = new Node(value)
//         if(index===0){
//             if(!this.head){
//                 this.head = node
//                 this.tail = node
//             }else{
//                 node.next = this.head
//                 this.head.prev = node
//                 this.head = node
//             }
//             return
//         }
//         let curr = this.head
//         let currentIndex = 0
//         while(curr&&currentIndex<index){
//             curr = curr.next
//             currentIndex++
//         }
//         if(currentIndex===index){
//             if(curr){
//                 node.next = curr
//                 node.prev = curr.prev
//                 if(curr.prev){
//                     curr.prev.next = node
//                 }
//                 curr.prev = node
//             }else{
//                 this.tail.next = node
//                 node.prev = this.tail
//                 this.tail = node
//             }
//         }else{
//             console.log("index out of bounds");
//         }
//     }

// }