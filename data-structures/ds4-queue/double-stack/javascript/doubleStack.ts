import { LinkedListStack as Stack } from "../../../ds3-stack/linked-list/javascript/linkedList";

export class DoubleStackQueue<T> {
  private enqueueStack: Stack<T>;
  private dequeueStack: Stack<T>;

  constructor() {
    this.enqueueStack = new Stack<T>();
    this.dequeueStack = new Stack<T>();
  }

  /**
   * Enqueue an element to the queue.
   *
   * @param value The value to be added to the queue.
   */
  enqueue(value: T): void {}

  /**
   * Dequeue an element from the queue.
   *
   * @returns The value that was removed from the queue.
   * @throws Error if the queue is empty.
   */
  dequeue(): T | undefined {}

  /**
   * Peek at the front element of the queue without removing it.
   *
   * @returns The value at the front of the queue.
   * @throws Error if the queue is empty.
   */
  peek(): T | undefined {}

  /**
   * Check if the queue is empty.
   *
   * @returns True if the queue is empty, false otherwise.
   */
  isEmpty(): boolean {}

  /**
   * Get the size of the queue.
   *
   * @returns The number of elements in the queue.
   */
  getSize(): number {}
}
