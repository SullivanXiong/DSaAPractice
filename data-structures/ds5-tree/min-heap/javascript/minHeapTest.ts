import { MinHeap } from "./minHeap";

describe("MinHeap", () => {
  let heap: MinHeap<number>;

  beforeEach(() => {
    heap = new MinHeap<number>();
  });

  test("should initialize an empty heap", () => {
    expect(heap.getMin()).toBeNull();
    expect(() => heap.removeMin()).toThrow("Heap is empty");
  });

  test("should insert elements into the heap and maintain the heap property", () => {
    heap.insert(10);
    heap.insert(5);
    heap.insert(15);
    heap.insert(3);

    expect(heap.getMin()).toBe(3); // The smallest element should be at the root
  });

  test("should remove the minimum element and maintain the heap property", () => {
    heap.insert(10);
    heap.insert(5);
    heap.insert(15);
    heap.insert(3);

    expect(heap.getMin()).toBe(3);
    heap.removeMin();
    expect(heap.getMin()).toBe(5);

    heap.removeMin();
    expect(heap.getMin()).toBe(10);

    heap.removeMin();
    expect(heap.getMin()).toBe(15);

    heap.removeMin();
    expect(() => heap.removeMin()).toThrow("Heap is empty");
  });

  test("should handle duplicate elements correctly", () => {
    heap.insert(10);
    heap.insert(10);
    heap.insert(5);
    heap.insert(5);

    expect(heap.getMin()).toBe(5);
    heap.removeMin();
    expect(heap.getMin()).toBe(5);

    heap.removeMin();
    expect(heap.getMin()).toBe(10);

    heap.removeMin();
    expect(heap.getMin()).toBe(10);

    heap.removeMin();
    expect(() => heap.removeMin()).toThrow("Heap is empty");
  });

  test("should handle a single element correctly", () => {
    heap.insert(42);

    expect(heap.getMin()).toBe(42);
    heap.removeMin();
    expect(() => heap.removeMin()).toThrow("Heap is empty");
  });

  test("should maintain the heap property with multiple insertions and removals", () => {
    heap.insert(20);
    heap.insert(15);
    heap.insert(30);
    heap.insert(10);
    heap.insert(5);

    expect(heap.getMin()).toBe(5);
    heap.removeMin();
    expect(heap.getMin()).toBe(10);

    heap.insert(2);
    expect(heap.getMin()).toBe(2);

    heap.removeMin();
    expect(heap.getMin()).toBe(10);
  });

  test("should throw an error when removing from an empty heap", () => {
    expect(() => heap.removeMin()).toThrow("Heap is empty");
  });
});
