class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    prepend(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node
        }else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    insert(value,index){
        const node = new Node(value)
        if(index===0){
            if(!this.head){
                this.head = node
            }else{
                node.next = this.head
                this.head = node
            }
            this.size++
            return
        }
        let prev = this.head
        for(let i=0;i<index-1;i++){
            prev = prev.next
        }
        node.next = prev.next
        prev.next = node
        this.size++
    }

    deleteByIndex(index){
        if(!this.head){
            return null
        }
        if(index===0){
            if(this.head){
                this.head = this.head.next
            }
            this.size--
            return
        }
        let prev = this.head
        for(let i=0;i<index-1;i++){
            if(!prev.next){
                return
            }
            prev = prev.next
        }
        if(prev.next){
            prev.next = prev.next.next
        }
        this.size--
    }

    deleteByValue(value){
        if(!this.head){
            return null
        }
        if(this.head.value===value){
            this.head = this.head.next
            this.size--
            return 
        }
        let prev = this.head
        while(prev.next&&prev.next!==value){
            prev = prev.next
        }
        if(prev.next){
            prev.next = prev.next.next
        }
        this.size--
    }

    reverse(){
        let curr = this.head
        let prev = null
        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    search(value){
        if(!this.head){
            return -1
        }
        let curr = this.head
        let i = 0
        while(curr){
            if(curr.value===value){
                return i
            }
            curr = curr.next
            i++
        }
        return -1
    }

    findMiddle(){
        let slow = this.head
        let fast = this.head
        while(fast&&fast.next){
            slow = slow.next
            fast = fast.next.next
        }
        return slow
    }

    // for unsorted L.L
    removeDuplicates(){
        if(!this.head){
            return null
        }
        let curr = this.head
        let seen = new Set()
        seen.add(curr.value)
        while(curr.next){
            if(seen.has(curr.next.value)){
                curr.next = curr.next.next
                this.size--
            }else{
                seen.add(curr.value)
                curr = curr.next
            }
        }
    }

    getSize(){
        return this.size
    }

    print(){
        let curr = this.head
        while(curr){
            console.log(curr.value)
            curr = curr.next
        }
    }
}

const list = new LinkedList()

list.prepend(10)
list.prepend(20)
list.append(5)
list.append(30)
list.insert(25,1)
list.insert(35,2)
list.append(10)
list.append(20)
console.log("list : ")
list.print()
console.log(`size of list is ${list.getSize()}`)

const middle = list.findMiddle()
if(middle){
    console.log(`midddle element is ${middle.value}`)
}else{
    console.log("middle element not found")
}

const index = list.search(30)
if(index!==-1){
    console.log(`element is found at index ${index}`)
}else{
    console.log("element not found")
}

list.removeDuplicates()
console.log("after removing duplicates from unsorted L.L : ");
list.print()

list.deleteByIndex(3)
console.log("after deleting by index : ")
list.print()

list.deleteByValue(5)
console.log("after deleting by value : ")
list.print()

list.reverse()
console.log("reversed : ");
list.print()