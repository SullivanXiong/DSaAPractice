import { SimpleArrayQueue } from "./simpleArray";

describe("SimpleArrayQueue", () => {
  let queue: SimpleArrayQueue<number>;

  beforeEach(() => {
    queue = new SimpleArrayQueue<number>(10); // Initialize with a capacity of 10
  });

  test("should initialize an empty queue", () => {
    expect(queue.isEmpty()).toBe(true);
    expect(queue.getSize()).toBe(0);
  });

  test("should enqueue elements into the queue", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.isEmpty()).toBe(false);
    expect(queue.getSize()).toBe(3);
    expect(queue.peek()).toBe(1); // The first element should be at the front
  });

  test("should dequeue elements from the queue", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.dequeue()).toBe(1); // Removes the first element
    expect(queue.getSize()).toBe(2);
    expect(queue.peek()).toBe(2); // The next element is now at the front

    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.isEmpty()).toBe(true);
  });

  test("should throw an error when dequeuing from an empty queue", () => {
    expect(() => queue.dequeue()).toThrow("Queue is empty");
    expect(queue.isEmpty()).toBe(true);
  });

  test("should peek at the front element without removing it", () => {
    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.peek()).toBe(1); // The first element
    expect(queue.getSize()).toBe(2); // Size remains unchanged
  });

  test("should throw an error when peeking into an empty queue", () => {
    expect(() => queue.peek()).toThrow("Queue is empty");
    expect(queue.isEmpty()).toBe(true);
  });

  test("should handle mixed operations correctly", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toBe(1);

    queue.enqueue(3);
    expect(queue.peek()).toBe(2);

    queue.enqueue(4);
    expect(queue.getSize()).toBe(3);

    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.dequeue()).toBe(4);
    expect(queue.isEmpty()).toBe(true);
  });
});
