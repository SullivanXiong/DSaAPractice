export class SimpleStackArray<T> {
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
  push(element: T): void {}

  /**
   * Pop an element from the stack
   *
   * @returns The popped element, or undefined if the stack is empty
   */
  pop(): T | undefined {
    return;
  }

  /**
   * Peek at the top element of the stack without removing it
   *
   * @returns The top element, or undefined if the stack is empty
   */
  peek(): T | undefined {
    return;
  }

  /**
   * Check if the stack is empty
   *
   * @returns True if the stack is empty, false otherwise
   */
  isEmpty(): boolean {
    return;
  }

  /**
   * Clear the stack
   *
   * @returns None
   */
  size(): number {
    return;
  }
}
