public class SimpleArrayStack {
    private int maxSize;
    private int top;
    private int[] stackArray;

    public SimpleArrayStack(int size) {
        this.maxSize = size;
        this.stackArray = new int[maxSize];
        this.top = -1;
    }

    public void push(int value) throws StackOverflowError {
        if (top < maxSize - 1) {
            stackArray[++top] = value;
        } else {
            throw new StackOverflowError("Stack is full");
        }
    }

    public int pop() throws RuntimeException {
        if (top >= 0) {
            return stackArray[top--];
        } else {
            throw new RuntimeException("Stack is empty");
        }
    }

    public int peek() {
        if (top >= 0) {
            return stackArray[top];
        } else {
            throw new RuntimeException("Stack is empty");
        }
    }

    public int getSize() {
        return top + 1;
    }

    public boolean isEmpty() {
        return top == -1;
    }
}
