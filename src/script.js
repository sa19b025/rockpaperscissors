// imports
import {
  getCookie,
  setCookie,
  deleteCookies,
} from "./cookies.js";
import { predict } from "./predict.js";
import { stream, stopvideo } from "./stream.js";
import { picturevideo } from "./picturevideo.js";
import { determineWinner } from "./determinewinner.js";
import { npcRand } from "./npcrand.js";

// Handle Cookies
if (!getCookie("PlayerWins") && !getCookie("ComputerWins")) {
  setCookie("PlayerWins", 0, 5);
  setCookie("ComputerWins", 0, 5);
}
console.log("PlayerWins: " + getCookie("PlayerWins"));
console.log("ComputerWins: " + getCookie("ComputerWins"));

let playerWins = getCookie("PlayerWins");
let computerWins = getCookie("ComputerWins");

// GLOBAL VARIABLES

const constraints = {
  audio: false,
  video: {
    width: 1120,
    height: 630,
  },
};
let predictedValue = "";

const canvas = document.getElementById("canvas");
const canvas2 = document.getElementById("canvas2");
const ctx = canvas.getContext("2d");
const ctx2 = canvas2.getContext("2d");

//on Dom load
document.addEventListener("DOMContentLoaded", function () {
  loadPage1();
  if (!getCookie("PlayerWins") && !getCookie("ComputerWins")) {
    setCookie("PlayerWins", 0, 5);
    setCookie("ComputerWins", 0, 5);
  }
  getCookie("ComputerWins");
});
//Onclicklisteners

//when Start Clicked load page 2
const startButton = document.getElementById("startButton");
startButton.addEventListener("click", function () {
  loadPage2();
});

//when snapshot clicked take pic and loadPage3
const snapshotButton = document.getElementById("snapshot");
snapshotButton.addEventListener("click", function () {
  const img = picturevideo(ctx, ctx2, video, canvas, canvas2);
  loadPage3(img);
  stopvideo();
});
//Refresh buttons functionality
const refreshButtonPage3 = document.getElementById("refreshP3");
refreshButtonPage3.addEventListener("click", function () {
  refreshPage();
});
const refreshButtonPage4 = document.getElementById("refreshP4");
refreshButtonPage4.addEventListener("click", function () {
  refreshPage();
});

//delete Cookies
const deleteCookie = document.getElementById("deleteCookies");
deleteCookie.addEventListener("click", function () {
  //delete Cookies
  deleteCookies();
  document.getElementById("deleteCookies").className = "hide";
});
// Hide Pages 2-4
function loadPage1() {
  document.getElementById("pageTwo").style.display = "none";
  document.getElementById("pageThree").style.display = "none";
  document.getElementById("pageFour").style.display = "none";
}
//hide everything except for page two
function loadPage2() {
  document.getElementById("pageOne").style.display = "none";
  document.getElementById("pageTwo").style.display = "inline-block";
  document.getElementById("pageThree").style.display = "none";
  document.getElementById("pageFour").style.display = "none";
  stream(constraints, ctx, ctx2);
}
//hide everything except for page three
function loadPage3(img) {
  document.getElementById("pageOne").style.display = "none";
  document.getElementById("pageTwo").style.display = "none";
  document.getElementById("pageThree").style.display = "inline-block";
  document.getElementById("pageFour").style.display = "none";
  const maxPredictionVal = predict(img);
  maxPredictionVal.then(function (result) {
    predictedValue = result;
    console.log(predictedValue);
  });

  //Continue button functionality
  const continueButton = document.getElementById("continue");
  continueButton.addEventListener("click", function () {
    loadPage4(predictedValue);
  });
}
//hide everything except for page four
//calc Computer Symbol and determine who won
function loadPage4(predictedValue) {
  document.getElementById("pageOne").style.display = "none";
  document.getElementById("pageTwo").style.display = "none";
  document.getElementById("pageThree").style.display = "none";
  document.getElementById("pageFour").style.display = "inline-block";
  const valueNPC = npcRand();
  determineWinner(valueNPC, predictedValue, playerWins, computerWins);
}
//restart buttons function
function refreshPage() {
  window.location.reload();
  console.log("reload");
}
