package gildedrose;

import org.approvaltests.Approvals;
import org.approvaltests.reporters.DiffReporter;
import org.approvaltests.reporters.UseReporter;
import org.junit.Test;

public class GildedRoseTest {

	@Test
	@UseReporter(DiffReporter.class)	
	public void test() throws Exception {
		Item[] items = new Item[] {
				new Item("+5 Dexterity Vest", 10, 20), 
				new Item("Aged Brie", 2, 50),
				new Item("Aged Brie", 0, 50),
				new Item("Aged Brie", -1, 5),
				new Item("Backstage passes to a TAFKAL80ETC concert",  5, 20),
				new Item("Backstage passes to a TAFKAL80ETC concert",  5, 49),
				new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20),
				new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
				new Item("Backstage passes to a TAFKAL80ETC concert", 11, 20),
				new Item("Backstage passes to a TAFKAL80ETC concert",  0, 20),
				new Item("Sulfuras, Hand of Ragnaros", 0, 1),
				new Item("Sulfuras, Hand of Ragnaros", -1, 1),
				new Item("Elixir of the Mongoose", 0, 0),
				new Item("Elixir of the Mongoose", 0, 7),
		};

		new GildedRose(items).updateQuality();

		Approvals.verifyAll("Items", items);
	}
}
