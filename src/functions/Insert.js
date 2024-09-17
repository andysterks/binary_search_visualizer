import Node from "../Node"

export default function Insert(newNode, existingNode) {
  if (newNode.value < existingNode.value) {
    if (!existingNode.left) {
      existingNode.left = new Node(newNode.value)
      return existingNode
    } else {
      Insert(newNode, existingNode.left)
      return existingNode
    }
  } else {
    if (!existingNode.right) {
      existingNode.right = new Node(newNode.value)
      return existingNode
    } else {
      Insert(newNode, existingNode.right)
      return existingNode
    }
  }
}