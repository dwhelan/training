# `Java`

Training exercises and katas in Java.

## Dependencies
All dependencies are resolved using IntelliJ's.

### Unit tests
Unit tests use
[NUnit](http://www.nunit.org/) with [Fluent Assertions](http://www.fluentassertions.com/).

### Characterization tests
Michael Feathers coined the term
[characterization tests](https://en.wikipedia.org/wiki/Characterization_test)
to refer to tests that capture how existing code works.
This is particularly useful when working with legacy code.
We will use [Approval tests](http://approvaltests.com/) to create and run characterization tests.

### Mock objects
[Moq](https://github.com/moq/moq4) is used for creating mock object and more generally test doubles.
Version 4.2 is selected as more recent versions depend on .NET 4.5.

## Additional tools
The following tools are not required but are recommended.

### ReSharper
ReSharper is recommended due to its excellent refactoring and unit test support.
If you don't have ReSharper installed you can download a 30 day trial version [here](https://www.jetbrains.com/resharper/download/).

### Markdown
Markdown support is not built into Visual Studio. To enable better viewing of the kata descriptions
you may want to install the
[Markdown Editor](https://visualstudiogallery.msdn.microsoft.com/eaab33c3-437b-4918-8354-872dfe5d1bfe)
plugin. You can install it with the `Tools | Extensions and Updates` menu option.
