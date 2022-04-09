var today = moment();
var timeDisplayEl = $('#time-display');
//timeDisplayEl.text(today.format("MMM Do, YYYY"));
//timeDisplayEl.text("Test");

//$("#time-display").text(today.format("MMMM Do, YYYY, h:mm:ss a"));

var projectModal = $('#new-project');

// $(function () {
//     $('#projectModal').dialog();
//   });

function startTimer() {
    timeInterval = setInterval(displayTime, 1000);


}



function displayTime() {
    today = moment();
    $("#time-display").text(today.format("MMMM Do, YYYY, h:mm:ss a"));
    console.log("hello");
}

projectModal.on("click", onNewProject);

function onNewProject() {
    $('#exampleModal').dialog();
}

startTimer();
