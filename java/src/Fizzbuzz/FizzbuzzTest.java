package Fizzbuzz;

import org.junit.jupiter.api.*;

import static org.junit.jupiter.api.Assertions.*;

public class FizzbuzzTest {
    @Test
    public void should_assert_something() {
        assertEquals("1", Fizzbuzz.fizzbuzz(1));
    }
}
