//-----------write a code in javascript to find min/max node in BST-------------
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      this._insertNode(this.root, newNode);
    }
  }

  _insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode);
      }
    }
  }

  findMin() {
    if (!this.root) {
      return null;
    }

    let current = this.root;
    while (current.left) {
      current = current.left;
    }

    return current.value;
  }

  findMax() {
    if (!this.root) {
      return null;
    }

    let current = this.root;
    while (current.right) {
      current = current.right;
    }

    return current.value;
  }
}

// Example usage:
const bst = new BinarySearchTree();
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
bst.insert(60);
bst.insert(80);

console.log('Minimum Node:', bst.findMin()); // 20
console.log('Maximum Node:', bst.findMax()); // 80
