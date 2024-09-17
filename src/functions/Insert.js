import Node from "../Node"

export default function Insert(newNode, existingNode) {
  if (newNode.value < existingNode.value) {
    if (!existingNode.left) {
      return new Node(existingNode.value, new Node(newNode.value), existingNode.right);
    } else {
      return new Node(existingNode.value, Insert(newNode, existingNode.left), existingNode.right);
    }
  } else {
    if (!existingNode.right) {
      return new Node(existingNode.value, existingNode.left, new Node(newNode.value));
    } else {
      return new Node(existingNode.value, existingNode.left, Insert(newNode, existingNode.right));
    }
  }
}