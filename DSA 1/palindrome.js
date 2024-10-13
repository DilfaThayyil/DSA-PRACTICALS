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

    isPalindrome(){
        if(!this.head){
            return true
        }
        //find the middle of L.L
        let slow = this.head
        let fast = this.head
        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }
        //reverse the second half of L.L
        let prev = null
        let curr = slow
        let next = null
        while(curr){
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        //compare the first half with reversed second half
        let firstHalf = this.head
        let secondHalf = prev
        while(secondHalf){
            if(firstHalf.value != secondHalf.value){
                return false
            }
            firstHalf = firstHalf.next
            secondHalf = secondHalf.next
        }
        return true
    }

    print(){
        let curr = this.head
        while(curr){
            console.log(curr.value)
            curr = curr.next
        }
    }
}

const list = new Linkedlist()
list.append(1)
list.append(2)
list.append(3)
list.append(2)
list.append(1)

console.log(list.isPalindrome())