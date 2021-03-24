package GildedRose;

import org.junit.Test;
import static org.junit.Assert.*;

public class GildedRoseTest {
    @Test
    public void start_here() {
        Item[] items = new Item[] { new Item("foo", 0, 0) };
        GildedRose app = new GildedRose(items);
        app.updateQuality();
        assertEquals("foo", app.items[0].name);
    }
}
