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

function checkWhosWin(p1, v1, p2, v2) {
   // buat rules untuk seri agar mengambil strengthnya
   // move 1 : rock = 30
   // move 2 : rock = 60
   // move 3 : paper = 9

   // if (p1 === p2) {
   //    if (v1 > v2) {
   //       return "Player One";
   //    } else if (v1 < v2) {
   //       return "Player Two";
   //    } else {
   //       return "Tie";
   //    }
   // }

   // if (p1 === "rock") {
   //    if (p2 !== "paper") {
   //       return "Player One";
   //    } else {
   //       return "Player Two";
   //    }
   // } else if (p1 === "paper") {
   //    if (p2 !== "scissors") {
   //       return "Player One";
   //    } else {
   //       return "Player Two";
   //    }
   // } else if (p1 === "scissors") {
   //    if (p2 !== "rock") {
   //       return "Player One";
   //    } else {
   //       return "Player Two";
   //    }
   // }

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

function getGameWinner() {
   let arrWin = [getRoundWinner(1), getRoundWinner(2), getRoundWinner(3)];

   let p1 = arrWin.filter(function (item) {
      return item === "Player One";
   }).length;

   let p2 = arrWin.filter(function (item) {
      return item === "Player Two";
   }).length;

   // if (p1 > p2) {
   //    return "Player One";
   // } else if (p1 < p2) {
   //    return "Player Two";
   // } else {
   //    return "Tie";
   // }

   return p1 > p2 ? "Player One" : p1 < p2 ? "Player Two" : "Tie";
}
