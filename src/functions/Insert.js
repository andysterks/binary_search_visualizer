import Node from "../Node"

export default function Insert(newNode, existingNode) {
  if (newNode.value < existingNode.value) {
    if (!existingNode.left) {
      return new Node(existingNode.value, new Node(newNode.value, null, null, existingNode), existingNode.right, existingNode.parent);
    } else {
      return new Node(existingNode.value, Insert(newNode, existingNode.left), existingNode.right);
    }
  } else {
    if (!existingNode.right) {
      return new Node(existingNode.value, existingNode.left, new Node(newNode.value, null, null, existingNode), existingNode.parent);
    } else {
      //return new Node(existingNode.value, existingNode.left, Insert(newNode, existingNode.right));
      return InsertDuplicateRight(existingNode, Insert(newNode, existingNode.right));
    }
  }
}

function InsertDuplicateRight(existingNode, newNode) {
  return new Node(existingNode.value, existingNode.left, newNode);
}