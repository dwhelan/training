# Roman Numeral Calculator

## Background
The Romans used a special method of showing numbers, based on the following symbols:
 
 <table>
    <tr>
        <td>Arabic</td>
        <td>Roman</td>
    </tr>
    <tr>
        <td>1</td>
        <td>I</td>
    </tr>
    <tr>
        <td>5</td>
        <td>V</td>
    </tr>
    <tr>
        <td>10</td>
        <td>X</td>
    </tr>
    <tr>
        <td>50</td>
        <td>L</td>
    </tr>
    <tr>
        <td>100</td>
        <td>C</td>
    </tr>
    <tr>
        <td>500</td>
        <td>D</td>
    </tr>
    <tr>
        <td>1000</td>
        <td>M</td>
    </tr>
</table>

### Forming Numbers
Use the following table to look up the corresponding roman numerals and concatenate the results:

<table>
    <tr>
        <td width=75></td>
        <td width=50>x1</td>
        <td width=50>x2</td>
        <td width=50>x3</td>
        <td width=50>x4</td>
        <td width=50>x5</td>
        <td width=50>x6</td>
        <td width=50>x7</td>
        <td width=50>x8</td>
        <td width=50>x9</td>
    </tr>
    <tr>
        <td width=75>Ones</td>
        <td width=50>I</td>
        <td width=50>II</td>
        <td width=50>III</td>
        <td width=50>IV</td>
        <td width=50>V</td>
        <td width=50>VI</td>
        <td width=50>VII</td>
        <td width=50>VIII</td>
        <td width=50>IX</td>
    </tr>
    <tr>
        <td width=75>Tens</td>
        <td width=50>X</td>
        <td width=50>XX</td>
        <td width=50>XXX</td>
        <td width=50>XL</td>
        <td width=50>L</td>
        <td width=50>LX</td>
        <td width=50>LXX</td>
        <td width=50>LXXX</td>
        <td width=50>XC</td>
    </tr>
    <tr>
        <td width=75>Hundreds</td>
        <td width=50>C</td>
        <td width=50>CC</td>
        <td width=50>CCC</td>
        <td width=50>CD</td>
        <td width=50>D</td>
        <td width=50>DC</td>
        <td width=50>DCC</td>
        <td width=50>DCCC</td>
        <td width=50>CM</td>
    </tr>
    <tr>
        <td width=75>Thousands</td>
        <td width=50>M</td>
        <td width=50>MM</td>
        <td width=50>MMM</td>
        <td width=50></td>
        <td width=50></td>
        <td width=50></td>
        <td width=50></td>
        <td width=50></td>
        <td width=50></td>
    </tr>
</table>

For example:

1984 => 1000 + 900 + 80 + 4 => "M" + "CM" + "LXXX" + "IV" => "MCMLXXXIV"

## Kata
Create a methd `calculate(input : int) : string` method that converts the input arabic number to its roman numeral equivalent.

Some examples:

<table>
    <tr>
        <td>Input</td>
        <td>Output</td>
    </tr>
    <tr>
        <td>1</td>
        <td>"I"</td>
    </tr>
    <tr>
        <td>9</td>
        <td>"IX"</td>
    </tr>
    <tr>
        <td>1984</td>
        <td>"MCMLXXXIV"</td>
    </tr>
</table>