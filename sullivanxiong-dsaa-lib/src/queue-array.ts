import { Clearable } from "./clearable";

export class QueueSimpleArray<T> implements Clearable<T> {
  protected array: Array<T>;
  protected front: number;
  protected rear: number;
  protected size: number;
  protected capacity: number;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.array = new Array(capacity);
    this.front = 0;
    this.rear = -1;
    this.size = 0;
  }

  /**
   * Enqueue an element to the queue
   *
   * @param value The value to be added
   * @returns None
   * @throws Error if the queue is full
   */
  enqueue(value: T): void {
    if (this.size === this.array.length) {
      throw new Error("Queue is full");
    }
    this.rear = (this.rear + 1) % this.array.length; // Circular Queue increment
    this.array[this.rear] = value;
    this.size++;
  }

  /**
   * Dequeue an element from the queue
   *
   * @returns The value that was removed
   * @throws Error if the queue is empty
   */
  dequeue(): T | undefined {
    if (this.size === 0) {
      throw new Error("Queue is empty");
    }
    const value = this.array[this.front];
    this.array[this.front] = undefined as unknown as T; // Clear the slot
    this.front = (this.front + 1) % this.array.length; // Circular Queue increment
    this.size--;
    return value;
  }

  /**
   * Peek at the front element of the queue
   *
   * @returns The value at the front of the queue
   * @throws Error if the queue is empty
   */
  peek(): T | undefined {
    if (this.size === 0) {
      throw new Error("Queue is empty");
    }
    return this.array[this.front];
  }

  /**
   * Check if the queue is empty
   *
   * @returns True if the queue is empty, false otherwise
   */
  isEmpty(): boolean {
    return this.size === 0;
  }

  /**
   * Get the size of the queue
   *
   * @returns The number of elements in the queue
   */
  getSize(): number {
    return this.size;
  }

  /**
   * Clear the queue
   *
   * @returns None
   */
  clear(): void {
    this.array = new Array(this.array.length);
    this.front = 0;
    this.rear = -1;
    this.size = 0;
  }
}
