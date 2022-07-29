// All code should be written in this file.

// moves
let playerOneMoveOneType,
   playerOneMoveOneValue,
   playerOneMoveTwoType,
   playerOneMoveTwoValue,
   playerOneMoveThreeType,
   playerOneMoveThreeValue,
   playerTwoMoveOneType,
   playerTwoMoveOneValue,
   playerTwoMoveTwoType,
   playerTwoMoveTwoValue,
   playerTwoMoveThreeType,
   playerTwoMoveThreeValue;

// mengambil data inputan setiap player 1 dan player 2. dan menampungnya ke variable

function setPlayerMoves(
   player,
   moves1,
   value1,
   moves2,
   value2,
   moves3,
   value3
) {
   if (player === "Player One") {
      // moves
      playerOneMoveOneType = moves1;
      playerOneMoveTwoType = moves2;
      playerOneMoveThreeType = moves3;

      // values
      playerOneMoveOneValue = value1;
      playerOneMoveTwoValue = value2;
      playerOneMoveThreeValue = value3;
   } else if (player === "Player Two") {
      // moves
      playerTwoMoveOneType = moves1;
      playerTwoMoveTwoType = moves2;
      playerTwoMoveThreeType = moves3;

      // values
      playerTwoMoveOneValue = value1;
      playerTwoMoveTwoValue = value2;
      playerTwoMoveThreeValue = value3;
   }
}

// mengecheck kemenangan setiap round antara player 1 dan player 2

function getRoundWinner(numRound) {
   switch (numRound) {
      case 1:
         return checkWhosWin(
            playerOneMoveOneType,
            playerOneMoveOneValue,
            playerTwoMoveOneType,
            playerTwoMoveOneValue
         );
         break;
      case 2:
         return checkWhosWin(
            playerOneMoveTwoType,
            playerOneMoveTwoValue,
            playerTwoMoveTwoType,
            playerTwoMoveTwoValue
         );
         break;
      case 3:
         return checkWhosWin(
            playerOneMoveThreeType,
            playerOneMoveThreeValue,
            playerTwoMoveThreeType,
            playerTwoMoveThreeValue
         );
         break;
      default:
         return null;
         break;
   }
}

// membuat logic random value pada player komputer

function setComputerMoves() {
   const data = ["rock", "paper", "scissors"];

   playerTwoMoveOneType = data[Math.floor(Math.random() * 3)];
   playerTwoMoveTwoType = data[Math.floor(Math.random() * 3)];
   playerTwoMoveThreeType = data[Math.floor(Math.random() * 3)];

   playerTwoMoveOneValue = Math.floor(Math.random() * 97);
   playerTwoMoveTwoValue = Math.floor(
      Math.random() * (96 - playerTwoMoveOneValue)
   );
   playerTwoMoveThreeValue = 99 - playerTwoMoveTwoValue - playerTwoMoveOneValue;
}

// membuat rule siapa yang menang antara player 1 dan player 2

function checkWhosWin(p1, v1, p2, v2) {
   // buat rules untuk seri agar mengambil strengthnya
   // move 1 : rock = 30
   // move 2 : rock = 60
   // move 3 : paper = 9

   return p1 === p2
      ? v1 > v2
         ? "Player One"
         : v1 < v2
         ? "Player Two"
         : "Tie"
      : (p1 === "rock" && p2 !== "paper") ||
        (p1 === "paper" && p2 !== "scissors") ||
        (p1 === "scissors" && p2 !== "rock")
      ? "Player One"
      : "Player Two";
}

// menampilkan hasil kemenangan dari total seluruh round

function getGameWinner() {
   let arrWin = [getRoundWinner(1), getRoundWinner(2), getRoundWinner(3)];

   let p1 = arrWin.filter(function (item) {
      return item === "Player One";
   }).length;

   let p2 = arrWin.filter(function (item) {
      return item === "Player Two";
   }).length;

   return p1 > p2 ? "Player One" : p1 < p2 ? "Player Two" : "Tie";
}
