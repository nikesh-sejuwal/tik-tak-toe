const titleName = document.getElementById("titleName");
const secondName = document.querySelector("#secondName");
const button = document.querySelector(".butt");
const box = Array.from(document.getElementsByClassName("box"));

char_O = "O";
char_X = "X";
current = char_X;

let winners = [
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
   [0, 4, 8],
   [2, 4, 6],
];

function ChooseWinner() {
   winnerFound = false;
   for (let [a, b, c] of winners) {
      if (
         box[a].textContent &&
         box[a].textContent === box[b].textContent &&
         box[a].textContent === box[c].textContent
      ) {
         const win = box[a].textContent + " HAS WON";
         titleName.textContent = win;
         secondName.textContent = "Game finished, Reset to play again";
         winnerFound = true;

         box.forEach((element) => {
            element.removeEventListener("click", player);
         });
         return winnerFound;
      }
   }
   if (
      !winnerFound &&
      box.every((element) => element.textContent.trim() !== "")
   ) {
      titleName.textContent = "It's a draw!";
      secondName.textContent = "Game finished, Reset to play again";
   }
}

const gameBoard = () => {
   box.forEach((element) => {
      element.addEventListener("click", player);
   });
};

function player(element) {
   const clickedBox = element.target;

   if (!clickedBox.textContent.trim()) {
      clickedBox.innerText = current;
      current = clickedBox.innerText;
      if (current === char_X) {
         current = char_O;
      } else current = char_X;
   }
   ChooseWinner();
}

function restart() {
   gameBoard();
   titleName.innerHTML = "TIC TAC TOE";
   secondName.innerHTML = `Let's play`;
   // let e = event.target;
   box.forEach((element) => {
      element.textContent = "";
   });
   current = char_X;
}

gameBoard();
button.addEventListener("click", restart);
