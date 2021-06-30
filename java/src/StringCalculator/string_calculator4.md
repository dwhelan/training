### Step 4 - line feed separator
Update `calculate` to allow a line feed, `\n`, 
separator as well as a comma, `,`.

For example `calculate(“1\n2,3”)` should return `6`.

All existing scenarios should still be supported.