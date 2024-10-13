// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null;
//     }
// }

// class Stack{
//     constructor(){
//         this.top = null;
//         this.count = 0;
//     }
    
//     // push
//     push(value){
//         let newNode = new Node(value)
//         newNode.next = this.top
//         this.top = newNode
//         this.count++;
//     }
    
//     // print
//     print(value){
//         let current = this.top
//         while(current){
//             console.log(current.value)
//             current = current.next
//         }
//     }
    
//     // pop
//     pop(){
//         let current = this.top
//         this.top = current.next
//         this.count--;
//     }
    
//     // peek
//     peek(){
//         console.log(this.top.value)
//     }
    
//     // reverse
//     reverse(){
//         let current = this.top
//         let next;
//         let prev;
        
//         while(current){
//             next = current.next
//             current.next = prev
//             prev = current
//             current = next
//         }
//         this.top = prev
//     }
// }

// let stack = new Stack()
// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.print()
// // console.log("")
// // console.log("after poping")
// // stack.pop()
// // stack.print()
// console.log("")
// stack.peek()

// console.log("")
// stack.reverse()
// stack.print()


// ---------------------------------------------------------------------------------------------------------------


// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class stack{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }

//     push(value){
//         const node = new Node(value)
//         if(!this.head){
//             this.head = node
//         }else{
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }

//     pop(){
//         if(!this.head){
//             return null
//         }
//         this.head = this.head.next
//         this.size--
//     }

//     reverse(){
//         let curr = this.head
//         let prev = null
//         while(curr){
//             let next = curr.next
//             curr.next = prev
//             prev = curr
//             curr = next
//         }
//         this.head = prev
//     }

//     display(){
//         let curr = this.head
//         while(curr){
//             console.log(curr.value)
//             curr = curr.next
//         }
//     }
// }

// const Stack = new stack()
// console.log("stack list : ")
// Stack.push(10)
// Stack.push(20)
// Stack.push(30)
// Stack.display()
// console.log("after reversing :")
// Stack.reverse()
// Stack.display()
// console.log("after deleting : ")
// Stack.pop()
// Stack.display()


