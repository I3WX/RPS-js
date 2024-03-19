

function main(){
    let user_choice = get_user_choice();
    let pc_choise = get_pc_choice();
    check_the_winner(user_choice,pc_choise)
}

function get_user_choice(){
    let choice = prompt('Rock\nPaper\nScissor\n(q to exit):');
    if (choice == 'q' || choice == 'Q'){
        return choice.toLowerCase();
    }
}
function get_pc_choice(){
    const choice = ['rock' ,'paper','scissor'];
    index = Math.floor(Math.random()* choice.length);
    console.log(choice[index])
    return choice[index];

}
function check_the_winner(user_choice , pc_choise){
    if(user_choice == pc_choise){
        alert(`you and pc bot choose ${pc_choise}\nWhat a coincidence😅`)
    }
    else if (user_choice == 'rock' && pc_choise == 'scissor'){
        alert("your rock beat pc's paper")
    }
    else if (user_choice == 'paper' && pc_choise == 'rock'){
        alert("your paper beat pc's rock")
    }
    else if (user_choice == 'scissor' && pc_choise == 'paper'){
        alert("your scissor beat pc's paper")
    }
    else if (user_choice == 'scissor' && pc_choise == 'rock'){
        alert("pc's rock beat yours scissor")
    }
    else if (user_choice == 'rock' && pc_choise == 'paper'){
        alert("pc's paper beat yours rock")
    }
    else if (user_choice == 'paper' && pc_choise == 'scissor'){
        alert("pc's scissor beat yours paper")
    }
    else{
        alert('System Error')
    }
}


main()