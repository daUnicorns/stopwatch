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
        startFlag = 0;

    function humanTime(time){
        // for integers < 10 add 0 padding for stopwatch display e.g. 01:07
        return (time ? (time.toString().length > 1 ? time : "0"+time) : "00");
    }

    var updateTime = function(hours,mins,secs,centiSecs){
      // Gets stopwatch formatted time and updates webpage dispaly
      hours = humanTime(hours);
      mins= humanTime(mins);
      secs = humanTime(secs);
      centiSecs = humanTime(centiSecs);
      h2.textContent = hours+":"+ mins +":"+secs +":"+centiSecs;
    };

    var counter = function(){
      // Stopwatch Counter
          centiSecs++;
          milliSecs = 0;
          if (centiSecs>99){
            secs++;
            centiSecs = 0;
            if (secs> 59) {
              mins ++;
              secs = 0;
              if(mins > 59) {
                hours++;
                mins = 0;
              }
            }
          }
          updateTime(hours,mins,secs,centiSecs);
    };

    // allow external access to private variables & methods by returning them:
    return {
        timeStarted: timeStarted,
        timeElapsed: timeElapsed,
        humanTime : humanTime,
        counter : counter,
        updateTime: updateTime,
        startFlag: startFlag,
    };
}());

var t;
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var clear = document.getElementById('clear');
h2 = document.getElementById('stopwatch');

start.addEventListener('click', function(){
  if (T.startFlag === 0){
    T.startFlag = 1;
    t = setInterval(T.counter, 10);
  }
});
stop.addEventListener('click', function(){
  clearInterval(t);
  T.startFlag = 0;
});
clear.addEventListener('click',function(){
  h2.textContent = "00:00:00:00";
  hours = mins = secs = centiSecs = 0;
});
// Onclick button events, startFlag to ensure 'start' can only be clicked once.
// Tried to convert onclick events to event listeners
