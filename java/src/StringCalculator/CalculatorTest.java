package StringCalculator;

import org.junit.Test;
import static org.junit.Assert.*;
import static StringCalculator.Calculator.calculate;

public class CalculatorTest {
    @Test
    public void start_here() {
        assertEquals(42, calculate(""));
    }
}
