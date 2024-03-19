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