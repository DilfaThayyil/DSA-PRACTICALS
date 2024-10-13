class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{
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

    isBst(root,min=null,max=null){
        if(!root){
            return true
        }
        if((min!==null && root.value <= min) || (max!==null && root.value >= max)){
            return false
        }
        return this.isBst(root.left,min,root.value) && this.isBst(root.right,root.value,max)
    }

}

const bst = new BinarySearchTree()

bst.insert(10)
bst.insert(30)
bst.insert(20)
bst.insert(30)

console.log(bst.isBst(bst.root))