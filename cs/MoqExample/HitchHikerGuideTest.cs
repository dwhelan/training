using Moq;
using NUnit.Framework;

namespace Katas.MoqExample
{
    public class SpyLogger : ILogger
    {
        public string Message { get; private set; }

        public void Log(string message)
        {
            Message = message;
        }
    }

    [TestFixture]
    public class HitchHikerGuideAnswerTest
    {
        [Test]
        [Ignore("Because this will throw an exception")]
        public void It_should_return_the_answer_to_life_the_universe_and_everything_with_real_logger()
        {
            // Arrange
            var logger = new Logger();
            var guide = new HitchHikerGuide(logger);

            // Act
            var answer = guide.Answer();

            // Assert
            Assert.That(answer, Is.EqualTo(42));
        }

        [Test]
        public void It_should_return_the_answer_to_life_the_universe_and_everything_with_null_logger()
        {
            // Arrange
            var guide = new HitchHikerGuide(new NullLogger());

            // Act
            var answer = guide.Answer();

            // Assert
            Assert.That(answer, Is.EqualTo(42));
        }
    }

    [TestFixture]
    public class HitchHikerGuideLogTest
    {
        [Test]
        public void It_should_log_when_calculating_with_spy_logger()
        {
            var logger = new SpyLogger();
            var guide = new HitchHikerGuide(logger);

            guide.Answer();

            Assert.That(logger.Message, Is.EqualTo("Calculating the meaning of life, the universe and everything"));
        }

        [Test]
        public void It_should_log_when_calculating_with_mock_logger()
        {
            // Arrange
            var mock = new Mock<ILogger>();
            var guide = new HitchHikerGuide(mock.Object);

            // Act
            guide.Answer();

            // Assert
            mock.Verify(logger => logger.Log("Calculating the meaning of life, the universe and everything"));
        }

        [Test]
        public void It_should_log_when_calculating_with_strict_mock_logger()
        {
            // Arrange
            var mock = new Mock<ILogger>(MockBehavior.Strict);
            mock.Setup(x => x.Log(It.IsAny<string>()));
            var guide = new HitchHikerGuide(mock.Object);

            // Act
            guide.Answer();

            // Assert
            mock.Verify(logger => logger.Log("Calculating the meaning of life, the universe and everything"));
        }

        [Test]
        public void It_should_log_something_when_calculating_with_mock_logger()
        {
            // Arrange
            var mock = new Mock<ILogger>();
            var guide = new HitchHikerGuide(mock.Object);

            // Act
            guide.Answer();

            // Assert
            mock.Verify(logger => logger.Log(It.IsAny<string>()));
        }
    }
}
