/* --- FUNCTION FOR THE CLOCK --- */

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function checkDate() {
    var today = new Date();
    var day = today.getDate().toString().padStart(2, "0");
    var month = (today.getMonth() + 1).toString().padStart(2, "0");
    var year = today.getFullYear();
    $("#date").html(month + "-" + day + "-" + year);
}

$(document).ready(function() {
    checkDate();
});

try {
    var loadNotes = localStorage.getItem("notes");
    }
    catch(err) {
    var loadNotes = "Enter your notes here and click 'Save'";
    }
    $("#note-area").val(loadNotes);


    $("#saveNoteBtn").click(function(){
    var currentNotes = $("#note-area").val();
    localStorage.setItem("notes", currentNotes);
    });

