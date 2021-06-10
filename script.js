const newGame = document.querySelector(".newGame");
const totScore1 = document.querySelector(".tot-score");
const totScore2 = document.querySelector(".tot-score2");
const dice = document.querySelector(".dice");
const roll = document.querySelector(".roll");
const hold = document.querySelector(".hold");
const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");
const currentScore1 = document.querySelector(".current-score");
const currentScore2 = document.querySelector(".current-score2");
const won = document.querySelector(".won");
const wonTitle = document.querySelector(".won-title");
const playGame = document.querySelector(".playGame");
const d1 = document.querySelector(".d1");
const d2 = document.querySelector(".d2");
const d3 = document.querySelector(".d3");
const d4 = document.querySelector(".d4");
const d5 = document.querySelector(".d5");
const d6 = document.querySelector(".d6");
currentScore1.textContent = 0;
currentScore2.textContent = 0;
let tot1 = 0;
let tot2 = 0;
let current1 = 0;
let current2 = 0;
let d = 0;
const dieimga = function (x) {
  switch (x) {
    case 1:
      d1.classList.add("visible");
      break;
    case 2:
      d2.classList.add("visible");
      break;
    case 3:
      d3.classList.add("visible");
      break;
    case 4:
      d4.classList.add("visible");
      break;
    case 5:
      d5.classList.add("visible");
      break;
    case 6:
      d6.classList.add("visible");
      break;
  }
};
const dieimgr = function (x) {
  switch (x) {
    case 1:
      d1.classList.remove("visible");
      break;
    case 2:
      d2.classList.remove("visible");
      break;
    case 3:
      d3.classList.remove("visible");
      break;
    case 4:
      d4.classList.remove("visible");
      break;
    case 5:
      d5.classList.remove("visible");
      break;
    case 6:
      d6.classList.remove("visible");
      break;
  }
};
roll.addEventListener("click", function () {
  dieimgr(d);
  d = Math.trunc(Math.random() * 6) + 1;
  dieimga(d);
  if (p1.classList.contains("active")) {
    if (d !== 1) {
      current1 += d;
    } else {
      current1 = 0;
      p1.classList.remove("active");
      p2.classList.add("active");
    }
    currentScore1.textContent = `${current1}`;
  } else {
    if (d !== 1) {
      current2 += d;
    } else {
      current2 = 0;
      p2.classList.remove("active");
      p1.classList.add("active");
    }
    currentScore2.textContent = `${current2}`;
  }
});
hold.addEventListener("click", function () {
  if (p1.classList.contains("active")) {
    tot1 += current1;
    current1 = 0;
    p1.classList.remove("active");
    p2.classList.add("active");
    totScore1.textContent = `${tot1}`;
    currentScore1.textContent = `0`;
    if (tot1 >= 20) {
      won.classList.add("visible");
      wonTitle.textContent = "🏆 player 1 won the match";
    }
  } else {
    tot2 += current2;
    current2 = 0;
    p2.classList.remove("active");
    p1.classList.add("active");
    totScore2.textContent = `${tot2}`;
    currentScore2.textContent = `0`;
    if (tot2 >= 20) {
      won.classList.add("visible");
      wonTitle.textContent = "🏆 player 2 won the match";
    }
  }
});
const Ngame = function () {
  current1 = 0;
  current2 = 0;
  tot1 = 0;
  tot2 = 0;
  totScore1.textContent = `0`;
  totScore2.textContent = `0`;
  currentScore1.textContent = `0`;
  currentScore2.textContent = `0`;
  p2.classList.remove("active");
  p1.classList.add("active");
  dieimgr(d);
};
newGame.addEventListener("click", Ngame);
playGame.addEventListener("click", function () {
  won.classList.remove("visible");
  Ngame();
});
