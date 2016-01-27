// test( "timeElapsed should be Zero before we start the Timer", function() {
//   equal( T.timeElapsed, 0, 'Message: timer is zero at start' );
// });
//
// test( "startTimer() starts counting from *NOW* (when instructed)", function() {
//     var startTime = new Date().getTime();
//     equal( T.startTimer(startTime), startTime, true );
// });

// test("stopTimer() stops counting from NOW", function() {
//     var stopTime = new Date().getTime();
//     equal( T.stopTimer(stopTime), stopTime, true);
// });

// test("elapsedTime() calculates the difference between stop and startTime", function() {
//     var stopTime = 1234;
//     var startTime = 345;
//     var timePassed = stopTime - startTime;
//     equal( T.timeDiff(startTime,stopTime), timePassed, true);
// });

test("humanTime() takes millseconds and returns a human readable format of that e.g. 00:00:00:00", function() {
    var mSecs = 10010; /*00:00:10:01*/
    var mSecs2 = 100760; /*00:01:40:76*/
    var mSecs3 = 12600000; /*03:30:00:00 */
    equal(T.humanTime(12600000), '03:30:00:00',true);
    equal(T.humanTime(100760), '00:01:40:76',true);
    equal(T.humanTime(10010), '00:00:10:01',true);
});
