

// class DoublyNode{
//     constructor(value){
//         this.value = value
//         this.next = null
//         this.prev = null
//     }
// }

// class DoublyLinkedList{
//     constructor(){
//         this.head = null
//         this.tail = null
//     }

//     append(value){
//         const node = new DoublyNode(value)
//         if(!this.head){
//             this.head = node
//             this.tail = node
//         }else{
//             this.tail.next = node
//             node.prev = this.tail
//             this.tail = node
//         }
//     }

//     prepend(value){
//         const node = new Node(value)
//         if(!this.head){
//             this.head = node
//             this.tail = node
//         }else{
//             node.next = this.head
//             this.head.prev = node
//             this.head = node
//         }
//     }

//     insert(value,index){
//         const node = new Node(value)
//         if(index===0){
//             if(!this.head){
//                 this.head = node
//                 this.tail = node
//             }else{
//                 node.next = this.head
//                 this.head.prev = node
//                 this.head = node
//             }
//             return
//         }
//         let curr = this.head
//         let currentIndex = 0
//         while(curr&&currentIndex<index){
//             curr = curr.next
//             currentIndex++
//         }
//         if(currentIndex===index){
//             if(curr){
//                 node.next = curr
//                 node.prev = curr.prev
//                 if(curr.prev){
//                     curr.prev.next = node
//                 }
//                 curr.prev = node
//             }else{
//                 this.tail.next = node
//                 node.prev = this.tail
//                 this.tail = node
//             }
//         }else{
//             console.log("index out of bounds");
//         }
//     }

//     remove(index){
//         if(!this.head){
//             return null
//         }
//         let curr = this.head
//         let currentIndex = 0
//         if(index===0){
//             if(this.head===this.tail){
//                 this.head = null
//                 this.tail = null
//             }else{
//                 this.head = this.head.next
//                 this.head.prev = null
//             }
//             return curr.value
//         }
//         while(curr && currentIndex < index){
//             curr = curr.next
//             currentIndex++
//         }
//         if(!curr){
//             console.log("Index out of bounds");
//             return null
//         }
//         if(curr === this.tail){
//             this.tail = curr.prev
//             this.tail.next = null
//         }else{
//             curr.prev.next = curr.next
//             if(curr.next){
//                 curr.next.prev = curr.prev
//             }
//         }
//         return curr.value
//     }

//     removeValue(value){
//         if(!this.head){
//             return null
//         }
//         let curr = this.head
//         if(this.head.value === value){
//             if(this.head === this.tail){
//                 this.head = null
//                 this.tail = null
//             }else{
//                 this.head = this.head.next
//                 this.head.prev = null
//             }
//             return value
//         }
//         while(curr && curr.value !== value){
//             curr = curr.next 
//         }
//         if(!curr){
//             console.log("Value not found");
//         }
//         if(curr === this.tail){
//             this.tail = curr.prev
//             this.tail.next = null
//         }else{
//             curr.prev.next = curr.next
//             if(curr.next){
//                 curr.next.prev = curr.prev
//             }
//         }
//         return value
//     }

//     reverse(){
//         let curr = this.head
//         let temp = null
//         while(curr){
//             temp = curr.prev
//             curr.prev = curr.next
//             curr.next = temp
//             curr = curr.prev
//         }
//         if(temp){
//             this.head = temp.prev
//         }
//     }

//     print(){
//         let curr = this.head
//         while(curr){
//             console.log(curr.value)
//             curr = curr.next
//         }
//     }
// }


// const list = new DoublyLinkedList()
// list.prepend(48)
// list.prepend(300)
// list.append(500)
// list.append(600)
// list.insert(50,0)
// list.insert(60,2)
// console.log("list : ")
// list.print()

// list.reverse()
// console.log("reversed : ")
// list.print()

// list.deleteByValue(50)
// console.log("after deleting by value : ")
// list.print()

// list.deleteByIndex(3)
// console.log("after deleting by index : ")
// list.print()



// ---------------------------------------
// ---------------------------------------


class DoublyNode{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
    }

    prepend(value){
        const node = new DoublyNode(value)
        if(!this.head){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            node.next.prev = node
            this.head = node
        }
    }

    append(value){
        const node = new DoublyNode(value)
        if(!this.head){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
    }

    insert(value,index){
        const node = new DoublyNode(value)
        if(index===0){
            if(!this.head){
                this.head = node
                this.tail = node
            }else{
                node.next = this.head
                this.head.prev = node
                this.head = node
            }
            return 
        }
        let curr = this.head
        let  currentIndex = 0
        while(curr&&currentIndex<index){
            curr = curr.next
            currentIndex++
        }
        if(currentIndex===index){
            if(curr){
                node.next = curr
                node.prev = curr.prev
                if(curr.prev){
                    curr.prev.next = node
                }
                curr.prev = node
            }else{
                this.tail.next = node
                node.prev = this.tail
                this.tail = node
            }
        }else{
            console.log("Index out of bounds")
        }
    }


    reverse(){
        let curr = this.head
        let temp = null
        while(curr){
            temp = curr.prev
            curr.prev = curr.next
            curr.next = temp 
            curr = curr.prev
        }
        if(temp){
            this.head = temp.prev
        }
    }

    

    deleteByValue(value){
        if(!this.head){
            return null
        }
        let curr = this.head
        if(this.head.value===value){
            if(this.head===this.tail){
                this.head = null
                this.tail = null
            }else{
                this.head = this.head.next
                this.head.prev = null
            }
            return value    
        }
        while(curr&&curr.value!==value){
            curr = curr.next
        }
        if(!curr){
            console.log("value is not found")
            return null
        }
        if(curr===this.tail){
            this.tail = curr.prev
            this.tail.next = null
        }else{
            curr.prev.next = curr.next
            if(curr.next){
                curr.next.prev = curr.prev
            }
        }
        return value
    }

    deleteByIndex(index){
        if(!this.head){
            return null
        }
        let curr = this.head
        let currentIndex = 0
        if(index===0){
            if(this.head===this.tail){
                this.head = null
                this.tail = null
            }else{
                this.head = this.head.next
                this.head.prev = null
            }
            return curr.value
        }
        while(curr&&currentIndex<index){
            curr = curr.next
            currentIndex++
        }
        if(!curr){
            console.log("index out of bounds")
            return null
        }
        if(curr===this.tail){
            this.tail = curr.prev
            this.tail.next = null
        }else{
            curr.prev.next = curr.next
            if(curr.next){
                curr.next.prev = curr.prev
            }
        }
        return curr.value
    }

    print(){
        let curr = this.head
        while(curr){
            console.log(curr.value)
            curr = curr.next
        }
    }

    
}

const list = new DoublyLinkedList()
list.prepend(48)
list.prepend(300)
list.append(500)
list.append(600)
list.insert(50,0)
list.insert(60,2)
console.log("list : ")
list.print()

list.reverse()
console.log("reversed : ")
list.print()

list.deleteByValue(50)
console.log("after deleting by value : ")
list.print()

list.deleteByIndex(3)
console.log("after deleting by index : ")
list.print()