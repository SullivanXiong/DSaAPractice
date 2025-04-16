/**
 * MaxHeap class that does not extend from BaseTree, instead it is a standalone
 * class that implements the heap data structure via a list.
 *
 * @template T The type of the elements in the heap
 */
export class MaxHeap<T> {
  private heap: T[] = [];

  constructor() {
    this.heap = [];
  }

  /**
   * Insert a new value into the heap
   *
   * @param value The value to be inserted
   * @returns None
   */
  insert(value: T): void {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  /**
   * Helper method to bubble up the last element to its correct position
   *
   * @param index The index of the last element
   * @returns None
   */
  private bubbleUp(index: number): void {
    let parentIndex = Math.floor((index - 1) / 2);

    while (index > 0 && this.heap[index] > this.heap[parentIndex]) {
      let temp = this.heap[index];
      this.heap[index] = this.heap[parentIndex];
      this.heap[parentIndex] = temp;
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  /**
   * Get the maximum value from the heap
   *
   * @returns The maximum value
   */
  getMax(): T | null {
    if (this.heap.length === 0) {
      return null;
    }
    return this.heap[0];
  }

  /**
   * Remove the maximum value from the heap
   *
   * @returns None
   * @throws Error if the heap is empty
   */
  removeMax(): void {
    if (this.heap.length === 0) {
      throw new Error("Heap is empty");
    }

    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.bubbleDown(0);
  }

  /**
   * Helper method to bubble down the root element to its correct position
   *
   * @param index The index of the root element
   * @returns None
   */
  private bubbleDown(index: number): void {
    let leftChildIndex = 2 * index + 1;
    let rightChildIndex = 2 * index + 2;
    let largestIndex = index;

    if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[largestIndex]) {
      largestIndex = leftChildIndex;
    }
    if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largestIndex]) {
      largestIndex = rightChildIndex;
    }
    if (largestIndex !== index) {
      let temp = this.heap[index];
      this.heap[index] = this.heap[largestIndex];
      this.heap[largestIndex] = temp;
      this.bubbleDown(largestIndex);
    }
  }

  /**
   * Search for a value in the heap
   *
   * @param value The value to be searched
   * @returns True if found, false otherwise
   */
  search(value: T): boolean {
    return this.searchNode(0, value);
  }

  /**
   * Helper method to search for a value in the heap
   *
   * @param node The current node
   * @param value The value to be searched
   * @returns True if found, false otherwise
   */
  private searchNode(index: number, value: T): boolean {
    if (index >= this.heap.length) {
      return false;
    }
    if (this.heap[index] === value) {
      return true;
    }
    return this.searchNode(2 * index + 1, value) || this.searchNode(2 * index + 2, value);
  }
}
