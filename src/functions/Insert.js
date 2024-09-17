export default function Insert(node, value) {
  if (node.value < value) {
    if (!node.left) {
      node.left = new Node(value)
      return node
    } else {
      return Insert(node.left, value)
    }
  } else {
    if (!node.right) {
      node.right = new Node(value)
      return node
    } else {
      return Insert(node.right, value)
    }
  }
}