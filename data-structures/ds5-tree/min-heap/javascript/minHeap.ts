import { BaseTree } from "../../baseTree";

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
  insert(value: T): void {}

  /**
   * Get the minimum value from the heap
   *
   * @returns The minimum value
   */
  getMin(): T | null {}

  /**
   * Remove the minimum value from the heap
   *
   * @returns None
   * @throws Error if the heap is empty
   */
  removeMin(): void {}
}
