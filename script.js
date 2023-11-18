const roundString = document.getElementById("roundString");
const roundRunes = document.getElementById("roundRunes");
const roundButton = document.getElementById("roundButton");
var roundNum = 0;

function startGame(){
    roundString.classList.remove("hidden");
    roundString.classList.add("visible");
    roundRunes.classList.remove("hidden");
    roundRunes.classList.add("visible");
    roundButton.innerHTML = "Proxima rodada";
    roundNum++;
    roundButton.onclick = function() {nextRound()};
}

function nextRound(){
    var runes = Math.round(roundNum / 5) + 1;
    roundNum++;
    roundString.innerHTML = "Rodada " + roundNum;
    if(runes == 1) roundRunes.innerHTML = "Cada jogador ganha +" + runes + " runa!";
    else roundRunes.innerHTML = "Cada jogador ganha +" + runes + " runas!";
    console.log(roundNum);
    roundRunes.style.color = "red";
    setTimeout(() => {
        roundRunes.style.color = "black";
        setTimeout(() => {
            roundRunes.style.color = "red";
            setTimeout(() => {
                roundRunes.style.color = "black";
            }, 400);
        }, 400);
    }, 400);
    roundButton.disabled = true;
    roundButton.classList.add("activeButton");
    setTimeout(() => {
        roundButton.disabled = false;
        roundButton.classList.remove("activeButton");
    }, 400);
}