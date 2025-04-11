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
    }

    public Object pop() throws RuntimeException {
        return null;
    }

    public Object peek() {
        return null;

    }

    public Object getSize() {
        return null;
    
    }

    public Boolean isEmpty() {
        return null;
    }
}
