auth.onAuthStateChanged((user) => {
  if (!user) {
    location.href = "/";
  } else {
    document.querySelector(".emailHolder").innerHTML = user.email;
    userName = user.email;
  }
});
const gameDiv = document.querySelector(".gamePortion");
const navTop = document.querySelector(".navTop");
const startBtn = document.getElementById("startBtns");
const gameOverDiv = document.querySelector(".gameOver");
const playAgain = document.querySelector(".playAgain");
let score = +document.querySelector(".score").innerHTML;
let targetColor = document.querySelector(".targetColor");
livesRem = 3;
document.querySelector(".lives").innerHTML = livesRem;
playAgain.addEventListener("click", () => {
  location.reload()
  console.log(startBtn);
  gameOverDiv.style.display = "none";
});

const colorsArr = [
  "rgb(255, 186, 8)",
  "rgb(208, 0, 0)",
  "rgb(135, 131, 209)",
  "rgb(18, 148, 144)",
  "rgb(0, 79, 45)",
  "rgb(225, 176, 126)",
  "rgb(20, 13, 79)",
];
//saving colors for targetting
let targetColorArr = [];
const createBalloon = () => {
  balloon = document.createElement("div");
  balloon.setAttribute("class", "balloon");
  let random = Math.floor(Math.random() * 5);
  generatedColor = colorsArr[random];
  //deleting and geting targetting color
  targetColorArr.unshift((generatedColor));
  balloon.style.backgroundColor = generatedColor;
  gameDiv.appendChild(balloon);
};
let colorPush = [];
const levelOne = () => {
  startBtn.style.display = "none";
  for (let i = 0; i < 24; i++) {
    createBalloon();
  }
  poping();
  for (var i; i >= targetColorArr.length; i++) {
    if (toString(targetColorArr[i]) = toString(targetColorArr[0])) {
      colorPush.push(targetColorArr[i])
      console.log(colorPush)
    }
  }
  document.querySelector(".targetColor").innerHTML = "Target Color"
  targetColor.style.backgroundColor = targetColorArr[0];
};

const poping = () => {
  gameDiv.addEventListener("mouseover", (e) => {

    if (
      getComputedStyle(e.target).getPropertyValue("background-color") == targetColorArr[0]
    ) {
      score = score + 10;
      document.querySelector(".score").innerHTML = score;
      e.target.style.visibility = "hidden";
      if (popped == totalTargetBalls) {
        alert("You Won")
        location.href("levelTwo.html");
      }
    }
    else if (livesRem != 1 && e.target.classList.contains("balloon")) {
      livesRem--
      document.querySelector(".lives").innerHTML = livesRem;
    }
    else if (e.target.classList.contains("balloon")) {
      gameDiv.style.display = "none";
      gameOverDiv.style.display = "block";
      document.querySelector(".lives").innerHTML = 0;

    }
  })
}


startBtn.addEventListener("click", () => setTimeout(levelOne, 0));
const signOut = () => {
  auth.signOut();
};
