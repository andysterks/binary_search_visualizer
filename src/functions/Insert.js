import Node from "../Node"

export default function Insert(newNode, existingNode) {
  if (newNode.value < existingNode.value) {
    if (existingNode.isRoot()) {
      if (existingNode.left?.value === newNode.value || existingNode.right?.value === newNode.value) { 
        console.log("duplicate");
        return existingNode;
      }
      existingNode.addLeft(newNode);
      return new Node(existingNode.value, existingNode.left, existingNode.right, existingNode.parent);
    }
    if (existingNode.left === null) {
      var newLeftNode = new Node(newNode.value, null, null, existingNode);
      return new Node(existingNode.value, newLeftNode, existingNode.right, existingNode.parent);
    } else {
      //return new Node(existingNode.value, Insert(newNode, existingNode.left), existingNode.right, existingNode.parent);
      return InsertDuplicateLeft(existingNode, Insert(newNode, existingNode.left));
    }
  } else {
    if (existingNode.right === null) {
      if (existingNode.isRoot()) {
        if (existingNode.left?.value === newNode.value || existingNode.right?.value === newNode.value) { 
          console.log("duplicate");
          return existingNode;
        }
        existingNode.addRight(newNode);
        return new Node(existingNode.value, existingNode.left, existingNode.right, existingNode.parent);
      }
      // if (existingNode.isLeaf() && existingNode.parent.isUnary()) {
      //   if (newNode.value > existingNode.value) {
      //     // shove up existing node (5), set original parent to left (3), set new (7) to right
      //     var newParent = new Node(
      //       existingNode.value,
      //       null,
      //       null,
      //       existingNode.parent.parent
      //     );

      //     newParent.addLeft(existingNode.parent);
      //     newParent.addRight(newNode);

      //     return newParent;
      //   } else {
      //     // shove up existing node, set parent to right node
      //   }
      // }
      if (existingNode.left?.value === newNode.value || existingNode.right?.value === newNode.value) { 
        console.log("duplicate");
        return existingNode;
      }

      existingNode.addRight(newNode);
      return new Node(existingNode.value, existingNode.left, existingNode.right, existingNode.parent);
    } else {
      //return new Node(existingNode.value, existingNode.left, Insert(newNode, existingNode.right));
      return InsertDuplicateRight(existingNode, Insert(newNode, existingNode.right));
    }
  }
}

function InsertDuplicateLeft(existingNode, newNode) {
  return new Node(existingNode.value, newNode, existingNode.right, existingNode.parent);
}

function InsertDuplicateRight(existingNode, newNode) {
  return new Node(existingNode.value, existingNode.left, newNode, existingNode.parent);
}