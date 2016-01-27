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


    // allow external access to private variables & methods by returning them:
    return {
        timeStarted: timeStarted,
        timeElapsed: timeElapsed,
        startTimer:  startTimer,
        stopTimer:   stopTimer,
        timeDiff: timeDiff
        //timeStopped: timeStopped
    };
}());
