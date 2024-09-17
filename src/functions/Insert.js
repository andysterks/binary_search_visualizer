export default function Insert(node, value) {
  if (node < value) {
    if (node.left === null) {
      node.left = new Node(value)
      return node
    } else {
      return Insert(node.left, value)
    }
  } else {
    if (node.right === null) {
      node.right = new Node(value)
      return node
    } else {
      return Insert(node.right, value)
    }
  }
}