# Bartender

## Background
This kata provides practice in using test doubles.

## Kata
Update the `Bartender` class so it logs the name of the drink being ordered via the
`Logger.Log(message :string)` method. You will need to figure out how to pass in a `Logger` instance to the `Bartender` under test.

For example, calling `bartender.makeADrink("mockito")` should cause the `Logger.Log()`
method to be called with the string `"Making a mockito"`.

As you add the logging support make sure that all existing tests pass.

Remember to drive the new code with failing tests.

### Use a spy logger
Create a spy version of `Logger` that saves the message that was passed to its `Log()`
method. In your test assert that the message saved in the sky is correct.

### Use a mock logger
Create a mock version of `Logger` and use the mocking library functionality to assert that
the  `Log()` method is called with the right `message` parameter.
