class MinHeap {
    constructor() {
        this.heap = [];
    }

    buildHeap(array) {
        this.heap = array.slice()
        for (let i = Math.floor(this.heap.length / 2); i >= 0; i--){
            this.heapifyDown(i);
        }
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }

    heapifyUp(index) {
        let parentIndex = Math.floor((index - 1) / 2);
        while (index > 0 && this.heap[index] < this.heap[parentIndex]) {
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
    }

    heapifyDown(index) {
        let leftChild = 2 * index + 1;
        let rightChild = 2 * index + 2;
        let smallest = index;

        if (leftChild < this.heap.length && this.heap[leftChild] < this.heap[smallest]) {
            smallest = leftChild;
        }

        if (rightChild < this.heap.length && this.heap[rightChild] < this.heap[smallest]) {
            smallest = rightChild;
        }

        if (smallest !== index) {
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            this.heapifyDown(smallest);
        }
    }

    remove() {
        if (this.heap.length === 0) {
            return null;
        }
        const root = this.heap[0];
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return root;
    }

    heapSort(array) {
        this.buildHeap(array);
        const sortedArray = [];
        while (this.heap.length > 0) {
            sortedArray.push(this.remove());
        }
        return sortedArray;
    }
}

const heap = new MinHeap();
const array = [3, 9, 2, 1, 4, 5];
heap.buildHeap(array);
console.log('Heap:', heap.heap);

heap.insert(0);
console.log('Heap after insert(0):', heap.heap);

console.log('Removed element:', heap.remove());
console.log('Heap after remove():', heap.heap);

const sortedArray = heap.heapSort(array);
console.log('Heap sorted array:', sortedArray);
