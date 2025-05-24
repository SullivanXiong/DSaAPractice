import { Tree, TreeNode } from "./tree";

export abstract class BaseTree<T> implements Tree<T> {
  root: TreeNode<T> | null;

  constructor() {
    this.root = null;
  }

  abstract insert(value: T): void;
  abstract remove(value: T): void;
  abstract search(value: T): boolean;

  inOrderTraversal(): T[] {
    const result: T[] = [];
    this.inOrder(this.root, result);
    return result;
  }

  private inOrder(node: TreeNode<T> | null, result: T[]): void {
    if (node) {
      this.inOrder(node.left, result);
      result.push(node.value);
      this.inOrder(node.right, result);
    }
  }

  preOrderTraversal(): T[] {
    const result: T[] = [];
    this.preOrder(this.root, result);
    return result;
  }

  private preOrder(node: TreeNode<T> | null, result: T[]): void {
    if (node) {
      result.push(node.value);
      this.preOrder(node.left, result);
      this.preOrder(node.right, result);
    }
  }

  postOrderTraversal(): T[] {
    const result: T[] = [];
    this.postOrder(this.root, result);
    return result;
  }

  private postOrder(node: TreeNode<T> | null, result: T[]): void {
    if (node) {
      this.postOrder(node.left, result);
      this.postOrder(node.right, result);
      result.push(node.value);
    }
  }

  levelOrderTraversal(): T[] {
    const result: T[] = [];
    const queue: TreeNode<T>[] = [];
    if (this.root) {
      queue.push(this.root);
    }
    while (queue.length > 0) {
      const node = queue.shift();
      if (node) {
        result.push(node.value);
        if (node.left) {
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);
        }
      }
    }
    return result;
  }

  getHeight(): number {
    const height = (node: TreeNode<T> | null): number => {
      if (!node) return 0;
      return Math.max(height(node.left), height(node.right)) + 1;
    };
    return height(this.root);
  }

  getSize(): number {
    return this.size(this.root);
  }

  private size(node: TreeNode<T> | null): number {
    if (!node) return 0;
    return this.size(node.left) + this.size(node.right) + 1;
  }

  isEmpty(): boolean {
    return this.root === null;
  }
}
