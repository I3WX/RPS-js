const choice = ['rock','paper','scissor'];

function main(){
    let user_choice = get_user_choice();
    let pc_choise = get_pc_choice();
}

function get_user_choice(){
    let choice = prompt('Rock\nPaper\nScissor\n:');
    return choice.toLowerCase();
}
function get_pc_choice(){
    choice = choice[Math.floor(Math.random()* choice.length)];
    return choice.toLowerCase();
}
function check_the_winner(user_choice , pc_choise){
    if(user_choice == pc_choise){
        console.log(`you and pc bot choose ${pc_choise}\nWhat a coincidence😅`)
    }
    else if (user_choice == 'rock' && pc_choise == 'scissor'){
        console.log("your rock beat pc's paper")
    }
    else if (user_choice == 'paper' && pc_choise == 'rock'){
        console.log("your paper beat pc's rock")
    }
    else if (user_choice == 'scissor' && pc_choise == 'paper'){
        console.log("your scissor beat pc's paper")
    }
    else if (user_choice == 'scissor' && pc_choise == 'rock'){
        console.log("pc's rock beat yours scissor")
    }
    else if (user_choice == 'rock' && pc_choise == 'paper'){
        console.log("pc's paper beat yours rock")
    }
    else if (user_choice == 'paper' && pc_choise == 'scissor'){
        console.log("pc's scissor beat yours paper")
    }
    else{
        console.log('System Error')
    }
}