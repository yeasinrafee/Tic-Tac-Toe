"use strict";
const cells = document.querySelectorAll(".cell");
const Game = (function () {
  const cellArray = [];
  cells.forEach((cell) => cellArray.push(cell));
  let turn = "X";

  //Function for changing turn:
  const changeTurn = () => {
    return turn === "X" ? "O" : "X";
  };

  //Function for checking who win:
  const checkWinner = () => {};

  //Game logic:
  cellArray.forEach((element) => {
    element.addEventListener("click", () => {
      if (element.innerText === "") {
        element.innerText = turn;
        turn = changeTurn();
        document.querySelector(".text").innerText = `Player ${turn}'s Turn`;
      }
    });
  });

  console.log(cellArray[0].getAttribute("data-set"));
  console.log(cellArray[0].innerText);
})();
