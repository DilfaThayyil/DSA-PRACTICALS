// // Linkedlist Stack

// const Linkedlist = require('./linkedList')

// class LinkedlistStack{
//     constructor(){
//         this.list = new Linkedlist()
//     }

//     push(value){
//         this.list.prepend(value)
//     }

//     pop(){
//         return this.list.removeFromFront()
//     }

//     peek(){
//         return this.list.head.value
//     }

//     isEmpty(){
//         return this.list.isEmpty()
//     }

//     getSize(){
//         return this.list.getSize()
//     }

//     print(){
//         return this.list.print()
//     }
// }

// const stack = new LinkedlistStack()

// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.print()
// console.log(stack.getSize())
// stack.pop()
// console.log(stack.peek())




// stack using array
// *****************

// class Stack{
//     constructor(){
//         this.items = []
//     }

//     push(element){
//         this.items.push(element)
//     }

//     pop(){
//         if(this.items.length===0){
//             return "underflow"
//         }
//         return this.items.pop()
//     }

//     display(){
//         console.log(this.items)
//     }
// }

// let stack = new Stack()
// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.display()
// console.log(stack.pop())
// stack.display()



// reverse stack using recursion
// *****************************


class Stack{
    constructor(){
        this.items = []
    }

    push(element){
        this.items.push(element)
    }

    isEmpty(){
        return this.items.length===0
    }

    pop(){
        if(this.isEmpty()){
            return null
        }
        return this.items.pop()
    }

    reverse(){
        if(!this.isEmpty()){
            let top = this.pop()
            this.reverse()
            this.insertAtBottom(top)
        }
    }

    insertAtBottom(element){
        if(this.isEmpty()){
            this.push(element)
        }else{
            let top = this.pop()
            this.insertAtBottom(element)
            this.push(top)
        }
    }

    print(){
        console.log(this.items.toString())
    }
}

const stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.print()

stack.reverse()
stack.print()









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