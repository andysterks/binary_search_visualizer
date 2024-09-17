export default function Insert(newNode, existingNode) {
  if (newNode.value < existingNode.value) {
    if (!existingNode.left) {
      existingNode.left = new Node(newNode.value)
      return newNode
    } else {
      return Insert(newNode, existingNode.left)
    }
  } else {
    if (!existingNode.right) {
      existingNode.right = new Node(newNode.value)
      return newNode
    } else {
      return Insert(newNode, existingNode.right)
    }
  }
}