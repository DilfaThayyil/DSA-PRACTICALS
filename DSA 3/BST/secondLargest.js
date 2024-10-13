class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class binarySearchTree{
    constructor(){
        this.root = null
    }

    insert(value){
        const node = new Node(value)
        if(!this.root){
            this.root = node
        }else{
            this.insertNode(this.root,node)
        }
    }

    insertNode(root,node){
        if(node.value < root.value){
            if(!root.left){
                root.left = node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(!root.right){
                root.right = node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }

    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }

    max(root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }

    findKthSmallest(k) {
        let count = 0;
        let result = null;

        const inorder = (node) => {
            if (!node || result !== null) return;
            inorder(node.left);
            count++;
            if (count === k) {
                result = node.value;
                return;
            }
            inorder(node.right);
        };

        inorder(this.root);
        return result;
    }

    findKthLargest(k) {
        let count = 0;
        let result = null;

        const reverseInorder = (node) => {
            if (!node || result !== null) return;
            reverseInorder(node.right);
            count++;
            if (count === k) {
                result = node.value;
                return;
            }
            reverseInorder(node.left);
        };

        reverseInorder(this.root);
        return result;
    }
}

const bst = new binarySearchTree()

bst.insert(10)
bst.insert(5)
bst.insert(7)

console.log(bst.sum(bst.root))