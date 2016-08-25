using System;

namespace Katas.Logging
{
    public class RealLogger : Logger
    {
        public void Log(string message)
        {
            throw new Exception("Doh! You used a real logger rather than a test double");
        }
    }
}