import { Clearable } from "./clearable";

export class StackSimpleArray<T> implements Clearable<T> {
  private stack: T[];

  constructor() {
    this.stack = [];
  }

  /**
   * Push an element onto the stack
   *
   * @param element The element to be pushed onto the stack
   * @returns None
   */
  push(element: T): void {
    this.stack.push(element);
  }

  /**
   * Pop an element from the stack
   *
   * @returns The popped element, or undefined if the stack is empty
   */
  pop(): T | undefined {
    return this.stack.pop();
  }

  /**
   * Peek at the top element of the stack without removing it
   *
   * @returns The top element, or undefined if the stack is empty
   */
  peek(): T | undefined {
    return this.stack[this.stack.length - 1];
  }

  /**
   * Check if the stack is empty
   *
   * @returns True if the stack is empty, false otherwise
   */
  isEmpty(): boolean {
    return this.stack.length === 0;
  }

  /**
   * Clear the stack
   *
   * @returns None
   */
  size(): number {
    return this.stack.length;
  }

  /**
   * Clear the stack
   *
   * @returns None
   */
  clear(): void {
    this.stack = [];
  }
}
