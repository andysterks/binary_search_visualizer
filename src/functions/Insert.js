import Node from "../Node"
import { AddLeft, AddRight } from "./AddNode"
import { IsRoot } from "./IsRoot"
import { IsLeaf } from "./IsLeaf"
import { IsUnary } from "./IsUnary"

export default function Insert(newNode, existingNode) {
  if (!existingNode) {
    return newNode;
  }

  if (newNode.value < existingNode.value) {
    return new Node(
      existingNode.value,
      Insert(newNode, existingNode.left),
      existingNode.right,
      existingNode.parent
    );
  } else if (newNode.value > existingNode.value) {
    return new Node(
      existingNode.value,
      existingNode.left,
      Insert(newNode, existingNode.right),
      existingNode.parent
    );  
  } else {
    // If the value is equal, you can choose to ignore it or handle duplicates
    return existingNode;
  }
}