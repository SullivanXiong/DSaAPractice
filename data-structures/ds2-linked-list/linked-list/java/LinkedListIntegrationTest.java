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

    @Test
    public void testGetSize() {
        list.addFirst("First");
        list.addLast("Last");
        list.add("Middle", 1);
        assertEquals(3, list.getSize());
    }

    @Test
    public void testIsEmpty() {
        assertTrue(list.getSize() == 0);
        list.addFirst("First");
        assertFalse(list.getSize() == 0);
    }

    @Test
    public void testAddAndSetAndRemove() {
        list.addFirst("First");
        list.addLast("Last");
        list.add("Middle", 1);
        assertTrue(list.getSize() == 3);

        list.set("NewFirst", 0);
        list.set("NewMiddle", 1);
        list.set("NewLast", 2);
        assertTrue(list.getSize() == 3);

        assertEquals("NewFirst", list.removeFirst());
        assertTrue(list.getSize() == 2);

        assertEquals("NewMiddle", list.removeFirst());
        assertTrue(list.getSize() == 1);

        assertEquals("NewLast", list.removeFirst());
        assertTrue(list.getSize() == 0);
    }

    @Test
    public void testAddAndSetAndRemoveLast() {
        list.addFirst("First");
        list.addLast("Last");
        list.add("Middle", 1);
        assertTrue(list.getSize() == 3);

        list.set("NewFirst", 0);
        list.set("NewMiddle", 1);
        list.set("NewLast", 2);
        assertTrue(list.getSize() == 3);

        assertEquals("NewLast", list.removeLast());
        assertTrue(list.getSize() == 2);

        assertEquals("NewMiddle", list.removeLast());
        assertTrue(list.getSize() == 1);

        assertEquals("NewFirst", list.removeLast());
        assertTrue(list.getSize() == 0);
    }

    @Test
    public void testAddAndSetAndRemoveMiddle() {
        list.addFirst("First");
        list.addLast("Last");
        list.add("Middle", 1);
        assertTrue(list.getSize() == 3);

        list.set("NewFirst", 0);
        list.set("NewMiddle", 1);
        list.set("NewLast", 2);
        assertTrue(list.getSize() == 3);

        assertEquals("NewMiddle", list.remove(1));
        assertTrue(list.getSize() == 2);

        assertEquals("NewLast", list.remove(1));
        assertTrue(list.getSize() == 1);

        assertEquals("NewFirst", list.remove(0));
        assertTrue(list.getSize() == 0);
    }

    @Test
    public void testAddAndSetAndRemoveOutOfBounds() {
        list.addFirst("First");
        list.addLast("Last");
        list.add("Middle", 1);
        assertTrue(list.getSize() == 3);

        list.set("NewFirst", 0);
        list.set("NewMiddle", 1);
        list.set("NewLast", 2);
        assertTrue(list.getSize() == 3);


        assertThrows(IndexOutOfBoundsException.class, () -> list.remove(3));
        assertTrue(list.getSize() == 3);

        assertThrows(IndexOutOfBoundsException.class, () -> list.remove(-1));
        assertTrue(list.getSize() == 3);
    }

    @Test
    public void testAddAndSetAndRemoveEmpty() {
        assertTrue(list.getSize() == 0);

        assertThrows(IndexOutOfBoundsException.class, () -> list.removeFirst());
        assertTrue(list.getSize() == 0);

        assertThrows(IndexOutOfBoundsException.class, () -> list.removeLast());
        assertTrue(list.getSize() == 0);

        assertThrows(IndexOutOfBoundsException.class, () -> list.remove(0));
        assertTrue(list.getSize() == 0);
    }

    @Test
    public void testAddAndSetAndRemoveOne() {
        list.addFirst("First");
        assertTrue(list.getSize() == 1);

        assertEquals("First", list.removeFirst());
        assertTrue(list.getSize() == 0);

        list.addLast("Last");
        assertTrue(list.getSize() == 1);

        assertEquals("Last", list.removeLast());
        assertTrue(list.getSize() == 0);

        list.addFirst("First");
        assertTrue(list.getSize() == 1);

        assertEquals("First", list.remove(0));
        assertTrue(list.getSize() == 0);
    }
}