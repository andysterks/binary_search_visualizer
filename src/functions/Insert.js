import Node from "../Node"
import { AddLeft, AddRight } from "./AddNode"
import { IsRoot } from "./IsRoot"
import { IsLeaf } from "./IsLeaf"
import { IsUnary } from "./IsUnary"

export default function Insert(newNodeValue, existingNode) {
  if (!existingNode) {
    return new Node(newNodeValue, null, null);
  }

  if (newNodeValue < existingNode.value) {
    return new Node(
      existingNode.value, 
      Insert(newNodeValue, existingNode.left), 
      existingNode.right,
      existingNode.parent
    );
  } else if (newNodeValue > existingNode.value) {
    if (existingNode.parent && IsUnary(existingNode.parent)) {
      existingNode.parent.parent.setRight(
        new Node(
          existingNode.value,
          new Node(existingNode.parent.value, null, null),
          Insert(newNodeValue),
          existingNode.parent.parent
        )
      )
    } else {
      return new Node(
        existingNode.value, 
        existingNode.left,
        Insert(newNodeValue, existingNode.right),
        existingNode.parent
      );
    }
  } else {
    // If the value is equal, you can choose to ignore it or handle duplicates
    return existingNode;
  }
}