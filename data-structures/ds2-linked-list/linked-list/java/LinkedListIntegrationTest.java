import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class LinkedListIntegrationTest {
    private LinkedList list;

    @BeforeEach
    public void setUp() {
        list = new LinkedList();
    }

    @Test
    public void testAddAndRemove() {
        list.addFirst("First");
        list.addLast("Last");
        list.add("Middle", 1);
        assertEquals("First", list.remove(0));
        assertEquals("Middle", list.remove(0));
        assertEquals("Last", list.remove(0));
    }

    @Test
    public void testAddAndGet() {
        list.addFirst("First");
        list.addLast("Last");
        list.add("Middle", 1);
        assertEquals("First", list.get(0));
        assertEquals("Middle", list.get(1));
        assertEquals("Last", list.get(2));
    }
}