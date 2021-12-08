import { setCookie } from "./cookies.js";
export function determineWinner(
  valueNPC,
  maxPredictionVal,
  playerWins,
  computerWins
) {
  let result = "";
  console.log("NPC: " + valueNPC + " " + "Player: " + maxPredictionVal);
  const valuePlayer = maxPredictionVal;
  if (valueNPC == valuePlayer) {
    result = "It's a draw.";
  } else if (valueNPC == "Rock" && valuePlayer == "Paper") {
    result = "The Player won.";
    playerWins++;
  } else if (valueNPC == "Rock" && valuePlayer == "Scissors") {
    result = "The Computer won.";
    computerWins++;
  } else if (valueNPC == "Paper" && valuePlayer == "Rock") {
    result = "The Computer won.";
    computerWins++;
  } else if (valueNPC == "Paper" && valuePlayer == "Scissors") {
    result = "The Player won.";
    playerWins++;
  } else if (valueNPC == "Scissors" && valuePlayer == "Rock") {
    result = "The Player won.";
    playerWins++;
  } else if (valueNPC == "Scissors" && valuePlayer == "Paper") {
    result = "The Computer won.";
    computerWins++;
  } else {
    result = "undetermined";
  }
  setCookie("PlayerWins", playerWins, 5);
  setCookie("ComputerWins", computerWins, 5);

  const imgfilenamePlayer =
    "../images/" + valuePlayer.toLowerCase() + "_player.png";
  const imgfilenameComputer =
    "../images/" + valueNPC.toLowerCase() + "_computer.png";
  console.log(imgfilenamePlayer + " " + imgfilenameComputer);
  document.getElementById("playerValueImage").src = imgfilenamePlayer;
  document.getElementById("computerValueImage").src = imgfilenameComputer;

  const plaValTag = document.getElementById("playerValue");
  plaValTag.innerHTML =
    "You chose <strong>" + maxPredictionVal + "</strong>.<br />";
  setCookie("ComputerWins", computerWins, 5);
  const npcValTag = document.getElementById("npcRnd");
  npcValTag.innerHTML =
    "The Computer chose <strong>" + valueNPC + "</strong>.<br />";
  const resultTag = document.getElementById("result");
  resultTag.innerHTML = result;
  const score = document.getElementById("score");
  score.innerHTML = "Player " + playerWins + " : " + computerWins + " Computer";
  console.log(result);
}
