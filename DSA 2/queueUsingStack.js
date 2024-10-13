class Queue{
    constructor(){
        this.stack1 = []
        this.stack2 = []
    }

    enqueue(element){
        this.stack1.push(element)
    }

    dequeue(){
        if(this.stack1.length===0){
            console.log("stack is empty")
            return 
        }
        while (this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop());
        }
        return this.stack2.pop()
    }

    peek(){
        if(this.stack1.length===0){
            console.log("stack is empty")
            return 
        }
        return this.stack2[this.stack2.length-1]
    }

    display(){
        console.log(this.stack2.toString())
    }

}

const queue = new Queue()
queue.enqueue(49)
queue.enqueue(24)
queue.enqueue(85)
queue.display()