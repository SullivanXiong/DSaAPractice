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

    public void add(Object value, int index) throws IndexOutOfBoundsException {
        if (index < 0 || index > size) {
            throw new IndexOutOfBoundsException();
        }

        if (index == 0) {
            addFirst(value);
        } else if (index == size) {
            addLast(value);
        } else {
            Optional<Node> current = head;
            for (int i = 0; i < index - 1; i++) {
                current = current.get().next;
            }
            current.get().next = Optional.of(new Node(value, current.get().next));
            size++;
        }
    }
    
    public void addFirst(Object value) {
        head = Optional.of(new Node(value, head));
        size++;
    }

    public void addLast(Object value) {
        if (size == 0) {
            addFirst(value);
        } else {
            Optional<Node> current = head;
            while (current.get().next.isPresent()) {
                current = current.get().next;
            }
            current.get().next = Optional.of(new Node(value));
            size++;
        }
    }

    public Object remove(int index) throws IndexOutOfBoundsException {
        if (index < 0 || index >= size) {
            throw new IndexOutOfBoundsException();
        }

        Object value;
        if (index == 0) {
            return removeFirst();
        } else if (index == size - 1) {
            return removeLast();
        } else {
            Optional<Node> current = head;
            for (int i = 0; i < index - 1; i++) {
                current = current.get().next;
            }
            value = current.get().next.get().value;
            current.get().next = current.get().next.get().next;
            size--;
        }

        return value;
    }

    public Object removeFirst() throws IndexOutOfBoundsException {
        if (size == 0) {
            throw new IndexOutOfBoundsException();
        }

        Object value = head.get().value;
        head = head.get().next;
        size--;
        return value;
    }

    public Object removeLast() throws IndexOutOfBoundsException {
        if (size == 0) {
            throw new IndexOutOfBoundsException();
        }
        
        Object value;
        if (size == 1) {
            value = head.get().value;
            head = Optional.empty();
        } else {
            Optional<Node> current = head;
            while (current.get().next.get().next.isPresent()) {
                current = current.get().next;
            }
            value = current.get().next.get().value;
            current.get().next = Optional.empty();
        }
        size--;
        return value;
    }

    public Object get(int index) {
        if (index < 0 || index >= size) {
            throw new IndexOutOfBoundsException();
        }

        if (index == 0) {
            return getFirst();
        } else if (index == size - 1) {
            return getLast();
        }

        Optional<Node> current = head;
        for (int i = 0; i < index; i++) {
            current = current.get().next;
        }
        return current.get().value;
    }

    public Object getFirst() {
        return head.get().value;
    }

    public Object getLast() {
        Optional<Node> current = head;
        while (current.get().next.isPresent()) {
            current = current.get().next;
        }
        return current.get().value;
    }

    public void set(Object value, int index) {
        if (index < 0 || index >= size) {
            throw new IndexOutOfBoundsException();
        }

        Optional<Node> current = head;
        for (int i = 0; i < index; i++) {
            current = current.get().next;
        }
        current.get().value = value;
    }

    public String formatLinkedList() {
        StringBuilder sb = new StringBuilder();
        Optional<Node> current = head;
        while (current.isPresent()) {
            sb.append(current.get().value);
            if (current.get().next.isPresent()) {
                sb.append(" -> ");
            }
            current = current.get().next;
        }
        return sb.toString();
    }

    public int getSize() {
        return size;
    }
}
