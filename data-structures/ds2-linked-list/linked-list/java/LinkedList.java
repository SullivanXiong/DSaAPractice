import java.util.Optional;

public class LinkedList<Node> {
    private Optional<Node> head;
    private int size;

    public class Node {
        Object value;
        Optional<Node> next;

        public Node(Object _value, Optional<Node> _next) {
            value = _value;
            next = _next;
        }

        public Node(Object _value) {
            value = _value;
            next = Optional.empty();
        }
    }

    public LinkedList() {
        head = Optional.empty();
        size = 0;
    }

    public void add(Object value, int index) {
    }
    
    public void addFirst(Object value) {
    }

    public void addLast(Object value) {
    }

    public Object remove(int index) {
        return null;
    }

    public Object removeFirst() {
        return null;
    }

    public Object removeLast() {
        return null;
    }

    public Object get(int index) {
        return null;
    }

    public Object getFirst() {
        return null;
    }

    public Object getLast() {
        return null;
    }

    public void set(Object value, int index) {
    }

    public String formatLinkedList() {
        return "";
    }

    public int getSize() {
        return 0;
    }
}
