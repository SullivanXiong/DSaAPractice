import { Clearable } from "./clearable";
import { LinkedList } from "./linked-list";

export class StackLinkedList<T> implements Clearable<T> {
  protected list: LinkedList<T>;

  constructor() {
    this.list = new LinkedList<T>();
  }

  /**
   * Push a value onto the stack.
   *
   * @param value The value to push onto the stack.
   */
  push(value: T): void {
    this.list.addLast(value);
  }

  /**
   * Pop a value off the stack.
   *
   * @returns The value popped off the stack.
   */
  pop(): T | undefined {
    if (this.list.getSize() === 0) {
      return undefined;
    }
    return this.list.removeLast();
  }

  /**
   * Peek at the top value of the stack without removing it.
   *
   * @returns The value at the top of the stack.
   */
  peek(): T | undefined {
    if (this.list.getSize() === 0) {
      return undefined;
    }
    return this.list.getLast();
  }

  /**
   * Check if the stack is empty.
   *
   * @returns True if the stack is empty, false otherwise.
   */
  isEmpty(): boolean {
    return this.list.getSize() === 0;
  }

  /**
   * Get the size of the stack.
   *
   * @returns The number of elements in the stack.
   */
  getSize(): number {
    return this.list.getSize();
  }

  /**
   * Clear the stack.
   */
  clear(): void {
    this.list.clear();
  }
}
