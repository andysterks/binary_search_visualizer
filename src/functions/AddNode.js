export function AddLeft(parentNode, node) {
  parentNode.left = node;
  node.parent = parentNode;
  return parentNode;
}

export function AddRight(parentNode, node) {
  parentNode.right = node;
  node.parent = parentNode;
  return parentNode;
}