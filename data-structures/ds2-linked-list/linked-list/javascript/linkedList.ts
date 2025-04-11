class LLNode<T> {
  value: T;
  next: LLNode<T> | null;

  constructor(value: T, next: LLNode<T> | null = null) {
    this.value = value;
    this.next = next;
  }
}

export class LL<T> {
  size: number;
  head: LLNode<T> | null;

  constructor() {
    this.size = 0;
    this.head = null;
  }

  /**
   * Insert a new node at the specified index of the linked list,
   * if no index is provided, the value is inserted at the end of the
   * linked list.
   *
   * @param value The value to be inserted in the linked list
   * @param index The index at which the value should be inserted. If None,
   *             the value is inserted at the end of the linked list.
   * @throws RangeError if the index is out of bounds
   */
  add(value: T, index: number = NaN) {}

  /**
   * Insert a new node as the new head of the list.
   *
   * @param value The value to be inserted in the linked list
   * @throws RangeError if the index is out of bounds
   */
  addFirst(value: T) {}

  /**
   * Insert a new node at the end of the list.
   *
   * @param value The value to be inserted in the linked list
   * @throws RangeError if the index is out of bounds
   */
  addLast(value: T) {}

  /**
   * Remove a node from the linked list at the specified index, if no index is provided, the last node is removed.
   *
   * @param index The index at which the value should be inserted
   * @returns The value of the node that was removed
   * @throws RangeError if the index is out of bounds
   */
  remove(index: number = NaN): T | undefined {}

  /**
   * Remove the first node from the linked list.
   *
   * @returns The value of the node that was removed
   * @throws RangeError if the index is out of bounds
   */
  removeFirst(): T | undefined {}

  /**
   * Remove the last node from the linked list.
   *
   * @returns The value of the node that was removed
   * @throws RangeError if the index is out of bounds
   */
  removeLast(): T | undefined {}

  /**
   * Get the value of the node at the specified index.
   *
   * @param index The index at which to get the value of
   * @returns The value of the node at the specified index
   * @throws RangeError if the index is out of bounds
   */
  get(index: number): T | undefined {}

  /**
   * Get the value of the first node in the linked list.
   *
   * @returns The value of the first node in the linked list
   * @throws RangeError if the index is out of bounds
   */
  getFirst(): T | undefined {}

  /**
   * Get the value of the last node in the linked list.
   *
   * @returns The value of the last node in the linked list
   * @throws RangeError if the index is out of bounds
   */
  getLast(): T | undefined {}

  /**
   * Set the value of the node at the specified index.
   *
   * @param value The value to be set in the linked list
   * @param index The index at which the value should be set
   * @throws RangeError if the index is out of bounds
   */
  set(value: T, index: number) {}

  /**
   * Format the linked list as a string.
   *
   * @returns The linked list as a string
   *
   * Example:
   * For a linked list with values [1, 2, 3], the string representation would be "1 -> 2 -> 3"
   */
  formatLinkedList(): string {
    return "";
  }

  /**
   * Get the size of the linked list.
   *
   * @returns The size of the linked list as an integer
   */
  getSize(): number {
    return this.size;
  }
}
