// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class Linkedlist{
//     constructor(value){
//         this.head = null
//          this.size = 0
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

//     getSize(){
//          return this.size
//      }

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
//         for(let i = 0 ; i < index-1 ; i++){
//             prev = prev.next
//         }
//         node.next = prev.next
//         prev.next = node
//     }

//     reverse(){
//         let prev = null
//         let curr = this.head
//         while(curr){
//             let next = curr.next
//             curr.next = prev 
//             prev = curr
//             curr = next
//         }
//         this.head = prev
//     }

//     delete(value){
//         if(!this.head){
//             return
//         }
//         if(this.head.value===value){
//             this.head = this.head.next
//         }
//         let prev = this.head
//         while(prev.next && prev.next.value!==value){
//             prev = prev.next
//         }
//         if(prev.next){
//             prev.next = prev.next.next
//         }
//     }

//     delete(index){
//         if(index===0){
//             if(this.head){
//                 this.head = this.head.next
//             }
//             return
//         }
//         let prev=this.head
//         for(let i=0;i<index-1;i++){
//             if(!prev.next){
//                 return
//             }
//             prev = prev.next
//         }
//         if(prev.next){
//             prev.next = prev.next.next
//         }
//     }

// }

// -------------------------------
// -------------------------------



class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Linkedlist{
    constructor(){
        this.head = null
        this.size = 0
    }

    getSize(){
        return this.size
    }

    // Big-O = O(1)
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

    // Big-O = O(n)
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
        let existingNode = this.head;
        let previousNode = null;

        while (existingNode && existingNode.value !== value) {
            previousNode = existingNode;
            existingNode = existingNode.next;
        }

        if (existingNode) {
            // If the value exists, move the existing node to the head
            if (previousNode) {
                previousNode.next = existingNode.next;
            }
            existingNode.next = this.head;
            this.head = existingNode;
        } else {
            // If the value doesn't exist, insert the new node at the specified position
            const node = new Node(value);
            if (index === 0 || !this.head) {
                node.next = this.head;
                this.head = node;
            } else {
                let prev = this.head;
                for (let i = 0; i < index - 1; i++) {
                    prev = prev.next;
                }
                node.next = prev.next;
                prev.next = node;
            }
            this.size++;
        }
    }

    reverse(){
        let prev = null
        let curr = this.head
        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    delete(value){
        if(!this.head){
            return null
        }
        if(this.head.value===value){
            this.head = this.head.next
            this.size--
            return value
        }
        let prev = this.head
        while(prev.next && prev.next.value!==value){
            prev = prev.next
        }
        if(prev.next){
            prev.next = prev.next.next
        }
        this.size--
    }

    // Big-O = O(n)
    deleteByIndex(index){
        if(index===0){
            if(this.head){
                this.head = this.head.next
            }
            this.size--
            return
        }
        let prev = this.head
        for(let i = 0 ; i < index-1; i++){
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

    search(value){
        if(!this.head){
            return -1
        }
        let i=0
        let curr = this.head
        while(curr){
            if(curr.value===value){
                return i
            }
            curr = curr.next
            i++
        }
        return -1
    }


    // for sorted L.L
    removeDuplicates(){
        if(!this.head){
            return null
        }
        let curr = this.head
        while(curr && curr.next){
            if(curr.value===curr.next.value){
                curr.next = curr.next.next
                this.size--
            }else{
                curr = curr.next
            }
        }
    }

    // for unsorted L.L
    // removeDuplicates(){
    //     if(!this.head){
    //         return null
    //     }
    //     let curr = this.head
    //     let seen = new Set()
    //     seen.add(curr.value)
    //     while(curr.next){
    //         if(seen.has(curr.next.value)){
    //             curr.next = curr.next.next
    //             this.size--
    //         }else{
    //             seen.add(curr.next.value)
    //             curr = curr.next
    //         }
    //     }
    // }

    print(){
        let curr = this.head
        while(curr){
            console.log(curr.value)
            curr = curr.next
        }

    }
}

const list = new Linkedlist()

list.append(10)
list.append(10)
list.append(20)
list.append(20)
list.append(30)
list.append(30)

console.log("original list : ")
list.print()


const index = list.search(20)
if(index !== -1){
    console.log(`element found at index ${index}`);
}else{
    console.log('element not found');
}

list.removeDuplicates();
console.log("List after removing duplicates:");
list.print()

list.reverse()
console.log("reverse list : ")
list.print()

list.delete(20)
console.log("after deleting by value : ")
list.print()

list.deleteByIndex(0)
console.log("after deleting by index : ")
list.print()
console.log(`size of the list : ${list.getSize()}`);
