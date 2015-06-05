# timescale.js
A jQuery countdown with limitless options.

## Usage
Simply add the "timescale" class to any HTML element.

```html
<span class="timespan"></span>
```

## Attributes
| Attribute        | Time Period           | Range  |
| ---------------- |:---------------------:| ------:|
| data-year        | Year                  | 1-9999 |
| data-month       | Month of year         | 1-12   |
| data-date        | Date of month         | 1-31   |
| data-hour        | Hour (military)       | 0-24   |
| data-minute      | Minute                | 0-59   |
| data-second      | Second                | 0-59   |
| data-millisecond | Millisecond           | 0-999  |

## Examples
Countdown to the September 15th, of this year.
```html
<span class="timespan" data-month="9" data-month="15"></span>
```

## License
Copyright (c) 2015 Zach Alam www.zachalam.com
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
