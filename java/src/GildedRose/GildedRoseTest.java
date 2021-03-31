package GildedRose;

import org.junit.Test;
import java.util.Arrays;
import java.util.List;

import static org.junit.Assert.assertEquals;

public class GildedRoseTest {

	@Test
	public void should_never_changes_quailty_of_Sulfuras() throws Exception {
		Item sulfuras = new Item("Sulfuras, Hand of Ragnaros", 0, 80);

		GildedRose sut = new GildedRose(itemAsArray(sulfuras));
		
		sut.updateQuality();
		
		assertEquals(80, sulfuras.quality);
	}

	@Test
	public void should_never_changes_sellIn_of_Sulfuras() throws Exception {
		Item sulfuras = new Item("Sulfuras, Hand of Ragnaros", 0, 80);

		GildedRose sut = new GildedRose(itemAsArray(sulfuras));

		sut.updateQuality();

		assertEquals(0, sulfuras.sellIn);
	}

	@Test
	public void should_lower_the_sellIn_by_one_for_normal_items() throws Exception {
		Item normalItem = new Item("+5 Dexterity Vest", 10, 20);

		GildedRose sut = new GildedRose(itemAsArray(normalItem));

		sut.updateQuality();

		assertEquals(9, normalItem.sellIn);
	}



	@Test
	public void should_lower_the_quality_by_one_for_normal_items() throws Exception {
		Item normalItem = new Item("+5 Dexterity Vest", 10, 20);

		GildedRose sut = new GildedRose(itemAsArray(normalItem));

		sut.updateQuality();

		assertEquals(19, normalItem.quality);
	}

	@Test
	public void should_not_lower_the_quality_below_zero() throws Exception {
		Item normalItem = new Item("+5 Dexterity Vest", 10, 0);

		GildedRose sut = new GildedRose(itemAsArray(normalItem));

		sut.updateQuality();

		assertEquals(0, normalItem.quality);
	}

	@Test
	public void should_lower_the_quality_twice_as_fast_once_the_sell_in_date_has_passed() throws Exception {
		Item normalItem = new Item("+5 Dexterity Vest", -1, 25);

		GildedRose sut = new GildedRose(itemAsArray(normalItem));

		sut.updateQuality();

		assertEquals(23, normalItem.quality);
	}

	@Test
	public void should_increase_the_quality_of_aged_brie_as_it_gets_older() throws Exception {
		Item agedBrie = new Item("Aged Brie", 10, 25);

		GildedRose sut = new GildedRose(itemAsArray(agedBrie));

		sut.updateQuality();

		assertEquals(26, agedBrie.quality);
	}


	@Test
	public void should_not_increase_the_quality_of_aged_brie_over_max_quality() throws Exception {
		Item agedBrie = new Item("Aged Brie", 10, 50);

		GildedRose sut = new GildedRose(itemAsArray(agedBrie));

		sut.updateQuality();

		assertEquals(50, agedBrie.quality);
	}


	@Test
	public void should_make_backstage_passes_worthless_once_concert_has_happened() throws Exception {
		Item backStagePass = new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20);

		GildedRose sut = new GildedRose(itemAsArray(backStagePass));

		sut.updateQuality();

		assertEquals(0, backStagePass.quality);
	}

	@Test
	public void should_increase_backstage_passes_quality_by_1_when_the_concert_is_more_than_10_days_away() throws Exception {
		Item backStagePass = new Item("Backstage passes to a TAFKAL80ETC concert", 11, 20);

		GildedRose sut = new GildedRose(itemAsArray(backStagePass));

		sut.updateQuality();

		assertEquals(21, backStagePass.quality);
	}

	@Test
	public void should_increase_backstage_passes_quality_by_2_when_the_concert_is_10_days_or_less_away() throws Exception {
		Item backStagePass = new Item("Backstage passes to a TAFKAL80ETC concert", 10, 27);

		GildedRose sut = new GildedRose(itemAsArray(backStagePass));

		sut.updateQuality();

		assertEquals(29, backStagePass.quality);
	}

	@Test
	public void should_increase_backstage_passes_quality_by_3_when_the_concert_is_5_days_or_less_away() throws Exception {
		Item backStagePass = new Item("Backstage passes to a TAFKAL80ETC concert", 5, 44);

		GildedRose sut = new GildedRose(itemAsArray(backStagePass));

		sut.updateQuality();

		assertEquals(47, backStagePass.quality);
	}

	@Test
	public void should_not_increase_backstage_passes_above_max_quality() throws Exception {
		Item backStagePassMoreThan10DaysAway = new Item("Backstage passes to a TAFKAL80ETC concert", 15, 50);
		Item backStagePass10DaysAway = new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49);
		Item backStagePass5DaysAway = new Item("Backstage passes to a TAFKAL80ETC concert", 5, 48);

		Item[] items = Arrays.asList(backStagePassMoreThan10DaysAway, backStagePass10DaysAway, backStagePass5DaysAway)
				.toArray(new Item[0]);
		GildedRose sut = new GildedRose(items);

		sut.updateQuality();

		assertEquals(50, backStagePassMoreThan10DaysAway.quality);
		assertEquals(50, backStagePass10DaysAway.quality);
		assertEquals(50, backStagePass5DaysAway.quality);
	}

    private Item[] itemAsArray(Item item) {
        Item[] items = new Item[1];
        items[0] = item;

        return items;
    }

}
