using System;

namespace Katas.MoqExample
{
    public class Logger : ILogger
    {
        public void Log(string message)
        {
            throw new Exception("Should not use be called in test");
        }
    }
}