/**
	Project: Timescale
	Filename: timescale.js
	Description: A jQuery extension that replaces any
	element in the DOM with a timed countdown.
	Author: Zach Alam
	Example: http://everbranded.com/gift-card-contest
*/


$(document).ready(function() {

	// possible element attributes
    // countdown: data-year, data-month, data-date, data-hour, data-minute, data-second, data-millisecond
    // format: data-format "ymdhisx"
    // repeat: data-repeat, data-repeat-unit
    
    // gets current utc time
    function get_current_utc()
    {
        var now = new Date;
        var timestamp_utc = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());
        return timestamp_utc;
    }        
    
	// find all HTML elements with timescale class
	$(".timescale").each(function() {

        // get time attributes
        var year = $(this).attr("data-year");
        var month = $(this).attr("data-month") - 1;
        var date = $(this).attr("data-date");
        var hour = $(this).attr("data-hour");
        var minute = $(this).attr("data-minute");
        var second = $(this).attr("data-second");
        var millisecond = $(this).attr("data-millisecond");
        
        // build current data object
        var current_timestamp = get_current_utc();
        
        // build future date object
        var future_timestamp = Date.UTC(year,month,date,hour,minute,second,millisecond);
        
        
        console.log(current_timestamp + " | " + future_timestamp);


	}) // end $(".timescale").each()

}); // end $(document).ready()
