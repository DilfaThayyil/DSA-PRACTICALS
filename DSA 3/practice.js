

// ------------------------------------------------------BST------------------------------------------------------


// class Node{
//     constructor(value){
//         this.value = value 
//         this.left = null
//         this.right = null
//     }
// }

// class binarySearchTree{
//     constructor(){
//         this.root = null
//     }

//     insert(value){
//         const node = new Node(value)
//         if(!this.root){
//             this.root = node
//         }else{
//             this.insertNode(this.root,node)
//         }
//     }

//     insertNode(root,node){
//         if(node.value < root.value){
//             if(!root.left){
//                 root.left = node
//             }else{
//                 this.insertNode(root.left,node)
//             }
//         }else{
//             if(!root.right){
//                 root.right = node
//             }else{
//                 this.insertNode(root.right,node)
//             }
//         }
//     }

//     search(root,value){
//         if(!root){
//             return false
//         }
//         if(root.value===value){
//             return true
//         }else if(value < root.value){
//             this.search(root.left,value)
//         }else{
//             this.search(root.right,value)
//         }
//     }

    

//     isBst(root,min=null,max=null){
//         if(!root){
//             return true
//         }
//         if(min && root.value >= min || max && root.value <= max){
//             return false
//         }
//         return this.isBst(root.left,min,root.value) && this.isBst(root.right,root.value,max)
//     }

//     sum(root){
//         if(!root){
//             return 0
//         }
//         return root.value + this.sum(root.left) + this.sum(root.right)
//     }

//     delete(value){
//         this.root = this.deleteNode(this.root,value)
//     }

//     deleteNode(root,value){
//         if(!root){
//             return root
//         }
//         if(value < root.value){
//             root.left = this.deleteNode(root.left,value)
//         }else if (value > root.value){
//             root.right = this.deleteNode(root.right,value)
//         }else{
//             if(!root.left && !root.right){
//                 return null
//             }
//             if(!root.left){
//                 return root.right
//             }else if(!root.right){
//                 return root.left
//             }
//             root.value = this.min(root.right)
//             root.right = this.deleteNode(root.right,root.value)
//         }
//         return root
//     }                                                              

 

//     preOrder(root){
//         if(root){
//             console.log(root.value)
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }

//     inOrder(root){
//         if(root){
//             this.inOrder(root.left)
//             console.log(root.value)
//             this.inOrder(root.right)
//         }
//     }

//     postOrder(root){
//         if(root){
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.value)
//         }
//     }

//     levelOrder(){
//         const queue = []
//         queue.push(this.root)
//         while(queue.length){
//             let curr = queue.shift()
//             console.log(curr.value)
//             if(curr.left){
//                 queue.push(curr.left)
//             }else{
//                 queue.push(curr.right)
//             }
//         }
//     }

//     min(root){
//         if(!root.left){
//             return root.value
//         }
//         return this.min(root.left)
//     }

//     max(root){
//         if(!root.right){
//             return root.value
//         }
//         return this.max(root.right)
//     }

//     findKthSmallest(k) {
//         let count = 0;
//         let result = null;
    
//         const inorder = (node) => {
//             if (!node || result !== null) return;
//             inorder(node.left);
//             count++;
//             if (count === k) {
//                 result = node.value;
//                 return;
//             }
//             inorder(node.right);
//         };
    
//         inorder(this.root);
//         return result;
//     }
    

//     findKthLargest(k) {
//         let count = 0;
//         let result = null;
    
//         const reverseInorder = (node) => {
//             if (!node || result !== null) return;
//             reverseInorder(node.right);
//             count++;
//             if (count === k) {
//                 result = node.value;
//                 return;
//             }
//             reverseInorder(node.left);
//         };
    
//         reverseInorder(this.root);
//         return result;
//     }
    
//     findClosest(root,target){
//         let closest = root.value
//         while(root){
//             if(Math.abs(target-closest) > Math.abs(target-root.value)){
//                 closest = root.value
//             }
//             if(target < root.value){
//                 root = root.left
//             }else if(target > root.value){
//                 root = root.right
//             }else{
//                 break
//             }
//         }
//         return closest
//     }

// }

// const bst = new binarySearchTree()
// bst.insert(10)
// bst.insert(5)
// bst.insert(15)
// bst.insert(4)
// bst.insert(6)
// bst.insert(14)
// bst.insert(16)
// bst.levelOrder()
// console.log(bst.min(bst.root))
// console.log(bst.max(bst.root))
// console.log(bst.findKthLargest(4))
// console.log(bst.findKthSmallest(4))
// console.log(bst.findClosest(bst.root,8))


// ----------------------------------------------GRAPH--------------------------------------------------------------


// class Graph{
//     constructor(){
//         this.adjacencyList = {}
//     }

//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             this.adjacencyList[vertex] = new Set()
//         }
//     }

//     addEdge(vertex1,vertex2){
//         if(!this.adjacencyList[vertex1]){
//             this.addVertex(vertex1)
//         }
//         if(!this.adjacencyList[vertex2]){
//             this.addVertex(vertex2)
//         }
//         this.adjacencyList[vertex1].add(vertex2)
//         this.adjacencyList[vertex2].add(vertex1)
//     }

//     hasEdge(vertex1,vertex2){
//         return (
//             this.adjacencyList[vertex1].has(vertex2) &&
//             this.adjacencyList[vertex2].has(vertex1)
//         )
//     }

//     removeEdge(vertex1,vertex2){
//         this.adjacencyList[vertex1].delete(vertex2)
//         this.adjacencyList[vertex2].delete(vertex1)
//     }

//     removeVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             return
//         }
//         for(let adjacentVertex of this.adjacencyList[vertex]){
//             this.removeEdge(vertex,adjacentVertex)
//         }
//         delete this.adjacencyList[vertex]
//     }

//     display(){
//         for(let vertex in this.adjacencyList){
//             console.log(vertex+" => "+[...this.adjacencyList[vertex]])
//         }
//     }
// }

// const graph = new Graph()

// graph.addVertex('A')
// graph.addVertex('B')
// graph.addVertex('C')
// graph.addEdge('A','B')
// graph.addEdge('B','C')
// graph.display()
// console.log(graph.hasEdge('A','B'))
// console.log(graph.hasEdge('A','C'))
// graph.removeVertex('A')
// graph.removeEdge('C','B')
// graph.display()


// --------------------------------------------------------Heap--------------------------------------------------

// -----------maxHeap--------

// class MaxHeap {
//     constructor() {
//         this.heap = [];
//     }

//     build(array) {
//         this.heap = array.slice(); 
//         for (let i = Math.floor(this.heap.length / 2); i >= 0; i--){
//             this.heapifyDown(i);
//         }
//     }

//     insert(value) {
//         this.heap.push(value);
//         this.heapifyUp(this.heap.length - 1);
//     }

//     heapifyUp(index) {
//         let parentIndex = Math.floor((index - 1) / 2);
//         while (index > 0 && this.heap[parentIndex] < this.heap[index]) {
//             [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
//             index = parentIndex;
//             parentIndex = Math.floor((index - 1) / 2);
//         }
//     }

//     heapifyDown(index) {
//         let leftChildIndex = Math.floor((2 * index) + 1);
//         let rightChildIndex = Math.floor((2 * index) + 2);
//         let largest = index;

//         if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[largest]) {
//             largest = leftChildIndex;
//         }
//         if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largest]) {
//             largest = rightChildIndex;
//         }
//         if (largest !== index) {
//             [this.heap[largest], this.heap[index]] = [this.heap[index], this.heap[largest]];
//             this.heapifyDown(largest);
//         }
//     }

//     remove() {
//         if (this.heap.length === 0) {
//             return null;
//         }
//         const root = this.heap[0];
//         if (this.heap.length === 1) {
//             return this.heap.pop();
//         }
//         this.heap[0] = this.heap.pop();
//         this.heapifyDown(0);
//         return root;
//     }

//     heapSort(array) {
//         this.build(array);
//         let sorted = [];
//         while (this.heap.length > 0) {
//             sorted.push(this.remove());
//         }
//         return sorted;
//     }
// }

// const heap = new MaxHeap();
// const arr = [8, 2, 5, 0, 3, 1];
// heap.build(arr);
// console.log("Heap:", heap.heap);

// heap.insert(4);
// console.log("Heap after insert(4):", heap.heap);

// heap.remove();
// console.log("Heap after removal:", heap.heap);

// const sortedArray = heap.heapSort(arr);
// console.log('Heap sorted array:', sortedArray);


// ------minHeap-----

// class MinHeap {
//     constructor() {
//         this.heap = [];
//     }

//     buildHeap(array) {
//         this.heap = array.slice()
//         for (let i = Math.floor(this.heap.length / 2); i >= 0; i--){
//             this.heapifyDown(i);
//         }
//     }

//     insert(value) {
//         this.heap.push(value);
//         this.heapifyUp(this.heap.length - 1);
//     }

//     heapifyUp(index) {
//         let parentIndex = Math.floor((index - 1) / 2);
//         while (index > 0 && this.heap[index] < this.heap[parentIndex]) {
//             [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
//             index = parentIndex;
//             parentIndex = Math.floor((index - 1) / 2);
//         }
//     }

//     heapifyDown(index) {
//         let leftChild = 2 * index + 1;
//         let rightChild = 2 * index + 2;
//         let smallest = index;

//         if (leftChild < this.heap.length && this.heap[leftChild] < this.heap[smallest]) {
//             smallest = leftChild;
//         }

//         if (rightChild < this.heap.length && this.heap[rightChild] < this.heap[smallest]) {
//             smallest = rightChild;
//         }

//         if (smallest !== index) {
//             [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
//             this.heapifyDown(smallest);
//         }
//     }

//     remove() {
//         if (this.heap.length === 0) {
//             return null;
//         }
//         const root = this.heap[0];
//         if (this.heap.length === 1) {
//             return this.heap.pop();
//         }
//         this.heap[0] = this.heap.pop();
//         this.heapifyDown(0);
//         return root;
//     }

//     heapSort(array) {
//         this.buildHeap(array);
//         const sortedArray = [];
//         while (this.heap.length > 0) {
//             sortedArray.push(this.remove());
//         }
//         return sortedArray;
//     }
// }

// const heap = new MinHeap();
// const array = [3, 9, 2, 1, 4, 5];
// heap.buildHeap(array);
// console.log('Heap:', heap.heap);

// heap.insert(0);
// console.log('Heap after insert(0):', heap.heap);

// console.log('Removed element:', heap.remove());
// console.log('Heap after remove():', heap.heap);

// const sortedArray = heap.heapSort(array);
// console.log('Heap sorted array:', sortedArray);


// ---------------------------------------------------------Trie-----------------------------------------------

class Trie{
    constructor(){
        
    }
}