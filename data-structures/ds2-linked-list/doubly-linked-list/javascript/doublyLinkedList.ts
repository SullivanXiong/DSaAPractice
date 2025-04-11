class Node<T> {
  value: T;
  next: Node<T> | null;
  prev: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList<T> {
  head: Node<T> | null;
  tail: Node<T> | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Append a node to the end of the list
   *
   * @param value The value to be added
   * @returns None
   */
  append(value: T): void {}

  /**
   * Prepend a node to the beginning of the list
   *
   * @param value The value to be added
   * @returns None
   */
  prepend(value: T): void {}

  /**
   * Remove a node from the list
   *
   * @param value The value to be removed
   * @returns None
   */
  remove(value: T): void {}

  /**
   * Find a node in the list
   *
   * @param value The value to be found
   * @returns The node if found, null otherwise
   */
  find(value: T): Node<T> | null {}

  /**
   * Insert a node at a specific index
   *
   * @param index The index at which to insert the node
   * @param value The value to be added
   * @returns None
   */
  insert(index: number, value: T): void {}

  /**
   * Remove a node at a specific index
   *
   * @param index The index of the node to be removed
   * @returns None
   */
  removeAt(index: number): void {}

  /**
   * Get the size of the list
   *
   * @returns The size of the list
   */
  size(): number {
    return;
  }

  /**
   * Clear the list
   *
   * @returns None
   */
  clear() {}
}

export default DoublyLinkedList;
