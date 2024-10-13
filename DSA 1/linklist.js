// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class Linkedlist{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }

    
//     append(value){
//         const node = new Node(value)
//         if(!this.head){
//             this.head = node
//         }else{
//             let prev = this.head
//             while(prev.next){
//                 prev = prev.next
//             }
//             prev.next = node
//         }
//         this.size++
//     }

    
//     findMiddle(value){
//         const node = new Node(value)
//         if(!this.head){
//             return
//         }else{
//             let slow = this.head
//             let fast = this.head
//             while(fast && fast.next){
//                 slow = slow.next
//                 fast = fast.next.next
//             }
//             return slow
//         }
//     }

// findMiddle(value){
//     if(!this.head){
//         return
//     }else{
//         let fast = this.head
//         let slow = this.head
//         while(fast&&fast.next){
//             slow = slow.next
//             fast = fast.next.next
//         }
//         return slow
//     }
// }
// const middleNode = findMiddle()
// if(middleNode){
//     console.log(`middle element is found at ${middleNode.value}`)
// }else{
//     console.log('element not found');
// }



//     print(){
//         let curr = this.head
//         while(curr){
//             console.log(curr.value)
//             curr = curr.next
//         }
//     }
// }

// const list = new Linkedlist()

// list.append(1)
// list.append(2)
// list.append(3)
// console.log("List : ")
// list.print()


// const middelNode = list.findMiddle()
// console.log(`middle element : ${middelNode.value}`)



// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class Linkedlist{
//     constructor(){
//         this.head = null
//     }

//     prepend(value){
//         const node = new Node(value)
//         if(!this.head){
//             this.head = node
//         }else{
//             node.next = this.head
//             this.head = node
//         }
//     }

//     append(value){
//         const node = new Node(value)
//         if(!this.head){
//             this.head = node
//         }else{
//             let prev = this.head
//             while(prev.next){
//                 prev = prev.next
//             }
//             prev.next = node
//         }
//     }

//     insertAt(index,value){
//         const node = new Node(value)
//         if(index < 0 || index > this.size){
//             return
//         }
//         if(index===0){
//             this.prepend(value)
//         }else{
//             let prev = this.head
//             for(let i = 0 ; i < index-1 ; i++){
//                 prev = prev.next
//             }
//             node.next = prev.next
//             prev.next = node
//         }
//     }

//     findMiddle(){
//         if(!this.head){
//             return 
//         }else{
//             let slow = this.head
//             let fast = this.head
//             while(fast && fast.next){
//                 slow = slow.next
//                 fast = fast.next.next
//             }
//             return slow
//         }
//     }

//     print(){
//         let curr = this.head
//         while(curr){
//             console.log(curr.value)
//             curr = curr.next
//         }
//     }

//     toArray(){
//         let arr = []
//         let curr = this.head
//         while(curr){
//             arr.push(curr.value)
//             curr = curr.next
//         }
//         return arr
//     }
// }

// const list = new Linkedlist()
// list.prepend(100)
// list.insertAt(1,150)
// list.append(200)
// list.append(300)
// list.print()
// console.log(list.toArray())
// const middleNode = list.findMiddle()
// console.log(`Middle element is ${middleNode.value}`)


