/**

  _   _                               _         _     
 | |_(_)_ __ ___   ___  ___  ___ __ _| | ___   (_)___ 
 | __| | '_ ` _ \ / _ \/ __|/ __/ _` | |/ _ \  | / __|
 | |_| | | | | | |  __/\__ \ (_| (_| | |  __/_ | \__ \
  \__|_|_| |_| |_|\___||___/\___\__,_|_|\___(_)/ |___/
                                             |__/    

@author   Zach Alam <www.zachalam.com>



Copyright (c) 2015 Zach Alam <www.zachalam.com>

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

*/


// verify that the DOM is finished.
$(document).ready(function() {
 
	var debug = true;

	/**

	*/
	function get_time_param(timescale,type,overrider)
	{
		// get HTML attribute of data-timeperiod where timeperiod is any
		// one of "year,month,date,hour,minute,second,millisecond"
		var time_param = $(timescale).attr("data-"+type);

		// if debug enabled, log store of val in HTML attribute.
		if(debug) console.log("get " + type + ": " + time_param);

		// if no param is set for this time period, use value sent.
		if(!time_param) time_param = overrider;

		// log what the final time period is set to.
		if(debug) console.log("set " + type + ": " + time_param);

		// return time to use for this period.
		return time_param;
	}

	// find all elements with class of "timescale".
	$(".timescale").each(function(){


		// get current time
		var current_time = new Date();
		if(debug) console.log("current time: " + current_time);

		// get values for all timescale period options
		var year = get_time_param(this,"year",current_time.getFullYear());
		var month = get_time_param(this,"month",current_time.getMonth());
		var date = get_time_param(this,"date",current_time.getDate());
		var hour = get_time_param(this,"hour",current_time.getHours());
		var minute = get_time_param(this,"minute",current_time.getMinutes());
		var second = get_time_param(this,"second",current_time.getSeconds());
		var millisecond = get_time_param(this,"millisecond",current_time.getMilliseconds());

		// get future time
		var future_time = new Date(year, month, date, hour, minute, second, millisecond);
		if(debug) console.log("future time: " + future_time);

		// calculate future timestamp
		var future_timestamp = future_time.getTime();
		if(debug) console.log("future timestamp: " + future_timestamp);

		// calculate current timestamp
		var current_timestamp = current_time.getTime();
		if(debug) console.log("current timestamp: " + current_timestamp);


		// get difference in timestamps
		var timestamp_difference = future_timestamp - current_timestamp;
		if(debug) console.log("timestamp difference: " + timestamp_difference);


	});
 
});
