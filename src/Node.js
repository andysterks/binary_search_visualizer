export default class Node {
  constructor(value, left = null, right = null, parent = null) {
    this.value = value;
    this.left = left;
    if (this.left) {
      this.left.parent = this;
    }
    this.right = right;
    if (this.right) {
      this.right.parent = this;
    }
    this.parent = parent;
  }

  setLeft(node) {
    this.left = node;
    if (node) {
      node.parent = this;
    }
    return this;
  }

  setRight(node) {
    this.right = node;
    if (node) {
      node.parent = this;
    }
    return this;
  } 
  
  get depth() {
    for (let depth = 0; this.parent != null; depth++) {
      this = this.parent;
    }
    return depth;
  }
}