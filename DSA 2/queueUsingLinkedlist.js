
    // queue using L.L

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class Queue{
    constructor(){
        this.front = null
        this.rear = null
        this.size = 0
    }

    enqueue(value){
        const node = new Node(value)
        if(!this.front){
            this.front = this.rear = node
        }else{
            this.rear.next = node
            this.rear = node
        }
        this.size++
    }

    dequeue(){
        if(!this.front){
            return null
        }
        let value = this.front.value
        this.front = this.front.next
        if(!this.front){
            this.rear = null
        }
        this.size++
        return value
    }

    peek(){
        if(!this.front){
            return null
        }
        return this.front.value
    }

    display(){
        let curr = this.front
        while(curr){
            console.log(curr.value)
            curr = curr.next
        }
    }
}

const queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.display()
console.log(queue.peek())
console.log(queue.dequeue())
