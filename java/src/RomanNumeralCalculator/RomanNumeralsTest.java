package RomanNumeralCalculator;

import org.junit.*;
import static org.junit.Assert.*;
import static RomanNumeralCalculator.RomanNumerals.calculate;

public class RomanNumeralsTest {
    @Test
    public void start_here() {
        assertEquals("XLII", calculate(42));
    }
}
