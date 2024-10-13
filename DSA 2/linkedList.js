class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}

class Linkedlist{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }
// O(1)
    prepend(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }
// O(n)
    append(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

// O()
    insert(value,index){
        const node = new Node(value)
        if(index===0){
            if(!this.head){
                this.head = node
                this.tail = node
            }else{
                node.next = node
                this.head.prev = node
                this.head = node
            }
            this.size++
            return 
        }
        let curr = this.head
        let currentIndex = 0
        while(curr&&currentIndex<index){
            curr = curr.next
            currentIndex++
        }
        if(currentIndex===index){
            
        }
    }

    removeFromFront(){
        if(!this.head){
            return null
        }
        const value = this.head.value
        this.head = this.head.next
        this.size--
    }

    removeFromEnd(){
        if(!this.head){
            return null
        }
        const value = this.tail.value
        if(this.size===1){
            this.head = null
            this.tail = null
        }else{
            let prev = this.head
            while(prev.next!==this.tail){
                prev = prev.next
            }
            prev.next = null
            this.tail = prev
        }
        this.size--
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }

    print(){
        if(!this.head){
            console.log("List is empty")
        }else{
            let curr = this.head
            while(curr){
                console.log(curr.value)
                curr = curr.next
            }
        }
        
    }
}

module.exports = Linkedlist
// const list = new Linkedlist()

// list.prepend(10)
// list.append(20)
// list.prepend(5)
// list.append(25)
// list.print()
// console.log(list.getSize())
// list.removeFromEnd()
// list.removeFromFront()
// list.print()


