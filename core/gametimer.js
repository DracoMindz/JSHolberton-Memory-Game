//game timer: counts up
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;

// New game functionallity
const card = document.getElementsByClassName('card')[0];
card.addEventListener('click', () => {
    setInterval(setTime, 1000);
});
//gameStarted = true
// setInterval(setTime, 1000);

//set minutes 
function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
}

function set_timer() {
    minutesLabel = document.getElementById("minutes");
    secondsLabel = document.getElementById("seconds");
    my_int = setInterval(function() { setTime(minutesLabel, secondsLabel) }, 1000);
}

function setTime() {
    ++totalSeconds;
    secondsLabel.innerHTML = pad(totalSeconds % 60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}


gameStarted = false;

function stop_timer() {
    clearInterval(my_int);
}