export class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 * Base Tree interface
 */
export interface Tree<T> {
  root: TreeNode<T> | null;

  /**
   * Insert a new node into the tree
   *
   * @param value The value to be inserted
   * @returns None
   */
  insert(value: T): void;

  /**
   * Remove a node from the tree
   *
   * @param value The value to be removed
   * @returns None
   */
  remove(value: T): void;

  /**
   * Search for a value in the tree
   *
   * @param value The value to be searched
   * @returns True if the value is found, false otherwise
   */
  search(value: T): boolean;

  /**
   * In-Order Traversal of the tree left -> root -> right
   *
   * @returns An array of values in in-order
   * @example
   *       1
   *     /  \
   *    2    3
   * Output: 2 -> 1 -> 3
   */
  inOrderTraversal(): T[];

  /**
   * Pre-Order Traversal of the tree root -> left -> right
   *
   * @returns An array of values in pre-order
   * @example
   *       1
   *     /  \
   *    2    3
   * Output: 1 -> 2 -> 3
   */
  preOrderTraversal(): T[];

  /**
   * Post-Order Traversal of the tree left -> right -> root
   *
   * @returns An array of values in post-order
   * @example
   *       1
   *     /  \
   *    2    3
   * Output: 2 -> 3 -> 1
   */
  postOrderTraversal(): T[];

  /**
   * Level-Order Traversal of the tree
   *
   * @returns An array of values in level-order
   * @example
   *       1
   *     /  \
   *    2    3
   * Output: 1 -> 2 -> 3
   */
  levelOrderTraversal(): T[];

  /**
   * Find the height of the tree
   *
   * @returns The height of the tree
   * @example
   *       1
   *     /  \
   *    2    3
   *   / \
   *  4   5
   * Output: 3
   */
  getHeight(): number;

  /**
   * Returns the total number of nodes on the tree
   *
   * @returns The number of nodes in the tree
   * @example
   *       1
   *     /  \
   *    2    3
   *   / \
   *  4   5
   * Output: 5
   */
  getSize(): number;

  /**
   * Returns a boolean if the tree is empty
   *
   * @returns True if the tree is empty, false otherwise
   */
  isEmpty(): boolean;
}
