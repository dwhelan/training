package Fizzbuzz;

import org.junit.Test;
import static org.junit.Assert.*;

import static Fizzbuzz.Fizzbuzz.calculate;

public class FizzbuzzTest {
    @Test
    public void start_here() {
        assertEquals("fizz", calculate(42));
    }
}
