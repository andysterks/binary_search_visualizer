export default class Node {
  constructor(value, left = null, right = null, parent = null) {
    this.value = value;
    this.left = left;
    this.right = right;
    this.parent = parent;
  }

  isRoot() {
    return this.parent === null;
  }

  isLeaf() {
    return this.left === null && this.right === null;
  }

  isUnary() {
    return this.left === null || this.right === null;
  }

  addLeft(node) {
    this.left = node;
    node.parent = this;
    return this;
  }

  addRight(node) {
    this.right = node;
    node.assignParent(this);
    return this;
  }

  assignParent(node) {
    this.parent = node;
    return this;
  }
}