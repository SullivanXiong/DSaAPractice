import { Clearable } from "./clearable";

export class DDNode<T> {
  value: T;
  next: DDNode<T> | null;
  prev: DDNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList<T> implements Clearable<T> {
  head: DDNode<T> | null;
  tail: DDNode<T> | null;
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
  append(value: T): void {
    const newNode = new DDNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  /**
   * Prepend a node to the beginning of the list
   *
   * @param value The value to be added
   * @returns None
   */
  prepend(value: T): void {
    const newNode = new DDNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
  }

  /**
   * Remove a node from the list
   *
   * @param value The value to be removed
   * @returns None
   * @throws Error if the value is not found in the list
   */
  remove(value: T): void {
    if (!this.head) return;

    let current: DDNode<T> | null = this.head;

    while (current) {
      if (current.value === value) {
        if (current.prev) {
          current.prev.next = current.next;
        } else {
          this.head = current.next;
        }

        if (current.next) {
          current.next.prev = current.prev;
        } else {
          this.tail = current.prev;
        }
        this.length--;
        return;
      }
      current = current.next;
    }
    throw new Error("Value not found in the list");
  }

  /**
   * Find a node in the list
   *
   * @param value The value to be found
   * @returns The node if found, null otherwise
   */
  find(value: T): DDNode<T> | null {
    if (!this.head) return null;
    let current: DDNode<T> | null = this.head;
    while (current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  /**
   * Insert a node at a specific index
   *
   * @param index The index at which to insert the node
   * @param value The value to be added
   * @returns None
   */
  insert(index: number, value: T): void {
    if (index < 0 || index > this.length) {
      throw new Error("Index out of bounds");
    }
    const newNode = new DDNode(value);
    if (index === 0) {
      this.prepend(value);
    } else if (index === this.length) {
      this.append(value);
    } else {
      let current: DDNode<T> | null = this.head;
      for (let i = 0; i < index; i++) {
        current = current!.next;
      }
      newNode.next = current;
      newNode.prev = current!.prev;
      if (current!.prev) {
        current!.prev.next = newNode;
      }
      current!.prev = newNode;
      this.length++;
    }
  }

  /**
   * Remove a node at a specific index
   *
   * @param index The index of the node to be removed
   * @returns None
   */
  removeAt(index: number): void {
    if (index < 0 || index >= this.length) {
      throw new Error("Index out of bounds");
    }
    if (index === 0) {
      if (this.head) {
        this.head = this.head.next;
        if (this.head) {
          this.head.prev = null;
        } else {
          this.tail = null;
        }
      }
    } else if (index === this.length - 1) {
      if (this.tail) {
        this.tail = this.tail.prev;
        if (this.tail) {
          this.tail.next = null;
        } else {
          this.head = null;
        }
      }
    } else {
      let current: DDNode<T> | null = this.head;
      for (let i = 0; i < index; i++) {
        current = current!.next;
      }
      if (current && current.prev) {
        current.prev.next = current.next;
      }
      if (current && current.next) {
        current.next.prev = current.prev;
      }
    }
    this.length--;
  }

  /**
   * Get the size of the list
   *
   * @returns The size of the list
   */
  size(): number {
    return this.length;
  }

  /**
   * Clear the list
   *
   * @returns None
   */
  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

export default DoublyLinkedList;
