import { Clearable } from "./clearable";
import { StackLinkedList as Stack } from "./stack-linked-list";

export class QueueDoubleStack<T> implements Clearable<T> {
  protected enqueueStack: Stack<T>;
  protected dequeueStack: Stack<T>;

  constructor() {
    this.enqueueStack = new Stack<T>();
    this.dequeueStack = new Stack<T>();
  }

  /**
   * Enqueue an element to the queue.
   *
   * @param value The value to be added to the queue.
   */
  enqueue(value: T): void {
    this.enqueueStack.push(value);
  }

  /**
   * Dequeue an element from the queue.
   *
   * @returns The value that was removed from the queue.
   * @throws Error if the queue is empty.
   */
  dequeue(): T | undefined {
    if (this.dequeueStack.isEmpty()) {
      while (!this.enqueueStack.isEmpty()) {
        this.dequeueStack.push(this.enqueueStack.pop() as T);
      }
    }

    // If dequeueStack is still empty, it means both stacks are empty
    if (this.dequeueStack.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.dequeueStack.pop();
  }

  /**
   * Peek at the front element of the queue without removing it.
   *
   * @returns The value at the front of the queue.
   * @throws Error if the queue is empty.
   */
  peek(): T | undefined {
    if (this.dequeueStack.isEmpty()) {
      while (!this.enqueueStack.isEmpty()) {
        this.dequeueStack.push(this.enqueueStack.pop() as T);
      }
    }

    // If dequeueStack is still empty, it means both stacks are empty
    if (this.dequeueStack.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.dequeueStack.peek();
  }

  /**
   * Check if the queue is empty.
   *
   * @returns True if the queue is empty, false otherwise.
   */
  isEmpty(): boolean {
    return this.enqueueStack.isEmpty() && this.dequeueStack.isEmpty();
  }

  /**
   * Get the size of the queue.
   *
   * @returns The number of elements in the queue.
   */
  getSize(): number {
    return this.enqueueStack.getSize() + this.dequeueStack.getSize();
  }

  /**
   * Clear the queue.
   */
  clear(): void {
    this.enqueueStack.clear();
    this.dequeueStack.clear();
  }
}
