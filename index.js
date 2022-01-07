let sections = document.querySelectorAll(".common");
let player = document.querySelector(".player");
let score = [];
let clickCounter = 0;
let p1 = undefined;
let p2 = undefined;


 sections.forEach(section => {
    section.addEventListener("click", function click() {
        // Check if the box contains class and if so it can't be clicked again
        section.classList.add("clicking");
        clickCounter++;
        if(section.classList.contains("clicking")) {

        }

       // Check the player's turn
       if(clickCounter % 2 == 0) {
        player.innerHTML = `Player <span>1</span>'s turn!`
        section.innerHTML = "O";
       } else {
        player.innerHTML = `Player <span>2</span>'s turn!`
           section.innerHTML = "X";
       }

    });

 });
window.addEventListener("DOMContentLoaded", () => {
player.innerHTML = `Player <span>1</span>'s turn!`
})

