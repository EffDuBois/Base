let home = document.getElementById("score-home")
let guest = document.getElementById("score-guest")
let leaderEl= document.getElementById("leader-el")
let score = {
    home: 0,
    guest: 0
}

function increasehome(amt) {
    score.home+=amt
    home.textContent = score.home
    leader()
}               
function increaseGuest(amt) {
    score.guest+=amt
    guest.textContent = score.guest
    leader()
}      
function reset() {
    score.guest = 0
    score.home = 0
    home.textContent = score.home
    guest.textContent = score.guest
}
function leader() {
    if (score.home>score.guest){
        leaderEl.textContent = "Leader: Home"
    }
    else if (score.home<score.guest){
        leaderEl.textContent = "Leader: Guest"
    }
    else {
        leaderEl.textContent = "Leader: None"
    }
}