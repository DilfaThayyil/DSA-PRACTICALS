

// stack using queue

class stackUsingQueues{
    constructor(){
        this.queue1 = []
        this.queue2 = []
    }

    push(element){
        this.queue2.push(element)
        while(this.queue1.length>0){
            this.queue2.push(this.queue1.shift())
        }
        [this.queue1,this.queue2] = [this.queue2,this.queue1]
    }

    pop(){
        if(this.queue1.length===0){
            console.log("stack is empty")
            return null
        }
        return this.queue1.shift()
    }

    peek(){
        if(this.queue1.length===0){
            console.log("stack is empty")
            return null
        }
        return this.queue1[0]
    }


}

const stack = new stackUsingQueues()

stack.push(10)
stack.push(20)
stack.push(30)
console.log(stack.peek())
console.log(stack.pop())
console.log(stack.peek())