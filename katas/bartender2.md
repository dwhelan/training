# Bartender Bonus

## Background
This kata provides a more complex mocking challenge by handling exceptions.

It turns out that we want the manager to be notified if the logging fails when a
drink is ordered from the bartender.

## Kata
Update the `Bartender` class so it notifies the manager via the
`Notifier.Alert(message :string)` method when logging has failed.
You will need to figure out how to pass in a `Notifier` instance to
the `Bartender` under test.

For example, calling `bartender.makeADrink("mockito")` when the logger throws an
exception should cause the `Notifier.Alert` method to be called
with the string `"Logging failed!"`.

Write a test to ensure that `Notifier.Alert()` is **not** called when the logger
behaves normally and does not throw an exception.
