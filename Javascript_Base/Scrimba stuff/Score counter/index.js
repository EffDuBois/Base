let home = document.getElementById("score-home");
let away = document.getElementById("score-away");
let leaderEl = document.getElementById("leader-el");
let score = {
  home: 0,
  away: 0,
};

function increasehome(amt) {
  score.home += amt;
  home.textContent = score.home;
  leader();
}
function increaseAway(amt) {
  score.away += amt;
  away.textContent = score.away;
  leader();
}
function reset() {
  score.away = 0;
  score.home = 0;
  home.textContent = score.home;
  away.textContent = score.away;
}
function leader() {
  if (score.home > score.away) {
    leaderEl.textContent = "Leader: Home";
  } else if (score.home < score.away) {
    leaderEl.textContent = "Leader: Away";
  } else {
    leaderEl.textContent = "Leader: None";
  }
}
