export function IsLeaf(node) {
  return node.left === null && node.right === null;
}