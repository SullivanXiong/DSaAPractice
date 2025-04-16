import { MaxHeap } from "./maxHeap";

describe("MaxHeap", () => {
  let heap: MaxHeap<number>;

  beforeEach(() => {
    heap = new MaxHeap<number>();
  });

  test("should initialize an empty heap", () => {
    expect(heap.getMax()).toBeNull();
    expect(() => heap.removeMax()).toThrow("Heap is empty");
  });

  test("should insert elements into the heap and maintain the heap property", () => {
    heap.insert(10);
    heap.insert(5);
    heap.insert(15);
    heap.insert(3);

    expect(heap.getMax()).toBe(15); // The largest element should be at the root
  });

  test("should remove the maximum element and maintain the heap property", () => {
    heap.insert(10);
    heap.insert(5);
    heap.insert(15);
    heap.insert(3);

    expect(heap.getMax()).toBe(15);

    heap.removeMax();
    expect(heap.getMax()).toBe(10);

    heap.removeMax();
    expect(heap.getMax()).toBe(5);

    heap.removeMax();
    expect(heap.getMax()).toBe(3);

    heap.removeMax();
    expect(() => heap.removeMax()).toThrow("Heap is empty");
  });

  test("should handle duplicate elements correctly", () => {
    heap.insert(10);
    heap.insert(10);
    heap.insert(15);
    heap.insert(15);

    expect(heap.getMax()).toBe(15);
    heap.removeMax();
    expect(heap.getMax()).toBe(15);

    heap.removeMax();
    expect(heap.getMax()).toBe(10);

    heap.removeMax();
    expect(heap.getMax()).toBe(10);

    heap.removeMax();
    expect(() => heap.removeMax()).toThrow("Heap is empty");
  });

  test("should handle a single element correctly", () => {
    heap.insert(42);

    expect(heap.getMax()).toBe(42);
    heap.removeMax();
    expect(() => heap.removeMax()).toThrow("Heap is empty");
  });

  test("should maintain the heap property with multiple insertions and removals", () => {
    heap.insert(20);
    heap.insert(15);
    heap.insert(30);
    heap.insert(10);
    heap.insert(25);

    expect(heap.getMax()).toBe(30);
    heap.removeMax();
    expect(heap.getMax()).toBe(25);

    heap.insert(35);
    expect(heap.getMax()).toBe(35);

    heap.removeMax();
    expect(heap.getMax()).toBe(25);
  });

  test("should throw an error when removing from an empty heap", () => {
    expect(() => heap.removeMax()).toThrow("Heap is empty");
  });
});
