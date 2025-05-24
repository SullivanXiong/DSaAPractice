import { BaseTree } from "./base-tree";
import { Clearable } from "./clearable";
import { TreeNode } from "./tree";

export class MinHeap<T> extends BaseTree<T> implements Clearable<T> {
  constructor() {
    super();
  }

  /**
   * Insert a new value into the heap
   *
   * @param value The value to be inserted
   * @returns None
   */
  insert(value: T): void {
    this.root = this.insertNode(this.root, value);
  }

  /**
   * Helper method to insert a value into the heap
   *
   * @param node The current node
   * @param value The value to be inserted
   * @returns The updated node
   */
  private insertNode(node: TreeNode<T> | null, value: T): TreeNode<T> {
    if (node === null) {
      return new TreeNode(value);
    }

    if (value < node.value) {
      const temp = node.value;
      node.value = value;
      value = temp;
    }

    if (node.left === null) {
      node.left = this.insertNode(node.left, value);
    } else if (node.right === null) {
      node.right = this.insertNode(node.right, value);
    } else {
      if (this._getHeight(node.left) <= this._getHeight(node.right)) {
        node.left = this.insertNode(node.left, value);
      } else {
        node.right = this.insertNode(node.right, value);
      }
    }

    return node;
  }

  /**
   * Get the height of a tree from a given node
   *
   * @param node The current node
   * @returns The height of the tree
   */
  private _getHeight(node: TreeNode<T> | null): number {
    if (node === null) {
      return 0;
    }

    return Math.max(this._getHeight(node.left), this._getHeight(node.right)) + 1;
  }

  /**
   * Get the minimum value from the heap
   *
   * @returns The minimum value
   */
  getMin(): T | null {
    return this.root ? this.root.value : null;
  }

  /**
   * Remove the minimum value from the heap
   *
   * @returns None
   * @throws Error if the heap is empty
   */
  removeMin(): void {
    if (this.root === null) {
      throw new Error("Heap is empty");
    }

    const lastNode = this.getLastNode();
    if (lastNode) {
      this.root.value = lastNode.value;
      this.removeLastNode();
    }
    this.heapify(this.root);
  }

  /**
   * Remove a node from the heap
   */
  remove(value: T): void {
    // if value is the root then removeMin()
    if (this.root && this.root.value === value) {
      this.removeMin();
      return;
    } else {
      throw new Error("Cannot remove non-root node");
    }
  }

  /**
   * Helper method to get the last node in the heap
   *
   * @returns The last node
   */
  private getLastNode(): TreeNode<T> | null {
    if (this.root === null) {
      return null;
    }

    const queue: TreeNode<T>[] = [this.root];
    let lastNode: TreeNode<T> | null = null;

    while (queue.length > 0) {
      lastNode = queue.shift()!;
      if (lastNode.left) {
        queue.push(lastNode.left);
      }
      if (lastNode.right) {
        queue.push(lastNode.right);
      }
    }

    return lastNode;
  }

  /**
   * Helper method to remove the last node from the heap
   *
   * @returns None
   */
  private removeLastNode(): void {
    if (this.root === null) {
      return;
    }

    // If the tree has only one node, set the root to null
    if (this.root.left === null && this.root.right === null) {
      this.root = null;
      return;
    }

    // Use a queue for level-order traversal to find the last node
    const queue: { node: TreeNode<T>; parent: TreeNode<T> | null }[] = [{ node: this.root, parent: null }];
    let lastNodeInfo: { node: TreeNode<T>; parent: TreeNode<T> | null } | null = null;

    while (queue.length > 0) {
      const current = queue.shift()!;
      lastNodeInfo = current;

      if (current.node.left) {
        queue.push({ node: current.node.left, parent: current.node });
      }
      if (current.node.right) {
        queue.push({ node: current.node.right, parent: current.node });
      }
    }

    // Remove the last node by updating its parent's reference
    if (lastNodeInfo) {
      const { node, parent } = lastNodeInfo;
      if (parent) {
        if (parent.left === node) {
          parent.left = null;
        } else if (parent.right === node) {
          parent.right = null;
        }
      }
    }
  }

  /**
   * Helper method to heapify the tree
   *
   * @param node The current node
   * @returns None
   */
  private heapify(node: TreeNode<T> | null): void {
    if (node === null) {
      return;
    }

    let smallest = node;

    // Check if the left child is smaller
    if (node.left && node.left.value < smallest.value) {
      smallest = node.left;
    }

    // Check if the right child is smaller
    if (node.right && node.right.value < smallest.value) {
      smallest = node.right;
    }

    // If the smallest node is not the current node, swap values and recurse
    if (smallest !== node) {
      const temp = node.value;
      node.value = smallest.value;
      smallest.value = temp;

      // Recursively heapify the affected subtree
      this.heapify(smallest);
    }
  }

  /**
   * Search for a value in the heap
   *
   * @param value The value to be searched
   * @returns True if found, false otherwise
   */
  search(value: T): boolean {
    return this.searchNode(this.root, value);
  }

  /**
   * Helper method to search for a value in the heap
   *
   * @param node The current node
   * @param value The value to be searched
   * @returns True if found, false otherwise
   */
  private searchNode(node: TreeNode<T> | null, value: T): boolean {
    if (node === null) {
      return false;
    }

    if (node.value === value) {
      return true;
    }

    return this.searchNode(node.left, value) || this.searchNode(node.right, value);
  }

  clear(): void {
    this.root = null;
  }
}
