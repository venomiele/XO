let sections = document.querySelectorAll(".common");
let container = document.querySelector(".container");
let player = document.querySelector(".player");
let a = document.querySelector(".a");
let b = document.querySelector(".b");
let c = document.querySelector(".c");
let d = document.querySelector(".d");
let e = document.querySelector(".e");
let f = document.querySelector(".f");
let g = document.querySelector(".g");
let h = document.querySelector(".h");
let i = document.querySelector(".i");
let clickCounter = 0;
let p1 = undefined;
let p2 = undefined;


 sections.forEach(section => {
    section.addEventListener("click", function click() {
      // Check if the box contains class and if so it can't be clicked again
        section.classList.add("clicking");
        clickCounter++;
       // Check the player's turn
       if(clickCounter % 2 == 0) {
        player.innerHTML = `Player <span>X</span>'s turn!`
        section.innerHTML = "O";
       } else {
        player.innerHTML = `Player <span>O</span>'s turn!`
           section.innerHTML = "X";
       }

       // Win functions

       function winOfX() {
         player.innerHTML = `Player X has won!`;
         player.style.color = "red";
         setTimeout(function() {
           location.reload();
         },2500);
         return null;
       }

       function winOfY() {
         player.innerHTML = `Player O has won!`;
         player.style.color = "yellow";
         setTimeout(function() {
           location.reload();
         },2500);
         return null;
       }

       // Winning conditions of X (player1)
       if(a.innerHTML == "X" && b.innerHTML == "X" && c.innerHTML  == "X") {
         winOfX();
       } else if (a.innerHTML == "X" && d.innerHTML == "X" && g.innerHTML  == "X") {
         winOfX();
       } else if (b.innerHTML == "X" && e.innerHTML == "X" && h.innerHTML  == "X") {
         winOfX();
       } else if (c.innerHTML == "X" && f.innerHTML == "X" && i.innerHTML  == "X") {
         winOfX();
       } else if (d.innerHTML == "X" && e.innerHTML == "X" && f.innerHTML  == "X") {
         winOfX();
       } else if (g.innerHTML == "X" && h.innerHTML == "X" && i.innerHTML  == "X") {
         winOfX();
       } else if (a.innerHTML == "X" && e.innerHTML == "X" && i.innerHTML  == "X") {
         winOfX();
       } else if (c.innerHTML == "X" && e.innerHTML == "X" && g.innerHTML  == "X") {
         winOfX();
       }

       // Winning conditions of O (player2)

       if(a.innerHTML == "X" && b.innerHTML == "X" && c.innerHTML  == "X") {
         winOfY();
                } else if (a.innerHTML == "O" && d.innerHTML == "O" && g.innerHTML  == "O") {
                  winOfY();
                } else if (b.innerHTML == "O" && e.innerHTML == "O" && h.innerHTML  == "O") {
                  winOfY();
                } else if (c.innerHTML == "O" && f.innerHTML == "O" && i.innerHTML  == "O") {
                  winOfY();
                } else if (d.innerHTML == "O" && e.innerHTML == "O" && f.innerHTML  == "O") {
                  winOfY();
                } else if (g.innerHTML == "O" && h.innerHTML == "O" && i.innerHTML  == "O") {
                  winOfY();
                } else if (a.innerHTML == "O" && e.innerHTML == "O" && i.innerHTML  == "O") {
                  winOfY();
                } else if (c.innerHTML == "O" && e.innerHTML == "O" && g.innerHTML  == "O") {
                  winOfY();
                }

                //Draw conditions

   if(container.getElementsByClassName("clicking").length == 9 && winOfY !== null && winOfX !== null ) {
      player.innerHTML = `Is a draw!`;
      setTimeout(function() {
        location.reload();
      },2500);
    };
    
    });




 });
window.addEventListener("DOMContentLoaded", () => {
player.innerHTML = `Player <span>X</span>'s turn!`
})

