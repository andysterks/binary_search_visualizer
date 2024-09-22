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
      
      if (existingNode.left === null) {
        return AddLeft(existingNode, newNode);
      } else {
        return Insert(newNode, existingNode.left);
      }
    } else {
      debugger;
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

          AddLeft(newParent, existingNode.parent);

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