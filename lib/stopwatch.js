var T = (function () { // create a basic module ("IIFE") for our Timer
    'use strict';

    var timeElapsed  = 0, // number of miliseconds since timerStarted
        timeStarted = 0, // timestamp when timer was started
        timeStopped = 0, // time when timer stopped
        hours = 0,
        mins = 0,
        secs = 0,
        centiSecs = 0,
        milliSecs = 0,
        t,
        h2 = document.getElementById('stopwatch'),
        start = document.getElementById('start'),
        stop = document.getElementById('stop'),
        clear = document.getElementById('clear');

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
    // Get time difference betweeen two times
    var timeDiff = function(startTime,stopTime){
      timeElapsed = stopTime - startTime;
      return timeElapsed;
    };

    //Human readable time
    var humanTime = function(){
        milliSecs++;
        if(milliSecs >= 10) {
          centiSecs++;
          milliSecs = 0;
          if (centiSecs>=100){
            secs++;
            centiSecs = 0;
            if (secs>=60) {
              mins ++;
              secs = 0;
              if(mins >= 60) {
                hours++;
                mins = 0;
              }
            }
          }
        }
        hours = (hours ? (hours.toString().length > 1 ? hours : "0"+hours) : "00");
        mins= (mins ? (mins.toString().length > 1 ? mins : "0"+mins) : "00");
        secs = (secs ? (secs.toString().length > 1 ? secs : "0"+secs) : "00");
        centiSecs = (centiSecs ? (centiSecs.toString().length > 1 ? centiSecs : "0"+centiSecs) : "00");

        console.log(hours+":"+ mins +":"+secs +":"+centiSecs);
        //h2.textContent = hours+":"+ mins +":"+secs +":"+centiSecs;
    };

    // Deal with onclick events
    clear.onclick = function(){
      h2.textContent = "00:00:00";
    };
    start.onclick = function(){
      t = setInterval(humanTime,1);
    };

    // allow external access to private variables & methods by returning them:
    return {
        timeStarted: timeStarted,
        timeElapsed: timeElapsed,
        startTimer:  startTimer,
        stopTimer:   stopTimer,
        timeDiff: timeDiff,
        humanTime : humanTime
    };
}());

// function timer(){
//   t = setTimeout(T.humanTime,1);
// }
// timer();
