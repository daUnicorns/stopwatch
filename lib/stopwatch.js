var T = (function () { // create a basic module ("IIFE") for our Timer
    'use strict';

    var timeElapsed  = 0, // number of miliseconds since timerStarted
        timeStarted = 0, // timestamp when timer was started
        timeStopped = 0, // time when timer stopped
        hours = 0,
        minutes = 0,
        seconds = 0,
        centiseconds = 0,
        milliseconds = 0,
        t,
        h2 = document.getElementById('stopwatch');

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
    // turns number of milliseconds into a human readable format
    var humanTime = function(){
        milliseconds++;
        if(milliseconds >= 10) {
          centiseconds++;
          milliseconds = 0;
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
        hours = (hours < 10) ? "0"+hours : hours;
        minutes = (minutes < 10) ? "0"+minutes : minutes;
        seconds = (seconds < 10) ? "0"+seconds : seconds;
        centiseconds = (centiseconds < 10) ? "0"+centiseconds : centiseconds;

        h2.textContent = (hours+":"+ minutes +":"+seconds +":"+centiseconds);
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

function timer(){
  t = setTimeout(T.humanTime,1);
}
timer();

var h2 = document.getElementById('stopwatch');
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var clear = document.getElementById('clear');
start.onclick = timer;
clear.onclick = function(){
  h2.textContent = "00:00:00";
}
