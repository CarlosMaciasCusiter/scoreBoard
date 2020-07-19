let p1Button = document.querySelector("#p1");
let p2Button = document.getElementById("p2");
let p1Display = document.querySelector("#p1Display");
let p2Display = document.querySelector("#p2Display");
let resetButton = document.querySelector("#reset");
let numInput = document.querySelector("input");
let winningScoreDisplay = document.querySelector("p span");
let p1Score = 0;
let p2Score = 0;
let gameOver = false;
let winningScore = 5;

p1Button.addEventListener("click", function(){
    if(!gameOver) {
        p1Score++;
        //console.log(p1Score);
        if(p1Score === winningScore) {
            p1Display.classList.add("winner");
            console.log("Game Over!");
            gameOver=true;
        }
        p1Display.textContent = p1Score;   
    }
    
});

p2Button.addEventListener("click", function(){
    if(!gameOver) {
        p2Score++;
        //console.log(p1Score);
        if(p2Score === winningScore) {
            p1Display.classList.add("winner");
            console.log("Game Over!");
            gameOver=true;
        }
        p2Display.textContent = p2Score;   
    }
    
});

resetButton.addEventListener("click", function(){
    reset();
});

numInput.addEventListener("change", function(){
    winningScoreDisplay.textContent = this.value;
    winningScore = Number(this.value);
    reset();
});

function reset() {
    p1Score = 0;
    p2Score = 0;
    gameOver = false;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score; 
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
}