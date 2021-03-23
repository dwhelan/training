package StringCalculator;

import org.junit.Test;
import static org.junit.Assert.*;
import static StringCalculator.StringCalculator.calculate;

public class StringCalculatorTest {
    @Test
    public void start_here() {
        assertEquals(42, calculate(""));
    }
}
