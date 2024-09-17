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
    node.parent = this;
    this.left = node;
  }

  addRight(node) {
    node.parent = this;
    this.right = node;
  }
}