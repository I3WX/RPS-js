const btnRock = document.getElementById("Rock");
const btnPaper = document.getElementById("Paper");
const btnScissor = document.getElementById("Scissor");
const End = document.getElementById("End");
const winner = document.getElementById("winner");
const result = document.getElementById("result");
let user_choice = "";
let draw = 0;
let user_win = 0;
let pc_win = 0;

btnRock.addEventListener("click", function() {
    user_choice = "rock";
    playGame();
});

btnPaper.addEventListener("click", function() {
    user_choice = "paper";
    playGame();
});

btnScissor.addEventListener("click", function() {
    user_choice = "scissor";
    playGame();
});
End.addEventListener("click", function(){
    result = `You won : ${user_win}\nPc won : ${pc_win}\n Draw : ${draw}`
    winner.innerHTML = result
})

function get_pc_choice() {
    const choice = ['rock', 'paper', 'scissor'];
    const index = Math.floor(Math.random() * choice.length);
    return choice[index];
}

function check_the_winner(user_choice, pc_choice) {
    if (user_choice === pc_choice) {
        result.innerHTML = `You and PC both chose ${pc_choice}\nIt's a draw!`;
        draw += 1;
    } else if ((user_choice === 'rock' && pc_choice === 'scissor') ||
               (user_choice === 'paper' && pc_choice === 'rock') ||
               (user_choice === 'scissor' && pc_choice === 'paper')) {
        result.innerHTML = `Your ${user_choice} beats PC's ${pc_choice}\nYou win!`;
        user_win += 1;
    } else {
        result.innerHTML = `PC's ${pc_choice} beats your ${user_choice}\nPC wins!`;
        pc_win += 1;
    }
}

function playGame() {
        if(pc_win == 5 || user_win == 5){
            if (pc_win==5){
                winner.innerHTML = "pc win the game"; 
            }
            else{
                winner.innerHTML = "you win the game"; 
            }
        }
        else{
            if(user_choice == "rock" || user_choice == "paper" || user_choice == "scissor"){
                let pc_choise = get_pc_choice();
                check_the_winner(user_choice,pc_choise);
            }
        }
        
    }







