import { SimpleArray } from "./simpleArray";

describe("SimpleArray", () => {
  let stack: SimpleArray<number>;

  beforeEach(() => {
    stack = new SimpleArray<number>();
  });

  test("should initialize an empty stack", () => {
    expect(stack.isEmpty()).toBe(true);
    expect(stack.size()).toBe(0);
  });

  test("should push elements onto the stack", () => {
    stack.push(1);
    stack.push(2);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.size()).toBe(2);
  });

  test("should pop elements from the stack", () => {
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).toBe(2);
    expect(stack.size()).toBe(1);
    expect(stack.pop()).toBe(1);
    expect(stack.isEmpty()).toBe(true);
  });

  test("should peek at the top element without removing it", () => {
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
    expect(stack.size()).toBe(2);
  });

  test("should handle popping from an empty stack", () => {
    expect(stack.pop()).toBeUndefined();
    expect(stack.isEmpty()).toBe(true);
  });

  test("should handle peeking into an empty stack", () => {
    expect(stack.peek()).toBeUndefined();
  });
});
