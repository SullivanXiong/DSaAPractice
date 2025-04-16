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
  insert(value: T): void {}

  /**
   * Helper method to bubble up the last element to its correct position
   *
   * @param index The index of the last element
   * @returns None
   */
  private bubbleUp(index: number): void {}

  /**
   * Get the maximum value from the heap
   *
   * @returns The maximum value
   */
  getMax(): T | null {}

  /**
   * Remove the maximum value from the heap
   *
   * @returns None
   * @throws Error if the heap is empty
   */
  removeMax(): void {}

  /**
   * Helper method to bubble down the root element to its correct position
   *
   * @param index The index of the root element
   * @returns None
   */
  private bubbleDown(index: number): void {}

  /**
   * Search for a value in the heap
   *
   * @param value The value to be searched
   * @returns True if found, false otherwise
   */
  search(value: T): boolean {}
}
