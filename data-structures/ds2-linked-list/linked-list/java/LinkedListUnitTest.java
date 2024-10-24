
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class LinkedListUnitTest {
    private LinkedList list;

    @BeforeEach
    public void setUp() {
        list = new LinkedList();
    }

    @Test
    public void testAddFirst() {
        list.addFirst("First");
        assertEquals("First", list.getFirst().toString());
    }

    @Test
    public void testAddLast() {
        list.addLast("Last");
        assertEquals("Last", list.getLast().toString());
    }

    @Test
    public void testAdd() {
        list.add("Middle", 0);
        assertEquals("Middle", list.get(0));
    }

    @Test
    public void testRemove() {
        list.addFirst("First");
        list.addLast("Last");
        assertEquals("First", list.remove(0).toString());
    }

    @Test
    public void testGetSize() {
        list.addFirst("First");
        list.addLast("Last");
        assertEquals(2, list.getSize());
    }
}