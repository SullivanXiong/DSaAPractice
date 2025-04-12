import { LL as LinkedList } from "../../../ds2-linked-list/linked-list/suxiong-javascript/linkedList";

export class LinkedListQueue<T> {
  private linkedList: LinkedList<T>;

  constructor() {
    this.linkedList = new LinkedList<T>();
  }

  /**
   * Enqueue an element to the queue.
   *
   * @param value The value to be added to the queue.
   */
  enqueue(value: T): void {
    this.linkedList.addLast(value);
  }

  /**
   * Dequeue an element from the queue.
   *
   * @returns The value that was removed from the queue.
   * @throws Error if the queue is empty.
   */
  dequeue(): T | undefined {
    if (this.linkedList.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.linkedList.removeFirst();
  }

  /**
   * Peek at the front element of the queue without removing it.
   *
   * @returns The value at the front of the queue.
   * @throws Error if the queue is empty.
   */
  peek(): T | undefined {
    if (this.linkedList.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.linkedList.getFirst();
  }

  /**
   * Check if the queue is empty.
   *
   * @returns True if the queue is empty, false otherwise.
   */
  isEmpty(): boolean {
    return this.linkedList.isEmpty();
  }

  /**
   * Get the size of the queue.
   *
   * @returns The number of elements in the queue.
   */
  getSize(): number {
    return this.linkedList.getSize();
  }
}
