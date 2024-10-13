    // Single linked list
    // *****************


class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(value){
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
        prev.next = node
        this.size++
    }

    deleteByIndex(index){
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

    deleteValue(value){
        if(!this.head){
            return null
        }
        if(this.head.value===value){
            this.head = this.head.next
            this.size--
            return
        }
        let prev = this.head
        while(prev.next&&prev.next.value!==value){
            prev = prev.next
        }
        if(prev.next){
            prev.next = prev.next.next
        }
        this.size--
        return
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
        let i=0
        while(curr){
            if(curr.value===value){
                return i
            }
            curr = curr.next
            i++
        }
        return -1
    }

    // // for sorted list
    // removeDuplicates(){
    //     if(!this.head){
    //         return null
    //     }
    //     let curr = this.head
    //     while(curr&&curr.next){
    //         if(curr.value===curr.next.value){
    //             curr.next = curr.next.next
    //             this.size--
    //         }else{
    //             curr = curr.next
    //         }
    //     }
    // }

    // for unsorted list
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
                seen.add(curr.next.value)
                curr = curr.next
            }
        }
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
list.append(30)
list.append(40)
list.insert(50,4)
list.insert(60,5)
console.log("list : ");
list.print()

list.removeDuplicates()
console.log("after removing duplicates : ")
list.print()

const middle = list.findMiddle()
if(middle){
    console.log(`middle element is ${middle.value}`)
}else{
    console.log("middle element not found")
}

const index = list.search(10)
if(index !== -1){
    console.log("value is found in the list")
}else{
    console.log("element not found")
}

list.deleteByIndex(3)
console.log("deletion by index : ");
list.print()

list.deleteValue(5)
console.log("deletion by value : ");
list.print()

list.reverse()
console.log("reversed : ");
list.print()



// //*****************************************************


// //if duplicates won't be allowed for inserting in singly linked list . but node with the same value will become new head

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

//     insert(value){
//         const node = new Node(value)
//         if(!this.head){
//             this.head = node
//             this.size++
//             return
//         }
//         let curr = this.head
//         let prev = null
//         while(curr){
//             if(curr.value===value){
//                 if(prev){
//                     prev.next = curr.next
//                 }else{
//                     this.head = curr.next
//                 }
//                 node.next = this.head
//                 this.head = node
//                 return
//             }
//             prev = curr
//             curr = curr.next
//         }
//         curr = this.head
//         while(curr.next){
//             curr = curr.next
//         }
//         curr.next = node
//         this.size++
//     }

//     print(){
//         let curr = this.head
//         while(curr){
//             console.log(curr.value);
//             curr = curr.next
//         }
//     }
// }

// const list = new Linkedlist()

// list.insert(10)
// list.insert(20)
// list.insert(30)
// list.insert(40)
// list.insert(20)
// list.print()
