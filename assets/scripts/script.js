var today = moment();
var timeDisplayEl = $('#time-display');
//timeDisplayEl.text(today.format("MMM Do, YYYY"));
//timeDisplayEl.text("Test");

//$("#time-display").text(today.format("MMMM Do, YYYY, h:mm:ss a"));




function startTimer() {
    timeInterval = setInterval(displayTime, 1000);


}

function displayTime() {
    today = moment();
    $("#time-display").text(today.format("MMMM Do, YYYY, h:mm:ss a"));
    console.log("hello");
}



startTimer();
