package Fizzbuzz;

import org.junit.jupiter.api.*;

import static org.junit.jupiter.api.Assertions.*;

public class FizzbuzzTest {
    @Test
    public void normally_returns_a_number() {
        assertEquals("1", Fizzbuzz.fizzbuzz(1));
        assertEquals("2", Fizzbuzz.fizzbuzz(2));
        assertEquals("4", Fizzbuzz.fizzbuzz(4));
    }

    @Test
    public void returns_fizz_when_divisible_by_3() {
        assertEquals("fizz", Fizzbuzz.fizzbuzz(3));
        assertEquals("fizz", Fizzbuzz.fizzbuzz(6));
    }

    @Test
    public void returns_buzz_when_divisible_by_5() {
        assertEquals("buzz", Fizzbuzz.fizzbuzz(5));
        assertEquals("buzz", Fizzbuzz.fizzbuzz(10));
    }

    @Test
    public void returns_fizzbuzz_when_divisible_by_15() {
        assertEquals("fizzbuzz", Fizzbuzz.fizzbuzz(15));
        assertEquals("fizzbuzz", Fizzbuzz.fizzbuzz(30));
    }
}
