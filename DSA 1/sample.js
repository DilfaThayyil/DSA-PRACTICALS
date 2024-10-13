class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Linkedlist{
    constructor(){
        this.head = null
    }

    prepend(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
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
            return
        }
        let prev = this.head
        for(let i=0;i<index-1;i++){
            prev = prev.next
        }
        prev.next = node
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

    deleteByIndex(index){
        if(index===0){
            if(this.head){
                this.head = this.head.next
            }
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
    }

    deleteByValue(value){
        if(!this.head){
            return
        }
        if(this.head.value===value){
            this.head = this.head.next
        }
        let prev = this.head
        while(prev.next&&prev.next.value!==value){
            prev = prev.next
        }
        if(prev.next){
            prev.next = prev.next.next
        }
    }

    print(){
        let curr = this.head
        while(curr){
            console.log(curr.value);
            curr = curr.next
        }
    }
}


const list = new Linkedlist()

list.prepend(10)
list.append(300)
list.insert(20,1)
list.insert(30,2)
list.deleteByIndex(3)
list.deleteByValue(30)

list.print()


// ----------------------------------
// ----------------------------------

// class Node{
//     constructor(value){
//         this.value = value
//     }
// }

// class Linkedlist{
//     constructor(value){
//         this.head = null
//     }

//     prepend(value){
//         const node = new Node(value)
//         if(!this.head){
//             this.head = node
//         }else{
//             node.next = this.head
//             this.head = node
//         }
//     }

//     append(value){
//         const node = new Node(value)
//         if(!this.head){
//             this.head = node
//         }else{
//             let prev = this.head
//             while(prev.next){
//                 prev = prev.next
//             }
//             prev.next = node
//         }
//     }

//     insert(value,index){
//         const node = new Node(value)
//         if(index===0){
//             if(!this.head){
//                 this.head = node
//             }else{
//                 node.next = this.head
//                 this.head = node
//             }
//             return
//         }
//         let prev = this.head
//         for(let i=0 ; i<index-1 ; i++){
//             prev = prev.next
//         }
//         prev.next = node
//     }

//     delete(value){
//         if(!this.head){
//             return
//         }
//         if(this.head.value===value){
//             this.head = this.head.next
//         }
//         let prev = this.head
//         while(prev.next&&prev.next.value!==value){
//             prev = prev.next
//         }
//         if(prev.next){
//             prev.next = prev.next.next
//         }
//     }

//     deleteByIndex(index){
//         if(index===0){
//             if(this.head){
//                 this.head = this.head.next
//             }
//             return
//         }
//         let prev = this.head
//         for(let i = 0 ; i <index-1 ; i++){
//             if(!prev.next){
//                 return
//             }
//             prev = prev.next
//         }
//         if(prev.next){
//             prev.next = prev.next.next
//         }
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

//     print(){
//         let curr = this.head
//         while(curr){
//             console.log(curr.value)
//             curr = curr.next
//         }
//     }

// }

// const list = new Linkedlist()

// list.prepend(100)
// list.insert(125,1)
// list.insert(150,2)
// list.append(200)

// console.log("original list : ")
// list.print()

// list.reverse()
// console.log("reversed list : ")
// list.print()

// list.delete(125)
// console.log("after deleting by value : ")
// list.print()

// list.deleteByIndex(2)
// console.log("after deleting by index : ")
// list.print()
