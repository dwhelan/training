using System.Collections.Generic;
using GildedRose.Console;
using NUnit.Framework;
using ApprovalTests;
using ApprovalTests.Reporters;

namespace Katas.GildedRose
{
    [TestFixture]
    [UseReporter(typeof(DiffReporter))]
    public class ApprovalTests
    {
        [Test]
        public void Inventory_should_update()
        {
            var target = new Program()
            {
                Items = new List<Item>
                {
                    new Item { Name = "+5 Dexterity Vest", SellIn = 10, Quality = 20},
                    new Item { Name = "Aged Brie", SellIn = 2, Quality = 50 },
                    new Item { Name = "Aged Brie", SellIn = 0, Quality = 50 },
                    new Item { Name = "Aged Brie", SellIn = -1, Quality = 5 },
                    new Item { Name = "Backstage passes to a TAFKAL80ETC concert", SellIn = 5, Quality = 20 },
                    new Item { Name = "Backstage passes to a TAFKAL80ETC concert", SellIn = 5, Quality = 49 },
                    new Item { Name = "Backstage passes to a TAFKAL80ETC concert", SellIn = 10, Quality = 20 },
                    new Item { Name = "Backstage passes to a TAFKAL80ETC concert", SellIn = 10, Quality = 49 },
                    new Item { Name = "Backstage passes to a TAFKAL80ETC concert", SellIn = 11, Quality = 20 },
                    new Item { Name = "Backstage passes to a TAFKAL80ETC concert", SellIn = 0, Quality = 20 },
                    new Item { Name = "Sulfuras, Hand of Ragnaros", SellIn = 0, Quality = 1 },
                    new Item { Name = "Sulfuras, Hand of Ragnaros", SellIn = -1, Quality = 1 },
                    new Item { Name = "Elixir of the Mongoose", SellIn = 0, Quality = 0 },
                    new Item { Name = "Elixir of the Mongoose", SellIn = 0, Quality = 7 },
                }
            };

            target.UpdateQuality();

            Approvals.VerifyAll(target.Items, "");
        }
    }
}
