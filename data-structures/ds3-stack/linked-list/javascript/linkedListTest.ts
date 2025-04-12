import { LinkedListStack } from "./linkedList";

describe("LinkedListStack", () => {
  let stack: LinkedListStack<number>;

  beforeEach(() => {
    stack = new LinkedListStack<number>();
  });

  test("should initialize an empty stack", () => {
    expect(stack.isEmpty()).toBe(true);
    expect(stack.getSize()).toBe(0);
  });

  test("should push elements onto the stack", () => {
    stack.push(1);
    stack.push(2);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.getSize()).toBe(2);
  });

  test("should pop elements from the stack", () => {
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).toBe(2);
    expect(stack.getSize()).toBe(1);
    expect(stack.pop()).toBe(1);
    expect(stack.isEmpty()).toBe(true);
  });

  test("should peek at the top element without removing it", () => {
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
    expect(stack.getSize()).toBe(2);
  });

  test("should handle popping from an empty stack", () => {
    expect(stack.pop()).toBeUndefined();
    expect(stack.isEmpty()).toBe(true);
  });

  test("should handle peeking into an empty stack", () => {
    expect(stack.peek()).toBeUndefined();
  });
});
