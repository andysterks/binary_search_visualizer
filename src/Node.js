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
}