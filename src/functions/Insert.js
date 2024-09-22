import Node from "../Node"
import { AddLeft, AddRight } from "./AddNode"
import { IsRoot } from "./IsRoot"
import { IsLeaf } from "./IsLeaf"
import { IsUnary } from "./IsUnary"

export default function Insert(newNode, existingNode) {
  if (newNode.value < existingNode.value) {
    if (IsRoot(existingNode)) {
      if (existingNode.left?.value === newNode.value || existingNode.right?.value === newNode.value) { 
        console.log("duplicate");
        return existingNode;
      }
      return AddLeft(existingNode, newNode);
    }
    if (existingNode.left === null) {
      if (existingNode.left?.value === newNode.value || existingNode.right?.value === newNode.value) { 
        console.log("duplicate");
        return existingNode;
      }
      
      return AddLeft(existingNode, newNode);
    } else {
      //return new Node(existingNode.value, Insert(newNode, existingNode.left), existingNode.right, existingNode.parent);
      return InsertDuplicateLeft(existingNode, Insert(newNode, existingNode.left));
    }
  } else {
    if (IsRoot(existingNode)) {
      if (existingNode.left?.value === newNode.value || existingNode.right?.value === newNode.value) { 
        console.log("duplicate");
        return existingNode;
      }

      if (existingNode.right == null) {
        return AddRight(existingNode, newNode);
      } else {
        return Insert(newNode, existingNode.right);
      }
    }
    if (existingNode.right === null) {
      if (existingNode.left?.value === newNode.value || existingNode.right?.value === newNode.value) { 
        console.log("duplicate");
        return existingNode;
      }

      if (IsLeaf(existingNode) && IsUnary(existingNode.parent)) {
        if (newNode.value > existingNode.value) {
          // shove up existing node (5), set original parent to left (3), set new (7) to right
          var newParent = new Node(
            existingNode.value,
            null,
            null,
            existingNode.parent.parent
          );

          newParent.addLeft(existingNode.parent);
          newParent.addRight(newNode);

          return newParent;
        } else {
          // shove up existing node, set parent to right node
        }
      }

      return AddRight(existingNode, newNode);
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