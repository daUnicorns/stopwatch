test( "timeElapsed should be Zero before we start the Timer", function() {
  equal( T.timeElapsed, 0, 'Message: timer is zero at start' );
});

test( "startTimer() starts counting from *NOW* (when instructed)", function() {
    var startTime = new Date().getTime();
    equal( T.startTimer(startTime), startTime, true );
});

test("stopTimer() stops counting from NOW", function() {
    var stopTime = new Date().getTime();
    equal( T.stopTimer(stopTime), stopTime, true);
});

test("elapsedTime() calculates the difference between stop and startTime", function() {
    var stopTime = 1234;
    var startTime = 345;
    var timePassed = stopTime - startTime;
    equal( T.timeDiff(startTime,stopTime), timePassed, true);
});

test("humanTime() outputs a human readable time format from a timestamp"), function(){
/*
01/27/2016 @ 1:41pm (UTC)
2016-01-27T13:41:46+00:00 in ISO 8601
Wed, 27 Jan 2016 13:41:46 +0000 in RFC 822, 1036, 1123, 2822
Wednesday, 27-Jan-16 13:41:46 UTC in RFC 2822
2016-01-27T13:41:46+00:00 in RFC 3339 */
    var timeStamp = 1453902106;
    var humanTimeStr = "13:41:46";
    equal(T.humanTime(timeStamp), humanTimeStr, true);


});
