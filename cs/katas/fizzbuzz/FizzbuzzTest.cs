using FluentAssertions;
using NUnit.Framework;

namespace katas.fizzbuzz
{
    [TestFixture]
    public class FizzbuzzTest
    {
       [Test]
       [Ignore("until doing the kata")]
        public void should_do_something()
       {
           "the answer".Should().Be("42");
        }
    }
}
