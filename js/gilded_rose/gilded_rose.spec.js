require('approvals').mocha();
var os = require('os');
var GildedRose = require('./gilded_rose');

describe("Gilded Rose", function() {
  it("should update items", function() {
    var gildedRose = new GildedRose();
    var items = gildedRose.items;

    items.push(new gildedRose.Item("+5 Dexterity Vest", 10, 20));
    items.push(new gildedRose.Item("Aged Brie", 2, 50 ));
    items.push(new gildedRose.Item("Aged Brie", 0, 50 ));
    items.push(new gildedRose.Item("Aged Brie", -1, 5 ));
    items.push(new gildedRose.Item("Backstage passes to a TAFKAL80ETC concert", 5, 20 ));
    items.push(new gildedRose.Item("Backstage passes to a TAFKAL80ETC concert", 5, 49 ));
    items.push(new gildedRose.Item("Backstage passes to a TAFKAL80ETC concert", 10, 20 ));
    items.push(new gildedRose.Item("Backstage passes to a TAFKAL80ETC concert", 10, 49 ));
    items.push(new gildedRose.Item("Backstage passes to a TAFKAL80ETC concert", 11, 20 ));
    items.push(new gildedRose.Item("Backstage passes to a TAFKAL80ETC concert", 0, 20 ));
    items.push(new gildedRose.Item("Sulfuras, Hand of Ragnaros", 0, 1 ));
    items.push(new gildedRose.Item("Sulfuras, Hand of Ragnaros", -1, 1 ));
    items.push(new gildedRose.Item("Elixir of the Mongoose", 0, 0 ));
    items.push(new gildedRose.Item("Elixir of the Mongoose", 0, 7 ));

    gildedRose.update_quality();

    var strings = JSON.stringify(items).replace(/[^ \-:,\w\s]/g, "").replace(/,name/g, '\nname');

    this.verify(strings + os.EOL);
  });
});
