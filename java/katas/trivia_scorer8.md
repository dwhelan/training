# Trivia Game Scorer 8 - Bonus

Some questions are two part questions. In order to get any points for those questions they need to get both questions correct, otherwise they get nothing for those  questions.

Two part questions are in the format `“*n*v”`, where `n` = the same number, and `v` is `“X”`, `“Y”` or a point value.

Examples:
`sumScore(“1*Y,*1*Y”)  //  2`
`sumScore(“*4*5,*4*6”) // 11`
`sumScore(“*7*5,*7*X”) //  0`
