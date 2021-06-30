### Step 7 - multiple separators
Support multiple customer separators 
with the following format: `//[delimiter1][delimiter2]...\n`

Some examples:

| input                    | return value |
| :---                     | : ---        |
| "//[;]\n1;2;3"           | 6            |
| "//[;][%][+]\n1,2;3%4+5" | 15           |

All existing scenarios should still be supported.