export default function Insert(node, value) {
  if (node < value) {
    if (node.left === null) {
      node.left = new Node(value)
    } else {
      Insert(node.left, value)
    }
  } else {
    if (node.right === null) {
      node.right = new Node(value)
    } else {
      Insert(node.right, value)
    }
  }
}