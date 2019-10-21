myStorage = window.localStorage;
var hst = document.getElementById("highscores");

var highScores = [
    { name: "Matcher", score: 20 },
    { name: "Matcher 2", score: 30 },
    { name: "The newbie", score: 60 },
];

localStorage.setItem("highscores", JSON.stringify(highScores));

var retrievedScores = JSON.parse(localStorage.getItem("highscores"));

for (var i = 0; i < retrievedScores.length; i++) {
    hst.innerHTML += "<tr><td>" + retrievedScores[i].name + "</td><td>" + retrievedScores[i].score + "</td></tr>";
}