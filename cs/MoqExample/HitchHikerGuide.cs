using Katas.Logging;

namespace Katas.MoqExample
{
    public class HitchHikerGuide
    {
        private Logger Logger { get; }

        public HitchHikerGuide(Logger logger)
        {
            Logger = logger;
        }

        public int Answer()
        {
            Logger.Log("Calculating the meaning of life, the universe and everything");
            return 42;
        }
    }
}