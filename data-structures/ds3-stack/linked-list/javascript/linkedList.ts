import { LL as LinkedList } from "../../ds2-linked-list/linked-list/javascript/linkedList";

export class LinkedListStack<T> {
  private list: LinkedList<T>;

  constructor() {
    this.list = new LinkedList<T>();
  }

  /**
   * Push a value onto the stack.
   *
   * @param value The value to push onto the stack.
   */
  push(value: T): void {}

  /**
   * Pop a value off the stack.
   *
   * @returns The value popped off the stack.
   */
  pop(): T | undefined {}

  /**
   * Peek at the top value of the stack without removing it.
   *
   * @returns The value at the top of the stack.
   */
  peek(): T | undefined {}

  /**
   * Check if the stack is empty.
   *
   * @returns True if the stack is empty, false otherwise.
   */
  isEmpty(): boolean {}

  /**
   * Get the size of the stack.
   *
   * @returns The number of elements in the stack.
   */
  size(): number {}
}
