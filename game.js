user_win = 0;
pc_win = 0 ;
draw = 0;
matchPlayed = 0;
function main(){
    while (matchPlayed <= 5) {
            let user_choice = get_user_choice();
            if (user_choice == "q"){
                break
            }
            else if(user_choice == "rock" || user_choice == "paper" || user_choice == "scissor"){
                let pc_choise = get_pc_choice();
                check_the_winner(user_choice,pc_choise);
            }
            else{
                alert("Invalid input\Try again....")
            }
        matchPlayed += 1;
        }
    alert(`You won : ${user_win}\nPc won : ${pc_win}\n Draw : ${draw}`)
    }
function get_user_choice(){
    let choice = prompt('Rock\nPaper\nScissor\n (enter q to exit) :');
    return choice.toLowerCase();
}
function get_pc_choice(){
    const choice = ['rock' ,'paper','scissor'];
    index = Math.floor(Math.random()* choice.length);
    console.log(choice[index])
    return choice[index];

}
function check_the_winner(user_choice , pc_choise){
    if(user_choice == pc_choise){
        alert(`you and pc bot choose ${pc_choise}\nWhat a coincidence😅`);
        draw += 1;
    }
    else if (user_choice == 'rock' && pc_choise == 'scissor'){
        alert("your rock beat pc's scissor 🎉🎉");
        user_win += 1; 
    }
    else if (user_choice == 'paper' && pc_choise == 'rock'){
        alert("your paper beat pc's rock 🎉🎉");
        user_win += 1; 
    }
    else if (user_choice == 'scissor' && pc_choise == 'paper'){
        alert("your scissor beat pc's paper 🎉🎉");
        user_win += 1; 
    }
    else if (user_choice == 'scissor' && pc_choise == 'rock'){
        alert("pc's rock beat yours scissor☹️☹️");
        pc_win += 1; 
    }
    else if (user_choice == 'rock' && pc_choise == 'paper'){
        alert("pc's paper beat yours rock☹️☹️");
        pc_win += 1; 
    }
    else if (user_choice == 'paper' && pc_choise == 'scissor'){
        alert("pc's scissor beat yours paper☹️☹️");
        pc_win += 1; 
    }
    else{
        alert('System Error');
    }
}


main()