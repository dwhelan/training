# Trivia Game Scorer 8 - Bonus
Some questions are two part questions. In order to get any points for those questions they need to get both questions correct, otherwise they get nothing for those questions.

Two part questions are in the format `“*n*v”`, where `n` = the same number, and `v` is `“X”`, `“Y”` or a point value.

Examples:

<table>
    <tr>
        <td>Input</td>
        <td>Output</td>
    </tr>
    <tr>
        <td>"*1*Y,*1*Y"</td>
        <td>2</td>
    </tr>
    <tr>
        <td>"*4*5,*4*6"</td>
        <td>80</td>
    </tr>
    <tr>
        <td>"*7*5,*7*X"</td>
        <td>0</td>
    </tr>
</table>
