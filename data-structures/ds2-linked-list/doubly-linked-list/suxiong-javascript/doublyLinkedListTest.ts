import DoublyLinkedList from "./doublyLinkedList";

// filepath: e:\apps\DSaAPractice\data-structures\ds2-linked-list\doubly-linked-list\javascript\doublyLinkedList.test.ts

describe("DoublyLinkedList", () => {
  let list: DoublyLinkedList<number>;

  beforeEach(() => {
    list = new DoublyLinkedList<number>();
  });

  it("should append nodes to the list", () => {
    list.append(10);
    list.append(20);
    expect(list.size()).toBe(2);
    expect(list.find(10)?.value).toBe(10);
    expect(list.find(20)?.value).toBe(20);
  });

  it("should prepend nodes to the list", () => {
    list.prepend(10);
    list.prepend(20);
    expect(list.size()).toBe(2);
    expect(list.find(20)?.value).toBe(20);
    expect(list.find(10)?.value).toBe(10);
  });

  it("should remove a node by value", () => {
    list.append(10);
    list.append(20);
    list.remove(10);
    expect(list.size()).toBe(1);
    expect(list.find(10)).toBeNull();
    expect(list.find(20)?.value).toBe(20);
  });

  it("should find a node by value", () => {
    list.append(10);
    list.append(20);
    const node = list.find(20);
    expect(node?.value).toBe(20);
    expect(list.find(30)).toBeNull();
  });

  it("should insert a node at a specific index", () => {
    list.append(10);
    list.append(30);
    list.insert(1, 20);
    expect(list.size()).toBe(3);
    expect(list.find(20)?.value).toBe(20);
  });

  it("should remove a node at a specific index", () => {
    list.append(10);
    list.append(20);
    list.append(30);
    list.removeAt(1);
    expect(list.size()).toBe(2);
    expect(list.find(20)).toBeNull();
  });

  it("should return the correct size of the list", () => {
    expect(list.size()).toBe(0);
    list.append(10);
    expect(list.size()).toBe(1);
    list.append(20);
    expect(list.size()).toBe(2);
  });

  it("should handle edge cases for invalid indices", () => {
    list.append(10);
    expect(() => list.insert(-1, 20)).toThrow();
    expect(() => list.removeAt(5)).toThrow();
  });

  it("should handle operations on an empty list", () => {
    expect(list.size()).toBe(0);
    expect(list.find(10)).toBeNull();
    expect(() => list.remove(10)).not.toThrow();
    expect(() => list.removeAt(0)).toThrow();
  });

  it("should handle boundary conditions for insertion", () => {
    list.insert(0, 10); // Insert at the beginning
    expect(list.size()).toBe(1);
    expect(list.find(10)?.value).toBe(10);

    list.insert(1, 20); // Insert at the end
    expect(list.size()).toBe(2);
    expect(list.find(20)?.value).toBe(20);
  });

  it("should handle boundary conditions for removal", () => {
    list.append(10);
    list.append(20);
    list.append(30);

    list.removeAt(2); // Remove last node
    expect(list.size()).toBe(2);
    expect(list.find(30)).toBeNull();
  });

  it("should handle duplicate values correctly", () => {
    list.append(10);
    list.append(20);
    list.append(10);

    list.remove(10); // Remove the first occurrence
    expect(list.size()).toBe(2);
    expect(list.find(10)?.value).toBe(10); // Second occurrence remains
  });

  it("should verify reverse traversal", () => {
    list.append(10);
    list.append(20);
    list.append(30);

    const node = list.find(30);
    expect(node?.prev?.value).toBe(20);
    expect(node?.prev?.prev?.value).toBe(10);
  });

  it("should clear the list", () => {
    list.append(10);
    list.append(20);
    list.append(30);

    list.clear(); // Assuming a `clear` method exists
    expect(list.size()).toBe(0);
    expect(list.find(10)).toBeNull();
  });
});
