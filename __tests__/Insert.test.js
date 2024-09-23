import Insert from '../Insert';
import Node from '../../Node';

describe('Insert function', () => {
  test('should insert a new node into an empty tree', () => {
    const result = Insert(5, null);
    expect(result.value).toBe(5);
    expect(result.left).toBeNull();
    expect(result.right).toBeNull();
  });

  test('should insert a smaller value to the left', () => {
    const root = new Node(5);
    const result = Insert(3, root);
    expect(result.value).toBe(5);
    expect(result.left.value).toBe(3);
    expect(result.right).toBeNull();
  });

  test('should insert a larger value to the right', () => {
    const root = new Node(5);
    const result = Insert(7, root);
    expect(result.value).toBe(5);
    expect(result.left).toBeNull();
    expect(result.right.value).toBe(7);
  });

  test('should handle inserting multiple values', () => {
    let root = new Node(5);
    root = Insert(3, root);
    root = Insert(7, root);
    root = Insert(1, root);
    root = Insert(9, root);

    expect(root.value).toBe(5);
    expect(root.left.value).toBe(3);
    expect(root.right.value).toBe(7);
    expect(root.left.left.value).toBe(1);
    expect(root.right.right.value).toBe(9);
  });

  test('should not insert duplicate values', () => {
    const root = new Node(5);
    const result = Insert(5, root);
    expect(result).toBe(root);
  });
});