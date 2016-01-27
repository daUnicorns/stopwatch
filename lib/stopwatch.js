var T = (function () { // create a basic module ("IIFE") for our Timer
    'use strict';

    var timeElapsed  = 0, // number of miliseconds since timerStarted
        timeStarted = 0, // timestamp when timer was started
        timeStopped = 0; // time when timer stopped

    // Initialize the application
    var startTimer = function (startTime) {
      timeStarted = startTime || Date().getTime(); // argument externally supplied
      console.log("startTime: "+startTime);
      return timeStarted;
    };

    // Get stop time
    var stopTimer = function (stopTime) {
      timeStopped = stopTime || Date().getTime(); // argument externally supplied
      console.log("stopTime: "+stopTime);
      return timeStopped;
    };

    var timeDiff = function(startTime,stopTime){
      timeElapsed = stopTime - startTime;
      return timeElapsed;
    };
    var humanTime = function(milliseconds){
      var hours = 0;
      var minutes = 0;
      var seconds = 0;
      var centiseconds;
      var millseconds = 0;
      for (var i = 1 ; i <= milliseconds; i++){
        millseconds++;
        if(millseconds >= 10) {
          centiseconds++;
          millseconds = 0;
          if (centiseconds>=100){
            seconds++;
            centiseconds = 0;
            if (seconds>=60) {
              minutes ++;
              seconds = 0;
              if(minutes >= 60) {
                hours++;
                minutes = 0;
              }
            }
          }
        }
      }
      return hours + ":" + minutes +":"+seconds +":"+centiseconds;
    };



    // allow external access to private variables & methods by returning them:
    return {
        timeStarted: timeStarted,
        timeElapsed: timeElapsed,
        startTimer:  startTimer,
        stopTimer:   stopTimer,
        timeDiff: timeDiff,
        humanTime: humanTime
    };
}());
