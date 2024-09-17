import Node from "../Node"

export default function Insert(newNode, existingNode) {
  if (newNode.value < existingNode.value) {
    if (existingNode.left === null) {
      var newLeftNode = new Node(newNode.value, null, null, existingNode);
      return new Node(existingNode.value, newLeftNode, existingNode.right, existingNode.parent);
    } else {
      //return new Node(existingNode.value, Insert(newNode, existingNode.left), existingNode.right, existingNode.parent);
      return InsertDuplicateLeft(existingNode, Insert(newNode, existingNode.left));
    }
  } else {
    if (existingNode.right === null) {
      var newRightNode = new Node(newNode.value, null, null, existingNode);
      return new Node(existingNode.value, existingNode.left, newRightNode, existingNode.parent);
    } else {
      //return new Node(existingNode.value, existingNode.left, Insert(newNode, existingNode.right));
      return InsertDuplicateRight(existingNode, Insert(newNode, existingNode.right));
    }
  }
}

function InsertDuplicateLeft(existingNode, newNode) {
  return new Node(existingNode.value, newNode, existingNode.right, existingNode.parent);
}

function InsertDuplicateRight(existingNode, newNode) {
  return new Node(existingNode.value, existingNode.left, newNode, existingNode.parent);
}