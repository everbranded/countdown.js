/**
                       _      _                       _     
                      | |    | |                     (_)    
  ___ ___  _   _ _ __ | |_ __| | _____      ___ __    _ ___ 
 / __/ _ \| | | | '_ \| __/ _` |/ _ \ \ /\ / / '_ \  | / __|
| (_| (_) | |_| | | | | || (_| | (_) \ V  V /| | | |_| \__ \
 \___\___/ \__,_|_| |_|\__\__,_|\___/ \_/\_/ |_| |_(_) |___/
                                                    _/ |    
                                                   |__/        
Filename: countdown.js
Description: A jQuery extension that replaces any
element in the DOM with a timed countdown.
Author: Zach Alam
Example: http://everbranded.com/gift-card-contest
*/


$(document).ready(function() {

	// possible element attributes
    // countdown: data-year, data-month, data-date, data-hour, data-minute
    // format: data-format "dhis"
    // repeat: data-repeat, data-repeat-unit
    

    // define language constnats that are injected into the DOM.
    const LANG_DAYS = "days";
    const LANG_HOURS = "hours";
    const LANG_MINS = "minutes";
    const LANG_SECS = "seconds";
    
    // get_current_utc()
    // gets current utc time
    function get_current_utc()
    {
        // build new date object
        var now = new Date;
        var timestamp_utc = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 
                                     now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
        return timestamp_utc;
    }        
    
    // get_future_utc()
    // gets future utc time
    function get_future_utc(y,m,d,h,i)
    {
        return Date.UTC(y,m,d,h,i);
    }
    
    // finalize_future_utc()
    // we may want this countdown to repeat every x number of seconds.
    // this is the case when a data-repeat element is present.
    function rollover_utc(current_timestamp,future_timestamp,repeat_in)
    {
        while(future_timestamp < current_timestamp)
        {
            // recursive case:
            // calculate a new future timestamp, using
            // a set number of seconds (repeat_in given in ms).
            var future_timestamp = future_timestamp + (repeat_in * 1000);
        }

        // return future_timestmap when its larger than the current_timestamp
        return future_timestamp;
        
    }
    
    
    // build_countdown_array()
    // takes a set number of milliseconds and determines the number of
    // days, hours, minutes, seconds left.
    function build_countdown_array(milliseconds_left)
    {
        // calculate how many seconds are left.
        var seconds = milliseconds_left / 1000;
        
        // build an object to store how much time unit is left.
        var countdown = new Array();
        
        // calculate days = 86400s = 1 day
        countdown["days"] = Math.floor(seconds / 86400);
        seconds %= 86400;
                
        // calculate hours: 3600s = 1 hour
        countdown["hours"] = Math.floor(seconds / 3600);
        seconds %= 3600;
        
        // calculate minutes; 60s = 1 minute
        countdown["minutes"] = Math.floor(seconds / 60);
        seconds %= 60;
        
        // the remiainder contains number of seconds left.
        countdown["seconds"] = seconds;
        
        // return array
        return countdown;
        
    }
    
    // update each countdown element every 1 second. 
    setInterval(function() { 
    
        // find all HTML elements with countdown class
        $(".countdown").each(function() {
    
            // get time attributes from element
            var year = $(this).attr("data-year");
            var month = $(this).attr("data-month") - 1;
            var date = $(this).attr("data-date");
            var hour = $(this).attr("data-hour");
            var minute = $(this).attr("data-minute");
    
            // get repeat attribute from element
            var repeat = $(this).attr("data-repeat");
            
            // get format attribute from element
            var format = $(this).attr("data-format");
            
            // -------------------------------------------
            
            // build current date timestamp
            var current_timestamp = get_current_utc();
            
            // build future date timestamp
            var future_timestamp = get_future_utc(year,month,date,hour,minute);
            
            // if a repeat is set, a rollover is enabled
            // calculate the newest timestamp that is not in the past.
            if(repeat) future_timestamp = rollover_utc(current_timestamp,future_timestamp,repeat);
            
            // calculate how many seconds are left
            var milliseconds_left = future_timestamp - current_timestamp;
            
            
            // build countdown array
            var countdown = build_countdown_array(milliseconds_left); 
            
            // build countdown string
            var countdown_string = 
                countdown["days"] + " " + LANG_DAYS + " " + 
                countdown["hours"] + " " + LANG_HOURS + " " +
                countdown["minutes"] + " " + LANG_MINS + " " +
                countdown["seconds"] + " " + LANG_SECS;
            
            // set this elements text to the countdown string
            $(this).text(countdown_string);
    
        }); // end $(".countdown").each()

    }, 1000); // end setInterval()
        
}); // end $(document).ready()
