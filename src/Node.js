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
    return 1 + Math.max(this.left?.depth ?? 0, this.right?.depth ?? 0);
  }
}