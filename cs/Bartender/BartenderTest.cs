using NUnit.Framework;

namespace Katas.Bartender
{
    [TestFixture]
    public class BartenderTest
    {
        [Test]
        public void should_charge_9_99_for_a_mockito()
        {
            var bartender = new Bartender();
            var cost = bartender.MakeADrink("mockito");
            Assert.That(cost, Is.EqualTo(9.99M));
        }
    }
}
