export function npcRand() {
  let valueNPC = "";
  const number = Math.floor(Math.random() * 100) % 3;
  switch (number) {
    case 0:
      valueNPC = "Rock";
      break;
    case 1:
      valueNPC = "Paper";
      break;
    case 2:
      valueNPC = "Scissors";
      break;
    default:
      console.log("ERROR: Unknown");
      break;
  }
  console.log(valueNPC + " " + number);
  return valueNPC;
}