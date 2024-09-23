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
    var currentNode = this;
    while(shouldContinue) {
      if (currentNode.left && currentNode.right) {
        depth;
      }

      if (currentNode.left && !currentNode.right) {
        depth++;
        currentNode = currentNode.left;
      }

      if (!currentNode.left && currentNode.right) {
        depth++;
        currentNode = currentNode.right;
      }

      if (!currentNode.left && !currentNode.right) {
        shouldContinue = false;
      }
    }

    return depth;
  }
}