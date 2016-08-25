using System;

namespace Katas.GildedRose
{
    public class Item
    {
        public string Name { get; set; }
        public int SellIn { get; set; }
        public int Quality { get; set; }

        public override string ToString()
        {
            return String.Format("Name: '{0}', SellIn: {1}, Quality: {2}", Name, SellIn, Quality);
        }
    }
}