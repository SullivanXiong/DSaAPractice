import { BaseTree } from "../../../baseTree";

export class MinHeap<T> extends BaseTree<T> {

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
            if (this.getHeight(node.left) <= this.getHeight(node.right)) {
                node.left = this.insertNode(node.left, value);
            } else {
                node.right = this.insertNode(node.right, value);
            }
        }

        return node;
    }

    /**
     * Get the height of the tree
     *
     * @param node The current node
     * @returns The height of the tree
     */
    private getHeight(node: TreeNode<T> | null): number {
        if (node === null) {
            return 0;
        }

        return Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
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
            this.removeLastNode(lastNode);
        }
        this.heapify(this.root);
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