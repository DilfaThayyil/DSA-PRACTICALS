// // Linkedlist Queue

// const linkedList = require('./linkedList')

// class LinkedlistQueue{
//     constructor(){
//         this.list = new linkedList()
//     }

//     enqueue(value){
//         this.list.append(value)
//     }
//     dequeue(){
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

// const queue  = new LinkedlistQueue()

// console.log(queue.isEmpty())
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.print()
// console.log(queue.getSize())

// queue.dequeue()
// queue.print()
// console.log(queue.peek())




// class Queue{
//     constructor(){
//         this.items = []
//     }

//     enqueue(element){
//         this.items.push(element)
//     }

//     dequeue(){
//         return this.items.shift()
//     }

//     isEmpty(){
//         return this.items.length===0
//     }

//     peek(){
//         if(this.isEmpty){
//             return this.items[0]
//         }
//         return null
//     }

//     size(){
//         return this.items.length
//     }

//     print(){
//         console.log(this.items.toString())
//     }
// }

// const queue = new Queue()

// console.log(queue.isEmpty())

// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// console.log(queue.size())
// queue.print()
// console.log(queue.dequeue())
// queue.print()
// console.log(queue.peek())

    // Big-O = O(n^2)



// optimised implementation of 
    // queue datastructure

// class Queue{
//     constructor(){
//         this.items = {}
//         this.rear = 0
//         this.front = 0
//     }

//     enqueue(element){
//         this.items[this.rear] = element
//         this.rear++
//     }

//     dequeue(){
//         const item = this.items[this.front]
//         delete this.items[this.front]
//         this.front++
//         return item
//     }

//     isEmpty(){
//         return this.rear - this.front === 0
//     }

//     peek(){
//         return this.items[this.front]
//     }

//     size(){
//         return this.rear - this.front
//     }

//     print(){
//         console.log(this.items)
//     }
// }

// const queue = new Queue()

// console.log(queue.isEmpty())
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// console.log(queue.size())
// queue.print()

// console.log(queue.dequeue())
// console.log(queue.peek())

//     // Big-O = O(1)


// --------------------------------------------------


// reverse queue using recursion
// *****************************

class Queue{
    constructor(){
        this.items = []
    }

    enqueue(element){
        this.items.push(element)
    }

    isEmpty(){
        return this.items.length===0
    }

    dequeue(){
        if(this.isEmpty()){
            return null
        }
        return this.items.shift()
    }



    reverse(){
        if(this.isEmpty()){
            return null
        }
        let front = this.items.shift()
        this.reverse()
        this.items.push(front)
    }

    print(){
        console.log(this.items.toString())
    }
}

const queue = new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.print()

queue.reverse()
queue.print()

