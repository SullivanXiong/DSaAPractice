class LLNode {
  value: any;
  next: Node | null;

  constructor(value: any, next: Node | null = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  size: number;
  head: Node | null;

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
   * @returns None
   */
  add(value: any, index: number = -1): undefined {}

  /**
   * Insert a new node as the new head of the list.
   *
   * @param value The value to be inserted in the linked list
   * @returns None
   */
  addFirst(value: any): undefined {}

  /**
   * Insert a new node at the end of the list.
   *
   * @param value The value to be inserted in the linked list
   * @returns None
   */
  addLast(value: any): undefined {}

  /**
   * Remove a node from the linked list at the specified index, if no index is provided, the last node is removed.
   *
   * @param index The index at which the value should be inserted
   * @returns The value of the node that was removed
   */
  remove(index: number = -1): any {}

  /**
   * Remove the first node from the linked list.
   *
   * @returns The value of the node that was removed
   */
  removeFirst(): any {}

  /**
   * Remove the last node from the linked list.
   *
   * @returns The value of the node that was removed
   */
  removeLast(): any {}

  /**
   * Get the value of the node at the specified index.
   *
   * @param index The index at which to get the value of
   * @returns The value of the node at the specified index
   */
  get(index: number): any {}

  /**
   * Get the value of the first node in the linked list.
   *
   * @returns The value of the first node in the linked list
   */
  getFirst(): any {}

  /**
   * Get the value of the last node in the linked list.
   *
   * @returns The value of the last node in the linked list
   */
  getLast(): any {}

  /**
   * Set the value of the node at the specified index.
   *
   * @param value The value to be set in the linked list
   * @param index The index at which the value should be set
   */
  set(value: Object, index: number): undefined {}

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
    return 0;
  }
}
