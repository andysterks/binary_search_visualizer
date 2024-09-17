export default function Insert(newNode, existingNode) {
  if (newNode.value < existingNode.value) {
    if (!existingNode.left) {
      newNode.left = new Node(value)
      return newNode
    } else {
      return Insert(newNode.left, value)
    }
  } else {
    if (!existingNode.right) {
      existingNode.right = new Node(value)
      return newNode
    } else {
      return Insert(newNode.right, value)
    }
  }
}