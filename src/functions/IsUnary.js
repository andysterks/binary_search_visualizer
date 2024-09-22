export function IsUnary(node) {
  return node.left !== null && node.right === null || node.left === null && node.right !== null;
}