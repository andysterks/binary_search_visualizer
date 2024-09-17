export default class Node {
  constructor(value, left = null, right = null, parent = null) {
    this.value = value;
    this.left = left;
    this.right = right;
    this.parent = parent;
  }

  isLeaf() {
    return this.left === null && this.right === null;
  }

  isUnary() {
    return this.left === null || this.right === null;
  }

  addLeft(node) {
    this.left = new Node(node.value, node.left, node.right, this);    
  }

  addRight(node) {
    this.right = new Node(node.value, node.left, node.right, this);
  }
}