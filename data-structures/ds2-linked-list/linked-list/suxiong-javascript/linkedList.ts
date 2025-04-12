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
  add(value: T, index: number = NaN) {
    let newNode = new LLNode(value);
    if (index < 0 || index > this.size) {
      throw new RangeError("Index out of bounds");
    }
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current?.next || null;
      }
      newNode.next = current?.next || null;
      if (current) {
        current.next = newNode;
      }
    }
    this.size++;
  }

  /**
   * Insert a new node as the new head of the list.
   *
   * @param value The value to be inserted in the linked list
   */
  addFirst(value: T) {
    let newNode = new LLNode(value, this.head);
    this.head = newNode;
    this.size++;
  }

  /**
   * Insert a new node at the end of the list.
   *
   * @param value The value to be inserted in the linked list
   */
  addLast(value: T) {
    let newNode = new LLNode(value);
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
  remove(index: number = NaN): T | undefined {
    if (index < 0 || index >= this.size) {
      throw new RangeError("Index out of bounds");
    }

    if (!this.head) {
      throw new RangeError("List is empty");
    }

    if (index === 0) {
      const removedValue = this.head?.value;
      this.head = this.head?.next || null;
      this.size--;
      return removedValue;
    }
    let current: LLNode<T> | null = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current?.next || null;
    }
    const removedValue = current?.next?.value;
    current!.next = current?.next?.next || null;
    this.size--;
    return removedValue;
  }

  /**
   * Remove the first node from the linked list.
   *
   * @returns The value of the node that was removed
   * @throws RangeError if the list is empty
   */
  removeFirst(): T | undefined {
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
  removeLast(): T | undefined {
    if (!this.head) {
      throw new RangeError("List is empty");
    }

    if (this.size === 1) {
      const removedValue = this.head.value;
      this.head = null;
      this.size--;
      return removedValue;
    }

    let current = this.head;
    while (current?.next?.next) {
      current = current.next;
    }

    const removedValue = current?.next?.value;
    current!.next = null;
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
  get(index: number): T | undefined {
    if (index < 0 || index >= this.size) {
      throw new RangeError("Index out of bounds");
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current?.next || null;
    }
    return current?.value;
  }

  /**
   * Get the value of the first node in the linked list.
   *
   * @returns The value of the first node in the linked list
   */
  getFirst(): T | undefined {
    return this.head?.value;
  }

  /**
   * Get the value of the last node in the linked list.
   *
   * @returns The value of the last node in the linked list
   */
  getLast(): T | undefined {
    if (!this.head) return undefined;
    let current = this.head;
    while (current?.next) {
      current = current.next;
    }
    return current?.value;
  }

  /**
   * Set the value of the node at the specified index.
   *
   * @param value The value to be set in the linked list
   * @param index The index at which the value should be set
   * @throws RangeError if the index is out of bounds
   */
  set(value: T, index: number) {
    if (index < 0 || index >= this.size) {
      throw new RangeError("Index out of bounds");
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current?.next || null;
    }
    if (current) {
      current.value = value;
    }
  }

  /**
   * Format the linked list as a string.
   *
   * @returns The linked list as a string
   *
   * Example:
   * For a linked list with values [1, 2, 3], the string representation would be "1 -> 2 -> 3"
   */
  formatLinkedList(): string {
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
  getSize(): number {
    return this.size;
  }

  /**
   * Check if the linked list is empty.
   *
   * @returns True if the linked list is empty, false otherwise
   */
  isEmpty(): boolean {
    return this.size === 0;
  }
}
