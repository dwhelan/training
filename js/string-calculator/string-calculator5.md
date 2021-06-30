### Step 5 - customer separator
Support custom separator.
To specify a custom delimiter, 
the beginning of the string will contain a 
separate line starting with `//` and ending in `\n`.

For example `calculate(“//;\n1;2”)` should return `3` 
using `;` as a custom delimiter.

The custom delimiter line is optional

All existing scenarios should still be supported.