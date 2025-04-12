import { BinarySearchTree } from "./binarySearchTree";

describe("BinarySearchTree", () => {
  let bst: BinarySearchTree<number>;

  beforeEach(() => {
    bst = new BinarySearchTree<number>();
  });

  test("should initialize an empty tree", () => {
    expect(bst.getSize()).toBe(0);
    expect(bst.getHeight()).toBe(0);
    expect(bst.search(10)).toBe(false);
  });

  test("should insert elements into the tree", () => {
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);

    expect(bst.getSize()).toBe(3);
    expect(bst.search(10)).toBe(true);
    expect(bst.search(5)).toBe(true);
    expect(bst.search(15)).toBe(true);
  });

  test("should handle duplicate insertions gracefully", () => {
    bst.insert(10);
    bst.insert(10);

    expect(bst.getSize()).toBe(1); // Duplicate should not increase size in the implementation
  });

  test("should perform in-order traversal", () => {
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);

    expect(bst.inOrderTraversal()).toEqual([5, 10, 15]);
  });

  test("should perform pre-order traversal", () => {
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);

    expect(bst.preOrderTraversal()).toEqual([10, 5, 15]);
  });

  test("should perform post-order traversal", () => {
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);

    expect(bst.postOrderTraversal()).toEqual([5, 15, 10]);
  });

  test("should perform level-order traversal", () => {
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);

    expect(bst.levelOrderTraversal()).toEqual([10, 5, 15]);
  });

  test("should remove a leaf node", () => {
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);

    bst.remove(5);

    expect(bst.getSize()).toBe(2);
    expect(bst.search(5)).toBe(false);
    expect(bst.inOrderTraversal()).toEqual([10, 15]);
  });

  test("should remove a node with one child", () => {
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    bst.insert(12);

    bst.remove(15);

    expect(bst.getSize()).toBe(3);
    expect(bst.search(15)).toBe(false);
    expect(bst.inOrderTraversal()).toEqual([5, 10, 12]);
  });

  test("should remove a node with two children", () => {
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    bst.insert(12);
    bst.insert(20);

    bst.remove(15);

    expect(bst.getSize()).toBe(4);
    expect(bst.search(15)).toBe(false);
    expect(bst.inOrderTraversal()).toEqual([5, 10, 12, 20]);
  });

  test("should handle removing the root node", () => {
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);

    bst.remove(10);

    expect(bst.getSize()).toBe(2);
    expect(bst.search(10)).toBe(false);
    expect(bst.inOrderTraversal()).toEqual([5, 15]);
  });

  test("should handle removing from an empty tree", () => {
    expect(() => bst.remove(10)).not.toThrow();
    expect(bst.getSize()).toBe(0);
  });

  test("should calculate the height of the tree", () => {
    expect(bst.getHeight()).toBe(0);

    bst.insert(10);
    expect(bst.getHeight()).toBe(1);

    bst.insert(5);
    bst.insert(15);
    expect(bst.getHeight()).toBe(2);

    bst.insert(3);
    expect(bst.getHeight()).toBe(3);
  });

  test("should handle edge cases for an empty tree", () => {
    expect(bst.inOrderTraversal()).toEqual([]);
    expect(bst.preOrderTraversal()).toEqual([]);
    expect(bst.postOrderTraversal()).toEqual([]);
    expect(bst.levelOrderTraversal()).toEqual([]);
    expect(bst.search(10)).toBe(false);
    expect(bst.getHeight()).toBe(0);
    expect(bst.getSize()).toBe(0);
  });
});
