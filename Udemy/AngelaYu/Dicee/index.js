var randomNumber1 = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
var randomNumber2 = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;

var leftDiceImage = document.querySelector(".dice .img1");
var rightDiceImage = document.querySelector(".dice .img2");
var h1 = document.querySelector("h1");

var leftImageFilePath = "images\\dice" + randomNumber1 + ".png"
var rightImageFilePath = "images\\dice" + randomNumber2 + ".png"

leftDiceImage.setAttribute("src", leftImageFilePath);
rightDiceImage.setAttribute("src", rightImageFilePath);

if(randomNumber1 > randomNumber2) {
  h1.innerHTML = "🚩Play 1 Wins!";
}
else if(randomNumber1 < randomNumber2) {
  h1.innerHTML = "Player 2 Wins!🚩";
}
else {
  h1.innerHTML = "Draw!";
}
