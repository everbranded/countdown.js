# countdown.js
A jQuery extension that replaces any element in the DOM with a timed countdown.

## Installation
Include jQuery first then fadein.js.
```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script src="countdown.js"></script>
```

## Usage
Add the countdown class to any element. 
```html
<div class="countdown"></div>
```

## Examples
Build a countdown that that counts down second by second to August 15th, 2020 at 8:30pm GMT.
```html
<div class="countdown" data-year="2020" data-month="8" data-date="15" data-hour="20" data-minute="30">countdown loading...</div>
```

Build a countdown that that counts down (approximately) to the 15th day of every month (43829 minutes in a month).
```html
<div class="countdown" data-year="2015" data-month="7" data-date="15" data-hour="20" data-minute="00" data-repeat="43829">countdown loading...</div>
```

## Attributes
| Attribute   | Purpose                                        | Required |
| ----------- | ---------------------------------------------- | -------- |
| data-year   | In GMT, sets the year for countdown.           | yes      |
| data-month  | In GMT, sets the month for countdown.          | yes      |
| data-date   | In GMT, sets the date for countdown.           | yes      |
| data-hour   | In GMT, sets the hour for countdown.           | no       |
| data-minute | In GMT, sets the minute for countdown.         | no       |
| data-repeat | Starts a new countdown x number of seconds after original countdown ends | no |


## Live Demo
```html
http://everbranded.com/gift-card-contest
```


