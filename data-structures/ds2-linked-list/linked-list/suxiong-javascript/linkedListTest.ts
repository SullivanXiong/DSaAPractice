import { LL } from "./linkedList";

describe("LinkedList", () => {
  let linkedList: LL<string>;

  beforeEach(() => {
    linkedList = new LL<string>();
  });

  test("Unit: add first", () => {
    linkedList.addFirst("First");
    expect(linkedList.getFirst()).toBe("First");
  });

  test("Unit: add last", () => {
    linkedList.addLast("Last");
    expect(linkedList.getLast()).toBe("Last");
  });

  test("Unit: add", () => {
    linkedList.add("Middle", 0);
    expect(linkedList.get(0)).toBe("Middle");
  });

  test("Unit: remove", () => {
    linkedList.addFirst("First");
    linkedList.addLast("Last");
    expect(linkedList.remove(0)).toBe("First");
  });

  test("Unit: get size", () => {
    linkedList.addFirst("First");
    linkedList.addLast("Last");
    expect(linkedList.getSize()).toBe(2);
  });

  test("Integration: add and remove", () => {
    linkedList.addFirst("First");
    linkedList.addLast("Last");
    linkedList.add("Middle", 1);
    expect(linkedList.remove(0)).toBe("First");
    expect(linkedList.remove(0)).toBe("Middle");
    expect(linkedList.remove(0)).toBe("Last");
  });

  test("Integration: add and get", () => {
    linkedList.addFirst("First");
    linkedList.addLast("Last");
    linkedList.add("Middle", 1);
    expect(linkedList.get(0)).toBe("First");
    expect(linkedList.get(1)).toBe("Middle");
    expect(linkedList.get(2)).toBe("Last");
  });

  test("Integration: get size", () => {
    linkedList.addFirst("First");
    linkedList.addLast("Last");
    linkedList.add("Middle", 1);
    expect(linkedList.getSize()).toBe(3);
  });

  test("Integration: is empty", () => {
    expect(linkedList.getSize()).toBe(0);
    linkedList.addFirst("First");
    expect(linkedList.getSize()).not.toBe(0);
  });

  test("Integration: remove empty", () => {
    expect(linkedList.getSize()).toBe(0);

    expect(() => linkedList.removeFirst()).toThrow(RangeError);
    expect(linkedList.getSize()).toBe(0);

    expect(() => linkedList.removeLast()).toThrow(RangeError);
    expect(linkedList.getSize()).toBe(0);

    expect(() => linkedList.remove(0)).toThrow(RangeError);
    expect(linkedList.getSize()).toBe(0);
  });

  test("Integration: remove one", () => {
    linkedList.addFirst("First");
    expect(linkedList.getSize()).toBe(1);

    expect(linkedList.removeFirst()).toBe("First");
    expect(linkedList.getSize()).toBe(0);

    linkedList.addLast("Last");
    expect(linkedList.getSize()).toBe(1);

    expect(linkedList.removeLast()).toBe("Last");
    expect(linkedList.getSize()).toBe(0);

    linkedList.addFirst("First");
    expect(linkedList.getSize()).toBe(1);

    expect(linkedList.remove(0)).toBe("First");
    expect(linkedList.getSize()).toBe(0);
  });

  test("clear empties the list", () => {
    linkedList.addLast("A");
    linkedList.addLast("B");
    linkedList.addLast("C");
    expect(linkedList.getSize()).toBe(3);
    linkedList.clear();
    expect(linkedList.getSize()).toBe(0);
    expect(() => linkedList.getFirst()).toThrow(RangeError);
    expect(() => linkedList.getLast()).toThrow(RangeError);
    expect(() => linkedList.get(0)).toThrow(RangeError);
  });
});
