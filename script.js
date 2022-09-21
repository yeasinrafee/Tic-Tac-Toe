"use strict";
const cells = document.querySelectorAll(".cell");
const Game = (function () {
  const cellArray = [];
  cells.forEach((cell) => cellArray.push(cell));
  let turn = "X";
  let gameOver = false;

  //Function for changing turn:
  const changeTurn = () => {
    return turn === "X" ? "O" : "X";
  };

  //Function for checking who win:
  const checkWinner = () => {
    let wins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    wins.forEach((e) => {
      if (
        cellArray[e[0]].innerText === cellArray[e[1]].innerText &&
        cellArray[e[2]].innerText === cellArray[e[1]].innerText &&
        cellArray[e[0]].innerText !== ""
      ) {
        document.querySelector(".text").innerText = `Player ${
          cellArray[e[0]].innerText
        } Won!`;
        gameOver = true;
      }
    });
  };

  //Game logic:
  cellArray.forEach((element) => {
    element.addEventListener("click", () => {
      if (element.innerText === "") {
        element.innerText = turn;
        turn = changeTurn();
        checkWinner();
        if (!gameOver) {
          document.querySelector(".text").innerText = `Player ${turn}'s Turn`;
        }
      }
    });
  });

  console.log(cellArray[0].getAttribute("data-set"));
  console.log(cellArray[0].innerText);
})();
