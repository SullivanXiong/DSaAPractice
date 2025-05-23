import { Node } from "./node";

export class LL<T> {
  protected size: number;
  protected head: Node<T> | null;

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
  public add(value: T, index?: number): void {
    let newNode = new Node(value);

    if (index === undefined) {
      index = this.size;
    }
    if (index < 0 || index > this.size) {
      throw new RangeError("Index out of bounds");
    }

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head as Node<T>;

      // Traverse to the node before the specified index
      for (let i = 0; i < index - 1; i++) {
        current = current.next as Node<T>;
      }

      // Insert the new node at the specified index
      newNode.next = current.next;
      current.next = newNode;
    }
    this.size++;
  }

  /**
   * Insert a new node as the new head of the list.
   *
   * @param value The value to be inserted in the linked list
   */
  public addFirst(value: T) {
    // Create a new node with the given value and set its next pointer to the current head
    let newNode = new Node(value, this.head);
    this.head = newNode;
    this.size++;
  }

  /**
   * Insert a new node at the end of the list.
   *
   * @param value The value to be inserted in the linked list
   */
  public addLast(value: T) {
    let newNode = new Node(value);

    // If the list is empty, set the new node as the head
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  /**
   * Remove a node from the linked list at the specified index, if no index is provided, the last node is removed.
   *
   * @param index The index at which the value should be inserted
   * @returns The value of the node that was removed
   * @throws Error if the index is out of bounds
   * @throws RangeError if the list is empty
   */
  public remove(index?: number): T {
    if (index === undefined) {
      index = this.size - 1;
    }

    if (index === 0) {
      if (!this.head) {
        throw new RangeError("List is empty");
      }
      const removedValue = this.head.value;
      this.head = this.head.next;
      this.size--;
      return removedValue;
    }

    if (index < 0 || index >= this.size) {
      throw new RangeError("Index out of bounds");
    }

    if (!this.head) {
      throw new RangeError("List is empty");
    }

    let current = this.head as Node<T>;

    for (let i = 0; i < index - 1; i++) {
      current = current.next as Node<T>;
    }

    const removedValue = (current.next as Node<T>).value;
    current.next = (current.next as Node<T>).next;
    this.size--;
    return removedValue;
  }

  /**
   * Remove the first node from the linked list.
   *
   * @returns The value of the node that was removed
   * @throws RangeError if the list is empty
   */
  removeFirst(): T {
    if (!this.head) {
      throw new RangeError("List is empty");
    }

    const removedValue = this.head.value;
    this.head = this.head.next;
    this.size--;
    return removedValue;
  }

  /**
   * Remove the last node from the linked list.
   *
   * @returns The value of the node that was removed, otherwise undefined if empty
   * @throws RangeError if the list is empty
   */
  removeLast(): T {
    if (!this.head) {
      throw new RangeError("List is empty");
    }

    if (this.size === 1) {
      const removedValue = this.head.value as T;
      this.head = null;
      this.size--;
      return removedValue;
    }

    let current = this.head as Node<T>;
    while (current?.next?.next) {
      current = current.next as Node<T>;
    }

    const removedValue = (current.next as Node<T>)?.value as T;
    current.next = null;
    this.size--;
    return removedValue;
  }

  /**
   * Get the value of the node at the specified index.
   *
   * @param index The index at which to get the value of
   * @returns The value of the node at the specified index
   * @throws RangeError if the index is out of bounds
   */
  public get(index: number): T {
    if (index < 0 || index >= this.size) {
      throw new RangeError("Index out of bounds");
    }

    let current = this.head as Node<T>;
    for (let i = 0; i < index; i++) {
      current = current.next as Node<T>;
    }
    return current.value;
  }

  /**
   * Get the value of the first node in the linked list.
   *
   * @returns The value of the first node in the linked list
   * @throws RangeError if the list is empty
   */
  public getFirst(): T {
    if (!this.head) {
      throw new RangeError("List is empty");
    }

    return this.head.value;
  }

  /**
   * Get the value of the last node in the linked list.
   *
   * @returns The value of the last node in the linked list
   * @throws RangeError if the list is empty
   */
  public getLast(): T {
    if (!this.head) {
      throw new RangeError("List is empty");
    }

    let current = this.head;
    while (current.next) {
      current = current.next as Node<T>;
    }
    return current.value;
  }

  /**
   * Format the linked list as a string.
   *
   * @returns The linked list as a string
   *
   * Example:
   * For a linked list with values [1, 2, 3], the string representation would be "1 -> 2 -> 3"
   */
  public formatLinkedList(): string {
    if (!this.head) return "Empty List";

    let current = this.head;
    let result = `${current.value}`;
    while (current.next) {
      current = current.next;
      result += ` -> ${current.value}`;
    }
    return result;
  }

  /**
   * Get the size of the linked list.
   *
   * @returns The size of the linked list as an integer
   */
  public getSize(): number {
    return this.size;
  }

  /**
   * Check if the linked list is empty.
   *
   * @returns True if the linked list is empty, false otherwise
   */
  public isEmpty(): boolean {
    return this.size === 0;
  }

  public getHead(): Node<T> | null {
    return this.head;
  }
}
