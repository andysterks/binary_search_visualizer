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
    var depth = 0;
    var shouldContinue = true;
    while(shouldContinue) {
      if (this.left && this.right) {
        depth++;
      }

      if (this.left && !this.right) {
        depth++;
        this = this.left;
      }

      if (!this.left && this.right) {
        depth++;
        this = this.right;
      }

      if (!this.left && !this.right) {
        shouldContinue = false;
      }
    }
    
    return (leftDepth - rightDepth);
  }
}