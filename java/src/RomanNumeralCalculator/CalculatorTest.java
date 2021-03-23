package RomanNumeralCalculator;

import org.junit.*;
import static org.junit.Assert.*;
import static RomanNumeralCalculator.Calculator.calculate;

public class CalculatorTest {
    @Test
    public void start_here() {
        assertEquals("XLII", calculate(42));
    }
}
