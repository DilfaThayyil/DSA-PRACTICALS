class PriorityQueue{
    constructor(){
        this.heap = []
    }
    insert(value){
        this.heap.push(value)
        this.heapifyUp(this.heap.length-1)
    }
    heapifyUp(index){
        let parentIndex = (index-1)/2
        while(index>0&&this.heap[parentIndex]>this.heap[index]){
            [this.heap[index],this.heap[parentIndex]]=[this.heap[parentIndex],this.heap[index]]
            index = parentIndex
            parentIndex = (index-1)/2
        }
    }
    heapifyDown(index){
        let leftChildIndex = (2*index)+1
        let rightChildIndex = (2*index)+2
        let largest = index
        if(largest<this.heap.length&&this.heap[leftChildIndex]>this.heap[index]){
            largest = leftChildIndex
        }
        if(largest<this.heap.length&&this.heap[rightChildIndex]>this.heap[index]){
            largest = rightChildIndex
        }
        if(largest!==index){
            [this.heap[index],this.heap[largest]]=[this.heap[largest],this.heap[index]]
            this.heapifyDown(largest)
        }
    }
    remove(){
        if(this.heap.length===0){
            return null
        }
        const root = this.heap[0]
        if(this.heap.length===1){
            return this.heap.pop()
        }
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)
        return root
    }
    peek(){
        return this.heap.length>0?this.heap[0]:null
    }
}

const pq = new PriorityQueue()

pq.insert(10)
pq.insert(5)
pq.insert(15)
pq.insert(4)
pq.insert(6)
console.log("peek : ",pq.peek())
console.log("remove : ",pq.remove())
console.log("peek after removal : ",pq.peek())

