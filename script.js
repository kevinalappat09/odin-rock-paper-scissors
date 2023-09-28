function get_computer_choice() {
    //Returns a random value between 1 and 3
    let rand_choice = Math.floor((Math.random() * 3)+1);
    switch(rand_choice) {
        case 1 :
            return "rock";
            break;
        case 2 : 
            return "paper";
            break;
        case 3 : 
            return "scissors";
            break;
    }
    return null;
}

function play_round(user_choice, computer_choice) {
    //Ensures that user string is case insensitive
    user_choice = user_choice.toLowerCase();
    console.log(`You chouse ${user_choice} & the computer chose ${computer_choice}`);
    if(user_choice==computer_choice) {
        console.log("It's a tie");
        return 0;
    } else if(user_choice=="rock" && computer_choice=="paper") {
        console.log(`Paper beats rock, Computer Wins!`);
        return -1;
    } else if(user_choice=="rock" && computer_choice=="scissors") {
        console.log(`Rock beats scissors, User Wins!`);
        return 1;
    } else if(user_choice=="paper" && computer_choice=="rock") {
        console.log(`Paper beats rock, User Wins!`);
        return 1;
    } else if(user_choice=="paper" && computer_choice=="scissors") {
        console.log(`Scissor beats paper, Computer Wins!`);
        return -1;
    } else if(user_choice=="scissors" && computer_choice=="rock") {
        console.log(`Rock beats scissors, Computer Wins!`);
        return -1;
    } else if(user_choice=="scissors" && computer_choice=="paper") {
        console.log(`Scissors beats paper. User Wins!`);
        return 1;
    }
}

function get_user_input() {
    let user_input = prompt("Enter your choice for this round ");
    return user_input;
}

function game() {
    let score_count = 0;
    user_input = get_user_input();
    score_count += play_round(user_input,get_computer_choice());

    user_input = get_user_input();
    score_count += play_round(user_input,get_computer_choice());

    user_input = get_user_input();
    score_count += play_round(user_input,get_computer_choice());

    user_input = get_user_input();
    score_count += play_round(user_input,get_computer_choice());

    user_input = get_user_input();
    score_count += play_round(user_input,get_computer_choice());

    return score_count;
}

let final_score = game();
console.log(final_score);