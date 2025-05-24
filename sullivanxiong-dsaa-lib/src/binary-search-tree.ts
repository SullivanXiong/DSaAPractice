import { BaseTree } from "./base-tree";
import { Clearable } from "./clearable";
import { TreeNode } from "./tree";

/**
 * Binary Search Tree (BST) implementation
 *
 * @template T The type of the values in the tree
 */
export class BinarySearchTree<T> extends BaseTree<T> implements Clearable<T> {
  /**
   * Insert a new node into the tree
   *
   * @param value The value to be inserted
   * @returns None
   */
  insert(value: T): void {
    this.root = this.insertNode(this.root, value);
  }

  /**
   * Helper method to insert a value into the binary search tree
   * Duplicate values are not allowed
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
      node.left = this.insertNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.insertNode(node.right, value);
    }

    return node;
  }

  /**
   * Remove a node from the tree
   *
   * @param value The value to be removed
   * @returns None
   */
  public remove(value: T): void {
    this.root = this.removeNode(this.root, value);
  }

  /**
   * Helper method to remove a value from the binary search tree
   *
   * @param node The current node
   * @param value The value to be removed
   * @returns The updated node
   */
  private removeNode(node: TreeNode<T> | null, value: T): TreeNode<T> | null {
    if (node === null) {
      return null;
    }

    if (value < node.value) {
      node.left = this.removeNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.removeNode(node.right, value);
    } else {
      // Node with only one child or no child
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }

      // Node with two children: Get the inorder successor
      const minNode = this.findMinNode(node.right);
      node.value = minNode.value;
      node.right = this.removeNode(node.right, minNode.value);
    }

    return node;
  }

  /**
   * Find the minimum node in the binary search tree
   *
   * @param node The current node
   * @returns The minimum node
   */
  private findMinNode(node: TreeNode<T> | null): TreeNode<T> {
    if (node === null || node.left === null) {
      return node as TreeNode<T>;
    }
    return this.findMinNode(node.left);
  }

  /**
   * Search for a value in the tree
   *
   * @param value The value to be searched
   * @returns True if the value is found, false otherwise
   */
  search(value: T): boolean {
    return this.searchNode(this.root, value);
  }

  /**
   * Helper method to search for a value in the binary search tree
   *
   * @param node The current node
   * @param value The value to be searched
   * @returns True if the value is found, false otherwise
   */
  private searchNode(node: TreeNode<T> | null, value: T): boolean {
    if (node === null) {
      return false;
    }

    if (value < node.value) {
      return this.searchNode(node.left, value);
    } else if (value > node.value) {
      return this.searchNode(node.right, value);
    } else {
      return true; // Value found
    }
  }

  /**
   * Clear the tree
   *
   * @returns None
   */
  clear(): void {
    this.root = null;
  }
}
