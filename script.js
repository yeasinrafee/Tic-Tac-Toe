"use strict";
const cells = document.querySelectorAll(".cell");
const restart = document.querySelector(".btn-restart");

// Module function for the game:
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
        document.querySelector(".sugg").classList.remove("display");
        gameOver = true;

        //for line animation:
        //document.querySelector(".line").style = "200px";
        // document.querySelector(".line").style.transform = `translate(${e[]}px, ${e[]}px) rotate(${e[]}deg)`;
      }
    });
  };

  //Game logic:

  cellArray.forEach((element) => {
    element.addEventListener("click", (e) => {
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
  //Building Restart Button:
  restart.addEventListener("click", () => {
    cellArray.forEach((element) => {
      element.innerText = "";
    });
    turn = "X";
    gameOver = false;
    // document.querySelector(".line").style.width = "0px";
    document.querySelector(".text").innerText = `Player ${turn}'s Turn`;
  });
})();
