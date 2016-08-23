namespace Katas.MoqExample
{
    public class HitchHikerGuide
    {
        public ILogger Logger { get; }

        public HitchHikerGuide(ILogger logger)
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