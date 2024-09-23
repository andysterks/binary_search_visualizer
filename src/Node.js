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
  
  get height() {
    var parent = this.parent || null;
    var height = 0;
    while(parent != null) {
      height++;
      parent = parent?.parent;
    }
    return height;
  }

  get depth() {
    var child = this.left || this.right || null;
    var depth = 0;
    while(child != null) {
      depth++;
      child = child?.left || child?.right || null;
    }
    return depth;
  }
}